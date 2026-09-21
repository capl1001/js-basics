// Opgave 1
const drinks = document.querySelectorAll("img");

drinks.forEach(function (drink) {
  drink.addEventListener("click", checkDrink);
});

function checkDrink() {
  if (this.alt === "tuborg" || this.alt === "snaps") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}

// Opgave 2
const time = new Date().getHours();

if (time >= 5 && time < 10) {
  console.log("Godmorgen");
} else if (time >= 10 && time < 18) {
  console.log("Goddag");
} else if (time >= 18 && time < 24) {
  console.log("Godaften");
} else {
  console.log("Godnat");
}

// Opgave 3

let hemmeligtTal = Math.floor(Math.random() * 11);
let antalGaet = 0;

const input = document.querySelector("#tal");
const knap = document.querySelector("#gaet");
const resultat = document.querySelector("#resultat");
const nyRunde = document.querySelector("#nyRunde");

knap.addEventListener("click", function () {
  antalGaet++;

  const gaet = Number(input.value);

  if (gaet === hemmeligtTal) {
    resultat.textContent = "Rigtigt! Du brugte " + antalGaet + " gæt.";
    nyRunde.style.display = "block";
  } else if (gaet > hemmeligtTal) {
    resultat.textContent = "For højt!";
  } else {
    resultat.textContent = "For lavt!";
  }
});

nyRunde.addEventListener("click", function () {
  hemmeligtTal = Math.floor(Math.random() * 11);
  antalGaet = 0;
  input.value = "";
  resultat.textContent = "";
  nyRunde.style.display = "none";
});
