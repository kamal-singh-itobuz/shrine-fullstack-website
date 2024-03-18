import navbarComponent from "../navbar/navbar.js";
import footerComponent from "../footer/footer.js";
import { videoListHelper } from "../helper/videoListHelper.js";

const navbarSection = document.querySelector('.navbar-section');
const footerSection = document.querySelector('.footer-section');
const videoListContainer = document.querySelector('.our-bible-videos-container');
navbarSection.innerHTML = navbarComponent('.');
footerSection.innerHTML = footerComponent('.');
const apiName = 'our-bible';

function createSection(data, creationFunction, container) {
    data.forEach((singleData, index) => creationFunction(singleData, container, index));
}

async function fetchData(apiName) {
    const response = await fetch(`http://localhost:8082/video-list/${apiName}`);
    const jsonData = await response.json();
    if (apiName === 'our-bible') createSection(jsonData, videoListHelper, videoListContainer);
}
fetchData(apiName);