function createMemberCardFunction(data, cardsContainer) {
    const card = document.createElement('div');
    card.setAttribute("class", "col-12 col-sm-6 col-lg-3");
    card.innerHTML =  `<div class="d-flex flex-column gap-2 p-3">
        <div><img class="w-100" src=${data.imgUrl} alt="Lori Vega"></div>
        <div class="d-flex gap-2">
            <div class="your-member-share-icon-container"><img
                    src="./images/homePage/yourMembersSection/share_android.svg" alt="Share icon"></div>
            <div class="vertical-line"></div>
            <div class="d-flex- flex-column gap-2">
                <h5>${data.title}</h5>
                <p>${data.content}</p>
                <div class="your-members-social-icons d-flex gap-2">
                    <img role="button" src="./images/homePage/yourMembersSection/google-icon.svg"
                        alt="google icon">
                    <img role="button" src="./images/homePage/yourMembersSection/instagram.svg"
                        alt="instagram">
                    <img role="button" src="./images/homePage/yourMembersSection/youtube-icon.svg"
                        alt="youtube">
                </div>
            </div>
        </div>
    </div>`
    
    cardsContainer.appendChild(card);
}

function createEventCardFunction(data, cardsContainer) {
    const card = document.createElement('div');
    card.setAttribute("class", "event-card d-flex flex-column flex-sm-row gap-4 flex-shrink-0");
    card.innerHTML = `
    <div class="event-card-image">
        <img src=${data.imgUrl} alt="meditation" class="w-100 h-100" />
    </div>
    <div class="d-flex flex-column justify-content-around ms-3 ms-sm-0 p-3">
        <div class="d-flex flex-column gap-2 mb-2">
            <div>
                <img src="./images/homePage/allEventsSection/calendar.svg" alt="calendar" />
                <span class="content">${data.date}</span>
            </div>
            <div>
                <img src="./images/homePage/allEventsSection/home.svg" alt="home">
                <span class="content">${data.location}</span>
            </div>
            <div>
                <img src="./images/homePage/allEventsSection/time-circle.svg" alt="clock" />
                <span class="content">${data.time}</span>
            </div>
        </div>
        <h4 class="cardHeading">${data.title}</h4>
        <p class="card-text content">${data.content}</p>
        <button class="all-events-join-now-button">${data.button}</button>
    </div>
    `
    cardsContainer.appendChild(card);
}

function createArticleCardFunction(data, cardsContainer) {
    const card = document.createElement('div');
    card.setAttribute("class", "article-card flex-shrink-0");
    card.innerHTML = `
    <img src=${data.imgUrl} class="card-img-top" alt="baptism">
    <div class="article-card-body p-3">
        <h4 class="card-title cardHeading">${data.title}</h4>
        <p class="card-text content">${data.content}</p>
        <div>
            <img src=${data.userImgUrl} alt="girl">
            <span class="content">${data.readTime}</span>
        </div>
    </div>
    `
    cardsContainer.appendChild(card);
}

function createSatisfactionCardFunction(data, cardsContainer) {
    const container = document.createElement('div');
    container.setAttribute('class', 'col-12 col-sm-6 col-lg-3');
    const innerContainer = document.createElement('div');
    innerContainer.setAttribute('class', 'p-2 satisfaction-card d-flex flex-column align-items-center gap-2');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('src', data.imgUrl);
    image.setAttribute('alt', data.title);
    imageContainer.append(image);
    const heading = document.createElement('h5');
    heading.innerText = data.title;
    const content = document.createElement('p');
    content.innerText = data.content;
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
    cardsContainer.appendChild(container);
}

export {createSatisfactionCardFunction, createMemberCardFunction, createEventCardFunction, createArticleCardFunction};