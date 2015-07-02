# Reign of Firebase

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `37 -- Reign of Firebase -- YOUR NAME`
    * Links to:
      * `USERNAME.github.io`
        * PRs for `feature/*` into `remodeling` (merged)
        * PR for `journal-week-8` into `master`
        * PR for `release/X.Y.Z` into `master`
      * `TIY-Upvote`:
        * Issue No. 1: Planning
        * PRs for `feature/*` into `develop`
        * PR for `feature/inject-all-the-things` into `develop`
  * _WIP Branch_:
    * `USERNAME.github.io`
      * `feature/*` from `remodeling`
      * `journal-week-8` from `master`
      * `release/X.Y.Z` from `remodeling`
    * `TIY-Upvote`
      * `feature/*` from `develop`
      * `feature/inject-all-the-things` from `develop`
  * _WIP Files_:
    * `TIY-Upvote`
      * `app/`
        * `scripts/`
          * `tiy-upvote/`
            * `app.js` -- module definition and `.config` functions
            * `controllers/`
              * `*Controller.js`
        * `styles/`
          * `*.scss`
        * `views/`
          * `*.html`
        * `index.html`
      * `package.json`
        * `gulp-inject`
* [ ] **Journal, Week 8: Lovin' Touchin' Squeezin'**
  * [ ] reflective journal done and reviewed!
  * [ ] tutorial journal done and reviewed!
  * [ ] bookmark journal done and reviewed!
  * [ ] feature x1 done, reviewed, and merged!
  * [ ] feature x2 done, reviewed, and merged!
  * [ ] feature x3 done, reviewed, and merged!
  * [ ] release branch `X.Y.Z` opened!
* [ ] **Reading APIs: `gulp-inject`**
  * `npm install --save-dev gulp-inject gulp-angular-filesort`
  *
* [ ] **A Burning Ring of Firebase**
  * [ ] Release: `0.2.0--Friday`
  * [ ] Release: `0.3.0--Sunday`
  * **Minimum Viable Product**
    * [ ] **Anyone can view the list of Questions...**
    * [ ] **Anyone can view a specific Question...**
    * [ ] **Anyone can login with Github...**
    * [ ] **A Member can ask a Question...**
    * [ ] **A Member can provide an Answer...**
    * [ ] **A Member who asked a Question can select an Answer...**
  * **BEAST MODE: Stretch Goals**
    * [ ] **A Member can vote on an Answer...**
    * [ ] **A Member can vote on a Question...**
    * [ ] **A Member can comment on Questions...**
    * [ ] **A Member can comment on Answers...**
  * **NIGHTMARE MODE**
    * [ ] **Anyone can sort Questions...**
      * by number of votes
      * by most recent
      * by unanswered
```

### Journal, Week 8: Lovin' Touchin' Squeezin'

Well, it's Thursday. You should have your journal entries and your template features ready and reviewed. Merge what you got, then _open a release branch_ from `remodeling` to `master`. Bump your version number and get some eyes on your work.

### Reading APIs: `gulp-inject`

Read about `gulp-inject` and `gulp-angular-filesort` and [follow this recipe](https://www.npmjs.com/package/gulp-inject#injecting-angularjs-scripts-for-development) to inject the scripts from `app/scripts/` into `index.html` _inside_ the `<!-- build:js -->` blocks for `gulp-useref`. When you're done, the task `gulp inject` should update `index.html` with all the JavaScript files for your app, and running `gulp build` and `gulp serve:dist` should result in a fully functional application.

#### BEAST MODE

Our friend `gulp-inject` can also effectively replace `wiredep` with some help from `bower-main-files` and another `gulp` recipe. Can you change `gulp wiredep` to use `gulp-inject` and `bower-main-files` instead of `wiredep`...? If so, I guess we don't need `wiredep` as a dependency anymore, huh?

#### NIGHTMARE MODE

A more efficent method of delivering view partials is to [include them in the `index.html` file with `<script type="text/ng-template">` tags](https://docs.angularjs.org/api/ng/directive/script). If the `id` attribute of the tag matches a `templateUrl` path specified in a route, the contents of the `<script>` tag will be used as that template, instead. Can `gulp-inject` help with that, too?

### A Burning Ring of Firebase

You need two more releases and deployments over the weekend: one on Friday and one on Sunday. We'll review your finished work on Monday morning, have a brief retrospective, and then get to your pitches. Don't forget to bump your version numbers in each release _and test your deployments!_

I also cannot stress enough how important it is _NOT to wait until Sunday night at 12:30am_ to start your final release and deployment. Use your Friday release to _practice_ the release process.

Even worse than waiting until the last minute to release is waiting until the last minute to merge a feature... certainly nothing could go wrong there. Recognize when it's time to kill a feature and when a feature is "done enough" to merge. Merge _before_ you go off on a wild tangent or crazy experiment.

## Resources

* LINK
