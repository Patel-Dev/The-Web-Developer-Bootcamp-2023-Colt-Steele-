// Spread in Function Calls
const printThree = (one, two, three) => {
    console.log(one);
    console.log(two);
    console.log(three);
}

printThree(...[1, 2, 3])

console.log('string')
console.log(...'string') //breaks string chars up to emulate console.log('s', 't', ...)

// Spread with Array Literals
const nums = [1, 2, 3];
const letters = ['a', 'b', 'c'];

console.log(nums);
console.log(...nums);
console.log(letters);
console.log(...letters);

const numsAndLetters = [...nums, ...letters]
console.log(numsAndLetters)

// Spread With Objects
const cat = {
    legs: 4,
    lives: 9,
    species: 'catus'
};

const dog = {
    legs: 4,
    lives: 1,
    species: 'dogus',
    breed: 'husky'
};

const catDog = { ...cat, ...dog }
console.log(catDog);

const dogCat = { ...dog, ...cat }
console.log(dogCat);

// Rest Params
const medals = (first, second, ...everyoneElse) => {
    console.log(`First place: ${first}`);
    console.log(`Second place: ${second}`);
    console.log(`Participation: ${everyoneElse}`);
}

medals('henry', 'harry', 'rudolph', 'santa')

// Destructuring Arrays
const names = ['henry', 'harry', 'rudolph', 'santa']

const [first, second, ...rest] = names;
console.log(first);
console.log(second);
console.log(rest);

// Destructuring Objects
const human1 = {
    firstName: 'harvey',
    lastName: 'dent',
    birthYear: '1984',
    address: '123 Sesame Street'
}

const { firstName: nameFirst, lastName, deathYear = 'N/A', favColor } = human1;
console.log(nameFirst); // use different name than object property
console.log(lastName); // use object property name
console.log(deathYear) // default to value if property of object doesn't exist
console.log(favColor) // undefined if property does not exist and not assigned default value

// Destructuring Params
const printFirstLast = person => {
    console.log(`${person.firstName} ${person.lastName}`)
}

console.log('Worst:');
printFirstLast(human1);

const printFirstLastBetter = person => {
    const { firstName, lastName } = person; // using object deconstruction in function
    console.log(`${firstName} ${lastName}`)
}

console.log('Better:');
printFirstLastBetter(human1);

const printFirstLastBest = ({ firstName, lastName }) => { // using param deconstruction
    console.log(`${firstName} ${lastName}`)
}

console.log('Best:');
printFirstLastBest(human1);