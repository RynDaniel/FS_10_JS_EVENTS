///DOM RECAP
let navbarPathItem1 = document.getElementsByClassName("nav__item")[0].innerText;
console.log(navbarPathItem1);
let navbarPathItem2 = document.getElementsByClassName("nav__links")[0].firstElementChild.innerText;
console.log(navbarPathItem2);

// let navbarPathsLi = document.getElementsByClassName("nav__links")[0].children[0];
// let navbarInstructorLi = document.getElementsByClassName("nav__links")[0].children[1];
// let navbarStudentsLi = document.getElementsByClassName("nav__links")[0].children[2];
// console.log(navbarPathsLi);

// let header = document.querySelector("header");
// let h2 = header.querySelector(".title");
// h2.style.color = "red";
// h2.className = "redColorClass";
// h2.classList.add("redColorClass");
// h2.classList.add("greenColorClass");
// h2.classList.remove("highlight");


// let childrenOfHeader = h2.parentElement.children;
// console.log(childrenOfHeader);

// for (let index = 0; index < childrenOfHeader.length; index++) {
//     if(childrenOfHeader[index] != h2){
//         childrenOfHeader[index].style.textTransform = 'uppercase';
//         childrenOfHeader[index].style.color = "purple";
//     }
// }

// [...childrenOfHeader].forEach(function (element) {
//     if (element != h2) {
//         element.style.textTransform = 'uppercase';
//         element.style.color = "purple";
//     }
// });

// DOM EVENTS

// window.onload = (e) => {
//     console.log("your page is loaded");
//     alert("your page was rendered");
// }

// window.addEventListener("load", (e) => {
//     console.log("windowload eventlistener added");
//     alert("your page was rendered");
// });

let navbarPathsLi = document.getElementsByClassName("nav__links")[0].children[0];
let navbarInstructorLi = document.getElementsByClassName("nav__links")[0].children[1];
let navbarStudentsLi = document.getElementsByClassName("nav__links")[0].children[2];

// navbarPathsLi.addEventListener("click", ()=>{
//     alert("Paths clicked by Client");
// });

// navbarInstructorLi.addEventListener("mouseover", () => {
//     navbarInstructorLi.innerText = "Over Me!";
//     navbarInstructorLi.style.color = "green";
//     navbarInstructorLi.style.fontSize = "1.7rem"

// });

// navbarInstructorLi.addEventListener("mouseout", () =>{
//     navbarInstructorLi.innerText = "Instructors";
//     navbarInstructorLi.style.color = "#444444";
//     navbarInstructorLi.style.fontSize = "1.7rem"
// });

// // // 🔥🔥🔥🔥🔥  rgb rndom color(rgb(255,255,255) onclick of Students Navbar (CODE CHALLENGE)  🔥🔥🔥🔥🔥

const randomNumber = () => Math.round(Math.random() * 255);

const randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

// console.log(randomColor());

// 🔥🔥 Bubbling 🔥🔥
// navbarStudentsLi.addEventListener("click", (e)=>{
//     // e.stopPropagation();
//     navbarStudentsLi.style.backgroundColor = randomColor();
// });
//navbarUl => navbarStudentsLi.parentElement
// navbarStudentsLi.parentElement.addEventListener("click", (e)=>{
//     // e.stopPropagation();
//     navbarStudentsLi.parentElement.style.backgroundColor = randomColor();
// });

//header => navbarStudentsLi.parentElement.parentElement
// navbarStudentsLi.parentElement.parentElement.addEventListener("click", (e)=>{
//     navbarStudentsLi.parentElement.parentElement.style.backgroundColor = randomColor();
// });

let lastNameInput = document.getElementsByName("last_name")[0];
console.log(lastNameInput);
let span = document.querySelector("#charCount");
console.log(span);

const showRemainChar = () => {
    span.innerText = lastNameInput.value.length + "/40";
}

lastNameInput.addEventListener("keyup", showRemainChar);

// 🔥🔥homework => if char length of last name of Student is 0, info span will be removed,not be visible 🔥🔥

let date = document.getElementsByName("birthday")[0];
date.addEventListener("change", ()=>{
    let year = new Date().getFullYear() - new Date(date.value).getFullYear();
    alert(`You are ${year} years old!`)
});

let selectBox = document.querySelector("#paths");
console.log(selectBox);
const getSelectedItem = () => {
    let selectedName = selectBox.options[selectBox.selectedIndex].innerText;
    alert(`Perfect choice! You will be a perfect ${selectedName} developer.`);
}
selectBox.onchange = getSelectedItem;
// selectBox.addEventListener("change", getSelectedItem);



