# Continue using Advanced Playwright Features

Now that we have a good bit of examples we've written let's go ahead and remove the default examples playwright offers us.

* detailedExample.spec.ts
* example.spec.ts
* /tests-examples/demo-todo-app.spec.ts (directory and file)

I'll also go ahead and create 1 additional example file, these files will show off how we can use the browser and api requests outside of a test block in our Playwright codebase. We also show off how to import async functions so we can keep our code as clean as possible.

* demo.spec.ts
* /lib/demoFile.ts

I'll also go ahead and add an api folder with `booking.get.spec.ts` which shows off how you can add api test coverage with playwright.
