# Caius Ruscella - Portfolio Website

Personal portfolio site for Caius Ruscella, Narrative Designer and Game Developer.
Dark-mode cherry blossom aesthetic modeled after the business card brand.

---

## File Structure

```
PortfolioWebsite/
├── index.html                    - Home / landing page
├── game-projects.html            - Game projects listing (grid of cards)
├── narrative-projects.html       - Narrative projects listing (writing samples)
├── css/
│   └── style.css                 - All shared styles (edit here for visual changes)
├── js/
│   └── main.js                   - Mobile nav, falling petals, scroll reveal
├── images/
│   ├── branch.svg                - Cherry blossom branch SVG (decorates all pages)
│   └── [your images go here]     - Drop thumbnails, banners, screenshots here
├── projects/
│   ├── mythbound.html            - Active studio project (Skaldforge)
│   ├── dungeon-of-echoes.html    - 2D roguelike, solo Unity/C#
│   ├── fright-train.html         - Thomas horror game, solo Unity/C#
│   ├── 7-deadly-goats.html       - FIEA/UCF Collegiate Game Jam 2026
│   ├── _GAME-TEMPLATE.html       - Copy this for new game projects
│   └── _NARRATIVE-TEMPLATE.html  - Copy this for new narrative/writing samples
└── README.md                     - This file
```

---

## Design System

### Colors
All defined as CSS variables in `css/style.css` under `:root`.

| Variable | Hex | Used For |
|---|---|---|
| `--bg-primary` | `#0d0608` | Main page background |
| `--bg-secondary` | `#150b0e` | Alt sections, footer |
| `--bg-card` | `#1d1014` | Cards, sidebar panels |
| `--rose` | `#a24957` | Accents, buttons, labels, borders |
| `--pink-light` | `#fbd6db` | Headings, nav logo, card titles |
| `--pink-mid` | `#f2afb8` | Falling petals, tag text, buds |
| `--pink-warm` | `#f5eeea` | Button text, body cream text |
| `--text-primary` | `#f5eeea` | Main readable text |
| `--text-secondary` | `#c4a0aa` | Descriptions, paragraph body |
| `--text-muted` | `#7a5565` | Labels, metadata, placeholders |

These colors come directly from the business card:
- Front light pink (`#fbd6db`) and darker pink (`#f2afb8`)
- Back side warm cream (`#f5eeea`)
- Font/accent color (`#a24957`)

### Fonts
- **Berkshire Swash** - loaded from Google Fonts. Used for the name, page titles, card titles, and headings.
- **Candara** - system font (Windows). Used for all body text, nav links, subtitles, metadata. Fallback stack: Calibri, Trebuchet MS, sans-serif.

### Cherry Blossom Art
`images/branch.svg` is an SVG branch with pink/cream blossoms, modeled after the business card. It appears in:
- Hero sections on every page (bottom-right, 22% opacity)
- Page banners on project pages (bottom-right, 18% opacity)
- Footer (bottom-right, 14% opacity)

To swap the branch art, replace `images/branch.svg`. All pages reference the same file.

### Animations
- **Falling petals** - CSS keyframe animation, spawned by `js/main.js`. Pink petal shapes drift down at random positions. 10 on load, 1 every 2.2 seconds. Subtle - opacity is capped at 0.45.
- **Scroll reveal** - elements with `data-reveal` attribute fade in when scrolled into view. Add `data-delay="1"` through `data-delay="5"` to stagger reveals.

---

## How to Update Content

### Adding images
1. Drop the image into `images/` (for root pages) - use descriptive names like `mythbound-banner.jpg`
2. Find the placeholder comment in the HTML that looks like `<!-- ▼▼▼ REPLACE ... ▼▼▼ -->`
3. Remove the `<div class="...-placeholder">` line
4. Uncomment or add the `<img src="images/your-file.jpg" alt="Description"/>` line

For project pages in the `projects/` folder, image paths use `../images/` (one level up).

Recommended image sizes:
- **Card thumbnails**: 800x450 px (16:9)
- **Project banners**: 1600x600 px minimum
- **Gallery screenshots**: 800x450 px
- **About/headshot**: 600x800 px (portrait)

### Updating text
Search for `▼▼▼ REPLACE` in any HTML file - those are the spots meant to be customized.
Do not change anything between nav tags or the footer unless you want it to change sitewide.

### Updating your LinkedIn URL
It appears in every footer and in `index.html`. Search for `linkedin.com/in/caius-ruscella` and replace with your actual profile URL.

### Adding your resume PDF
1. Drop the PDF into a `resume/` folder (create it in the root)
2. In `index.html`, the resume button href is already set to `resume/Caius-Ruscella-Resume.pdf` - just match that filename

---

## Adding a New Game Project

1. Copy `projects/_GAME-TEMPLATE.html` and rename it (e.g. `projects/my-new-game.html`)
2. Open the copy and fill in every `▼▼▼ REPLACE` section
3. Add a card block to `game-projects.html` - there is a commented-out example card at the bottom of the grid section showing exactly what to paste
4. Add your thumbnail image to `images/`

## Adding a New Narrative Project / Writing Sample

Same process using `projects/_NARRATIVE-TEMPLATE.html`. Add the card to `narrative-projects.html`.

Narrative projects can include:
- GDD excerpts (screenshot pages of the document as gallery images, link to full PDF)
- Bark sheet libraries (table screenshots, link to spreadsheet or PDF)
- Quest scripts or dialogue scripts (excerpt inline as a blockquote, full PDF linked)
- Writing samples from any medium

The narrative template has an **Excerpt** blockquote block (commented out) you can uncomment to paste a short piece of text directly on the page - useful for scripts and barks.

---

## Narrative Projects - Reference Approach

Shay Rodriguez (shayrodriguez.net) - friend and fellow narrative designer - is the reference model for how to handle the narrative section. Key takeaways:

- **Separate the writing work from the game work.** Even if a project (like Mythbound) appears in both sections, it should have a different angle in each. Game Projects focuses on systems and development; Narrative Projects focuses on the documents, writing, and storytelling craft.
- **Writing samples are their own artifacts.** A GDD, a bark sheet library, a quest script - these stand alone as portfolio pieces. They don't need a full game around them to be worth showing.
- **Specializations listed clearly.** Shay lists: "world-building, interactive/dialogue design, quest design, cinematics, and narrative production." Your equivalent would be on the About section and in the Narrative Projects page intro.
- **Breadth of mediums counts.** Shay notes her writing spans novels, theater, film, comics, and TTRPGs. Your equivalent is the XR/VR/cinematic production background. Don't hide that range - it's a strength.

---

## Current Projects (as of May 2026)

### Game Projects
| Project | Status | Role | Notes |
|---|---|---|---|
| Mythbound | Active - Skaldforge | Design Lead, Technical Designer | Fantasy action game. No public assets yet. |
| Dungeon of Echoes | Complete | Solo Developer | 2D roguelike, Unity/C# |
| Fright Train | Complete | Solo Developer | Thomas horror game, Unity/C# |
| 7 Deadly Goats | Complete | Technical Designer, Writer, Voice Actor | FIEA/UCF Collegiate Game Jam 2026 |

### Narrative Projects
| Project | Type | Status |
|---|---|---|
| Mythbound | GDD, bark sheets, system flowcharts | Active - add excerpts when cleared to share |
| 7 Deadly Goats | Story script, voice acting | Complete - add script excerpts |

---

## Hosting - GitHub Pages

**Recommended setup:**
1. Create a free GitHub account at github.com
2. Create a new repository (e.g. `caius-portfolio`)
3. Push this entire folder to the `main` branch
4. Go to repository Settings > Pages > set Source to "Deploy from a branch" > `main` > `/ (root)`
5. GitHub will give you a `.github.io` URL within a few minutes

**Connecting caiusruscella.dev (Squarespace domain):**
1. In GitHub Pages settings, add your custom domain: `caiusruscella.dev`
2. In Squarespace Domains > DNS Settings, add 4 A records pointing to GitHub's IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Also add a CNAME record: `www` pointing to `YOUR-GITHUB-USERNAME.github.io`
4. Enable HTTPS in GitHub Pages settings once the domain verifies (takes up to 24 hours)

**Updating the site:** Push any changed files to GitHub and the site updates within ~30 seconds.

---

## Contact Info on the Site
- Email: cruscella@ruscellaimmersive.com
- Website: www.caiusruscella.dev
- Studio: Ruscella Immersive LLC
- LinkedIn: update the `href` in every footer (search for `linkedin.com/in/caius-ruscella`)
