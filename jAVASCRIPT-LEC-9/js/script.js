"use strict";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const openingHours = {
  [weekdays[4]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [[weekdays[6]]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(openingHours);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  oderDelivery({time = "11:00", address, mainIndex = 0, starterIndex = 1}) {
    console.log(
      `Order delivery ${address} and  time ${time} and ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}`
    );
  },

  oderPasta(ing1, ing2, ing3) {
    console.log(`Order Pasts ${ing1}  ${ing2} and ${ing3}`);
  },
};

console.log(openingHours);

// restaurant.oderDelivery({
//   time: "23:00",
//   address: "Mirzapur Bazar",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.oderDelivery({
//   address: "Mirzapur Bazar",
//   starterIndex: 1,
// });

// Destructuring Array

// const arr = [2, 4, 6];
// console.log(arr);

// const [a, b, c] = arr;
// console.log(a, b, c);

// const [first, second] = restaurant.starterMenu;

// console.log(first, second);

// let [main, starterMenu] = restaurant.mainMenu;

// console.log(main, starterMenu);
// // switching variables
// [main, starterMenu] = [starterMenu, main];
// console.log(main, starterMenu);

// // function call
// console.log(restaurant.order(2, 0));

// // Nested array

// const array = [2, 3, [5, 6]];
// console.log(array);
// const [i, , j] = array;
// console.log(i, j);
// const [x, y, z] = array;
// console.log(x, y, z);

// Destructuring Object

// const {name, mainMenu, categories} = restaurant;
// console.log(name, mainMenu, categories);

// const {name: tags, mainMenu: hours, categories: cat} = restaurant;

// console.log(name, mainMenu, categories);

// // default value
// const {temp = [], location: lac = []} = restaurant;
// console.log(temp, lac);

// // Mutating variables

// let w = 111;
// let h = 999;
// console.log(w, h);

// const obj = {w: 22, h: 23, o: 55};

// ({w, h} = obj);
// console.log(w, h);

// // Nested Object

// const {
//   fri: {open, close},
// } = restaurant.openingHours;

// console.log(open, close);

// const {
//   fri: {open: o, close: c},
// } = restaurant.openingHours;

// console.log(o, c);

// // Spread Operations

// const arr = [3, 5, 10];
// const badArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArray);

// const goodArray = [1, 2, ...arr];
// console.log(goodArray);

// const menu = [...restaurant.mainMenu, "apple"];
// console.log(menu);

// // copy
// const copy = [...restaurant.starterMenu];
// console.log(copy);
// // Join 2 Array
// const join = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(join);

// const Ingredients = [
//   prompt("order pasta ing1, ing2, ing3"),
//   prompt("order pasta ing2"),
//   prompt("order pasta ing3"),
// ];
// console.log(Ingredients);

// restaurant.oderPasta(...Ingredients);

// // Object es6 2018

// const newResturent = {foundedIn: 1997, ...restaurant, founder: "sajan"};
// console.log(newResturent);

// const restaurantCopy = {...restaurant};
// // console.log(restaurantCopy);

// restaurantCopy.name = "rest";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//  SPREAD , because on RIGHT side of
// Destructuring
// const arr = [1, 3, ...[5, 7]];
// console.log(arr);

// // REST, because on LEFT side of
// const [a, b, ...other] = [1, 2, 3, 4];
// console.log(a, b, other);

// const [Pizza, , Risotto, ...others] = [
//  ... restaurant.mainMenu,
//   restaurant.starterMenu,
// ];
// // console.log(numbers);
// console.log(Pizza, Risotto, others);

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// // Function

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(3, 6);
// add(9, 7, 8, 4);
// add(10, 11, 12, 4);

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// console.log(players1Final);

// const {
//   odds: {team1, x: draw, team2},
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...player) {
//   console.log(player);
//   console.log(`${player.length} goals were scorer`);
// };

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

// team1 < team2 && console.log(" team1 is more likely to win");
// team1 > team2 && console.log(" team2 is more likely to lose");

// Looping Over the Array

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}  ${el}`);
// }

// // Optional chaining

// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// // console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon?.open);

// for (const day of days) {
//   console.log(day);

//   const open = restaurant.openingHours[day]?.open ?? "Close";
//   console.log(`On ${day} we are  ${open}`);
// }

// // Method

// console.log(restaurant.order?.(0, 1)) ?? "Method dose not exist";
// // console.log(restaurant.oderDelivery?.(0, 1)) ?? "Method dose not exist";

// // Property Name

// const property = Object.keys(openingHours);

// let openStr = `We are open ${property.length} days`;

// for (const day of property) {
//   openStr += ` ${day}`;
// }
// console.log(openStr);

// // property values

// for (const values of Object.values(openingHours)) {
//   console.log(values);
// }

// // Object entries

// const entries = Object.entries(openingHours);

// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we are opening ${open} and close ${close}`);
// }

// // Coding Challenge #2

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// // const players = Object.entries(game.scored);
// // console.log(players);

// for (const [i, el] of game.scored.entries())
//   console.log(`Goal ${i + 1} : ${el}`);

// // console.log(game.odds?team)
// // console.log(game.odds?.team1);

// const value = Object.values(game.odds);
// console.log(value);

// let gameValue = 0;

// for (const val of value) gameValue += val;
// console.log(gameValue);
// const count = gameValue / value.length;
// console.log(count);

// // const team1 = game.odds?.team1;
// // console.log(`Odd of victory Bayern Munich: ${team1}`);
// // const team2 = game.odds?.x;
// // // console.log(`Odd of draw: ${x}`);
// // const team3 = game.odds?.team2;
// // console.log(`Odd of victory Borrussia Dortmund: ${team2}`);

// const key = Object.values(game.odds);
// console.log(`Odd of victory Bayern Munich: ${key[0]}`);
// console.log(`Odd of draw: ${key[1]}`);
// console.log(`Odd of victory Borrussia Dortmund: ${key[2]}`);

// // Sets

// const oderSet = new Set([
//   "pasta",
//   "pizza",
//   "pizza",
//   "Risotto",
//   "pasta",
//   "pizza",
// ]);

// console.log(oderSet);

// oderSet.add("orange");
// console.log(oderSet.has("pasta"));
// oderSet.delete("pasta");
// // oderSet.clear();
// console.log(oderSet);

// // resturent oder foods

// const foodOders = ["Waiter", "Chip", "Manager", "Waiter", "Chip", "Manager"];

// const staffUnique = [...new Set(foodOders)];

// console.log(staffUnique);

// console.log(
//   new Set(["Waiter", "Chip", "Manager", "Waiter", "Chip", "Manager"]).size
// );

// // new Map()

// const question = new Map([
//   ["question", "What is the best programming language in the world"],
//   [1, "c"],
//   [2, "java"],
//   [3, "javaScript"],
//   ["correct", 3],
//   [true, "Correct"],
//   [false, "Try again"],
// ]);

// console.log(question);

// console.log(question.get("question"));

// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }

// const answer = Number(prompt("Your answer"));
// console.log(answer);
// const answer = 3;
// console.log(question.get(question.get("correct") === answer));

// Convert Map to Array

// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Coding Challenge #3

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// const events = [];
console.log(gameEvents);
let events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);
console.log(gameEvents.size);

console.log(
  `An event happened, on  average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
console.log(time);

for (const [i, val] of gameEvents.entries()) {
  const half = i <= 45 ? "First" : "Second";

  console.log(`[${half} FIRST] ${i} : ${val}`);
}

// Working with String 1

const airline = "Tar Air Portugal";
// const plane = "A320";

console.log(airline);
console.log(airline.length);
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.includes("r"));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(3, 7));
console.log(airline.slice(8, 16));
console.log(airline.slice(1, airline.indexOf(" ")));
console.log(airline.slice(0, airline.lastIndexOf(" ")));

// airline middle seat

const airlines = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You must welcome middle seat");
  else console.log("You must be not middle seat available");
};

airlines("11B");
airlines("11C");
airlines("11D");
airlines("11E");

// // Working with String 2

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const lines = "sAjAN";
const lineLower = lines.toLowerCase();
const firstUpper = lineLower[0].toUpperCase() + lineLower.slice(1);
console.log(firstUpper);

const Email = "sajandas@gmail.com";
const emailFrom = "  Sajandas@gMail.com \n";
console.log(emailFrom);
const newEmail = emailFrom.toLowerCase().trim();
console.log(newEmail);

const incomes = "3457,8468#";
console.log(incomes);
const newIncomes = incomes.replace("#", "$");
console.log(newIncomes);
const newIncomess = newIncomes.replace(",", ".");
console.log(newIncomess);

const plane = "Airbus A320neo";

console.log(plane.includes("Air"));
console.log(plane.startsWith("Air"));
console.log(plane.endsWith("neo"));

if (plane.startsWith("Air") && plane.endsWith("neo")) {
  console.log("this is a starting plane");
}

// Working with String 3

console.log("Sajan Robidas".split(" "));

const [firstName, lastName] = "Sajan Robidas".split(" ");
console.log(firstName, lastName);
const newName = ["Md .", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const person = function (name) {
  const newPerson = name.split(" ");
  const nameUpper = [];
  for (const n of newPerson) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(" "));
};

person("my name is sajan from mirzapur");
person("i am study right now");

// const message = "my name is sajan  ";

// console.log(message.padStart(30, "+").padEnd(50, " +"));
// console.log(message.padStart(30, "*").padEnd(50, "*"));

const padMan = function (number) {
  const str = number + " ";
  const last = str.slice(-4);
  return last.padStart(str.length, " * ");
};

padMan(23456789);
padMan(56789034567809);
padMan(12345677890987652);

const message = "my name is sajan  ";

console.log(message.repeat(5));
console.log(message.repeat(10));

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  console.log(rows);

  for (const row of rows) {
    const [first, second] = row.trim().split("_");
    // console.log(first, second);

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(output.padEnd(20, "*"));
  }
});
