# 15 -- Kasparov and the Machine, Part 2

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Now to build the Machine...

* [ ] **Planning in front of you...**
  * [ ] Identify the Model layer...
    * What are the moving parts of the applications?
    * What can the parts do?
    * What controls should we expose?
  * [ ] Identify the Controller layer...
    * What events should we listen for?
    * What elements should listen for those events?
    * What happens when the event fires?
* [ ] **Yak Shaving**
  * [ ] Using [`chai`](http://chaijs.com) and [`mocha`](http://mochajs.org) in the browser...
  * [ ] A new tool appears! `generator-mocha`
  * [ ] Run `browser-sync` to see the tests...
  * [ ] ...or make `npm` do it for you!
* [ ] **Building the Model**
  * [ ] That [Revealing Module pattern](http://j.mp/1d3hPZt), though...
    * What [interface](http://en.wikipedia.org/wiki/Interface_%28computing%29) do we expose?
    * What parts do we test?
    * What preconditions should exist?
    * What interface do we affect?
    * What postconditions should exist?
  * [ ] Building the `board`...
  * [ ] How about a single `move`...?
  * [ ] What if there are _multiple_ `moves`...?
  * [ ] How will we advance to the next move?
  * [ ] What other controls do we need?
* [ ] **Building the Controllers**
  * [ ] What's in a Controller?
    * What action do we need to take?
    * What event should we listen for?
    * What element should listen for the event?
  * [ ] Start with tracer bullets...
  * [ ] What interface of the Model should we invoke instead?

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `15 -- Kasparov and the Machine, Part 2`
  *  _WIP Branch_: `TIY-Chessboard:15--kasparov-2`
  * _WIP Files_:
    * `TIY-Chessboard`
      * `index.html`
      * `css/main.css`
      * `js/main.js`
* [ ] **Kasparov and the Machine, Part 2**
  * [ ] Got me some tests!
  * [ ] What's in a `board`?
  * [ ] I like to `move` it...
  * [ ] Show me your `moves`!
  * [ ] `next` in line, please
  * [ ] Mission Complete: Catalan Opening: Closed Variation
  * [ ] **BEAST MODE** Kasparov v Karpov: It's ALIVE!
  * [ ] **NIGHTMARE MODE** Can you go back? To the beginning? To the END?
```

### Kasparov and the Machine, Part 2

Home stretch. We're back where we started: unit tests with `chai`. Connecting event handlers to elements with JavaScript... well, jQuery makes it easier. Pushing and popping CSS classes. Let's see what you can get done over the weekend. You should at least have the [Catalan Opening: Closed Variation](http://www.chess.com/opening/eco/E06_Catalan_Opening_Closed_Variation) with a button that advances the moves _and updates the View_.

#### BEAST MODE

The match between [Kasparov v Karpov (1984)](http://www.chess.com/games/view?id=353900) extends that move list. Can you finish that out?

#### NIGHTMARE MODE

The reference implementation has more than just a "next move" button. Can you get "rewind" and "fast-forward" to work? Can you get "previous move" to work?

## Resources

* **What is the Revealing Module pattern in JavaScript?**
  * [_The Revealing Module Pattern_ by Carl Danley](https://carldanley.com/js-revealing-module-pattern/)
  * [_Learning JavaScript Design Patterns: The Revealing Module Pattern_ by Addy Osmani](http://j.mp/1d3hPZt)
  * [_Again with the Module Pattern -- Reveal something to the world..._ by Christian Heilmann](http://j.mp/1d3icU2) (Original Source)
