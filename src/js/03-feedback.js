
const form = document.querySelector('.feedback-form');
const emailInput = document.getElementsByName("email");
const button = form.lastElementChild;
const textArea = document.getElementsByName("message");
console.dir(emailInput);
console.log(emailInput.value);



emailInput.addEventListener('input', storeFormData);

function storeFormData(event) {

   // const storedData = {};
   // storedData.email = emailInput.currentTarget.value;

console.dir(event);

}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
      event.preventDefault();

}
