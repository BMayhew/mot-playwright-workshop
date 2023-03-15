// https://playwright.dev/docs/api/class-test

import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const name = await page.innerText(".navbar__title");
  expect(name).toBe("Playwright");
});

test("basic browser test", async (context) => {
  const page = context.page;
  await page.goto("https://playwright.dev/");
  const name = await page.innerText(".navbar__title");
  expect(name).toBe("Playwright");
});

// test("basic api test", async ({ request }) => {
//   const response = await request.get("https://playwright.dev");
//   await expect(response).toBeOK();
// });

test("basic api test", async (context) => {
  const request = context.request;
  const response = await request.get("https://playwright.dev");
  await expect(response).toBeOK();
});

// page and request objects are being destructured in the commented out examples
// syntax sugar for pulling and object out of a property
