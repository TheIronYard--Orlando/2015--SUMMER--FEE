# 12 -- The Passion of the CSS

## Rituals

* **Standup Meeting** (~15m)
* **Parking Lot Planning** (~30m)

## Agenda

* [ ] **General Homework Review** (~30m)
* [ ] **Parking Lot Topics** (~1h: 2x 30m)
* [ ] **LUNCH**
* [ ] **Assignment Review** (~20m)

## Assignment

```markdown
```

### Journal, Week 3+!

This week, you should produce not one but _two_ journal entries. No worries, because you've got all those ideas backlogged in your `parking-lot.md`, right? (Right?) Yes, but to get _two_ entries out in a week, you'll either have to learn to write faster or learn to write more efficiently. Maybe you need to spend less time drafting or more time planning? Perhaps you should timebox yourself and just release whatever you've written at the end of the timebox? You could always just forget about proofreading and editing... [just write!](http://john.do/today/)

All of the topics from the last three weeks are still fair game. I want _one reflective post_ -- review an event, assignment, or lecture from the last three weeks that includes _lessons learned_ or bright/dim/blocker -- **AND** _one tutorial-style post_ -- explain _one small thing_ to me like I've never seen it before: a tool, trick, or technique you've learned how to use. _Include code!_

### Githubbing to Know You

Well, we've exhausted all of our categories now, right? Time to make some more! Everyone submit a PR that adds a new category (or section) to `2015-05/TEMPLATE.md`... and use _emoji_, okay? :grinning: We'll sort 'em out, merge 'em, and get new assignments tomorrow to add _those_ values to our roster.

### Reading HTML

Come on, you didn't think that I'd forget, did you? This week is all about writing HTML, so you'll need to use [the HTML section of MDN](https://developer.mozilla.org/en-US/docs/Web/HTML) (or the same section in Dash) to research and document the tags you'll meet in `about/html.md` (no, I won't make you write it out). Remember, this is _your_ reference, first and foremost, but it's also a part of your portfolio! Hiring managers _love_ to see self-learning resources...!

* Explain the basic structure of a tag. Include a dissection of the non-word characters used (like brackets, etc), the words inside the brackets, why some tags have other tags in them and how to write them with and without contents.
* Next, dissect the tags used in `index.html` in the [HTML5 Boilerplate](http://html5boilerplate.com) project. Don't gloss over those weirdo ones like `<!DOCTYPE>` or `<!-- ... -->` with contents (check out [Conditional Comments on Wikipedia](http://en.m.wikipedia.org/wiki/Conditional_comment) for some help).
* Categorize the tags you document as block-level or inline tags and identify the type of content that is valid within them, if any. Include documentation for any included attributes (like `checked` for `<input type="checkbox">`).

_Don't Repeat Yourself, but be thorough!_ Expand your entries if you run across a different usage of a tag you've already documented. There are three attributes that apply universally to _all_ tags. As you identify them, move them into their own section at the top of your document.

### Shaving Private Ryan

Yay! New Blueprints to work on! Create new folders for `VerticalTimeline` and `MultiColumnForm` with initialized `bower.json` files. Yeah, that's it. Fun! Start taking a look at those reference implementations. You'll need the head start.

#### BEAST MODE

We're going to start with [HTML5 Boilerplate](http://html5boilerplate.com) for these assignments, so you could always get _that_ setup while you're shaving. I mean, you need to read the `index.html` _anyway_, right?

### Game Over, Man!

For our big project this week, we'll be building a chess-playing application... well, kind of. Start by creating a _new_ repo in Github called `TIY-Chessboard` with a basic `README.md` file and `CC0` license (or whatever, if you have opinions). Read [the doubly-indexed `Array` example from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Creating_a_two-dimensional_array).

That's kind of a poor model for a chessboard, but it's useful as a start. Let's make it a little more... robust. Create a file called `scripts/models.js` and put the following in it:

* use an IIFE to wrap the module
* use the Revealing Module pattern to expose:
  * a function named `initBoard` that returns a doubly-indexed array representing a chessboard
  * a function named `move` that accepts parameters `board`, `fromX`, `fromY`, `toX` and `toY`
  * a property named `board` that is initially empty AKA `null`
* define an _internal_ variable named `moves` that is an empty `Array`
* enumerate the moves from [the Catalan Opening: Closed Variation](http://www.chess.com/opening/eco/E06_Catalan_Opening_Closed_Variation) as code comments _inside_ `moves`

#### BEAST MODE

Enumerate the moves from [Kasparov v Karpov (1984)](http://www.chess.com/games/view?id=353900) in code comments within the `moves` array. Document the algabraic notation for each move and translate into `fromX`, `fromY`, `toX`, and `toY` for our doubly-indexed `Array`.

## Resources

* **What's a property?**
  * [_Working with objects_ on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
  * [_Variables vs Properties in JavaScript_ by Angus Croll](https://javascriptweblog.wordpress.com/2010/08/09/variables-vs-properties-in-javascript/)
