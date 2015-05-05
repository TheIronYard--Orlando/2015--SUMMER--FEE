# 02 -- Tools on Tuesday

## Agenda

### Rituals

* [ ] **Standup** (~15m)
* [ ] **Three Little Things** (~30m)
* [ ] **Homework Review**: Show and Tell (~15m)

### Tools on Tuesday (~1.5h)

* [ ] **Welcome to Node JS** (~45m)
  * [ ] Running JavaScript instructions
    * interactively with the `node` REPL
    * from a file as an argument to `node`
    * Computer Science thought: Sequential Instruction
  * [ ] Exploring the basics: constants, literals and operators
    * Basic types:
      * `null`
      * `Boolean`: `true`, `false`
      * `Number`: `1234`, `1234.56`, what else?
      * `String`: `'single-quoted'`, `"double-quoted"`
    * Basic Operators:
      * Arithmetic
      * Comparison
      * Assignment
      * Weirdos: `typeof`, parentheses
    * Built-in Constants
      * `undefined`
      * `NaN`
      * `Inifinity`
  * [ ] Beyond the basics with `function`
    * basic function definition, invocation
    * inputs and outputs
    * Computer Science thought: Pure Functions
    * side-effects with `console.log`
    * Computer Science thought: Call Frames & Control Flow
* [ ] **Yak Shaving: [JavaScript Koans](https://github.com/mrdavidlaing/javascript-koans)** (~30m)
  * Clone a repo -- `git clone`
  * Where did it go?
  * Create a branch -- `git branch 02--tools-on-tuesday`
  * Which branch? -- `git branch; git status`
  * Checkout a branch -- `git checkout 02--tools-on-tuesday`
  * Edit and commit files... Uh-oh.
* [ ] **Hello, Atom!** (~30m)
  * You installed that, right? -- `which atom`
  * Opening a single file or directory
  * How does this thing work?
    * file tree, quick open
    * line numbers _on_
    * jump to line number (`^G`)
    * edit and save
* [ ] **Back to the `git` cave!** !~30m)
  * What did we change? -- `git status`
  * No, really. -- `git diff`
  * Time to commit!
  * Pushing to a Remote

## Assignment

```markdown
* **Yak Shaving**
  * [ ] _WIP Issue_: `02 -- Tools on Tuesday -- YOUR NAME`
  * [ ] _WIP Branch_:
    * `javascript-koans:02--tools-on-tues`
    * `USERNAME.github.io:01--right-mindset` (cont'd)
  * [ ] _WIP Files_:
    * `USERNAME.github.io`
      * `growth-vs-fixed-mindset.md`
      * `about/javascript.md`
    * `javascript-koans`
      * `koans/AboutExpects.js`
      * `koans/AboutArrays.js`
      * `koans/AboutFunctions.js`
* [ ] **The Right Mindset (cont'd)
  * [ ] added Rough Draft to `growth-vs-fixed-mindset.md`
* [ ] **Reading JavaScript**
  * [ ] added 2 more entries
  * [ ] added 5 more entries
  * [ ] added 10 entries!
  * [ ] added 1 "weirdo" operator
  * [ ] added `function`
    * [ ] example function definition
    * [ ] example function invocation
* [ ] **JavaScript Koans**
  * [ ] forked https://github.com/mrdavidlaing/javascript-koans
  * [ ] cloned it locally with `git` or `hub`
  * [ ] worked in branch `02--tools-on-tuesday`
  * [ ] pushed to Github: `git push origin 02--tools-on-tuesday`
  * [ ] opened Pull Request
  * [ ] **NORMAL MODE**
    * [ ] `AboutExpects.js`
    * [ ] `AboutArrays.js`
    * [ ] `AboutFunctions.js`
  * [ ] **BEAST MODE**
    * [ ] `AboutObjects.js`
    * [ ] `AboutMutability.js`
    * [ ] `AboutHigherOrderFunctions.js`
  * [ ] **NIGHTMARE MODE** -- ALL KOANS
```

### The Right Mindset

The second stage of [the Writing Process](http://en.wikipedia.org/wiki/Writing_process) is [Drafting](http://en.wikipedia.org/wiki/Draft_document): writing a series of quick, rough attempts at cohesive thought with minimal editing. Through this process, the author revises her stance on the organization and presentation of the ideas in the piece, also revising her outline in the process. Your next step towards your essay is to produce your first Rough Draft, although you might produce many. Keep them all in the `growth-vs-fixed-mindset.md` file, adding commits for each as you go. _Don't clobber your outline!_ Keep it around and revise it as you go. In the next stage, you'll start revising your drafts and outline into your final essay.

* Write _at least 1_ Rough Draft in `growth-vs-fixed-mindset.md`
* Keep _all_ drafts you author; commit _at least once_ for each.
* _Leave your outline!_ Revise it based on your drafts.

### Reading JavaScript

Tonight, add 10 more entries to `about/javascript.md` for some of the operators we covered today in class, and particularly include that weirdo: `typeof`. There are some others like him in the documentation; bonus points for covering some crazy cousins. Also include coverage of the `function` keyword and include examples of function definitions _and_ invocations. Identify the pieces and parts of your examples with code comments. If you're struggling with the format of your documentation, try following the example below:

* add 10 more entries to `about/javascript.md`
* cover any operators that we used in class that seemed odd or confusing
* include the `typeof` operator
* include the `function` keyword,
  * provide examples of function definitions and invocations
  * identify the pieces of your examples with code comments
* incorporate feedback from Assignment 01
* use the format below, if it's helpful

#### Sample Format

```markdown
# About JavaScript

## Operators

### Arithmetic

#### `+` -- addition

Given two `Number` values, produces the sum of those values as another `Number`. For example:

    1 + 1 // yields 2
    2 + 2 // yields 4

. . .

## Functions

Functions are a form of [control flow](http://en.wikipedia.org/wiki/Control_flow) used in computer programs... (you fill in the rest)

### `function` keyword

The `function` keyword is used to _define_ a function with parentheses and curly braces:

    // This is a Function Definition for `whatever`...
    function whatever ( /* arguments go here */ ) {
      // body of function goes here
    }

Once a function has been defined, it can be _invoked_ by... (get the picture?)
```

### JavaScript Koans

A [koan](http://en.wikipedia.org/wiki/K%C5%8Dan) is "a story, dialogue, question, or statement which is used in Zen practice to ... test a student's progress." Many people have contributed to sets of koans for learning programming languages, as well. [The JavaScript Koans maintained by David Laing](https://github.com/mrdavidlaing/javascript-koans) are good practice problems to help you gauge your understanding of JavaScript. Fork and clone his repository so that you can work on the problems locally. Just opening the `KoansRunner.html` file in a browser is sufficient (`open KoansRunner.html`); remember to reload the page after you save!

Create a branch in your cloned fork called `02--tools-on-tuesday` and commit your work to that branch. Push your branch to Github (`git push`) and open a Pull Request _from_ your `02--tools-on-tuesday` branch _into_ the `master` branch of _your fork_... not the original. Didn't you know you could do that? Remember to link your open PR to your _WIP Issue_ in the class repo!

* fork https://github.com/mrdavidlaing/javascript-koans
* clone _your fork_ locally
* create and checkout a branch named `02--tools-on-tuesday`
* open `KoanRunner.html` in a browser
* complete `AboutExpects.js`, `AboutArrays.js`, `AboutFunctions.js`

#### BEAST MODE

In addition to **NORMAL MODE**, complete `AboutObjects.js`, `AboutMutability.js`, `AboutHigherOrderFunctions.js` as well.

#### NIGHTMARE MODE

Complete _all_ of the koans.

## Additional Resources

