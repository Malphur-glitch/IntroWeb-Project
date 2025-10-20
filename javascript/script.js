const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const destinations = ["Paris", "Palawan", "Kyoto", "New York"];
console.log("Available destinations:", destinations);