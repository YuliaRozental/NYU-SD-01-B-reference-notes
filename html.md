# HTML cheat sheet

_[<- Return to main menu](README.md)_

## Definition

**HTML** stands for "Hypertext Markup Language":

- "Hypertext" : It has links that can refer to other documents. _This was revolutionary in, like, 1990._
- "Markup" : A way to use code to format documents. This document is written in _Markdown_, which is also a markup language. It's basically text formatting and structure.
- "Language" : Self explanatory! :)

## HTML is used to format _documents_

The original idea of HTML was to share information in written form in a structured that could be formatted and displayed in a way that was easy to read. There are headings, and sections, and paragraphs, and so on. And you can put links in _anywhere_ that point to other cool documents. The internet was even more nerdy at the outset!

## A document has two primary parts

- `<head></head>` : This part contains the `<title>` and lots of other information _about_ the content.
- `<body></body>` : This part contains the content that is actually displayed on the page.

## We use _tags_ to format HTML

HTML structures and formats things by _wrapping_ content in tags. Generally, there's an _opening_ and _closing_ tag.

Example:
```html
<p> <!-- this opens a paragraph element -->
    Here is some text to put in a paragraph. Lorem ipsum dolor sit amet!
</p> <!-- this closes the paragraph element -->
```

### Tags can be nested

Between the opening and closing tags of a particular element, other tags can be opened and closed. Anything between the opening and closing tags of a given element can be thought of as _inside_ that element. (The tag within which other tags occur is often referred to as the _parent_; the other things inside it are referred to as _children_.)

**NOTE:** The closing tag for any _child_ element must occur before the closing tag for a parent element. This is nesting! Example:

```html
<div class="bigtime">
    <ul>
        <li>Brown bear</li>
        <li>Grizzly bear</li>
    </ul>
</div>
```

### Tags can have attributes

Attributes can be defined inside the _opening_ tag of an HTML element. Common attributes:

- `class` : Used with CSS to define a group of elements to apply some rules to.
- `id` : Used with CSS and JavaScript to single out one particular element for various reasons.
- `href` : Used with `<a>` tags to describe the link location.
- `src` : Used with `<img>` tags to describe the location of the image file.

Example:
```html
<a class="fancy-link" href="http://fancy.com">
    <img id="image-number-1" src="http://fancy.com/logo.jpg">
</a>
```

## Common tags

- `h1`/`h2`/`h3`/etc. : These are headings. The hierachy descends from `h1`, i.e., `h1` is big and `h6` is pretty small.
- `p` : Use to hold a paragraph.
- `div` : Used to hold a _division_ of the page. This element is used _a lot_ in modern HTML to define elements we want to style using CSS.
- `a` : If used with the `href` attribute, creates a link to another address.
- `img` : Displays an image based on the `src` attribute.
- `ul` : Sets up an un-ordered list (bullet points).
- `ol` : Sets up an ordered list (1. 2. 3., etc.)
- `li` : As a _child_ element of `ul` or `ol`, defines an element in the given list.

**NOTE:** `<img>` tags are weird, for some reason -- you can just spell out attributes in the opening tag, and skip a closing tag. `¯\_(ツ)_/¯`
