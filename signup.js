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

// window.addEventListener("event", func());
window.addEventListener("load", ()=>{
    console.log("window loaded");
});

// window.onload = func()
window.onload = () => {
    console.log("window onloaded")
}

navbarPathsLi.addEventListener("click", (e)=>{
    alert(navbarPathsLi.innerText + " clicked");
});

// 3. ve 4. eventlistener ekleme şekli ödev

// let navbarPathsLi2 = document.querySelector(".nav__links").firstElementChild;
// console.log("ul -> first li", navbarPathsLi2.innerText);

// let navbarSignUpLi = document.querySelector(".nav__links").lastElementChild;
// console.log("ul -> last li", navbarSignUpLi.innerText);

let navbarInstructorsLi = document.querySelectorAll(".nav__item")[1];
console.log(navbarInstructorsLi);

navbarInstructorsLi.addEventListener("mouseover", ()=>{
    navbarInstructorsLi.innerText = "Over Me!";
    navbarInstructorsLi.style.color = "green";
    navbarInstructorsLi.style.fontSize = "1.7rem";
});

navbarInstructorsLi.addEventListener("mouseout", ()=>{
    navbarInstructorsLi.innerText = "Instructors";
    navbarInstructorsLi.style.color = "#444444";
    navbarInstructorsLi.style.fontSize = "1.7rem";
});


let navbarStudentsLi = document.querySelectorAll(".nav__item")[2];
console.log(navbarStudentsLi);
// // // 🔥🔥🔥🔥🔥  rgb random color(rgb(255,255,255) onclick of Students Navbar (CODE CHALLENGE)  🔥🔥🔥🔥🔥

const randomNumber = () => Math.round(Math.random() * 255);
const randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

//li
navbarStudentsLi.addEventListener("click", (event)=>{
    //stop bubbling
    event.stopPropagation();
    navbarStudentsLi.style.backgroundColor = randomColor();
});

//ul
navbarStudentsLi.parentElement.addEventListener("click", (event)=>{
    event.stopPropagation();
    navbarStudentsLi.parentElement.style.backgroundColor = randomColor();
});

//header
navbarStudentsLi.parentElement.parentElement.addEventListener("click", (event)=>{
    navbarStudentsLi.parentElement.parentElement.style.backgroundColor = randomColor();
});

let lastName = document.querySelector("input[name = last_name]");
let charSpan = document.getElementById("charCount");

lastName.addEventListener("keyup", ()=>{
    charSpan.innerText = lastName.value.length + "/40";
});

// last name input value 0 olduğunda span gözükmesin!! --> Homework <--

let birthdayPicker = document.querySelector('[name=birthday]');
birthdayPicker.addEventListener("change", () =>{
    console.log(birthdayPicker.value);
    console.log(new Date());
    let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();
    alert("You are " + year + "years old.");
});

birthdayPicker.onchange = () =>{
    console.log(birthdayPicker.value);
    console.log(new Date());
    let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();
    alert("You are " + year + "years old.");
}










