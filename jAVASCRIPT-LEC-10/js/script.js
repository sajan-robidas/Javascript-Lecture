"use strict";

// Default Parameters

// const bookings = [];

// function createDefault(fliteName, numPasenger = 1, price = 199 * numPasenger) {
//   const booking = {
//     fliteName,
//     numPasenger,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// }
// createDefault("HL343");
// createDefault("HL349", 2);

// Function passing and reference
// const flite = "GH89";

// const createObj = {
//   name: "Sajan Robidas",
//   passport: 3578923,
// };

// function fliteBooking(fliteName, passenger) {
//   fliteName = "Hl999";

//   passenger.name = " Md." + passenger.name;

//   if (passenger.passport === 3578923) {
//     alert("checkIn");
//   } else {
//     alert("checkOut");
//   }
// }

// fliteBooking(flite, createObj);
// console.log(flite);
// console.log(createObj);

// Function accepting callback function

// const oneWord = function (str) {
//   return str.replace(/ /g, " ").toLowerCase();
// };

// const upperWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// const transformed = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String:${fn(str)}`);
//   console.log(`Transformed by : ${fn.name}`);
// };

// transformed("JavaScript is a best language", upperWord);

// const raj = function () {
//   console.log("Clicking");
// };

// document.body.addEventListener("click", raj);

// Function Return function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeter = greet("Hello");
// greeter("sajan");

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greet("Hey")("Raj");

// A Closer Look at Functions
// Coding Challenge #1

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: c++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n ${this.options.join("\n")}\n (Write option number)`
//       )
//     );
//     console.log(answer);
//     // Register Answers

//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults("string");
//   },

//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };

// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));
// //  document.querySelector(".buy");

// // poll.registerNewAnswer();
// // poll.displayResults();

// const x = function () {
//   console.log("My name is sajan ");
// };
// x();

// // IIFE

// (function () {
//   console.log("My name is sajan");
// })();

// (() => console.log("My name is sajan"))();

// // Closures
// const secureCreate = function () {
//   let countNumber = 0;

//   return function () {
//     countNumber++;
//     console.log(`${countNumber} : Increment`);
//   };
// };

// const increment = secureCreate();
// increment();
// increment();
// increment();

// console.dir(increment);

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Coding Challenge #2
// // IIFE
// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";
//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();

const sajan = function () {
  console.log(this.name);
  console.log(this.age);
};

const raj = {
  name: "Raj Robidas",
  age: 22,
};
// console.log(raj.name);
sajan.call(raj);
