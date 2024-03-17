import navbarComponent from "../navbar/navbar.js";
import footerComponent from "../footer/footer.js";
import  {createAboutusStats, createWalkingCard} from "../helper/aboutusHelper.js";

const navbarSection = document.querySelector('.navbar-section');
const footerSection = document.querySelector('.footer-section');
const aboutusStatsContainer = document.querySelector('.aboutus-stats');
const walkingCardsContainer = document.querySelector('.walking-cards-container');
navbarSection.innerHTML = navbarComponent('.');
footerSection.innerHTML = footerComponent('.');
const apiURLs = ['http://localhost:8082/aboutus/stats', 'http://localhost:8082/aboutus/walking'];

function createSections(data, cardCreaterFunction, container) {
    data.forEach(singleCard => {
        cardCreaterFunction(singleCard, container);
    });
}

async function fetchData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    if(jsonData.section === 'aboutus') {
        createSections(jsonData.aboutusStats, createAboutusStats, aboutusStatsContainer);
    }
    if(jsonData.section === 'walking') {
        createSections(jsonData.cardData, createWalkingCard, walkingCardsContainer);
    }
}


apiURLs.forEach(url =>  fetchData(url));