/*
const country = 'Azerbaijan';
const continent = 'Eurasia';
let population = 10.14;
/*
console.log(country);
console.log(continent);
console.log(population);
*/
/*
// Data Types
const isIsland = false;
let language;
/*
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/
/*
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
/*
console.log(
  `${country}'s population is ${
    population > averagePopulation ? 'above' : 'below'
  } average`
);
*/

// 02-Fundamentals
// Functions
'use strict';

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const russia = describeCountry('Russia', 144.2, 'Moscow');
const italy = describeCountry('Italy', 58.94, 'Rome');
const uk = describeCountry('United Kingdom', 66.97, 'London');

// console.log(russia);
// console.log(italy);
// console.log(uk);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const russiaPercentage = percentageOfWorld1(114.2);
const italyPercentage = percentageOfWorld1(58.94);
const chinaPercentage = percentageOfWorld1(1441);

// console.log(russiaPercentage);
// console.log(italyPercentage);
// console.log(chinaPercentage);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const indiaPopulation = percentageOfWorld2(1417);
const bangladeshPopulation = percentageOfWorld2(169);
const ukPopulation = percentageOfWorld2(66.97);

// console.log(indiaPopulation);
// console.log(bangladeshPopulation);
// console.log(ukPopulation);

const percentageOfWorld3 = population =>
  Math.round((population / 7900) * 1000) / 10;
const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);

// console.log(percPortugal3, percChina3, percUSA3);

const describePopulation = (country, population) =>
  `${country} has ${population} million people, which is about ${percentageOfWorld3(
    population
  )}% of the world`;

// console.log(describePopulation('China', 1441));
// console.log(describePopulation('USA', 332));
// console.log(describePopulation('Portugal', 10));

const populations = [10, 1441, 332, 169];
// console.log(populations.length === 4);
const percentages = [
  percentageOfWorld3(populations[0]),
  percentageOfWorld3(populations[1]),
  percentageOfWorld3(populations[2]),
  percentageOfWorld3(populations[populations.length - 1]),
];

// console.log(percentages);

const neighbours = ['Turkey', 'Georgia', 'Russia', 'Iran'];
neighbours.push('Utopia');
neighbours.pop();
// if (!neighbours.includes('Germany')) {
//   console.log('Probably not a central european country :D');
// }

// neighbours[neighbours.indexOf('Iran')] = 'Dreamland';
// console.log(neighbours);

const myCountry = {
  country: 'Azerbaijan',
  capital: 'Baku',
  language: 'azerbaijani',
  population: 10.14,
  neighbours: ['Turkey', 'Georgia', 'Russia', 'Iran'],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${
        this.language
      }-speaking people, ${
        this.neighbours.length ? this.neighbours.length : 'no'
      } neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  },
};

myCountry.population += 2;
myCountry['population'] -= 2;

// myCountry.describe();
myCountry.checkIsland();
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${
//     myCountry.language
//   }-speaking people, ${
//     myCountry.neighbours.length ? myCountry.neighbours.length : 'no'
//   } neighbouring countries and a capital called ${myCountry.capital}`
// );

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld3(populations[i]));
}

// console.log(percentages2);
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let o = 0; o < listOfNeighbours.length; o++) {
  for (let i = 0; i < listOfNeighbours[o].length; i++) {
    console.log(listOfNeighbours[o][i]);
  }
}
