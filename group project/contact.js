const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const status = document.querySelector("#contact-form-status");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.classList.add("was-validated");
    status.hidden = true;
    status.textContent = "";

    if (!contactForm.checkValidity()) {
      contactForm.querySelector(":invalid")?.focus();
      return;
    }

    status.textContent = "Thanks for your message! This demo does not send or store information.";
    status.hidden = false;
  });
}
