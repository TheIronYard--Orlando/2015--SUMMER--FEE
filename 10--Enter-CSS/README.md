# 10 -- Enter CSS

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Lecture (~1h 30m)

* **Tools on Tuesday**
  * A bit about package managers...
    * `npm` is for Node JS libraries (this is a lie)
    * `bower` is for Browser packages (also a lie)
    * So how do I install `bower`...? `npm install -g bower` :surprise:
    * Now what can I do?
      * `bower install lodash`
      * link `lodash` via `<script>` tags!
  * Let's build that Nested Accordion!
    * Analyze the reference implementation...
      * What elements are important?
      * How can I select them: by tag name, `class`, `id`...?
      * What styles differ from the defaults?
      * What CSS properties might I need?
  * Let's start with a better baseline...
    * `reset.css` vs `normalize.css`
    * Including `normalize.css`:
      * via CDN link and `<link>` tag (boo!)
      * via `bower` and `<link>` tag (meh)
  * Now let's add some basic styles...
    * Insets via box model properties: `margin` and `padding`
    * Everyone loves colors!
    * And better fonts...! Wait...
  * [Google Fonts](http://google.com/fonts)
    * My God, it's full of fonts...
    * Selecting [Beautiful Web Type](http://hellohappy.org/beautiful-web-type/) and lovely [Font Pairs](http://fontpair.co/)
    * Okay, okay, let's just get some fonts already...
  * What about those cute little arrows?
    * [`list-style-type` and the `@counter-type` definition](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type): a cautionary tale
    * [`:before` and `:after` psuedo-elements and the `content` property](https://developer.mozilla.org/en-US/docs/Web/CSS/content)
  * Now for some clickin'...!
    * What event do I need to listen for?
    * What element should listen for that event?
    * What should happen when that event fires?
      * in the Model layer?
      * in the View layer?
  * Hello, [jQuery](http://jquery.com)!
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
  * How do I know that I'm doing any of this correctly? (AKA syntax is hard)
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
CHECKLIST GOES HERE
```

### Journal, Week 2

### Githubbing to Know You

### Following the Blueprints

#### BEAST MODE

#### NIGHTMARE MODE
