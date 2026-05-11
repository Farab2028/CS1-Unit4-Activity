// Boolean variable to track our mode
let darkMode = false;

/* NEW FUNCTION: document.querySelector
   lets you select any HTML element
   using its tag, class, or id
*/

// const (instead of let) because we're storing a REFERENCE to part of the HTML page
const body = document.querySelector("body");
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");
const image = document.querySelector("#image");

// Now we can change styles & atrributes for those elements
heading.style.color = "purple"; // JS wrote CSS code...
heading.textContent = "Light Mode & Dark Mode Webstie" ;



// REVIEW
// 1. Select the new element on the page (by id name)
const pastelBtn = document.querySelector("#pastel");
// 2. Attach click event listener to the button
pastelBtn.addEventListener("click", setPastel);
// 3. Define the function that triggers when clicked
function setPastel() {
   console.log("setting pastel theme...");
   body.style.background = "rgb(0, 0, 0)";
   body.style.color = "rgb(9, 225, 83)";
   body.style.fontFamily = "monospace";
   description.textContent = "WELCOME TO PASTEL MODE!";
}

// TOGGLE between light & dark mode
// 2. attach event listener
toggleBtn.addEventListener("click", toggleMode);
// 3. define the function
function toggleMode() {
   darkMode = !darkMode; // flip the boolean
   console.log(darkMode);
   if (darkMode == true) {
      console.log("apply dark mode styles");

   }
   else {
      console.log("apply light mode styles");

   }
}



