// https://playwright.dev/docs/api/class-test
// This is an example of how to use API requests and the browser functionality outside of the test block

import { chromium, request, expect } from "@playwright/test";

export async function browserExample() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://playwright.dev/");
  const name = await page.innerText(".navbar__title");
  expect(name).toBe("Playwright");
  await browser.close();
  console.log("ran browser example");
}

export async function apiExample() {
  const requestContext = await request.newContext();
  const response = await requestContext.get("https://playwright.dev");
  await expect(response).toBeOK();
  console.log("ran api example");
}
