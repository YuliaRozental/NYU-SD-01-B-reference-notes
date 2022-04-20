const newColorsButton = document.querySelector('.new-button button')
// selects the button at the top left

const availColors = document.querySelectorAll('.avail-colors button')
// selects all the "available colors" on the left

const rainbow = document.querySelector('.rainbow')
// this is the main color swatch container
// it's empty to start with

const movementBar = document.querySelector('.movement-bar')
// this selects the div below the color swatches

// const is used above because once set, these variables can't be changed
// there's no reason we'd want any of these to change!

// this is a long array of CSS colors. scroll past it! :) 
const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ];


function populateColors() {
    // fills each button in the "available colors" list with a random color
    for (let i = 0; i < availColors.length; i++) {
        const index = Math.floor(Math.random() * CSS_COLOR_NAMES.length)
        // you'll look at using Math.random in later units
        // for now, know that "index" now holds a random integer between 0 and CSS_COLOR_NAMES.length
        // which means we can use it to select a color at random!
        availColors[i].style.background = CSS_COLOR_NAMES[index]
    }
}

function addBar(color) {

    // creates a new "color-bar"
    const div = document.createElement('div')
    div.setAttribute("class", "color-bar cycling")
    // div.classList.add('color-bar')
    // div.classList.add('cycling')
    div.style.background = color

    div.addEventListener('click', () => div.remove())
    // adds an event listener to the new bar -- when clicked, it removes itself!

    rainbow.append(div)
    // adds it to the "rainbow" div

    setTimeout(() => div.setAttribute('class', 'color-bar'), 100)
    // creates a delay -- don't worry about this for now
}

newColorsButton.addEventListener('click', populateColors)
// adds an event listener -- populateColors, defined above, is plugged in as the callback function

// add an event listener to each color button
// the function creates a new swatch with the same background color as the button
// by using the addBar function defined above
// (we can get the button's background color because the button is e.target)
for (let i = 0; i < availColors.length; i++) {
    availColors[i].addEventListener('click', function (e) {
        addBar(e.target.style.background)
    }) 
}

// creates the movement indicator ("sprite") below the rainbow
// CSS has built in animation capability called "transition"
// this property has been set on the .movement-sprite in the CSS file
// so when sprite.style.left changes from 0px to its destination
// the effect is smooth!
// the 'transitionend' event listener removes the sprite when the motion is complete!
function moveSprite(color, width) {
    const sprite = document.createElement('div')
    sprite.setAttribute('class', 'movement-sprite')
    sprite.addEventListener('transitionend', function() {
        sprite.remove()
    })
    sprite.style.background = color
    sprite.style.width = width
    sprite.style.left = "0px"
    movementBar.append(sprite)
    sprite.style.left = String(movementBar.offsetWidth - width) + "px"
    return sprite
}

// honestly don't worry about this for now
function cycleColors() {
    if (rainbow.children.length > 2) {
        const cycler = rainbow.children[0]
        cycler.classList.add('cycling')
        const sprite = moveSprite(cycler.style.backgroundColor, cycler.offsetWidth)
        setTimeout(() => {
            rainbow.removeChild(cycler)
            rainbow.appendChild(cycler)
            setTimeout(() => {
                cycler.classList.remove('cycling')
            }, 300)
        }, 700)
    }
}

// or any of this
let int = setInterval(cycleColors, 1300)
rainbow.addEventListener('mouseenter', () => clearInterval(int))
rainbow.addEventListener('mouseleave', () => {
    cycleColors()
    int = setInterval(cycleColors, 1300)
})

// but this is important!
// if we don't invoke this function here, our buttons will have no colors to start!
// comment the line out and refresh the page to see
populateColors()
