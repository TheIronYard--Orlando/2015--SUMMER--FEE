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
* [ ] **CODING**
  * checkpoints
```

### Journal, Week 8: Lovin' Touchin' Squeezin'

Well, it's Thursday. You should have your journal entries and your template features ready and reviewed. Merge what you got, then _open a release branch_ from `remodeling` to `master`. Bump your version number and get some eyes on your work.

### Reading APIs: `gulp-inject`

Read about `gulp-inject` and `gulp-angular-filesort` and [follow this recipe](https://www.npmjs.com/package/gulp-inject#injecting-angularjs-scripts-for-development) to inject the scripts from `app/scripts/` into `index.html` _inside_ the `<!-- build:js -->` blocks for `gulp-useref`. When you're done, the task `gulp inject` should update `index.html` with all the JavaScript files for your app, and running `gulp build` and `gulp serve:dist` should result in a fully functional application.

#### BEAST MODE

Our friend `gulp-inject` can also effectively replace `wiredep` with some help from `bower-main-files` and another `gulp` recipe. Can you change `gulp wiredep` to use `gulp-inject` and `bower-main-files` instead of `wiredep`...? If so, I guess we don't need `wiredep` as a dependency anymore, huh?

#### NIGHTMARE MODE

A more efficent method of delivering view partials is to [include them in the `index.html` file with `<script type="text/ng-template">` tags](https://docs.angularjs.org/api/ng/directive/script). If the `id` attribute of the tag matches a `templateUrl` path specified in a route, the contents of the `<script>` tag will be used as that template, instead. Can `gulp-inject` help with that, too?

### CODING ASSIGNMENT

## Resources

* LINK
