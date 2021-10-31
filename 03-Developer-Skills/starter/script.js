// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;

// console.log();

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // C) FIX
//     value: Number(prompt('Degress celsius')),
//   };

//   // B) FIND
//   console.table(measurement);

//   //   console.log(measurement.value);
//   //   console.error(measurement.value);
//   //   console.warn(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // IDENTIFY
// console.log(measureKelvin());

// Using a debug
// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;

//     debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeNew([3, 5, 1], [9, 4, 5]);

// // A) IDENTIFY
// console.log(amplitudeBug);

// Codling Challenge #1
const printForecast = function (arr) {
  let strForecast = '';
  for (let i = 0; i < arr.length; i++) {
    // strForecast = strForecast.concat(`... ${arr[i]}°C in ${i + 1} days `);
    strForecast += `... ${arr[i]}°C in ${i + 1} days `;
  }
  // strForecast = strForecast.concat(' ...');
  strForecast += '...';
  console.log(strForecast);
  strForecast = '';
};

// debugger;
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);
