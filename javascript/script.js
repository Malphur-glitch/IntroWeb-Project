const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const destinations = ["Paris", "Palawan", "Kyoto", "Rome", "Indonesia"];
console.log("Available destinations:", destinations);

// Simulate a user being logged in or not
const userLoggedIn = false;
if (userLoggedIn) {
  console.log("Welcome back, traveler!");
} else {
  console.log("Please log in to save your destinations.");
}

// Create a user profile with properties and a method
const userProfile = {
  name: "Daniel",
  visited: ["Palawan", "Kyoto"],
  showVisited() {
    console.log(this.name + " has visited: " + this.visited.join(", "));
  }
};

// Call the method to show the user's visited places
userProfile.showVisited();