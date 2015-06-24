# 32 -- You Only `GET` Twice

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Lecture

* **Refactoring to Layouts**
  * Why repeat all that boilerplate code?
    * Repetitive code is dangerous...
    * How can we reduce duplication?
  * [Two-step view](http://martinfowler.com/eaaCatalog/twoStepView.html) can help!
    * Using `ng-include` inside `index.html`...
    * Don't include _both_ view templates...
    * ...but which one do we need?
    * What happened to my URL?
* **Repositories are easy...**
  * Fetch data with `$http`...
  * Attach to Controller...
  * Add placeholders to replace...
    * Wait, there are lots of these.
    * Time to `ng-repeat`!
* **Milestones are hard...**
  * Fetch data with `$http`...
    * Wait, which data?
    * We need Milestones...
    * And Issues... Uh, oh.
  * API Gymnastics
    * How many results are returned by the API?
    * How do I know that there are _more_ available?
    * How do I know when I reach the end?
    * Is there another way to ask for the data we need?
    * What _information_ do we need from the data?
    * How would we [collate the data](https://en.wikipedia.org/wiki/Collation)?
  * New checklist:
    * Fetch data with `$http`
    * Collate data with `lodash`
    * Attach to Controller
    * Loop with `ng-repeat` as necessary
    * Add placeholders to replace!

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `32 -- You Only GET Twice -- YOUR NAME`
  *  _WIP Branch_:
  * _WIP Files_:
* [ ] **Journal, Week 7: Any Way You Want It**
* [ ] **Reading APIs: `hello.js`**
* [ ] **Shaping Up with Angular JS**
* [ ] **You Only `GET` Twice**
```

### Journal, Week 7: Any Way You Want It

### Reading APIs: `hello.js`

### Shaping Up with Angular JS: Round 2

### You Only `GET` Twice

## Resources

* LINK
