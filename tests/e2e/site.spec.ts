import { expect, test } from "@playwright/test";

const routes = [
  ["/", "Neuropsychological assessment and psychotherapy, centred on understanding."],
  ["/assessments", "Neuropsychological Assessments"],
  ["/clinicians", "Experienced care. A collaborative approach."],
  ["/psychotherapy", "Change can begin with being understood."],
  ["/education", "Clear information supports informed decisions."],
  ["/resources", "Practical information for preparing and finding support."],
  ["/contact", "Begin with a brief conversation."],
  ["/privacy", "Your information deserves careful treatment."],
] as const;

for (const [route, heading] of routes) {
  test(`${route} renders without overflow`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() !== "error") return;
      // Ignore Next.js HMR websocket noise during local `next dev`.
      if (message.text().includes("webpack-hmr")) return;
      errors.push(message.text());
    });

    await page.goto(route);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(heading);
    await expect(page.locator("body")).toBeVisible();

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    );
    expect(overflow).toBe(false);
    expect(errors).toEqual([]);
  });
}

test("mobile menu reveals all primary destinations", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "Mobile interaction only");
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();

  const mobileNav = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(mobileNav).toBeVisible();
  await expect(mobileNav.getByRole("link", { name: /Assessments/ })).toBeVisible();
  await expect(mobileNav.getByRole("link", { name: /Education/ })).toBeVisible();
  await mobileNav.getByRole("link", { name: /Clinicians/ }).click();
  await expect(page).toHaveURL(/\/clinicians\/?$/);
});

test("consultation request form completes its preview flow", async ({ page }) => {
  await page.goto("/contact");

  const booking = page.getByRole("region", { name: "Free consultation request" });
  await expect(booking).toHaveCSS("background-color", "rgb(250, 246, 240)");
  await expect(page.locator(".page-hero")).not.toHaveClass(/page-hero--blue/);

  await page
    .getByRole("region", { name: "Free consultation request" })
    .getByRole("button", { name: "Psychotherapy", exact: true })
    .click();
  await page.getByLabel("Your name").fill("Preview Client");
  await page.getByLabel("Email address").fill("preview@example.com");
  await page.getByLabel("Phone number").fill("705-555-0100");
  await page.getByRole("button", { name: "Submit consultation request" }).click();

  await expect(
    page.getByRole("dialog", { name: /Consultation requests aren’t sent yet/i }),
  ).toBeVisible();
  await expect(page.getByRole("dialog")).toContainText(
    "Your details were not sent or stored",
  );
  await page.getByRole("button", { name: "Continue browsing" }).click();

  await expect(page.getByRole("status")).toContainText(
    "Thank you — your request is ready to send.",
  );
});

test("unknown routes use the branded not-found experience", async ({ page }) => {
  await page.goto("/this-page-does-not-exist");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "This path doesn’t lead anywhere.",
  );
  await expect(page.getByRole("link", { name: /Return home/ })).toBeVisible();
});
