import "./ymaps"
import "./gallery"
import "./player"
import "./slick.min"
import "./slider"
import "./form"
import "./jquery.maskedinput"


// reviews (show or hide)
const reviewsListLength = $('.reviews__item').length
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


//description (show or hide)
const descButton = $('#description__button-first');
const descText = $('.description__text-main-first')

$(descButton).on('click', () => {
    $(descText).slideToggle(300);
});

const descButtonSecond = $('#description__button-second');
const descTextSecond = $('.description__text-main-second')

$(descButtonSecond).on('click', () => {
    $(descTextSecond).slideToggle(300);
});