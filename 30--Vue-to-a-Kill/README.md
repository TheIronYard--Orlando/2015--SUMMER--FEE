# 30 -- A View to a Kill

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Parking Lot Topics** (~15m)
* **Weekly QUIZ!** (~15m)
* **Homework Review** (~30m)

## Parking Lot Review

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `30 -- A View to a Kill -- YOUR NAME`
    * Link to PRs in `USERNAME.github.io` for:
      * `journal-week-7` to `master`
      * `remodeling` to `master`
    * Link to PR in `TIY-Gradebook` for:
      * `release/0.0.0--yak-shaving` into `master`
      * `feature/planning` into `develop`
  *  _WIP Branch_:
    * `USERNAME.github.io`
      * `journal-week-7`
      * `remodeling`
      * `feature/*` x3
    * `TIY-Gradebook`
      * `master`
      * `release/0.0.0--yak-shaving` from `master`
      * `develop` from `master`
      * `feature/planning` from `develop`
  * _WIP Files_:
    * `USERNAME.github.io`
      * reflective journal
      * tutorial journal
      * bookmark journal
      * CSS / SCSS / JS / HTML
* [ ] **Journal Week 7: Any Way You Want It**
  * [ ] Started Reflective Journal: On being Team Leads
  * [ ] Started Tutorial Journal
  * [ ] Started Bookmark Journal
  * [ ] Started first feature branch!
  * [ ] Started second feature branch!
  * [ ] Started third feature branch!
* [ ] **Reading APIs: Github Issues**
  * How can I fetch all Issues from the API...
    * assigned to a specific user?
    * created in a specific repo?
    * assigned to a specific milestone? ...to any milestone? ...to none?
    * that are still open? ...closed? ...either?
  * What is the structure of an Issue resource?
    * What fields are _always_ returned?
    * What fields are _optionally_ returned?
    * What are the types and sample contents of _all_ returned fields?
  * How can I fetch all Milestones from the API? ...Labels?
  * What is the structure of the Milestone and Label resources?
  * How would I fetch...
    * ...all the _open_ Issues from a specific repo...
    * ...with the label "Attendance"...
    * ...sorted oldest first?
    * ...with 100% task completion?
  * **BEAST MODE** How would I...
    * ...fetch Issues for an assigned Milestone...
    * ...group them by Label...
    * ...and calculate percentage of total Issues?
* [ ] **Shaping Up with Angular JS: Speed Play**
  * [ ] Completed Level 1!
  * [ ] Completed Level 2!
  * [ ] Completed Level 3!
  * [ ] Completed Level 4!
  * [ ] Completed Level 5!
  * [ ] Show me your badge!
* [ ] **Install-Fest!**
  * `brew install git-flow-avh`
  * `npm install --global`
    * [ ] `gulp` (>=3.9)
    * [ ] `generator-gulp-webapp`
  * `bower install --save`
    * [ ] `angular`
    * [ ] `restangular`
* [ ] **Yak Shaving: TIY-Gradebook**
  * [ ] Created `TIY-Gradebook` on Github and cloned locally...
  * [ ] Ran `git flow init` in `TIY-Gradebook`... Defaults are awesome.
  * [ ] Ran `git flow release start 0.0.0--yak-shaving`... What happened?
  * [ ] Used `yo gulp-webapp` to scaffold!
    * Sass? Of course!
    * Bootstrap? Why not?
    * Modernizr? Always...
  * [ ] Ran `npm install --link` and `bower install`...
  * [ ] What happened? What's in `npm_modules` and `bower_components`?
  * [ ] Ran `bower install --save angular`
  * [ ] Pushed `release/0.0.0--yak-shaving` to Github and opened PR...
  * [ ] Ran `git flow feature start planning`... What happened?
  * [ ] Added concept sketches to `specs/`
  * [ ] Pushed `feature/planning` to Github...
```

### Journal, Week 7: Any Way You Want It

Welcome to Week 8! Let's have a look back on Week 7 and your experience as Team Leaders. In your reflective journal this week, relate what you _observed_ working _as_ Team Lead yourself and working _with_ a Team Lead. No need to name anyone; worry about what you've _learned_ later. Get someone who _wasn't_ on your team to review for you this week.

I'm sure there are some valuable tools and techniques you've leared over the last 7 weeks... How about a short tutorial journal? CSS grids are awesome? Write about 'em! Using Sass as a programming language? Tell us how! Just figured out how to make that tabbed panel interface _exactly right_? Share with the world!

While we're on the subject of tools, drop us a bookmark to one of them and write a little paragraph-long **tl;dr** on it.

#### Any Way You Want It

Another week, another three features in your `USERNAME.github.io` repo... Gimme PRs for those feature branches, and link 'em. Link 'em good.

### Reading APIs: Github Issues

This week we're building an app that heavily utilizes the Github Issues API, so you'll want to dig up the answers to these questions. Be sure to pair and group up with others in the cohort that are better at reading the docs and force them to _explain_ the answers... don't just take them!

  * How can I fetch all Issues from the API...
    * assigned to a specific user?
    * created in a specific repo?
    * assigned to a specific milestone? ...to any milestone? ...to none?
    * that are still open? ...closed? ...either?
  * What is the structure of an Issue resource?
    * What fields are _always_ returned?
    * What fields are _optionally_ returned?
    * What are the types and sample contents of _all_ returned fields?
  * How can I fetch all Milestones from the API? ...Labels?
  * What is the structure of the Milestone and Label resources?
  * How would I fetch...
    * ...all the _open_ Issues from a specific repo...
    * ...with the label "Attendance"...
    * ...sorted oldest first?
    * ...with 100% task completion?
  * **BEAST MODE** How would I...
    * ...fetch Issues for an assigned Milestone...
    * ...group them by Label...
    * ...and calculate percentage of total Issues?

### Yak Shaving: `TIY-Gradebook`

This week, we'll rebuild [the `TIY-Gradebook` app](http://theironyard--orlando.github.io/TIY-Gradebook/) together in class using [Angular JS](http://angularjs.org), so you'll need to get familiar with Angular JS and the Github Issues API. We also need a place to play, so start yak shaving in a new repo called `TIY-Gradebook`... everyone should have one.

We'll use a _new_ generator this week -- [`generator-gulp-webapp`](https://github.com/yeoman/generator-gulp-webapp) -- and get [Angular JS](http://angularjs.org) in the mix with a quick `bower install`. We'll also start using [`git flow`](http://nvie.com/posts/a-successful-git-branching-model/) this week, which makes feature and release branches a whiz.

#### Shaping Up with Angular JS

Throughout the week, you'll be assigned a piece of [_Shaping Up with Angular JS_ on CodeShool](https://www.codeschool.com/courses/shaping-up-with-angular-js) to work through. For tonight, play through the _entire course_ by watching the videos and just taking the answers on the challenge. Type them yourself -- quickly -- to move forward. Take a picture of your badge for the course when you complete and attach it to your _WIP Issue_.

#### Install-fest!

To make the `git flow` workflow easier, we're going to use the `git-flow-avh` tool available from `brew`. There's also `git-flow` package in `brew`... **Don't install `git-flow`!** It's old an unmaintained; many people are trying to kill it. **Install `git-flow-avh` instead!

## Resources

* **Where did these default styles come from for `<input>` elements?**
 * https://en.wikipedia.org/wiki/Widget_(GUI)
* **Where can I learn more about branching models with `git`?**
 * [_A Successful Branching Model_ by @nvie](http://nvie.com/posts/a-successful-git-branching-model/)
 * [_Comparing Workflows_ on Atlassian.com](https://www.atlassian.com/git/tutorials/comparing-workflows)
 * [_Why `git` is better than X_ by Scott Chaçon](https://github.com/schacon/whygitisbetter) -- the domain `http://whygitisbetterthanx.com` is dead

