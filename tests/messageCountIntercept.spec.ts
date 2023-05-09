import { test, expect, selectors } from "@playwright/test";
import { AdminPage } from "../lib/pages/admin.page";

test.describe("/admin Checks", async () => {
  test.beforeAll(async () => {
    selectors.setTestIdAttribute("data-testid");
  });

  test(`Validate Message Count is correct`, async ({ page }) => {
    let message;

    await page.route("**/message/count", async (route) => {
      const response = await route.fetch();
      message = await response.json();
      route.continue();
    });

    const adminPage = new AdminPage(page);
    await adminPage.goto();

    await adminPage.letMeHack.click();
    await adminPage.username.fill("admin");
    await adminPage.password.fill("password");
    await adminPage.submit.click();

    await expect(adminPage.logoutLink).toHaveText("Logout");

    // Wait for the message count to be updated before making an assertion
    await page.waitForLoadState("networkidle");
    await expect(adminPage.messageCountSpan).toHaveText(`${message.count}`);
  });
});
