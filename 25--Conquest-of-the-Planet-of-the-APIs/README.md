# 25 -- Conquest of the Planet of the APIs

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Finish building `TIY-Github` together!

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `25 -- Conquest of the APIs -- YOUR NAME`
  *  _WIP Branch_:
    * `TIY-Mashup`
      * `master`
      * `yak-shaving`
      * `develop`
      * `feature/*`
  * _WIP Files_:
    * `TIY-Mashup`
      * `dist/.gitignore` -- EVERYTHING
      * `src/` -- H5BP
        * `scss/*.scss` -- Sass files!
        * `css/.gitignore` -- Nothing here!
        * `js/main.js`
        * `index.html`
      * `.gitignore`
      * `bower.json` -- Browser dependencies!
        * `depdendencies`
          * `jquery`
          * `lodash`
          * `modernizr`
          * `normalize.css`
      * `package.json`
        * `scripts`
          * `start`
          * `sass`
        * `devDependencies`
          * `bower`
          * `browser-sync`
          * `node-sass`
          * `wiredep`
* [ ] **Build Me Something Beautiful**
  * more coming!
```

### Build Me Something Beautiful

You have [a list of APIs](../APIs.md), a weekend, and two people. Build me something beautiful: your own original idea, created jointly.

I want to see your work on this assignment -- planning, feature branches, PRs, pivots -- in a new repo named `TIY-Mashup`. One of your duo will create the repo and invite the other as a "collaborator" so that you can both push. Follow the new workflow that we've been using: `master` is sacred, `feature/*` branches get merged into `develop` _only_. On Monday morning, we'll create a `release` branch and deploy your code onto the internet. God help us all.

Some of [the APIs on the list](../APIs.md) will require [authentication](http://j.mp/1KszrLN). Some will allow you to `GET` data anonymously (like Github), but you won't be able to _create_ data unless authenticated. Some APIs will have a restrictive [CORS policy](http://j.mp/1L4sYp6) and will only be accessible via [JSONP](http://j.mp/1L4txz5) or a pre-shared key or secret. You can use [this free JSONP proxy service](http://jsonp.herokuapp.com/) to circumvent some restrictions and [Hello JS](http://adodson.com/hello.js/) to provide authentication for your app.

You'll have to figure out what you can and cannot do by experimentation; punt when you hit a wall.

#### IMPORTANT!

Start with a plan. Whiteboard ideas. Take pictures and load them into Skitch or Preview to mark up. Save them into your repo. Write some basic User Stories -- **A Smurf can smurf so that Smurfs can smurf** -- and add them to Issue #1 in your shared repo: **The Big Plan**. Break those down into smaller pieces _together_ and make additional issues for them.

I will be looking for these pieces. **Write no code on Thursday** but you are allowed to pair up on yak shaving.

## Additional Resources

* **Explain [Authentication vs Authorization](http://j.mp/17ihbnR)**
* **Your handy OAuth2 authentication helper: [Hello JS](http://adodson.com/hello.js/)**
* **What is [JSONP](http://j.mp/1L4txz5)?**
