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
    //navigation global variable
    const navigation = document.getElementById('navbar__list');
    //sections global variable
    const sections = document.querySelectorAll('section');

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

    const navBar = () => {
        let navI= '';
        //looping over all sections
        sections.forEach(section => {

            const sectionID = section.id;
            const sectionDataNav = section.dataset.nav;
            
            //storing the html in the variable(it can work with getElementByID but i choose this way as less code would be written :))
            navI+=`<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

        });
        //append all elements to the nanvigation
        navigation.innerHTML = navI;
    };

    navBar();

// Add class 'active' to section when near top of viewport

    //getting the largest value which is less than the number
    const position = (section) => {
        //returns the size and relative position of the element
        return Math.floor(section.getBoundingClientRect().top);
    };

    //remove active class
    const deleteActive = (section) => {
        //class name from css line 197
        section.classList.remove('your-active-class');
        //background color remains as default when it becomes not active
        section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);"
        //proof that active class moves to the current section
        //and to highlight the current section in the nav bar
        //we take 1 from the id as the index start from 0
        sectionid = section.id.slice(7,8) -1;
        navigation.childNodes[sectionid].style.cssText= "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);"
        
    };

    // adding active class
    const addActive = (i, section) => {
        if(i){
            section.classList.add('your-active-class');
            //only the active section would have the yellow background
            section.style.cssText = "background-color: orange;"
            //proof that active class moves to the current section
            //and to highlight the current section in the nav bar
            //we take 1 from the id as the index start from 0
            sectionid = section.id.slice(7,8) -1;
            navigation.childNodes[sectionid].style.cssText= "background-color: orange;"
            
        };
    };

    //Calling the functions
    const makingSectionActive = () => {
        sections.forEach(section => {
            //variable u is to call the function position and store it
            const u = position(section);

            measureActive = () => u< 200 && u>= -200;

            deleteActive(section);
            addActive(measureActive(), section);
        });
    };

    //For adding an event
    window.addEventListener('scroll' ,makingSectionActive);

    // Scroll to anchor ID using scrollTO event

    document.querySelectorAll('.navbar__menu a').forEach(anchor => {
        anchor.addEventListener('click', function (p) {
            p.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
//googled a bit to learn scrollIntoView function :)

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


