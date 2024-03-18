import navbarComponent from "../navbar/navbar.js";
import footerComponent from "../footer/footer.js";
import  {createAboutusStats, createWalkingCard} from "../helper/aboutusHelper.js";

const navbarSection = document.querySelector('.navbar-section');
const footerSection = document.querySelector('.footer-section');
const aboutusStatsContainer = document.querySelector('.aboutus-stats');
const walkingCardsContainer = document.querySelector('.walking-cards-container');
navbarSection.innerHTML = navbarComponent('.');
footerSection.innerHTML = footerComponent('.');

const apiNames = ['stats', 'walking'];
function createSections(data, cardCreaterFunction, container) {
    data.forEach(singleCard => {
        cardCreaterFunction(singleCard, container);
    });
}

async function fetchData(name) {
    const response = await fetch(`http://localhost:8082/aboutus/${name}`);
    const jsonData = await response.json();
    if(name === 'stats') createSections(jsonData.aboutusStats, createAboutusStats, aboutusStatsContainer);
    if(name === 'walking') createSections(jsonData.cardData, createWalkingCard, walkingCardsContainer);
}

apiNames.forEach(name =>  fetchData(name));