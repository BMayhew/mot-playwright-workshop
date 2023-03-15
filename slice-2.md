# Wring our first Playwright Test

Let's create a test that visits <https://automationintesting.online>

Let's do this by using Playwright VS Code extension code generator integration to record a simple script. To do this use the command pallet (View -> Command Pallet or (windows) Ctrl + Shift + P | (mac) Cmd + Shift + P) and type in `> Test: Record New`

Begin recording the steps:

* Visit <https://automationintesting.online>
* Click "Let me Hack" button
* Click Admin panel (at very bottom)
* Click username
* Fill username with `admin`
* click password
* Fill password with `password`
* Click Submit
* Click Logout

This will create a script named test-1.spec.ts in your tests folder. From there inspect the results, and view the DOM of the page to see which locators were chosen.

So far we don't have a test, we just have the browser doing some things for us, we need to decide how we will determine how can we check to ensure we were logged in, and how do we check if we were logged out?

* Now add those assertions!!!!

If anyone is getting any weird timeout errors it's probably because you are missing an await when interacting with the `page.xxxx` in your assertions.

* Let's make the test fail, and make sure we can view the HTML report with trace file and video.

* Uh'Oh we don't see a screenshot, let's add `screenshot: "only-on-failure",` to the `playwright.config.ts` file in the `use:` section.

## Nice Links to check out

* [Playwright Locators](https://playwright.dev/docs/api/class-locator)

## Is a test really a test without an assertion?

* [Playwright Locator Specific Assertions](https://playwright.dev/docs/api/class-locatorassertions)
* [Playwright Page Specific Assertions](https://playwright.dev/docs/api/class-pageassertions)
* [Playwright Generic Assertions](https://playwright.dev/docs/api/class-genericassertions)

## Additional helpful links

* [Playwright Test Class: describe, test, beforeAll, beforeEach, etc](https://playwright.dev/docs/api/class-test)
