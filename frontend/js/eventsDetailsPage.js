import navbarComponent from "../navbar/navbar.js";
import footerComponent from "../footer/footer.js";
import {mainContainerHelper, sidebarHelper} from '../helper/eventsDetailsHelper.js';

const navbarSection = document.querySelector('.navbar-section');
const footerSection = document.querySelector('.footer-section');
const heroSectionContainer = document.querySelector('.hero-section-container');
const currentEventDetail = document.querySelector('.current-event-detail');
const sidebar = document.querySelector('.sidebar');
navbarSection.innerHTML = navbarComponent('.');
footerSection.innerHTML = footerComponent('.');

const apiNames = ['current-event', 'sidebar'];

async function fetchData(apiName) {
    const response = await fetch(`http://localhost:8082/event-details/${apiName}`);
    const jsonData = await response.json();
    if(apiName === 'current-event') mainContainerHelper(jsonData, heroSectionContainer, currentEventDetail);
    if(apiName === 'sidebar') sidebarHelper(jsonData, sidebar);
}

apiNames.forEach(name => fetchData(name));