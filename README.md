# Depixel Coming Soon

Static GitHub Pages-ready landing page for **depixel.in**.

## Files
- `index.html` — landing page markup
- `styles.css` — fully responsive design system and layout
- `script.js` — mobile navigation + static email CTA
- `assets/depixel-logo.png` — brand wordmark extracted from the approved brand board
- `assets/hero-cubes.jpg` — hero artwork from the approved landing-page direction
- `assets/favicon.png`, `icon-192.png`, `icon-512.png` — favicon/PWA assets
- `assets/og-image.jpg` — social-sharing preview
- `design-reference.png` — approved visual reference used to sync the HTML/CSS implementation
- `CNAME` — GitHub Pages custom domain (`depixel.in`)

## Deploy to GitHub Pages
1. Create a new repository and upload all files in this folder to the repository root.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. GitHub Pages will use the included `CNAME` for `depixel.in`.
6. Configure the required GitHub Pages DNS records with your domain provider, then enable **Enforce HTTPS** when GitHub confirms the domain.

## Contact details included
- Praful Desai
- 9173010672
- contact@depixel.in

No physical location is included.

## Notify form
Because GitHub Pages is static, the **Notify Me** form currently opens the visitor's email application with a pre-filled request addressed to `contact@depixel.in`. This keeps the page backend-free. When you are ready, replace this handler with your preferred form/API provider.
