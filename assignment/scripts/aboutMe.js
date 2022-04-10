// Source: https://stackoverflow.com/questions/1303646/check-whether-variable-is-number-or-string-in-javascript
// Used to verify the variable being evaluated against is a number, and not something else (i.e. string, obj, etc.)
// The `isNaN` stands for 'is Not a Number', but with the `!` that reverses the boolean check, essentially making
// each evaluation return `true` if it finds a valid number.
//
// FIRST PART -- `!isNaN(parseFloat(n))`:
// In testing, I found the `parseFloat` steps through input and evaluates if the character is a number or a `.`
// If it finds ANY other value, it stops parsing and returns any numbers found prior to that break. If no numbers were
// found when the evaulation was stopped, then it returns a value of `NaN`. On its own, this would allow values such as
// '123abc' to evaluate as `true`
//
// EXAMPLE:
//  parseFloat('123') returns `123`
//  parseFloat('1.2') returns `1.2`
//  parseFloat('1,234') returns `1`
//  parseFloat('123abc') returns `123`
//  parseFloat('abc123') returns `NaN`
//
// SECOND PART -- `!isNaN(n - 0)`:
// Because values such as '123abc' validate as `true` (because parseFloat would return `123`), this second step is used
// to check that the FULL value can be calulated against. The example from SO used zero, but any number would suffice.

// EXAMPLE:
//  !isNaN('123' - 0) returns `true` (JS automatically evaluates strings as potential numbers first, so this returns `123`)
//  !isNaN('123abc' - 0) returns 'false`
function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

// Function link: https://www.w3schools.com/js/js_functions.asp
//
// Accepts two inputs: a supposed number value, and the number of decimals to return in the output.
// This function checks that the 
function formatNumber(num, decimals) {
    // Validate that the `num` variable is indeed a number and ONLY a number
    if (isNumber(num) && isNumber(decimals)) {
        // Number formatting came from: https://stackoverflow.com/questions/5731193/how-to-format-numbers
        return num.toLocaleString(
            undefined, // Allow browser to choose locality formatting, otherwise could have forced locality with 'en-US'
            { minimumFractionDigits: ~~decimals } // How many decimal places show it display. Use zero for integers.
            // The above line uses `~~` (two squiggles) to return a floor value for decimal, ensuring the number is an integer.
            // That technique was taken from: https://stackoverflow.com/a/8823272
        )
    } else {
        if (!isNumber(num) && !isNumber(decimals)) {
            console.log("%c Both the number value of `%s` and the decimal value of `%s` are not valid numbers, please check your inputs", 'color: #ffcccb; font-weight: bold; background-color: #222', num, decimals)
        } else if (!isNumber(num)) {
            console.log("%c The number value `%s` is not a valid number, please check your input", 'color: #ffcccb; font-weight: bold; background-color: #222', num)
        } else {
            console.log("%c The decimal place value of `%s` is not a valid number, please check your input", 'color: #ffcccb; font-weight: bold; background-color: #222', decimals)
        }
    }
}

// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
const firstName = 'Colin'

// 2 - Create a second variable called `lastName` and assign it the value of your last name
const lastName = 'Oraskovich'

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
const fullName = firstName + ' ' + lastName

// 4 - Console log the value of `fullName`
console.log(fullName)

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 22686

// 6 - Console log this sentence, adding in the variables you created above: 
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.
console.log('My name is %s and I think %s is a winner!', fullName, formatNumber(luckyNumber, 0))

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = true

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = 'lasagna'

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 0 // Later logic accounts for negative numbers or bad values, such as strings

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 2 // Later logic accounts for negative numbers or bad values, such as strings

// 11 - Add two pets to your `pets` variable
pets += 2

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 2 // I am unwavering on this number

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!", 
// if it's not true, console log "How about we stay home?"
if (adventurous) {
    console.log("Adventures are great!")
} else {
    console.log('How about we stay home?')
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if (luckyNumber === 2 && adventurous ) {
    console.log('Roll the dice!')
}

// 15 - Write a conditional that console logs "I can have more pets!" 
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.
if (pets < allowedPets) {
    console.log('I can have more pets!')
} else if (pets > allowedPets) {
    console.log('Oh no, I have too many pets!')
} else {
    console.log('I have enough pets')
}

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.

// Defind the variable here
let mostPets = null

// If either of the pet values are not numbers, fault out of the `if` block
if (!isNumber(pets) || !isNumber(friendsPets)) {
    console.log("A pet value is incorrect. Check both pets: %s and friendsPets: %s for issues", pets, friendsPets)

// Check for negative values
} else if (pets < 0 || friendsPets < 0) {

    // Are both values negative?
    if (pets < 0 && friendsPets < 0) {
        console.log("%s and their friend broke the universe and have %i pets somehow.", fullName, pets + friendsPets)
        // String formatting: https://levelup.gitconnected.com/add-styles-and-formatting-to-your-console-log-messages-in-javascript-5f14819b1c5d
        // Not assigning `mostPets` as negatives values don't make sense here

    // Are `pets` negative
    } else if (pets < 0) {
        console.log("%s is a wizard and has %i pets. Must be a necromancer!", fullName, pets)
        mostPets = friendsPets // Therefore the friend has more pets

    // Otherwise, `friendsPets` must be negative
    } else {
        console.log("%s's friend is a dirty liar and says they have %i pets.", fullName, friendsPets)
        mostPets = pets // Therefore, you have the most pets
    }

// If both `pets` and `friendsPets` are zero, then there are no pets to analyze.
// Since zero is equivalent to `false`, I can test if both values are not false here.
} else if (!pets && !friendsPets) {
    console.log("Neither you or your friend have any pets. Why are we competing to see who has the most?")
    // Set `mostPets` to zero
    mostPets = 0

// Test if there is a tie for the number of pets between you and your friend
} else if (pets === friendsPets) {
    console.log("There is no reason to compete. Both %s and their friend have %i pets each!", fullName, pets)
    // Choose either value as the `mostPets` value
    mostPets = pets

// Check if you have more pets than your friend
} else if (pets > friendsPets) {
    console.log("No question that %s is the best as they have %i pets", fullName, pets)
    // Set `mostPets` to the `pets` value
    mostPets = pets
} else {
    console.log("%s is polite and allows their friend to have the most pets", fullName)
    // Set `mostPets` to the `friendsPets` value
    mostPets = friendsPets
}

// 17 - Write a *switch* statement that logs:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, log "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!

// Used the reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
switch (luckyNumber) {
    case 1:
        console.log('First is the worst')
        break
    case 2:
        console.log('Second is the best')
        break
    case 3:
        console.log('Third is the one with the polka dot dress')
        break
    default:
        console.log("Luck is what happens when preparation meets opportunity")
}

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!

// Answer derived from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
adventurous ? console.log("Adventures are great!") : console.log('How about we stay home?')
