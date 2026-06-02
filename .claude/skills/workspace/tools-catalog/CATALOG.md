# Tools Catalog

Reference of APIs, CLIs, and connectors available inside Claude Code skills.
Check this file before building a new skill to know what is already available.

---

## Create visuals (HTML → PNG)

### Playwright CLI
**What it does:** Renders any HTML file to PNG (carousels, slides, proposals, cards)
**Requires account:** No — runs locally
**Install:**
```bash
npx playwright install chromium
```
**Use in a skill:**
```bash
npx playwright screenshot --viewport-size=1080,1350 --full-page "file:///path/to/slide.html" "slide.png"
```
**Common sizes:**
- Instagram feed: 1080×1350
- Instagram/TikTok story: 1080×1920
- Slide 16:9: 1920×1080
- Square card: 1080×1080

---

## Publish to the web

### Cloudflare Pages API
**What it does:** Deploys HTML files with a public URL (proposals, landing pages, case studies)
**Requires account:** Yes — Cloudflare (free tier available)
**Configure:** Save `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in `.env`
**When to use:** Any time a skill generates HTML that needs to be shared as a link

---

## Publish to social media

### Blotato API
**What it does:** Publishes posts to Instagram, LinkedIn, TikTok, and X from Claude Code
**Requires account:** Yes — blotato.com
**Configure:** Save `BLOTATO_API_KEY` in `.env`
**Use in a skill:**
```bash
node --env-file=.env scripts/publish-blotato.js
```
**When to use:** After carousel, content, or visual skills generate approved output

---

## Fetch web content

### WebFetch (native)
**What it does:** Reads the content of any URL and returns it as text
**Requires account:** No — built into Claude Code
**When to use:** Research, reading articles, fetching data from websites

### WebSearch (native)
**What it does:** Searches the web and returns results
**Requires account:** No — built into Claude Code
**When to use:** When the user needs to research before creating content

### Jina Reader
**What it does:** Converts any URL to clean markdown (better than WebFetch for long articles)
**Requires account:** No
**How to use:** Access `https://r.jina.ai/{URL}` via WebFetch
**When to use:** Extracting text from articles, blog posts, and HTML-heavy pages

---

## Extract content from video

### yt-dlp (CLI)
**What it does:** Downloads transcripts and subtitles from YouTube videos
**Requires account:** No — runs locally
**Install:**
```bash
pip install yt-dlp
# or: brew install yt-dlp
```
**When to use:** Skills that start from a video to create content (carousel, newsletter, script)

---

## Generate images with AI

### DALL-E (OpenAI)
**What it does:** Generates images from text prompts
**Requires account:** Yes — OpenAI (paid)
**Configure:** Save `OPENAI_API_KEY` in `.env`
**When to use:** Covers, illustrations, and images for posts when AI photo generation is requested

### Gemini (Google AI)
**What it does:** Generates images from text prompts
**Requires account:** Yes — Google AI Studio (free tier available)
**Configure:** Save `GEMINI_API_KEY` in `.env`
**When to use:** Alternative to DALL-E for image generation

---

## Connect platforms via MCP

MCPs are connectors that give direct access to external platforms inside Claude Code.
Claude uses them automatically when it makes sense.

To check installed MCPs: `claude mcp list`
To remove an MCP: `claude mcp remove {name}`

### Notion
**What it does:** Read/write tasks, databases, briefings, and docs in Notion
**Requires account:** Yes — API key at notion.so/my-integrations
**Install:**
```bash
claude mcp add notion -- npx -y @notionhq/notion-mcp-server
```
**When to use:** Skills that need to read/write tasks, client databases, or documents

### Gmail
**What it does:** Read and compose emails without leaving Claude Code
**Requires account:** Yes — Google OAuth
**Install:**
```bash
claude mcp add gmail -- npx -y @gongrzhe/server-gmail-autoauth-mcp
```
**When to use:** Email skills, client follow-ups, communication workflows

### Google Calendar
**What it does:** View schedule, create events, find available times
**Requires account:** Yes — Google OAuth
**Install:**
```bash
claude mcp add google-calendar -- npx -y @gongrzhe/server-google-calendar-autoauth-mcp
```
**When to use:** Scheduling skills, planning, meeting organization

### Canva
**What it does:** Access designs and create visual assets directly through Claude
**Requires account:** Yes — Canva Pro
**Install:**
```bash
claude mcp add canva -- npx -y @canva/canva-mcp-server
```
**When to use:** Design skills, brand asset creation

### N8N
**What it does:** Triggers automations and workflows in N8N
**Requires account:** Yes — N8N instance + API key
**Install:**
```bash
claude mcp add n8n -- npx -y n8n-mcp
```
**When to use:** Skills that need to trigger external automations

### Supabase
**What it does:** Full database and backend access
**Requires account:** Yes — Supabase project
**When to use:** Skills that need to store data, authentication, or a backend

### Telegram
**What it does:** Send and receive messages via a Telegram bot
**Requires account:** Yes — bot token from BotFather
**When to use:** Notification skills, automated client communication

---

## Adding a new tool

When you use an API or tool not listed here, add it following this format:

```markdown
### Tool Name
**What it does:** {one sentence}
**Requires account:** {Yes/No}
**Configure:** {what to save in .env, if applicable}
**Use in a skill:** {command or instruction}
**When to use:** {what type of skill benefits from this}
```
