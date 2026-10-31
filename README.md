# FitBalance

- **Website:** Fitness and wellness studio
- **Team:** Akbope Altynbekova, Sofiya Mishanova, Dayankhan Amanzhol, Aruzhan Kakimzhanova
- **Group:** [Add group number]
- **Live website:** https://fit-balance-omega.vercel.app/index.html
- **Repository:** https://github.com/wihasoph/fit-balance

FitBalance presents six training programs, coaches, a weekly schedule, studio information, and demonstration-only contact and registration forms. Forms do not send or store information.

## Run locally

Open `group project/index.html` in a browser. An internet connection is required for jQuery and Bootstrap CSS loaded from their CDNs.

## Project structure

| Path | Purpose |
| --- | --- |
| `group project/index.html` | Home page and contact form |
| `group project/services.html` | Program catalogue and registration |
| `group project/about.html` | Studio, coaches, FAQs, and favourites |
| `group project/contact.html` | Gallery, contact details, and booking form |
| `group project/css/` | Shared and responsive styles |
| `group project/images/` | Website and coach images |
| `group project/team-interactions.js` | Welcome, theme, FAQ, filters, and favourites |
| `group project/contact.js` | Contact and booking form validation |
| `group project/register.js` | Registration and password validation |

## jQuery features

| Feature | Page |
| --- | --- |
| Welcome message and theme toggle | About |
| Animated FAQ and favourites list | About |
| Program search and category filters | Services |
| Contact, booking, and registration validation | Home, Contact, Services |

## Test results

Local browser checks, 29 October 2026. Form submissions were tested in-browser only.

| # | Test | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| 1 | About: welcome with empty name | Prompt appears | “Please enter your name first.” appeared | Pass |
| 2 | About: toggle theme twice | Theme and button label switch and restore | Theme and label changed and were restored | Pass |
| 3 | About: press Enter twice on an FAQ button | Answer opens and closes; `aria-expanded` updates | Answer opened and closed; state updated | Pass |
| 4 | Services: search ` PILATES ` | Case and surrounding spaces are ignored | One program matched | Pass |
| 5 | Services: combine Pilates query with Mobility category | Search and category combine | No programs matched | Pass |
| 6 | Services: select All with Pilates query | Category restriction clears | Pilates result appeared | Pass |
| 7 | Services: search for a nonexistent program | Zero count and “No results found” appear | Both appeared | Pass |
| 8 | About: add then remove a favourite | Count updates and empty state returns | Count changed 0 → 1 → 0; empty state returned | Pass |
| 9 | About: add text resembling HTML | Input appears as text, not markup | Text appeared without creating an HTML element | Pass |
| 10 | Contact: submit empty booking form | Field errors appear; no success message | Required errors appeared; focus moved to Full Name | Pass |
| 11 | Contact: submit booking with invalid email | Email error appears; no success message | Email error appeared; form remained invalid | Pass |
| 12 | Contact: submit valid booking details | Demo confirmation appears | Confirmation appeared; no data was sent or stored | Pass |
| 13 | Services: submit empty registration | Invalid required field is focused | First Name was focused | Pass |
| 14 | Services: submit mismatched passwords | Error appears; no success message | Confirm Password was focused; no success appeared | Pass |
| 15 | Services: submit valid registration | Demo confirmation appears | Confirmation appeared | Pass |
| 16 | Home: submit contact form empty, then valid | Invalid submission is blocked; valid data shows demo confirmation | Both behaviours occurred | Pass |
| 17 | Home, About, Services, Contact at 375, 768, 1440 px | No horizontal overflow | No overflow at tested widths | Pass |

The checks were run in one browser. Test in a second browser and capture updated screenshots of the interactions before submission. Confirm that the live deployment reflects the latest repository version.
