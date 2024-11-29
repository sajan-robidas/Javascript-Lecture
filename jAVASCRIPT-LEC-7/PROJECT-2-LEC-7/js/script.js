"use strict";

const model = document.querySelector(".model");
const btnShowModel = document.querySelectorAll(".show-model");
// console.log(btnShowModel);
const btnCloseModel = document.querySelector(".close-model");

for (let i = 0; i < btnShowModel.length; i++)
  btnShowModel[i].addEventListener("click", function () {
    model.classList.remove("hidden");
  });

btnCloseModel.addEventListener("click", function () {
  model.classList.add("hidden");
});
