"use strict";

// Math Operators

// let ass = 22;
// ass = 44;
// console.log(ass);

// const num = 2024;
// const x = 1997 - num;
// console.log(x);

// const age1 = 2024;
// const age2 = 1997;
// console.log((age1 - age2) * 2);

// Assignments Operators
console.log("=======Asignment =======");

// let s = 55;
// s = 77;
// console.log(s);

// let as = 22;
// const bb = 55;
// console.log(as);
// console.log((as = as + 3));
// console.log((as = as * 3));

// let a = 3;
// let b = "Hello world";
// console.log(a, b);
// console.log(a + " " + b);

// let money = 144;
// console.log((money += 344));

// let result = 89;
// console.log((result -= 100));

// Comparison  between Operator
console.log("========Comparison=========");

// const c1 = 33;
// const c2 = 88;

// console.log(c1 >= c2);
// console.log(c1 <= c2);
// console.log(c1 === c2);
// console.log(c1 == c2);
// console.log(c1 != c2);
///////////////////////////////////////
// JavaScript Fundamentals – Part 1
///////////////////////////////////////

// Coding Challenge #1

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark >= BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

// console.log(` Mark has a higher ${BMIMark} BMI than John ${BMIJohn}.`);

if (markHigherBMI) {
  console.log(
    `Mark's BMI ${Math.trunc(BMIMark)} is higher than John's ${Math.trunc(
      BMIJohn
    )}!`
  );
} else {
  console.log(
    `John's BMI ${Math.trunc(BMIJohn)} is higher than Mark's ${Math.trunc(
      BMIMark
    )})!`
  );
}

// if else statement

const age = 18;
const birthday = 2024 - 1997;
console.log(birthday);

if (birthday >= age) {
  console.log("Raj con start driving license ");
} else {
  //   const license = birthday - age;
  console.log(`Raj con not driving license `);
}

// truthy and falsy values
// Falsy values 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean());
console.log(Boolean("sajan"));
console.log(Boolean({}));
console.log(Boolean(null));
console.log(Boolean(NaN));

// Equality Operators

// if (a === 0) {
// } else {
// }

// Boolean Logic Operator = AND , OR , NOT

// Coding Challenge #3

const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 106) / 3;
console.log(averageDolphins, averageKoalas);

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log(`Dolphins Winner the Trophy (${averageDolphins})`);
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
  console.log(`Koalas winner the Trophy ${averageKoalas}`);
} else if (averageDolphins === averageKoalas) {
  console.log("Both Win the Trophy");
}

// The switching Statement

// Conditional Ternary Operator

const bill = 430;
console.log(bill);
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(tip);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip} `);
