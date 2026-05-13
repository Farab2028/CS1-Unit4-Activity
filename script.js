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
   body.style.color = "rgb(9, 171, 225)";
   body.style.fontFamily = "monospace";
   description.textContent = "WELCOME TO PASTEL MODE!";
   image.src = "pastel.jpg"
   heading.textContent = "PASTEL!";
   body.style.background = "lavender";
   heading.style.backgroundSize = "cover";
   heading.style.margin = "20px";


   
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
      body.style.background = "rgb(0, 0, 0)";
      heading.style.color = "lightgrey";
      description.style.color = "white";
      description.textContent = "Welcome to dark side ";
      toggleBtn.textContent = "Switch to Light";
      image.src = "night time.jpg";

   }
   else {
      console.log("apply light mode styles");
      body.style.background = "white";
      heading.style.color = "darkgrey";
      description.style.color = "rgb(0, 0, 0)";
      description.textContent = "Welcome to light side ";
      toggleBtn.textContent = "Switch to Dark";
      image.src = "Daytime.jpg";

   }
}

   const neonBtn = document.querySelector("#neon");
   neonBtn.addEventListener("click", setNeonMode);
   function setNeonMode() {
      body.style.background = "linear-gradient(blue, pink)";
      body.style.fontFamily = "monospace";
      description.style.color = "rgb (64, 225, 0)";
      description.textContent = "WELCOME TO NEON MODE";
      image.src = "neon.jpg";
      heading.textContent = "NEON!";

   }







