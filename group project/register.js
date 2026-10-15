const registrationForm = document.querySelector("#registration-form");

if (registrationForm) {
  const password = registrationForm.querySelector("#password");
  const confirmPassword = registrationForm.querySelector("#confirm-password");
  const status = registrationForm.querySelector("#registration-status");

  const validatePasswordMatch = () => {
    confirmPassword.setCustomValidity(
      confirmPassword.value && confirmPassword.value !== password.value
        ? "Passwords do not match."
        : "",
    );
  };

  password.addEventListener("input", validatePasswordMatch);
  confirmPassword.addEventListener("input", validatePasswordMatch);

  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    validatePasswordMatch();
    registrationForm.classList.add("was-validated");
    status.hidden = true;
    status.textContent = "";

    if (!registrationForm.checkValidity()) {
      registrationForm.querySelector(":invalid")?.focus();
      return;
    }

    status.textContent = "Registration details are valid. This demo does not send or store information.";
    status.hidden = false;
  });

  registrationForm.addEventListener("reset", () => {
    confirmPassword.setCustomValidity("");
    registrationForm.classList.remove("was-validated");
    status.hidden = true;
    status.textContent = "";
  });
}
