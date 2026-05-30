---
name: carousel-post
category: content
description: >
  Creates carousel and visual posts for Instagram, TikTok, and LinkedIn using
  the company's brand identity. Generates styled HTML + renders to 1080x1350 PNG
  via Playwright. Supports text-only carousels, AI-photo carousels, and single posts.
  Includes automatic caption generation at the end.
triggers:
  - "carousel"
  - "carrossel"
  - "slides"
  - "post"
  - "instagram content"
  - "create image"
  - "generate visual"
  - "educational post"
  - "/carousel-post"
workflow_signals:
  - carousel
  - carrossel
  - slides
  - swipe post
  - instagram post
  - visual content
  - post creation
  - social visuals
  - instagram carousel
  - linkedin carousel
languages:
  - en
  - pt-br
---

# /carousel-post — Carousel and Visual Posts

Central visual content skill. Takes a topic → delivers styled HTMLs + rendered PNGs ready to post + caption in the brand's voice.

## Dependencies

- **Brand identity:** `identity/design-guide.md` — READ BEFORE creating any visual
- **Business context:** `_memory/company.md`
- **Voice & tone:** `_memory/preferences.md`
- **Playwright:** to render HTML → PNG (`npx playwright screenshot` or via `render.js`)
- **OpenAI API (optional):** to generate realistic photos — only if the client has an API key configured
- **Outputs go in:** `outputs/content/<type>-<topic>-<YYYY-MM-DD>/`

---

## Content Types

When receiving a request, identify which type fits:

### 1. TEXT-ONLY CAROUSEL
- **When:** educational posts, tips, lists, explanations
- **Format:** 1080×1350 (4:5) — always
- **Style:** clean typography, alternating brand colors, no photos

### 2. CAROUSEL WITH PHOTO
- **When:** visual presentation, aspirational content, cover with a character/scene
- **Format:** 1080×1350 (4:5)
- **Style:** photo as cover with gradient overlay + internal slides in alternating pattern
- **Photo:** can be AI-generated (via OpenAI) or provided by the user

### 3. SINGLE POST
- **When:** impact quotes, data/stats, testimonials, behind-the-scenes
- **Format:** 1080×1350
- **Style:** varies by content (quote, big number, photo with overlay)

If the type isn't clear, ask:
> "What type of content? (1) text carousel, (2) carousel with photo, (3) single post"

---

## Base Visual Style

Read `identity/design-guide.md` first. When the design guide is vague or blank, use these defaults — do NOT stop to ask for setup; the skill works well with these defaults.

### Default Typography

- **Font:** Inter (Google Fonts), weights 400/500/600/700/800/900
- **Cover title:** 90–100px, weight 900, line-height 0.98, letter-spacing **-0.04em**
- **H2 (inner slides):** 60–72px, weight 800, line-height 1.04, letter-spacing **-0.035em**
- **Body:** 20–24px, weight 500, line-height 1.5
- **Eyebrow/kicker:** 13–16px, weight 700–800, **UPPERCASE**, letter-spacing **0.22–0.32em**, accent color
- **Page counter (top-right):** 14–16px, weight 500–600, letter-spacing 0.18em, muted color
- **Handle (@):** 15–18px, weight 600

Typography rule: large titles get **tight** kerning (-0.035em); small eyebrows get **open** kerning (0.22em+). This contrast is the heart of the style.

### Default Colors

Sober palette: dark background + off-white + **ONE** accent color. Never four competing colors.

- Dark background: `#0E1116` or `#1A1A1A`
- Light background: `#F5ECD7` (cream) or `#FAFAF7`
- Text on dark: `#FAFAF7`
- Text on light: `#1A1A1A` (h2), `#444` (body)
- Accent: brand color (one only)

### Recurring Visual Elements

- **Thin rule** (3–4px height, 60–80px width, accent color) between kicker and h2 or as divider
- **Logo top-left + page counter top-right** on every slide
- **1px border-top** `rgba(255,255,255,0.12)` separating footer from content (on dark slides)
- **Circular stamps** (200×200, border 3px translucent, rotate -10deg) for badges/dates/stats
- **Tag/pill** uppercase, generous padding, letter-spacing 0.2em, to label slide category
- Base padding: 70–100px on sides

### Named Layouts

Vocabulary of layouts — each slide gets a name. Vary them to create visual rhythm:

- **COVER** — eyebrow + large title + subtitle + @handle. Background: photo with gradient overlay (`rgba(12,10,9,0.55)` → `rgba(12,10,9,0.85)`) OR solid (dark/light/accent)
- **SOLO** — horizontal split: photo on left 50% + text on right 50% (kicker + h2 + rule + paragraph)
- **DUO** — text on top (kicker + h2 + rule + p) + 2 photos side by side below (or 1 wide photo)
- **NUMBER** — giant numeral (200–320px, weight 800, accent color) as graphic element + h2 + supporting paragraph
- **QUOTE** — large watermark quotation marks + quote in h2 + attribution
- **FINAL CTA** — accent color background, centered logo, short headline, CTA, @handle

**Slide rhythm:** alternate dark ↔ light ↔ accent backgrounds. Never two consecutive slides with the same background.

---

## Carousel Structure

**Base structure (5–10 slides):**
- **Slide 1:** `COVER` layout
- **Inner slides:** use 2–3 different layouts among `SOLO` / `DUO` / `NUMBER` / `QUOTE`
- **Last slide:** `FINAL CTA` layout

Before creating HTML: read `identity/design-guide.md`. If blank, use the base visual style above.

### Feed Cover Sequence (grid planning)

Before defining the cover, consider the **last published cover** to alternate:
- light cover → next should be photo/dark
- photo/dark → next should be brand accent color
- brand accent → next should be light
- never two identical covers in sequence

If the user doesn't know the last cover, ask.

### Language Rule (critical)

Follow `_memory/preferences.md` strictly. Natural phrasing, no marketing jargon, no corporate-speak. Speak the way the audience actually speaks.

### Caption — always generate at the end

When done rendering PNGs, **automatically** generate the post caption and save to `caption.md` in the same folder. **Do not wait for the user to ask.** Standard structure:

1. Hook (question or bold statement)
2. Context (1–2 sentences about the content)
3. Swipe CTA ("Swipe through →")
4. Brand block (company differentiators + contact)
5. Hashtags (10–15 — audience + niche + local if relevant)

---

## Workflow

### Step 1 — Understand and plan

1. Read `_memory/preferences.md` and `_memory/company.md`
2. Read `identity/design-guide.md` for colors, fonts, and logo
3. Identify content type (1, 2, or 3)
4. Define topic and angle

### Step 2 — Copy

Write the content following tone rules:

**For carousel (5–10 slides):**
- Slide 1 (Cover): impactful title, max 8 words. Offer 3 options
- Inner slides: one insight per slide, natural phrasing, no bullet-heavy text
- Last slide: CTA + logo

**For single post:**
- Main phrase in large text
- Supporting context (if needed)
- Subtle CTA

**CHECKPOINT:** Show the full copy. Wait for approval before the visual.

### Step 3 — Generate photos (if type 2)

Only when the user asked for an AI-photo carousel.

1. Compose prompt in English (API performs better in English)
2. Generic prompt pattern:

```
Professional [TYPE] photography of [SUBJECT],
[DETAILS], [ENVIRONMENT/CONTEXT],
[LIGHTING STYLE] lighting, shallow depth of field,
shot from [ANGLE], [STYLE/AESTHETIC],
editorial quality
```

3. Generate via script (if `scripts/generate-image.js` exists):
```bash
node --env-file=.env scripts/generate-image.js "PROMPT" "outputs/content/<folder>/photo-<name>.png"
```

If the script doesn't exist, guide the user to configure `OPENAI_API_KEY` in `.env` and create the script (or use another image generation tool).

4. Show the photo to the user before continuing.

**CHECKPOINT:** Photo approved → continue. If not, adjust prompt and regenerate.

### Step 4 — Create visuals (HTML + PNG)

1. Create **a single `carousel.html`** with ALL slides as `<div class="slide">` inside the same file. Inline CSS, Google Fonts as the only external dependency. Apply:
   - Colors and typography from `identity/design-guide.md`
   - Minimum 2 different layouts (don't repeat the same on all slides)
   - Logo top-left + slide counter top-right on every slide
   - Final slide: logo + CTA, background in main brand color

   **To include AI photo in HTML:**
   ```html
   <div class="slide" style="
     background-image: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url('photo-xxx.png');
     background-size: cover;
     background-position: center;
   ">
     <div class="content">
       <h2>Text over photo</h2>
     </div>
   </div>
   ```

2. Create `render.js` in the same folder — a Node.js script with Playwright that opens the HTML and screenshots each `.slide` at 1080×1350. Reuse `node_modules` from a previous folder (no need for `npm install` every time):
```bash
NODE_PATH="<folder-with-node_modules>/node_modules" node render.js
```

3. Show slides 1, 2, and the final CTA rendered. If approved, show the intermediate slides.

### Step 5 — Save and organize

```
outputs/content/<type>-<topic>-<YYYY-MM-DD>/
  copy.md               ← approved copy + caption
  photo-<name>.png      ← AI-generated photos (if any)
  carousel.html
  render.js
  instagram/
    slide-01.png → slide-NN.png
  tiktok/  (if requested — 9:16 format)
    slide-01.png → ...
  caption.md            ← Instagram/general caption
  caption-linkedin.md   ← (if requested, more formal)
```

### Step 6 — Blog connection (optional)

After creating the visual content, ask:

> "This content could become a blog article too. Want me to create the blog version for SEO?"

If yes, run the `seo-article` skill with the same topic.

---

## Rules

- Always read `identity/design-guide.md` before creating any visual
- Carousel: 1080×1350 (4:5 portrait) — always. TikTok/Reels: 1080×1920 (9:16) — only when explicitly requested
- Language follows `_memory/preferences.md` strictly
- Always consider feed cover sequence before defining a new cover
- Always auto-generate caption at the end, saving to `caption.md`
- AI photos: always request approval before using in the carousel
- AI photo prompts: write in English
- AI photos: never generate photos of identifiable people/faces
- HTML: one single `carousel.html` file with all slides + `render.js` in the same folder. Inline CSS
- Render: reuse `node_modules` when possible (don't run `npm install` in each folder)
- Never repeat the same layout across slides — use visual variation
