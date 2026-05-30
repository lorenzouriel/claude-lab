---
name: content-research
category: content
description: >
  Research and ideation skill with two modes: Curated (user provides links — reads them,
  finds similar content on the web, extracts angles mapped to content pillars) and
  Automated (no links — scrapes GitHub Trending, HackerNews, and data/AI feeds).
  Deduplicates against an existing backlog and maps every idea to the company's content pillars.
  Outputs a ranked idea list and saves to the content backlog. Hands off directly to content-workflow.
triggers:
  - "content research"
  - "research ideas"
  - "find content ideas"
  - "read this link"
  - "similar content"
  - "content ideation"
  - "topic research"
  - "find topics"
  - "/content-research"
workflow_signals:
  - content research
  - topic ideation
  - seo research
  - competitive research
  - content ideas
  - trending topics
  - github trending
  - hackernews
  - research
languages:
  - en
  - pt-br
---

# /content-research — Content Research & Ideation

Before starting, read:
- `_memory/company.md` — topic domains and channels
- `data/content-backlog.md` — existing ideas (to avoid repetition)

---

## Phase 0 — Mode Detection

Check if the user provided links in their message.

**If links are present → Curated mode** (Phase 1A)
**If no links → Automated mode** (Phase 1B)

---

## Phase 1A — Curated Mode (user-provided links)

### Step 1: Read each link

For each URL the user provided, use WebFetch or Playwright to load and read the page. Extract:
- Main topic and angle
- Key insight or argument
- Target audience (beginner / practitioner / advanced)
- What's novel or interesting about it
- Any tools, patterns, or concepts referenced

### Step 2: Find similar content

For each link, run 2–3 web searches to find related articles, repos, discussions, or tools:

Search patterns to use:
- `"{main topic}" site:github.com` — related repos
- `"{main topic}" OR "{key concept}" site:news.ycombinator.com` — HN discussions
- `"{tool or pattern}" 2024 OR 2025` — recent coverage
- `"{topic}" substack OR medium` — creator coverage in the space

Use Playwright to open top results if content isn't visible from search snippets.

### Step 3: Synthesize ideas

From the original links + similar content found, extract 5–10 content ideas. For each:

```
**Idea:** [Title / angle]
**Pillar:** [mapped to the company's content pillars]
**Hook:** [One sentence — the tension or problem that opens the post]
**Novelty:** [Why this angle hasn't been overdone / what the creator's take adds]
**Source:** [Original link or inspiration]
```

---

## Phase 1B — Automated Mode (no links provided)

### Step 1: Scrape sources

Use Playwright to navigate each source. Read and extract trending/recent items relevant to the company's topic domains (from `_memory/company.md`).

**Sources to scrape:**

| Source | URL | What to look for |
|--------|-----|-----------------|
| GitHub Trending (Python) | `https://github.com/trending/python?since=weekly` | New repos in domain with momentum |
| GitHub Trending (all) | `https://github.com/trending?since=weekly` | Any relevant tool gaining stars |
| HackerNews front page | `https://news.ycombinator.com` | Stories matching domain topics |
| HackerNews search | `https://hn.algolia.com/?q={main_topic}&dateRange=pastWeek` | Recent discussions |

For each source, extract the top 5–10 items that match the company's topic filter. Note: title, link, engagement signal (stars, points, comments).

### Step 2: Enrich top picks

For the top 5 items across all sources, use WebFetch or Playwright to read the actual content. Extract:
- What the thing is / does
- Why people are interested
- What problem it solves
- What's technically interesting

### Step 3: Synthesize ideas

From the scraped + enriched content, extract 5–10 content ideas. For each:

```
**Idea:** [Title / angle]
**Pillar:** [mapped to the company's content pillars]
**Hook:** [One sentence — the tension or problem that opens the post]
**Novelty:** [Why this is timely / what the creator's take adds]
**Source:** [URL]
**Signal:** [Stars, HN points, comments — engagement indicator]
```

---

## Phase 2 — Deduplicate Against Backlog

Read `data/content-backlog.md` if it exists.

For each generated idea, check if a similar topic is already present. If overlap:
- Skip it (if nearly identical)
- Note as "angle variant" (if it can be differentiated)

---

## Phase 3 — Present & Rank

Present the final list, ranked by:
1. **Fit** — alignment with the company's domains and voice
2. **Timeliness** — how fresh/trending the underlying topic is
3. **Novelty** — how underserved this specific angle is

Format:

```
## Research Results — [date]
Mode: Curated (N links) | Automated

### Top ideas

**#1 — [Title]**
Pillar: [pillar name]
Hook: [one sentence]
Why now: [timeliness signal]
Novelty: [what's fresh about this angle]
Source: [URL]

[repeat for each idea]

---
### Also worth considering
[3–5 secondary ideas, less detail]
```

---

## Phase 4 — Save to Backlog

Ask:

> "Want to save any of these to the backlog? Say 'save all', 'save 1,3,5' or 'skip'."

If saving, append to `data/content-backlog.md` under the correct pillar section:

```markdown
- [ ] [Idea title] — [one-line angle summary] · Source: [URL]
```

If the file doesn't exist yet, create it with pillar sections derived from `_memory/company.md`.

---

## Phase 5 — Hand Off (optional)

Ask:

> "Want to start writing one of these now? I'll hand it off to /content-workflow."

If yes — pass the chosen idea (title, pillar, hook, source) directly into `/content-workflow` Phase 0 as Mode A. Skip the intake questions.

---

## Rules

- Always cross-check against the backlog before presenting ideas — no duplicates
- Pillar mapping is required for every idea — never leave it unclassified
- If scraping fails for a source, skip it and note it — don't abort the whole run
- Ideas should match the creator's voice and audience level — no beginner angles for practitioner brands
- Maximum 10 ideas per run — quality over quantity
- Timeliness matters: deprioritize topics that are 2+ years old unless there's a fresh angle
