// DOM recap, DOM traversing

// let navbarPathItemText = document.getElementsByClassName("nav__item")[0].innerText;
// console.log(navbarPathItemText);

// let navbarPathItemText2 = document.getElementsByClassName("nav__link")[0].innerText;
// console.log(navbarPathItemText2);

// let navbarPathItemText3 = document.getElementsByClassName("nav__links")[0].children[0].innerText;
// console.log(navbarPathItemText3);

// let navbarPathItemText4 = document.getElementsByClassName("nav__links")[0].firstElementChild.innerText;
// console.log(navbarPathItemText4);

let navbarPathsLi = document.querySelector(".nav__item");
console.log(navbarPathsLi);

let navbarPathsLi2 = document.querySelector(".nav__links").firstElementChild;
console.log("ul -> first li", navbarPathsLi2.innerText);

let navbarSignUpLi = document.querySelector(".nav__links").lastElementChild;
console.log("ul -> last li", navbarSignUpLi.innerText);

let navbarInstructorsLi = document.querySelectorAll(".nav__item")[1];
console.log(navbarInstructorsLi);

let navbarStudentsLi = document.querySelectorAll(".nav__item")[2];
console.log(navbarStudentsLi);








