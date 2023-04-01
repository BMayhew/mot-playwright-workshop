# Creating Page Objects

We will be using the Page Object Model (POM) for short to help us create a more maintainable and readable codebase. This will also help us to keep our tests as clean as possible.

Creating new files

* tests/login.pom.spec.ts
* lib/pages/admin.page.ts (note I named this admin because the url is /#/admin)

We will use <https://playwright.dev/docs/pom> as our guide in creating our page objects. One change we made from the docs was to create the `constructor` in a way where we don't have to repeat ourselves.

`constructor(private readonly page: Page) {}`

I've also created a 2nd test which uses an async function that takes in a username and password and clicks submit button to login from the spec file.

I also edited the package.json file to add a new script to run the tests.

`npm run test` - will run all tests
`npm run ui` - will run playwright in UI mode, a feature introduced in 1.32.0
  