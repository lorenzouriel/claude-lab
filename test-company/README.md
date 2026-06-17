# test-company

> Drop a logo and your site URL. Get a rebuilt website + a week of content.

A standalone Claude Code workspace that proves one thing: this repository can take a raw
company and produce a polished web presence plus a 7-day content agenda in a single run —
with almost no input from the user.

This is the **zero-interview edition** of CompanyOS. Instead of answering a setup interview,
you point it at your live site and it scrapes the brand into existence.

---

## How it works

### 1. Drop your assets

```
data/inbox/
  logo.png            ← required
  photos/             ← optional
  inspirations.md     ← optional (links + notes for the rebuild look)
```

### 2. Run `/activate`

Give it your **site URL** in the chat. Then it runs end to end:

| Phase | What happens |
|---|---|
| **Scrape** | Reads your live site → extracts hex colors, fonts, copy, structure → fills `identity/design-guide.md` + `_memory/*.md`. No interview. |
| **Brand card** | Shows you what it pulled. The one checkpoint — correct anything here. |
| **Rebuild site** | Better-structured single-page site in your scraped brand → `outputs/site/` |
| **Plan** | A 7-day cross-platform agenda with a repurposing map |
| **Produce** | The deliverables, with approval gates |

### 3. Get the 7-day agenda

| Deliverable | Count |
|---|---|
| Site articles | **2** |
| LinkedIn posts | **5** |
| Instagram carousels | **5** |
| Motion videos | **3** |

The 2 articles are the pillars; the social posts and one motion video repurpose them.

---

## Setup notes

- **Scraping** uses the `apify` skill (Apify MCP) or `WebFetch`. For JS-heavy sites,
  configure an Apify MCP server with an `APIFY_TOKEN` in `.mcp.json`.
- **Motion videos** need Node.js (the `motion-design` skill scaffolds a Remotion project).
- No site URL? `/activate` falls back to the interview-based `install` skill.

---

## Skills included

`activate` (the flow) · `install` (interview fallback) · `apify` (scrape) ·
`landing-page` (site) · `seo` · `publish-topic` · `copywriting` · `humanizer` (articles) ·
`linkedin` · `instagram` · `motion-design` · `motion-approved` · `content-planner` ·
`approve-post` · `open` · `save` · `update` · `new-project`

---

## Day-to-day

- Start a session with `/open`.
- Ask for any single piece directly ("write me a LinkedIn post about X").
- Push to GitHub with `/save`.
