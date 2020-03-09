const gallaryButton = document.getElementById('button-gallary');
const gallaryBox = document.querySelector('.gallery__box');

gallaryButton.addEventListener('click', (e) => {
    gallaryBox.classList.toggle('gallery__box--active');
    gallaryButton.classList.toggle('button-link--active')
});