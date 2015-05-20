# 10 -- Enter the CSS

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Tools on Tuesday (~1h 30m)

* [ ] A bit about package managers...
  * `npm` is for Node JS libraries (this is a lie)
  * `bower` is for Browser packages (also a lie)
  * So how do I install `bower`...? `npm install -g bower` :surprise:
  * Now what can I do?
    * `bower install lodash`
    * link `lodash` via `<script>` tags!
* [ ] Let's build that Nested Accordion!
  * Analyze the reference implementation...
    * What elements are important?
    * How can I select them: by tag name, `class`, `id`...?
    * What styles differ from the defaults?
    * What CSS properties might I need?
* [ ] Let's start with a better baseline...
  * `reset.css` vs `normalize.css`
  * Including `normalize.css`:
    * via CDN link and `<link>` tag (boo!)
    * via `bower` and `<link>` tag (meh)
* [ ] Now let's add some basic styles...
  * Insets via box model properties: `margin` and `padding`
  * Everyone loves colors!
  * And better fonts...! Wait...
* [ ] [Google Fonts](http://google.com/fonts)
  * My God, it's full of fonts...
  * Selecting [Beautiful Web Type](http://hellohappy.org/beautiful-web-type/) and lovely [Font Pairs](http://fontpair.co/)
  * Okay, okay, let's just get some fonts already...
* [ ] What about those cute little arrows?
  * [`list-style-type` and the `@counter-type` definition](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type): a cautionary tale
  * [`:before` and `:after` psuedo-elements and the `content` property](https://developer.mozilla.org/en-US/docs/Web/CSS/content)
* [ ] Now for some clickin'...!
  * What event do I need to listen for?
  * What element should listen for that event?
  * What should happen when that event fires?
    * in the Model layer?
    * in the View layer?
* [ ] Hello, [jQuery](http://jquery.com)!
  * Including jQuery:
    * via CDN link and `<script>` tag (ugh)
    * via `bower` and `<script>` tag (meh)
  * [Selecting Elements via CSS Selectors](http://api.jquery.com/category/selectors/)
    * `jQuery('tag')`
    * `jQuery('.class-name')`
    * `jQuery('#unique-id')`
    * `jQuery('section > .child + .sibling:not(#some-id) a[href].zomg')`
  * ...and [some _creative_ additions](http://api.jquery.com/category/selectors/jquery-selector-extensions/)
    * `jQuery(':text')`
    * `jQuery(':checked')`
    * `jQuery(':image')`
  * jQuery Collection is not `Array`
    * `jQuery('body').constructor`
    * `jQuery('body') instanceof Array`
    * `Array.isArray(jQuery('body'))`
  * But `Array`-ish...
    * `jQuery('body').length`
    * `jQuery('body').each(tracer)`
    * `jQuery('body').filter(tracer)`
    * `jQuery('body').map(tracer)`
  * And Event Handlers are easier:
    * `jQuery('.trigger').on('click', tracer)`
    * `jQuery('ul.todo-list').on('click', 'button.destroy', tracer)`
* [ ] How do I know that I'm doing any of this correctly? (AKA syntax is hard)
  * Meet `jshint`:
    * `npm install -g jshint`
    * `jshint path/to/file.js`
  * His brother, `csslint`:
    * `npm install -g csslint`
    * csslint path/to/file.css`
  * And their daddy, `atom-lint`:
    * `apm install atom-lint`
    * Configure and save a file already...

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_ `10 -- Enter CSS`
    * Link to PR in `USERNAME.github.io`
    * Link to PR in `student-roster`
    * Link to PR in `TIY-Assignments`
  * _WIP Branch_
    * `USRNAME.github.io:journal-week-2`
    * `student-roster:maser`
    * `TIY-Assignments:10--enter-CSS`
  * _WIP Files_
    * `USERNAME.github.io`
      * your journal entry: `8.md`
      * `about/cascading-style-sheets.md`
    * `student-roster`
      * `2015-05/FEE/*.md` :evil_smile:
    * `TIY-Assignments`
      * `NestedAccordion/`, `ViewModeSwitch/`
        * `index.html`
        * `styles.css`
        * `scripts.js`
* [ ] **Journal, Week 2**
  * [ ] Rough draft!
  * [ ] :+1: x2!
  * [ ] Extra topics in `parking-lot.md`!
* [ ] **Githubbing to Know You**
  * [ ] Updated from `upstream:master`
  * [ ] Edited _everyone_...
  * [ ] Pushed and PR'd (izzat a word?)
  * [ ] ZOMG CONFLICTS!
  * [ ] **BEAST MODE** Resolve ALL THE THINGS!
* [ ] **Following the Blueprints**
  * [ ] **Nested Accordion**
    * [ ] ...is nested!
      * [ ] Colors make me feel pretty.
      * [ ] Also, need better fonts.
      * [ ] We don't need no stinkin' bullets!
      * [ ] And look, hovering!
      * [ ] Are those insets right?
    * [ ] ...and clicky!
      * [ ] jQuery in da HOWSS!
      * [ ] Select those elements!
      * [ ] And make 'em click till you bleed!
  * [ ] **View Mode Switch**
    * [ ] Just the basics...
      * [ ] "Bubbles, what are you doing?" "Coloring..."
      * [ ] Google Fonts FTW!
      * [ ] That's no button...
      * [ ] Border police: they're everywhere!
      * [ ] Look, ma, I got icons!
      * [ ] Gimme back my bullets... Wait, you can keep 'em.
    * [ ] Grid Mode unlocked!
      * [ ] Center ALL THE THINGS!
      * [ ] Lay them out, side-by-side...
      * [ ] **BEAST MODE** How about a breakpoint?
    * [ ] List Mode unlocked!
      * [ ] Same great image, smaller size!
      * [ ] Lines are the new boxes...
      * [ ] Vertical alignment is hard.
      * [ ] **BEAST MODE** They changed something...
    * [ ] Switch activated!
      * [ ] List mode and grid mode, living together, end times stuff.
      * [ ] Didn't you notice that the icon changed?
```

### Journal, Week 2

Begin the drafting process, like we've done the last two weeks. This time, as you think of topics that are related to your experience last week but that don't fit into your main journal, write them down in a file called `parking-lot.md` and start developing them with bulleted notes, an outline, stream of consciousness or just short rough drafts. You'll need some topics to pick from for next week... maybe even two.

### Githubbing to Know You

Tonight, _try_ to create some merge conflicts: everyone edits _everyone else_. Experiment. Pick different parts of the files to edit and see what conflicts arise. By Thursday, though, _everyone_ should have _everything_ filled out and added to a PR. Let the train wrecks begin!

#### BEAST MODE

Can you _resolve_ all these conflicts and push the resolved code back to Github?

### Reading CSS

Tonight, focus on the [Box Model properties](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model) as we saw them used in class today. Pay careful attention to `box-sizing` and how it changes the math of the rendering model. You should cover the `margin-*`, `padding-*` and `border-*` properties, the `max-*` and `min-*` properties, and `box-sizing` property, at a minimum. All of these properties accept [a numeric length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length) in [various units](https://developer.mozilla.org/en-US/docs/Web/CSS/length#Units) that you should know about. Also pay special attention to [the caveat about inches and DPI](https://developer.mozilla.org/en-US/docs/Web/CSS/length#CSS_units_and_dots-per-inch). Computers are hard.

#### BEAST MODE

There are some additional CSS properties that we used or discussed in class, and our reference implementations use quite a few more. Put some flags in the sand for future reference entries.

### Following the Blueprints

Catch up and finish Nested Accordion tonight, then start working on View Mode Switch. Use the reference implementation to discover CSS properties you might not fully understand, but try to rely upon your notes from [Learn Layout](http://learnlayout.com), which really contains everything you need. Don't let yourself get stuck on the JavaScript portion; you can just change the classname from "grid" to "list" manually in the HTML file to keep being productive. Break down the problem into smaller steps, and don't worry about the breakpoints.

#### BEAST MODE

Did I say ignore the breakpoints? Well, maybe include one or two. [Media Queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries) aren't as hard as you think they are... they're just a little weird. Getting a head start here will help you get productive for next week.

#### NIGHTMARE MODE

There are at least _three_ breakpoints for each of those projects. Can you identify all three? Can you write Media Queries for all three? Can you write CSS to handle all three? I bet you can... You're unstoppable.

## Resources

* [HTML Color Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
* [`reset.css`](http://meyerweb.com/eric/tools/css/reset/) vs [`normalize.css`](http://necolas.github.io/normalize.css/)
* [jQuery](http://jquery.com) ([docs](http://api.jquery.com)) vs [Zepto](http://zeptojs.com/)
* [Bower](http://bower.io)
  * [_What's So Great About Bower?_ on CSS Tricks](https://css-tricks.com/whats-great-bower/)
  * [_Getting Started with Bower_ on Team Treehouse](http://blog.teamtreehouse.com/getting-started-bower)
  * [_Meet Bower: A Package Manager for the Web_ on Tuts+](http://code.tutsplus.com/tutorials/meet-bower-a-package-manager-for-the-web--net-27774)
* **How do I know that I'm doing any of this correctly?**
  * [`jshint`](http://jshint.com/): [installation](http://jshint.com/install/)
  * [`csshint`](http://csslint.net): [installation](https://github.com/CSSLint/csslint/wiki/Command-line-interface)
  * _or get it all with [`atom-lint`](https://atom.io/packages/atom-lint)!_
