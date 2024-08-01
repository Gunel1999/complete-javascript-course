// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = function (arr) {
  let text = '';
  for (let i = 0; i < arr.length; i++) {
    text += `... ${arr[i]}°C in ${i + 1} ${i + 1 === 1 ? 'day' : 'days'} `;
    if (i === arr.length - 1) text += '...';
  }
  return text;
};

const testA = printForecast([17, 21, 23]);
const testB = printForecast([12, 5, -5, 0, 4]);

console.log(testA);
console.log(testB);
