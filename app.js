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
    if(emailInput.value === ""){
        errorMsg.textContent = "Whoops! It looks like you forgot to add your email"
        errorMsg.classList.remove('hidden');
        return
    }
    if(!validateEmail(emailInput.value)) {
        errorMsg.textContent = "Whoops! Please enter a valid email"
        errorMsg.classList.remove('hidden');
        return
    } 
    errorMsg.classList.add('hidden');
    console.log('submitted')
    
})