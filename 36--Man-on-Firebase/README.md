# 36 -- Man on Firebase

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `36 -- Man on Firebase -- YOUR NAME`
    * Links to:
      * `USERNAME.github.io`
        * PRs for `feature/*` into `develop` (merged)
        * PR for `journal-week-8` into `master`
      * `TIY-Upvote`:
        * Issue No. 1: Planning
        * PRs for `feature/*` into `develop`
        * PR for `release/0.1.0--scaffolding` into `master`
        * Tag `0.1.0--scaffolding` in Github
        * URL to deployment in Firebase
  * _WIP Branch_:
    * `USERNAME.github.io`
      * `feature/*` from `develop`
      * `journal-week-8` from `master`
    * `TIY-Upvote`
      * `feature/*` from `develop`
      * `release/0.1.0--scaffolding` from `develop`
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
      * `bower.json`
        * `gulp-inject`
* [ ] **Journal, Week 8: Lovin' Touchin' Squeezin'**
  * [ ] reflective journal written and reviewed?
  * [ ] tutorial journal written and reviewed?
  * [ ] bookmark journal written and reviewed?
  * [ ] feature 1 complete!
  * [ ] feature 2 complete!
  * [ ] feature 3 complete?
* [ ] **Reading APIs: `gulp-ng-annotate`**
  * [ ] `gulp-ng-annotate`
    * [ ] `npm install --save-dev gulp-ng-annotate`
    * [ ] added `gulp-ng-annotate` to `gulp.task('html')`
    * [ ] working `gulp build` and `gulp serve:dist`
  * [ ] `firebase deploy`
    * [ ] `npm install --global firebase-tools`
    * [ ] read about `firebase` CLI
    * [ ] `firebase deploy`
* [ ] **Fire on the Mountain...**
  * [ ] opened `release/0.1.0--scaffolding` from `develop` with _just_ scaffolding features
  * [ ] published `release/0.1.0--scaffolding` to Github and opened PR to `master`
  * [ ] finished `release/0.1.0--scaffolding` with `git flow release finish -k`
  * [ ] pushed `master` _and_ tag `0.1.0--scaffolding` to Github
  * [ ] confirmed PR is merged!
  * [ ] deployed `0.1.0--scaffolding` to Firebase Hosting!
```

### WRITING ASSIGNMENT
### Reading APIs: `gulp-ng-annotate` and `firebase deploy`

Read about [`gulp-ng-annotate`](https://www.npmjs.com/package/gulp-ng-annotate) and [`ng-annotate`](https://github.com/olov/ng-annotate/blob/master/README.md), which it depends on. Extrapolate the recipe into your `gulp build` task so that your built `app.js` includes the appropriate annotations. You'll be able to confirm your build with `gulp serve:dist`... check the console for errors.

Once you've got a successful build, you can start your release process and deploy...! To where, though? Turns out [Firebase provides free hosting](https://www.firebase.com/docs/hosting/)! Read about the `firebase-tools` CLI tool and deploy your tagged release with `firebase deploy`. Verify your deployment -- by visiting the website and testing it as a group -- and drop a link to your deployment in your _group_ Planning and _individual_ WIP Issues.

### Fire on the Mountain

Beyond continuing your WIP on the _massive_ feature list, your big focus for tonight is getting a release cut and a delpoyment, uh... deployed. Your release should be named `release/0.1.0--scaffolding`, and you should have a PR from that branch into `master`. Remember to bump the version number!

Once you've reviewed the _built_ release as a team -- `gulp serve:dist` FTW! -- and corrected any mistakes you identify as a group, finish the release, _keeping_ the local and remote branches, and push `master` and `develop` to Github to mark the PR as merged.

Then check out your _tagged_ release and deploy to Firebase Hosting with `firebase deploy`! Hooray, you built some internet!

## Resources

* LINK
