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
  * _WIP Issue_: `XX -- Assignment Name -- YOUR NAME`
  *  _WIP Branch_:
  * _WIP Files_:
* [ ] **WRITING**
  * checkpoints
* [ ] **READING**
  * checkpoints
* [ ] **CODING**
  * checkpoints
```

### WRITING ASSIGNMENT

### READING ASSIGNMENT

### CODING ASSIGNMENT

## Resources

* LINK
