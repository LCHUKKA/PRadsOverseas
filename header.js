document
  .getElementsByClassName("navbar-item")[1]
  .addEventListener("click", openSection);

function openSection(e) {
  console.log("menu clicked! => " + e.target);
}

console.log("Page Loaded!");
// alert("button clicked!");

// Add a click event handler
document
  .getElementsByClassName("login-submit")[0]
  .addEventListener("click", function (e) {
    // Your code to be executed when the button is clicked
    console.log("Button clicked! " + e.target.value);
    // alert("button clicked!");
  });
