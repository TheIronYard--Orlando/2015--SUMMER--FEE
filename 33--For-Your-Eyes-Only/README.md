# 33 -- For Your Eyes Only

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

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
* **Authentication is harder...**
  * [OAuth is hard...](http://oauthbible.com/#oauth-2-two-legged)
  * [Github doesn't make it easier...](https://developer.github.com/v3/oauth/)
  * [Firebase makes it bearable...](https://www.firebase.com/docs/web/guide/login/github.html)
  * [Shave the yak...](https://www.firebase.com/docs/web/guide/user-auth.html#section-configuring)
    * Configure Firebase
      * [Login to Firebase](https://firebase.com/login)
      * Select your Firebase app
      * Open "Login & Auth"
      * Select "Github" as a provider
      * Check "Enable Github Authentication"
      * What is that client ID and secret?
    * Configure Github
      * Open [Developer Applications](https://github.com/settings/developers)
      * Register a new Application:
        * **Application Name:** `TIY-Gradebook`
        * **Homepage URL:** your repository
        * **Authorization callback URL:** ???
      * From [Firebase: Configuring your Application](https://www.firebase.com/docs/web/guide/login/github.html#section-configure)
        * `https://auth.firebase.com/v2/<YOUR-FIREBASE-APP>/auth/github/callback`
        * replace `<YOUR-FIREBASE-APP>` with the name of your Firebase app
      * Look, a client ID and secret!
  * Time to write some code!
    * `bower install firebase` to get the `Firebase` library
    * Use `new Firebase` to get a reference to your Firebase app
    * Create a login button that triggers [`authWithOAuthPopup`](https://www.firebase.com/docs/web/api/firebase/authwithoauthpopup.html)
    * Attach a listener to [`onAuth`](https://www.firebase.com/docs/web/api/firebase/onauth.html)
    * Now what?
  * Make an _authenticated_ API request!

## Assignment

No new checklist items...

### Shaping Up with Angular JS: Round 3

Continuing with our exercise with Angular JS, work through levels 3 (again) and 4 of _Shaping Up_ on CodeSchool.  Over the weekend, work on levels 4 and 5.  Try to work through the challenges on your own, but don't get bogged down.

### For Your Eyes Only: Beast Mode Edition

Using the step-by-step process from the lecture, configure your Firebase app with a client ID and secret from Github and Github with the Authorization URL from Firebase. Then `bower install firebase` and try authenticating with Github. Keep an eye peeled for the easy-to-miss popup blocker notification in Chrome. Browser security rules consider any JavaScript that causes a new window to open without user interaction -- i.e. `window.open` outside of a `click` event -- to be a "popup" that _needs_ to be blocked.

Once you've got your login working, can you get an access token? How can you add that access token to your `$http` calls? Once you've got _that_ puzzle solved, what about making some _real_ API requests instead... C'mon. Do it!

