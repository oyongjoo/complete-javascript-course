'use strict';

// Arrays
/* const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1);
console.log(age2);
console.log(age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
 */

// Array methods
/* const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('jeemee');
console.log(friends);
console.log(newLength);

const nl = friends.unshift('John');
console.log(friends, nl);

// Remove elements
const poped = friends.pop(); // remove last element
console.log(friends, poped);

friends.shift(); // remove first element
console.log(friends);

// get element index
console.log(friends.indexOf('Steven')); // return element index
console.log(friends.indexOf('Bob')); // when element not existed

// element exists in array or not
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Michael')) {
  console.log(`You have a friend called Michael`);
}
 */

// const bills = new Array(125, 555, 44);
// const tips = new Array();
// const total = [];
// console.log(tips);

// const calcTip = bill => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   tips[i] = calcTip(bills[i]);
//   total[i] = bills[i] - tips[i];
// }
// console.log(tips, total);

// Objects
// const jeemeeArray = [
//   'Jeemee',
//   'Lee',
//   2021 - 1975,
//   'teacher',
//   ['Michael', 'Peter', 'Paul'],
// ];

// // make object
// const jeemee = {
//   firstName: 'jeemee',
//   lastName: 'Lee',
//   age: 2021 - 1975,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Paul'],
// };

// //difference between two,
// console.log(jeemee.firstName);
// console.log(jeemee['firstName']);

// console.log(`${jeemee.age}, ${jeemee['age']}`);

// // can be possible only in brackets notation
// const nameKey = 'Name';
// console.log(jeemee['first' + nameKey]);
// console.log(jeemee['last' + nameKey]);

// // console.log(jeemee.'last' + nameKey);

// // const interestedIn = prompt(
// //   'What do you want to know about Jeemee? Choose between firstName, lastName, age, job, and friends'
// // );
// // console.log(jeemee[interestedIn]);

// // if (jeemee[interestedIn]) {
// //   console.log(jeemee[interestedIn]);
// // } else {
// //   console.log(
// //     'Wrong request! Choose between firstName, lastName, age, job, and friends'
// //   );
// // }

// // add object
// jeemee.location = 'Korea';
// jeemee['twitter'] = '@oyongjoo';
// console.log(jeemee);

// // Challenger
// // "jeemee has 3 friends and his best friend is called Michael"

// console.log(
//   `${jeemee.firstName} has ${jeemee['friends'].length} friends, and his best friend is called ${jeemee.friends[0]}.`
// );

// const jeemee = {
//   firstName: 'Jeemee',
//   lastName: 'Lee',
//   birthYear: 1975,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Paul'],
//   hasDriversLicense: true,

//   //   calcAge: function (birthYear) {
//   //     return 2021 - birthYear;
//   //   },
//   //   calcAge: function () {
//   //     // console.log(this);
//   //     return 2021 - this.birthYear;
//   //   },

//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-years old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//   },
// };

// // how to call object function
// console.log(jeemee.calcAge());

// console.log(jeemee.age);
// console.log(jeemee.age);
// console.log(jeemee.age);
// // console.log(jeemee['calcAge'](1975));

// // Challenge
// // make getSummary method in jeemee object
// // "Jeemee is a 46-year old teacher, and he has a driver's license"
// console.log(jeemee.getSummary());

// Coding Challenge #3
// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//       john.fullName
//     }'s (${john.calcBMI()})`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//       mark.fullName
//     }'s (${mark.calcBMI()})`
//   );
// }

// for loop
// console.log('Lifting weights repetition 1 🏋️‍♂️');
// console.log('Lifting weights repetition 2 🏋️‍♂️');
// console.log('Lifting weights repetition 3 🏋️‍♂️');
// console.log('Lifting weights repetition 4 🏋️‍♂️');
// console.log('Lifting weights repetition 5 🏋️‍♂️');
// console.log('Lifting weights repetition 6 🏋️‍♂️');
// console.log('Lifting weights repetition 7 🏋️‍♂️');
// console.log('Lifting weights repetition 8 🏋️‍♂️');
// console.log('Lifting weights repetition 9 🏋️‍♂️');
// console.log('Lifting weights repetition 10 🏋️‍♂️');

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

// arrray in for loop
// const jeemee = [
//   'Jeemee',
//   'Lee',
//   2021 - 1975,
//   'teacher',
//   ['Michael', 'Paul', 'Peter'],
// ];

// const types = new Array();

// jeemee.push(true);
// // jeemee.pop();

// console.log('------ ONLY STRINGS ------');
// for (let i = 0; i < jeemee.length; i++) {
//   if (typeof jeemee[i] !== 'string') {
//     continue;
//   }
//   console.log(jeemee[i], typeof jeemee[i]);

//   //   types[i] = typeof jeemee[i];
//   //   types.push(typeof jeemee[i]);
// }

// console.log('--- BREAK WITH NUMBER ---');
// for (let i = 0; i < jeemee.length; i++) {
//   if (typeof jeemee[i] === 'number') break;

//   console.log(jeemee[i], typeof jeemee[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1975, 2015];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2021 - years[i]);
// }
// console.log(ages);

// Looping Backwards and Loops in Loops
// const jeemee = [
//   'Jeemee',
//   'Lee',
//   2021 - 1975,
//   'teacher',
//   ['Michael', 'Paul', 'Peter'],
// ];

// jeemee.push(true);

// for (let i = jeemee.length - 1; i >= 0; i--) {
//   console.log(jeemee[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------ Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
//   }
// }

// while loop
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifiting weight repetition ${rep} 🏋️‍♂️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6 + 1);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6 + 1);
//   if (dice === 6) console.log('Loop is about to end...');
// }

// for (;;) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6 + 1);
//   if (dice === 6) {
//     console.log('Loop is about to end...');
//     break;
//   }
// }

// Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < 10; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(`Bills:\t${bills},
Tips:\t${tips},
Totals:\t${totals}`);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

// console.log(calcAverage(bills));
// console.log(calcAverage(tips));
console.log(`Average of totals is ${calcAverage(totals)}`);
