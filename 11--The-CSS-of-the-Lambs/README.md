# 11 -- The CSS of the Lambs

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

* [ ] **Planning in front of you...**
  * Don't Panic: start drawing boxes.
  * Break big problems down into smaller problems...
* [ ] **Writing down the plan...**
* [ ] **Following the plan...**
* [ ] **When to deviate from the plan...*
  * What happens at these breakpoints?
  * How can I inspect _that_?
  * What changes?

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `11 -- The CSS of the Lambs`
  *  _WIP Branch_:
    * `USERNAME.github.io:journal-week-2`
    * `student-roster:master`
    * `TIY-Assignments:11--css-of-the-lambs`
  * _WIP Files_:
    * `USERNAME.github.io`
      * `about/cascading-style-sheet.md`
      * `*.md` (journal entry)
    * `student-roster`
      * `2015-05/FEE/*.md`
    * `TIY-Assignments`
      * `FullWidthTabs/`
        * `styles.css`
        * `scripts.js`
* [ ] **Journal, Week 2**
  * [ ] Final Draft, First Revision
  * [ ] Peer reviewed by 2 people
  * [ ] Final Draft, 2nd Revision
  * [ ] Peer reviewed by 2 people
  * [ ] 2x :+1:s
* [ ] **Reading CSS**
  * [ ] Flag in the sand: `font-*` properties
  * [ ] Flag in the sand: `text-*` properties
  * [ ] Flag in the sand: `line-*` properties
  * [ ] 2 new properties fully documented!
  * [ ] 5 new properties!
  * [ ] 8 new properties!
  * [ ] 10 new properties!
* [ ] **Following the Blueprints, Part 2**
  * [ ] Mostly empty PR... YAK SHAVED.
  * [ ] I love it when a plan comes together... or you make one.
  * [ ] From lists to tabs!
  * [ ] And clicky tabs, to boot!
  * [ ] Who needs to see all those panels all the time?
  * [ ] Well, maybe just one at a time...
  * [ ] Initial page state: Activate Tab 1!
  * [ ] **BEAST MODE** Media Queries! I have Media Queries!
  * [ ] **NIGHTMARE MODE** I have _no_ more unfinished assignments...
```

### Journal, Week 2

You should be working on your Final Draft (in a couple revisions) for tomorrow. Make sure you have some peers review your work and get your 2x :+1: ...and some extra eyes to pick out spelling and grammar mistakes! While you're reviewing the work of others, thoughtfully reflect on their journal and leave them a positive comment, a potential improvement or constructive criticism, and a **tl;dr** summary on their PR, even if someone else has already written something. You need _at least_ 2x :+1:'s... don't settle for the minimum.

### Githubbing to Know You

Have you made a giant mess yet? Got any seemingly empty (0 files updated) PRs? Generated conflicts on Github that don't seem to be conflicts on your local? What's going on here? Use [the network graph of the shared repo](https://github.com/TheIronYard--Orlando/student-roster/network) to get one sense of it. If you haven't already, add the forks of your classmates as remotes with `hub remote add` and fetch their history. Then take a look at topology of the history with a visualization tool. Can you tell the story of what's happening?

### Reading CSS

Tonight, focus on the typographic elements of CSS: `font-*`, `text-*`, `line-*`, and don't forget `color`! Pay special attention to the units that you can employ when defining rules for `font-size` or `line-height` and document what the percentage values are relative to.

#### BEAST MODE

As you encounter CSS properties in the assignments that you _haven't_ documented yet, add them to your documentation file... even if it's just a flag in the sand. If you're running into them, though, chances are you'll need to know what they do soon enough.

### Following the Blueprints, Part 2

Catch up to where we left off in class with `FullWidthTabs` and complete that build. Spend some time planning first...! Break down the big pieces into little pieces and write a checklist for yourself in your PR. After every Pomodoro or so, commit your code and assess your progress. Our goal isn't pixel-perfect, but there should be no visible flaws in the design. Ensure that you solicit peer review often and get 2x :+1:'s on your PR!

When you're reviewing someone's work, get nit-picky. Give them bullet points that very specifically address flaws in their layout, organization, or general code quality. Pretend you're me. Give them suggestions for improvement. Don't just give a :+1: as a rubber stamp. If you do, I might mark down _your_ assignment accordingly. :disappointed:

#### BEAST MODE

Man, those Media Queries. It's like they're calling to you. Idenfity the breakpoints you need, plan out the styles you'll need to override, and write some CSS!

#### NIGHTMARE MODE

If you're looking for _more_ work, weren't there some old assignments that you may not have completed...? That `QuotesRotator` comes to mind. How about finishing up _those_ assignments, too?

## Resources

* **How do I visualize the history in my repository?**
  * Check the [network graph for the repo](https://help.github.com/articles/about-repository-graphs/#network)
  * Use a tool like [GitX](http://rowanj.github.io/gitx/) or [Source Tree](https://www.sourcetreeapp.com/)
  * Just [tell `git` to show you](http://stackoverflow.com/questions/1838873/visualizing-branch-topology-in-git)... (see [the `glg` alias in Prezto](https://github.com/sorin-ionescu/prezto/blob/master/modules/git/alias.zsh#L107))
* **Where can I get some slick icons for my project?**
  * [The Noun Project](http://thenounproject.com) has lots of free-for-attribution icons
  * Use [Unicode Symbols](http://en.wikipedia.org/wiki/Unicode)! See:
    * [&what.com](http://amp-what.com)
    * [unicode-table.com](http://unicode-table.com/en/)
* **How do I use the [grid method of visual design](http://en.wikipedia.org/wiki/Grid_(graphic_design))?**
  * First, [Don't Overthink It](https://css-tricks.com/dont-overthink-it-grids/)
  * Next, maybe try [Creating Your Own Grid System](http://j4n.co/blog/Creating-your-own-css-grid-system) (scroll down, don't click the arrows... designers)
  * You could [Generate your own Grid](http://www.responsivegridsystem.com/calculator/) (don't do this)
