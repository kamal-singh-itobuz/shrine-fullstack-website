import navbarComponent from "../navbar/navbar.js";
import footerComponent from "../footer/footer.js";
import {createSatisfactionCardFunction, createMemberCardFunction, createEventCardFunction, createArticleCardFunction} from "../helper/homeHelper.js";

const navbarSection = document.querySelector('.navbar-section');
const footerSection = document.querySelector('.footer-section');
const satisfactionCards = document.querySelector('.satisfaction-cards');
const yourMembersCards = document.querySelector('.your-members-cards');
const eventsCards = document.querySelector('.all-events-cards');
const articlesCards = document.querySelector('.articles-cards');
navbarSection.innerHTML = navbarComponent(''); // '' refersing to index.html
footerSection.innerHTML = footerComponent('');

const apiName = ['satisfaction', 'members', 'events', 'articles'];

function createSectionCards(data, cardCreaterFunction, cardsContainer) {
    data.forEach(singlecard => {
        cardCreaterFunction(singlecard, cardsContainer);
    });
}

async function fetchData (apiURL) {
    const response = await fetch(apiURL);
    const sectionData = await response.json();
    const cardsData = sectionData.cardData;

    if(sectionData.section === 'satisfaction') createSectionCards(cardsData, createSatisfactionCardFunction, satisfactionCards);
    if(sectionData.section === 'members') createSectionCards(cardsData, createMemberCardFunction, yourMembersCards);
    if(sectionData.section === 'events') createSectionCards(cardsData, createEventCardFunction, eventsCards);
    if(sectionData.section === 'articles') createSectionCards(cardsData, createArticleCardFunction, articlesCards);
}

apiName.forEach(ele => fetchData(`http://localhost:8082/home/${ele}`));