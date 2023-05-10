import { test, expect } from "@playwright/test";

test.describe("/admin Checks", async () => {
  test(`Validate Message Count`, async ({ page }) => {
    await page.goto("https://automationintesting.online/");
    await page.getByRole("button", { name: "Let me hack!" }).click();
    await page.getByRole("link", { name: "Admin panel" }).click();
    await page.getByTestId("username").click();
    await page.getByTestId("username").fill("admin");
    await page.getByTestId("password").click();
    await page.getByTestId("password").fill("password");

    // Using a Promise.all to wait for both the response and the click to complete before moving on
    const [request] = await Promise.all([
      page.waitForResponse((response) => response.url().includes("message")),
      page.getByTestId("submit").click(),
    ]);

    // Get the response body from the promise above which includes the count
    const response = await request.json();

    await expect(page.getByRole("link", { name: "Logout" })).toHaveText(
      "Logout"
    );

    const messageCountSpan = page
      .locator('[href*="#/admin/messages"]')
      .locator("span");

    // assert that the response count is what is visible in the UI
    await expect(messageCountSpan).toHaveText(response.count.toString());
  });
});
