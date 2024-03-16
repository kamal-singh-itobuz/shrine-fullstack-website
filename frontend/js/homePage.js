import navbarComponent from "../navbar/navbar.js";
import footerComponent from "../footer/footer.js";
import {createSatisfactionCardFunction, createMemberCardFunction, createEventCardFunction, createArticleCardFunction} from "../helper/homeHelper.js";

const navbarSection = document.querySelector('.navbar-section');
const footerSection = document.querySelector('.footer-section');
const satisfactionCards = document.querySelector('.satisfaction-cards');
const yourMembersCards = document.querySelector('.your-members-cards');
const eventsCards = document.querySelector('.all-events-cards');
const articlesCards = document.querySelector('.articles-cards');
const articleInputEmail = document.querySelector('.article-input-email');
const articleSubscribeButton = document.querySelector('.article-subscribe-button');
const articleNextButtonsContainer = document.querySelector('.article-next-buttons-container');
navbarSection.innerHTML = navbarComponent(''); // '' refersing to index.html
footerSection.innerHTML = footerComponent('');

const apiName = ['satisfaction', 'members', 'events', 'articles'];

function createArticleNextButtons(cardsData, container) {
    const noOfCards = cardsData.length;
    const screenWidth = window.innerWidth;
    let noOfButtons = noOfCards+1;
    if(screenWidth > 576 && screenWidth <= 992) noOfButtons = noOfCards%2 === 0 ? noOfCards/2 + 1 : Math.floor(noOfCards/2) + 2;
    else if(screenWidth > 992) noOfButtons = noOfCards%3 === 0 ? noOfCards/3 + 1 : Math.floor(noOfCards/3) + 2;

    for(let i=1; i<= noOfButtons; i++) {
        const buttonDiv = document.createElement('div');
        buttonDiv.setAttribute('role', 'button');
        buttonDiv.setAttribute('class', 'd-flex justify-content-center align-items-center');
        buttonDiv.innerText = i !== noOfButtons ? i : '>';
        container.append(buttonDiv);
    }
}

function createSectionCards(data, cardCreaterFunction, cardsContainer) {
    data.forEach(singlecard => {
        cardCreaterFunction(singlecard, cardsContainer);
    });
}

async function postEmail (apiUrl, emailId) {
    const response = await fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(emailId),
    });
    return response.json();
}

async function fetchData (apiURL) {
    const response = await fetch(apiURL);
    const sectionData = await response.json();
    const cardsData = sectionData.cardData;

    if(sectionData.section === 'satisfaction') createSectionCards(cardsData, createSatisfactionCardFunction, satisfactionCards);
    if(sectionData.section === 'members') createSectionCards(cardsData, createMemberCardFunction, yourMembersCards);
    if(sectionData.section === 'events') createSectionCards(cardsData, createEventCardFunction, eventsCards);
    if(sectionData.section === 'articles'){
        createSectionCards(cardsData, createArticleCardFunction, articlesCards);
        createArticleNextButtons(cardsData, articleNextButtonsContainer);
    }
}

apiName.forEach(ele => fetchData(`http://localhost:8082/home/${ele}`));

articleSubscribeButton.addEventListener('click', () => {
    if(articleInputEmail.value.trim()) {
        postEmail("http://localhost:8082/home/subscribe", {email: articleInputEmail.value.trim()});
        articleInputEmail.value = "";
    }
});