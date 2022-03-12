const photos = [
    'img-01.jpg',
    'img-02.jpg',
    'img-03.jpg',
    'img-04.jpg',
    'img-05.jpg',
    'img-06.jpg',
    'img-07.jpg',
    'img-08.jpg'
];
let imgIndex = 0;
const sliderImg = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex >= photos.length) {
        imgIndex = 0;
    }
    const imgUrl = photos[imgIndex];
    sliderImg.setAttribute('src', imgUrl)
    imgIndex++
}, 1000)