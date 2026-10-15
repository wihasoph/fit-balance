# FitBalance

FitBalance is a responsive fitness-club website with Home, Services, About Us,
and Contact pages. The project is in [`group project/`](./group%20project/).

**Live site:** https://fit-balance-omega.vercel.app/index.html

## Forms

- **Home contact form** (`group project/index.html`): Name, Email, and Message.
  HTML constraint validation requires a name of at least 2 characters, a valid
  email address, and a message of 10–500 characters. Bootstrap 5.3 validation
  feedback is shown after submission. Successful submission is a local demo;
  no information is sent or stored.
- **Services registration form** (`group project/services.html`): required first
  and last names, email, password, confirmation, and country; optional gender
  and hobbies. Passwords must match. Submit validates the form, while Reset
  clears its values and feedback. This form is also a local demo and does not
  send or store information.

## Testing

Run the site from the `group project/` directory with any static HTTP server,
then open `index.html` and `services.html`. The table below is a manual test
checklist. Browser interaction was not completed in this work session, so its
actual-results column is deliberately marked as not run rather than reporting
unverified outcomes.

| Form | Test | Expected result | Actual result |
| --- | --- | --- | --- |
| Contact | Submit all fields empty | Required-field feedback appears; submission is blocked | Not run |
| Contact | Enter an invalid email | Email feedback appears; submission is blocked | Not run |
| Contact | Enter a one-character name | Name feedback appears because `minlength="2"` is not met | Not run |
| Contact | Enter a 9-character message | Message feedback appears because `minlength="10"` is not met | Not run |
| Contact | Attempt to enter over 500 message characters | Input is capped at 500 by `maxlength`; 500 characters are valid | Not run |
| Contact | Correct invalid values and submit valid values | Invalid feedback clears; demo success status appears | Not run |
| Registration | Submit with required fields empty | Required-field feedback appears; submission is blocked | Not run |
| Registration | Enter an invalid email or short password | Field validation feedback appears; submission is blocked | Not run |
| Registration | Enter different password and confirmation values | Confirmation feedback appears; submission is blocked | Not run |
| Registration | Correct the confirmation and complete required fields | Password error clears; demo success status appears | Not run |
| Registration | Select Reset after entering values | Fields, validation feedback, and status are cleared | Not run |
| Both | Use at desktop and mobile viewport widths | Forms remain readable and controls fit the viewport | Not run |

The feedback is recalculated as users edit values after an invalid submission;
correcting a field removes its invalid state without requiring a page reload.
Valid/invalid screenshots are not included; capture them after completing the
manual browser checks above.
