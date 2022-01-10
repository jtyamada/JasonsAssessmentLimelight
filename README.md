# Layer0 Software Engineer, Solution Engineering Candidate Assignment

We value your time and we don’t want to take more of your time than necessary, so the target is to **spend no more than 2 hours on the assignment.**

Note: This guide assumes that you’re using a Mac. Please let us know if you’re using a different device.

## Glossary
*These are some general terms common in eCommerce and when discussing performance improvement and used throughout this assessment*

[Largest Contentful Paint](https://web.dev/lcp/) | LCP: *One of googles [Core Web Vitals](https://web.dev/vitals/) we commonly use as a key metric in measuring performance improvement

Home Page | HP: *The first page located at the root of a website*

Prodct Listing Page | PLP: *In eCommerce, a page that presents a list of products based on a category or search to the user. PLPs generally link to several PDPs*

Product Description Page | PDP: *In eCommerce, the pages that present the description of a specific product, usually navigated to directly or from the PLP*


## Core Concepts / Documentation

* [Caching](https://docs.layer0.co/guides/caching)

* [Prefetching](https://docs.layer0.co/guides/prefetching)

* [Deep Fetching](https://docs.layer0.co/guides/prefetching#section_deep_fetching)

## Part 1 - Layer0 Traditional Implementation Exercise (~ 1 hr 30 mins)
***

### Initial prep
1. Clone this repo
2. Read through https://docs.layer0.co/guides/traditional_sites
3. Create an account at layer0 here https://app.layer0.co/signup
4. Install layer0 CLI as described here https://docs.layer0.co/guides/cli

### Run Locally
1. In your terminal, cd into the cloned repo and run ```npm install``` to install the packages needed to run the project (2 mins)
2. Open the repo in your favourite code editor
3. In your terminal, run ```layer0 run``` to start the project
4. In your browser open an incognito window, enable developer tools, enable device emulation for a mobile device, go to http://127.0.0.1:3000

### Review and understand the default configuration
1. Observe the following:
    * How the Layer0 Devtools is loaded on top of the viewport and the relevant information that it provides
    * In the Chrome Dev Tools » Applications tab,
        * that the service worker is running
        * that the prefetch cache under the Cache Storage is populated
2. In your editor, look at the following files
    * routes.ts,
    * shoppingFlowRouteHandler.ts
    * service-worker.ts
3. Observe how the PLP HTML doc is being cached and prefetched. There are a few ways to confirm this:
    * Utilizing the Layer0 [DevTools](https://docs.layer0.co/guides/devtools)
    * The network tab responses will include Layer0 caching information in the [Response Headers](https://docs.layer0.co/guides/response_headers#section_server_timing) - specifically `server-timing` and `x-0-status` contain information on caching
    * The Applications tab in chrome dev tools

### Add functionality based on what you have learned
1. Add caching for all static images served from the `/dw/image/v2` path
2. Implement caching & prefetching for the PDP
3. Implement deep fetching of above the fold images for the PDP
4. While these are the core items, if you have enough time, you should review any additional opportunities you may find on the page for performance improvement. Our first goal is usually to improve the LCP score with these implementations so those would be the priority optimizations.

### Share your work
1. [Deploy](https://docs.layer0.co/guides/deploying) your project to https://app.layer0.co
2. Replace this README with your notes on:
    * What you intended to accomplish in this assessment
    * What you’d do as next steps if you had more time
    * Any feedback you may have for Layer0 regarding the process.
3. Create a new repository on github, push your code to the repo including all git history, and share with the following gh handles (`patricksaw`, `howdiz`, `letrest`, `proinfo`, `rishi-raj-jain` )

## Part 2 - Performance Comparison (~ 30 minutes)
***

On both the original site (www.lushusa.com) and your newly deployed site (*.layer0.link):
Go to [WebPageTests](https://www.webpagetest.org/) Write a WPT script that uses these settings

Advanced Settings > Test Settings:
* Connection: LTE
* Number of Tests to Run: 3
* Repeat View: First View Only
* Capture Video: checked

Advanced Settings > Chromium:
* Emulate Mobile Browser: Google Pixel 2

And perform the following steps:
1. Navigates from homepage to a PLP
2. Waits 5 seconds
3. Clicks on a visible product on the page

Run these tests and document the results. Compare the performance results of each site (Original, and yours) and write up what specific performance improvements were achieved. Once that is done, in the same document (either a separate doc or a file in the repository) identify any areas where you see room for additional improvement.
