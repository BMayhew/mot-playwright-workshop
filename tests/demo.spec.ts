// https://playwright.dev/docs/api/class-test
// Each test has final line which calls an asynchronous function to run the same test from a non spec file.
// This is to demonstrate how you can use helpers to create/setup data for you within your tests

import { test, expect } from "@playwright/test";
import { browserExample, apiExample } from "../lib/demoFile";

test("basic test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const name = await page.innerText(".navbar__title");
  expect(name).toBe("Playwright");

  await browserExample();
});

test("basic api test", async ({ request }) => {
  const response = await request.get("https://playwright.dev");
  await expect(response).toBeOK();

  await apiExample();
});
