"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess === number) {
    document.querySelector(".number").textContent = number;

    document.querySelector(".message").textContent = "Correct number";
    document.querySelector("body").style.backgroundColor = "#60b437";
    document.querySelector(".guess").style.backgroundColor = "#60b437";
    document.querySelector(".number").style.padding = "30px";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highScore").textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Hello");

  let score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guess....";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".guess").style.backgroundColor = "black";
  document.querySelector(".number").style.padding = "";
});
