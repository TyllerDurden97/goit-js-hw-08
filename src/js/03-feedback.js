
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const textArea = document.getElementsByName("message");

//----Отримання посилань різними методами, просто, щоб не забувати варіанти------
const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
fillDataInput()

form.addEventListener('input', throttle(storeFormData, 500));
form.addEventListener('submit', handleSubmit);

function storeFormData() {

   const storedData = {
      email: emailInput.value,
      message: textArea[0].value
   };
   localStorage.setItem("feedback-form-state", JSON.stringify(storedData));
}

function handleSubmit(event) {
   event.preventDefault();
   console.log(savedData);
   form.reset();
   localStorage.removeItem("feedback-form-state");
}

function fillDataInput() {
   if (savedData) {
      emailInput.value = savedData.email;
      textArea[0].value = savedData.message;
   }
}

