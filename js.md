# JavaScript

_[<- Return to main menu](README.md#contents)_

## Definition

A programming language that runs in web browsers. It can interact with HTML and CSS in very useful ways.

## Reference

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN: JS arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)
- [MDN: Relational operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators) (like `<` and `>`)
- [MDN: Equality operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators) (like `==` and `===`)

## JavaScript in action

If you want to play on a JavaScript playground, you can interact with your browser's console by opening Developer Tools.

You can also include a `<script>` tag in the `<head>` of an HTML file to include a JavaScript file. The JS file will run any time the HTML file is loaded in a browser:

```html
<head>
    <script src="script.js"></script>
</head>
```

## Logging

You can "print" values to the broswer console using `console.log()`. This is very useful for finding out what's going on in your code!

`console.log()` can also handle multiple values separated by commas:

```js
let favNumber = 17
console.log("value of favNumber:", favNumber)
// prints "value of favNumber: 17"
```

## Variables

A variable is, more or less, a label for a container that holds a value. You can _declare_ a variable by using `var`/`let` (think of these as synonymous, for now) or `const` in the following syntax:

```js
let myCoolVariable = 123890213403
```

You can access the _value_ of a variable by simply saying its name:

```js
console.log(myCoolVariable) // prints 123890213403
```

You can also change the value of a `let` or `var` variable just by using the `=` again:

```js
myCoolVariable = 11
// the value of myCoolVariable is now 11
```

### camelCase

JavaScript convention is to use "camelCase" to name variables. A proper camelCase variable name:
- has no spaces.
- uses only alphanumeric characters (letters and numbers).
- doesn't start with a number.
- starts with a lowercase letter.
- uses a capital letter at the beginning of each new word.

## Values

JavaScript has five "primitive" (i.e., raw or simple) value types:

- numbers, which you can indicate with standard Arabic numerals (ex: 55 or 234243). These represent the mathematical value of, say, 32, not the characters "3" and "2".
- strings, which look to us like words, but to JavaScript are just a set of characters in a particular order. Create these by wrapping characters in quotes ("", '', or _backticks_).
- Boolean values, which include `true` and `false` .
- `null`, which is specifically nothing.
- `undefined`, which is specifically not anything in particular. :exploding_head: 

## Expressions

Expressions are evaluated by Javascript to give us a result. We can use _operators_ to define an expression:

- Arithmetic operators make JavaScript do math:
    - `2 + 2` (evaluates to `4`)
    - `4 * 3` (evaluates to `12`)
- Comparison operators result in a Boolean value:
    - `7 == 7` (evaluates to `true`)
    - `"cool string" == "cool string"` (evaluates to `true`)
    - `4 < 3` (evaluates to `false`)

## Conditional statements

These are a big deal in computer logic. In Javascript, we can use an `if` statement to evaluate the Boolean value of an expression to determine whether a certain code block should execute:

```js
if ( 3 == 2 ) {
    // this code block will never execute!
    console.log("the impossible is possible")
}
```

`if`'s counterpart `else` lets us define what should happen if the thing we're evaluating is `false`:

```js
if ( 3 == 2 ) {
    // this code block will never execute!
    console.log("the impossible is possible")
} else {
    // this code block will always execute
    console.log("the world still makes sense")
}
```

You can also throw in `else if (anotherExpression)` between `if` and `else` if there are actually a _few_ conditions you want to check for. They'll be checked in order, and the first one that evaluates to `true` will run.

### `switch` statements

Don't stress too hard about `switch` at the moment, but it's another way to make decisions like this. [Check MDN for a good explanation.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

## Arrays

Arrays hold multiple values in a certain order. You can create an array by using `[ ]` and separating the values by commas. Each element is automatically assigned an index starting with `0`.

```js
let typesOfApple = [
   "Fuji",         // the first item is index 0
   "Honeycrisp",   // the second item is index 1
   "Granny Smith"  // and so on
]
```

To access a value from an array, use the numerical index:

```js
typesOfApple[1]    // returns "Honeycrisp"
```

You can also easily change a value in an array using the index:

```js
typesOfApple[1] = "Macintosh"
// "Honeycrisp" is gone now, replaced by "Macintosh"
```

Arrays have a `length` property, which you can access like so:

```js
typesOfApple.length  // returns 3
```

And you can easily add items to the end of an array by using the `.push` method:

```js
typesOfApple.push("Yellow Delicious")
// adds "Yellow Delicious" to the end of the array
```

**Note:** Each index in an array can hold whatever kind of value you like. The following would be a valid array:

```js
const mixedArray = [
    "violins have strings",
    3456234,
    false,
    "bass guitars have strings",
    12
]
```

## Loops and iteration

A common use for arrays in JavaScript is to _iterate_ through the elements -- i.e., perform a certain set of actions for _each_ item in the array, one at a time, in order.

There are many ways to do this; the method we've seen so far is called a `for` loop.

### `for` loops

A `for` loop in JavaScript consists of five parts:

- the `for` keyword itself, followed by parentheses.
- _inside_ the parentheses, three clauses separated by `;`:
    - **initializer**: Code to run before the loop begins. Typically, this clause declares a variable that we'll use to track progress through the loop. Ex: `let i = 0;`
    - **condition**: A Boolean expression that determines when the loop _stops_. As long as the expression is `true`, the loop will run; when it is `false`, the loop stops. Ex: `i < 7;`
    - **afterthought**: Code to run _each time_ the loop ends. Typically this is used to _increment_ the variable declared in the initializer. Ex: `i++`
- a _code block_ containing the code we want to run _each time_ through the loop. This can contain any valid JavaScript code and run as many lines as you like. It begins with `{` and ends with `}`.

Example:
```js
for (let i = 0; i < 7; i++) {
    console.log(i)
} 
// logs the numbers 0 through 6
```

### `for` loops with arrays

`for` loops are often used to iterate through an array by using an iterator variable as the _index_ to access a specific value in the array each time through the loop. Because the variable changes with each loop, a different array index is accessed each time.

Example:
```js
const wordsArray = [ "short", "list", "of", "words" ]

for (let i = 0; i < wordsArray.length; i++) {
    console.log(wordsArray[i])
} 
// logs the following:
// "short"
// "list"
// "of"
// "words"
```

## Objects

JavaScript objects store values using properties (i.e., labels or _keys_) instead of indices. Create an object using `{` and `}`, with properties between them in the following format:

```js
let license = {
    driverName: "Jeremy Rose",
    state: "NY",
    idNumber: 1238903578123,
    licenseClass: "D"
}
```

The colon (`:`) separates the property name (or _key_) from the property value.

The simplest way to access the value of a property is by using _dot notation_. Simply chain the property name after the name of the object, separated by a `.`. Using the example above:

```js
console.log(license.state)
// logs "NY"
```

You can set or change property values using the same notation:

```js
license.state = "OH"
// the value of the "state" property is now "OH"
```