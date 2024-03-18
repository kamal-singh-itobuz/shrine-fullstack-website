function createHeroFunction(data, container) {
    const image = document.createElement('img');
    image.setAttribute('src', data);
    image.setAttribute('alt', 'Hero Image');
    image.setAttribute('class', 'w-100');
    container.append(image);
}

function createMembersFunction(data, cardsContainer) {
    const card = document.createElement('div');
    card.setAttribute("class", "col-12 col-sm-6 col-lg-4");
    card.innerHTML =  `<div class="d-flex flex-column gap-2">
        <div><img class="w-100" src=${data.imgUrl} alt="Lori Vega"></div>
        <div class="d-flex gap-2">
            <div class="your-member-share-icon-container">
                <img src="../images/pastorPage/members/share-black.svg" alt="Share icon">
                <img src="../images/pastorPage/members/share-white.svg" alt="Share icon">
            </div>
            <div class="vertical-line"></div>
            <div class="d-flex- flex-column gap-2">
                <h5>${data.name}</h5>
                <p>${data.content}</p>
                <div class="your-members-social-icons d-flex gap-2">
                    <img role="button" src="../images/pastorPage/members/google-icon.svg"
                        alt="google icon">
                    <img role="button" src="../images/pastorPage/members/instagram.svg"
                        alt="instagram">
                    <img role="button" src="../images/pastorPage/members/youtube-icon.svg"
                        alt="youtube">
                </div>
            </div>
        </div>
    </div>`
    
    cardsContainer.appendChild(card);
}

export {createHeroFunction, createMembersFunction};