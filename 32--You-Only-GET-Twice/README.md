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
    * Link to PRs in:
      * `USERNAME.github.io`
        * `journal-week-7`
        * `feature/*` to `remodeling`
      * `TIY-Gradebook`
        * `feature/*` into `develop`
        * NO PR FROM `develop` INTO `master`!
  * _WIP Branch_:
    * `USERNAME.github.io`
      * `journal-week-7`
      * `remodeling`
      * `feature/*`
    * `TIY-Gradebook`
      * `develop`
      * `feature/*`
  * _WIP Files_:
    * `TIY-Gradebook`
      * `api/github/` -- gotta curl 'em all!
      * `app/`
        * `scripts/`
          * `main.js`
        * `styles/`
          * `main.scss`
        * `views/` -- death to boilerplate!
          * `repositories.html`
          * `milestones.html`
        * `index.html` -- dat layout, tho...
      * `bower.json` -- `lodash` anyone?
* [ ] **Journal, Week 7: Any Way You Want It**
  * [ ] Reflective journal complete...
  * [ ] ...and reviewed!
  * [ ] Tutorial journal complete...
  * [ ] ...and reviewed!
  * [ ] Bookmark journal complete...
  * [ ] ...and reviewed!
  * [ ] Feature 1 complete and merged!
  * [ ] Feature 2 complete and merged!
  * [ ] Feature 3 complete and merged!
* [ ] **Reading APIs: Firebase Auth**
  * Sign up for a free Firebase account: http://firebase.com/signup
  * How can I use the Firebase service to authenticate...
    * ...with Github?
    * ...with _other_ providers?
  * How do I revoke a user's authentication?
  * How do I get an `access_token` from Firebase for an authenticated user?
  * To enable authentication, what information do I need...
    * from Firebase?
    * from Github?
    * to give Github?
    * to give Firebase?
* [ ] **Shaping Up with Angular JS**
  * [ ] Level 2 complete (again)!
  * [ ] Level 3 complete!
* **API Gymnastics**
  * [ ] Got cached data for Issues assigned to a Milestone...
  * [ ] Got cached data for Issues assigned to _all_ Milestones...
  * [ ] Got number of Issues for each Label by Milestone...? (munge munge munge)
* [ ] **You Only `GET` Twice**
  * [ ] Used `ng-include` to refactor:
    * [ ] `repositories.html`
    * [ ] `milestones.html`
    * [ ] `index.html`
  * [ ] Added navigation links to switch views...
  * [ ] Fetched ALL THE DATAZ!
  * [ ] Got me a list of Repositories...
    * [ ] Linked to Milestone page...
    * [ ] **BEAST MODE** Include link to "Attendance" Issues?
  * [ ] Got me a list of Milestones...
    * [ ] Linked to Issues for Milestone on Github
    * [ ] With a (dummy) progress bar...
  * [ ] Progress bars hard... so fake it!
    * [ ] Used dummy data to fake different labels
    * [ ] **BEAST MODE** Percentage-based progress bars!
    * [ ] **NIGHTMARE MODE** What about a _second_ progress bar for "closed" issues?
  * **NIGHTMARE MODE** Tell me about your Issues...
    * [ ] I can view the list of Submissions (Issues) for an Assignment (Milestone)...
    * [ ] I can _grade_ a Submission (Issue) for an Assignment (Milestone)...
```

### Journal, Week 7: Any Way You Want It

### Reading APIs: Firebase Auth

### Shaping Up with Angular JS: Round 2

### You Only `GET` Twice

#### API Gymnastics

## Resources

* LINK
