build-lists: true

# [fit] Quiz time!

---

# Can you name _seven_ literals?

1. `null`
1. `Boolean`
1. `Number`
1. `String`
1. `Array`
1. `Object`
1. `Function`

---

# Write a function named `foo`...

```javascript
expect(foo).to.exist;
expect(foo).to.be.a('function');
```

---

# Write a function named `foo`...

```javascript
function foo(){
  // what's this called?
}

var foo = function(){
  // same here?
}
expect(foo).to.exist;
expect(foo).to.be.a('function');
```

---

# What characters do we use to write `Object` literals?

```javascript
// TODO: put empty Object literal here...
var obj = ???;
```

---

# What characters do we use to write `Object` literals?

```javascript
// TODO: put empty Object literal here...
var obj = { };
```

---

# What characters do we use to write `Object` literals?

```javascript
// TODO: put empty Object literal here...
var obj = { };
```

## And to put an empty `Array` named `foo` inside?

---

# What characters do we use to write `Object` literals?

```javascript
// TODO: put empty Object literal here...
var obj = { "foo": [ ] };
```

## And to put an empty `Array` named `foo` inside?

---

# Can you print the length of `foo`?

```javascript
var obj = { "foo": [ ] };
// TODO: Use `console.log` to print the `length` of `foo`...
console.log(???);
```

---

# Can you print the length of `foo`?

```javascript
var obj = { "foo": [ ] };
// TODO: Use `console.log` to print the `length` of `foo`...
console.log(obj.foo.length);
```

---

# What does the acronym _MVC_ stand for?

* **M**odel
* **V**iew
* **C**ontroller

## _Discussion:_ What are the Responsibilities of each?

---

# Return to the Temple of DOM!

```html
<!doctype html>
<html class="js">
  <head>
    <title>Mini TodoMVC</title>
  </head>
  <body>
    <header class="header--main">
      <input type="checkbox" class="select-all">
      <input class="new-todo" placeholder="What needs to be done?">
    </header><!-- .header--main -->
    <section class="section--main">
      <ul class="todo-list">
        <li> <input type="checkbox" class="done">
          Remember the milk! </li>
        <li> <input type="checkbox" class="done">
          And the beer! </li>
      </ul><!-- .todo-list -->
    </section><!-- .section--main -->
  </body>
</html>
```

^ Questions:
* Select the text of the `<title>` tag
* Collect all the `<input>` tags
* How about all the checkbox `<input>` tags?
* Using JavaScript, can you toggle the state of the checkbox for "Remember the milk"?
* Using only JavaScript, can you change the order of the tasks?
* Starting from `document` and using only dot-notation, can you select the last `"done"` checkbox?

---

# Return to the Temple of DOM!

1. Select the text of the `<title>` tag:
  `document.querySelector('title').innerText`
  **OR** `document.title`
1. Select all `<input>` elements: `document.querySelectorAll('input')`
1. Select only the checkboxes: `document.querySelectorAll('input[type="checkbox"]')`

---

# Return to the Temple of DOM!

Toggle the state of "Remember the milk":

```javascript
// 1. Select the first task...
var task = document.querySelector('ul.todo-list > li');

// 2. Get the checkbox element within...
var checkbox = task.querySelector('input.done');
//     **OR** `task.firstChild`

// 3. Toggle the checkbox value...
checkbox.checked = !checkbox.checked;
```

---

# Return to the Temple of DOM!

Reorder the tasks:

```javascript
// 1. Select the task list and first task...
var list = document.querySelector('.todo-list'),
    task = list.querySelector('li'); // **OR** `list.firstChild`

// 2. Remove `task` from `list`...
list.removeChild(task); // **OR** `task.remove()`

// 3. Re-append `task` to `list`...
list.appendChild(task);
```

