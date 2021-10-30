// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Jeemee');
// console.log(23);

// let firstName = 'Jeemee';
// let first = 'Lee';
// console.log(firstName, first);

// // Variable name conventions
// let jonas_matilda = 'JM';
// let $function = 'test';
// console.log($function);

// let name = 'Yongjoo';

// let person = 'jeemee';
// let PI = 3.1415;

// let myFirstJob = 'Coder';
// let myCurrentJob = 'Teacher';

// console.log(myFirstJob);

// /* Assignment 1 */
// let country = 'Korea';
// let continent = 'Asia';
// let population = 50;

// console.log(country, continent, population);

// let isIsland = false;
// // let language = 'Korean';

// console.log(
//   typeof isIsland,
//   typeof population,
//   typeof country
//   //   typeof language
// );

// const language = 'Korean';
// // language = 'English';
// console.log(language);

/* let javacriptIsFun = true;
console.log(javacriptIsFun);

// console.log(typeof true);
console.log(typeof javacriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jeemee');

javacriptIsFun = 'YES!';
console.log(typeof javacriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); */

// let, const and var
/* let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

let lastName = 'Yongjoo';
console.log(lastName, typeof lastName); */

// Basic Operators
/* const now = 2021;
const ageJeemee = now - 1976;
const ageSarah = now - 2003;
console.log(ageJeemee, ageSarah);

console.log(ageJeemee * 2, ageJeemee / 10, 2 ** 3);

const firstName = 'Jeemee';
const birthYear = 1975;
const year = 2021;
const job = 'SW Engineer';

console.log(`I'm ${firstName}, a ${year - birthYear} year old ${job}`);
console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`); */

/* const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Sarah cna start driving lince 🚗`);
}
 */

function average(d1, d2, d3) {
  return (d1 + d2 + d3) / 3;
}

/* averageDophin = average(96, 108, 89);
averageKoalas = average(88, 91, 110);
console.log(`${averageDophin}, ${averageKoalas}`);

if (averageDophin > averageKoalas) {
  console.log(`Dolphin wins thropy 🎊`);
} else if (averageKoalas > averageDophin) {
  console.log(`Koalas win the trophy `);
} else {
  console.log(`Both win the trophy`);
} */

/* // BONUS 1
averageDophin = average(96, 80, 98);
averageKoalas = average(96, 90, 97);
console.log(`${averageDophin}, ${averageKoalas}`);

if (averageDophin > averageKoalas && averageDophin >= 100) {
  console.log(`Dolphin wins thropy 🏆`);
} else if (averageKoalas > averageDophin && averageKoalas >= 100) {
  console.log(`Koalas win the trophy 🏆`);
} else if (averageDophin === averageKoalas && averageDophin >= 100) {
  console.log(`Both teams win trophy 🏆`);
} else {
  console.log(`No team wins the trophy 😢`);
}
 */

// Switch statement
const day = 'saturday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory vides');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log(`Enjoy the weedkend 🙋`);
    break;
  default:
    console.log('Not a valid day!');
    break;
}
