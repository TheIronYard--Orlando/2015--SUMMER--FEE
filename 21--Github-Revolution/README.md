# 21 -- Github Revolution

## Rituals (~35m)

* **Standup Meeting** (~15m)
* **Assignment Review** (~20m)

## Build-a-Blog

* **What's this [Jekyll](http://jekyllrb.com) business anyway?**
  * [ ] [Static Site Generators](https://www.staticgen.com/): Basic theory of operation...
  * [ ] See, [Jekyll](http://jekyllrb.com/docs/home) powers [Github Pages](https://help.github.com/categories/github-pages-basics/)
  * [ ] Problem is, you have to follow [The Structure](http://jekyllrb.com/docs/structure/)...
  * [ ] And you might need some [Special Sauce](http://jekyllrb.com/docs/frontmatter/)...
  * [ ] So that you can use [Template Variables](http://jekyllrb.com/docs/variables/) like `site.posts`...
  * [ ] Inside of [a `for` loop](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers#for-loops).
* **Let's do it!**
  * [ ] Merge your changes!
  * [ ] Make a _new_ branch: `jekyll`
  * [ ] Modify your Markdown files in `_posts/` to have a date prefix of `YYYY-MM-DD`...
  * [ ] Add some Special Sauce and Template Variables to `index.html`
  * [ ] Peer review!

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `21 -- Github Revolution -- YOUR NAME`
  *  _WIP Branch_:
    * `TIY-Github:develop` (from `master`)
  * _WIP Files_:
    * `TIY-Github`
      * `css/main.css`
      * `index.html`
* [ ] **Github Revolution, Part 2**
  * [ ] Skitched them mobiles!
  * [ ] Mobile Features
    * [ ] `feature/mobile-tabs`
    * [ ] `feature/mobile-profile-details`
    * [ ] `feature/mobile-popular-repos`
    * [ ] `feature/mobile-contrib-repos`
    * [ ] `feature/mobile-repos-repo-list` :angry:
    * [ ] `feature/mobile-repos-repo`
  * [ ] Desktop Features
    * [ ] `feature/desktop-profile-details`
    * [ ] `feature/desktop-2-columns`
    * [ ] `feature/desktop-tabs`
    * [ ] `feature/desktop-contribs-repo-list`
    * [ ] `feature/desktop-repos-repo-list`
    * [ ] `feature/desktop-repos-repo`
    * [ ] `feature/desktop-repos-repo-graph` :imp:
    * [ ] `feature/desktop-contrib-graph` :itsatrap:
    * [ ] `feature/desktop-contrib-activity` :notsure:
  * [ ] **Spec my feature?**
    * [ ] Help from the left on...
    * [ ] Help from the right on...
    * [ ] Helped the left on...
    * [ ] Helped the right on...
```

### Github Revolution, Part 2

You skitched all those breakpoints already, right? Except that _Github doesn't use breakpoints_. There are _no_ Media Queries whatsoever. Switch your User-Agent (UA) identifier to a mobile device and reload... That's _adaptive_ rather than _responsive_, and that's a problem. Let's fix it.

Your assignment for the weekend is to build out HTML and CSS for a _responsive_ Github profile. Start Mobile-First and expand to desktop. I've suggested some features for you, in case you need guidance. Feel free to add your own, break down the ones provided, or just write your own set.

#### Spec my feature?

To get a feel for "too much vs not enough planning", help your neighbors with two features by writing the plans for their feature in an issue in their `TIY-Github` repository. Also solicit help from them on two of your own features. Review their plans carefully and give them honest feedback on the work. Don't wait for the perfect plan, but if you require more details than you were given while you're working, ask for more details while you work on something else.

When you're writing specs, be sure to include images from Skitch or Preview (or whatever) with markup. You can attach them directly to the Issue, and Github will happily hold on to them for you.

## Resources

* **What are Github Pages?**
  * https://www.staticgen.com/
  * https://pages.github.com/
  * https://help.github.com/categories/github-pages-basics/
* **What can I do with [Liquid Templates](https://github.com/Shopify/liquid/wiki)?**
  * https://github.com/Shopify/liquid/wiki/Liquid-for-Designers
  * https://github.com/Shopify/liquid/wiki/Liquid-for-Designers#output
  * https://github.com/Shopify/liquid/wiki/Liquid-for-Designers#if--else
  * https://github.com/Shopify/liquid/wiki/Liquid-for-Designers#for-loops
* **That Github API, though...**
  * https://developer.github.com/v3/
  * https://developer.github.com/v3/users/
  * https://developer.github.com/v3/repos/
  * https://developer.github.com/v3/activity/events/
* **I need those Github Icons!**
  * https://octicons.github.com/
  * USE `bower`...!
