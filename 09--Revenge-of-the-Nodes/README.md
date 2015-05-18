# 09 -- Revenge of the Nodes

## Rituals (~1h)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Parking Lot Topics** (~15m)

## Agenda

* **Homework Review** (~30m: 10 x 3m)
```markdown
* [ ] Journal
* [ ] Student Roster
* [ ] Nested Accordion
* [ ] Full Width Tabs
* [ ] Quotes Rotator
* [ ] TodoMVC
```
* **Parking Lot** (~1h)

## Assignment

```markdown
* [ ] **Yak Shaving**
  * [ ] _WIP Issue_ `09 -- Revenge of the Nodes`
    * [ ] Link to PR in `USERNAME.github.io`
    * [ ] Link to PR in `TheIronYard--Orlando/student-roster`
    * [ ] Link to PR in `TIY-Assignments`
  * [ ] _WIP Branch_
    * [ ] `USERNAME.github.io:journal-week-2`
    * [ ] `student-roster:master`
    * [ ] `TIY-Assignments:09--revenge-of-the-nodes`
  * [ ] _WIP Files_
    * `USERNAME.github.io`
      * `journal-week-2.md` (suggested)
      * `about/cascading-style-sheets.md`
    * `student-roster`
      * `2015-05/FEE/USERNAME.md` (for someone else)
    * `TIY-Assignments`
      * `NestedAccordion/`
        * `index.html`
        * `styles.css`
        * `scripts.js`
      * `ViewModeSwitch/`
        * `index.html`
        * `styles.css`
        * `scripts.js`
     * `FullWidthTabs/`
       * `index.html`
       * `styles.css`
       * `scripts.js`
* [ ] **Journal, Week 2**
  * [ ] Brainstorming/Outline
  * [ ] 1x :+1: + feedback!
  * [ ] 2x :+1: + feedback!
* [ ] **Reading CSS**
  * [ ] Committed and pushed `about/cascading-style-sheets.md`
  * [ ] Read _Learn Layout_!
  * [ ] First 2 properties!
  * [ ] Up to 5 properties!
  * [ ] And then there were 8!
  * [ ] All 10 in the bag!
* [ ] **Now It's Personal**
  * [ ] Updated local `master` from `upstream:master`
  * [ ] Resolved conflicts...? WHY!?
  * [ ] Created new issue in `student-roster`...
* [ ] **Shaving the Night Away**
  * [ ] Added `ViewModeSwitch` to the list...
  * [ ] ...and gutted them all!
  * [ ] Wired them back up again...
  * [ ] ...with Google Fonts, too!
```

### Journal, Week 2

Start on your next journal entry, reflecting on the things you've learned from last week. While the full article is due on Thursday again, you should have _something_ for tomorrow: an outline, some bullet points, even a super sloppy Rough Draft. You need to give us the **tl;dr** on your journal entry during homework review. The suggested topics from last week are still valid, but here are some others:

* Describe the MVC pattern of software design, as you understand it.
* Explain the principle of Encapsulation and give some examples from your own code.
* How does scoping work in JavaScript programs? How do the `function` and `var` keywords affect it?

### Reading CSS

Did I promise no more definitions? Well, no more _JavaScript_ definitions... Now we've got CSS! First read [Learn Layout](http://learnlayout.com) -- don't sweat, it's less than an hour -- and make some notes on the CSS properties that are used. You should be able to get at least 10. Look them up in [the MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) and start writing documentation for them in your `USERNAME.github.io` repo in a new file called `about/cascading-style-sheets.md`... So you never forget the _cascading_ part of that.

For some more in-depth explanation of what CSS is, how it works, and what it's good for, check out [the MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS). Stretch out your reading on that one, though, and practice using [SQ3R](http://en.m.wikipedia.org/wiki/SQ3R). You'll run across a lot of new properties and examples that you can use in your documentation, which we'll be adding to throughout the week.

### Githubbing to Know You: Now It's Personal

No two people can exist in this world without conflict. It's in our nature. So, too, with software. We learned some nifty conflict resolution techniques that might help you in future assignments... possibly in this one! Update your local copy of the roster from _upstream_ (you remember what that is, right?) and then try to merge in one of our problem children. You'll need to add their fork as a remote, fetch and attempt a merge. When you run into conflict (and you will), resolve the conflict with the techniques we discussed. If that doesn't work, ask the Internet; it may know something about conflict.

When you're all de-conflicted, push your results up to your fork and open a new PR. We'll see how you did on Tuesday, and you'll get a _new_ assignment due on Thursday.

### Shaving the Night Away

Yep, time for some more high-quality **Yak Shaving**! Let's add another [Blueprints demo](http://tympanus.net/codrops/category/blueprints/) to our collection: `ViewModeSwitch`, which will demonstrate how CSS can be applied to the _same_ HTML to affect completely different layouts. We'll also revisit our friends `NestedAccordion` and `FullWidthTabs`, so take a look at them again. Once you've got the working code for `ViewModeSwitch` in your repo, gut the contents of the CSS and JS files, and replace the links in the HTML file with links to `styles.css` and `scripts.js`. Guess what we're doing _this_ week? What fun!

## Links

* [`Node` API](https://developer.mozilla.org/en-US/docs/Web/API/Node)
  * [`Node.removeChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
  * [`Node.appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
  * [`Node.remove`](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)
