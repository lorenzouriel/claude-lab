# test-company — CompanyOS (zero-interview edition)

A standalone Claude Code workspace that turns a raw company into a polished web presence
plus a week of content in one run. The user drops a few assets and a site URL; the system
scrapes the brand into existence and ships the deliverables.

This is a proof-of-scale demo: clone it, run `/activate`, get a rebuilt site + a 7-day
content agenda. Sellable as-is.

---

## The one command: `/activate`

`/activate` is the whole flow. The user provides only:

- **Site URL** (required) — scraped for colors, fonts, copy, structure
- **Logo** → `data/inbox/logo.*`
- **Photos** (optional) → `data/inbox/photos/`
- **Inspirations** (optional) → `data/inbox/inspirations.md`

`/activate` then:

1. **Scrapes the site** → fills `identity/design-guide.md` + `_memory/*.md` (no interview)
2. **Rebuilds the site** → `outputs/site/<slug>-site.html` (better structured)
3. **Plans + produces a 7-day agenda** — fixed mix:
   - **2** site articles
   - **5** LinkedIn posts
   - **5** Instagram carousels
   - **3** motion videos

If there is no site URL, fall back to the interview-based `install` skill.

---

## Business context

At the start of every conversation, read these files when they exist and are filled in:

1. `_memory/company.md` — who the user is, what they do, how the business works
2. `_memory/preferences.md` — tone of voice, writing style, what to avoid
3. `_memory/strategy.md` — current focus, priorities, deadlines

For any visual task (site, carousel, post, motion), consult `identity/design-guide.md` as
the style reference. After `/activate` runs, these files are populated from the scrape — use
them naturally, no need to announce that you read them.

---

## Workflow

Before executing any task, check whether a relevant skill exists in `.claude/skills/`. If
one matches, follow it. If not, execute normally.

When a task without a skill looks repeatable, ask:

> "This could become a skill for next time. Do you want me to create it?"

Only ask when the repetition pattern is clear — not for one-offs.

---

## Skills in this workspace

| Skill | Role in the flow |
|---|---|
| `activate` | The end-to-end bootstrap (scrape → site → 7-day agenda) |
| `install` | Interview fallback when there's no site URL |
| `apify` | Scrape the live site for brand + copy + structure |
| `landing-page` | Rebuild the site as a polished single-page HTML |
| `seo`, `publish-topic`, `copywriting`, `humanizer` | The 2 site articles |
| `linkedin` (+ sub-skills) | The 5 LinkedIn posts |
| `instagram` (+ ig-carousel, ig-carousel-writer, ig-carousel-finalize) | The 5 carousels |
| `motion-design`, `motion-approved` | The 3 motion videos |
| `content-planner` | The 7-day cross-platform agenda + repurposing map |
| `approve-post` | Approval gate before anything is final |
| `open`, `save`, `update`, `new-project` | Workspace lifecycle |

---

## Learn from corrections

When the user corrects something or gives a lasting instruction ("actually it is like
this", "I prefer it this way", "whenever...", "avoid...", "next time..."), ask:

> "Do you want me to save this so you do not have to repeat it?"

If yes, save to the right place — `_memory/company.md` (business), `_memory/preferences.md`
(style), `_memory/strategy.md` (priorities), `identity/design-guide.md` (visuals), or this
`CLAUDE.md` (behavior). Add one clear line; do not reformat the whole file.

Skip the question when the correction is obvious from immediate context.

---

## Keep context updated

After a task that changed something relevant (new focus, new skill, brand change), ask:

> "This changed something in your context. Do you want me to update the memory?"

Show the change before saving. Do not reformat the whole file. Run `/update` for a full scan
when in doubt.

**When NOT to ask:** one-off tasks, simple questions, or anything already saved above.

---

## Rules

- `/activate` is the headline flow. Keep it fast and impressive; one mandatory checkpoint
  (the brand card) before generation.
- Never invent brand values — scrape them or confirm in the brand card.
- The 2/5/5/3 deliverable mix is fixed unless the user asks otherwise.
- Articles are the pillars; social + motion repurpose them, never copy-paste.
- Nothing publishes automatically — `approve-post` gates everything.
