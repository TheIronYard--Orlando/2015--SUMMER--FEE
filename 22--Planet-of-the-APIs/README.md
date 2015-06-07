# 22 -- The Planet of the APIs

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Tools on Tuesday - 1

* **Stop wiring up Bower components by hand...**
  * `npm install --saveDev --link wiredep`
  * `wiredep --help`
  * Just add some comments...
  * Remove those hand-crafted links...
  * Run `wiredep -S index.html`: voila!
  * Might be nice to automate _that_ a little...
* **CSS is Dead. Long Live [Sass](http://sass-lang.com)**
  * `npm install --saveDev --link node-sass`
  * Move `main.css` to `main.scss`
  * Run `node-sass path/to/main.scss`...
  * Might need some more flags there.
  * Add `npm run sass` to automate...
  * Refactor to nested selectors...
  * Refactor to nested _properties_...?
  * Recompile!
* **Intermission** (~15m)
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
  * _WIP Issue_: `22 -- Planet of the APIs -- YOUR NAME`
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
  * [ ] How does the API handle authentication?
    * [ ] Do I need to authenticate?
    * [ ] What can I do with an unauthenticated request?
    * [ ] How can I authenticate my request? (3 ways)
  * [ ] How do I ask the API for...
    * [ ] The profile information for a specific user?
    * [ ] The repository listing for a specific user?
    * [ ] The recent, public activity for a specific user?
  * [ ] Is there a limit to the number of requests I can make?
    * [ ] Is there a way of extending that limit?
    * [ ] What happens when I hit the limit?
  * [ ] What if there is a _lot_ of data returned?
    * [ ] How can I ask for more (or less) data from a request?
    * [ ] How do I know that there is more data available?
* [ ] **All your data is belong to us!**
  *
```

### Journal, Week 5

Yes. Week 5... of 9. Halftime maneuver complete, preparing to fire secondary thrusters.

In addition to your reflective journal entry and your tutorial journal entry this week, also share a bookmarked URL to a tool or article. That sounds easy, doesn't it? But wait, there's more... Write a paragraph _explaining_ the resource you're linking to and why it was helpful. Give us the **tl;dr** on that article or just the important parts of the documentation: installation, usage, why it exists. Keep it simple.

### Reading APIs

Remember [those questions about the Github API that I gave you last week](http://j.mp/1AZhW3g)? Yeah, you've probably forgotten all about them. This time write them down in `about/github-api.md` in your `USERNAME.github.io` repo. You should also attempt to _answer_ them...

### All your data is belong to us!

Use `jQuery.getJSON` to get the data that you fetched from the API onto your page. Fetch the _cached_ data in `api/github/`, _not_ the live API. Next, replace all of the text in your page with placeholders -- `{{login}}` or `{{repo-name}}` -- that you'll eventually replace with data from the API. Finally, use jQuery to replace the placeholder values with your data.

Didn't you fetch your own data from the API, too? What if you replaced your placeholders with _that_ data instead? Could you do both? Provide a `<select>` element that allows you to _choose_ which data to load.

#### BEAST MODE

Can you populate the repo lists from the data? I mean, you got all the data for repos, right? How hard could it be to build list items for them?

#### NIGHTMARE MODE

Did you notice how the links in the repo list filter the list of repos? Can you identify how that list is being filtered? Can you update the list of repos to only display that filtered list?


## Resources

* LINK
