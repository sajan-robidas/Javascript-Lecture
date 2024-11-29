"use strict";

// AJAX Call XMLHttpRequest

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();

//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//    <article class="country">
//           <img class="country__img" src="${data.flags["svg"]}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name["common"]}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages["ben"]}</p>
//             <p class="country__row"><span>💰</span>${data.currencies}</p>
//           </div>
//         </article>

//   `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("india");
// getCountryData("bangladesh");

// AJAX callback Hell

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
   <article class="country ${className}">
          <img class="country__img" src="${data.flags["svg"]}" />
          <div class="country__data">
            <h3 class="country__name">${data.name["common"]}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages["ben"]}</p>
            <p class="country__row"><span>💰</span>${data.currencies}</p>
          </div>
        </article>
  
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbor = function (country) {
//   // AJAX Country 1
//   const request = new XMLHttpRequest();

//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // render country 1
//     renderCountry(data);

//     // neighbour country 2
//     const [neighbour] = data.borders;
//     // if (!neighbour) return;
//     // https://restcountries.com/v3.1/alpha/{code}
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryAndNeighbor("bangladesh");

// Fetch and consume promises

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// Arrow function Fetch

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentHTML("beforeend", msg);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0]);
//       console.log(data);

//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       // country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0], "neighbour");
//     })
//     // Handling Reject Promise
//     .catch((err) => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message} Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("portugal");
// });

// getCountryData("qwertyui");

// Throwing Error Manually

const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

// const getJSON = function (url, errorMsg = "Something went wrong") {
//   return fetch(url).then((response) => {
//     console.log(response);
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };
// const getCountryData = function (country) {
//   // country 1
//   getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     "Country not found "
//   )
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       console.log(neighbour);
//       // const neighbour = "ertyuio";
//       if (!neighbour) throw new Error("neighbour not found!");
//       // country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         "Country not found "
//       );
//     })
//     .then((data) => {
//       renderCountry(data[0], "neighbour");
//     })
//     // Handling Reject Promise
//     .catch((err) => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message} Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("bangladesh");
// });

// getCountryData("australia");

// Coding Challenge #1

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       console.log(res);
//       if (!res.ok) throw new Error(`Country Not Found (${res.status})`);

//       return res.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//     })
//     .catch((err) => {
//       console.error(err.message);
//     });
// };

// btn.addEventListener("click", function () {
//   whereAmI("52.508, 13.381");
// });

// build the simple promise

// const lottaryTicket = new Promise((resolve, reject) => {
//   console.log("Lotter draw is happening");
//   setTimeout(function () {
//     if (Math.random() > 0.5) {
//       resolve("You Win");
//     } else {
//       reject(new Error("You lose your money"));
//     }
//   }, 2000);
// });

// lottaryTicket.then((res) => console.log(res)).catch((err) => console.log(err));

//Promisifying the Geolocation API

// navigator.geolocation.getCurrentPosition((position) => {
//   console.log(position, (err) => console.log(err));
// });

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition((position) => {
//     //   response => resolve(response)
//     //   err => reject(err)

//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then((res) => console.log(res));

// const whereAmI = function () {
//   getPosition()
//     .then((pos) => {
//       const {latitude: lat, longitude: lng} = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       console.log(res);
//       if (!res.ok) throw new Error(`Country Not Found (${res.status})`);

//       return res.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//     })
//     .catch((err) => {
//       console.error(err.message);
//     });
// };

// btn.addEventListener("click", whereAmI);

// Coding Challenge #2

// const myImage = new Image(100, 200);
// myImage.src = "picture.jpg";
// document.body.appendChild(myImage);

// var img = document.createElement("img");
// img.src = "my_image.jpg";
// document.getElementById("container").appendChild(img);

const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("Error", function () {
      reject(new Error("Image not Fround"));
    });
  });
};

// let current;
// createImage("../img/img-1.jpg")
//   .then((img) => {
//     current = img;
//     console.log("Image 1 loaded ");
//     return wait(2);
//   })
//   .then(() => {
//     current.style.display = "none";
//     createImage("../img/img-2.jpg");
//   })
//   .then((img) => {
//     current = img;
//     console.log("Image 2 loaded ");
//     return wait(2);
//   })
//   .then(() => {
//     current.style.display = "none";
//   })
//   .catch((err) => console.error(err));

// Consuming Promises Async Await

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition((position) => {
    //   response => resolve(response)
    //   err => reject(err)

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = async function () {
//   try {
//     const pos = await getPosition();
//     // Coordinates
//     const {latitude: lat, longitude: lng} = pos.coords;
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     // catch error
//     if (!resGeo.ok) throw new Error("Problem getting location data");
//     // console.log(!resGeo.ok);

//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);
//     // Country 1
//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );
//     // catch error
//     if (!resGeo.ok) throw new Error("Problem getting Country ");
//     // if (!resGeo.status) throw new Error("Problem getting Country status ");
//     const data = await res.json();
//     // console.log(data);
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city} , ${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err}`);
//     renderError(` ${err.message}`);
//   }
// };

// console.log("1: Well getting location");

// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then((city) => console.log(`2: ${city}`))
//   .catch((err) => console.error(`2: ${err}`))
//   .finally(() => console.log("3: finished getting location"));

// IIFE
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err}`);
//   } finally {
//     console.log("3: finished getting location");
//   }
// })();

// Running Promise in Parallel

// const getJSON = function (url, errorMsg = "Something went wrong") {
//   return fetch(url).then((response) => {
//     console.log(response);
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const Parallel = async function (c1, c2, c3) {
//   try {
// const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
// const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
// const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

// console.log(...[data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     // console.log(data);
//     console.log(...data.map((d) => d[0].capital));
//   } catch (err) {
//     console.log(`${err.message}`);
//   }
// };

// Parallel("bangladesh", "india", "pakistan");

// Coding Challenge #3

// const wait = function (second) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, second * 1000);
//   });
// };

// PART 1
// const loadNPause = async function () {
//   try {
//     // Loaded 1
//     let img = await createImage("../img/img-1.jpg");
//     console.log("Image 1 loaded ");
//     await wait(2);
//     img.style.display = "none";

//     // Loaded 2
//     img = await createImage("../img/img-2.jpg");
//     console.log("Image 2 loaded ");
//     await wait(2);
//     img.style.display = "none";
//   } catch (err) {
//     console.log(`Something wrong ${err.message}`);
//   }
// };

// loadNPause();

// PART 2

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach((img) => img.classList.add("parallel"));

    // const createImage = function (imgs) {};
  } catch (err) {
    console.error(`${err.message}`);
  }
};

loadAll(["../img/img-1.jpg", "../img/img-2.jpg", "../img/img-3.jpg"]);
