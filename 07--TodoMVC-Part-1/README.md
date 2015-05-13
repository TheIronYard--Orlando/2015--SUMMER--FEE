# 07 -- TodoMVC, Part 1

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda (~1h 15m)

* **Intro to TodoMVC** (~15m)
  * What does it do?
  * How does it work?
  * Investigative research!
* [ ] **Planning** (~30m)
  * User Story Planning: differences?
  * Interface Planning: what happens when?
  * API Planning: what can we reuse?
  * What is this MVC thingy?
* [ ] **Implementation** (~1h: 2 x 25m)
  * Start with a list...
  * How do we _add_ to that list?
  * Rendering the Model
  * How would we _delete_?

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `07 -- TodoMVC, Part 1 -- YOUR NAME`
    * Link to your PR in `USERNAME.github.io`
    * Link to your PR in `atudent-roster`
    * Link to your PR in `TIY-Assignments`
  *  _WIP Branch_:
    * `USERNAME.github.io:journal-week-1`
    * `student-roster:master`
    * `TIY-TodoMVC:07--todo-mvc-1`
  * _WIP Files_:
    * `USERNAME.github.io`
      * `journal-week-1.md` (or something else)
    * `student-roster`
      * `2015-05/FEE/USERNAME.md` (various)
    * `TIY-TodoMVC`
      * `js/app.js`
* [ ] **Journal, Week 1**
  * [ ] Look, ma, it's a Final Draft!
  * [ ] First revision of Final Draft...
  * [ ] Peer review: 1x :+1:
  * [ ] Peer review: 2x :+1:
* [ ] **Githubbing to Know You**
  * [ ] target acquired, data in transit
  * [ ] data transfer complete, PR inbound
* [ ] **TodoMVC and You!**
  * [ ] caught up to in-class!
  * [ ] I can _see tasks_!
  * [ ] I can _add tasks_!
  * [ ] I can _complete tasks_!
  * [ ] I can _delete tasks_!
  * [ ] **BEAST MODE** I can _edit tasks_!
  * [ ] **BEAST MODE** And they update!
  * [ ] **NIGHTMARE MODE** Screw you, refresh!
```

### Journal, Week 1

You should have a Final Draft ready by tomorrow, Thursday. Yes, tomorrow is already Thursday. Write a solid Draft, and get two people to review it for you. If you're reviewing sosmeone else's draft, write a one-sentence summary of their article as a comment _on their PR_ and give them a big `:+1:`... _if they completed the assignment_. If there are things that they could change or improve or parts that you really liked, leave some comments on those, too... Maybe on a specific line, even.

### Githubbing to Know You

With your repo up to date, talk to your partner. There may be some momentary discomfort. Edit your partner's `USERNAME.md` file in your fork and open a Pull Request. Collisions will occur; hilarity ensues.

### TodoMVC and You!

Type out the work that we did in class today to get some practice and update your User Story issues with a plan of attack for each piece of functionality. Take it a piece at a time, ensuring that you have a JavaScript representation of the list that gets transformed and rendered to the page. Try to keep your Concerns separate or at least document the code where you think you might be violating that rule.

#### BEAST MODE

Editing is harder than it looks... There's just a few extra moving parts, really. Can you get the edit interface to appear per the spec? Can you get it to update the value of the task? Can you get it to update the _rendering_ of the task?

#### NIGHTMARE MODE

A todo app isn't particularly helpful if it forgets all your todos. Read up on [the WebStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) and use `localStorage` to keep your tasks around after a refresh.

## Resources

* **Why do we use `.no-js` / `.js` on the `<html>` tag?**
 * http://stackoverflow.com/questions/6724515/what-is-the-purpose-of-the-html-no-js-class
 * http://alistapart.com/article/taking-advantage-of-html5-and-css3-with-modernizr
 * http://html5doctor.com/using-modernizr-to-detect-html5-features-and-provide-fallbacks/
 * [Modernizr](http://modernizr.com/) and [HTML5 Boilerplate](https://html5boilerplate.com/)
* **What JavaScript event types exist?**
 * https://developer.mozilla.org/en-US/docs/Web/Events
 * examples: [`click`](https://developer.mozilla.org/en-US/docs/Web/Events/click), [`dblclick`](https://developer.mozilla.org/en-US/docs/Web/Events/dblclick)
 * use [`Element.addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) to attach event listeners
