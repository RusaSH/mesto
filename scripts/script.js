
const formPopup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__profile-info');
const formEditButton = document.querySelector('.profile__edit-btn');
const formСloseButton = document.querySelector('.popup__close-btn');

const changeName = document.querySelector('.profile__info-name');
const changeJob = document.querySelector('.profile__info-work');

const nameInput = document.querySelector('.popup__info-name');
const jobInput = document.querySelector('.popup__info-work');

// Открытие popup
function openPopup() {
  formPopup.classList.add('popup__opened');
  nameInput.value = changeName.textContent;
  jobInput.value = changeJob.textContent;
}

// Закрытие popup
function closePopup() {
  formPopup.classList.remove('popup__opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  changeName.textContent = nameInput.value;
  changeJob.textContent = jobInput.value;
  closePopup(formPopup);
}

formEditButton.addEventListener('click', openPopup);
formСloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);
