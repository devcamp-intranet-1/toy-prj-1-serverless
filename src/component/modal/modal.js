const openButton = document.querySelector('.modalOpenBtn');
const modal = document.querySelector('.modal');
const closeButton = modal.querySelector('.modal__header > img');
const modalBackground = modal.querySelector('.modal__background');

function displayModal() {
  modal.classList.toggle('modalHidden');
}

openButton.addEventListener('click', displayModal);
closeButton.addEventListener('click', displayModal);
modalBackground.addEventListener('click', displayModal);
