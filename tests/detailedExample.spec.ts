import { test, expect } from "@playwright/test";

// Describe block is useful for grouping certain tests
test.describe("/developers/api-keys checks", () => {
  // Any variables created here will only be available within the overall describe block

  // Before hook that allows us to run code before each test
  test.beforeEach(async ({ context }) => {
    // before code goes here
  });

  // After hook that allows us to run code after each test
  test.afterEach(async () => {
    // after code goes here
  });

  // Test block used to describe the check you are writing
  test("Check empty API Keys table", async ({ page }) => {
    await page.goto("/");
  });
});
