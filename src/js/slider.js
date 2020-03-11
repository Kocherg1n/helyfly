const gallaryButton = document.getElementById('button-gallary');
const gallaryBox = document.querySelector('.gallery__box');
const mapSlider = document.querySelector('.modal-map__list');
const clientWidth = window.innerWidth;


// show all foto
gallaryButton.addEventListener('click', (e) => {
    gallaryBox.classList.toggle('gallery__box--active');
    gallaryButton.classList.toggle('button-link--active');
});


// Init slider-gallary
$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        easing: 'ease',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 300,
    });
});


// slider-gallery, slider-map  (show / hide)
clientWidth <= 480 ? gallaryBox.classList.add('slider') : gallaryBox.classList.remove('slider');
clientWidth <= 480 ? mapSlider.classList.add('slider-map') : mapSlider.classList.remove('slider-map');

if (clientWidth <= 480) {
    document.querySelector('.map__content').style.height = 1000 + 'px';
}


// Init slider-map
$(document).ready(function () {
    $('.slider-map').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        easing: 'ease',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 300,
    });
});


// adaptive, moving elements
if (clientWidth <= 768) {
    $('.service__description>h2').prependTo($('.service'));
}
if (clientWidth <= 480) {
    $('.modal-map__list>.modal-map__item--slider').appendTo($('.modal-map'));
}


// reviews (show / hide)
const reviewsListLength = $('.reviews__item').length;
const reviewsList = $('.reviews__list');
const reviewsButton = $('#button-reviews');
$(reviewsButton).text(`Показать все ( ${reviewsListLength} )`);


$(reviewsButton).on('click', () => {
    $(reviewsList).toggleClass('reviews__list--active');
    $(reviewsButton).toggleClass('button-link--active');

    if (reviewsList.hasClass('reviews__list--active')) {
        $(reviewsButton).text(`Скрыть`);
    } else {
        $(reviewsButton).text(`Показать все ( ${reviewsListLength} )`);
    }
});


//description (show / hide)
const descButton = $('#description__button-first');
const descText = $('.description__text-main-first');


$(descButton).on('click', () => {
    $(descText).slideToggle(300);
});


const descButtonSecond = $('#description__button-second');
const descTextSecond = $('.description__text-main-second');


$(descButtonSecond).on('click', () => {
    $(descTextSecond).slideToggle(300);
});


