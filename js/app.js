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
 *===== Define Global Variables
 * 
*/
const navbar = document.querySelector(".navbar__menu"); /* Selecting navbar and assigning it into a variable*/
var uL = [document.querySelector("#navbar__list")]; /* Selecting ul element iside of the navbar and assigning it into a variable*/
const mainElement = document.querySelector("#main"); // selecting the <main> element to add new section using the button.
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
 *===== Creating 4 <Unordered Lists> and <anchor> elements inside the navbar using for loop.
*/
var anc = document.createElement('a');
uL[0].appendChild(anc);
uL[0] = anc; // Assigning i.e. storing the new <a> element iside the array of Unordered Lists.
uL[0].textContent = "Section 1"; // Naming the first element in the navbar as (Secton 1).
uL[0].addEventListener("click", function () { // When we click on the first element in navbar menu go to the corresponding section shown below with a smooth scrolling effect.
    document.getElementById("section1").scrollIntoView({behavior: "smooth"});
});

for (let i = 1; i <= 3; i++) {
    const sec = document.createElement("ul"); // creating a <ul> element inside the document.
    let anc2 = document.createElement("a"); // creating a <a> element inside the document.
    let secID = ("section" +(i + 1)); // this is the ID of the section which must be assigned inside the <a> element to enable us to scroll to it when we click on the navbar menu.
    
    uL[i] = sec; // Assigning i.e. storing the new <ul> element iside the array of Unordered Lists.
   
    navbar.appendChild(uL[i]); // Appending this <ul> element iside the navbar.
   
    uL[i].textContent = "Section " + (i+1); // Changing the text of this new <ul> element to section and depending on the number of the loop it will be given the name Section (number of the loop).

    uL[i].addEventListener("click", function () { // When we click on an element in navbar menu go to the corresponding section shown below with a smooth scrolling effect.
        document.getElementById(secID).scrollIntoView({behavior: "smooth"});
    });
}

/**
 *====== Creating a (button) which is used to add more sections to the navbar menu.
 */

const button = document.createElement("button"); // Creating button
navbar.appendChild(button); // appending it into the navbar

button.textContent = "+";

var i = 3; // This is the index for the sections array, which is used to add new section. It equals 3 becuase there are actually 4 elements inside of the array starting with index 0.

button.addEventListener("click", function () { // an event listener when pressing the button it should create a new section in the navbar menu.
    i++; 
   /**
    *  --1-- Creating new section in the navbar menu 
    */
    
   const sec = document.createElement("ul"); // creating a <ul> element inside the document.
    let anc2 = document.createElement("a"); // creating a <a> element inside the document.
    let secID = ("section" +(i + 1)); // this is the ID of the section which must be assigned inside the <a> element to enable us to scroll to it when we click on the navbar menu.
    
    uL[i] = sec; // Assigning i.e. storing the new <ul> element iside the array of Unordered Lists.
   
    navbar.appendChild(uL[i]); // Appending this <ul> element iside the navbar.
    uL[i].appendChild(anc2); // Appending this <ul> element iside the <ul> element.
   
    uL[i] = anc2; // Assigning i.e. storing the new <a> element iside the array of Unordered Lists.
   
    uL[i].textContent = "Section " + (i+1); // Changing the text of this new <ul> element to section and depending on the number of the loop it will be given the name Section (number of the loop).

    uL[i].addEventListener("click", function () { // When we click on the created element in navbar menu go to the corresponding section shown below with a smooth scrolling effect.
        document.getElementById(secID).scrollIntoView({behavior: "smooth"});
    });
    
    /** styling the created navbar menu element  */
    uL[i].classList.add("menu__link"); // Adding class menu__link in the Stylesheet to the elements of the array (i.e. <ul> elements) using for loop.
    uL[i].setAttribute("style", "font-family: 'Fira Sans', sans-serif; color: white; font-size: 1.15em;"); // setting an attribute that contains the styles for each element in the array.

    /** 
     * 2- Creating new section on the document in the main element with an id = #sectionX where X is a variable.
     */
    
    let newSec = document.createElement("section"); // Creating new section.
    mainElement.appendChild(newSec); //Appending this section to <main>.
    newSec.setAttribute("id", ("section" + (i+1))); // adding an id to the new section with an index +1 to the previous section.
    newSec.setAttribute("data-nav", ("Section " + (i+1))); // adding data-nav attribute and setting its value to (Section +1) from the previous section.

    let secDiv = document.createElement("div"); //creating new <div> element.
    newSec.appendChild(secDiv); // appending the new <div> element to the new section element.
    secDiv.setAttribute("class", "landing__container"); // giving the <div> element a class (landing__container).

    let secH = document.createElement("h2"); // creating new <h2> element.
    secDiv.appendChild(secH); //appending the new <h2> element to the div container.
    secH.textContent = ("Section " + (i+1)); // putting text inside the <h2> element.

    let secP1 = document.createElement("p"); // creating new <paragraph> element.
    secDiv.appendChild(secP1); //appending the new <paragraph> element to the <div> container.
    secP1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod."; // putting filler text inside of the new <paragraph> element.

    let secP2 = document.createElement("p"); // creating another new <paragraph> element.
    secDiv.appendChild(secP2); // appending the new <paragraph> element to the <div> container.
    secP2.textContent = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."; // putting filler text inside of the new <paragraph> element.

    alert("Section "+ (i+1) + " has been successfuly added."); // printing text message to the user that the new section has been successfully added.
});

/** Styling the button */
button.setAttribute('style', 'color: blue; font-size: 2em; height: inherit;');
/**
 *  End of button. 
 */

/**
 *===== Styling the navigation bar and its sections.
*/

var cssStyle = document.createElement("style"); // Creating new style element on the document.
document.head.appendChild(cssStyle); // appending this style element into the head of the document.

cssStyle.innerHTML = ".navbar__menu {display: flex; flex-wrap:wrap; justify-content: right; background-color: rgb(0, 16, 65);}"; // Creating class to control the nav container as a flexbox.


for (let j = 0; j < uL.length; j++) {
    uL[j].classList.add("menu__link"); // Adding class menu__link in the Stylesheet to the elements of the array (i.e. <ul> elements) using for loop.
    uL[j].setAttribute("style", "font-family: 'Fira Sans', sans-serif; color: white; font-size: 1.15em;"); // setting an attribute that contains the styles for each element in the array.
}

// Add class 'active' to section when near top of viewport

/**
 * styling the navbar menu section, and making the mouse show up as pointer when hovering on a section on the navbar menu.
 */
 var cursorPointer = document.createElement("style");
 document.head.appendChild(cursorPointer);
 cursorPointer.innerHTML = ".navbar__menu ul:hover {cursor: pointer;}";

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


/**
 * Adding active class when a section is in the viewport.
 */
var secArr = document.querySelectorAll('section'); // creating an array that contains all the section on the document.

window.addEventListener("scroll", function () { //making the window do the function below while scrolling, this fucntion cotinuously checks if the section is in the vieport or not. If yes it adds the active class, if not it remove the active class.
    secArr.forEach(function (SecInViewport) { // looping over the scetion in the viewport and checking continuously if it's existing or not.

        let bounds = SecInViewport.getBoundingClientRect(); // getting the dimentions of the rectangle of the section being looped and storing it into a variable called bound.

//those are the dimentions that determine if that section is 75% in the viewport or not.

        if (bounds.top <= 350.00 && bounds.top >= -270.00) { // checking if the rectangle is in the viewport or not.
            if (!SecInViewport.classList.contains("your-active-class")) { //checking if the rectangle doesn't contain the activ class.
                SecInViewport.setAttribute("class", "your-active-class"); //if the active class doesn't exist and the seciton is in the viewport, it'll add the class as an attribute to the sction in the viewport.
            }
        } 
        else {
            SecInViewport.removeAttribute("class"); // if the section already has an active class and this section is not in the viewport, it'll remove the class.
        }
    });
});

