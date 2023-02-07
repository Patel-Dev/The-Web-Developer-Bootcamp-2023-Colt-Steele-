// For Each
let arr = [1, 2, 3];
arr.forEach(function (num) {
    console.log(num * 2);
})

// Map
const arrDouble = arr.map(function (num) {
    return num * 2;
})
console.log(arrDouble);

// Arrow Functions
const arrTriple = arr.map((num) => {
    return num * 3;
})
console.log(arrTriple);

// Arrow Function Implicit Returns
const arrQuadruple = arr.map((num) => (
    num * 4
))
console.log(arrQuadruple);

// Arrow Functions Simplification - Single parameter can drop parentheses, one line statement
const arrQuintuple = arr.map(num => num * 5)
console.log(arrQuintuple);

// setTimeout 
const timeoutTest = setTimeout(() => {
    console.log("Hey, you there?");
}, 4000)

// setInterval - end with clearInterval(repeatMsg)
const repeatMsg = setInterval(() => {
    console.log("I repeat every 2 sec!");
}, 2000)

// Filter
const oddNums = arr.filter(num => num % 2 == 1)
console.log(oddNums);

// Some & Every
const allLessThan10 = arr.every(num => num < 10);
console.log(allLessThan10);
const allLessThan3 = arr.every(num => num < 3);
console.log(allLessThan3);
const someLessThan2 = arr.some(num => num < 2);
console.log(someLessThan2);
const someLessThan0 = arr.some(num => num < 0);
console.log(someLessThan0);

// Reduce
const sum = arr.reduce((sum, curVal) => (
    sum + curVal
))
console.log(sum);

// Reduce can be done with preset values for accumulator
const sumPlus10 = arr.reduce((sum, curVal) => sum + curVal, 10)
console.log(sumPlus10);

// Arrow Functions & 'this' 
const Movie = { // Using non-arrow functions to define object methods
    name: "The Terminator",
    year: 1984,
    description: function () {
        console.log(this) //refers to this movie object
        console.log(this.name + " " + this.year); // Works fine
    }
}

Movie.description();

const Movie2 = { // Using arrow functions to define object methods
    name: "Terminator 2",
    year: 1991,
    description: () => {
        console.log(this) // this refers to the JS Window object.
        console.log(this.name + " " + this.year) // DOES NOT WORK (undefined) 
    }
}

Movie2.description();

const Movie3 = { // Using a nested non-arrow function to define object method
    name: "Terminator 2",
    year: 1991,
    delayedDescription: function () {
        setTimeout(function () {
            console.log(this) // this refers to the JS Window object.
            console.log(this.name + " " + this.year) // DOES NOT WORK (undefined)
        }, 5000)
    }
}

Movie3.delayedDescription();

const Movie4 = { // Using a nested arrow function to define object method
    name: "Terminator 2",
    year: 1991,
    delayedDescription: function () {
        setTimeout(() => {
            console.log(this) // this refers to this movie object
            console.log(this.name + " " + this.year) // Works fine
        }, 6000)
    }
}

Movie4.delayedDescription();