# Installing and Running Playwright

Following the getting started guide: https://playwright.dev/docs/intro

Select the following options

* `TypeSCript`
* `tests`
* `y`
* `y`

This will create a base project for you along with a few example tests.

We will also go ahead and update the `playwright.config.ts` adding the following lines to the `use` section of the config.

```javascript
ignoreHTTPSErrors: true,
video: "retain-on-failure",
trace: "retain-on-failure",
baseURL: "https://automationintesting.online",
```

Also go ahead and comment out the firefox and webkit projects, this will allow us to run our tests faster, we can always uncomment them later when we are running our automation to ensure everything works properly.

The full `playwright.config.ts` should now be

```javascript
#playwright.config.ts
import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    trace: "retain-on-failure",

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "https://automationintesting.online",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { channel: 'chrome' },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
});
```

Install: [VS Code Playwright Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

Next make sure that your specs will run with the command

`npx playwright test`

This should run 2 tests with two workers and they should pass, note the browser didn't pop up by default the browsers will run in headless mode, though there is a flag you can enable under the use section  `headless: false,` of the config or you can run the command `npx playwright test --headed` and the browsers should appear.

More Command Line info <https://playwright.dev/docs/test-cli>

## Let's move to slice-2
