import navbarComponent from "../navbar/navbar.js";
import footerComponent from "../footer/footer.js";
import {ministryCardsHelper, eventsCardsHelper} from '../helper/eventsHelper.js';

const navbarSection = document.querySelector('.navbar-section');
const footerSection = document.querySelector('.footer-section');
const ministryCardsContainer = document.querySelector('.ministry-cards');
const eventsCardsContainer = document.querySelector('.shrine-events-cards');
navbarSection.innerHTML = navbarComponent('.');
footerSection.innerHTML = footerComponent('.');

const apiNames = ['ministries', 'all-events'];

function createSection(data, creationFunction, container) {
    data.forEach(singleData => creationFunction(singleData, container));
}

async function fetchData(name) {
    const response = await fetch(`http://localhost:8082/events/${name}`);
    const jsonData = await response.json();
    if(name === 'ministries') createSection(jsonData, ministryCardsHelper, ministryCardsContainer);
    if(name === 'all-events') createSection(jsonData, eventsCardsHelper, eventsCardsContainer);
}

apiNames.forEach(name => fetchData(name));