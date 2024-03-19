function ministryCardsHelper(data, container) {
    const card = document.createElement('div');
    card.setAttribute('class', 'col-12 col-sm-6 col-lg-4');
    const cardInnerDiv = document.createElement('div');
    cardInnerDiv.setAttribute('class', 'd-flex flex-column align-items-center p-4 text-center');
    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('class', 'img-bg-circle bg-white d-flex justify-content-center align-items-center');
    const image = document.createElement('img');
    image.src = data.imgUrl;
    image.alt = data.altText;
    imageDiv.append(image);

    const contentContainer = document.createElement('div');
    const title = document.createElement('h4');
    title.innerText = data.title;
    const content = document.createElement('p');
    content.innerText = data.content;
    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class', 'learn-more d-flex justify-content-center gap-1');
    buttonDiv.role = 'button';
    const learnmoreButton = document.createElement('button');
    learnmoreButton.innerText = 'LEARN MORE';
    const rightButton = document.createElement('span');
    rightButton.setAttribute('class', 'ministry-arrow');
    rightButton.innerText = '>';
    buttonDiv.append(learnmoreButton, rightButton);
    contentContainer.append(title, content, buttonDiv);
    cardInnerDiv.append(imageDiv, contentContainer);
    card.append(cardInnerDiv);
    container.append(card);
}

function eventsCardsHelper(data, container) {
    const card = document.createElement('div');
    !data.eventDetailsPage && card.setAttribute('class', 'col-12 col-sm-6 col-lg-4');
    card.innerHTML = `<div class="faithful-hearts events-common border rounded-3">
    <div class="position-relative">
        <img class="w-100" src=${data.imgUrl} alt=${data.altText}>
        <div class="events-calander d-flex justify-content-center align-items-center position-absolute">
            <img role="button" src="../images/eventsPage/events/calendar.svg" alt="calander">
        </div>
    </div>
    <div class="p-3">
        <p class="events-date">${data.date}</p>
        <div class="d-flex justify-content-between">
            <div class="d-flex justify-content-start align-items-start gap-1">
                <img src="../images/eventsPage/events/time-circle.svg" alt="time-circle">
                <p class="event-date">${data.time}</p>
            </div>
            <div class="d-flex justify-content-start align-items-start gap-1">
                <img src="../images/eventsPage/events/location.svg" alt="location">
                <p class="event-place">${data.place}</p>
            </div>
        </div>
        <h4>${data.title}</h4>
        <p>${data.content}</p>
        <button class="event-join-button">JOIN NOW</button>
    </div>
</div>`;
    container.append(card);
}

export { ministryCardsHelper, eventsCardsHelper };