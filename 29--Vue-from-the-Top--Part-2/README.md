# 29 -- Vue from the Top, Part 2

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

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
