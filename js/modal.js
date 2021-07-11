let openButton = document.querySelector('.location__button');
let modal = document.querySelector('.modal');
let arrivalInput = document.querySelector('.arrive-input');
let form = document.querySelector('.login-form');
let departureInput = document.querySelector('.departure-input');
let formLink = document.querySelector('.location__button');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

formLink.removeAttribute('href');

openButton.addEventListener("click", () => {
    modal.classList.toggle('modal-show');
    arrivalInput.focus();
});

window.addEventListener("keydown", (evt) => {
    if (evt.keyCode === 27) {
      if (modal.classList.contains('modal-show')) {
        evt.preventDefault();
        modal.classList.remove('modal-show');
        modal.classList.remove('modal-error');
      }
    }
});

form.addEventListener("submit", (evt) => {
  if (!arrivalInput.value || !departureInput.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", arrivalInput.value);
      localStorage.setItem("departion", departureInput.value);
    }
  }
});