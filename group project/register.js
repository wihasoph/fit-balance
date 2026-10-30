$(function () {
  const $form = $("#registration-form");

  if (!$form.length) {
    return;
  }

  const $password = $("#password");
  const $confirmPassword = $("#confirm-password");
  const $status = $("#registration-status");

  function validateFields() {
    $("#first-name, #last-name").each(function () {
      const value = $(this).val().trim();
      this.setCustomValidity(value.length < 2 ? "Enter at least 2 characters." : "");
    });

    $confirmPassword[0].setCustomValidity(
      $confirmPassword.val() && $confirmPassword.val() !== $password.val()
        ? "Passwords do not match."
        : "",
    );
  }

  $form.on("input change", "input, select", validateFields);

  $form.on("submit", function (event) {
    event.preventDefault();
    validateFields();
    $form.addClass("was-validated");
    $status.prop("hidden", true).text("");

    if (!$form[0].checkValidity()) {
      $form.find(":invalid").first().trigger("focus");
      return;
    }

    $status
      .text("Registration details are valid. This demo does not send or store information.")
      .prop("hidden", false);
  });

  $form.on("reset", function () {
    window.setTimeout(function () {
      $confirmPassword[0].setCustomValidity("");
      $form.removeClass("was-validated");
      $status.prop("hidden", true).text("");
    });
  });
});
