import navbarComponent from "../navbar/navbar.js";
import footerComponent from "../footer/footer.js";
import { createHeroFunction, createMembersFunction } from "../helper/pastorHelper.js";


const navbarSection = document.querySelector('.navbar-section');
const footerSection = document.querySelector('.footer-section');
const heroImagesContainer = document.querySelector('.hero-images-container');
const heroMembersContainer = document.querySelector('.your-members-cards');
navbarSection.innerHTML = navbarComponent('.');
footerSection.innerHTML = footerComponent('.');
const apiNames = ['hero', 'members'];

function createSection(data, creationFunction, container){
    data.forEach(singleData => creationFunction(singleData, container));
}

async function fetchData(name) {
    const response = await fetch(`http://localhost:8082/pastor/${name}`);
    const jsonData = await response.json();
    if(name === 'hero') createSection(jsonData, createHeroFunction, heroImagesContainer);
    if(name === 'members') createSection(jsonData, createMembersFunction, heroMembersContainer);
}

apiNames.forEach(name => fetchData(name));