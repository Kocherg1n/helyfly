// show all foto
const gallaryButton = document.getElementById('button-gallary');
const gallaryBox = document.querySelector('.gallery__box');

gallaryButton.addEventListener('click', (e) => {
    gallaryBox.classList.toggle('gallery__box--active');
    gallaryButton.classList.toggle('button-link--active')
});


// slider added/removed
const clientWidth = window.innerWidth;

clientWidth <= 480 ? gallaryBox.classList.add('slider') : gallaryBox.classList.remove('slider');



