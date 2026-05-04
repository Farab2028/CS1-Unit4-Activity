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

// Now we can change styles & atrributes for those elements
heading.style.color = "purple"; // JS wrote CSS code...
heading.textContent = "Light Mode & Dark Mode Webstie" ;


