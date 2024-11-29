"use strict";

// Understand Problem
// What a forecasted maximum temperature
// What a  thermometer display string

// Sub-Problem
// how a forecasted temperature
// What a maximum temperature
// how a thermometer display string

function printForecast(arr) {
  let str = "";
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;

    if (arr[i] > max) max = arr[i];
  }
  console.log("...", str, max);
}

const t1 = [17, 21, 23];
const t2 = [12, 5, -5, 0, 4];
const t3 = t1.concat(t2);

printForecast([17, 21, 23]);
// printForecast(t3);
