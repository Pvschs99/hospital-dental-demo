# Incisors Dental Care — Static Website

Pure HTML/CSS website. No build step, no dependencies.

## Files

- `index.html` — Home (entry point)
- `about.html` — About the clinic
- `services.html` — Services we offer
- `doctor.html` — Doctor profile
- `reviews.html` — Patient reviews
- `appointment.html` — Booking form (UI only)
- `contact.html` — Contact form + map
- `styles.css` — Shared stylesheet
- `assets/` — Images

## Run locally

Open `index.html` in any browser, or serve with:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select branch `main` (or `master`) and folder `/ (root)`.
4. Save. Your site will be live at `https://<username>.github.io/<repo>/` within a minute.

`index.html` is the entry point — GitHub Pages serves it automatically.

## Update phone / contact details

Search and replace across the `.html` files:
- `+91xxxxxxxxxx` — phone number (E.164 format, used in `tel:` and `wa.me` links)
- `+91 xxxxx xxxxx` — phone number (display format)
- `hello@incisors-dental.com` — email address
- `Abc Street, Suite 4` — address line
