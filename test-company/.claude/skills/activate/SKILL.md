---
name: activate
description: >
  One-command setup for a test company. The user drops in only a few assets — some
  photos, a logo, a couple of inspirations, and the URL of their current site — and this
  flow does the rest: scrapes the live site to extract hex colors, fonts, copy, and
  structure, fills the brand and memory files automatically, rebuilds the site as a
  better-structured page, and produces a full 7-day content agenda (2 articles, 5 LinkedIn
  posts, 5 Instagram carousels, 3 motion videos). Use when the user says "activate",
  "activate the company", "set up the test company", or drops a site URL + assets and
  asks to bootstrap everything.
---

# /activate — Zero-Interview Company Bootstrap

The differentiator of this workspace: **the user gives almost nothing, the system derives
everything.** No long interview. They drop assets, point at their site, and the flow
scrapes the brand into existence, then ships a week of content.

> This is the demo that proves the repository can turn a raw company into a polished web
> presence + a week of content in one run. Keep it fast, keep it impressive, keep the user
> in control at the approval gates.

---

## What the user provides (the only inputs)

Collect these up front. Ask for whatever is missing — but ask for all of it in **one**
message, not one question at a time:

| Input | Required | Where it goes |
|---|---|---|
| **Site URL** | ✅ yes | scraped for brand + copy + structure |
| **Logo** | ✅ yes | `identity/logo.*` (used in site, carousels, motion) |
| **Photos** | optional | `data/inbox/photos/` (used in site + carousels) |
| **Inspirations** | optional | reference sites / screenshots / links — steer the visual rebuild |

If there is no site URL, fall back to the interview flow in `install` (this workspace ships
both). Everything below assumes a URL exists.

Drop convention:
```
data/inbox/
  logo.(png|svg)
  photos/
  inspirations.md      ← links + notes the user pasted
```

---

## Phase 1 — Scrape the brand into existence

Goal: fill `identity/design-guide.md` and `_memory/company.md` **without asking the user**,
from the live site.

1. **Fetch the site.** Use the `apify` skill (web-scraper Actor) or `WebFetch` on the URL
   and the 3–5 most important internal pages (home, about, services/products, contact).
   Prefer Apify when the site is JS-heavy; `WebFetch` is fine for static sites.

2. **Extract the visual identity.** From the HTML/CSS pull:
   - **Hex colors** — scan inline styles, `<style>` blocks, and linked CSS for the
     dominant background, text, and accent/CTA colors. Rank by frequency + role
     (background vs. button vs. heading). Record the top 4–5.
   - **Typography** — `font-family` declarations for headings vs. body; Google Fonts links.
   - **Logo treatment** — light/dark usage, spacing, where it sits.
   - **Visual style** — border radius, shadow usage, button shape, spacing density,
     overall personality (corporate / playful / editorial / minimal).

3. **Extract the business facts.** From the copy pull:
   - Company name, one-line description, what it delivers, who it serves.
   - Services/products, key differentiators, proof (clients, numbers, testimonials).
   - Tone of voice (formal/casual, jargon level, sentence length) — sample real sentences.

4. **Write the files** (no placeholders left behind where the scrape found a real value):
   - `identity/design-guide.md` — colors, typography, style, logo, "never do" notes.
   - `_memory/company.md` — name, business, what it does, client profile, deliverables.
   - `_memory/preferences.md` — tone of voice + what to avoid, derived from real copy.
   - `_memory/strategy.md` — set Phase to "Launch week", Main priority to "rebuild site +
     ship 7-day content agenda".

5. **Fold in inspirations.** Read `data/inbox/inspirations.md`. Where an inspiration
   conflicts with the scraped brand, the inspiration wins for the *rebuild* visual direction
   (the user chose it deliberately) — but keep the scraped colors unless the user said to
   change them.

6. **Show the brand card** — a compact summary of the extracted palette, fonts, and
   one-liner — and ask: *"This is what I pulled from your site. Correct anything before I
   build?"* This is the only mandatory checkpoint before generation.

> Never invent a hex color or a fact. If the scrape is ambiguous, say so and offer a
> best-guess the user can override in the brand card.

---

## Phase 2 — Rebuild the site (better, structured)

Use the `landing-page` skill, driven by the brand from Phase 1 (not the skill's default
navy/teal palette — override the brand tokens with the scraped colors and fonts).

- Reuse the **real copy** scraped in Phase 1, sharpened: tighter hero headline, clearer
  value proposition, scannable feature/service cards, strong closing CTA.
- Use the **logo** from `identity/` and **photos** from `data/inbox/photos/` where they fit.
- Improve structure over the original: clear hero → services/proof → CTA, real hierarchy,
  responsive, animated per the landing-page spec.
- Output the single self-contained HTML file to:
  `outputs/site/<company-slug>-site.html`

Show the file path and a one-line note on what was improved vs. the original.

---

## Phase 3 — Plan the 7-day agenda

Use `content-planner` to build the week, then lock the exact deliverable mix below. The
weekly theme comes from the company's main service/differentiator (from Phase 1).

**Fixed deliverable count for the week:**

| Deliverable | Count | Skill | Output folder |
|---|---|---|---|
| Site articles (blog) | **2** | `publish-topic` + `seo` + `copywriting` | `marketing/content/<slug>-<date>/` |
| LinkedIn posts | **5** | `linkedin` → `linkedin-post-writer` | `outputs/content/<Y>/<M>/WEEK <N>/linkedin/` |
| Instagram carousels | **5** | `instagram` → `ig-carousel-writer` → `ig-carousel` | `outputs/content/<Y>/<M>/WEEK <N>/instagram/` |
| Motion videos | **3** | `motion-design` | `outputs/content/<Y>/<M>/WEEK <N>/<platform>/` |

Produce a calendar table mapping each of the 15 pieces to a day, then confirm the plan with
the user before writing the pieces. Keep the 2 articles as the pillar content — the LinkedIn
posts, carousels, and one motion video should repurpose the articles' core ideas (use the
`content-planner` repurposing map).

---

## Phase 4 — Produce the deliverables

Work in this order so later pieces can reuse earlier ones:

1. **2 articles** — run `publish-topic` per topic. Each writes a blog draft (frontmatter,
   `draft: true`, H2/H3, examples, CTA back to the site). These are the pillars.
2. **5 LinkedIn posts** — `linkedin-post-writer`, varied formulas (don't repeat a hook
   formula in the same week). At least one repurposes each article; mix insight / personal /
   reach pillars. Run `humanizer` on each.
3. **5 Instagram carousels** — `ig-carousel-writer` for the copy, then `ig-carousel` to
   render the slides in the scraped brand. Finalize approved ones with `ig-carousel-finalize`.
4. **3 motion videos** — `motion-design`. Pre-fill the BRAND BLOCK from
   `identity/design-guide.md` (colors, fonts, logo). Suggested set: a logo/intro animation,
   an article-summary kinetic-text piece, and a service highlight. Render to mp4; run
   `motion-approved` on approved ones.

Each piece goes through the normal approval pattern — use `approve-post` before anything is
treated as final. Nothing publishes automatically.

---

## Phase 5 — Summary

Show the full manifest:

```
test-company activated.

BRAND        identity/design-guide.md  (scraped from <url>)
SITE         outputs/site/<slug>-site.html

7-DAY AGENDA  outputs/content/<Y>/<M>/WEEK <N>/
  Articles    2  → marketing/content/...
  LinkedIn    5  → .../linkedin/
  Carousels   5  → .../instagram/
  Motion      3  → .../<platform>/

Next: review each at its approval gate, then /save to push to GitHub.
```

---

## Rules

- **One interview question max.** The brand card in Phase 1.6 is the only required
  checkpoint before building. Everything else is derived or confirmed in batch.
- **Never invent brand values.** Scrape them or ask in the brand card — no silent defaults.
- **The 2/5/5/3 mix is fixed.** Do not change the deliverable counts unless the user asks.
- **Articles are the pillars.** Social + motion repurpose them; nothing is copy-pasted
  across platforms.
- **Approval gates are real.** Site, each batch, and each motion render pause for the user.
- Keep the whole run skimmable: short summaries between phases, not walls of text.
