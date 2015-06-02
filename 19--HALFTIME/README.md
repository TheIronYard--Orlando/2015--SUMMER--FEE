# 18 -- HALFTIME!

* **Standup Meeting** (~15m)
* **Parking Lot Topics** (~15m)
* **Progress Review** (~30m)
  * [ ] Jessy Riordan (JessyRiordan)
  * [ ] Sean Joyal (sjoyal)
  * [ ] Michael Staehling (MStaehling)
  * [ ] Jorge Hernandez (jorgehjr84)
  * [ ] Phillip Creglow (pcreglow)
  * [ ] Melissa Rodríguez (melrodbos)
  * [ ] Nick Pope (pope410211)
  * [ ] Kim Mattiko (kmattiko)
  * [ ] Michael Pascuzzi (gatorpazz)
* **Parking Lot**
* **Assignment Review**

## Assignment

```markdown
```

### HALFTIME Journal!

Now that you've got those yaks shaved, it's time to start on the remodeling. Pick one of your features -- the navigation bar, one of the post blocks, the sidebar -- and create a branch _based on `remodeling`_ called `feature/FEATURE-NAME` where `FEATURE-NAME` describes the part you're working on, e.g. `feature/sidebar` or `feature/main-column`. If you're still struggling with how to break down this project, suggest it during the **Parking Lot** review. If you're still fuzzy after that, come see me during lab time. Commit often while you work, and open a PR _into `remodeling`_ as soon as you can. When you finish a feature, i.e. you complete your checklist, solicit peer review of your work and merge it. If you get stuck on a part of a feature, work on another one. Don't be afraid of having multiple branches open at once; you'll regularly have multiple "in-progress" branches on a team.

If you discover that there's some work in one of your in-progress feature branches that you _need_ in your _other_ feature branches, explain what you need and why in a comment on your issue and @-mention me. Then ping me on Slack. Chances are you don't _actually_ need that work or you need to break your work up into smaller pieces. Don't get merge happy.

#### BEAST MODE

This build-out not enough for you? Well, this is a highly valuable experience you're currently undertaking. Why not write a journal entry on it? Get your 2x :+1:s!

### Blueprints Everywhere!

Working from your `specs/`, break down each layout into small chunks of work -- features -- like the icon element in `VerticalTimeline` or switching the tabs in `FullWidthTabs`. **Bold** the features in your checklist and create individual issues for each feature. Link them to the original issue and put checklists on each.

Get to work on your features by creating a separate branch for each. Name each branch `feature/PROJECT-NAME/FEATURE-NAME` where `PROJECT-NAME` is the layout (`QuotesRotator`, `NestedAccordion`) and `FEATURE-NAME` is the feature (`switching-tabs`, `floating-icon`).

#### BEAST MODE

Several of the Blueprints use very repetitive markup. Can you make them data-driven instead? Extract the placeholder text into a JSON data structure. Use a `<template>` tag and lodash `template` to populate the page with markup on `FullWidthTabs`, `NestedAccordion`, `QuotesRotator`, and `VerticalTimeline`.

## Resources

