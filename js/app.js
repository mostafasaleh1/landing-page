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
var anc = document.createElement('a');
uL[0].appendChild(anc);
uL[0] = anc; // Assigning i.e. storing the new <a> element iside the array of Unordered Lists.
uL[0].textContent = "Section 1"; // Naming the first element in the navbar as (Secton 1).
uL[0].setAttribute("href", "#section1"); // creating an attribute to refer to the corresponding section.

for (let i = 1; i <= 3; i++) {
    const sec = document.createElement("ul"); // creating a <ul> element inside the document.
    let anc2 = document.createElement("a"); // creating a <a> element inside the document.
    let secID = ("#section" +(i + 1)); // this is the ID of the section which must be assigned inside the <a> element to enable us to scroll to it when we click on the navbar menu.
    uL[i] = sec; // Assigning i.e. storing the new <ul> element iside the array of Unordered Lists.
    navbar.appendChild(uL[i]); // Appending this <ul> element iside the navbar.
    uL[i].appendChild(anc2); // Appending this <ul> element iside the <ul> element.
    uL[i] = anc2; // Assigning i.e. storing the new <a> element iside the array of Unordered Lists.
    uL[i].textContent = "Section " + (i+1); // Changing the text of this new <ul> element to section and depending on the number of the loop it will be given the name Section (number of the loop).
    uL[i].setAttribute("href", secID); // creating attributes to refer to the corresponding section.
}

/**
 * Styling the navigation bar and its sections.
*/
var cssStyle = document.createElement("style"); // Creating new style element on the document.
document.head.appendChild(cssStyle); // appending this style element into the head of the document.
cssStyle.innerHTML = ".navbar__menu {display: flex; flex-wrap:wrap; justify-content: right; background-color: rgb(0, 16, 65);}"; // Creating class to control the nav container as a flexbox.


for (let j = 0; j <= uL.length; j++) {
    uL[j].classList.add("menu__link"); // Adding class menu__link in the Stylesheet to the elements of the array (i.e. <ul> elements) using for loop.
    uL[j].setAttribute("style", "font-family: 'Fira Sans', sans-serif; color: white; font-size: 1.15em;"); // setting an attribute that contains the styles for each element in the array.
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


