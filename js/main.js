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
