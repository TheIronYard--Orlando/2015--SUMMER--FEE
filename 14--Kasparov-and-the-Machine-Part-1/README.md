# 14 -- Kasparov and the Machine, Part 1

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## How about a nice game of chess?

* [ ] Planning in front of you...
  * [ ] Skitch that stuff...
  * [ ] What are our boxes?
  * [ ] Does this look familiar?
* [ ] Building the View...
  * [ ] just _1_ cell
  * [ ] 2x2 is easier
  * [ ] 4x4 is harder
  * [ ] let's make some pieces

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `14 -- Kasparov and the Machine, Part 1`
  *  _WIP Branch_:
    * `USERNAME.github.io:journal-week-3`
    * `student-roster:master`...?
    * `TIY-Chessboard:14--kasparov-1`
    * `TIY-Assignments:feature/multi-column-form`
  * _WIP Files_:
    * `USERNAME.github.io`
      * reflective journal entry
      * tutorial journal entry
      * `about/html.md`
    * `student-roster`
      * `2015-05/FEE/USERNAME.md` (not yours!)
    * `TIY-Chessboard`
      * `index.html`
      * `css/main.css`
      * `js/main.js`
    * `TIY-Assignments`
      * `MultiColumnForm/`
        * `index.html`
        * `css/main.css`
        * `js/main.js`
* [ ] **Journal, Week 3**
  * [ ] Reflective Post
    * [ ] Final Draft!
    * [ ] Peer Review x 2!
  * [ ] Tutorial Post
    * [ ] Final Draft!
    * [ ] Peer Review x2!
  * [ ] **ALL DONE!** Close that PR!
* [ ] **Reading HTML**
  * [ ] come to the `<table>`
  * [ ] no one ever reads the `<caption>`
  * [ ] `<col>` waiting? I got `<colgroup>`!
  * [ ] you've got a nice `<tbody>`
  * [ ] but don't let it go to your `<thead>`
  * [ ] shot in the `<tfoot>`
  * [ ] `<tr>` coffee?
  * [ ] `<td>` or not `<td>`?
  * [ ] that would be `<th>`
* [ ] **Githubbing to Know You**
  * [ ] Fill out the faves! Yes, all of them...
  * [ ] Contemplate Esoterica
  * [ ] Look, ma, new categories!
* [ ] **Following the Blueprints**
  * [ ] it's a MF'g form
  * [ ] cornflower blue, MF-er
  * [ ] I got your MF'g borders...
  * [ ] say `placeholder` again, I dare you...
  * [ ] we have GOT to get this MF'g `padding`...
  * [ ] mobile breakpoint: 1 column
  * [ ] middle breakpoint: 2 columns (sometimes)
  * [ ] large breakpoint: 3 columns
  * [ ] **BEAST MODE** That's no email...
  * [ ] **NIGHTMARE MODE** Sticky form submissions!
* [ ] **Kasparov and the Machine**
  * [ ] **Check out that View!**
    * [ ] 8 columns...
    * [ ] ...labeled A through H
    * [ ] 8 rows...
    * [ ] ...labeled 1 through 8
    * [ ] chessboard pattern?
    * [ ] check out those pieces!
    * [ ] we've got buttons!
  * [ ] **BEAST MODE Controllers are easy!**
    * [ ] clicky buttons!
    * [ ] What is the next move?
    * [ ] **NIGHTMARE MODE** Gave over! Restart?
```

### Journal, Week 3

Got those final drafts ready yet? Yours are the only not-a-blogs that I read... Make sure that other people do, too, though. Get them :+1:s!

### Reading HTML

Next on the list: `<table>` tags! Yeah, there's a whole crazy family of _them_, too. Don't worry about all the deprecated attributes... and there are lots. Those `<table>` folks are really old, so there's lots of stuff hanging off of 'em from the HTML 3.2 days. There are some weirdo CSS properties that _only_ apply to those things, too... Might want to investigate those.

### Githubbing to Know You

All the PRs that are gonna land have landed. Here are your targets. Happy hunting.

#### Fill out the Faves!

| you ask      | they tell    |
|--------------|--------------|
| Epicurean306 | gatorpazz    |
| JessyRiordan | MStaehling   |
| sjoyal       | gatorpazz    |
| MStaehling   | melrodbos    |
| jorgehjr84   | jorgehjr84   |
| pcreglow     | jorgehjr84   |
| melrodbos    | kmattiko     |
| pope410211   | gatorpazz    |
| kmattiko     | Epicurean306 |
| gatorpazz    | pcreglow     |

#### Contemplate Esoterica

| you ask      | they tell    |
|--------------|--------------|
| Epicurean306 | sjoyal       |
| JessyRiordan | gatorpazz    |
| sjoyal       | pope410211   |
| MStaehling   | pcreglow     |
| jorgehjr84   | Epicurean306 |
| pcreglow     | Epicurean306 |
| melrodbos    | pcreglow     |
| pope410211   | JessyRiordan |
| kmattiko     | melrodbos    |
| gatorpazz    | pcreglow     |

#### Didn't you make some _new_ categories?

| you ask      | they tell  |
|--------------|------------|
| Epicurean306 | sjoyal     |
| JessyRiordan | jorgehjr84 |
| sjoyal       | pope410211 |
| MStaehling   | sjoyal     |
| jorgehjr84   | pope410211 |
| pcreglow     | kmattiko   |
| melrodbos    | sjoyal     |
| pope410211   | kmattiko   |
| kmattiko     | jorgehjr84 |
| gatorpazz    | pope410211 |

### Following the Blueprints

Yesterday's **BEAST MODE** is today's **NORMAL MODE**! [Show me your skills of an artist!](http://www.homestarrunner.com/sbemail58.html) Three breakpoints. Three columns. A whole bunch of `<form>` elements. And you. Who will survive? Woah, that's dark... How 'bout giving it a good run here? It's not as complicated as you think.

#### BEAST MODE

Input validation is one of the most important features of an application. In our TodoMVC application, we trimmed out leading and trailing spaces and only accepted non-empty input for new tasks. In our form, we're asking for an email address and several other pieces of information, not all of which may be essential. [HTML `<input>` elements have a way to enforce those validation rules](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms_in_HTML#Constraint_Validation).

Make the name and email fields _required_ and validate that the email value provided is actually an email. Any other appropriate validations you can think of?

#### NIGHTMARE MODE

So we can fill out all those lovely fields... But how can we _submit_ those values? Where do they go? How do we get them back out of there...? In the reference implementation, the values get shoved onto the end of the URL when the form submits... AND the form is refilled with the values that were submitted. O_O

### Kasparov and the Machine

Our big project this week is building an interactive chessboard ([a la the Chess.com Game Explorer](http://www.chess.com/explorer/)) that walks through [Kasparov v Karpov (1984)](http://www.chess.com/games/view?id=353900).  But since our focus this week is HTML and CSS, our primary task is to build the View for our chessboard.

You should have 8 rows of 8 columns that alternate dark and light colors, starting with a light-colored square in the upper left. In chess, [the rows are called "ranks"](http://en.wikipedia.org/wiki/Glossary_of_chess#Rank) and labeled 1 to 8, starting at the bottom. [The columns are called "files"](http://en.wikipedia.org/wiki/Glossary_of_chess#file) and labeled "a" through "h". The black pieces are displayed on the top of the board in ranks 8 and 7; the white at the bottom in ranks 1 and 2.

Aside from the board, we also need _pieces_. Chess geeks abound in computer geek circles, so it shouldn't surprise you that [there are Unicode characters for the chess pieces](http://www.amp-what.com/unicode/search/chess). You should create CSS rules for `.piece`, `.black`, `.white` and each piece that adds the appropriate Unicode character as a `::before` element.

Finally, there's a bunch of buttons on Chess.com that advance the moves. We need those controls in the View, even if they don't _do_ anything. There should be a "next" and "previous" button, a "jump to end" and "restart" button. There are probably some appropriate Unicode characters or a nice Icon Font we can use.

#### BEAST MODE

The Controller layer is basically tied to a bank of buttons on the bottom. Can you get them to _do_ something? Just _anything_ is really a start. Can you at least log the next move to the console?

#### NIGHTMARE MODE

When you log the last move, subsequent clicks on the "next" button shouldn't do _anything_, just like Chess.com. There's a "restart" button...

## Resources

* LINK
