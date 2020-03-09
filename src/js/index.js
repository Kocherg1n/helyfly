import "./ymaps"
import "./gallery"
import "./player"

const listItems = document.querySelectorAll('.reviews__item');
const reviewsButton = document.getElementById('.button-reviews');
const reviewsButtonInner = document.querySelector('.button__inner');

reviewsButtonInner.innerHTML = listItems.length;

