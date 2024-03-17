function createHeroFunction(data, container) {
    const image = document.createElement('img');
    image.setAttribute('src', data);
    image.setAttribute('alt', 'Hero Image');
    image.setAttribute('class', 'w-100');
    container.append(image);
}

function createFAQsFunction(data, container) {
    const accordian = document.createElement('div');
    accordian.setAttribute('class', 'accordian-item col-12 col-lg-6');
    accordian.innerHTML = `<h2 class="accordion-header" id="flush-heading${data.serialId}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${data.serialId}" aria-expanded="false" aria-controls="flush-collapse${data.serialId}">
        ${data.title}
        </button>
    </h2>
    <hr/>
    <div id="flush-collapse${data.serialId}" class="accordion-collapse collapse" aria-labelledby="flush-heading${data.serialId}" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">${data.content}</div>
    </div>`;
    container.append(accordian);
}

export { createHeroFunction, createFAQsFunction };