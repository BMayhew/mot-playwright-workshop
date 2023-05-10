# Intercepting Network Traffic to get variables to assert with

In this short example I created a new spec `messageCountIntercept.spec.ts` to show how to intercept network traffic and get the number of messages in the inbox. I also update the `admin.page.ts` with additional locators needed.

I also create a new messageCountPromise.spec.ts to show how you can use a javascript promise in your tests in order to wait for a network response to be returned prior to proceeding, along with capturing the response and using that in your assertion.
