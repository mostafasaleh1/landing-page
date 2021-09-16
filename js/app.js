/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.querySelector(".navbar__menu"); /* Selecting navbar and assigning it into a variable*/
var uL = [document.querySelector("#navbar__list")]; /* Selecting ul element iside of the navbar and assigning it into a variable*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

/**
 * Creating 4 Unordered Lists inside the navbar using for loop.
*/
uL[0].textContent = "Section 1"; // Naming the first element in the navbar as (Secton 1).

for (let i = 1; i <= 3; i++) {
    const sec = document.createElement("ul"); // creating a <ul> element inside the document.
    uL[i] = sec; // Assigning i.e. storing the new <ul> element iside the array of Unordered Lists.
    navbar.appendChild(uL[i]); // Appending this <ul> element iside the navbar.
    uL[i].textContent = "Section " + (i+1); // Changing the text of this new <ul> element to section and depending on the number of the loop it will be given the name Section (number of the loop).
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


