/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/
/*
let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';

lastname = 'Schmedtmann';
console.log(lastname);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 means 2 to the power of 3

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
// console.log(x);
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const firstName = 'Gunel';
const job = 'developer';
const birthyear = 1999;
const year = 2024;

const gunel =
  "I'm " + firstName + ', a ' + (year - birthyear) + ' years old ' + job + '!';
console.log(gunel);

const gunelNew = `I'm ${firstName}, a ${year - birthyear} years old ${job}!`;
console.log(gunelNew);

console.log(`String
with multiple
lines`);
*/
/*
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1999;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/
/*
const inputYear = '1999';
console.log(Number(inputYear) + 18);
console.log(Boolean(0));
*/
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
*/
/*
const money = 100;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job');
}

let height = 0;
if (height) {
  console.log('height is defined');
} else {
  console.log('height is not defined');
}
*/
/*
const age = '18';
if (age === 18) console.log('You just became an adult (strict)');
if (age == 18) console.log('You just became an adult (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);

if (favorite === 23) {
  console.log('Cool! 23 is an amazing number');
} else if (favorite === 7) {
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
}

if (favorite !== 23) {
  console.log('Why not 23?');
}
*/
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false;
const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

if (shouldDrive) {
  console.log('Is able to drive');
} else {
  console.log('Someone else shoul drive');
}
*/

const day = 'thursday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Something');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Die');
    break;
  default:
    console.log('Not a valid day');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Something');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Die');
} else {
  console.log('Not a valid day');
}
