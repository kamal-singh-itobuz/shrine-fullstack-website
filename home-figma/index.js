import navbarComponent from "../navbar/navbar.js";
import footerComponent from "../footer/footer.js";
import callPriceComponent from "./call-price-section/callPrice.js";

const navbarSection = document.querySelector('.navbar-section');
const footerSection = document.querySelector('.footer-section');
const callPriceSection = document.querySelector('.call-price-section');
navbarSection.innerHTML = navbarComponent();
footerSection.innerHTML = footerComponent();
callPriceSection.append(callPriceComponent());