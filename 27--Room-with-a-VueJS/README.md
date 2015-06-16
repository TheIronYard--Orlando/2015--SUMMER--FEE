# 27 -- A Room with a VueJS

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Tools on Tues

* **Check out that [VueJS](http://vuejs.org)**
  * A little setup: `bower install --save vue`
  * DOM-based templating in 3 easy steps:
    * Let's get some data... profile data, anyone?
    * Create a `Vue` instance tied to `.profile-details`...
    * Inject the profile data...
    * Watch those mustaches vanish!
  * One more time?
    * How about that repo data?
    * Create a `Vue` instance tied to `#repo-list-popular`...
    * Inject the repo data for _just one repo_ to start...
    * No problem! But there's more than one repo...
    * `v-repeat` to the rescue!
  * Could we use that with _other_ APIs?
* **Time for a Big [GulpJS](http://gulpjs.com)!**
  * Installed globally? Try `gulp --help`... :(
  * Slightly more setup: `npm install --link --save-dev gulp`
  * So now what? `gulp --help` again?
  * You want a `gulpfile`?
  * What is this "gulpfile"...!?
    * Minimally:
      ```javascript
      var gulp = require('gulp');

      gulp.task('do-something', function(){
        console.log('so do something already!');
      }); // END gulp.task(default)
      ```
    * Now try `gulp do-something`...
    * Maybe we should make it, y'know... do something?
  * What do you do in `gulpfile.js`?
    * Maybe you could make a `dist/` bundle?
      ```javascript
      gulp.task('build', function(){
        gulp.src('src/index.html')
          .dest('dist/');
      }); // END gulp.task(build)
      ```
    * What about building your Sass files?
      ```javascript
      gulp.task('sass', function(){
        var sass = require('gulp-sass');

        gulp.src('src/scss/**/*.scss')
          .pipe(sass({/* options go here */}))
          .pipe(gulp.dest('src/css/'));
          // Careful! ^^^^
      }); // END gulp.task(sass)
      ```
    * And watching those files for changes?
      ```javascript
      gulp.task('watch', function(){
        gulp.watch('src/scss/**/*.scss', [ 'sass' ]);
      }); // END gulp.task(watch)
      ```
  * They're like [_recipes_](https://github.com/gulpjs/gulp/tree/master/docs/recipes)...

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `27 -- Room with a VueJS -- YOUR NAME`
  *  _WIP Branch_:
    * `TIY-Catalog`
      * `develop`
      * `feature/*`
  * _WIP Files_:
    * `TIY-Catalog`
      * `specs/`
        * `category-*.html`
        * `product-*.html`
      * `src/`
        * `category.html`
        * `product.html`
      * `scss/`
        * `_category.scss`
        * `_product.scss`
        * `main.scss`
* [ ] **Don't Stop Believing**
  * [ ] First feature reviewed and merged!
  * [ ] Second feature planned and started...
  * [ ] Did you _link_ those features?
* [ ] **Reading APIs: Etsy**
  * What Resource in the API represents...
    * an individual product?
    * a group or collection of products?
    * images associated with a product?
    * sizes and colors for a product?
  * What actions and endpoints exist for each of these Resources?
  * What parameters do each endpoint require or accept?
  * What fields are returned for each Resource, specifically:
    * an individual product?
    * a group or collection of products?
  * What _additional_ fields can be requested for each?
  * What is a `Taxonomy` Resource?
* [ ] **A Room with a VueJS**
  * [ ] Skitched with hover states, etc:
    * [ ] [Trending](https://github.com/tj/commander.js)
    * [ ] [Father's Day!](https://www.etsy.com/browse/fathers-day-gifts)
    * [ ] [Category Page](https://www.etsy.com/search)
    * [ ] Product details page!
  * [ ] Planned and linked!
  * [ ] Build process documented!
    * [ ] Gulped?
    * [ ] NPM'd?
  * [ ] First feature merged!
  * [ ] **BEAST MODE** Product list (category) page complete!
  * [ ] **BEAST MODE** Product detail page complete!
```

### Don't Stop Believing

If you're gonna complete and merge three features by Thursday, you should have a feature reviewed and merged tonight. Remember while you're reviewing and being reviewed, _show your work_! Don't just rubber stamp the work, actually _review_ it!

### Reading APIs: Etsy

Here's another batch of questions to guide your research on the Etsy API. Chances are high that you'll get asked these questions in class tomorrow or that you'll need them for your homework.

  * What Resource in the API represents...
    * an individual product?
    * a group or collection of products?
    * images associated with a product?
    * sizes and colors for a product?
  * What actions and endpoints exist for each of these Resources?
  * What parameters do each endpoint require or accept?
  * What fields are returned for each Resource, specifically:
    * an individual product?
    * a group or collection of products?
  * What _additional_ fields can be requested for each?
  * What is a `Taxonomy` Resource?

### A Room with a VueJS

Ready for another group project? Organize yourself into groups of three and elect a single Team Lead to manage the project... just for tonight, though.

As a group, make detailed Skitches of the following pages on Etsy.com:

* [Trending](https://github.com/tj/commander.js)
* [Father's Day!](https://www.etsy.com/browse/fathers-day-gifts)
* [Category Page](https://www.etsy.com/search)
* Any product detail page!

Formulate a group plan of attack for building out _at least one_ product and category page with HTML and (S)CSS _only_... but with one catch: **the Team Lead cannot write any code.** His or her job is to pair up with each of the other two, lead code reviews, and ensure the submitted work matches the joint plan.

Don't worry, we'll switch the Team Lead roles, so you'll probably get a chance to be Team Lead. If that's you this time around, don't waste your time waiting around for code to review: refine the plan, document the API for the next phase of development, pro-actively pair up with your teammates... make the most of your time.

### BEAST MODE

Actually _complete_ the HTML and (S)CSS completed for the product detail and category page. Use the grid, Luke!

## Resources

* LINK
