const form = document.getElementById('form');
const button = form.querySelector('.form__button');
const buttonAbout = document.querySelector('.about__button');
const buttonClose = document.querySelector('.overlay__close');

buttonAbout.addEventListener('click', (e) => {
   document.querySelector('.overlay').classList.add('overlay--open');
   // document.body.style.overflow = 'hidden';
});

buttonClose.addEventListener('click', (e) => {
    document.querySelector('.overlay').classList.remove('overlay--open');
    // document.body.style.overflow = 'visible';

});

// $('.form__card-number').mask("9999 9999 9999 9999");
// $('.form__card-cvv').mask("999");

button.addEventListener('click', function (event) {
    event.preventDefault();
    if (validateForm(form)) {
        var formData = new FormData(form);
        formData.append('to', 'emaill@mail.com');
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://backend');
        xhr.send(formData);
    }
});


function validateForm(form) {

    let valid = true;
    if (!validateField(form.elements.date)) {
        valid = false;
    }
    if (!validateField(form.elements.email)) {
        valid = false;
    }
    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.surname)) {
        valid = false;
    }
    if (!validateField(form.elements.phone)) {
        valid = false;
    }
    if (!validateField(form.elements.card_number)) {
        valid = false;
    }
    if (!validateField(form.elements.card_validity)) {
        valid = false;
    }
    if (!validateField(form.elements.card_cvv)) {
        valid = false;
    }
    if (!form.elements.checkbox.checked) {
        valid = false;
    }
    return valid;
}

function validateField(field) {
    if (!field.checkValidity()) {
        field.style.borderColor = 'red';
        return false
    } else {
        field.style.borderColor = '$border-base';
        return true;
    }
}