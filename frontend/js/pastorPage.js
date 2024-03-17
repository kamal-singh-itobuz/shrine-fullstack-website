import navbarComponent from "../navbar/navbar.js";
import footerComponent from "../footer/footer.js";


const navbarSection = document.querySelector('.navbar-section');
const footerSection = document.querySelector('.footer-section');
navbarSection.innerHTML = navbarComponent('.');
footerSection.innerHTML = footerComponent('.');