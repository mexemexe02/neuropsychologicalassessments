import { expect, test } from "@playwright/test";

const routes = [
  ["/", "Clarity for what comes next."],
  ["/assessments", "Insight, built from evidence."],
  ["/psychotherapy", "Change can begin with being understood."],
  ["/clinicians", "Expertise, with humanity at its centre."],
  ["/resources", "Clear information makes care easier to navigate."],
  ["/contact", "Begin with a brief conversation."],
  ["/privacy", "Your information deserves careful treatment."],
] as const;

for (const [route, heading] of routes) {
  test(`${route} renders without overflow`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
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
  await mobileNav.getByRole("link", { name: /Clinicians/ }).click();
  await expect(page).toHaveURL(/\/clinicians\/?$/);
});

test("consultation calendar completes its responsive preview flow", async ({ page }) => {
  await page.goto("/contact");

  const booking = page.getByRole("region", { name: "Free consultation booking" });
  await expect(booking).toHaveCSS("background-color", "rgb(255, 254, 250)");
  await expect(page.locator(".page-hero")).not.toHaveClass(/page-hero--blue/);

  await page.getByRole("button", { name: /Psychotherapy/ }).click();
  await page.getByRole("button", { name: /Video call/ }).click();
  await page.getByRole("button", { name: "Continue to date and time" }).click();

  await expect(page.getByText("Choose a date")).toBeVisible();
  await page.locator(".booking-date").first().click();
  await page.getByRole("button", { name: "10:30 AM" }).click();
  await page.getByRole("button", { name: "Continue to your details" }).click();

  await page.getByLabel("Your name").fill("Preview Client");
  await page.getByLabel("Email address").fill("preview@example.com");
  await page.getByLabel("Phone number").fill("705-555-0100");
  await page.getByRole("button", { name: "Preview booking confirmation" }).click();

  await expect(page.getByRole("dialog", { name: /Online booking isn’t connected yet/i })).toBeVisible();
  await expect(page.getByRole("dialog")).toContainText("Your details were not sent or stored.");
  await page.getByRole("button", { name: "Continue browsing" }).click();

  await expect(page.getByRole("status")).toContainText(
    "Your consultation time is ready.",
  );
  await expect(page.getByRole("status")).toContainText(
    "No information was sent or stored.",
  );
});

test("unknown routes use the branded not-found experience", async ({ page }) => {
  await page.goto("/this-page-does-not-exist");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "This path doesn’t lead anywhere.",
  );
  await expect(page.getByRole("link", { name: /Return home/ })).toBeVisible();
});
