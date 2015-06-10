# 24 -- Return to the Planet of the APIs

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Welcome to the Grid, Program.

* [ ] **CSS Grids are Easy: [Don't Overthink It!](https://css-tricks.com/dont-overthink-it-grids/)**
  * What is [grid-based design](http://en.wikipedia.org/wiki/Grid_%28graphic_design%29)?
  * How would I [build that in CSS](http://j4n.co/blog/Creating-your-own-css-grid-system)?
  * How would I _use_ that?
* [ ] **I am not a `<template>`...! I am a HTML element!**
  * What is [template processing](http://en.wikipedia.org/wiki/Template_processor)?
  * How would I build that with jQuery?
  * Why would I ever _use_ that?

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `24 -- Return to the Planet of the APIs -- YOUR NAME`
  *  _WIP Branch_:
    * `USERNAME.github.io:journal-week-5`
    * `TIY-Github`
      * `develop`
      * `feature/*`
  * _WIP Files_:
    * `USERNAME.github.io`
      * reflective journal
      * tutorial journal
      * bookmark journal
    * `TIY-Github`
      * `src/`
        * `index.html`
        * **`scss/main.scss`**
        * **`scss/*.scss`**
        * **`css/.gitignore`**
        * **`js/main.js`**
* [ ] **Journal, Week 5**
  * [ ] reflective journal, final draft
  * [ ] tutorial journal, final draft
  * [ ] bookmark journal, final draft
* [ ] **Reading APIs**
  * How can I use the Github API to...
    * get all the comments for a particular issue?
    * add a comment to an issue?
  * How can I use the jQuery API to...
    * get the HTML contents of an element?
    * create a _new_ HTML element?
    * add an HTML element to the page?
  * How can I use the Lodash API to...
    * replace placeholders with values from an object?
    * repeat code for every item of an array?
* [ ] **These grids nowadays...**
  * [ ] **Building up the Base**
    * [ ] Start with a happy little wrapper...
    * [ ] Just a 5-column grid, please...
    * [ ] Check out that offset!
  * [ ] **To the Bat-Desktop, Robin!**
    * [ ] 2/5ths Profile
    * [ ] 3/5ths Repositories
  * [ ] **Holy shrinking viewports, Batman!**
    * [ ] Disappearing Repositories!
    * [ ] Full-width profile!
    * [ ] 2/5ths avatar image!
    * [ ] 3/5ths detail list!
* [ ] **Templatize me, Cap'n!**
  * [ ] `feature/repo-list-placeholders`
    * [ ] Repos got names, yo.
    * [ ] What about a description?
    * [ ] My god, it's full of stars...
  * [ ] `feature/repo-list-template`
    * [ ] Convert to `<template>`!
    * [ ] Can I see your `id`, please?
    * [ ] Eat that `<template>`!
    * [ ] Now spit it back out!
  * [ ] **BEAST MODE**
    * [ ] Fill in that `<template>`...
    * [ ] FOR EVERY REPO. :astounded:
```

### Journal, Week 5

Got those journal entries done yet? If so, help those that don't. If not, _ask for help!_

### Reading APIs

Here's your next batch of questions for the Github API, which you'll need for the last leg of our Github Revolution:

* How can I use the Github API to...
  * get all the comments for a particular issue?
  * add a comment to an issue?

And since libraries like jQuery and Lodash have feelings... I mean _APIs_, too, read through some of the documentation to answer these questions:

* How can I use [the jQuery API](http://api.jquery.com) to...
    * get the HTML contents of an element?
    * create a _new_ HTML element?
    * add an HTML element to the page?
* How can I use [the Lodash API](http://lodash.com/docs/) to...
  * replace placeholders with values from an object?
  * repeat code for every item of an array?

### These grids nowadays...

Knowing how to use a grid-based system of layout is an important skill as a Front-End Developer; being able to write one when needed is a great method of learning that. Put together a simple 5-column grid using Sass (because, y'know... math) that has `unit-*` and `push-*` classes for all five sizes. Use those to construct your desktop layout.

That should be a _responsive_ grid, though. Add a mdeia query rule that makes the columns stack vertically (`width: 100%`) when the viewport gets smaller than `30em`. To complete the conversion, certain pieces of the layout should be invisible at that smaller size. Maybe a special `hidden-*` family of classes would help?

#### BEAST MODE

A 5-column grid is a lazy person's exercise. A proper grid needs more columns: 12 or 16, ideally. Really fancy grids have 24 or 36 columns. Are you up to the challenge? Hint: that `@for` syntax might help.

### Templatize me, Cap'n!

Convert your markup for each repository list into reusable list-item pieces. Start by replacing _one_ of your repo list items with placeholders -- `{{repo.name}}`, `{{repo.stars}}` -- that match where in the API data these values originate. Put this work in the `feature/repo-list-placeholders` branch.

When you're done, reviewed, and merged, open a new branch called `feature/repo-list-templates` and wrap all of that placeholder-laden markup in `<template>` tags. Give them descriptive (and unique!) `id` attributes so we can pick them out of the DOM with jQuery.

Pluck the HTML contents of each `<template>` tag and pass it through the `template` function in Lodash. Don't forget to assign the result of each to a variable! What is the _type_ of the value returned by `lodash.template`? How can we use that value to print -- i.e. `console.log` -- the HTML for a single repo list item?

#### BEAST MODE

If you can _print_ the HTML for a list item, can you add that HTML to the page? Anywhere? What about _in the right place_...?

## Resources

* LINK
