# ASSIGNMENT TITLE

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `XX -- Assignment Name -- YOUR NAME`
  * _WIP Branch_:
  * _WIP Files_:
* [ ] **WRITING**
  * checkpoints
* [ ] **Reading APIs: `gulp-inject`**
  * `npm install --save-dev gulp-inject gulp-angular-filesort`
  *
* [ ] **CODING**
  * checkpoints
```

### WRITING ASSIGNMENT

### Reading APIs: `gulp-inject`

Read about `gulp-inject` and `gulp-angular-filesort` and [follow this recipe](https://www.npmjs.com/package/gulp-inject#injecting-angularjs-scripts-for-development) to inject the scripts from `app/scripts/` into `index.html` _inside_ the `<!-- build:js -->` blocks for `gulp-useref`. When you're done, the task `gulp inject` should update `index.html` with all the JavaScript files for your app, and running `gulp build` and `gulp serve:dist` should result in a fully functional application.

#### BEAST MODE

Our friend `gulp-inject` can also effectively replace `wiredep` with some help from `bower-main-files` and another `gulp` recipe. Can you change `gulp wiredep` to use `gulp-inject` and `bower-main-files` instead of `wiredep`...? If so, I guess we don't need `wiredep` as a dependency anymore, huh?

#### NIGHTMARE MODE

A more efficent method of delivering view partials is to [include them in the `index.html` file with `<script type="text/ng-template">` tags](https://docs.angularjs.org/api/ng/directive/script). If the `id` attribute of the tag matches a `templateUrl` path specified in a route, the contents of the `<script>` tag will be used as that template, instead. Can `gulp-inject` help with that, too?

### CODING ASSIGNMENT

## Resources

* LINK
