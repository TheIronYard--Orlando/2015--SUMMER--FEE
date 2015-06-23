# 30 -- From Github With Love

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Tools on Tuesday

* **Hello, Angular JS!**
  * What is Angular JS?
    * Client-side JavaScript Framework
    * 2-way Data Binding: Reactive View
    * Modular, Service-Oriented Architecture
  * How do I use it?
    * `bower install --save angular`
    * `wiredep -s index.html`
    * in `src/js/main.js`: `angular.module('module-name', [ ])`
    * in `src/index.html`: `ng-app="module-name"`
    * What happened to all our placeholders?
  * Attaching data to the View? Use a Controller...
    * in `src/js/main.js`: `.controller('MainController', function(){ })`
    * in `src/index.html`: `ng-controller="MainController"`
    * What goes inside the Controller?
    * Attach data to `MainController`... But how?
    * Add `as app` to `ng-controller` directive...
    * ...and change placeholders.
  * What about my JSON data? Can I use `jQuery.getJSON` like before?
    * Yes, but what is `this` inside of `then`...?
    * Yes, but no. Use [`$http`](https://docs.angularjs.org/api/ng/service/$http) instead...
    * Well, that was different... Try `.success` instead.
* **Intermission**
* **Shave that Yak...**
  * `yo gulp-webapp`
    * `tree | less`
    * `package.json`
    * `bower.json`
    * `gulpfile.babel.js` (WTF?)
      * What is `babel`? AKA `npm home babel`
      * [JavaScript is an ogre...](https://en.wikipedia.org/wiki/ECMAScript)
      * [Ogres are like onions...](http://shaunlebron.github.io/solar-system-of-js/#0)
      * Welcome to [ES6 / ES2015 / hell](https://babeljs.io/docs/learn-es2015/)
    * Okay, but can you read it?
      * `gulp serve`
      * `gulp serve:test`
      * `gulp html` (aka `build`)
      * `gulp serve:dist`
  * `bower install --save angular`
    * in `app/scripts/main.js`:
      * define module `tiy-gradebook`
      * define controller `MainController`
    * in `app/index.html`:
      * attach `tiy-gradebook` with `ng-app` directive
      * attach `MainController as app` with `ng-controller` directive

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `31 -- From Github With Love -- YOUR NAME`
    * Links to PRs in:
      * `USERNAME.github.io`
        * `journal-week-7` into `master`
        * `feature/*` into `remodeling`
        * `remodeling` into `master`
      * `TIY-Gradebook`
        * `feature/cached-data` into `develop`
        * `feature/mockups-repositories` into `develop`
        * `feature/mockups-milestones` into `develop`
  * _WIP Branch_:
    * `USERNAME.github.io`
      * `journal-week-7` -- journal entries
      * `feature/*` -- (small) feature branches
      * `remodeling` -- merged features
    * `TIY-Gradebook`
      * `master` -- _only_ release `0.0.0`
      * `develop` -- _only_ merged features
      * `feature/cached-data` -- saved data from the Github API
      * `feature/mockups-repositories` -- HTML+SCSS for Repositories list
      * `feature/mockups-milestones` -- HTML+SCSS for Milestones list
  * _WIP Files_:
    * `TIY-Gradebook`
      * `api/github/` -- cached API data!
      * `app/`
        * `scripts/`
          * `main.js` -- no need to break it up... yet
        * `styles/`
          * `main.scss` -- don't forget to `@import`
          * `_repositories.scss`
          * `_milestones.scss`
        * `views/` -- copy `index.html` to start
          * `repositories.html`
          * `milestones.html`
        * `index.html`
      * `bower.json` -- need Angular JS _and_ Bootstrap!
      * `gulpfile.babel.json`
      * `package.json`
* [ ] **Journal, Week 7: Any Way You Want It**
  * Feature 1: Complete!
  * Feature 2: Started!
  * Feature 3: Planned!
* [ ] **Reading APIs: Github Issues**
  * What credentials do I need to authenticate with the Github API?
  * How can I provide authentication credentials to Github?
* [ ] **API Gymnastics**
  * [ ] Fetched Repositories for `TheIronYard--Orlando`...
  * [ ] Fetched Milestones for `2015--SUMMER--FEE`...
  * [ ] Fetched Labels for `2015--SUMMER--FEE`...
  * [ ] Fetched Issues for `2015--SUMMER--FEE`...
    * [ ] ...with label "Attendance".
    * [ ] ...with any Milestone assigned.
    * [ ] ...with _no_ Milestone assigned.
* [ ] **Shaping Up with Angular JS**
  * [ ] Completed Level 1!
  * [ ] Completed Level 2!
  * [ ] Pics or it didn't happen!
* [ ] **From Github With Love**
  * [ ] Installed Bootstrap... if necessary.
  * [ ] Adjusted and ran `gulp wiredep`...
  * [ ] `feature/mockups-repositories`
    * [ ] Start with a [`.list-group`](http://getbootstrap.com/components/#list-group)...
    * [ ] Links would be nice...
    * [ ] Maybe more semantic HTML would help...
    * [ ] How about one with placeholders?
    * [ ] **BEAST MODE** Use `@extend` instead?
  * [ ] `feature/mockups-milestones`
    * [ ] Also probably a [`.list-group`](http://getbootstrap.com/components/#list-group)...
    * [ ] But what's that nifty [`.progress-bar`](http://getbootstrap.com/components/#progress)?
    * [ ] Some labels and colors would be nice...
    * [ ] Don't forget links!
    * [ ] Try that semantic HTML one more time...
    * [ ] Put some placeholders in one...
    * [ ] **BEAST MODE** It's called semantic CSS...
  * [ ] `feature/cached-data` -- DID YOU READ API GYMNASTICS!?
```

### WRITING ASSIGNMENT

### READING ASSIGNMENT

### CODING ASSIGNMENT

## Resources

* LINK
