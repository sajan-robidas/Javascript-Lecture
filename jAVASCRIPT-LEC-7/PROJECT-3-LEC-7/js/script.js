"use strict";

// player 1
const player1 = document.querySelector(".player--0");
console.log(player1);
const playerScore1 = document.querySelector(".score--0");
console.log(playerScore1);
// player 2
const player2 = document.querySelector(".player--1 ");
const playerScore2 = document.querySelector(".score--1");
// current 1
const currentName1 = document.querySelector(".current-name-0");
const currentScore1 = document.querySelector(".current-score-0");
// // current 2
const currentName2 = document.querySelector(".current-name-1");
const currentScore2 = document.querySelector(".current-score-1");

// image
const images = document.querySelector(".images");

// button
const btnNewGame = document.querySelector(".btn-restart");
const diceRoll = document.querySelector(".dice");
console.log(diceRoll);
const holdScore = document.querySelector(".hold");

// start condition

playerScore1.textContent = 0;
playerScore2.textContent = 0;
images.classList.add("hidden");

let currentScore = 0;

diceRoll.addEventListener("click", function () {
  // Generating a dice roll
  const dice = Number(Math.trunc(Math.random() * 6) + 1);
  // console.log(dice);
  // Display dice roll
  images.classList.remove("hidden");
  images.src = `img/dice-${dice}.png`;
  // Check
  if (dice !== 1) {
    currentScore += dice;
    currentScore1.textContent = currentScore;
  } else {
    // Switch the next player
  }
});
