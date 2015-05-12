# 06 -- Temple of DOM

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

* **Tools on Tuesday**
  * How do I use JavaScript inside the Browser?
    * `open -a Google\ Chrome scripts.js` :(
    * `open index.html` ... lame
    * hello, `browser-sync`!
  * [ ] What can I do with JavaScript in the Browser?
    * jammin' in the JavaScript console
    * using JavaScript to select elements
    * inspecting element properties
  * [ ] Changing elements properties for fun and profit...
    * let's see what we can edit...
    * editing is easier than adding
    * adding elements is even harder
    * unless you cheat with `innerHTML`...
* [ ] **Let's nest some accordions...**
  * start with some analysis
  * what's in an opening?
  * works for one `!==` works for all
  * looks like an `Array`...?
* [ ] **What do you do with not-an-`Array`?**
  * check out `lodash`: `each`
  * yeah, it's big...
* [ ] **Now how about those tabs?**
  * what did we do _last_ time?
  * time to click!
  * another not-an-`Array`?

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `06 -- Temple of DOM -- YOUR NAME`
    * [ ] Link to PR in `USERNAME.github.io`
    * [ ] Link to PR in `TIY-Assignments`
    * [ ] Link to PR in `TIY-TodoMVC`
    * [ ] Link User Story issues in `TIY-TodoMVC` to PR in `TIY-TodoMVC`
  *  _WIP Branch_:
    *  `USERNAME.github.io:journal-week-1`
    *  `TIY-Assignments:06--temple-of-dom`
    *  `TIY-TodoMVC:transplant`
  * _WIP Files_:
    * `USERNAME.github.io`
      * `journal-week-1.md` (or similar)
    * `TIY-Assignments`
      * `NestedAccordion`
        * `scripts.js`
      * `FullWidthTabs`
        * `scripts.js`
      * BEAST MODE: `QuotesRotator`
        * `scripts.js`
* [ ] **Journal, Week 1** -- Rough Draft!
* [ ] **Githubbing to Know You**
  * [ ] updated `master` in your fork of `student-roster`
* [ ] **Following the Blueprints**
  * [ ] Clean house: `scripts.js` emptied and committed
  * [ ] First `NestedAccordion` is accordion-ey...
  * [ ] Momma's got a squeezebox! It goes in and out...
  * [ ] `FullWidthTabs` with clicky tabs!
  * [ ] And now the panels work, too!
  * [ ] **BEAST MODE:** `QuotesRotator` can rotate!
  * [ ] **NIGHTMARE MODE:** Check out that progress bar!
* [ ] **TodoCLI + TodoMVC**
  * [ ] No, really, it works...
  * [ ] Let's get that `todo.js` linked in there!
  * [ ] Think we need some user stories?
```

### Journal, Week 1

Continuing your journal entry in your `USERNAME.github.io`, start writing a Rough Draft based on your outline / stream of consciousness / brainstorming notes. Remember, this is _rough_... stay loose.

### Githubbing to Know You, Part 2 (due Thu)

You have your assignment. Here are your targets. Now you just have to _talk_ to someone.

#### Hometown, :dog: or :cat:?

| you ask      | they answer  |
| ------------ | ------------ |
| Epicurean306 | gatorpazz    |
| JessyRiordan | pope410211   |
| sjoyal       | Epicurean306 |
| MStaehling   | JessyRiordan |
| jorgehjr84   | kmattiko     |
| pcreglow     | MStaehling   |
| melrodbos    | gatorpazz    |
| pope410211   | Epicurean306 |
| kmattiko     | MStaehling   |
| gatorpazz    | pope410211   |

#### Faves :v: (only 2, only 2)

| you ask      | they answer  |
| ------------ | ------------ |
| Epicurean306 | sjoyal       |
| JessyRiordan | jorgehjr84   |
| sjoyal       | JessyRiordan |
| MStaehling   | JessyRiordan |
| jorgehjr84   | pope410211   |
| pcreglow     | pcreglow     |
| melrodbos    | MStaehling   |
| pope410211   | JessyRiordan |
| kmattiko     | MStaehling   |
| gatorpazz    | pope410211   |

### Following the Blueprints

Merge your `05` branch via the Big Green Button, update your local master, and start a _new_ branch called `06--temple-of-dom` inside your `TIY-Assignments` repo. First order of business: clean house. Delete the contents of `scripts.js` in all three Blusprints folders and commit the deletion. Push the branch and open your PR to get to your first checkpoint.

Next, get your `NestedAccordion` working with just _one_ accordion in _one_ direction: opening when initially closed or closed when initially open. Then you can start to work on the toggle for that accordion. Finally, get the open and close working for _all_ accordions on the page, regardless of nesting level. Remember that the initial state should be _closed_... and for bonus points, make a "real accordion": one that only opens one panel at a time.

After that, get to work on the `FullWidthTabs` interface, starting with the tabs. Making them respond to clicks _at all_ (tracer bullet anyone?) would be a good Baby Step. Getting them to activate on click will get you to the first checkpoint here. Can you get the panels to reveal as well?

#### BEAST MODE

Thought I forgot about our friend `QuotesRotator`...? Well, this one is a bit trickier. You'll need to learn something about the [`WindowTimers` API](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers) for that one.

#### NIGHTMARE MODE

That pretty progress bar won't animate itself, y'know... Or will it? Yeah, probably not, but remember to check out the CSS for clues! Find something you don't recognize? [Documentation for CSS is in the MDN, too!](https://developer.mozilla.org/en-US/docs/Web/CSS). Wonder if _that_ will come up next week?

### TodoCLI + TodoMVC

So this is pretty straight forward: get your code from our TodoCLI project into your `TIY-TodoMVC` project. Don't make this complicated. Put it in a branch named `transplant` and open a PR, of course. Since you've got a _new_ repo, how about some User Stories? Use the stories for TodoCLI as a start but make the interface notes reflect the [application specification](https://github.com/tastejs/todomvc/blob/master/app-spec.md).

## Resources


