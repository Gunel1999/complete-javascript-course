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
