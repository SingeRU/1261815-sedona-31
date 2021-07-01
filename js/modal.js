let openButton = document.querySelector('.location__button');
let modal = document.querySelector('.modal');
let arrivalInput = document.querySelector('.arrive-input')

modal.classList.remove('modal--nojs');

openButton.addEventListener("click", () => {
    modal.classList.toggle('modal-show');
    arrivalInput.focus();
});

window.addEventListener("keydown", (evt) => {
    if (evt.keyCode === 27) {
      if (modal.classList.contains("modal-show")) {
        evt.preventDefault();
        modal.classList.remove("modal-show");
      }
    }
});