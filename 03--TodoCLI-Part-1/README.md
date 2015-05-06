# 03 -- Todo CLI, Part 1

## Agenda

### Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

### Very Important Things

* [ ] **All about Planning...** (~30m)
  * What can I do with a todo list?
  * What are User Stories?
    * _A **Smurf** can smurf so that **Smurfs** can smurf_
    * Specifically vague; vaguely specific
    * Add some bullets to describe the details
    * Refer back to the conversation
  * How do we estimate?
    * time-based estimates are almost always wrong
    * humans are better at relative estimates
  * Is design important for a CLI program?
    * design is more than pretty colors
    * interface and UX design
    * API and test plan design
    * data representation design
* [ ] **User Story Workshop!** (~15m)
* [ ] **Design Workshop!** (~15m)
* [ ] **Yak Shaving**
  * [ ] initial filstructure
  * [ ] what's the mantra?
* [ ] **API Implementation**
  * [ ] scaffold the API & test plan: `chai`
  * [ ] running the tests automatically: `nodemon`

## Assignment

```markdown
* **Yak Shaving**
  * _WIP Issue_: `03 -- Todo CLI 1 -- YOUR NAME`
    * [ ] link to PR in `USERNAME.github.io`
    * [ ] link to PR in `TIY-Assignments`
  *  _WIP Branch_:
    * [X] `USERNAME.github.io:01--right-mindset`
    * [ ] `TIY-Assignments:03--todo-cli-1`
  * _WIP Files_:
    * `USERNAME.github.io`
      * `about/javascript.md`
      * `growth-vs-fixed-mindset.md`
    * `TIY-Assignments`
      * `todo.js`
* **The Right Mindset**
  * [ ] commits in `growth-vs-fixed-mindset.md` towareds final draft
  * [ ] link to open PR in `USERNAME.github.io`
* **Reading JavaScript**
  * [ ] 2 more entries!
  * [ ] 5 more entries!
  * [ ] 10 more entries!
  * [ ] `Array` literal with examples
  * [ ] `length` with examples
  * [ ] 2 `Array.prototype` methods!
* **TodoCLI and You!**
  * [ ] created issues in `TIY-Assignments` for User Stories
  * [ ] create branch named `03--todo-cli-1`
  * [ ] committed and pushed `todo.js`
  * [ ] opened PR _from_ `03--todo-cli-1` _to_ `master`
  * [ ] 1 more passing test than in class!
```

### The Right Mindset

Continue working on your essay, now progressing in the Revision phase. You should start to produce a Final Draft starting with the best parts of your Roughs. Edit and expand them with a series of revisions, which you save as commits in Github. You should keep your old Roughs and Outline around.

### Reading JavaScript

You're probably getting sick of this by now, but you're getting a good feel for how the documentation is structured and just how much there is to memorize inside of JavaScript. Add 10 more entries to your tutorial tonight, specifically including the `Array` type, our first container. Include [the literal `Array` syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), an explanation of [the "magic" `length` property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length), and at least [2 `Array` methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2) that are _not experimental_ (i.e. standard). Use the formay below to describe the methods:

```markdown
## `Array`

. . .

### [Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2)

#### [`Array.prototype.pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

* _params:_ none
* _returns:_ the last element
* _side-effects_: removes the element returned

##### Examples

. . .
```

*** TodoCLI and You!

Walk through the same steps that we did in class by re-typing the code in [`todo.js`](todo.js) yourself. Clone your `TIY-Assignments` repo locally, create a branch called `03--todc-cli-1`, and create an empty file called `todo.js`. Commit and push this work to Github and open a Pull Request named `TodoCLI Part 1`. Copy the **TodoCLI and You!** checklist into the description. Create issues in your `TIY-Assignments` repo for each of the User Stories that we wrote together. Add a link to the open PR in each issue. As you transcribe the work we did together, remember to save, commit, and push often. Try to get 1 more test to pass than we did in class...

## Links

* About Planning
  * [User Stories](http://en.wikipedia.org/wiki/User_story)
  * [Effort Estimation](http://en.wikipedia.org/wiki/Software_development_effort_estimation)
* JavaScript Reference
  * [The MDN JavaScript Reference: the `Array` type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Properties)
    * [Instance Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2)
  * [`npm install`](https://docs.npmjs.com/cli/install)
  * [`nodemon`](http://nodemon.io/)
  * [Chai.js](http://chaijs.com/)
    * [Docs for Expect / Should](http://chaijs.com/api/bdd/)
    * [Guide to Chai](http://chaijs.com/guide/)
* [Test-Driven Development](http://en.wikipedia.org/wiki/Test-driven_development)
* [Software Design](http://en.wikipedia.org/wiki/Software_design)

