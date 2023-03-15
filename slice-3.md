# Using Advanced Playwright Features

Using test-1.spec.ts that was created in the previous section, we will make a copy and update the spec to show off how to intercept/mock network traffic.

Let's go ahead and copy that file and rename it to `messageCount.spec.ts`

We will refactor the `messageCount.spec.ts` spec to include

* describe block
* beforeEach() block
* an assertion on active message count
* make active message count consistent by mocking the network request
* Rename things so they describe what we are doing (typically you start with this step)

## Playwright Docs

* [Page Class - page.route()](https://playwright.dev/docs/api/class-page#page-route)
* [Route class](https://playwright.dev/docs/api/class-route)

### Different methods on route

`abort()`
Aborts the route's request.

`continue()`
Continues route's request with optional overrides.

`fallback()`
When several routes match the given pattern, they run in the order opposite to their registration. That way the last registered route can always override all the previous ones. In the example below, request will be handled by the bottom-most handler first, then it'll fall back to the previous one and in the end will be aborted by the first registered route.

`fetch()`

Performs the request and fetches result without fulfilling it, so that the response could be modified and then fulfilled.

`fulfill()`

Fulfills route's request with given response.

## More Links

* [Playwright Solutions](https://playwrightsolutions.com/) - A Blog/Newsletter I've been posting on once a week, sign up for weekly updates!
* [LinkedIn](https://www.linkedin.com/in/butchmayhew/) - Connect with me!
* [Twitter](https://twitter.com/ButchMayhew) - Connect with me!
* [Playwright Discord - Community](https://discord.gg/playwright-807756831384403968) - Lots of questions, answers, and discussion
* [Javascript Visualized Promises0async-awaits](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)
* [Your Feedback is a Gift to me!](https://forms.gle/UbpSfNi7XcWUmcu36) - Please let me know your thoughts, I'm always looking for areas to improve or  celebrating a success!
