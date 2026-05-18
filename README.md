# Caius Ruscella - Portfolio Website

Personal portfolio site for Caius Ruscella, Narrative Designer and Game Developer.
Dark-mode cherry blossom aesthetic modeled after the business card brand.

Live at: **caiusruscella.dev** | GitHub repo: **HuskyJesus/PortfolioWebsite**

---

## File Structure

```
PortfolioWebsite/
├── index.html                        - Home / landing page
├── projects.html                     - Combined projects listing (all game + narrative work)
├── technical.html                    - Technical work / code snippets page
├── other-works.html                  - Other works (project management, D&D, etc.)
├── game-projects.html                - Legacy game projects page (nav redirects to projects.html)
├── narrative-projects.html           - Legacy narrative page (nav redirects to projects.html)
├── css/
│   └── style.css                     - All shared styles (edit here for visual changes)
├── js/
│   └── main.js                       - Mobile nav, falling petals, lightbox, skills popup, scroll reveal
├── images/
│   ├── branch.svg                    - Cherry blossom branch SVG (decorates all pages)
│   ├── DoETitle.png                  - Dungeon of Echoes title card (card thumbnail + old banner)
│   ├── FTTitle.png                   - Fright Train title card (card thumbnail + old banner)
│   ├── DoE1-4.gif                    - Dungeon of Echoes gameplay GIFs
│   ├── FT1-3.gif                     - Fright Train gameplay GIFs
│   └── What_Do_They_See_Trailer.mov  - FIEA application project trailer (used in hero + project page)
├── projects/
│   ├── mythbound.html                - Active studio project (Skaldforge)
│   ├── dungeon-of-echoes.html        - 2D roguelike, solo Unity/C# (2025)
│   ├── fright-train.html             - Thomas horror game, solo Unity/C# (2025)
│   ├── 7-deadly-goats.html           - FIEA/UCF Collegiate Game Jam 2025
│   ├── fiea-application.html         - "What Do They See?" VR application project (2025)
│   ├── _GAME-TEMPLATE.html           - Copy this for new game projects
│   └── _NARRATIVE-TEMPLATE.html      - Copy this for new narrative/writing samples
├── resume/
│   └── Caius-Ruscella-Resume.pdf     - Resume (embedded in About section + download button)
└── README.md                         - This file
```

---

## Navigation Structure

**Home | Projects | Technical | Other Works | About | Contact**

- **Projects** - All game and narrative projects in one combined 2-column grid (`projects.html`)
- **Technical** - Code snippets and technical design samples (`technical.html`)
- **Other Works** - Project management, D&D, and anything outside game dev/code (`other-works.html`)
- **About** - Bio, details, embedded resume
- **Contact** - Footer with LinkedIn and email

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
| `--pink-light` | `#fbd6db` | Page headings, nav logo |
| `--pink-mid` | `#f2afb8` | Falling petals, tag text |
| `--pink-warm` | `#f5eeea` | Button text, cream white |
| `--text-primary` | `#f5eeea` | Main readable text (descriptions, paragraphs) |
| `--text-secondary` | `#c4a0aa` | Card titles, muted headings |
| `--text-muted` | `#7a5565` | Labels, metadata, placeholders |

**Color role note:** Card/section *descriptions* use `--text-primary` (bright); card *titles* use `--text-secondary` (muted pink). This is intentional per design notes.

### Fonts
- **Berkshire Swash** - Google Fonts. Used for the name, page titles, headings, card titles.
- **Candara** - System font (Windows). Used for body text, nav, subtitles, metadata. Fallback: Calibri, Trebuchet MS.

### Cherry Blossom Art
`images/branch.svg` is a hand-crafted SVG branch with pink/cream blossoms. It appears in:
- Hero sections (bottom-right, 22% opacity)
- Page heroes on sub-pages (bottom-right, 15% opacity)
- Footer (bottom-right, 14% opacity)

### Animations
- **Falling petals** - CSS keyframe, spawned by `js/main.js`. 10 on load, 1 every 2.2 seconds.
- **Scroll reveal** - `[data-reveal]` elements fade in on scroll. Add `data-delay="1"` through `"5"` to stagger.
- **Image lightbox** - Click any `.project-gallery__item img` to expand fullscreen. Esc or click outside to close.
- **Skills popup** - Click any `.skill-item` to open a modal with a description. Add screenshot paths in `js/main.js` under `skillImages`.

---

## How to Update Content

### Hero video (home page)
The `<video>` tag in `index.html` currently plays `images/What_Do_They_See_Trailer.mov`.
To swap it out, replace both `<source>` tags with a new file path or a YouTube `<iframe>`:
```html
<!-- Option A: local video file -->
<video autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;">
  <source src="images/YOUR-VIDEO.mp4" type="video/mp4"/>
</video>

<!-- Option B: YouTube embed (remove the <video> tag entirely) -->
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        title="Showreel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen style="width:100%;height:100%;border:none;"></iframe>
```

### Adding project trailer videos
Each project page has a `.project-trailer` div at the top. Replace the placeholder with:
```html
<!-- YouTube -->
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Project trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>

<!-- Local video -->
<video autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;">
  <source src="../images/YOUR-TRAILER.mp4" type="video/mp4"/>
</video>
```

### Adding images
1. Drop the image into `images/`
2. Find the placeholder comment (`[ ... ]`) in the HTML
3. Replace the placeholder div with `<img src="images/your-file.jpg" alt="Description"/>`

For files inside `projects/`, image paths use `../images/` (one level up).

### Skills popup screenshots
To add a screenshot to a skill popup:
1. Drop the image into `images/skill-SKILLNAME.jpg`
2. Open `js/main.js` and find the `skillImages` object near the bottom of the Skills Popup section
3. Add a line: `skillImages['Skill Name'] = '../images/skill-SKILLNAME.jpg';`

### Adding code snippets (technical.html)
Each `.code-block` div has a placeholder. Replace it with a `<pre>` tag containing your code:
```html
<pre>
<span class="keyword">public class</span> EnemyAI : MonoBehaviour {
    <span class="comment">// your code here</span>
}
</pre>
```
Duplicate an existing `.code-block` div to add more snippets.

### Resume PDF
The resume is embedded in the About section of `index.html`.
1. Drop the PDF into the `resume/` folder
2. Name it `Caius-Ruscella-Resume.pdf` (or update the `data` and `href` attributes in `index.html`)
The `<object>` tag embeds it inline; the download button above it lets visitors save a copy.

### Updating contact info sitewide
- **LinkedIn** - Search all HTML files for `linkedin.com/in/caiusruscella` to find every occurrence.
- **Email** - Search for `cruscella@ruscellaimmersive.com`.
- **Footer credit** - Currently `Husky Jesus Games` - search for it to find all footers.

---

## Adding a New Project

1. Copy `projects/_GAME-TEMPLATE.html` and rename it (e.g. `projects/my-new-game.html`)
2. Fill in every section - title, meta, description, gallery images, sidebar details
3. Add a card block to `projects.html` - duplicate one of the existing `<a class="card">` blocks
4. Add the card thumbnail image to `images/`
5. Add the project to the Current Projects table below in this README

Project page structure (in order):
1. Trailer video at top (`.project-trailer`)
2. Back link to `← Projects`
3. Title + meta
4. Short description
5. Screenshots gallery (`.project-gallery`)
6. Extended sections (What I Built, Design Notes, etc.)
7. Sidebar (Project Details, Skills Used, Links)

---

## Current Projects (as of May 2025)

| Project | Year | Role | Notes |
|---|---|---|---|
| Mythbound | Active (Oct 2025-) | Design Lead, Technical Designer, Narrative Designer | Fantasy action, Skaldforge. No public assets yet. |
| What Do They See? | 2025 | Solo Developer | VR application project for FIEA admission. Trailer in `images/`. |
| Dungeon of Echoes | 2025 | Solo Developer | 2D roguelike, Unity/C#. GIFs in `images/`. |
| Fright Train | 2025 | Solo Developer | Thomas horror game, Unity/C#. GIFs in `images/`. |
| 7 Deadly Goats | 2025 | Technical Designer, Writer, Voice Actor | FIEA/UCF Collegiate Game Jam 2025. Screenshots pending. |

---

## Hosting - GitHub Pages

**Repo:** `HuskyJesus/PortfolioWebsite` (branch: `main`)
**Custom domain:** `caiusruscella.dev` (Squarespace DNS)

**Squarespace DNS records:**
- 4 A records pointing to GitHub IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- CNAME record: `www` pointing to `huskujesus.github.io` (note: no 'y' in 'huskujesus' is wrong - the actual username is HuskyJesus, confirm CNAME target matches)

**Updating the site:** Push any changed files to `main` branch - site updates within ~30 seconds.

---

## Contact Info on the Site

- Email: cruscella@ruscellaimmersive.com
- Website: www.caiusruscella.dev
- LinkedIn: linkedin.com/in/caiusruscella
- Footer credit: Husky Jesus Games
