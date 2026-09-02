import { expect, test } from "@playwright/test";

const NAP_PHONE = "705-321-8146";
const NAP_STREET = "34 County Rd 6 South";
const NAP_CITY = "Tiny";
const NAP_POSTAL = "L0L 2J0";

const FAQ_QUESTIONS = [
  "Where is the office?",
  "What are the hours?",
  "Is care in person or virtual?",
  "Do I need a referral?",
  "How do I book a consultation?",
];

function jsonLdBlocks(html: string): unknown[] {
  const matches = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    ),
  ];
  return matches.map((match) => JSON.parse(match[1]));
}

test.describe("ranking eligibility", () => {
  test("FAQ page is crawlable HTML with matching FAQPage JSON-LD", async ({
    page,
  }) => {
    const response = await page.goto("/faq");
    expect(response?.status()).toBe(200);

    const html = await page.content();
    expect(html).not.toMatch(/noindex/i);

    for (const question of FAQ_QUESTIONS) {
      await expect(page.getByText(question, { exact: true })).toBeVisible();
      expect(html).toContain(question);
    }

    expect(html).toContain(NAP_STREET);
    expect(html).toContain(NAP_PHONE);
    expect(html).toContain("Monday through Saturday");
    expect(html).toContain(
      "In Person and Virtual Services are Available",
    );

    const blocks = jsonLdBlocks(html);
    const faq = blocks.find(
      (block) =>
        typeof block === "object" &&
        block !== null &&
        (block as { "@type"?: string })["@type"] === "FAQPage",
    ) as { mainEntity?: { name: string; acceptedAnswer: { text: string } }[] };

    expect(faq?.mainEntity?.length).toBeGreaterThanOrEqual(FAQ_QUESTIONS.length);
    for (const question of FAQ_QUESTIONS) {
      const entity = faq.mainEntity?.find((item) => item.name === question);
      expect(entity?.acceptedAnswer.text.length).toBeGreaterThan(20);
    }
  });

  test("Tiny landing is unique local content with real NAP", async ({
    page,
  }) => {
    const response = await page.goto("/neuropsychology-in-tiny");
    expect(response?.status()).toBe(200);

    const html = await page.content();
    expect(html).not.toMatch(/noindex/i);
    expect(html).toContain(NAP_STREET);
    expect(html).toContain(NAP_CITY);
    expect(html).toContain(NAP_POSTAL);
    expect(html).toContain(NAP_PHONE);
    expect(html).toContain("Monday through Saturday");

    await expect(
      page.getByRole("heading", { level: 1 }),
    ).toContainText("Tiny");
    await expect(
      page
        .locator("#main-content")
        .getByRole("link", { name: "Book a Free 15-Minute Consultation" }),
    ).toBeVisible();
    await expect(
      page
        .locator("#main-content")
        .getByRole("link", { name: "Common questions" }),
    ).toBeVisible();
  });

  test("MedicalClinic JSON-LD uses Tiny NAP and omits invented geo or ratings", async ({
    page,
  }) => {
    await page.goto("/");
    const html = await page.content();
    const blocks = jsonLdBlocks(html);
    const clinic = blocks.find((block) => {
      if (typeof block !== "object" || block === null) return false;
      const type = (block as { "@type"?: string | string[] })["@type"];
      const types = Array.isArray(type) ? type : [type];
      return types.includes("MedicalClinic");
    }) as {
      name?: string;
      telephone?: string;
      address?: Record<string, string>;
      geo?: unknown;
      aggregateRating?: unknown;
      openingHoursSpecification?: unknown;
      hasMap?: string;
    };

    expect(clinic?.name).toContain("Center for Neuropsychology");
    expect(clinic?.telephone).toBe("+17053218146");
    expect(clinic?.address?.streetAddress).toBe(NAP_STREET);
    expect(clinic?.address?.addressLocality).toBe(NAP_CITY);
    expect(clinic?.address?.postalCode).toBe(NAP_POSTAL);
    expect(clinic?.openingHoursSpecification).toBeTruthy();
    expect(clinic?.geo).toBeUndefined();
    expect(clinic?.aggregateRating).toBeUndefined();
    // Verified Maps listing (CID link) — must stay a maps.google.com URL.
    expect(clinic?.hasMap).toMatch(/^https:\/\/maps\.google\.com\/\?cid=\d+$/);
  });

  test("share previews use a PNG card and each page's own title", async ({
    page,
    request,
  }) => {
    // SVG og:image is ignored by Facebook/LinkedIn/iMessage — must be PNG.
    await page.goto("/faq");
    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveAttribute("content", /\/og-image\.png$/);
    const png = await request.get("/og-image.png");
    expect(png.status()).toBe(200);
    expect(png.headers()["content-type"]).toContain("image/png");

    // Per-page title/description must flow into OG + Twitter tags.
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /^Common questions/,
    );
    await expect(
      page.locator('meta[property="og:description"]'),
    ).toHaveAttribute("content", /consultation/i);
    await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
      "content",
      /^Common questions/,
    );

    // Touch icon + manifest exist (no visual change on the site).
    await expect(page.locator('link[rel="apple-touch-icon"]')).toHaveCount(1);
    const manifest = await request.get("/manifest.webmanifest");
    expect(manifest.status()).toBe(200);
    expect((await manifest.json()).name).toContain(
      "Center for Neuropsychology",
    );
  });

  test("WebSite schema names the practice and clinicians have Person schema", async ({
    page,
  }) => {
    await page.goto("/");
    const homeBlocks = jsonLdBlocks(await page.content());
    const website = homeBlocks.find(
      (block) =>
        (block as { "@type"?: string })["@type"] === "WebSite",
    ) as { name?: string; url?: string } | undefined;
    expect(website?.name).toContain("Center for Neuropsychology");
    expect(website?.url).toMatch(/\/$/);

    await page.goto("/clinicians");
    const blocks = jsonLdBlocks(await page.content());
    const graph = blocks.find(
      (block) => Array.isArray((block as { "@graph"?: unknown[] })["@graph"]),
    ) as { "@graph": { "@type": string; name: string; jobTitle: string }[] };
    const people = graph["@graph"].filter((n) => n["@type"] === "Person");
    expect(people.map((p) => p.name)).toEqual([
      "Dr. Sylvie Sauriol",
      "Sebastian Jose",
    ]);
    // Schema must match the visible bios.
    for (const person of people) {
      await expect(page.getByText(person.name).first()).toBeVisible();
    }
    expect(people[1].jobTitle).toBe("Registered Psychotherapist (Qualifying)");
  });

  test("sitemap lists the new ranking URLs and robots allow crawling", async ({
    request,
  }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.status()).toBe(200);
    const xml = await sitemap.text();
    expect(xml).toContain("/faq/");
    expect(xml).toContain("/neuropsychology-in-tiny/");
    expect(xml).not.toContain("/owner/google-ranking");
    // lastmod must be a real git date, not "now" — Google ignores fake ones.
    // A git date is stable between two requests; `new Date()` is not.
    const readLastmods = (text: string) =>
      [...text.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
    const lastmods = readLastmods(xml);
    expect(lastmods.length).toBeGreaterThan(0);
    for (const iso of lastmods) {
      const t = new Date(iso).getTime();
      expect(Number.isNaN(t)).toBe(false);
      expect(t).toBeLessThanOrEqual(Date.now());
    }
    const again = await (await request.get("/sitemap.xml")).text();
    expect(readLastmods(again)).toEqual(lastmods);

    const robots = await request.get("/robots.txt");
    expect(robots.status()).toBe(200);
    const robotsText = await robots.text();
    expect(robotsText).toMatch(/Allow:\s*\//);
    expect(robotsText).toContain("sitemap.xml");
  });

  test("Home, Contact, Clinicians, and Footer link to FAQ and Tiny pages", async ({
    page,
  }) => {
    for (const route of ["/", "/contact", "/clinicians"]) {
      await page.goto(route);
      await expect(
        page.getByRole("link", { name: /Neuropsychology in Tiny/i }).first(),
      ).toBeVisible();
      await expect(
        page.getByRole("link", { name: /Common questions/i }).first(),
      ).toBeVisible();
    }

    await page.goto("/");
    const footer = page.locator("footer");
    await expect(
      footer.getByRole("link", { name: /Neuropsychology in Tiny/i }),
    ).toBeVisible();
    await expect(
      footer.getByRole("link", { name: /Common questions/i }),
    ).toBeVisible();
  });

  test("owner checklist shows only owner items", async ({ page }) => {
    const response = await page.goto("/owner/google-ranking");
    expect(response?.status()).toBe(200);

    const html = await page.content();
    expect(html).toMatch(/noindex/i);

    await expect(
      page.getByRole("heading", { name: /owner checklist/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Ask for a Google review at every happy visit",
      }),
    ).toBeVisible();
    await expect(page.getByText(/Google Business Profile/i).first()).toBeVisible();

    await expect(page.getByText(/Write failing tests/i)).toHaveCount(0);
    await expect(page.getByText(/Search Console URL inspection/i)).toHaveCount(
      0,
    );
    await expect(page.getByText(/agent already did/i)).toHaveCount(0);
  });
});
