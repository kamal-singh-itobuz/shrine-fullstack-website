function createCategoriesFunction(categoryName, container) {
    const categoryButton = document.createElement('button');
    categoryButton.setAttribute('role', 'button');
    if (categoryName === 'All') categoryButton.setAttribute('class', 'category-all-button');
    categoryButton.innerText = categoryName;
    container.append(categoryButton);
}

function createGalleryFunction(data, container) {
    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('class', 'col-12 col-md-6 col-lg-4 p-1 p-md-2');
    const image = document.createElement('img');
    image.setAttribute('src', data.imgUrl);
    image.setAttribute('alt', data.imgAlt);
    image.setAttribute('class', 'w-100');
    imageDiv.append(image);
    container.append(imageDiv);
}

export { createCategoriesFunction, createGalleryFunction };