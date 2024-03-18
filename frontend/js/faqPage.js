import navbarComponent from "../navbar/navbar.js";
import footerComponent from "../footer/footer.js";
import {createHeroFunction, createFAQsFunction} from "../helper/faqHelper.js";

const navbarSection = document.querySelector('.navbar-section');
const footerSection = document.querySelector('.footer-section');
const heroContainer = document.querySelector('.hero-images-container');
const faqContainer = document.querySelector('.faq-container');
navbarSection.innerHTML = navbarComponent('.');
footerSection.innerHTML = footerComponent('.');

const apiNames = ['hero', 'faqs'];

function createSection (data, createFunction, container) {
    data.forEach(singleData => {
        createFunction(singleData, container);
    });
}

async function fetchData(name) {
    const response = await fetch(`http://localhost:8082/faq/${name}`);
    const jsonData = await response.json();
    if(name === 'hero') createSection(jsonData, createHeroFunction, heroContainer);
    if(name === 'faqs') createSection(jsonData.faqs, createFAQsFunction, faqContainer);
}

apiNames.forEach(name => fetchData(name));
