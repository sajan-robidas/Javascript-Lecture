"use strict";

// Function

// function market(pro1, pro2, money) {
//   const pa = pro1;
//   const pb = pro2;
//   const sum = pa + pb;
//   console.log(
//     ` one class cha ${pa} and one sola sigarat ${pb} and total ${sum} and given money ${money} and money back shop owner ${
//       money - sum
//     } `
//   );
// }

// market(5, 10, 50);

// // function declaration

// function humanAge(birthYear) {
//   let age = 2024 - birthYear;
//   let marrid = age >= 18 ? "Married" : "Not Married";
//   return marrid;
// }

// const age = humanAge(2010);
// console.log(age);

// // Function expression

// const humanAges = function (birthYear) {
//   let age = 2024 - birthYear;
//   let marrid = age >= 18 ? "Married" : "Not Married";
//   return marrid;
// };

// const age2 = humanAges(1997);
// console.log(age2);

// // Arrow function

// const humanAges3 = (birthYear) => 2024 - birthYear;
// console.log(humanAges3(1997));

// // Goverment job age reteirment age

// function governmentJob(birthYear, reteirmentAge) {
//   const currentAge = 2024 - birthYear;
//   const reteirmentAgeCheck = reteirmentAge - currentAge;

//   const reteirment =
//     reteirmentAgeCheck >= currentAge
//       ? `After Retirement in ${reteirmentAgeCheck} years`
//       : `Not eligible for retirement yet. Current age is ${currentAge} and reteirment age is ${reteirmentAge}`;
//   return reteirment;
// }

// const age4 = governmentJob(1997, 25);
// console.log(age4);

// // Function calling other function
// function juice(fruit1) {
//   return fruit1 * 10;
// }

// const func = function (apple, orange) {
//   const appleJuice = juice(apple);
//   const orangeJuice = juice(orange);
//   console.log(appleJuice, orangeJuice);
// };

// func(3, 5);

// JavaScript Fundamentals – Part 2

// Coding Challenge #1
// console.log("====== Coding Challenge #1 =======");

const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner(avgDolhins, avgKoalas) {
  const team1 = calcAverage(...avgDolhins);
  const team2 = calcAverage(...avgKoalas);
  console.log(team1, team2);

  if (team1 >= 2 * team2) {
    console.log(`Team Dolhins (${team1} Vs. ${team2} ) is the winner!`);
  } else if (team2 >= 2 * team1) {
    console.log(`Team Koalas (${team2} Vs. ${team1})  is the winner!`);
  } else {
    console.log("No team win");
  }
}

checkWinner([85, 54, 41], [23, 34, 27]);

// Array

const humanAges = function (...birthYear) {
  let age = 2024 - birthYear;
  //   const marrid = age >= 18 ? "Married" : "Not Married";
  return age;
};

const ages = [1997, 1999, 2001, 2003, 2005];
console.log(humanAges(ages));

// To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// Coding Challenge #2

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);

// Object Dot Notation and Bracket Notation

const jonas = {
  firstName: "sajan",

  friends: ["Michael", "Steven", "Jayden"],
};

console.log(
  ` Jonas has ${jonas.friends.length} friends, and best friend is called ${jonas.friends[0]}`
);

// Coding Challenge #3

const raj = {
  fullName1: "Mark Miller",
  massMark: 78,
  heightMark: 1.69,

  fullName2: "John Smith",
  massJohn: 92,
  heightJohn: 1.95,

  calcBMI() {
    console.log(this);
    const markBMI = this.massMark / this.heightMark ** 2;
    const johnBMI = this.massJohn / (this.heightJohn * this.heightJohn);
    console.log(
      `${this.fullName1} (${markBMI}) is higher than ${this.fullName2} BMI (${johnBMI}) `
    );
  },
};
console.log(raj.fullName1);
console.log(raj.fullName2);
raj.calcBMI();

// Iteration the for Loop

for (let i = 1; i <= 10; i++) {
  console.log(`loop is running ${i}`);
}

const Mukta = [
  "Mark",
  "Miller",
  2024 - 1997,
  "Male",
  ["Michael", "Steven", "Jayden"],
];

console.log(Mukta);

for (let i = Mukta.length - 1; i >= 0; i--) {
  console.log(i, Mukta[i]);
}

// Coding Challenge #4

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// console.log(bills);
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(tips, bills, totals);

function calcAverages(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // console.log(sum);
  }

  return sum / arr.length;
}

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

console.log(calcAverages([2, 3, 7]));
console.log(calcAverages(totals));
