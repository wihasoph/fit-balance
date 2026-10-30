 # FitBalance
Live site: https://fit-balance-omega.vercel.app/index.html

The local changes in this repository still need to be redeployed before the live link represents this version.

## Team

Akbope Altynbekova, Sofiya Mishanova, Dayankhan Amanzhol, Aruzhan Kakimzhanova

Group: [Add group number]

## Website and local launch

FitBalance is a fitness and wellness studio website featuring six training programs, coach information, a weekly schedule, a studio gallery, and demonstration-only contact and registration forms.

To run locally, download or clone this repository, open the `group project` folder, and open `index.html` in a browser. The project uses jQuery 3.7.1 from the jQuery CDN and Bootstrap CSS from jsDelivr; an internet connection is needed for those external assets.

## Project structure

| Path | Purpose |
| --- | --- |
| `group project/index.html` | Home page and contact form |
| `group project/services.html` | Program catalogue, category/search filters, and registration |
| `group project/about.html` | Studio and coach information, welcome/theme controls, favourites, and FAQs |
| `group project/contact.html` | Studio gallery, contact details, trial booking form, and FAQs |
| `group project/css/` | Shared and responsive styles |
| `group project/images/` | Website photos and coach images |
| `group project/team-interactions.js` | jQuery welcome, theme, FAQ, catalogue filtering, and favourites |
| `group project/contact.js` | jQuery contact and booking form validation |
| `group project/register.js` | jQuery registration and password validation |
| `screenshots/` | Form and responsive-layout evidence |

## jQuery feature map

| Feature | Page | Main jQuery methods |
| --- | --- | --- |
| Personal welcome and theme toggle | `about.html` | `.on()`, `.val()`, `.text()`, `.toggleClass()` |
| FAQ accordion animation | `about.html` | `.on()`, `.stop()`, `.slideUp()`, `.slideDown()`, `.attr()` |
| Program search and category filtering | `services.html` | `.on()`, `.val()`, `.text()`, `.prop()`, `.addClass()`, `.removeClass()` |
| Add/remove favourite activities | `about.html` | `.on()` delegated handler, `.text()`, `.append()`, `.remove()`, `.fadeIn()`, `.fadeOut()` |
| Contact, booking, and registration validation | `index.html`, `contact.html`, `services.html` | `.on()`, `.val()`, `.text()`, `.prop()`, `.addClass()` |

All form confirmations are frontend demonstrations. The project does not send or store submitted information.

## Team contribution summary

For the report and defence, each member should describe the specific pages, code, tests, and integration work they personally completed. The repository history should be used to support individual contribution claims; do not attribute shared or externally assisted code to a member unless they actually implemented or verified it.

## Test evidence

The following checks were run against the local pages in the integrated Chromium browser on 2026-10-29. Form events were submitted in-browser; they were not sent to a backend. The checks verify frontend behaviour but do not replace the required second-browser test or report screenshots.

| # | Test | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| 1 | About: submit the welcome control with an empty name | A clear prompt appears instead of a personalised greeting | “Please enter your name first.” appeared | Pass |
| 2 | About: toggle the theme twice | Dark theme and matching button label switch on, then return to the original state | Both state and label changed and were restored | Pass |
| 3 | About: use Enter on the first FAQ button twice | Answer opens and closes; `aria-expanded` stays in sync | Expanded changed from true back to false; answer was hidden after the animation | Pass |
| 4 | Services: search for ` PILATES ` with category All | Search ignores case and surrounding spaces | Exactly one program matched | Pass |
| 5 | Services: combine Pilates text with Mobility category, then choose All | Category and search are combined; All removes the category restriction | Combined filters returned 0; All restored the Pilates search result | Pass |
| 6 | Services: search for a nonexistent program | Count becomes 0 and “No results found” appears | Count was 0 and the empty-results message was visible | Pass |
| 7 | About: add then remove a favourite | Delegated remove works; count updates and the empty state returns | Count changed 0 → 1 → 0 and the empty message returned | Pass |
| 8 | About: add text resembling an HTML element to favourites | User text is displayed as text, not interpreted as markup | Text was displayed without creating an image element | Pass |
| 9 | Contact: submit the booking form empty | Field-specific required errors appear, focus moves to the first invalid field, and no success appears | Name, phone, and email errors appeared; focus moved to Full Name | Pass |
| 10 | Contact: enter an invalid email with the other required fields filled | Email error appears; success remains hidden | Email error appeared and the form remained invalid | Pass |
| 11 | Contact: submit valid booking details | A clear frontend-only demonstration confirmation appears | Confirmation appeared; no booking was sent or stored | Pass |
| 12 | Services: submit registration empty, then with mismatched passwords | Invalid fields are identified; the form does not show success | Empty form focused First Name; mismatch focused Confirm Password; no success appeared | Pass |
| 13 | Services: submit valid registration details | Demo confirmation appears only when all required values are valid | Valid registration showed the demo confirmation | Pass |
| 14 | Home: submit the contact form empty and then with valid data | Invalid submission is blocked; valid input receives a demo confirmation | Empty form was invalid; valid input showed the confirmation | Pass |
| 15 | Inspect Home, About, Services, and Contact at 375 px, 768 px, and 1440 px | No horizontal overflow | Document width matched each viewport on all four pages | Pass |

The previous screenshots below document earlier form and layout checks. Capture updated screenshots of the jQuery interactions and final responsive layouts for the report, and run the website in a second browser before submission.

### Previously recorded form and responsive screenshots

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
