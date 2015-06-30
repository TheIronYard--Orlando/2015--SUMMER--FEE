# 35 -- Firebase in the Sky

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Tools on Tuesday

* **Routing with `angular-route`**
  * Refactor `TIY-Gradebook` with `ng-route`
    * Install `angular-route` & `ngRouter`
    * Define routes for:
      * Repositories (Cohorts): `repositories.html`
      * Milestones (Assignments): `milestones.html`
      * default (`otherwise`)
    * Start with simple template replacement...
    * Inject `$routeParams` Services into Controllers for `:cohort` param
    * Refactor `ng-controller` out of Views
  * Define routes for `TIY-Upvote`
    * Identify possible routes:
      * `questions/` -- list of questions
      * `questions/new` -- add question
      * `questions/:question` -- one question
      * `questions/` + `?filter=popular` -- filter questions
* **Firebase REST API + Restangular**
  * Refactor `TIY-Gradebook` with Restangular
    * Install Restangular & inject into `MainController`
    * Refactor `$http` into `Restangular.one(...).get()`
      * Configure `Restangular`:
        * `setBaseUrl`
        * `setDefaultRequestParams`
        * `setRequestSuffix`
      * Refactor `repos`, `milestones`, `issues`
    * Refactor to...
      * ...named Services?
      * ...`config` callbacks?
  * Add Restangular to `TIY-Upvote`
    * Install Restangular & inject into `MainController`
    * Configure Restangular for Firebase app
    * Put data in Firebase manually, fetch in Controller
    * Update data in Firebase with Restangular
    * Delete data from Firebase manually, reload
    * Create data in Firebase with Restangular

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `35 -- Firebase in the Sky -- YOUR NAME`
    * Link to PRs in
      * `USERNAME.github.io`
        * `journal-week-8` into `master`
        * `feature/*` x3 into `remodeling`
        * `release/X.Y.Z` into `master`
      * `TIY-Upvote`
        * `feature/*` into `develop`
        * `release/0.1.0` into `master`
* [ ] **Journal, Week 8: Lovin' Touchin' Squeezin'**
  * [ ] feature 1 complete!
  * [ ] feature 2 started!
  * [ ] feature 3 planned!
* [ ] **All Your Firebase...**
  * [ ] Created branch `feature/getting-started`
  * [ ] Defined module `tiy-upvote`...
  * [ ] Defined `MainController`...
  * [ ] Attached `tiy-upvote` to `<html>`...
  * [ ] Attached `MainController as app` to `<body>`...
  * [ ] Included `Restangular` on the page...
  * [ ] Added `restangular` as a dependency to `tiy-upvote`
  * [ ] Added `Restangular` as a dependency to `MainController`...
  * [ ] Configured `Restangular` to use _your_ Firebase...
  * [ ] Pushed data into _your_ Firebase with `Restangular.one(...).put()`
  * [ ] Fetched data from _your_ Firebase with `Restangular.one(...).get()`
  * [ ] Commented that code...
  * [ ] Merged that branch...
* [ ] *...Are Belong To Us**
  * [ ] Created _Milestones_ for User Stories
  * [ ] **Anyone can view a list of Questions...**
    * [ ] `feature/question-list-scaffolding`
      * [ ] created `views/questions.html`
      * [ ] added route `questions`
      * [ ] wrote MFg HTML for question list
      * [ ] added dummy text and numbers
      * [ ] wrote Sass with Bootstrap
    * [ ] `feature/question-list-dummy-data`
      * [ ] created dummy data for `questions`
      * [ ] attached dummy data to controller
      * [ ] used `ng-repeat` to generate list
      * [ ] used `{{expressions}}` with dummy data
    * [ ] `feature/question-list-live-data`
      * [ ] created real data in Firebase (manually)
      * [ ] fetched data from Firebase with `Restangular`
      * [ ] attached data to controller
  * [ ] **Anyone can view a Question...**
    * [ ] `feature/question-detail-scaffolding`
    * [ ] `feature/question-detail-dummy-data`
    * [ ] `feature/question-detail-live-data`
  * [ ] **Anyone can view the Answers...*
    * [ ] `feature/answer-list-scaffolding`
    * [ ] `feature/answer-list-dummy-data`
    * [ ] `feature/answer-list-live-data`
  * [ ] **A Member can add a Question...*
    * [ ] `feature/question-add-scaffolding`
      * [ ] created `views/questions-add.html`
      * [ ] defined route `questions/add`
      * [ ] wrote MFg HTML (`<form>`) to add question
      * [ ] added dummy text and numbers (where appropriate)
      * [ ] wrote Sass with Bootstrap
    * [ ] `feature/question-add-dummy-data`
      * [ ] form processing (simply)
    * [ ] `feature/question-add-live-data`
      * [ ] data persistence (simply)
  * [ ] **A Member can add an Answer...**
    * [ ] `feature/answer-add-scaffolding`
    * [ ] `feature/answer-add-dummy-data`
    * [ ] `feature/answer-add-live-data`
  * [ ] **A Member can vote on a Question...*
    * [ ] `feature/question-vote-scaffolding`
      * [ ] wrote MFg HTML and Sass for voting interface
      * [ ] don't forget hover and active states!
    * [ ] `feature/question-vote-dummy-data`
      * [ ] added and attached dummy data (up-vote, down-vote, no-vote, `nVotes`)
      * [ ] need more styles? of course ya do!
    * [ ] `feature/question-vote-interface`
      * [ ] wired up voting interface:
        * no-vote to up-vote: set `.active`, update `nVotes`
        * up-vote to no-vote: remove `.active`, update `nVotes`
        * no-vote to dn-vote: set `.active`, update `nVotes`
        * dn-vote to no-vote: remove `.active`, update `nVotes`
      * [ ] **BEAST MODE** refactor to service object?
    * [ ] `feature/question-vote-live-data`
      * [ ] fetch `votes` when `question` is loaded
      * [ ] populate interface with `votes`
      * [ ] update `question` data when `votes` added / changed
      * [ ] **BEAST MODE** display vote for current user?
  * **A Member can vote on an Answer...**
  * **A Member who asked a Question can accept an Answer...**
  * **_BEAST MODE_ Anyone can login with Github...**
    * [ ] `feature/login-scaffolding`
      * [ ] created `views/login.html`
      * [ ] defined route `login`
      * [ ] configured OAuth dance for Firebase and Github
      * [ ] `bower install firebase`
      * [ ] configure `Firebase` in `MainController`
    * [ ] `feature/login-dummy-data`
      * [ ] wrote MF'g HTML and Sass for `views/login.html`
      * [ ] wired up "Login with Github" button to `Firebase.authWithOAuthPopup`
      * [ ] confirm user login with:
        * [ ] tracer bullet
        * [ ] display "Logout" button
        * [ ] display username / avatar
        * [ ] redirect to `questions` route
    * `feature/login-live-data`
      * [ ] prevented access to any route until authenticated
      * [ ] recorded username for authenticated actions:
        * [ ] add a Question
        * [ ] add an Answer
        * [ ] vote on Question
        * [ ] vote on Answer
        * [ ] accept Answer for Question
        * [ ] unaccept Answer for Question
    * `feature/login-service`
      * [ ] refactor to named service: `Auth`
        * `Auth.login()`
          * `@param none`
          * `@return Promise`
        * `Auth.logout()`
          * `@param none`
          * `@return Promise`
        * `Auth.isAuthd()`
          * `@param none`
          * `@return Boolean`
        * `Auth.getAuth()`
          * `@param none`
          * `@return Object from Firebase.getAuth()`
```

### WRITING ASSIGNMENT

### READING ASSIGNMENT

### CODING ASSIGNMENT

## Resources

* LINK
