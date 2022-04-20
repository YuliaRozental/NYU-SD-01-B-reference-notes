# The DOM

_[<- Return to main menu](README.md#contents)_

## Definition

The DOM means the **D**ocument **O**bject **M**odel.

We know that HTML describes _documents_ and that in JavaScript we can build entities called _objects_. When a web browser loads an HTML page, it builds that document into a gigantic nested JavaScript object that controls how the document is displayed.

This object is stored in a global variable called `document`, which you can access directly in JavaScript.

This makes _every_ property of _every_ element of the document accessible to (and changeable by!) JavaScript code. Cool!

## Reference

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

## Elements in the DOM

Just as `document` itself is a JS object, you can store individual DOM elements in JavaScript variables to make it easier to manipulate them.

You _can_ dig in to the `document` object property-by-property, just as you could with any other JavaScript object, to find a particular element. But there is a much easier way.

## `document.querySelector()`

The `document` object includes a very useful `.querySelector()` method. By providing any CSS selector in the parentheses, we can "grab" the _first_ element that matches the selector.

You can use the same syntax you use to target elements in CSS.

Examples:

```js
document.querySelector("h1")
// returns the first <h1> element

document.querySelector(".lovely")
// returns the first element with a class attribute of "lovely"

document.querySelector("#third-div")
// returns the first element with an id attribute of "third-div"
```

Because `.querySelector` _returns_ the selected element, you can save it to a variable to make it easier to manipulate:

```js
let firstHeader = document.querySelector("h1")
// firstHeader now contains the selected element
```

## The `style` attribute

Every DOM element has a `style` attribute that contains information about the styles applied _directly_ to that element. If you're using CSS classes for styling, the `selectedElement.style` attribute might be mostly empty to start -- but we can use JS to change it.

Example (using `firstHeader` above):

```js
firstHeader.style.color = "fuchsia"
// the element's text is now fuchsia
```

### CSS properties in `.style`

The `.style` property of an element has approximately one gajillion properties. Each one corresponds to a CSS property; the main difference is that you have to take out any dashes and _camelCase_ them in JS.

Example:

```js
firstHeader.style.marginLeft = "20px"
// in your CSS file, this would be "margin-left"
```

Also note that `"20px"` needs to be a _string_ to work in JavaScript -- in a CSS file you could just write `20px`. Once you get used to these slight differences you won't even notice them!

## `.querySelectorAll()`

Instead of "grabbing" just the _first_ element that matches the selector, you can grab _all_ of them by using `document.querySelectorAll()`.

The selector syntax is the same as for `.querySelector`. However, what's returned is not a single element, but rather a _list_ of elements. To make any changes to these element's styles, you'll likely need to set up a `for` loop to change _each_ element one at a time.

## Creating elements

You can create a new DOM element by using `document.createElement('typeOfElement')` where `typeOfElement` is an HTML tag, like `div` or `h1`. This method _returns_ the newly created element, so you can store it in a variable:

```js
let newDiv = document.createElement('div')
// newDiv now holds... the new div
```

The new element begins its life empty and generic, so we can adjust its properties:

```js
newDiv.textContent = "Lorem ipsum dolor sit amet."
// sets the div's content

newDiv.setAttribute('class','lovely')
// the div now has class="lovely"
```

### Appending a created element

The thing is: It won't show up on the page. To make it visible, we have to _append_ it to an existing DOM element:

```js
let main = document.querySelector('.main')
// selects an existing element with class "main"; let's assume this is the primary div holding our page content

main.append(newDiv)
// plugs the newDiv we created above into main; the newDiv will appear at the bottom of main
```

### Removing an element

You can easily _remove_ an element from the visible DOM using the `.remove()` method. Simple!

```js
main.remove()
// coupled with the code in the section above, this would make the page's primary content disappear!
```

## Events

JavaScript also includes the ability to "listen" for user interactions with a DOM element -- these interactions are referred to as _events_ and include "click", "mouseover", "scroll" and many, many more.

We can use `.addEventListener` to add an event listener to a given DOM element by providing two arguments:
- the event to listen for, e.g., `"click"`
- the function to execute when the event occurs (referred to as a _callback function_)

>Note: It is common to use an unnamed function (also called an "anonymous function") in an event listener as shown below:

```js
let myButton = document.querySelector('#button1')
// selects the element with id "button1"

myButton.addEventListener('click', function(){
    console.log("Someone clicked the button.")
})
// attaches a "click" listener to myButton
```

The function doesn't need a name in this case -- it's just the function that runs when (and _only_ when) the button is clicked.

### Dynamically changing the DOM

Just like with any other function, we can add as much code to the callback function as we like. We can use anything else we've learned about changing DOM elements inside the function -- changing styles, appending or removing elements, and so on.

```js
let mainHeader = document.querySelector('h1')
// selects the first h1 on the page

let myButton = document.querySelector('#button1')
// grabbing our hypothetical button again

myButton.addEventListener("click", function(){
    mainHeader.textContent = "BOOO!"
    // changes the content of mainHeader when the button is clicked
})
```

### The event object

We can also get information about the event itself -- most importantly, the "target" of the event, i.e., the element that was clicked!

We can do this by setting a parameter between the parentheses in the callback function to accept this input. It's conventional to call it `e`:

```js
let myButton = document.querySelector('#button1')
// grabbing our hypothetical button again

myButton.addEventListener("click", function(e){
    e.target.textContent = "BOOO!"
    // e is the event
    // e.target is the element that was clicked
    // so this changes the content of the button itself
})
```

>Note: It's worth `console.log()`ing `e` within the callback function sometime just to see how much information is in the event object!