import navbarComponent from "../navbar/navbar.js";
import footerComponent from "../footer/footer.js";

const navbarSection = document.querySelector('.navbar-section');
const footerSection = document.querySelector('.footer-section');
const satisfactionCards = document.querySelector('.satisfaction-cards');
navbarSection.innerHTML = navbarComponent();
footerSection.innerHTML = footerComponent();

//Satisfaction part start
const satisfactionCardsData = [
    {
        url: "./images/satisfaction-section/our-church.svg",
        title: "Our Churches",
        content: "A long established fact that a recade",
    },
    {
        url: "./images/satisfaction-section/our-worship.svg",
        title: "Our Worship",
        content: "A long established fact that a recade",
    },
    {
        url: "./images/satisfaction-section/our-counselling.svg",
        title: "Our Counselling",
        content: "A long established fact that a recade",
    },
    {
        url: "./images/satisfaction-section/our-meeting.svg",
        title: "Our Meet",
        content: "A long established fact that a recade",
    }
]

function satisfactionCardFunction(imageURL, title, paragraph) {
    const container = document.createElement('div');
    container.setAttribute('class', 'col-12 col-sm-6 col-lg-3');
    const innerContainer = document.createElement('div');
    innerContainer.setAttribute('class', 'p-2 satisfaction-card d-flex flex-column align-items-center gap-2');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('src', imageURL);
    image.setAttribute('alt', title);
    imageContainer.append(image);
    const heading = document.createElement('h5');
    heading.innerText = title;
    const content = document.createElement('p');
    content.innerText = paragraph;
    const readMoreButton = document.createElement('div');
    readMoreButton.setAttribute('class', 'read-more-button d-flex gap-2');
    readMoreButton.setAttribute('role', 'button');
    const readMore  = document.createElement('p');
    readMore.setAttribute('class', 'description')
    readMore.innerText = 'Read More';
    const readmoreIcon = document.createElement('span');
    readmoreIcon.setAttribute('class', 'read-more-icon');
    readmoreIcon.innerText = '>';
    readMoreButton.append(readMore, readmoreIcon);
    innerContainer.append(imageContainer, heading, content, readMoreButton);
    container.append(innerContainer);
    satisfactionCards.append(container);
}

satisfactionCardsData.forEach(card => {
    satisfactionCardFunction(card.url, card.title, card.content);
});

//satisfaction finish