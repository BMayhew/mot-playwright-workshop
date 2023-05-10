import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('button', { name: 'Let me hack!' }).click();
  await page.getByRole('link', { name: 'Admin panel' }).click();
  await page.getByTestId('username').click();
  await page.getByTestId('username').fill('admin');
  await page.getByTestId('username').press('Tab');
  await page.getByTestId('password').fill('password');
  await page.getByTestId('submit').click();
  const logoutLink = page.getByRole("link", { name: "Logout" })

  await expect(logoutLink).toBeInViewport();
  await expect(logoutLink).toHaveText("Logout");

  // await logoutLink.click();

  const responsePromise = page.waitForResponse("https://automationintesting.online/auth/logout");
  await logoutLink.click();
  const response = await responsePromise; 

  await expect(logoutLink).not.toBeInViewport();

  // await test.step("logout step", asyncn)

  // await page.getByRole('link', { name: 'Logout' }).click();
});