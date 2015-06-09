# 23 -- Return to the Planet of the APIs

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Tools[2:1] on Tuesday

* **Let's get some data!**
  * `jQuery.ajax` is a piece of garbage...
  * `jQuery.getJSON` is a bit more descriptive
  * Make me a `Promise`...
  * Show me the `data`!
* **We have the underpants...**
  * What does it all mean?
  * Now where does it all go?
  * What if there was an easier way?

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `23 -- Return to the Planet of the APIs -- YOUR NAME`
    * Link to your PR in `USERNAME.github.io`
    * Link to your PR in `TIY-Github` from `develop` into `master`
  *  _WIP Branch_:
    * `USERNAME.github.io:journal-week-5` from `master`
    * `TIY-Github`
      * `develop` from `master`
      * `feature/*` from `develop`
  * _WIP Files_:
    * `USERNAME.github.io`
      * reflective journal
      * tutorial journal
      * bookmark journal
      * `about/github-api.md`
    * `TIY-Github`
      * `src/index.html`
      * `src/scss/main.scss`
      * `src/css/.gitignore`
      * `src/js/main.js`
* [ ] **Journal, Week 5**
  * [ ] draft of reflective journal
  * [ ] draft of tutorial journal
  * [ ] draft of bookmark journal
* [ ] **Reading APIs**
  * What are the endpoints for fetching...
    * the profile data for a user?
    * the organizations a user belongs to?
    * the repositories a user has created?
    * a filtered list of repositories?
    * a sorted list of repositories?
    * public events for a user?
  * When fetching public events for a user...
    * How many results are returned by default?
    * What limitations exist on fetching _more_ results?
    * What is the basic structure of the results?
    * What fields are included in each result?
    * What are the data types for each field?
    * What are some of the different values for the `type` field?
* [ ] **All your data is belong to us!**
  * [ ] `feature/fetching-data`
    * [ ] `octocat`
      * [ ] got profile data
      * [ ] got repo data
      * [ ] got activity data
    * [ ] `USERNAME`
      * [ ] got profile data
      * [ ] got repo data
      * [ ] got activity data
  * [ ] `feature/adding-placeholders`
    * [ ] "About" column:
      * [ ] avatar image
      * [ ] name and login
      * [ ] stats list
    * [ ] "Repositories" column:
      * [ ] Contributions
      * [ ] Repositories
      * [ ] Activity
  * [ ] `feature/replacing-placeholders`
    * [ ] `octocat`
      * [ ] "About" column:
        * [ ] avatar image
        * [ ] name and login
        * [ ] stats list
      * [ ] "Repositories" column:
        * [ ] Contributions
        * [ ] Repositories
        * [ ] Activity
    * [ ] `USERNAME`
      * [ ] "About" column:
        * [ ] avatar image
        * [ ] name and login
        * [ ] stats list
      * [ ] "Repositories" column:
        * [ ] Contributions
        * [ ] Repositories
        * [ ] Activity
```

### Journal, Week 5

This assignment is due on Thursday, so you should have an initial draft for each of your three posts tonight so that you can solicit feedback from your peers.

### Reading APIs: Github

Tonight, focus on the following questions about the Github API, which will be important as you build out your profile:

* What are the endpoints for fetching...
  * the profile data for a user?
  * the organizations a user belongs to?
  * the repositories a user has created?
  * a filtered list of repositories?
  * a sorted list of repositories?
  * public events for a user?
* When fetching public events for a user...
  * How many results are returned by default?
  * What limitations exist on fetching _more_ results?
  * What is the basic structure of the results?
  * What fields are included in each result?
  * What are the data types for each field?
  * What are some of the different values for the `type` field?

### All your data is belong to us!

Use `jQuery.getJSON` to get the data that you fetched from the API onto your page. Fetch the _cached_ data in `api/github/`, _not_ the live API. Next, replace all of the text in your page with placeholders -- `{{login}}` or `{{repo-name}}` -- that you'll eventually replace with data from the API. Finally, use jQuery to replace the placeholder values with your data.

And while we're at it, didn't you fetch your own data from the API, too? What if you replaced your placeholders with _that_ data instead? Could you do both? Provide a `<select>` element that allows you to _choose_ which data to load.

Create and work in feature branches for each step: `feature/fetching-data`, `feature/adding-placeholders`, `feature/replacing-placeholders`. Merge them down into `develop` as you finish each.

#### BEAST MODE

Can you populate the repo lists from the data? I mean, you got all the data for repos, right? How hard could it be to build list items for them?

#### NIGHTMARE MODE

Did you notice how the links in the repo list filter the list of repos? Can you identify how that list is being filtered? Can you update the list of repos to only display that filtered list?

## Resources

* **How do I learn more about the HTTP protocol?**
  * [_How the Web Works_ on TeamTreehouse.com](http://teamtreehouse.com/library/how-the-web-works)
  * [_HyperText Transfer Protocol (HTTP)_ on Wikipedia](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
  * [_HTTP Status Codes_ on Wikipedia](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
  * [_cURL_ on Wikipedia](http://en.wikipedia.org/wiki/CURL)
  * [_HTTP Methods_ on RestAPITutorial.com](http://www.restapitutorial.com/lessons/httpmethods.html)
