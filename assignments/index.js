const country = 'Azerbaijan';
const continent = 'Eurasia';
let population = 10.14;
/*
console.log(country);
console.log(continent);
console.log(population);
*/

// Data Types
const isIsland = false;
let language;
/*
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

//let, const and var
language = 'Azerbaijani';
// isIsland = true;

// Basic Operators
let half = population / 2;
population++;
let finlandPopulation = 6;
let averagePopulation = 33;
const description =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people speak ' +
  language;
// console.log(half);
// console.log(population);
// console.log(population > finlandPopulation);
// console.log(population < averagePopulation);
// console.log(description);

//Strings and Template Literals

const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description1);

// Taking Decisions: if / else Statements
/*
if (population < averagePopulation) {
  console.log(
    `${country}'s population is ${
      averagePopulation - population
    } million below average`
  );
} else {
  console.log(
    `${country}'s population is ${
      population - averagePopulation
    } million above average`
  );
}
*/

//Type Conversion and Coercion
/*
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
*/

//Equality Operators: == vs. ===
/*
const numNeighbours = Number(
  prompt('How many neighbour countries does your contry have?')
);

if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}
  */

//Logical Operators
/*
if (language === 'English' && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}
*/

// The switch Statement
/*
switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}
*/

console.log(
  `${country}'s population is ${
    population > averagePopulation ? 'above' : 'below'
  } average`
);
