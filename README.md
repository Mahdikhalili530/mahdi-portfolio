# Mahdi Khalili — Editable Portfolio

This is a simple, editable portfolio website built with plain HTML, CSS and JavaScript.

## Quick start
1. Open `index.html` in your browser.
2. Edit `data.js` to change your name, bio, skills, education, experience, projects and contact details.
3. Edit `styles.css` to change the design.
4. Replace `assets/images/profile.jpg` when you get a new professional photo.
5. Replace `assets/docs/Mahdi_Khalili_CV.pdf` whenever your CV changes.

## Turn the photo off
In `data.js`:
```js
showProfilePhoto: false
```
The site will automatically display a geospatial-style placeholder instead.

## Add a project
Copy one object inside the `projects` array in `data.js` and change:
- title
- category
- year
- institution
- description
- tools
- image
- live
- github

## Add project screenshots
Place images in:
`assets/images/projects/`

Then use:
```js
image: "assets/images/projects/my-project.jpg"
```

## Deployment
### Vercel
- Create a new Vercel project.
- Upload/import this folder or connect the GitHub repository.
- No framework configuration is required for a static site.

### GitHub Pages
This project also works directly on GitHub Pages.

## Important
The current profile image is only a temporary placeholder and can be changed at any time.


## Version 2 changes
- Navigation now works like separate app pages: Home, About, Resume, Portfolio, Certifications and Contact open one at a time.
- Project cards can open a LinkedIn project post.
- The portfolio uses `linkedinPost` as the first-choice project destination, then falls back to `live`, then `github`.
- Footer redesigned into a professional four-column layout.
- Visual styling upgraded with a stronger hero, improved spacing, cards, animations and project interactions.

## Link a project to LinkedIn
Open `data.js`, find the project, and add your real LinkedIn post URL:

```js
linkedinPost: "https://www.linkedin.com/posts/..."
```

When a visitor clicks anywhere on that project card, the LinkedIn post opens in a new tab.

If `linkedinPost` is empty, the card opens the Live Demo instead (if available).


## Version 3 — Glass UI
- Main navigation is now a floating glass navigation bar.
- Each page opens inside a translucent glass-like panel.
- Cards, footer, contact form and hero use glassmorphism with blur/transparency.
- Project cards are now LinkedIn-first.
- If a project does not yet have a LinkedIn post URL, clicking it opens a glass modal explaining that the link still needs to be connected.
- The modal still gives access to your LinkedIn profile, Live Demo and GitHub when available.

### IMPORTANT: To open the exact LinkedIn post
A website cannot guess the post URL. You must paste the exact post URL for each project into `data.js`:

```js
linkedinPost: "https://www.linkedin.com/posts/..."
```

After that, clicking the project card opens that exact LinkedIn post directly.


## Version 4 — Exact LinkedIn project posts

The Digital Twin project is now connected to this exact LinkedIn post:

https://www.linkedin.com/posts/mahdi-khalili-37954631b_digitaltwin-gis-webgis-activity-7474380587638669313-qjuN

Project cards no longer fall back to the general LinkedIn profile.

For every other project, add the exact LinkedIn post URL:

```js
linkedinPost: "https://www.linkedin.com/posts/..."
```

### LinkedIn project images

Each project now also supports:

```js
linkedinImage: "assets/images/projects/my-linkedin-post-image.jpg"
```

Use the image that appears in the LinkedIn post. Save a copy of that image in
`assets/images/projects/` and point `linkedinImage` to it.

The image priority is:
1. `linkedinImage`
2. `image`
3. category placeholder


## Version 5 — Real project imagery and exact project links

Three real project cover images have been added from the materials supplied by Mahdi:
- Digital Twin / 3D City Model
- Urban Ecosystem Services / Green Spaces
- Photogrammetry / Trimble Business Center

The three LinkedIn short links supplied by Mahdi are mapped in the same order they were provided:
1. Digital Twin → `https://lnkd.in/p/derCNGGj`
2. Urban Green Spaces → `https://lnkd.in/p/dvn2Gswk`
3. Photogrammetry → `https://lnkd.in/p/dS7PS7aj`

These short links are expected to redirect to the exact LinkedIn project posts.

The hero now uses the Digital Twin project image as a subtle geospatial background and keeps the portrait inside a polished glass/gradient treatment.

Real certificate/activity images were also added:
- TOEFL iBT score
- German course certificate
- Balkh University student committee appreciation
- HFT academic/community activity photo


## Version 7 — Design-only update

This version intentionally keeps the existing:
- content
- project images
- LinkedIn project links
- live project links
- certificates and document images
- CV
- contact details
- navigation behavior
- glass page behavior
- project logic

Only the visual design was changed.

The new style follows the supplied reference direction:
- darker navy/blue GIS background
- emerald/teal accent
- premium glass panels
- stronger hero contrast
- blue-green geospatial lighting
- refined buttons and project cards
- cinematic project imagery
- professional footer styling

## Version 9 — Clean professional version
This version keeps all existing content and functionality but simplifies the design:
- fully visible toolbar
- cleaner navy/green visual system
- less visual noise
- calmer glass panels
- simpler hero
- cleaner project cards
- more readable footer

## Version 13
### Contact form
The form now sends directly from the page using FormSubmit's AJAX endpoint, so the visitor's Gmail/Outlook app does not open.

IMPORTANT: FormSubmit normally sends a one-time activation email to the portfolio owner the first time the endpoint is used. Mahdi must confirm that email once. After activation, future form submissions are delivered directly.

### Articles & Certifications
The previous generic academic activity entry was replaced with two real LinkedIn-post cards:
1. Photogrammetry Project — Academic & Industry Collaboration
2. Geospatial Community & Project Presentation

Both cards use the supplied photos and open their specific LinkedIn URLs.
