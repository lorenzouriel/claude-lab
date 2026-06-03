---
name: carousel
description: >
  Creates carousels and visual posts for Instagram, TikTok, and LinkedIn using the
  brand identity. Generates styled HTML + 1080x1350 PNG renders via Playwright,
  with a ready caption at the end. Supports text-only carousels, carousels with
  AI photos, and single posts. Use when the user asks for "carousel", "post",
  "Instagram content", "create image", "generate photo", "educational post",
  or /carousel.
---

# /carousel - Carousels And Visual Posts

Central visual content skill. Takes a topic and delivers styled HTML, posting-ready PNGs, and a caption in the brand's style.

## Dependencies

- **Visual identity:** `identity/design-guide.md` - read before creating any visual
- **Business context:** `_memory/company.md`
- **Tone of voice:** `_memory/preferences.md`
- **Playwright:** to render HTML to PNG
- **OpenAI API (optional):** for realistic photos, only if the user has a key configured
- **Outputs:** `marketing/content/<type>-<topic>-<YYYY-MM-DD>/`

## Content types

### 1. Text-Only Carousel
- **When to use:** educational posts, tips, lists, explanations
- **Format:** 1080x1350 (4:5), always
- **Style:** clean typography, alternating brand colors, no photos

### 2. Carousel With Photo
- **When to use:** visual presentation, aspirational content, cover with character/object
- **Format:** 1080x1350 (4:5)
- **Style:** photo cover with gradient overlay + internal slides in alternating pattern
- **Photo:** AI-generated or provided by the user

### 3. Single Post
- **When to use:** strong phrase, stat, testimonial, behind-the-scenes
- **Format:** 1080x1350
- **Style:** depends on content (quote, large number, photo with overlay)

If the type is unclear, ask:

> "What type of content? (1) text carousel, (2) carousel with photo, (3) single post"

## Base Visual Style

CompanyOS has an editorial, calm, premium style. No clip-art, decorative emoji, rainbow gradients, or generic AI templates. `identity/design-guide.md` overrides these patterns. When the design guide is vague or blank, use these defaults.

### Default typography

- **Font:** Inter (Google Fonts), weights 400/500/600/700/800/900
- **Cover title:** 90-100px, weight 900, line-height 0.98
- **Internal H2:** 60-72px, weight 800, line-height 1.04
- **Body:** 20-24px, weight 500, line-height 1.5
- **Eyebrow/kicker:** 13-16px, weight 700-800, uppercase, wide letter spacing
- **Page counter:** 14-16px, weight 500-600
- **Meta/handle:** 15-18px, weight 600

### Default colors

Sober palette: dark background + off-white + one highlight color.

- Dark background: `#0E1116` or `#1A1A1A`
- Light background: `#F5ECD7` or `#FAFAF7`
- Text on dark: `#FAFAF7`
- Text on light: `#1A1A1A` and `#444`
- Highlight: one brand color

### Recurring visual elements

- Thin rule between kicker and heading
- Logo top-left + page counter top-right on all slides
- Subtle footer divider on dark slides
- Circular stamps for dates/data
- Uppercase tags/pills
- Base padding: 70-100px on the sides

### Named layouts

- **Cover:** eyebrow + large title + subtitle + handle
- **Solo:** horizontal split, photo left + text right
- **Duo:** text top + two photos or one wide image bottom
- **Number:** giant number as graphic element + heading + paragraph
- **Quote:** large quote watermark + phrase + attribution
- **Final CTA:** highlight background, centered logo, short headline, CTA, phone/handle

Slide rhythm: alternate dark, light, and highlight backgrounds. Never use the same background twice in a row.

## Carousel Pattern

Base structure: 5 to 10 slides.

- Slide 1: Cover
- Internal slides: use 2-3 different layouts
- Final slide: Final CTA

Before creating HTML, read `identity/design-guide.md`. If it is blank, use the base style above.

### Feed cover sequence

Before defining a cover, consider the last published cover:

- light -> next is photo/dark
- photo/dark -> next is brand color
- brand color -> next is light
- never two identical covers in sequence

If the user does not know the last cover, ask.

### Language

Follow `_memory/preferences.md`. Use natural phrases, no generic marketing jargon.

### Caption

Always generate the post caption automatically and save it as `caption.md` in the same folder. Structure:

1. Hook
2. Context
3. Swipe CTA
4. Offer/contact block
5. Hashtags

## Workflow

### Step 1 - Understand and plan

1. Read `_memory/preferences.md` and `_memory/company.md`
2. Read `identity/design-guide.md`
3. Identify content type
4. Define topic and angle

### Step 2 - Text

For carousels:

- Slide 1: strong title, max 8 words, offer 3 options
- Internal slides: one insight per slide
- Final slide: CTA + logo

For single posts:

- Main phrase
- Supporting context if needed
- Subtle CTA

Checkpoint: show full text and wait for approval before visuals.

### Step 3 - Generate photos if needed

Only if the user requested AI photo.

1. Write the prompt in English.
2. If `scripts/generate-image.js` exists, run it.
3. If the script does not exist, guide the user through configuring `OPENAI_API_KEY` or using another image tool.
4. Show the photo before continuing.

### Step 4 - Create visuals

1. Create one `carousel.html` with all slides as `.slide` divs. Use inline CSS and Google Fonts as the only external dependency.
2. Create `render.js` in the same folder to screenshot each `.slide` at 1080x1350.
3. Show slide 1, slide 2, and final CTA for approval.

### Step 5 - Save and organize

```text
marketing/content/<type>-<topic>-<YYYY-MM-DD>/
  text.md
  photo-<name>.png
  carousel.html
  render.js
  instagram/
    slide-01.png
  tiktok/
    slide-01.png
  caption.md
  caption-linkedin.md
```

### Step 6 - Optional blog connection

After creating the visual content, ask:

> "This content could also become a blog article for SEO. Do you want me to create the blog version?"

If yes, call `/publish-topic` with the same topic.

## Rules

- Always read `identity/design-guide.md` before visuals.
- Carousel: 1080x1350. TikTok/Reels: 1080x1920 only when explicitly requested.
- Language strictly follows `_memory/preferences.md`.
- Always generate `caption.md`.
- AI photos need approval before use.
- AI prompts should be in English.
- Do not generate identifiable real people/faces.
- HTML: one `carousel.html` + `render.js` in the same folder.
- Reuse `node_modules` when possible.
- Vary layouts between slides.
