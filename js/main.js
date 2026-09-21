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
