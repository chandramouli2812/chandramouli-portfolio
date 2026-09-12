# Chandramouli Garikina — Portfolio

A single-page portfolio built with plain HTML, CSS, and a small bit of JS — no build step, no framework, so it hosts directly on GitHub Pages.

## Before you publish

1. Open `index.html` and replace the two placeholder links (search for `data-fill`):
   - `data-fill="github"` → your GitHub profile URL
   - `data-fill="linkedin"` → your LinkedIn profile URL
2. Double check the email and phone number in the hero and contact section are the ones you want public.

## Host it on GitHub Pages

1. Create a new repository on GitHub (e.g. `chandramouli-portfolio`). Don't initialize it with a README — you already have one here.
2. From this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. On GitHub, go to the repo's **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
6. GitHub will publish it at `https://<your-username>.github.io/<your-repo>/` within a minute or two — refresh the Pages settings page to get the exact link.

### If you'd rather use `<username>.github.io` as the URL

Name the repository exactly `<your-username>.github.io` and push this same content to it — GitHub will serve it at the root of that domain automatically, no extra Pages settings needed.

## Local preview

Just open `index.html` in a browser, or serve it locally:
```bash
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Files

- `index.html` — content and structure
- `style.css` — all styling (dark theme, one accent color, monospace hero treatment)
- `script.js` — scroll-spy nav highlighting only; no tracking, no dependencies
