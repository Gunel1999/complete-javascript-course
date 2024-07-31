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
/*
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
*/
/*
const gunel = {
  firstName: 'Gunel',
  lastName: 'Isgandarova',
  age: 2024 - 1999,
  job: 'full-stack developer',
  friends: ['Dmitry', 'Zokhra', 'Nargiz'],
};

// console.log(gunel.lastName);
// console.log(gunel['lastName']);

const nameKey = 'Name';
// console.log(gunel['first' + nameKey]);
// console.log(gunel['last' + nameKey]);

const prompt1 = 'job';

// console.log(gunel[prompt1]);

if (gunel[prompt1]) {
  console.log(gunel[prompt1]);
} else {
  console.log('Wrong request');
}

gunel.location = 'Los Angeles';
gunel.gender = 'female';

//Challenge
console.log(
  `${gunel.firstName} has ${gunel.friends.length} friends, and ${
    gunel.gender === 'female' ? 'her' : 'his'
  } best friend is called ${gunel.friends[0]}`
);
*/
/*
const gunel = {
  firstName: 'Gunel',
  lastName: 'Isgandarova',
  birthYear: 1999,
  job: 'full-stack developer',
  friends: ['Dmitry', 'Zohra', 'Nargiz'],
  hasDriversLicense: false,
  gender: 'female',
  //   calcAge: function (birthYear) {
  //     return 2024 - birthYear;
  //   },
  //   calcAge: function () {
  //     // console.log(this);
  //     return 2024 - this.birthYear;
  //   },
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    this.summary = `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and ${this.gender === 'female' ? 'she' : 'he'} has ${
      this.hasDriversLicense ? 'a' : 'no'
    } driver's license`;
    return this.summary;
  },
};

gunel.getSummary();
console.log(gunel.summary);

// console.log(gunel.calcAge(1999));
// console.log(gunel['calcAge'](1999));
*/
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
}*/
/*
const gunelArray = [
  'Gunel',
  'Isgandarova',
  2024 - 1999,
  'full-stack developer',
  ['Dmitry', 'Zohra', 'Nargiz'],
];

const types = [];

for (let i = 0; i < gunelArray.length; i++) {
  // console.log(gunelArray[i], typeof gunelArray[i]);
  // types[i] = typeof gunelArray[i];
  types.push(typeof gunelArray[i]);
}

// console.log(types);

const years = [1991, 1999, 2002, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}

// console.log(ages);
// for (let i = 0; i < gunelArray.length; i++) {
//   if (typeof gunelArray[i] !== 'string') continue;
//   console.log(gunelArray[i], typeof gunelArray[i]);
// }

for (let i = 0; i < gunelArray.length; i++) {
  if (typeof gunelArray[i] === 'number') break;
  console.log(gunelArray[i], typeof gunelArray[i]);
} */
/*
const gunelArray = [
  'Gunel',
  'Isgandarova',
  2024 - 1999,
  'full-stack developer',
  ['Dmitry', 'Zohra', 'Nargiz'],
];

// for (let i = gunelArray.length - 1; i >= 0; i--) {
//   console.log(gunelArray[i]);
// }

for (let ex = 1; ex <= 3; ex++) {
  console.log(`Starting exercise ${ex}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${ex}.Lifting weight repetition ${rep}`);
  }
}
*/

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
