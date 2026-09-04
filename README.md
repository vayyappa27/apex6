# Admin Dashboard Web Project

A simple, modern‑looking admin dashboard built with plain HTML, CSS and vanilla JavaScript.  All files are self‑contained – no build step or framework is required, making it trivial to push to GitHub and host on GitHub Pages.

## Directory layout
```
admin_dashboard/
├─ index.html      # landing page / home
├─ admin.html      # admin dashboard page
├─ style.css       # premium UI styling (dark‑mode aware)
├─ script.js       # generic page interactions
├─ admin.js        # admin‑specific interactions
└─ README.md       # (this file)
```

### How to publish to GitHub
1. **Create a new repository** (public or private) on GitHub.
2. **Clone** it locally:
   ```bash
   git clone https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
   cd <REPO_NAME>
   ```
3. **Copy** the `admin_dashboard` folder into the repository root.
4. **Commit** and **push**:
   ```bash
   git add .
   git commit -m "Add admin dashboard UI"
   git push origin main
   ```
5. (Optional) **Enable GitHub Pages** → Settings → Pages → Source: `main` / `/ (root)` → Save.  Your site will be available at `https://<YOUR_USERNAME>.github.io/<REPO_NAME>/admin_dashboard/`.

### Quick demo
Open `admin_dashboard/index.html` in a browser – you’ll see a clean home page with a navigation bar linking to the admin page.  The admin page shows placeholder links that display an alert when clicked.

### Customisation
- Replace the placeholder links in `admin.html` with real routes.
- Extend `admin.js` and `script.js` with your own logic.
- Adjust the colour palette by editing the CSS variables in `style.css`.

Enjoy!
