const churchImages = [];
const peopleImages = ['./images/man-one.svg', './images/man-two.svg', './images/lady-one.svg', './images/lady-two.svg'];
const callPriceComponent = () => {
    const callPriceSectionInner = document.createElement('div');
    const callPriceImageContent = document.createElement('div');

    const callPriceJoinUs = document.createElement('div');
    callPriceJoinUs.setAttribute('class', 'call-price-joinus');
    const callPriceJoinUsImages = document.createElement('div');
    peopleImages.forEach(imgURL => {
        const image = document.createElement('img');
        image.setAttribute('src', imgURL);
        image.setAttribute('alt', 'people');
    });

    return callPriceSectionInner;
}

export default callPriceComponent;