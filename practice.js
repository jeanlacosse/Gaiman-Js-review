// Objects

// "encapsulation" -- putting multiple items together in one box

let person = {
    firstName: 'Jean-Luc',
    lastName: 'LaCosse',
    hairColor: 'brown', // each of these line items is a variable on its own
    isAnInstruction: false, // order in which properties are entered doesn't change anything "unordered set of values", an array is ordered
}

// made of properties and values -- key:value pairs -- value can be any data type, including another object, function, or array

// dot notation is easiest way to acces values in an object

console.log('last name is: ', person.lastName);

if (person.isAnInstruction) {
    console.log('time to teach') // evaluates to false so it wont run
}

person.hobbies = [
    'skiing', 'cooking', 'wine'] // this will add a new key:value pair to the array

console.log(person.hobbies);

person.firstName = 'Jeanie'; // able to modify values already in the object

function updatePerson(property, newValue) {
    // TODO
    // property = 'haircolor'
    // value = 'green'
    person[property] = newValue; // syntax looks like a passed in array sort of
    // person['hairColor'] = 'green'
}

updatePerson('hairColor', 'green');
console.log(person.hairColor); // returns green


// Challenge 1: console.log - i've been doing guitar for 2 years
// i've bee ndoing mushroom farm for 0.9 years
// i've been doing harmonica for x years
// conosle.log - i have spent a total of $2200 on hobbies

let person2 = {
    // property: value
    // key: value
    isAnInstructor: true,
    lastName: 'Schwartz',
    firstName: 'Edan',
    // person2.hobbies
    hobbies: [
        // person2.hobbies[0]
        {
            name: 'guitar',
            // person2.hobbies[0].yearsExperience
            yearsExperience: 2,
            moneySpent: 1000
        },
        {
            name: 'mushroom farm',
            yearsExperience: 0.9,
            moneySpent: 800
        },
        {
            name: 'harmonica',
            yearsExperience: 3,
            moneySpent: 400
        }
    ]
};


// Challenge 1 answer below

function hobbies (array) {
    for (each of array.hobbies) {
        console.log (`I've been doing ${each.name} for ${each.yearsExperience} years`);
    }
}

hobbies(person2);

function moneySpent (array) {
    let total = 0;
    for (each of array.hobbies) {
        total += each.moneySpent;
    }
    return total;
}

console.log (`I've have spent $${moneySpent(person2)}`);


// more answers

let hobby = person2.hobbies[0];
console.log(`i've been doing ${hobby.name} for ${hobby.yearsExperience} years`)
/*
Challenge 1:

console.log
    I've been doing guitar for 2 years
    I've been doing mushroom farm for 0.9 years
    I've been doing harmonica for 3 years

Challenge 3:

console.log:
    I have spent a total of $2200 on hobbies
*/