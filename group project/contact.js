$(function () {
  const $contactForm = $("#contact-form");

  function validateContactForm() {
    const name = $("#contact-name").val().trim();
    $("#contact-name")[0].setCustomValidity(
      name.length < 2 ? "Enter at least 2 characters." : "",
    );
    $("#contact-message")[0].setCustomValidity(
      $("#contact-message").val().trim().length < 10
        ? "Enter at least 10 characters."
        : "",
    );
  }

  if ($contactForm.length) {
    const $status = $("#contact-form-status");

    $contactForm.on("input", "input, textarea", validateContactForm);
    $contactForm.on("submit", function (event) {
      event.preventDefault();
      validateContactForm();
      $contactForm.addClass("was-validated");
      $status.prop("hidden", true).text("");

      if (!$contactForm[0].checkValidity()) {
        $contactForm.find(":invalid").first().trigger("focus");
        return;
      }

      $status
        .text("Thanks for your message! This demo does not send or store information.")
        .prop("hidden", false);
    });
  }

  const $bookingForm = $("#booking-form");

  if ($bookingForm.length) {
    const $status = $("#booking-form-status");
    const fieldErrors = {
      fullname: "fullname-error",
      phone: "phone-error",
      email: "email-error",
      training_type: "training-type-error",
      program: "program-error",
    };

    function updateBookingErrors() {
      Object.entries(fieldErrors).forEach(([name, errorId]) => {
        const $field = $bookingForm.find(`[name="${name}"]`);
        if (name === "fullname") {
          $field[0].setCustomValidity("");
        }
        const valid = $field[0].checkValidity() &&
          (name !== "fullname" || $field.val().trim().length >= 2);

        $(`#${errorId}`).prop("hidden", valid);
        $field.attr("aria-invalid", String(!valid));
        if (name === "fullname") {
          $field[0].setCustomValidity(valid ? "" : "Enter at least 2 characters.");
        }
      });
    }

    $bookingForm.on("input change", "input, select", function () {
      updateBookingErrors();
      $status.stop(true, true).hide().text("");
    });

    $bookingForm.on("submit", function (event) {
      event.preventDefault();
      updateBookingErrors();

      const $invalid = $bookingForm.find(":invalid").first();
      if ($invalid.length) {
        $invalid.trigger("focus");
        return;
      }

      $status
        .stop(true, true)
        .text("Your details are valid. This is a demonstration; no booking was sent or stored.")
        .prop("hidden", false)
        .fadeIn(180);
    });
  }
});
