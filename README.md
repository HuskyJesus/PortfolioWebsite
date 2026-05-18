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
├── css/
│   └── style.css                     - All shared styles (edit here for visual changes)
├── js/
│   └── main.js                       - Mobile nav, petals, lightbox, skills popup, mute button, scroll reveal
├── images/
│   ├── branch.svg                    - Cherry blossom branch SVG (decorates all pages)
│   ├── MePhoto.png                   - Headshot used in About section
│   ├── MeWGovenor.jpg                - Photo demoing VR to Governor Youngkin (About section)
│   ├── DoETitle.png                  - Dungeon of Echoes title card (card thumbnail)
│   ├── FTTitle.png                   - Fright Train title card (card thumbnail)
│   ├── DoE1-4.gif                    - Dungeon of Echoes gameplay GIFs
│   ├── FT1-3.gif                     - Fright Train gameplay GIFs
│   ├── What_Do_They_See_Trailer.mov  - FIEA application project trailer (hero + project gallery)
│   └── Caius Ruscella Resume.pdf     - Resume (embedded in About section + download button)
├── projects/
│   ├── mythbound.html                - Active studio project (Skaldforge)
│   ├── dungeon-of-echoes.html        - 2D roguelike, solo Unity/C# (2025)
│   ├── fright-train.html             - Thomas horror game, solo Unity/C# (2025)
│   ├── 7-deadly-goats.html           - FIEA/UCF Collegiate Game Jam 2025
│   ├── fiea-application.html         - "What Do They See?" VR application project (2025)
│   ├── _GAME-TEMPLATE.html           - Copy this for new game projects
│   └── _NARRATIVE-TEMPLATE.html      - Copy this for new narrative/writing samples
└── README.md                         - This file
```

---

## Navigation Structure

**Home | Projects | Technical | Other Works | About | Contact**

- **Projects** - All game and narrative projects in one combined 2-column grid (`projects.html`)
- **Technical** - Code snippets and technical design samples (`technical.html`)
- **Other Works** - Project management, D&D, and anything outside game dev/code (`other-works.html`)
- **About** - Bio, photos, embedded resume
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
| `--pink-light` | `#fbd6db` | Meta/subtitle text (most prominent body color) |
| `--pink-mid` | `#f2afb8` | Falling petals, tag text, role badges |
| `--pink-warm` | `#f5eeea` | Button text, cream white |
| `--text-primary` | `#f5eeea` | Main readable text (descriptions, paragraphs, captions) |
| `--text-secondary` | `#c4a0aa` | Titles on cards and project pages (softer than meta) |
| `--text-muted` | `#7a5565` | Sidebar labels, placeholders, decorative metadata |

**Color hierarchy note:** Descriptions use `--text-primary` (cream); meta/subtitle lines use `--pink-light` (bright pink, most prominent); titles use `--text-secondary` (softer pink). This intentional inversion makes role/context info read first on scan.

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
- **Video mute toggle** - Any `<video>` inside `.hero__media` or `.project-gallery__item` gets a mute/unmute button injected automatically by `main.js`.

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

### Adding videos to project pages
There is no dedicated trailer slot. Videos go inside the `.project-gallery` as regular grid items.
To span the full gallery row, add `style="grid-column:1/-1;"` to the `.project-gallery__item`:
```html
<div class="project-gallery__item" style="grid-column:1/-1;">
  <video autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;display:block;">
    <source src="../images/YOUR-TRAILER.mp4" type="video/mp4"/>
  </video>
</div>
```
The mute button is added automatically by `main.js` - no extra markup needed.

### Adding images
1. Drop the image into `images/`
2. Find the placeholder comment (`[ ... ]`) in the HTML
3. Replace the placeholder div with `<img src="../images/your-file.jpg" alt="Description"/>`

For files inside `projects/`, image paths use `../images/` (one level up).

### Skills popup screenshots
To add a screenshot to a skill popup:
1. Drop the image into `images/skill-SKILLNAME.jpg`
2. Open `js/main.js` and find the `skillImages` object in the Skills Popup section
3. Add a line: `skillImages['Skill Name'] = 'images/skill-SKILLNAME.jpg';`

### Adding code snippets (technical.html)
Each `.code-block` div has a placeholder. Replace it with a `<pre>` tag containing your code.
Use these span classes for syntax highlighting:
```html
<pre>
<span class="keyword">public class</span> EnemyAI : MonoBehaviour {
    <span class="comment">// state machine</span>
    <span class="type">State</span> current = <span class="keyword">new</span> <span class="type">PatrolState</span>();
    <span class="keyword">string</span> label = <span class="string">"enemy"</span>;
    <span class="keyword">int</span> hp = <span class="number">100</span>;
}
</pre>
```
Available classes: `.keyword` (pink), `.string` (green), `.comment` (muted), `.type` (blue), `.number` (orange), `.method` (bright pink).

### Resume PDF
The resume is embedded in the About section of `index.html` and stored at `images/Caius Ruscella Resume.pdf`.
To update it: replace the file in `images/` keeping the same filename, or update the `data` and `href` attributes in `index.html` if the name changes.

### Updating contact info sitewide
- **LinkedIn** - Search all HTML files for `linkedin.com/in/caiusruscella`
- **Email** - Search for `cruscella@ruscellaimmersive.com`
- **Footer credit** - Search for `Husky Jesus Games` to find all footers

---

## Adding a New Project

1. Copy `projects/_GAME-TEMPLATE.html` or `projects/_NARRATIVE-TEMPLATE.html` and rename it
2. Fill in every section marked with `[ ... ]` or a comment
3. Add a card block to `projects.html` - duplicate one of the existing `<a class="card">` blocks
4. Add the card thumbnail image to `images/`
5. Add the project to the Current Projects table below in this README

### Project Page Structure (keep this order)

1. Back link `← Projects`
2. Title + meta line (context · role · engine/tools - no year, sidebar has it)
3. Short description (2-4 sentences, `.project-main__desc`)
4. Screenshots/media gallery (`.project-gallery`) - placeholders fine until images exist; videos go here too
5. Content sections - 2-3 named sections, each with a `project-section-label` heading and a real paragraph
6. Sidebar (Project Details, Skills Used, Links)

### Writing Content Sections

Name sections after the actual work done, not generic labels. Examples:

- `Gameplay Systems & Programming` - scripting, AI, mechanics
- `Environment Construction & Asset Integration` - level layout, props, lighting
- `Narrative Writing & Voice Performance` - script, voice acting, bark sheets
- `Systems Design & Documentation` - GDD, flowcharts, balance spreadsheets

Each paragraph should describe your specific contributions - what you built, what decisions you made, how you worked. Avoid describing what the game does without connecting it to what you did.

---

## Current Projects (as of May 2026)

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
- CNAME record: `www` pointing to `huskyjesus.github.io`

**Updating the site:** Push any changed files to `main` branch - site updates within ~30 seconds.

---

## Contact Info on the Site

- Email: cruscella@ruscellaimmersive.com
- Website: www.caiusruscella.dev
- LinkedIn: linkedin.com/in/caiusruscella
- Footer credit: Husky Jesus Games
