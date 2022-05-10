console.log('in the script');

let myName = 'Jean-Luc';

console.log('my name is: ', myName)
/*
let --  KEYWORD, about to declare a variable

myName = the name of the variable

= -- the assignment operator, this thing in that box

'Jean-Luc' -- the value of the variable
*/
let lastName = 'LaCosse';
// use camelCase - capitalize every first letter after the first one, won't throw an error but just looks bad to not do it
// snake_case
// kebob-case
// SCREAMING_SNAKE_CASE
// consistency is important with casing, keep it the same for the entire project

/*
Expressions
*/

console.log('my name is ' + myName + ' ' + lastName)
// ^ code that evaluates into a simpler value = expression
// b/cm ('my name is Jean-Luc LaCosse') - single result

function add(n1, n2) {
    return n1 + n2;
}

let result = add(5, 8);
// ^ let result = 13 --- what is evaluated in the function

if (8 > 7) {
    // does something after the above block of code is figured out. Will usually be returned or evalluated as a boolean. Above would result to true as 8 > 7
}

// variable is the box, need to assemble the code and make sure it fits in the box first
// how to take screenshot? make shortcut

let isJamesBond = myName + ' ' + lastName === 'James Bond';
// 'Jean-Luc LaCosse' === 'James Bond'
// false
// let isJamesbond = false;

// + concatenation of strings, or adding numbers together, do not mix strings and numbers though
'15' + 7;
// ^ returns '157' not 22
//Number('aNumberString') --- will change a string number into a real number
String(26);
// ^ will return '26'

// "ten" * 3 --- returns NaN - usually means I tried to do bad math
let aVariable;
console.log('aVariable', aVariable);
// ^ returns undefined

// reference error is trying to reference somthing that doesn't even exist - not defined
// undefined --- variable exists but is not defined
/* null --- nothing, on purpose
*/
let artistFirstName = 'Prince';
let artistLastName = null;

// conditionals 

// if (/* this thing is true*/) {
    /*do the thing in this code block*/

    // everything inside the curly braces is the code block
// } 
// else if (8 + 5 > 16) {

//     //another code block
// }
// else {
//     // run this if nothing above is true
// }


// Switch statement, can work well if used correctly
switch (dayOfTheWeek) {
    case 'Monday':
        console.log('Js review');
        break;
    case 'Tuesday':
        console.log('objects');
        break;
}

// Ternary - these can be imbedded nicely into template strings
let height = 55;
let message = height > 50 ?
    'you can ride the ride'  // if
    :
    'try again when taller'  // else

// functions


//  inputs/arguments/parameters
// yourHeight
// dangerLevelOfRide
function isTallEnough(yourHeight, dangerLevelOfRide) {
    let minHeight;
    if (dangerLevelOfRide === 'kitty') {
        minHeight = 28
    }
    else (dangerLevelOfRide === 'intense') {
        minHeight = 55;
    }
    return yourHeight > minHeight; // need to return in order to use the result elsewhere
}

let canIRide = isTallEnough(50, 'kitty')
// let canIRide = true;
//returns true

function streesRelease () {
    console.log('YAHHHH')
} // does not need to be returned anywhere because there is no ultimate value to be saved and used somewhere else

function welcomeVisitors (name, height) {
    console.log(`hello ${name}`)
    if (isTallEnough (height, 'kitty')) {
        console.log('have fun!')
    }
}

// able to have functions calling functions and go deeper to help simplify the code
// or use the return values of functions and pass them into other functions


// declaring a function
function makeASentence (words) {
    return words.join('') + '.'; // .join wil join any strings
}


// anonymous function - able to assign them t oa variable
let makeASentence2 = function (words) {
    return words.join('') + '.';
}

// arrow function - no longer needs the word function
let makeASentence3 = (words) => {
    return words.join('') + '.';
}
//one lined function - doesn't need parenthesis, arrow will create function that returns what is at the end, also doesn't need {}
let makeASentence4 = words => words.join('') + '.';
    //  theese functions need to be defined before calling them, no hoisting
// calling a function "invoke"
makeASentence('welcome', 'to', 'Gaiman');


// the .log is a method of console object
console.log('yolo')

/* Arrays
*/

let animals = ['bunny', 'cow', 'horse'];

let firstAnimal = animals[0] // first item is always at index 0
let lastAnimal = animals[animals.length - 1]; // use this syntax to get the last item in array

// loops
for (let animal of animals) {
    // 1st time run animal = 'bunny'
    console.log('animal is', animal)
    if (animal === 'bunny') {
        console.log('make bunny babies')
    }
} // run this code with each item in the array

for (let i = 0; i <animals.length; i++) {
    console.log(animals[i])
} // does the same thing but more confusing syntax. The for of loop is more standard

// while loops
let bigNum = 2**20; // ** is for exponential numbers
while (/* a true value eventaully b/cm false during loop*/bigNum > 1) {
    bigNum = bigNum / 2;
    console.log(bigNum);
}

// methods
animals.push('cougar', 'wolf', 'zebra'); // adds all three
// .push, .pop, .shift, .unshift all used to add or take from array
animals.join(', ') // will put a comma between each item, or anything between the quotes
