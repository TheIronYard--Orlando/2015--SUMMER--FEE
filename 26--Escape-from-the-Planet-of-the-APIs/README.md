# 26 -- Escape from the Planet of the APIs

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Weekly QUIZ!** (~15m)
* **Parking Lot Topics** (~15m)
* **Homework Review** (~30m)

## Parking Lot Review

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `26 -- Escape from the Planet of the APIs -- YOUR NAME`
    * Link to PR in `USERNAME.github.io` from `journal-week-6` to `master`
    * Link to PRs in `USERNAME.github.io` from `feature/*` to `remodeling`
    * Link to PR in `USERNAME.github.io` from `remodeling` to `master`
    * Link to PR in `TIY-Catalog` from `release/0.0.0--yak-shaving` to `master`
    * Link to Issue 1 named `Planning` in `TIY-Catalog`
  *  _WIP Branch_:
    * `USERNAME.github.io`
      * `journal-week-6` to `master`
      * `feature/*` x3 to `remodeling`
    * `TIY-Catalog`
      * `master`
      * `release/0.0.0--yak-shaving`
      * `develop`
      * `feature/*`
  * _WIP Files_:
    * `USERNAME.github.io`
      * reflective journal
      * tutorial journal
      * bookmark journal
    * `TIY-Catalog`
      * `dist/.gitignore`
      * `src/` -- H5BP to start!
        * `css/.gitignore`
        * `scss/main.scss`
        * `js/main.js`
        * `index.html`
      * `.gitignore`
      * `bower.json`
        * `dependencies`
          * `normalize.css`
          * `modernizr`
          * `jquery`
      * `package.json`
        * `scripts`
          * `start`
          * `build`
* [ ] **Reading APIs: Etsy**
  * [ ] How do I make API requests?
    * [ ] What is the base URL?
    * [ ] Are there any headers or query parameters required?
    * [ ] What kind of response should I expect?
  * [ ] How does the API handle authentication?
    * [ ] Do I need to authenticate?
    * [ ] What can I do with an unauthenticated request?
    * [ ] How can I authenticate my request?
  * [ ] How do I ask the API for...
    * [ ] A list of products belonging to a specific category or collection?
    * [ ] Details about a specific product? What details are provided?
    * [ ] The main and additional images for a product?
  * [ ] Is there a limit to the number of requests I can make?
    * [ ] Is there a way of extending that limit?
    * [ ] What happens when I hit the limit?
  * [ ] What if there is a _lot_ of data returned?
    * [ ] How can I ask for more (or less) data from a request?
    * [ ] How do I know that there is more data available?
* [ ] **Don't Stop Believing**
  * [ ] Got a plan...
  * [ ] Made my _own_ checklist...
  * [ ] Linked up!
* [ ] **Yak Shaving**
  * [ ] Start by Skitching!
   * [ ] https://www.etsy.com/trending
   * [ ] https://www.etsy.com/browse/fathers-day-gifts
   * [ ] https://www.etsy.com/search
  * [ ] Prep version `0.0.0`!
   * [ ] H5BP the `src/`, Luke...
   * [ ] `init` what you need...
   * [ ] and `.gitignore` the `dist/`
   * [ ] among other things...
   * [ ] `npm install --link --save-dev`
     * [ ] `bower`
     * [ ] `browser-sync`
     * [ ] `node-sass`
     * [ ] `wiredep`
   * [ ] `bower install --save`
     * [ ] `normalize.css`
     * [ ] `modernizr`
     * [ ] `jquery`
     * [ ] `lodash`...?
  * [ ] Merge that beast!
  * [ ] How about that `develop` branch?
  * [ ] You've got Issues, man!
* [ ] **Install-fest!**
  * `npm install --global`
    * `gulp`
    * `gulp-autoprefixer`
    * `gulp-sass`
    * `gulp-useref`
    * `gulp-load-plugins`
    * `main-bower-files`
  * `bower install` (no `--save`!)
    * `vue`
```

### Journal, Week 6!

You know the drill by now, don't ya? 1 reflective journal, 1 tutorial journal, 1 bookmark journal in a branch of your `USERNAME.github.io` repo called `journal-week-6`... which should be _from_ `master` with a PR back _into_ `master`. You're okay with that, right? I mean, a blog post or three _isn't_ a feature, after all. Speaking of features...

### Don't Stop Believing...

Don't you have a ton of features backed up in your `USERNAME.github.io` repo? Identify at least 3 features that you intend to complete this week while we work on the _big_ project together. Create or continue using `feature/*` branches with PRs into `remodeling`. Solicit peer reviews and merge your PRs as you go. Open a PR from `remodeling` into `master` so you can release your progress at the end of the week.

### Yak Shaving: `TIY-Catalog`

This week we're going to build a couple of pages from Etsy: a couple of category pages and the product detail pages. That means we need some yaks shaved! Just like we did last week, give us a `src/` and `dist/` directory, start with a `.gitignore` file in `dist/` and H5BP in `src/`, `init` those `.json` files, and start loading up dependencies. 

We'll start with these:

* [ ] https://www.etsy.com/trending
* [ ] https://www.etsy.com/browse/fathers-day-gifts
* [ ] https://www.etsy.com/search

Note the differences between the two and Skitch 'em like your life dependended on it! We'll be building the standard category listing page together over the week, but you can be sure to see some of the others along the way.
#### Install-fest!

We've got new tools this week -- [GulpJS](http://gulpjs.com) and a host of plugins -- so to cut down on the delays, go ahead and install those packages _globally_ so we can link them into the project later. No need to assign them as dependencies _yet_... we'll do that together.

### Reading APIs: Etsy

Read through [Etsy API documentation](https://www.etsy.com/developers/documentation) to answer the following questions:

  * How do I make API requests?
    * What is the base URL?
    * Are there any headers or query parameters required?
    * What kind of response should I expect?
  * How does the API handle authentication?
    * Do I need to authenticate?
    * What can I do with an unauthenticated request?
    * How can I authenticate my request?
  * How do I ask the API for...
    * A list of products belonging to a specific category or collection?
    * Details about a specific product? What details are provided?
    * The main and additional images for a product?
  * Is there a limit to the number of requests I can make?
    * Is there a way of extending that limit?
    * What happens when I hit the limit?
  * What if there is a _lot_ of data returned?
    * How can I ask for more (or less) data from a request?
    * How do I know that there is more data available?

## Resources

* **What is CORS, really?**
  * ["Simple Example" of CORS on Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing#Simple_example)
  * [_Using CORS_ by Monsur Hossain on HTML5 Rocks](http://www.html5rocks.com/en/tutorials/cors/)
  * [_HTTP Access Control (CORS)_ on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
* **How can I use the `<template>` tag?**
  * [_An Introduction to HTML Imports_ on Team Treehouse](http://blog.teamtreehouse.com/introduction-html-imports)
* **What is the difference between Lodash and Underscore JS?**
  * http://stackoverflow.com/questions/13789618/differences-between-lodash-and-underscore
