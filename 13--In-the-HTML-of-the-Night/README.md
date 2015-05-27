# 13 -- In the HTML of the Night

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `13 -- In the HTML of the Night`
  *  _WIP Branch_:
    * `USERNAME.github.io:journal-week-3`
    * `student-roster:master`
    * `TIY-Assignments:13--html-of-the-night`
  * _WIP Files_:
    * `USERNAME.github.io`
      * `about/html.md`
      * `*.md` (reflective journal)
      * `*.md` (tutorial journal)
    * `student-roster`
      * `2015-05/FEE/TEMPLATE.md`
    * `TIY-Assignments`
      * `VerticalTimeline/`
        * `index.html`
        * `js/main.js`
        * `sass/main.scss`
        * `bower.json`
        * `package.json`
      * `MultiColumnForm/`
        * `index.html`
        * `js/main.js`
        * `sass/main.scss`
        * `bower.json`
        * `package.json`
* [ ] **Journal, Week 3**
  * [ ] Reflective Post
    * [ ] Rough Draft!
    * [ ] Peer Review x2!
    * [ ] Final Draft!
    * [ ] Peer Review x 2!
  * [ ] Tutorial Post
    * [ ] Rough Draft!
    * [ ] Peer Review x2!
    * [ ] Final Draft!
    * [ ] Peer Review x2!
  * [ ] **ALL DONE!** Close that PR!
* [ ] **Reading HTML**
  * [ ] List types galore!
    * [ ] `<ul>` and `<ol>` are easy...
    * [ ] WTF is a `<dl>` anyway?
    * [ ] Any others?
  * [ ] Form elements aplenty!
    * [ ] `<form>` is the momma...
    * [ ] `<fieldset>` keeps 'em organized...
    * [ ] I AM `<legend>`
    * [ ] look at all the little `<input>` tags!
    * [ ] we should probably `<label>` those...
    * [ ] who's got the `<button>`?
    * [ ] just `<select>` an `<option>` already
    * [ ] when you just have to write a `<textarea>`
    * [ ] **BEAST MODE** Experiments, go forth!
* [ ] **Githubbing to Know You**
  * [ ] Got that PR yet?
  * [ ] PR approved!
  * [ ] Updates inbound...
* [ ] **Following the Blueprints**
  * [ ] **Skitch This Website**
    * [ ] **Vertical Timeline**
      * [ ] small breakpoint
      * [ ] medium breakpoint
      * [ ] large breakpoint
    * [ ] **Multi Column Form**
      * [ ] small breakpoint
      * [ ] medium breakpoint
      * [ ] large breakpoint
  * [ ] **Vertical Timeline**
    * [ ] mobile breakpoint!
      * [ ] Skitch it up!
      * [ ] ugly little boxes
      * [ ] rounded corners are rounded
      * [ ] what time is it?
      * [ ] the date escapes me...
      * [ ] pretty little icons
      * [ ] inside the lines
    * [ ] middle breakpoint!
      * [ ] reorientation engaged!
      * [ ] hitting the BIG time!
    * [ ] large breakpoint!
      * [ ] we need more... BIGGER time!
      * [ ] spacing might need a tweak...
  * [ ] **BEAST MODE: Multi Column Form**
    * [ ] it's a MF'g form
    * [ ] MF'g cornflower blue
    * [ ] I got your MF'g borders...
    * [ ] say `placeholder` again, I dare you...
    * [ ] we have GOT to get this MF'g `padding`...
    * [ ] mobile breakpoint: 1 column
    * [ ] middle breakpoint: 2 columns (sometimes)
    * [ ] large breakpoint: 3 columns
```

### Journal, Week 3

Why are you reading this? 2x journal entry! Chop chop! You should have a draft of both entries by tomorrow. Don't forget to have _at least_ two people read, critique, and approve.

### Reading HTML

Easy part: list elements. You know `<ul>` and `<ol>`, but are there others? Make sure you get the tags that go _inside_ the list elements _and_ any pertinent attributes (you know what those are now, right?) for those tags. Next, in order to help you with your homework, start reading up on `<form>` elements and that whole mixed up family. Cover all the `<input>` types (and there are plenty) and provide examples.

#### BEAST MODE

There are a number of _new_ tags in HTML5 that aren't fully supported by all browsers -- `<datalist>` for example. Document those, as well, and include information on which browsers still don't support them.

### Githubbing To Know You

So it turns out that making a PR with _just_ your changes to `TEMPLATE.md` was a lot harder than it sounded. You didn't know that you could start a branch from the tip of another branch? Well, you should now... Congratulations, time traveller! Once your changes are merged, track down your assignment below and execute... your new instructions. Find out _one_ thing about your target that isn't known and share it in a PR...! Name your branch `feature/USERNAME` where `USERNAME` is the person you're updating.

#### BEAST MODE

Let's get rid of that pesky `master` branch that's still hanging around making trouble. We should probably keep the data in there, but it's not really the `master` anymore, huh? Change the name to `resolving-merge-conflicts` and make your `master` match `master` in the upstream.

### Following the Blueprints

#### Skitch this Website

Use [Skitch](http://evernote.com/skitch) to take some screen snaps of the reference implementation, including the way the layout changes at all three breakpoints (ignore the `<header>` element). Export the originals and add and save them in the repository under `VerticalTimeline/specs/` and `MultiColumnForm/specs/`. Markup these images identifying the block-level elements: columns, rows, etc. Export your specs and add them to the repo.

#### Vertical Timeline

Using your spec documents, create a checklist on your PR that enumerates and breaks down the areas you're going to tackle on this layout. Once you have some marked up specs and a plan, get to work. Get your code to match what we did in class... BUT NO COPY-PASTA! _Type it!_ Tackle your breakpoints early, using the Chrome Device Inspector on the reference implementation to determine the correct values for your Media Queries.

#### BEAST MODE: Multi Column Form

Aside from the marked-up specs, this layout isn't due until the end of the week... but it never hurts to get a head start! Use the same prep as **Vertical Timeline** and at least identify the Media Queries and breakpoints for the assignment.

#### NIGHTMARE MODE

They're just `<form>` elements, right? Didn't you just learn about those? You got this... Start with a MF'g form.

## Resources
