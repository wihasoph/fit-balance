 FitBalance
Live site: https://fit-balance-omega.vercel.app/index.html

 Part 1 — Team website

Overview

Contact Form (`index.html`): Uses HTML5 validation (`required`, `type="email"`, `minlength`, `maxlength`), Bootstrap 5 styling, and JavaScript submission handling.

Registration Form (`services.html`): Includes custom JS password matching, country select, optional gender/hobbies, and a reset function.
Forms & Validation Test Results

| Test Case | Input Data | Expected Result | Actual Result | Screenshot (Invalid/Valid state) |
| --- | --- | --- | --- | --- |
| **Contact: Empty Fields** | All fields empty | Required constraints fail; submit adds `.was-validated`, Bootstrap invalid feedback appears, and submission is prevented. | Pass form invalid; required-field feedback appeared for each field. | [Invalid](./screenshots/contact-empty.png) |
| **Contact: Invalid Email** | Name: `So`; Email: `test@`; Message: `Valid length message` | Email is marked invalid and submit is prevented. | Pass email feedback appeared; `checkValidity()` returned false. | [Invalid](./screenshots/contact-invalid-email.png) |
| **Contact: Message Too Short** | Name: `Sofia`; Email: `sofia@example.com`; Message: `Too short` | Message is marked invalid because it has fewer than 10 characters; submit is prevented. | Pass message feedback appeared; form was invalid. | [Invalid](./screenshots/contact-short-message.png) |
| **Contact: Message Maximum Length** | Enter 500 characters, then try 501 | 500 characters are accepted; input cannot exceed `maxlength="500"`. | Pass 500 characters remained valid; the browser capped the input at 500. | Boundary behavior checked in browser |
| **Register: Empty Required Fields** | Leave all required registration fields empty and submit | Required-field feedback appears and submission is prevented. | Pass required fields were invalid; submission was blocked. | [Invalid](./screenshots/registration-empty.png) |
| **Register: Password Under 8 Characters** | Password: `1234567`; Confirm: `1234567` | Both password fields fail the HTML `minlength="8"` rule; submit is prevented. | Pass both fields were invalid; form was blocked. | [Invalid](./screenshots/registration-short-password.png) |
| **Register: Passwords Do Not Match** | Password: `Password123`; Confirm: `Password321` | JavaScript sets a custom validity error on Confirm Password; submit is prevented and invalid feedback appears. | Pass confirmation was invalid and `#confirm-password-feedback` appeared; form was blocked. | [Invalid](./screenshots/registration-password-mismatch.png) |
| **Register: No Country** | All other required fields valid; Country left on its default option | Required country select is marked invalid; submit is prevented. | Pass country feedback appeared; `checkValidity()` returned false. | [Invalid](./screenshots/registration-no-country.png) |
| **Register: All Valid** | Valid required data; passwords match; Country: Kazakhstan | No errors; demo success status appears. | Pass form was valid and the demo success status appeared. No data was sent or stored. | [Valid](./screenshots/registration-valid.png) |
| **Register: Reset** | Submit mismatched passwords to show errors, then reset | Form values and custom password error clear; `.was-validated` is removed and feedback is hidden. | Pass after reset all fields were empty, custom validity cleared, status hidden, and `.was-validated` removed. | [After reset](./screenshots/registration-reset.png) |
| **Responsive: Desktop and Mobile** | Contact and registration forms at 1440px and 390px viewport widths | Controls use the desktop grid at wide widths, stack vertically on mobile, and do not cause horizontal overflow. | Pass desktop document width was 1440px; at 390px both forms stacked vertically and document width remained 390px. | Desktop: [Contact](./screenshots/contact-valid.png) · [Register](./screenshots/registration-valid.png); mobile: [Contact](./screenshots/contact-mobile.png) · [Register](./screenshots/registration-mobile.png) |
