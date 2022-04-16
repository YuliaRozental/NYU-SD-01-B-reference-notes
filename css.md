# CSS

_[<- Return to main menu](README.md#contents)_

## Definition

**CSS** stands for "Cascading Style Sheets". Don't stress about the "cascading" for right now. "Style Sheets" means... a place to define some styles!

## Reference

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN: List of all CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index)

## Selectors

CSS targets certain elements in an HTML document based on _selectors_. Selectors can get pretty complex, but the selectors we've looked at at are:

- element selectors, which choose a certain type of HTML element, like `h1` or `p`. For these, you just type the tag name!
- class selectors, which choose elements that have a certain `class` attribute. For these, use the class name you defined in the HTML, preceded by a `.`.

## Declarations

A declaration is a CSS rule that we apply to elements chosen by a selector. Declarations take the following format:

```
    property: value;
```

A *property* is one of the set of pre-defined properties in the CSS specification. You can find a [list of properties here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference). (It's really long!)

A *value* is a valid setting for a given property. Each property has its own range of valid values, so you'll probably have to check the reference above for possibilities.

## Syntax summary

```css
selector {
    property: value;
    property2: value;
    property3: value;
}
```

Example:
```css
h2 {
    color: blue;
    font-family: sans-serif;
    border-left: 3px solid black;
    margin: 0px 0px 20px 0px;
}

.cool-class {
    color: purple;
    font-style: italic;
}
```

## Using CSS in HTML

CSS rules can be included _in_ an HTML file inside the `<head>` tag. Don't do this. It's hard to keep organized and makes for gigantic files!

Instead, include rules from a separate `.css` file by including a `<link>` tag in the `<head>`:
```html
<head>
    <link rel="stylesheet" href="style.css" />
</head>
```
