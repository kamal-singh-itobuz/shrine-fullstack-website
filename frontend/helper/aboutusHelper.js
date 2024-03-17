function createAboutusStats(data, container) {
    const card = document.createElement('div');
    card.setAttribute('class', 'col-6 col-md-3 d-flex flex-column gap-1 p-4 justify-content-center');
    const statsValue = document.createElement('h2');
    statsValue.innerText = data.number;
    const statsName = document.createElement('p');
    statsName.innerText = data.text;
    card.append(statsValue, statsName);
    container.append(card);
}

function createWalkingCard(data, container) {
    const card = document.createElement('div');
    card.setAttribute('class', 'walking-card col-12 col-md-4')
    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('class', 'd-flex flex-column justify-content-center p-4 p-md-3 gap-3');
    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'image-container d-flex justify-content-center align-items-center');
    const image = document.createElement('img');
    image.setAttribute('src', data.imgUrl);
    image.setAttribute('alt', data.title);
    imageContainer.append(image);
    const title = document.createElement('h4');
    title.innerText = data.title;
    const content = document.createElement('p');
    content.innerText = data.content;
    innerDiv.append(imageContainer, title, content);
    card.append(innerDiv);
    container.append(card);
}

export {createAboutusStats, createWalkingCard};