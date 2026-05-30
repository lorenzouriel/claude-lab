---
name: landing-page
category: dev
description: >
  Generates a premium single-page HTML landing page with 3D CSS animations,
  GSAP ScrollTrigger scroll effects, and mouse-parallax panning. One prompt in,
  one polished .html file out. Use when the user wants a landing page, product page,
  one-pager, promotional page, or web presence for a product or service.
triggers:
  - "landing page"
  - "create a landing page"
  - "build a landing page"
  - "product page"
  - "one-pager"
  - "sales page"
  - "web page"
  - "promotional page"
  - "/landing-page"
workflow_signals:
  - landing page
  - product page
  - sales page
  - web presence
  - one-pager
  - promotional site
languages:
  - en
  - pt-br
---

# /landing-page — Premium HTML Landing Page Generator

Creates a polished, self-contained HTML landing page. Always reads brand context before building.

## Before starting, read:
- `identity/design-guide.md` — brand colors, fonts, logo
- `_memory/company.md` — company name, tagline, ICP

---

## Phase 1 — Extract Content

Before writing any code, identify these fields from the prompt or attached brief:

| Field | What to extract | Fallback |
|---|---|---|
| Product/service name | The thing being promoted | Company name |
| Hero headline | Short, punchy — ≤8 words | Write from context |
| Hero subtext | 1–2 sentence description | Write from context |
| Features / benefits | 3–6 items with title + 1 sentence | Write compelling ones from context |
| Primary CTA text | Button label | "Get Started" |
| Closing headline | Final push line | Riff on hero |
| Closing subtext | 1 sentence | Optional |

If brand colors are available from `identity/design-guide.md`, use them. Otherwise use the brand system below.

**CHECKPOINT:** Confirm content plan in one paragraph before writing HTML.

---

## Phase 2 — Build the Page

Single HTML file. Three required sections built in order.

### Section 1 — Hero

Full viewport height (`100vh`). Content vertically and horizontally centered.

**Structure (top to bottom):**
1. Optional eyebrow label — small, brand accent color, letter-spaced caps
2. H1 headline — large, bold, off-white
3. Subtitle — 1–2 sentences, muted
4. CTA button — brand accent background, dark text
5. Scroll indicator — subtle animated chevron at bottom center

**Background depth layers** (parallax on mouse move):
- Layer `.hero-shapes-back` (moves most): large outlined rectangle + small filled circle
- Layer `.hero-shapes-mid` (moves less): rotated diamond + accent dot

### Section 2 — Features / Content

Dark background by default (`#0D1F38` or brand dark). Light alternative for personal/consumer products.

**Structure:**
1. Centered section H2 — brand typography
2. Optional section subtext — 1 sentence
3. Feature card grid — 3 columns default, 2 columns for exactly 4 items

**Card anatomy:**
```
[SVG icon — 28px, accent stroke — draw inline geometric SVG]
[Title — 600 weight, 22px]
[Description — 400 weight, 15px, muted]
```

Draw simple geometric SVG icons inline. No icon fonts.

### Section 3 — Closing CTA

Full-width, brand dark background. Centered.

**Structure:**
1. Large closing headline — 800 weight, 52–62px
2. Short subtext
3. CTA button (same style as hero)
4. Ambient glow: `radial-gradient(ellipse 400px 200px at 50% 50%, rgba(accent, 0.12), transparent)`

---

## Phase 3 — Brand System

**If no brand colors from `identity/design-guide.md`**, use this default system:

```css
--navy:        #0A1628;
--navy-mid:    #0D1F38;
--teal:        #00D4AA;
--teal-glow:   rgba(0, 212, 170, 0.12);
--amber:       #F5A623;
--off-white:   #F7F7F2;
--text-muted:  rgba(247, 247, 242, 0.68);
--card-bg:     rgba(0, 212, 170, 0.06);
--card-border: rgba(0, 212, 170, 0.15);
```

**If brand colors exist**, substitute:
- `--teal` → primary brand accent
- `--navy` → brand dark background
- `--amber` → secondary accent

**Typography:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

| Use | Weight | Size |
|---|---|---|
| Hero H1 | 800 | 68–82px |
| Section H2 | 700 | 44–52px |
| Card titles | 600 | 22–24px |
| Body | 400 | 15–17px |
| Eyebrow | 600 | 13px, uppercase, 0.1em letter-spacing |
| CTA button | 700 | 17px |

---

## Phase 4 — Animations

**Always include these CDN scripts:**

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

**Hero entrance (set initial states first to prevent flash):**

```javascript
gsap.registerPlugin(ScrollTrigger);
gsap.set([".hero-eyebrow", ".hero-title", ".hero-subtitle", ".hero-cta"], { opacity: 0, y: 30 });
const heroTl = gsap.timeline({ delay: 0.2 });
heroTl
  .to(".hero-eyebrow",  { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
  .to(".hero-title",    { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" }, "-=0.3")
  .to(".hero-subtitle", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
  .to(".hero-cta",      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.4");
```

**Mouse parallax on hero shapes:**

```javascript
document.querySelector('.hero').addEventListener('mousemove', (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  gsap.to(".hero-shapes-back", { x: x * 40, y: y * 30, duration: 0.8, ease: "power2.out" });
  gsap.to(".hero-shapes-mid",  { x: x * 20, y: y * 15, duration: 0.8, ease: "power2.out" });
});
```

**Feature cards scroll entrance:**

```javascript
gsap.utils.toArray(".feature-card").forEach((card, i) => {
  gsap.fromTo(card,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: i * 0.1,
      scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" }
    }
  );
});
```

---

## Rules

- One single `.html` file — no external assets except CDN links and Google Fonts
- All CSS inline in `<style>` tag
- If brand colors exist: use them and override the teal defaults
- Feature card SVG icons must be drawn inline — never use emoji or icon fonts as decoration
- CTA button must appear in both hero and closing sections
- Page must feel polished on mobile (responsive grid, `overflow-x: hidden` on body)
- Save to `outputs/web/{company-slug}-landing-{YYYY-MM-DD}.html`

**FINAL CHECK before delivering:**
- Does the page reflect the company's actual brand colors?
- Are all feature descriptions specific (not generic)?
- Do the animations feel smooth (not jarring)?
- Does it open in a browser without console errors?
