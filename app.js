const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const errorMsg = document.querySelector('.error-msg');

// Source - https://stackoverflow.com/a/46181
// Posted by John Rutherford, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-28, License - CC BY-SA 4.0

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
    
})

function setError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.remove('hidden');
    emailInput.classList.add('error');
}

function successState() {
    errorMsg.classList.add('hidden');
    emailInput.classList.remove('error')
}

function validateInput() {
    const emailValue = emailInput.value.trim();

    if(emailValue === "") {
        setError("Whoops! It looks like you forgot to add your email")

    } else if(!validateEmail(emailValue)){
        setError("Whoops! Please enter a valid email")
    } else {
        successState();
    }
}