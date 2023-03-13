
const form = document.querySelector('.feedback-form');

const emailInput = document.querySelector('.feedback-form input');
const button = form.lastElementChild;
const textArea = document.getElementsByName("message");

//----Отримання посилань різними методами, просто, щоб не забувати варіанти------

const SAVED_DATA = 

form.addEventListener('input', storeFormData);

function storeFormData(event) {

   const storedData = {
      email: emailInput.value,
      message: textArea[0].value
   };
   localStorage.setItem("feedback-form-state", JSON.stringify(storedData));

   const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));

// console.log(savedData.email, savedData.message);

}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
      event.preventDefault();

}


