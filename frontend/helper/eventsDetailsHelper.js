import { eventsCardsHelper } from "./eventsHelper.js";

function createScheduleAndCategory(schedule, data) {
    const container = document.createElement('div');
    container.setAttribute('class', 'd-flex align-items-center gap-2');
    const icon = document.createElement('img');
    icon.setAttribute('src', data.iconUrl);
    icon.setAttribute('alt', data.iconAlt);
    const text = document.createElement('p');
    text.setAttribute('class', 'mb-0');
    text.innerText = data.value;
    container.append(icon, text);
    schedule.append(container);
}

function mainContainerHelper(data, heroContainer, currentEventContainer) {
    const heroHeading = document.createElement('h2');
    heroHeading.setAttribute('class', 'hero-section-heading');
    heroHeading.innerText = data.mainHeading;
    const heroText = document.createElement('p');
    heroText.innerText = data.mainContent;
    heroContainer.append(heroHeading, heroText);

    const eventImageDiv = document.createElement('div');
    const eventImage = document.createElement('img');
    eventImage.setAttribute('src', data.imgUrl);
    eventImage.setAttribute('alt', 'Current Event Image');
    eventImage.setAttribute('class', 'w-100');
    eventImageDiv.append(eventImage);
    
    const currentEventTitle = document.createElement('h2');
    currentEventTitle.innerText = data.title;
    const scheduleContainer = document.createElement('div');
    scheduleContainer.setAttribute('class', 'd-flex flex-column gap-3');
    data.schedule.forEach(element => {
        createScheduleAndCategory(scheduleContainer, element);
    });

    const bookNowButton = document.createElement('button');
    bookNowButton.role = "button";
    bookNowButton.innerText = data.buttonText;
    bookNowButton.setAttribute('class', 'event-book-button');

    const eventPointOne = document.createElement('p');
    eventPointOne.innerText = data.detailPointOne;
    const eventPointsList = document.createElement('ol');
    data.listOfPoints.forEach(lst => {
        const listItem = document.createElement('li');
        listItem.innerText = lst;
        eventPointsList.append(listItem);
    })
    const eventPointTwo = document.createElement('p');
    eventPointTwo.innerText = data.detailPointTwo;

    currentEventContainer.append(eventImageDiv, currentEventTitle, scheduleContainer, bookNowButton, eventPointOne, eventPointsList, eventPointTwo);
}

function sidebarHelper(data, container) {
    //category
    const categoryContainer = document.createElement('div');
    categoryContainer.setAttribute('class', 'border rounded-2 px-1 px-sm-4 px-lg-2 py-3');
    const categoryHeading = document.createElement('h5');
    categoryHeading.innerText = "Event Categories";
    const categories = document.createElement('div');
    categories.setAttribute('class', 'mt-3 d-flex flex-column gap-3');
    data.eventsCategoryiesData.forEach(element => createScheduleAndCategory(categories, {iconUrl: "../images/eventDetailsPage/category-icon.svg", iconAlt: "Category Folder", value: element}));
    categoryContainer.append(categoryHeading, categories);

    // Feature Event
    const featureEventContainer = document.createElement('div');
    featureEventContainer.setAttribute('class', 'border rounded-2 px-1 px-sm-4 px-lg-2 py-3');
    const eventObj = {
        eventDetailsPage: true,
        imgUrl: data.imgUrl,
        altText: "Feature Event Card",
        time: data.fullDate,
        place: data.place,
        title: data.title,
        date: "",
        content: ""
    }
    eventsCardsHelper(eventObj, featureEventContainer);

    // TAGS
    const tagsContainer = document.createElement('div');
    tagsContainer.setAttribute('class', 'border rounded-2 px-1 px-sm-4 px-lg-2 py-3');
    const tagsHeading = document.createElement('h5');
    tagsHeading.innerText = "Tags";
    const tagsDiv = document.createElement('div');
    tagsDiv.setAttribute('class', 'd-flex gap-2 flex-wrap');
    data.allTagsData.forEach(tag => {
        const tagButton = document.createElement('button');
        tagButton.setAttribute('class', 'border rounded-1 px-2 py-1 bg-white');
        tagButton.innerText = tag;
        tagsDiv.append(tagButton);
    });
    tagsContainer.append(tagsHeading, tagsDiv);

    container.append(categoryContainer, featureEventContainer, tagsContainer);
}

export {mainContainerHelper, sidebarHelper};