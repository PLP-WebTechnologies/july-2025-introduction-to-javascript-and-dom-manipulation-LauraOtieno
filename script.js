// --------------------
// Part 1: Basics
// --------------------
let userName = "Laura";
let isLoggedIn = true;

// Conditional example
if (isLoggedIn) {
  document.getElementById("welcome").textContent = `Welcome, ${userName}! 🎉`;
} else {
  document.getElementById("welcome").textContent = "Please log in.";
}

// --------------------
// Part 2: Functions
// --------------------
function showTotal(a, b) {
  let total = a + b;
  document.getElementById("total").textContent = `Total = ${total}`;
}

// Another function: format string
function greet(name) {
  return `Hello, ${name}! 👋`;
}
console.log(greet("World"));

// --------------------
// Part 3: Loops
// --------------------
let items = ["Apples", "Bananas", "Milk"];
let list = document.getElementById("shopping-list");

for (let i = 0; i < items.length; i++) {
  let li = document.createElement("li");
  li.textContent = items[i];
  list.appendChild(li);
}

// While loop countdown (console only)
let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

// --------------------
// Part 4: DOM Manipulation
// --------------------
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// Another DOM interaction: create element dynamically
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was created dynamically!";
document.body.appendChild(newPara);
showTotal(5, 10);