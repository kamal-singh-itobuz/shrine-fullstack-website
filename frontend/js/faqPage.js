import navbarComponent from "../navbar/navbar.js";
import footerComponent from "../footer/footer.js";
import {createHeroFunction, createFAQsFunction} from "../helper/faqHelper.js";

const navbarSection = document.querySelector('.navbar-section');
const footerSection = document.querySelector('.footer-section');
const heroContainer = document.querySelector('.hero-images-container');
const faqContainer = document.querySelector('.faq-container');
navbarSection.innerHTML = navbarComponent('.');
footerSection.innerHTML = footerComponent('.');
const apiURLs = ['http://localhost:8082/faq/hero', 'http://localhost:8082/faq/faqs'];

function createSection (data, createFunction, container) {
    data.forEach(singleData => {
        createFunction(singleData, container);
    });
}

async function fetchData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    if(jsonData.section === 'faq') createSection(jsonData.faqs, createFAQsFunction, faqContainer);
    else createSection(jsonData, createHeroFunction, heroContainer);
}

apiURLs.forEach(url => fetchData(url));
