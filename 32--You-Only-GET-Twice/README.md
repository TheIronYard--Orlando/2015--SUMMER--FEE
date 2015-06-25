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

Tomorrow is Thursday; let's see those features and blog posts! Don't review the work of someone who was on your team, though!

### Shaping Up with Angular JS: Round 2

Continuing with our exercise with Angular JS, work through levels 2 (again) and 3 of _Shaping Up_ on CodeSchool. Try to work through the challenges on your own, but don't get bogged down.

### You Only `GET` Twice

Use `ng-include` to make `repositories.html` and `milestones.html` into minimal views that will be rendered into the layout shell of `index.html` as we did in class. Give yourselves some simple navigation links that allow you to switch "pages" for testing purposes.

Next, use `$http` to fetch all the data that we need for _both_ pages into `MainController`... Yes, I know it's ugly. We'll refactor to separate Controllers together. Attach the data to the Controller instance -- `this` -- and use `ng-repeat` to populate the list of Repositories and Milestones for the class from our canned data.

Progress bars are a little tricky, so start with hard-coded widths for each bar. Attach some dummy data to `MainController` so that you can print it inside the bar. For example, if there were 2 green Issues, 4 yellow Issues, 1 red Issue and 2 ungraded Issues in Milestone 1, what length should the bars be? Display the number of Issues of each color inside the corresponding bar.

#### BEAST MODE

The `width` of those bars is based upon the percentage of the total number of Issues. That's just math, right? Try simply at first: Angular Expressions (those `{{ }}` things) can do math inside. Wouldn't it be better to have a `percentage` function that you could call?

#### NIGHTMARE MODE

Here are two User Stories that expand the functionality of the app beyond the two Views we've focused on so far:

##### I can view the list of Submissions (Issues) for an Assignment (Milestone) so that I can see what I need to grade.

* include name, state (open, closed), creator, creation time, assignee, and label
* include comments? maybe hidden initially?

##### I can _grade_ a Submission (Issue) for an Assignment (Milestone) so that I can provide feedback to the Students efficiently.

* drop-down menu for applying a Label
* only allows single selection (Github allows multiple)
* updates the Issue on assignment
* additionally assigns Issue to creator (Student), adds a comment: "Please review and close."

### API Gymnastics

As we talked about, getting cached data for the Issues assigned to each Milestone is tricky. We could fetch _all_ the Issues assigned to _any_ Milestone then group them by Milestone, or we could request the Issues for _each_ Milestone _separately_. The latter is actually a touch more efficient, since we don't have to deal with pagination from the API in that scenario.

Start by fetching the data for all the Issues assigned to Milestone 1 and store the results in `api/github/` as if you had requested an endpoint like `milestones/1/issues` under the class repo. That endpoint doesn't exist in the Github API, so we're kind of lying, but it makes prototyping _much_ easier.

When you have those Issues, make sure you can fetch them into the page and start thinking about how you can collate them by Label... [`lodash` might help](http://lodash.com/docs#groupBy). Might as well get the data for more than one Milestone, too.

### Reading APIs: Firebase Auth

In order to get _all that data_ for Issues when the page loads, our application is going to make _a lot_ of requests in a short amount of time. You might recall that [the Github API enforces a rate limit](https://developer.github.com/v3/#rate-limiting) on both authenticated and unauthenticated requests. We've been skirting that limit so far by using locally cached data stored in our project, but for our app to be _useful_, it needs to fetch the latest data from the API instead.

To [authenticate with the Github API](https://developer.github.com/v3/#authentication) requires [the secure exchange of an OAuth2 access token](https://developer.github.com/v3/oauth/) in a 3-step workflow typically called "the OAuth dance" (not kidding), and not all OAuth providers make it easy (or possible) for browser-only applications like ours to authenticate. Github is one of them. Go figure.

So to make our lives easier, we're going to use [Firebase](http://firebase.com) to act as a 3rd party authentication service for our app. [The `firebase` library](https://github.com/firebase/firebase-bower) is available via `bower`. Read about [_User Authentication_ in the Firebase documentation](https://www.firebase.com/docs/web/guide/user-auth.html) to learn about it's use, including [an interactive demo](http://jsfiddle.net/firebase/a221m6pb/embedded/result,js/) you can play around with on [jsFiddle](http://jsfiddle.net)

Specifically read about [authenticating with Github](https://www.firebase.com/docs/web/guide/login/github.html) and enumerate the steps to configuring Firebase and Github to play nice together. You'll need them again. Here are some questions to guide you:

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

## Resources

* **What is OAuth anyway?**
  * https://en.wikipedia.org/wiki/OAuth
  * https://www.youtube.com/watch?v=G27DGHeKEfg (:tv:)
  * http://oauth.net/ | http://oauth.net/about
  * http://oauthbible.com/
  * http://stackoverflow.com/questions/4201431/what-exactly-is-oauthopen-authorization

