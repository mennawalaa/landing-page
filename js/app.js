/**
 *test
 */

 /*
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

    //write your code here

const list=document.getElementById("navbar__list");
const sections=document.querySelectorAll('section');
const navmenu=document.getElementById('navbar__menu');
 //options of intersect observer
let options={
    root:null,
    rootMargin:'0px',
    threshold:0.75
  };


/**
 * End Global Variables
 * Start Helper Functions
*/
/*this functions come into action when scroll happens .
it detemines the intersected section with viewport.
set active class to the section and the crossponding list item
 */
function onChange(changes,observer){
    changes.forEach(change => {
    //if intersection with viewport found
        if(change.isIntersecting){
            //remove  active class from all sections
            sections.forEach(section => {
                section.classList.remove("your-active-class");
            });
            //sets the active class for the section in viewport
            change.target.classList.add("your-active-class");
            //select all list anchors and loop through them
            const elements=document.querySelectorAll('a');
            elements.forEach(element => {
                //remove active class from all items
                element.classList.remove('item-active-class');
                //set the active class to  the item that crossponds to the intersected section
                if(change.target.getAttribute('data-nav')==element.innerHTML){
                    element.classList.add("item-active-class");
           }
        });
     }
   });

}
let observer = new IntersectionObserver(onChange, options);




/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
//this function adds the list items dynamically based on exicted sections
function buildNav(){
    //create document fragment to hold created items then finally abend it to the nav
    let docFragment= document.createDocumentFragment();
    for (const section of sections){
        //create list item with class "linksToSections" to facilate there acess
        const listItem=document.createElement('li');
        listItem.className="linksToSections";
        //create a element to hold the link of each list item
        const anchor= document.createElement('a');
        anchor.innerHTML=section.getAttribute('data-nav');
        anchor.href="#"+section.getAttribute('data-nav');
        //append the a element to li element then to the documentfragment
        listItem.appendChild(anchor);
        docFragment.appendChild(listItem);
   }
   //apend the document fragment to the nav
   list.appendChild(docFragment);
 }

//build nav function call
buildNav();

/**
 * End Main Functions
 * Begin Events
 *
*/





// Add class 'active' to section when near top of viewport




//this function toggles the active state when the scroll happens
window.addEventListener('scroll',function(){
    //uses intersect observer to detect the section in viewport
    // intersect observer call
    sections.forEach(section => { observer.observe(section)});
});





// Scroll to anchor ID using scrollTO event



//get all list items using there created class name in the build section
const items=document.getElementsByClassName('linksToSections');
//loop through the list items to check the click event
for(let t=0;t<items.length;++t){
    items[t].addEventListener('click',function(event){
        //prevent default anchor behaviour
        event.preventDefault();
        //scroll to the demanded section using the sections data structure with the same index of the item
        sections[t].scrollIntoView({behavior:"smooth",block:"center"});
  });
}
