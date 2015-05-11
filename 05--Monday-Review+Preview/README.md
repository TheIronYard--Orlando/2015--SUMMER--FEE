# 05 -- Monday Review & Preview: JavaScript

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Parking Lot Topics** (~15m)

## Agenda

* **Homework Review** (~1h)
  * [ ] Right Mindset
  * [ ] Reading JavaScript
  * [ ] GitHubbing to Know You
  * [ ] JavaScript Koans
  * [ ] TodoCLI: code & stories
  * [ ] String Calculator
  * [ ] Check Writing
* **Parking Lot Topics** (~1h)
* **Preview**
  * **[TodoMVC](http://todomvc.com)**
  * **[Codrops: Nested Accordion](http://tympanus.net/Blueprints/NestedAccordion/)**
  * **[Codrops: Full-Width Tabs](http://tympanus.net/Blueprints/FullWidthTabs/)**
  * **[Codrops: Quote Rotator](http://tympanus.net/Blueprints/QuotesRotator/)**

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `05 -- Monday Review & Preview -- YOUR NAME`
    * [ ] link to PR for `USERNAME.github.io:journal-week-1`
    * [ ] link to PR for `TheIronYard--Orlando/student-roster:master`
    * [ ] link to PR for `TIY-Assignments:05--monday-review+preview`
  *  _WIP Branch_:
    * `USERNAME.github.io:journal-week-1`
    * `TheIronYard--Orlando/student-roster:master`
    * `TIY-Assignments:05--monday-review+preview`
  * _WIP Files_:
    * `USERNAME.github.io`
      * `about/jquery.md`
      * `journal-week-1.md`
    * `TheIronYard--Orlando/student-roster`
      * `2015-05/FEE/`
    * `TIY-Assignments`
      * `NestedAccordion/`
        * `index.html`
        * `styles.css`
        * `scripts.js`
      * `FullWidthTabs/`
        * `index.html`
        * `styles.css`
        * `scripts.js`
      * `QuotesRotator/`
        * `index.html`
        * `styles.css`
        * `scripts.js`
* [ ] **Journal, Week 1**
  * [ ] created branch in `USERNAME.github.io` named `journal-week-1`
  * [ ] created new file named `journal-week-1.md`
  * [ ] commited, pushed, and opened PR to `master`
  * [ ] added draft journal entry
* [ ] **GitHubbing to Know You, Part 2** (due Thu)
  * [ ] merged upstream additions from `TheIronYard/student-roster:master`
  * [ ] updated your classmate's Markdown file and opened a PR to merge
  * [ ] thumbs up (:+1:) on your PR from your "Special Someone"
* [ ] **Making Blueprints**
  * [ ] created branch in `TIY-Assignments` named `05--monday-review+preview`
  * [ ] created directories named `NestedAccordion`, `FullWidthTabs`, and `QuotesRotator`
  * [ ] pasted result of `add`-ing empty directories into _WIP Issue_
  * [ ] added files: `index.html`, `styles.css`, `scripts.js`
  * [ ] copied contents of `index.html` and `styles.css` from examples
  * [ ] **BEAST MODE** working code in the browser!
* [ ] **Prep for TodoMVC**
  * [ ] downloaded the [TodoMVC template](https://github.com/tastejs/todomvc-app-template)
  * [ ] pushed into `TIY-TodoMVC`
  * [ ] **BEAST MODE** hey, it works!
```

### Journal, Week 1

You've just completed your first week at The Iron Yard. You've learned a lot in a very short amount of time. Take some time tonight to review your notes and write them down. Use whatever format helps you get the ideas out: bulleted lists, stream of consciousness, retelling a story. Consider this a draft that you'll revise a few times throughout the week. Put this work in a branch called `journal-week-1` in your `USERNAME.github.io` repo. Don't forget to link to that PR in your _WIP Issue_! Here are some suggestions for topics:

* What do developers do? What principles of a developer have you learned?
* Explain the outside-in and inside-out technique we employed for TodoCLI.
* Describe the technique of using User Stories to write application specifications.
* Write something about the principle of Extreme Programming (XP) called YAGNI.

#### BEAST MODE

I promised I wouldn't _assign_ any more "Reading JavaScript", and I won't. If you're looking to get a leg up on the material for the week, though, start investigating [the DOM on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) and add some documentation to your `about/javascript.md` file. Pay particular attention to the following:

* the `Window` object
  * properties like `location`, `document`, `history`
  * what kind of things are stored in those properties (warning: rabbit holes)
  * methods like `alert`, `confirm`, `reload`, `open` and `close`
* the `Location` object
  * all the properties here are important
  * what happens when you mess around with them?
* the `Document` object
  * properties like `head` and `body`
  * methods like
    * `getElementById` and `getElementsByClassName`
    * `querySelector` and `querySelectorAll`
    * `appendChild` and the `create*` family
    * `write` and `writeln`
* the `HTMLElement` type
  * properties like
    * `id` and `className`
    * `innerHTML` and `outerHTML`
    * `children`, `parent`, `nextSibling`, and `firstChild`
  * methods like
    * `addEventListener` and `dispatchEvent`
    * the `*Attribute` family
* the `HTMLCollection` and `NodeList` types
  * how they differ from `Array`
  * how they can be used _like_ an `Array`
  * the `item` method

### GitHubbing to Know You, Part 2

This week, you'll be randomly assigned classmates to interrogate and a question to ask. Then, you get to update _their_ Markdown file in the Student Roster and open a PR for the change. Chances are high (i.e. I rigged it) that the person you get _won't_ get assigned you... fun, right? You'll know all kinds of embarassing details about each other in no time!

### Making Blueprints

Some of your homework assignments for the week will be duplicating functionality based on a [reference implementation](http://en.wikipedia.org/wiki/Reference_implementation) provided in [a series of articles on Tympanus.net](http://tympanus.net/codrops/category/blueprints/). Since our focus is on JavaScript in the browser and not HTML and CSS (yet), start by copying the code provided in the reference implementations into files in your `TIY-Assignments` repo.

Create directories named [`NestedAccordion`](http://tympanus.net/codrops/2013/03/29/nested-accordion/), [`FullWidthTabs`](http://tympanus.net/codrops/2014/03/21/responsive-full-width-tabs/), and [`QuotesRotator`](http://tympanus.net/codrops/2013/03/29/quotes-rotator/). Try `git add`-ing these empty directories and report what happens in your _WIP Issue_ as a comment. Are you crazy? What just happened? Can you find some resource that explains why? Link to it and re-explain more better in your own words.

Now create files in each directory: `index.html`, `styles.css`, and `scripts.js`. Don't put anything in them yet, but `git add` them nonetheless. Did that work differently? What's going on here? Can you explain it? Find some research to back up your hypothesis and link to it. Don't worry, I'll wait for you.

Copy the code from the reference implementation into the appropriate files (I'm not gonna tell you which). Commit those and push them into your _WIP Branch_... You _were_ using your _WIP Branch_, right?

#### BEAST MODE

If you open the `index.html` files that you just made in a browser you'll run into some problems. Can you fix them so that they work _exactly_ like the demo sites?

### Prep for TodoMVC

Tomorrow, we'll start building [TodoMVC](http://todomvc.com) with plain "vanilla" JavaScript in the browser. To get ready, you'll need to [download the starter template from Github](https://github.com/tastejs/todomvc-app-template/archive/master.zip). Create a new repo on Github called `TIY-TodoMVC` and commit and push the contents of the starter template to `master`. Then review the [application specifications](https://github.com/tastejs/todomvc/blob/master/app-spec.md) and examine some of the reference implementations. Make some notes (i.e. code comments) in the JavaScript file (which is pretty empty) about the approach we might take.

#### BEAST MODE

If you open the `index.html` file from the starter template in a browser, it probably won't look like much. Can you get it working? There's probably a `README` file lying around somewhere that can help you.

## Resources

* [TodoMVC](http://todomvc.com)
  * [starter template on Github](https://github.com/tastejs/todomvc-app-template) ([download](https://github.com/tastejs/todomvc-app-template/archive/master.zip))
  * [project specifications](https://github.com/tastejs/todomvc/blob/master/app-spec.md)
* [The Document Object Model (DOM)](http://en.wikipedia.org/wiki/Document_Object_Model)
  * [_Web APIs: Document Object Model_ on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
  * [_Interactive Web Pages with JavaScript_ on Team Treehouse](http://teamtreehouse.com/library/interactive-web-pages-with-javascript)
  * [_Try jQuery_ on Code School](https://www.codeschool.com/courses/try-jquery)
* [_Blueprints_ articles on Tympanus.net](http://tympanus.net/codrops/category/blueprints/)
  * [Nested Accordion](http://tympanus.net/Blueprints/NestedAccordion/)
  * [Full Width Tabs](http://tympanus.net/Blueprints/FullWidthTabs/)
  * [Quotes Rotator](http://tympanus.net/Blueprints/QuotesRotator/)
