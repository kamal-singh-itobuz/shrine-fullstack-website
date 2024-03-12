import navbarComponent from "../navbar/navbar.js";
import footerComponent from "../footer/footer.js";

const navbarSection = document.querySelector('.navbar-section');
const footerSection = document.querySelector('.footer-section');
navbarSection.innerHTML = navbarComponent();
footerSection.innerHTML = footerComponent();

function satisfactionCard(imageURL, imageName, title, paragraph) {
    const container = document.createElement('div');
    const innerContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('src', imageURL);
    image.setAttribute('alt', imageName);
    imageContainer.append(image);
    const heading = document.createElement('h4');
    heading.innerText = title;
    const content = document.createElement('p');
    content.innerText = paragraph;
    const readMoreButton = document.createElement('div');
    const readMore  = document.createElement('p');
    readMore.innerText = 'Read More';
}