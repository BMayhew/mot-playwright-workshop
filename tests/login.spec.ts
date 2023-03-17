import { test, expect } from "@playwright/test";

test("Login as Admin", async ({ page }) => {
  await page.goto("https://automationintesting.online/");
  await page.getByRole("button", { name: "Let me hack!" }).click();
  await page.getByRole("link", { name: "Admin panel" }).click();
  await page.getByTestId("username").click();
  await page.getByTestId("username").fill("admin");
  await page.getByTestId("password").click();
  await page.getByTestId("password").fill("password");
  await page.getByTestId("submit").click();

  const logoutLink = page.getByRole("link", { name: "Logout" });

  await expect(logoutLink).toBeInViewport();
  await expect(logoutLink).toBeVisible();
  await expect(logoutLink).toHaveText("Logout");

  await logoutLink.click();

  await page.waitForLoadState("networkidle");

  await expect(logoutLink).not.toBeInViewport();
  await expect(logoutLink).not.toBeVisible();
});
