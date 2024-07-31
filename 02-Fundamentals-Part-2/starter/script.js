'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'lorem';
*/
/*
function logger() {
  console.log('My name is Jonas');
}
//calling / running/ invoking function
// logger();
// logger();
// logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples ? apples : 'no'} apples and ${
    oranges ? oranges : 'no'
  } oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
/*
const age1 = calcAge1(1991);
console.log(age1);

//function declaration
function calcAge1(birthYear) {
  //   const age = 2024 - birthYear;
  //   return age;
  return 2024 - birthYear;
}

//anonymus function / expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(1999);
console.log(age2);
*/

/*
//arrow function

const calcAge = birthYear => 2024 - birthYear;
const age = calcAge(1999);
// console.log(age);

const yearsUntillRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return retirement > 0
    ? `${firstName} retires in ${retirement} years`
    : `${firstName} already retired`;
};

const gunelRetire = yearsUntillRetirement(1999, 'Gunel');
console.log(gunelRetire);
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${
    applePieces ? applePieces : 'no'
  } pieces of apple and ${
    orangePieces ? orangePieces : 'no'
  } pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
/*
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const calcRetire = function (age) {
  return 65 - age;
};

const yearsUntillRetirement = function (birthYear, firstName) {
  return calcRetire(calcAge(birthYear)) > 0
    ? `${firstName} retires in ${calcRetire(calcAge(birthYear))} years`
    : `${firstName} has already retired`;
};

console.log(yearsUntillRetirement(1988, 'Dmitry'));
*/

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';
/*
const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
// console.log(friends);

const gunel = [
  'Gunel',
  'Isgandarova',
  2024 - 1999,
  'full-stack delevoper',
  friends,
];

// console.log(gunel);

//Exercise
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

const friends = ['Michael', 'Steven', 'Peter'];
//add elements
const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

friends.unshift('John');
// console.log(friends);

// remove elements
const popped = friends.pop();
// console.log(friends, popped);
friends.shift();
// console.log(friends);

//position of element
// console.log(friends.indexOf('Steven'));
friends.push(23);
console.log(friends.includes(23));

if (friends.includes('Peter')) {
  console.log('You have a Peter');
}
