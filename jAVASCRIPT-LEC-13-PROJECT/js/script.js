"use strict";

// Selection Element
// const sajan = document.querySelector(".nav");

// Creating and inserting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const message = document.createElement("div");
// message.classList.add("aa");

// message.innerHTML = "My Name is Sajan";

// sajan.prepend(message);
// document.querySelector("div").addEventListener("click", function () {
//   message.remove();
// });

// Style Elements
// message.style.backgroundColor = "#f1f5f9";
// message.style.padding = "10px";
// message.style.textAlign = "center";

// Attributes

// const logo = document.querySelector(".nav-logo");
// console.log(logo.alt);
// console.log(logo.src);
// logo.src = "Beautiful minimalist logo";

// non-standard attributes
// console.log(logo.designer);
// console.log(logo.getAttribute("designer"));
// logo.setAttribute("company", "Bankist");

// Classes
// logo.classList.add("c");
// logo.classList.remove("c");
// logo.classList.toggle("c");
// logo.classList.contains("c"); // not include

//Button Smother scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");
console.log(btnScrollTo, section1);

btnScrollTo.addEventListener("click", function (e) {
  //   const s1coords = section1.getBoundingClientRect();
  //   console.log(s1coords);

  //   console.log(e.target.getBoundingClientRect());
  //   console.log("Current scroll (X/Y)", window.pageXOffset, pageYOffset);

  // Modran Scrolling
  section1.scrollIntoView({behavior: "smooth"});
});

/////////////////////
// Event Delegation Implementation
// NAVIGATION PAGES

// document.querySelectorAll(".nav-link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({behavior: "smooth"});
//   });
// });

document.querySelector(".nav--links").addEventListener("click", function (e) {
  console.log(e.target);
  e.preventDefault();
  if (e.target.classList.contains("nav--link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: "smooth"});
    console.log("smooth");
  }
});

////////////////////////////
// Tabs

const tabs = document.querySelectorAll(".oparation-tab");
console.log(tabs);

const tabsContainer = document.querySelector(".oparation-tab-container");
console.log(tabsContainer);
const tabsContain = document.querySelectorAll(".oparation--contain");
console.log(tabsContain);

// Event delegation

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".oparation-tab");
  console.log(clicked);
  // Guard clause
  if (!clicked) return;
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.oparation-contain-${clicked.dataset.tab}`)
    .classList.remove("hidden");
});

////////////////////////////
// Menu fade animation

const nav = document.querySelector(".nav");
console.log(nav);

// destructuring

const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav--link")) {
    const link = e.target;
    // console.log(link);
    const siblings = link.closest(".nav").querySelectorAll(".nav--link");
    // console.log(siblings);
    const logo = link.closest(".nav").querySelector("img");
    // console.log(logo);
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

////////////////////////////
// PRACTICE CODE
////////////////////////////

// Dom Traversing

const h1 = document.querySelector("h1");

// Going downwards

// console.log(h1.querySelectorAll(".high"));
// console.log(h1.childNodes);
// console.log(h1.children);

// h1.firstElementChild.style.color = "red";
// h1.lastElementChild.style.color = " yellow";

// // Going upwards : parent

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest("#Hero").style.backgroundColor = "yellow";
// h1.closest("h1").style.background = "green";

// // Going sideways siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = "scale(0.5)";
// });

const alertEl = function (e) {
  //   alert("This is wonderful event");
};

h1.addEventListener("mouseenter", alertEl);
// REMOVE EVENT H1
setTimeout(() => h1.removeEventListener("mouseenter", alertEl), 3000);
