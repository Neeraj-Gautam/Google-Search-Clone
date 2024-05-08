//Access all DOM Elements

let toggle = document.getElementById("toggle");
let dark = document.querySelector(".dark");
let footer = document.querySelector(".footer");
let searchField = document.querySelector(".search-field");
let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let img = document.querySelector("img");
let languages = document.querySelector(".languages");
let hrbreak = document.querySelector(".break");
let googleSearch = document.querySelector("#search");
// Dark Mode On

function darkModeOn() {
  dark.style.backgroundColor = "rgb(36, 35, 35)";
  footer.style.backgroundColor = "rgb(31,30,30)";
  dark.style.color = "lightgrey";
  footer.style.color = "grey";
  searchField.style.backgroundColor = "rgb(36, 35, 35)";
  searchField.style.color = "white";
  searchField.style.border = "1px solid rgb(95, 95, 95)";
  btn.style.backgroundColor = "rgb(53, 52, 52)";
  btn1.style.backgroundColor = "rgb(53, 52, 52)";
  btn.style.color = "lightgrey";
  btn1.style.color = "lightgrey";
  img.src = "9 dots.png";
  languages.style.color = "rgb(39, 124, 223)";
  hrBreak.style.border = "1px solid rgb(48, 48, 48)";
  localStorage.setItem("darkMode", "enabled");
}

// Dark Mode Off

function darkModeOff() {
  dark.style.backgroundColor = "white";
  footer.style.backgroundColor = "rgb(238, 238, 238)";
  dark.style.color = "black";
  footer.style.color = "rgb(102, 100, 100)";
  searchField.style.backgroundColor = "white";
  searchField.style.color = "black";
  btn.style.backgroundColor = "rgb(248, 248, 248)";
  btn1.style.backgroundColor = "rgb(248, 248, 248)";
  btn.style.color = "rgb(88, 88, 88)";
  btn1.style.color = "rgb(88, 88, 88)";
  img.src = "9 dots.png";
  languages.style.color = "blue";
  hrBreak.style.border = "1px solid rgb(223, 223, 223)";
  localStorage.setItem("darkMode", null);
}

toggle.addEventListener("click", function () {
  if (toggle.checked == true) {
    darkModeOn();
  } else {
    darkModeOff();
  }
});

//Dark Mode Toggle save in Local Storage

let saveDarkMode = localStorage.getItem("darkMode");
if (saveDarkMode === "enabled") {
  toggle.checked = true;
  darkModeOn();
}

//Add Search Functionality

function search() {
  let input = searchField.value;
  window.location.href = "https://www.google.com/search?q=" + input;
}

googleSearch.addEventListener("click", function () {
  if (searchField.value == "") {
    console.log("Please Type Something!!!");
  } else {
    search();
  }
});

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    search();
  } else {
    console.log("Please Type Something!!!");
  }
});
