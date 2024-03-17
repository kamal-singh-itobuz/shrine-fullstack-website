import navbarComponent from "../navbar/navbar.js";
import footerComponent from "../footer/footer.js";
import { createCategoriesFunction, createGalleryFunction } from '../helper/galleryHelper.js';

const navbarSection = document.querySelector('.navbar-section');
const footerSection = document.querySelector('.footer-section');
const galleryCategories = document.querySelector('.gallery-categories');
const galleryContainer = document.querySelector('.gallery-container');
navbarSection.innerHTML = navbarComponent('.');
footerSection.innerHTML = footerComponent('.');
const categories = ['All', 'Church', 'Donation', 'Charity', 'Education'];
let activeCategory = 'all';

function toggleBorderOfCategory(current) {
    current.style.borderBottom = '0.3rem solid #C0304F';
    activeCategory.style.borderBottom = '0.3rem solid white';
    activeCategory = current;
}

function createContainer(data, createFunction, container) {
    data.forEach(singleImg => createFunction(singleImg, container));
}

async function fetchData(apiName) {
    const response = await fetch(`http://localhost:8082/gallery/${apiName}`);
    const jsonData = await response.json();
    createContainer(jsonData, createGalleryFunction, galleryContainer);
}

categories.forEach(name => createCategoriesFunction(name, galleryCategories));
fetchData('all');
activeCategory = document.querySelector('.category-all-button');

galleryCategories.addEventListener('click', (e) => {
    if (e.target.innerText === 'All') {
        toggleBorderOfCategory(e.target);
        galleryContainer.innerHTML = "";
        fetchData('all');
    }
    if (e.target.innerText === 'Church') {
        toggleBorderOfCategory(e.target);
        galleryContainer.innerHTML = "";
        fetchData('church');
    }
    if (e.target.innerText === 'Donation') {
        toggleBorderOfCategory(e.target);
        galleryContainer.innerHTML = "";
        fetchData('donation');
    }
    if (e.target.innerText === 'Charity') {
        toggleBorderOfCategory(e.target);
        galleryContainer.innerHTML = "";
        fetchData('charity');
    }
    if (e.target.innerText === 'Education') {
        toggleBorderOfCategory(e.target);
        galleryContainer.innerHTML = "";
        fetchData('education');
    }
    e.stopPropagation();
});