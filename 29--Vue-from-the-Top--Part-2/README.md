# 29 -- Vue from the Top, Part 2

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

* **Build process keep on buildin'...**
  * What about all those `bower_components` we're using?
  * Option 1: find all those files and put them in `dist/`
    * [`main-bower-files`](https://github.com/ck86/main-bower-files) reads `bower.json` files...
    * ...that can be streamed to `dist/`!
    * But what about all those `<link>` and `<script>` tags?
  * Option 2: replace all those `bower_components` links with...?
    * [`gulp-useref`](https://github.com/jonkemp/gulp-useref) turns `<!-- build -->` comments into magic!
    * Wrap `bower_components` for JavaScript in `<!-- build:js -->` comments...
    * Wrap `bower_components` for CSS in `<!-- build:css -->` comments...
    * Use [the recipe](https://github.com/jonkemp/gulp-useref#usage) to perform magic!
* **Take `product.html` for example...**
  * What pieces of the page are static? Which are dynamic?
  * What will change between products? What will stay the same?
  * What data will we need? How can we get it?
* **Start with _canned_ data...**
  * Use `jQuery.getJSON` to _request_ some data...
  * Sanity Check: The Network Panel
  * Chain a callback with `.then`...
  * Sanity Check: tracer bullet / `debugger` statement
  * What do we do with it?
* **What does the data _look_ like?**
  * How is it structured? What fields exist in the data?
  * Which fields do we need for `product.html`?
  * What values do those fields contain?
  * Do we need to request any additional data? How?
* **Where does the data _live_ on our page?**
  * What HTML structures contain _dynamic_ data?
  * What can we replace with placeholders?
  * What placeholders should we use?
* **Small-to-big, inside-to-outside...**
  * What is the _smallest_ HTML structure that we can select?
  * What data do we need to replace inside that HTML?
  * Bind the data:
    * Create a `Vue` instance...
    * Select the HTML element...
    * Attach the data.
  * Can we easily expand the scope, either...
    * ...to include _more_ HTML?
    * ...to replace _more_ data?
* **Let me repeat myself...**
  * What if I have to [display a _collection_ of data](http://vuejs.org/guide/list.html)?
  * Start simply: `collection[0]` as the first `item`
    * Add placeholders for the first item using `collection[0]`
    * Ensure the single item replaces correctly
    * Loop over _all_ items with `v-repeat`...
* **The State of Slideshow Bob**
  * Which slide is `.active`...? How do I indicate that?
    * **VIEW:** Define an `.active` style rule and defaults for "inactive" slides...
    * **MODEL:** Start with an `active` value in `data` set to `0` (the first slide)
    * Use [`v-class`](http://vuejs.org/api/directives.html#v-class) to add `.active`...
    * ...but not to _every_ image, right?
    * Only add `.active`(CSS) if `$index` is `active` (JS)!
  * But that's so ugly! Refactor!
    * Add `isActive` to the [`methods`](http://vuejs.org/api/options.html#methods)...
      * inputs?
      * outputs?
      * side-effects?
    * Replace `active == $index` with `isActive($index)`
    * It works! Until I need more than one `isActive` method...

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `29 -- Vue from the Top -- YOUR NAME`
  *  _WIP Branch_:
    * `USERNAME.github.io`
      * `journal-week-6`
      * `feature/*` x3
      * `remodeling`
      * `release/1.0.0--new-theme`
      * `master`
    * `TIY-Catalog`
      * `develop`
      * `feature/*`
  * _WIP Files_:
    * `USERNAME.github.io`
      * reflective journal
      * tutorial journal
      * bookmark journal
      * `css/*.css`
      * `js/*.js`
      * `index.html`
* [ ] **Journal Week 6; Don't Stop Believing**
  * [ ] Reflective Journal!
  * [ ] Tutorial Journal!
  * [ ] Bookmark Journal!
  * [ ] Feature 1!
  * [ ] Feature 2!
  * [ ] Feature 3!
  * [ ] Release Branch!
  * [ ] Test run!
  * [ ] Released!
* [ ] **Vue from the Top, Part 2**
  * [ ] Team Lead switched to: `USERNAME`
  * [ ] Everyone has been a Team Lead!
  * [ ] Everyone has been a Team Lead _twice_!
  * [ ] Product Features:
    * [ ] `feature/product-columns`
    * [ ] `feature/product-main-image`
    * [ ] `feature/product-additional-images`
    * [ ] `feature/product-image-slider`
    * [ ] `feature/product-image-zoom`
    * [ ] `feature/product-common-details`
    * [ ] `feature/product-variations`
    * [ ] `feature/product-fave+list` (buttons only)
    * [ ] `feature/product-tabs`
    * [ ] `feature/product-details`
    * [ ] `feature/product-reviews`
    * [ ] `feature/product-shipping`
    * [ ] `feature/product-store-header`
    * [ ] `feature/product-store-products`
    * [ ] `feature/product-store-related`
    * [ ] `feature/product-store-owner`
    * [ ] `feature/product-taxonomy`
    * [ ] **NIGHTMARE** `feature/product-UPDATE-fave+list`
  * [ ] Category Features:
    * [ ] `feature/category-columns`
    * [ ] `feature/category-tree`
    * [ ] `feature/category-breadcrumb`
    * [ ] `feature/category-product-image`
    * [ ] `feature/category-product-details`
    * [ ] `feature/category-products`
    * [ ] `feature/category-products-pagination`
    * [ ] `feature/category-fave+list` (buttons only)
    * [ ] `feature/category-refine` (form only)
    * [ ] **BEAST** `feature/category-refine-type`
    * [ ] **BEAST** `feature/category-refine-price`
    * [ ] **BEAST** `feature/category-refine-color`
    * [ ] **BEAST** `feature/category-refine-options`
    * [ ] **BEAST** `feature/category-refine-location`
    * [ ] **BEAST** `feature/category-refine-shipto`
    * [ ] **NIGHTMARE** `feature/category-UPDATE-fave+list`
```

### Journal, Week 6; Don't Stop Believing

Check off the items that you've completed for your journal entries and feature builds... only count those that have been _completed, reviewed, and merged_. Then create a release branch for your site named `release/1.0.0--new-theme` based on `develop`. Then clone your repo _again_ in a different location:

1. `pwd`: `/path/to/USERNAME.github.io`
1. `cd ..`
1. `git clone https://github.com/USERNAME/USERNAME.github.io RELEASE`
1. `cd RELEASE`
1. `git checkout release/1.0.0--new-theme`

Then run `jekyll serve` on your site and make sure it looks like what you'd expect. If it _doesn't_, correct your mistakes in your `RELEASE` clone on your `release` branch and push those changes into your remote on Github. If you don't have any mistakes to correct, find someone else who does and help them figure out why they have differences. Take a screenshot of each and attach them to the PR from `release/` to `master`. Log your hypotheses about the differences to your _WIP Issue_.

Merge your `release` branch into `master` and take a screenshot of your new website! Did it look like what you expected? Why? Attach your screenshot to the PR and make some notes about what happened.

### Vue from the Top, Part 2

Third Team Lead... and it just so happens there are _three days_ between now and Monday. Three days, three teammates... Coincidence? Everyone should get _two_ turns to be Team Lead, don't you think? I've listed a bunch of feature branches that you're welcome to use. Otherwise, please supply your own, but there should be a lot: at least as many as I've made. _Don't forget the pagination on the category page!_

#### BEAST MODE

The category page has a neat "Refine your search" form that updates the products in the view. All of the attributes that appear in that form are available in the `Listing` data. Can you use your mad `lodash.filter` skills to apply those refinements?

#### NIGHTMARE MODE

There's totally an endpoint in the API for adding a product to someone's "faves" and wish lists. Can you make those buttons work with that API?

## Resources

* **How do I ask the Etsy API for _more_ data than it returns by default?**
  * [Working with Resources: Associations](https://www.etsy.com/developers/documentation/getting_started/resources#section_associations)
  * [Example with `curl`](https://gist.github.com/al-the-x/4de8f197dd9dc25119f3)
* **How do I pick an image size when I'm building a responsive site?**
  * [_Responsive Images in Practice_ by Eric Portis on A List Apart (2014)](http://alistapart.com/article/responsive-images-in-practice)
  * [ResponsiveImages.org](https://responsiveimages.org/) -- [`<picture>` element polyfill](http://scottjehl.github.io/picturefill/#examples)
  * [_Which responsive images solution should you use?_ by Chris Coyier on CSS-Tricks.com](https://css-tricks.com/which-responsive-images-solution-should-you-use/)

