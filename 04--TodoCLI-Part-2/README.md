# 04 -- Todo CLI, Part 2

## Rituals

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

* [ ] **Yak Shaving** (~15m)
  * [ ] initial filstructure
  * [ ] what's the mantra?
* [ ] **API Implementation** (~30m + ~30m)
  * [ ] scaffold the API & test plan: `chai`
  * [ ] running the tests automatically: `nodemon`
* [ ] **Interace Implementation** (~30m + ~30m)
  * [ ] scaffold the interface & test plan?
  * [ ] what's in a `process`?
  * [ ] executable files and permissions
  * [ ] refactoring to separate concerns
* [ ] **Assignment Review** (~30m, PM)

## Assignment

```markdown
* **Yak Shaving**
  * _WIP Issue:_ `04 -- TodoCLI, Part 2 -- YOUR NAME`
  * _WIP Branch:_
    * `USERNAME.github.io:04--todo-cli-2`
    * `TIY-Assignments:04--todo-cli-2`
  * _WIP Files:_
    * `USERNAME.github.io`
      * `about/javascript.md`
    * `TIY-Assignments`
      * `todos.js`
      * `string-calculator.js`
      * `check-writing.js`
* **Reading JavaScript**
  * [ ] `{ }` as block operator
  * [ ] `if`, `else`, `switch`
  * [ ] `try/catch`, `throw`
  * [ ] `for`, `while`, `do-while`
* **Todo CLI, Part 2**
  * [ ] checkpoint from end of class
  * [ ] added 1 new (failing) test!
  * [ ] passing tests again!
  * [ ] added 1 new feature!
  * [ ] **BEAST MODE** API Complete!
  * [ ] **NIGHTMARE MODE** Feature complete!
* **Coding Katas**
  * **String Calculator**
    * [ ] function `toNumber` exists!
    * [ ] `toNumber("zero")` works!
    * [ ] function `add` exists!
    * [ ] `add("zero", "zero")` works!
    * [ ] `"one"` plus `"one"` is `2`!
    * [ ] `"two"` plus `"two"` is `4`!
    * [ ] make `"seven"` up yours!
    * [ ] and `"nine"` is the end!
  * [ ] First pair!
  * [ ] Second pair!
  * [ ] Third pair!
```

### Reading JavaScript

I'm going easy on you for the weekend... And this is really your last formal assignment to add entries. Using the following resources from MDN and your own research, describe [the control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) constructs: `{ }` as a block operator, `if`, `else`, `switch/case`, `try/catch`, and `throw`. Then read and cover [the looping and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) keywords: `for`, `while`, and `do/while`.

Now that you've seen what you're producing, maybe you'll be tempted to try making that look... prettier. Don't. Well, if anything, format the text a little better, make a consistent style, find a resource that you like and emulate it.

### Todo CLI, Part 2

Just like last yesterday, use the code we wrote together in class as a reference, but _type it yourself_. You'll get tons of practice writing functions in the **Coding Katas** section. Be sure to commit as you go, but _definitely_ commit when you finish your transcription. When you're done, try writing _another_ test that fails, commit it, and then try making it pass. If you're feeling really brave...

#### BEAST MODE

There's a lot of functionality we've planned in the API that we didn't touch. Can you complete it? With tests?

Don't know what to test? What should each function in the API take as an input, and what should it produce as an output? Test that. Sounds easy... sounds hard.

#### NIGHTMARE MODE

Remember that interface we were going to build... Think you're up to the challenge? It's dangerous out there. [Take this.](https://www.npmjs.com/package/commander)

### Coding Katas

Test Driven Development (TDD) isn't just a good way to write software, it's also a great way to practice programming. Like doing lunges or playing scales and arpeggios, it doesn't _look_ productive, but what you learn along the way makes you better at it. Use these two practice problems to start on the path to TDD mastery. Use the `chai` library to make assertions about the functions you haven't written yet (red), write code that makes the assertions pass (green), and then look for opportunities to make your code better (refactor). At this point, focus on formatting and syntax improvements.

Work together in pairs for at least part of this assignment. Take turns writing code with each other, one computer at a time. Every 5 minutes, switch who is typing, but stay on the same computer. Every 20 minutes take a break to review the code, commit, and switch computers. After you've both written code, talk about the decisions you've made together, then find another pair. Do this at least 3 times with different people.

#### String Calculator

Remember how we tried to do `"one" + "one"` in the console? JavaScript doesn't know how to convert English to numbers... but we can teach it! Start with the following example and expand it, writing tests to cover each input and output. HINT: You'll get a lot of practice writing `if` statements. Don't copy-pasta the starting point, either: type it yourself. While you're at it, think about _why_ you're typing what you're typing.

```javascript
expect = require('chai').expect;

function toNumber(word){
  if ( word === "one" ){
    return 1;
  }

  return 0;
}

expect(toNumber).to.exist;
expect(toNumber("zero")).to.equal(0);
expect(toNumber("one")).to.equal(1);
// more tests here, please...

function add(A, B){
}

expect(plus).to.exist;
expect(plus("zero", "zero")).to.equal(0);
expect(plus("zero", "one")).to.equal(1); // change just one thing!
expect(plus("zero", "two")).to.equal(FILL_ME_IN); // ha!
// write more tests like those...

expect(minus).to.exist;
expect(minus("zero", "zero").to.equal(0);
expect(minus("zero", "one").to.equal(-1);
// etc, etc, etc

// What about multiplication? Division? Exponents?
```

##### NORMAL MODE

Your `toNumber` function should work for numbers `"zero"` through `"nine"`, and at least one of your math functions should work for _all_ combinations of two numbers, i.e. `plus("zero", "zero")` through `plus("nine", "nine")`.

##### BEAST MODE

What, your calculator only does _one_ thing? Mine can add, subtract, multiply and divide...

##### NIGHTMARE MODE

Your tests are too long. Mine are only 5 lines for every operation. Don't Repeat Yourself, make the computer do it.

