# 34 -- Shave and Let Die

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Weekly QUIZ!** (~15m)
* **Parking Lot Topics** (~15m)
* **Homework Review** (~30m)

## Parking Lot Review

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `34 -- GET and Let Die -- YOUR NAME`
    * Link to PRs in:
      * `USERNAME.github.io`
        * `journal-week-8` into `master`
        * `feature/*` x3 into `remodeling`
      * `TIY-Upvote`
        * `release/0.0.0--yak-shaving` into `master`
  * _WIP Branch_:
    * `USERNAME.github.io`
      * `journal-week-8` from `master`
      * `feature/*` x3 from `remodeling`
    * `TIY-Upvote`
      * `master` -- just `README.md` and `LICENSE`
      * `develop` based on `master`
      * `release/0.0.0--yak-shaving` based on `develop`
  * _WIP Files_:
    * `USERNAME.github.io`
      * `_posts/YYYY-MM-DD-YOUR-TITLE.md` x3
      * `{scss,css}/{main,*}.scss`
      * `js/{main,*}.js`
      * `index.html`
    * `TIY-Upvote` -- `yo gulp-webapp`
      * `app/` -- just `gulp wiredep` changes
        * `styles/main.scss`
        * `index.html`
      * `bower.json` -- add dependencies from below
* [ ] **Journal, Week 8**
  * created `journal-week-8` from `master`
  * flag in the sand for:
    * reflective journal
    * tutorial journal
    * bookmark journal
  * created feature branch x3: `git flow feature start`
* [ ] **Reading APIs: Firebase & Restangular**
  * **Firebase REST API**
  * **Restangular**
* [ ] **Shave and Let Die**
  * [ ] created `TIY-Upvote`
  * [ ] `yo gulp-webapp`
  * [ ] `bower install --save`
    * [ ] `angular`
    * [ ] `angular-route`
    * [ ] `restangular`
```

### Journal, Week 8: Lovin' Touchin' Squeezin'

Last week. Last _official_ journal entries. I hope that you've cultivated a habit, though; maybe one that will last beyond your time here... maybe even into final projects next week. Please write your three journal entries: reflective, tutorial, and bookmark.

Then you've got three little features for your blog template to work on. Time to make some progress...! Have you `git flow init`-ed that repo yet?

### Reading APIs: Firebase & Restangular

#### Firebase REST

We'll need somewhere to save our data for this week's application, and we don't have a ready API that can provide the data for us. Looks like we'll have to make our own with Firebase! Start with [the Firebase REST API docs](https://www.firebase.com/docs/rest/) and delve into the supporting documentation as necessary.

#### Restangular

While we could totally use `$http` to interact with our Firebase apps, [the Restangular library](https://github.com/mgonto/restangular) makes interacting with [REST-ful APIs](https://en.wikipedia.org/wiki/Representational_state_transfer) _much_ easier. The whole API for Restangular fits in a single `README`, so start looking over that.

#### `ngRouter` aka `angular-route`

The simplest library for routing URLs to Controller code and loading templates is `ngRouter`, which comes as the `angular-route` package from Bower. Take some time to review the API for `$routeProvider` and the examples in the official documentation.

### Shave and Let Die

This week, we'll start building a revolutionary new software product: imagine a place where developers can ask questions and get answers from other developers. Even if I don't know the answer, I could vote for a question to increase its visibility on the site, and if I like one of the answers that someone else has added, I could vote that up, too. In fact, that voting thing sounds so important, let's call the thing `TIY-Upvote`.

You'll all need your own `TIY-Upvote` repository, starting with `yo gulp-webapp` for `release/0.0.0`. We'll definitely use Angular JS, and we'll need to store data in Firebase, so we'll need all those dependencies recorded. There are some auxilliary libraries that will make our lives easier: `angular-route` and `Restangular`.

Finally, there are some ~~screenshots~~ _mockups_ in [the `TheIronYard--Orlando/TIY-Upvote` repo on Github](https://github.com/TheIronYard--Orlando/TIY-Upvote) that you could use for Skitching the interfaces, and [the wiki for that repo](https://github.com/TheIronYard--Orlando/TIY-Upvote/wiki)has some User Stories to start you thinking. Can you think of any more?

## Resources

### How can I test for cross-browser compatibility?

* [Sauce Labs](http://saucelabs.com)
* [BrowserStack](http://browserstack.com)
* [IE Tab](http://j.mp/1NpZQt3) -- Not really the same...

### How can I fix IE bugs?

* [Conditional Comments on Wikipedia](https://en.wikipedia.org/wiki/Conditional_comment)
* [Conditional Comments on MSDN](https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx)
* [Conditional Comments on quirksmode.org](http://www.quirksmode.org/css/condcom.html)

### What about _other_ cross-browser quirks?

* See [Can I Use](http://caniuse.com/) and [autoprefixer](https://github.com/postcss/autoprefixer)
* BTW, [already included in `generator-gulp-webapp`](http://j.mp/1LDSMv0)
