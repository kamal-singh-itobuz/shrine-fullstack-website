function videoListHelper(data, container, index){
    const card = document.createElement('div');
    index === 3 ? card.setAttribute('class', 'col-12 col-sm-12 col-lg-8') : card.setAttribute('class', 'col-12 col-sm-6 col-lg-4');
    // card.setAttribute('class', 'col-12 col-sm-6 col-lg-4');
    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('class', 'mb-3');
    const image = document.createElement('img');
    image.setAttribute('src', data.url);
    image.setAttribute('alt', data.altText);
    image.setAttribute('class', 'w-100');
    imageDiv.append(image);
    const cardTitle = document.createElement('h5');
    cardTitle.innerText = data.title;
    card.append(imageDiv, cardTitle);
    container.append(card);
}
export {videoListHelper};