# 28 -- Vue(JS) from the Top, Part 1

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

* **Use the Grid, Luke!**
  * Overall grid constraints:
    * How many units do we need?
    * What are the size(s) of our gutters?
    * Where are the gutters?
  * `category.html`
    * How many columns do we need?
    * What are the proportions of those columns?
    * Are there columns _inside_ of columns?
    * What elements of the API data can we identify?
  * `product.html`
    * How many columns do we need?
    * What are the proportions of those columns?
    * Are there columns _inside_ of columns?
    * What elements of the API data can we identify?
* **Let's build it!**
  * [ ] "Keep It Simple" Grid? Let's use [Bootstrap](http://getbootstrap.com/css/#grid)...
  * [ ] Don't we need a build step here?
    * `npm install --link --save-dev bower wiredep`
    * add some comments...
    * `bower install` and `wiredep`
    * can `gulp` make this easier?
  * [ ] And just `npm start`... Wait, `gulp`?
    * `gulp serve` is the new `browser-sync`
  * [ ] Okay, how about some MF'g HTML...
    * Let's just use those class names for the moment...
    * Time for lipsum! Lipsum everywhere!
    * Need some images? I got your images right here...
  * [ ] Maybe time for some refactoring...
    * Replacing grid classes with semantic class names instead...
    * Replacing lipsum with placeholders...
    * Injecting lipsum _back into the page_ with VueJS! Wait...
  * [ ] **BONUS** Fetching data onto the page?

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `28 -- Vue from the Top -- YOUR NAME`
  *  _WIP Branch_:
    * `TIY-Catalog`
      * `develop`
      * `feature/*`
  * _WIP Files_:
    * `TIY-Catalog`
      * `api/etsy/*` -- cached data
      * `src/`
        * `js/`
          * `main.js`
        * `scss/`
          * `_category.scss`
          * `_product.scss`
          * `main.scss`
        * `category.html`
        * `product.html`
* [ ] **Don't Stop Believing**
  * [ ] Second feature reviewed and merged!
  * [ ] Third feature planned and started...
  * [ ] Did you _link_ those features?
* [ ] **Reading APIs: Etsy**
  * For the product list (category) page what data is needed from...
    * the `Listing` resource?
    * the `ListingImage` resource?
    * the `Variations_*` resources?
    * the `Category` resource?
    * the `Shop` resource?
  * On the product detail page what data is needed from...
    * the `Listing` resource?
    * the `ListingImage` resource?
    * the `Variations_*` resources?
    * the `Category` resource?
    * the `Shop` resource?
  * Identified for each:
    * API endpoint
    * required query params
    * additional params needed (`fields`, `includes`)
    * sample data returned
* [ ] **API Gymnastics**
  * [ ] Got that API key!
  * [ ] Categories are resources, too!
    * [ ] Got _at least 1_ category!
    * [ ] Got _multiple_ categories...
  * [ ] And the Listings _inside_ are important...
  * [ ] Get the whole Listing...
    * [ ] Got _at least 1_ product!
    * [ ] Got _multiple_ products...
  * [ ] And those Images, too?
    * [ ] Got the "Main Image" for 1 product...
    * [ ] Got _all_ Images for 1 product...
    * [ ] _ALL THE IMAGES!_
  * [ ] What about those Variations?
    * [ ] Got Variations for 1 product...
    * [ ] _ALL THE THINGS!_
* [ ] **Vue(JS) from the Top, Part 1**
  * [ ] Changed Team Lead to: `USERNAME`
  * [ ] Completed product detail page!
  * [ ] Completed product list (category) page!
  * [ ] **BEAST MODE** Added placeholders to product detail page!
  * [ ] **BEAST MODE** Added placeholders to product list page!
  * [ ] **NIGHTMARE MODE** NOW I HAVE EVERYTHING!
```

### Journal, Week 6; Don't Stop Believing!

You didn't think I forgot, did you? Make sure you get your entries ready for Thursday! You should have a second feature merged already, right?

### Reading APIs: Etsy

The data from your page has to come from _somewhere_ in the API, right? Well, the trick here is that the way the data is represented in the API may not precisely match the way it's presented on the page. You'll want to research the following questions:

* For the product list (category) page what data is needed from...
  * the `Listing` resource?
  * the `ListingImage` resource?
  * the `Variations_*` resources?
  * the `Category` resource?
  * the `Shop` resource?
* On the product detail page what data is needed from...
  * the `Listing` resource?
  * the `ListingImage` resource?
  * the `Variations_*` resources?
  * the `Category` resource?
  * the `Shop` resource?
* Identified for each:
  * API endpoint
  * required query params
  * additional params needed (`fields`, `includes`)
  * sample data returned

Make a sample request using [Postman](http://getpostman.com) or `curl` to inspect real responses from the API to verify your hypotheses from the documentation. Document the API endpoints -- including the query string parameters -- that you need for each page. Add those to your plans!

### API Gymnastics

Time to get some data to work with...! You'll need your own API key for this assignment, and you don't want to commit it into the repo accidentally. Put it in a safe place for now and let's get some data. You'll need some `Category` Resources... Some `Listings` for those... Maybe some `ListingImage` data would be nice... Oh, and `Variations_*`, but which ones?

### Vue(JS) from the Top, Part 1

You have your plan, perhaps you have a head-start, now you need to build that HTML and (S)CSS for the category and product pages. Please put them in separate files -- `category.html` and `product.html` -- that are copies of your wired-up `index.html` file. Also... **Time to switch Team Leads!**

If you're the _new_ lead, no coding for you! You must support the other two team members with planning, API reading, data analysis, and code review. Look over their shoulders and help them avoid painful syntax errors and split your time between them. There's plenty to do without writing anything.

If you _were_ the lead, pick up one of the existing, open tasks _before_ starting a new task. That doesn't have to be the new lead's old task, either. If your third teammate is stuck on something: trade. Rely on your _new_ Team Lead for direction and support.

Between the three of you, you should have the HTML and (S)CSS complete for those two pages by tonight. They don't have to be pixel-perfect replicas, but they should be very close to authentic.

#### BEAST MODE

Once you have your feature branches for `product.html` and `category.html` merged into `develop`, open a _new_ feature branch called `feature/placeholders-*` for each and start replacing your dummy data with placeholders.

#### NIGHTMARE MODE

Pull all the data that you fetched from the API onto the page using jQuery. Attach a Vue instance to the page... or just a part of the page... and see if your placeholders are right. Can you correct them?

## Resources

* **How can I learn more about Bootstrap?**
  * [Official Documentation](http://getbootstrap.com/) -- [Getting Started](http://getbootstrap.com/getting-started/)
  * [_Blasting Off with Bootstrap_ on CodeSchool](https://www.codeschool.com/courses/blasting-off-with-bootstrap)
  * [_Bootstrap for Beginners_ by Caitlin McKenna](http://learntocodewith.me/getting-started/topics/bootstrap/)
* **What alternatives are there to Bootstrap?**
  * Whole-Hog Frameworks:
    * [Zurb Foundation](http://foundation.zurb.com) -- whole-hog UI framework
    * [Semantic UI](http://semantic-ui.com)
    * [PureCSS](http://purecss.io)
    * [Google Web Starter Kit](https://developers.google.com/web/tools/starter-kit/)
  * Just a Grid:
    * [Skeleton CSS](http://getskeleton.com)
    * [Bourbon (SASS)](http://bourbon.io) + [Neat (SASS)](http://neat.bourbon.io)
