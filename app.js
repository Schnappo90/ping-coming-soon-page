document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.querySelector("#email");
  const errorMsg = document.querySelector(".error-msg");

  if (!form || !emailInput || !errorMsg) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput();
  });

  function setError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.remove("hidden");
    emailInput.classList.add("error");
  }

  function successState() {
    errorMsg.classList.add("hidden");
    emailInput.classList.remove("error");
  }

  function validateInput() {
    const emailValue = emailInput.value.trim();

    const isValid = emailInput.checkValidity();

    if (emailValue === "") {
      setError("Whoops! It looks like you forgot to add your email");
    } else if (!isValid) {
      setError("Whoops! Please enter a valid email");
    } else {
      successState();
    }
  }
});
