---
name: new-company
description: >
  8-phase wizard that bootstraps a fully configured standalone Claude workspace
  for any company, startup, or solo developer. Interviews the client across 8 phases
  (language, identity, goals, workflows, brand, assets, wiki) then generates everything
  in a single batch: CLAUDE.md, memory files, brand identity, skill placeholder stubs,
  Obsidian PARA wiki, and a static dashboard. Skills are stubbed — the user pastes the
  actual skill content after setup.
  Use when someone wants to set up a new company workspace from scratch.
---

# /new-company — Company OS Generator

Bootstraps a complete, standalone Claude workspace for a company. Runs 8 interview phases, then generates all files in one batch.

**What gets created:**
```
{company-slug}/
├── CLAUDE.md               ← business OS brain
├── _memory/                ← persistent context (company, preferences, strategy)
├── identity/               ← brand files + assets
├── wiki/                   ← Obsidian PARA vault (Projects/Areas/Resources/Archives)
├── .claude/
│   ├── skills/             ← skills from catalog, adapted to this company
│   ├── commands/workflow/  ← full SDD methodology (brainstorm/define/design/build/iterate/ship)
│   └── sdd/                ← SDD artifacts (features/, reports/, archive/)
├── data/                   ← files to analyze
├── outputs/                ← generated content (gitignored)
└── dashboard/              ← static HTML dashboard + state.json
```

---

## Pre-check

Before starting the interview, check if a folder with the company slug already exists at the workspace root. If it does:

> "A folder named `{slug}` already exists. Want to:
> (a) Overwrite it — start fresh, existing files will be replaced
> (b) Choose a different slug — I'll ask for a new name at the end"

If the user picks (b), note it and ask for their preferred slug at the end of Phase 8.

---

## Phase 1 — Language + Profile Type

**Ask one question at a time. Wait for the answer before asking the next.**

### Question 1.1

> "What language should I generate everything in?
> (a) English
> (b) Portuguese (PT-BR)
> (c) Other — tell me which"

Record the answer as `{language}`. For option (c), record the language name but note that only EN and PT-BR have full template support — generate in the stated language as best you can.

### Question 1.2

> "What best describes the company type?
> (a) Solopreneur / creator solo — one person, personal brand + business
> (b) Freelancer — project-based work for clients
> (c) Startup — early-stage, building a product or service
> (d) Agency / consultancy — team delivering to multiple clients
> (e) Established company — defined departments, recurring operations"

Record as `{profile_type}`.

---

## Phase 2 — Company Identity

### Question 2.1

> "What's the company name (or your name, if this is a personal brand)?"

Record as `{company_name}`. Derive `{company_slug}` from it:
- Lowercase, no accents, spaces → hyphens, remove special characters
- Example: "Acme Corp Ltda" → `acme-corp-ltda`

### Question 2.2

> "What does {company_name} do — in one sentence, the way you'd explain it to a neighbor?"

Record as `{company_tagline}`.

### Question 2.3

> "Who pays you? Describe your typical customer or client in 1-2 sentences — a real person, not a persona."

Record as `{icp}` (ideal customer profile).

### Question 2.4

> "How does the business make money? Pick the closest model:
> (a) Service / project-based — clients pay per project or retainer
> (b) Product — one-time purchase (physical or digital)
> (c) Subscription / SaaS — recurring revenue
> (d) Content / creator — ads, sponsorships, courses, community
> (e) Mixed — describe it briefly"

Record as `{revenue_model}`.

### Question 2.5

> "How many people are working on this — just you, or a team? If there's a team, what are the main roles?"

Record as `{team}`.

---

## Phase 3 — Goals & KPIs

### Question 3.1

> "What does success look like in the next 90 days? Be specific — a number, a launch, a milestone."

Record as `{goal_90d}`.

### Question 3.2

> "What's the 1-2 numbers you track most closely right now — revenue, users, leads, clients, MRR, followers, anything."

Record as `{kpis}`.

### Question 3.3

> "What's the single biggest thing holding the business back right now?"

Record as `{main_blocker}`.

---

## Phase 4 — Workflows, Tools & Channels

### Question 4.1

> "What do you actually do every week? List the recurring tasks — even rough is fine. The more specific, the better I can match skills."

Record as `{weekly_workflows}`.

### Question 4.2

> "What tools and platforms do you use regularly? (Examples: GitHub, Notion, Figma, Stripe, HubSpot, Google Ads, Instagram, Substack...)"

Record as `{tools}`.

### Question 4.3

> "If you create content — which channels? (e.g., Instagram, LinkedIn, YouTube, newsletter, blog, podcast, none)"

Record as `{channels}`. If "none", note that content skills will be skipped unless the user says otherwise.

### Question 4.4

> "What's one thing you do every week that you wish you didn't have to — the most repetitive, draining task?"

Record as `{automation_target}`. This is the top candidate for a custom skill.

### Question 4.5

> "Are you or your team doing any coding, data engineering, or technical work? If yes, what's the area — web development, data pipelines, Python scripting, cloud infrastructure, AI/LLM, or something else?"

Record as `{tech_domain}`. If "none" or "no", skip agent/KB matching. If yes, identify which domain(s).

### Question 4.6

> "Do you want a **knowledge wiki** to organize your notes, projects, and reference documents?
> This creates a structured vault (Projects / Areas / Resources / Archives) you can open in Obsidian.
> (a) Yes — add the wiki
> (b) No — keep it simple"

Record as `{wants_wiki}`. Default: **no**. Only generate the wiki structure in Step 8.4 if yes.

### Question 4.7

> "Do you build software, automations, or internal tools?
> If yes, I'll add the **SDD workflow** (brainstorm → define → design → build → ship) for structured feature development inside Claude Code.
> (a) Yes — add the development workflow
> (b) No — I don't build software"

Record as `{wants_sdd}`. If `{tech_domain}` was already set in 4.5, skip this question and record `{wants_sdd}` = yes automatically. Default otherwise: **no**.

### Question 4.8

> "Which of these roles apply to your day-to-day work? Pick all that match:
> (a) Founder / CEO — strategic decisions, company direction, investor prep
> (b) Product Manager — discovery, roadmaps, user stories, PRDs
> (c) Project Manager — sprints, team coordination, stakeholder updates
> (d) Data Analyst — analyzing datasets, building reports, data storytelling
> (e) None of these"

Record as `{roles}`. Multiple answers allowed. If `{tech_domain}` was "data pipelines" or similar in 4.5, auto-add (d) to `{roles}` without asking.

---

### Skill Matching (internal — run after Phase 4, before Phase 5)

**Step 1 — Role-based matching (from Question 4.8):**

| Role selected | Add these skills |
|---|---|
| (a) Founder / CEO | `c-level/`, `finance/` |
| (b) Product Manager | `product-manager/` |
| (c) Project Manager | `project-manager/` |
| (d) Data Analyst | `data/` |

**Step 2 — Keyword matching** from `{weekly_workflows}`, `{tools}`, and `{channels}`. Add each matched skill to `{selected_skills}`. If a stated workflow matches nothing in the table, add it to `{gap_skills}` instead.

| If user mentions... | Add these skills |
|--------------------|-----------------|
| instagram, carousel, carrossel, visual post, reels, instagram content | `content/instagram` |
| linkedin, linkedin post, write on linkedin, linkedin content | `content/linkedin` |
| x, twitter, tweet, thread, x content, twitter content, x strategy | `content/x` |
| tiktok, tiktok content, short video, viral video, tiktok strategy | `content/tiktok` |
| youtube, channel, video, subscribers, watch time, youtube strategy | `content/youtube` |
| newsletter, email list, substack, weekly email, long-form content | `content/newsletters` |
| content plan, weekly content, cross-platform, repurpose content, multi-platform | `content/content-planner` |
| humanize, sounds AI, ai tone, ai tells, make this human, ai text | `content/humanizer` |
| landing page, product page, sales page, one-pager, web presence | `marketing/landing-page` |
| marketing copy, homepage copy, headline, website copy, cta copy | `marketing/copywriting` |
| product launch, go-to-market, gtm, product hunt, launch strategy, feature release | `marketing/launch-strategy` |
| cold email, cold outreach, sales email, prospecting email, B2B outreach | `marketing/cold-email` |
| GA4, google tag manager, GTM, event tracking, analytics setup, UTM, analytics audit | `marketing/analytics-tracking` |
| campaign analytics, attribution, ROAS, CPA, marketing ROI, ad performance | `marketing/campaign-analytics` |
| code review, pull request, github, gitlab, code quality | `engineering-team/code-reviewer` |
| architecture, system design, tech decisions, design docs, rfcs | `engineering-team/senior-architect` |
| api, backend, database, REST, GraphQL, server-side | `engineering-team/senior-backend` |
| frontend, react, nextjs, typescript, UI, tailwind | `engineering-team/senior-frontend` |
| devops, ci/cd, kubernetes, docker, deployment, infrastructure | `engineering-team/senior-devops` |
| security, penetration testing, vulnerability, threat modeling | `engineering-team/security-pen-testing` |
| incident, on-call, postmortem, runbook, SRE | `engineering-team/incident-commander` |
| aws, cloudformation, lambda, serverless, cloud | `engineering-team/aws-solution-architect` |
| data, csv, analysis, data quality, EDA, exploratory analysis | `data/` |
| cohort, funnel, A/B test, segmentation, time series, root cause, KPI | `data/` |
| word, docx, document, contract, legal document, redline | `document/docx` |
| pdf, pdf form, pdf extraction, pdf merge | `document/pdf` |
| powerpoint, presentation, slide deck, pitch deck, pptx | `document/pptx` |
| excel, spreadsheet, financial model, xlsx, csv | `document/xlsx` |
| organize files, clean up folder, find duplicates, file structure | `document/file-organizer` |
| diagram, architecture diagram, flowchart, visualization, html diagram | `visual/visual-explainer` |
| excalidraw, draw diagram, workflow diagram, concept map | `visual/excalidraw-diagram` |
| poster, canvas, art, branded visual, design a visual | `visual/canvas-design` |
| enhance image, sharpen, upscale, screenshot quality | `visual/image-enhancer` |
| ROI, IRR, NPV, payback period, build vs buy, capital allocation | `finance/business-investment-advisor` |
| financial model, DCF, ratio analysis, budget variance, rolling forecast | `finance/finance-skills` |
| financial analysis, financial statements, valuation, projections | `finance/financial-analyst` |
| saas metrics, MRR, ARR, churn, LTV, CAC, NRR, saas health | `finance/saas-metrics-coach` |
| founder mode, c-suite review, CFO review, CMO review, CTO review, boardroom | `c-level/` |
| product discovery, customer interview, JTBD, PRD, user story, roadmap, epic | `product-manager/` |
| meeting transcript, meeting analysis, speaking ratio, communication coaching | `project-manager/meeting-analyzer` |
| sprint planning, velocity, retrospective, standup, scrum, backlog, burndown | `project-manager/scrum-master` |
| project plan, risk assessment, resource allocation, milestone, portfolio | `project-manager/senior-pm` |
| weekly update, 3P update, internal newsletter, status report, incident report | `project-manager/team-communications` |
| jira, confluence, JQL, atlassian, jira automation | `project-manager/pm-skills` |

**Step 3 — Always add:** `mindset-discovery/` to every generated workspace regardless of answers.

**Also add `{automation_target}` as a gap skill** unless it already matches a skill above.

### Agent & KB Matching (internal — run when {tech_domain} is set)

If the user has a tech domain, copy the relevant agents and KB from `.claude/agents/` and `.claude/kb/` into `{slug}/.claude/agents/` and `{slug}/.claude/kb/`. Record as `{agents_to_copy}` and `{kbs_to_copy}`.

| If tech_domain mentions... | Copy these agents | Copy these KBs |
|---|---|---|
| data engineering, data pipelines, ETL, dbt, Spark, Airflow | `data-engineering/` folder, `architect/schema-designer`, `test/data-quality-analyst`, `test/data-contracts-engineer` | `ai-data-engineering/`, `data-modeling/`, `data-quality/`, `airflow/`, `dbt/` |
| python, coding, software development | `python/` folder, `dev/codebase-explorer`, `dev/shell-script-specialist`, `test/test-generator` | (none — language-agnostic) |
| AI, LLM, RAG, machine learning, GenAI | `python/ai-prompt-specialist`, `python/llm-specialist`, `architect/genai-architect`, `dev/prompt-crafter` | `genai/`, `ai-data-engineering/` |
| AWS, cloud, Lambda, serverless | `cloud/aws-data-architect`, `cloud/aws-deployer`, `cloud/aws-lambda-architect`, `cloud/lambda-builder` | `aws/` |
| GCP, Google Cloud, BigQuery | `cloud/ai-data-engineer-gcp`, `cloud/gcp-data-architect`, `cloud/ai-prompt-specialist-gcp` | `gcp/` |
| analytics, SQL, database, reporting | `data-engineering/sql-optimizer`, `architect/schema-designer`, `data-engineering/dbt-specialist` | `data-modeling/`, `dbt/` |
| Microsoft Fabric, Databricks | `platform/fabric-*/` or `data-engineering/lakeflow-*/` respectively | `cloud-platforms/` |

Minimum agents: if `{tech_domain}` is set but no domain matches, copy `dev/codebase-explorer` and `python/code-reviewer` as general-purpose agents.

Minimum skills: if `{selected_skills}` has fewer than 3 entries (excluding mindset-discovery), tell the user which categories you matched and ask:
> "I matched {N} skills based on your workflows. Want to add any other categories — content, dev, marketing, data, document, visual, finance, or project management?"

---

## Phase 5 — Brand & Voice

### Question 5.1

> "Do you have brand colors defined? If yes, give me the hex codes (or describe them). If not, just say 'not yet'."

Record as `{brand_colors}`.

### Question 5.2

> "What fonts do you use, or what typographic feel do you want? (Example: 'Inter, clean and modern' or 'nothing defined yet')"

Record as `{brand_fonts}`.

### Question 5.3

> "Paste an example of your writing — a recent email, caption, message to a client, anything real and recent. This is the best way for me to calibrate your voice without guessing."

Record as `{voice_example}`. Analyze it: extract tone descriptors, sentence length, formality level, vocabulary.

### Question 5.4

> "What phrases, words, or styles do you want me to always avoid? (Examples: 'alavancar', 'synergy', emoji in formal emails, corporate jargon...)"

Record as `{voice_avoid}`.

---

## Phase 6 — Asset Import

### Question 6.1

> "Do you have existing files you want to bring in — brand guides, logos, SOPs, reference documents, spreadsheets, anything?
>
> If yes: drop the files into a temporary folder and tell me the path. I'll move them into the workspace.
> If no: type 'skip' — you can always add files later."

**If the user provides a path:**
- Move or copy the files to appropriate locations:
  - Logo files (`.png`, `.svg`, `.jpg`) → `{slug}/identity/assets/`
  - Brand guides, style guides → `{slug}/wiki/Resources/brand/`
  - SOPs, process docs → `{slug}/wiki/Resources/sops/`
  - Data files (`.csv`, `.xlsx`) → `{slug}/data/`
  - Other documents → `{slug}/wiki/Resources/`
- List what was moved in `{slug}/wiki/Resources/README.md`

**If the user says "skip":**
- Note in the post-generation summary: "You can add files to `wiki/Resources/` anytime."

Record as `{assets_imported}` (list of filenames, or "none").

---

## Phase 7 — Wiki Kickstart

### Question 7.1

> "What are 2-3 active projects you're working on right now — things with a goal and a deadline?"

Record as `{active_projects}` (list). If the user can't think of any, note "no active projects" and skip project note generation.

### Question 7.2

> "What are the ongoing areas of the business you're always responsible for — like Marketing, Engineering, Client Relations, Finance, Operations?"

Record as `{areas}` (list).

### Question 7.3

> "Is there any key reference material, context, or external resources that should go into the wiki from the start? (Competitor links, useful frameworks, important context documents)"

Record as `{resources_notes}`. This goes into `wiki/Resources/README.md`.

---

## Phase 8 — Generation

Tell the user:
> "Great. I have everything I need. Generating your workspace now..."

Then execute the following steps in order, printing each file created as you go:

---

### Step 8.1 — Folder structure

Create these placeholder files:

```
{slug}/data/.gitkeep
{slug}/outputs/.gitkeep
{slug}/scripts/.gitkeep
{slug}/identity/assets/.gitkeep
```

If `{wants_wiki}` = yes, also create:
```
{slug}/wiki/Projects/.gitkeep
{slug}/wiki/Areas/.gitkeep
{slug}/wiki/Resources/.gitkeep
{slug}/wiki/Archives/.gitkeep
```

Create `.gitignore`:
```
outputs/
.DS_Store
*.pyc
__pycache__/
```

---

### Step 8.2 — Memory files

**`{slug}/_memory/company.md`**

Generate using this structure (in `{language}`):

```markdown
# Company

> Core business context. Claude reads this at the start of every session.

**Name:** {company_name}
**Profile:** {profile_type}
**What we do:** {company_tagline}
**Revenue model:** {revenue_model}
**Team:** {team}

## Ideal Customer
{icp}

## Tools & Platforms
{tools — formatted as a bullet list}

## Channels
{channels — or "None defined" if phase 4 returned none}
```

---

**`{slug}/_memory/preferences.md`**

Generate using this structure (in `{language}`):

```markdown
# Preferences

> Voice, tone, and style. Skills read this before generating any content.

## Voice analysis
{Derive 3-5 descriptors from {voice_example}:
  - Sentence length: short/medium/long
  - Formality: casual/conversational/professional/formal
  - Person: first-person/second-person
  - Energy: calm/enthusiastic/direct/warm
  - Any distinctive patterns observed in the example}

## Writing example
> "{voice_example}" ← calibrate to this

## Always avoid
{voice_avoid — formatted as a bullet list}

## Style notes
{Any other observations from the voice example useful for future content generation}
```

---

**`{slug}/_memory/strategy.md`**

Generate using this structure (in `{language}`):

```markdown
# Strategy

> Current focus and priorities. Updated when focus shifts.

## 90-day goal
{goal_90d}

## KPIs we track
{kpis — formatted as a bullet list}

## Main blocker
{main_blocker}

## Top automation target
{automation_target} ← this is the task most worth turning into a skill

## Priorities this quarter
{Derive 2-3 priorities from the 90-day goal and main blocker}
```

---

### Step 8.3 — Identity

**`{slug}/identity/design-guide.md`**

Generate (in `{language}`):

```markdown
# Identity

> Visual reference for all generated content. Skills read this before creating visuals.

## Colors
{If {brand_colors} was provided:}
- Primary: {color 1}
- Accent / CTA: {color 2}
- Text: {color 3 or "not specified"}
- Background: {color 4 or "not specified"}

{If not provided:}
Colors not yet defined. Add them here when your brand identity is ready.
Skills will use a neutral default palette until then.

## Typography
{If {brand_fonts} was provided:}
- Headings: {font}
- Body: {font}
- Style: {description}

{If not provided:}
Fonts not yet defined. Update this section when your brand is ready.

## Voice & Style
See `_memory/preferences.md` for full voice guidelines.
Summary: {1-line voice descriptor derived from Phase 5}

## Logo
- File: `identity/assets/logo.png` (or `.svg`) — add your logo here
- Dark version: `identity/assets/logo-dark.png` — add if you have one

## What never to do
{If voice_avoid exists, adapt to visual context:}
{Otherwise: "Not yet defined — add visual rules here as your brand evolves."}
```

---

### Step 8.4 — Wiki PARA structure

**Only execute this step if `{wants_wiki}` = yes.** If no, skip entirely — do not create the wiki folder structure.

**`{slug}/wiki/Resources/README.md`**

```markdown
# Resources

Reference material, tools, templates, and imported files.

{If {assets_imported} is not empty:}
## Imported files
{list of files moved in Phase 6, with their locations}

{If {resources_notes} is not empty:}
## Key references
{resources_notes formatted as links or bullet points}

## Structure
- `brand/` — brand guides, style references
- `sops/` — standard operating procedures
- `templates/` — reusable templates
- `tools/` — tool documentation and guides
```

**`{slug}/wiki/Archives/README.md`**

```markdown
# Archives

Completed projects, past campaigns, and inactive initiatives.
Move items here when they're done — keep Projects/ clean.
```

**For each project in `{active_projects}`:**

Create `{slug}/wiki/Projects/{project-slug}.md`:

```markdown
# {project name}

> Status: Active | Started: {current date}

## Goal
{Brief goal derived from what the user said about this project in Phase 7}

## Key dates
- Started: {date}
- Target: TBD

## Notes
<!-- Add notes as you work -->

## Related
<!-- Link to related wiki notes with [[note-name]] -->
```

**For each area in `{areas}`:**

Create `{slug}/wiki/Areas/{area-slug}.md`:

```markdown
# {area name}

> Ongoing responsibility — no end date.

## What this covers
{1-2 sentences describing what goes in this area}

## Current focus
{from strategy.md — fill in if relevant to this area}

## Notes
<!-- Running notes for this area -->
```

---

### Step 8.5 — Skills

**For catalog-matched skills** (`{selected_skills}`), copy the full implementation folder from master-claude into the company workspace:

For each skill in `{selected_skills}`:
- Identify the source path in `.claude/skills/`:
  - Full-category installs (e.g. `content/instagram`, `c-level/`, `data/`, `product-manager/`): copy the entire category folder
  - Single sub-skill installs (e.g. `dev/code-review`, `document/pdf`): copy only that sub-skill folder
- Copy recursively to `{slug}/.claude/skills/{same-relative-path}/`
- This includes all sub-folders: references/, scripts/, sub-skills/, templates/

`mindset-discovery/` is always copied in full — include it even if it was not in `{selected_skills}`.

**Skill copy reference:**

| Skill ID | Copy from | Copy to |
|---|---|---|
| `content/instagram` | `.claude/skills/content/instagram/` | `{slug}/.claude/skills/content/instagram/` |
| `content/linkedin` | `.claude/skills/content/linkedin/` | `{slug}/.claude/skills/content/linkedin/` |
| `content/x` | `.claude/skills/content/x/` | `{slug}/.claude/skills/content/x/` |
| `content/tiktok` | `.claude/skills/content/tiktok/` | `{slug}/.claude/skills/content/tiktok/` |
| `content/youtube` | `.claude/skills/content/youtube/` | `{slug}/.claude/skills/content/youtube/` |
| `content/newsletters` | `.claude/skills/content/newsletters/` | `{slug}/.claude/skills/content/newsletters/` |
| `content/content-planner` | `.claude/skills/content/content-planner/` | `{slug}/.claude/skills/content/content-planner/` |
| `content/humanizer` | `.claude/skills/content/humanizer/` | `{slug}/.claude/skills/content/humanizer/` |
| `engineering-team/code-reviewer` | `.claude/skills/engineering-team/code-reviewer/` | `{slug}/.claude/skills/engineering-team/code-reviewer/` |
| `engineering-team/senior-architect` | `.claude/skills/engineering-team/senior-architect/` | `{slug}/.claude/skills/engineering-team/senior-architect/` |
| `engineering-team/senior-backend` | `.claude/skills/engineering-team/senior-backend/` | `{slug}/.claude/skills/engineering-team/senior-backend/` |
| `engineering-team/senior-frontend` | `.claude/skills/engineering-team/senior-frontend/` | `{slug}/.claude/skills/engineering-team/senior-frontend/` |
| `engineering-team/senior-devops` | `.claude/skills/engineering-team/senior-devops/` | `{slug}/.claude/skills/engineering-team/senior-devops/` |
| `engineering-team/security-pen-testing` | `.claude/skills/engineering-team/security-pen-testing/` | `{slug}/.claude/skills/engineering-team/security-pen-testing/` |
| `engineering-team/incident-commander` | `.claude/skills/engineering-team/incident-commander/` | `{slug}/.claude/skills/engineering-team/incident-commander/` |
| `engineering-team/aws-solution-architect` | `.claude/skills/engineering-team/aws-solution-architect/` | `{slug}/.claude/skills/engineering-team/aws-solution-architect/` |
| `engineering-team/` | `.claude/skills/engineering-team/` | `{slug}/.claude/skills/engineering-team/` |
| `marketing/landing-page` | `.claude/skills/marketing/landing-page/` | `{slug}/.claude/skills/marketing/landing-page/` |
| `marketing/copywriting` | `.claude/skills/marketing/copywriting/` | `{slug}/.claude/skills/marketing/copywriting/` |
| `marketing/launch-strategy` | `.claude/skills/marketing/launch-strategy/` | `{slug}/.claude/skills/marketing/launch-strategy/` |
| `marketing/cold-email` | `.claude/skills/marketing/cold-email/` | `{slug}/.claude/skills/marketing/cold-email/` |
| `marketing/analytics-tracking` | `.claude/skills/marketing/analytics-tracking/` | `{slug}/.claude/skills/marketing/analytics-tracking/` |
| `marketing/campaign-analytics` | `.claude/skills/marketing/campaign-analytics/` | `{slug}/.claude/skills/marketing/campaign-analytics/` |
| `data/` | `.claude/skills/data/` | `{slug}/.claude/skills/data/` |
| `document/docx` | `.claude/skills/document/docx/` | `{slug}/.claude/skills/document/docx/` |
| `document/pdf` | `.claude/skills/document/pdf/` | `{slug}/.claude/skills/document/pdf/` |
| `document/pptx` | `.claude/skills/document/pptx/` | `{slug}/.claude/skills/document/pptx/` |
| `document/xlsx` | `.claude/skills/document/xlsx/` | `{slug}/.claude/skills/document/xlsx/` |
| `document/file-organizer` | `.claude/skills/document/file-organizer/` | `{slug}/.claude/skills/document/file-organizer/` |
| `visual/visual-explainer` | `.claude/skills/visual/visual-explainer/` | `{slug}/.claude/skills/visual/visual-explainer/` |
| `visual/excalidraw-diagram` | `.claude/skills/visual/excalidraw-diagram/` | `{slug}/.claude/skills/visual/excalidraw-diagram/` |
| `visual/canvas-design` | `.claude/skills/visual/canvas-design/` | `{slug}/.claude/skills/visual/canvas-design/` |
| `visual/image-enhancer` | `.claude/skills/visual/image-enhancer/` | `{slug}/.claude/skills/visual/image-enhancer/` |
| `finance/business-investment-advisor` | `.claude/skills/finance/business-investment-advisor/` | `{slug}/.claude/skills/finance/business-investment-advisor/` |
| `finance/finance-skills` | `.claude/skills/finance/finance-skills/` | `{slug}/.claude/skills/finance/finance-skills/` |
| `finance/financial-analyst` | `.claude/skills/finance/financial-analyst/` | `{slug}/.claude/skills/finance/financial-analyst/` |
| `finance/saas-metrics-coach` | `.claude/skills/finance/saas-metrics-coach/` | `{slug}/.claude/skills/finance/saas-metrics-coach/` |
| `c-level/` | `.claude/skills/c-level/` | `{slug}/.claude/skills/c-level/` |
| `product-manager/` | `.claude/skills/product-manager/` | `{slug}/.claude/skills/product-manager/` |
| `project-manager/meeting-analyzer` | `.claude/skills/project-manager/meeting-analyzer/` | `{slug}/.claude/skills/project-manager/meeting-analyzer/` |
| `project-manager/scrum-master` | `.claude/skills/project-manager/scrum-master/` | `{slug}/.claude/skills/project-manager/scrum-master/` |
| `project-manager/senior-pm` | `.claude/skills/project-manager/senior-pm/` | `{slug}/.claude/skills/project-manager/senior-pm/` |
| `project-manager/team-communications` | `.claude/skills/project-manager/team-communications/` | `{slug}/.claude/skills/project-manager/team-communications/` |
| `project-manager/pm-skills` | `.claude/skills/project-manager/pm-skills/` | `{slug}/.claude/skills/project-manager/pm-skills/` |
| `mindset-discovery/` | `.claude/skills/mindset-discovery/` | `{slug}/.claude/skills/mindset-discovery/` |

**For custom gap skills** (`{gap_skills}`), create a placeholder stub at `{slug}/.claude/skills/custom/{slugified-name}/SKILL.md`:

```markdown
---
name: {slugified-name}
category: custom
description: "{workflow description from Phase 4}"
status: placeholder
custom: true
---

# /{skill-name}

> Custom skill — no catalog match. Fill in the steps based on how you do this today.

## When to use
{workflow description from user's Phase 4 answer}

## Steps
<!-- Describe the step-by-step process here -->
1.
2.
3.

## Output
<!-- What should this skill produce? -->

## Notes
<!-- Any tools, templates, or references to use -->
```

---

### Step 8.6 — CLAUDE.md

Select the profile template from `.claude/skills/workspace/profiles/` based on `{profile_type}`:

| Profile type | Template file |
|---|---|
| Solopreneur / creator solo | `solopreneur.md` |
| Freelancer | `freelancer.md` |
| Agency / consultancy | `agency.md` |
| Startup or Established company | `company.md` |

Read the matching template, then fill in all `{slots}` with real data from the interview. Translate the full file to `{language}` if PT-BR.

Replace `{skill list}` with:
```
{For each skill in {selected_skills}: "- /{skill-name} — {skill description (1 line)}"}
{For each skill in {gap_skills}: "- /{skill-name} — ⚠️ Placeholder, needs completion"}
- /open — load memory and start the session
- /update — reconcile stale memory files
- /save — commit and push to GitHub
- /map-routines — discover and create custom skills
```

Write the result to `{slug}/CLAUDE.md`.

The template content (for reference — use the file, not this copy):

```markdown
# {company_name} — Company OS

> This workspace runs on Claude Code. This file tells Claude who we are,
> how we work, and what tools are available.

---

## Business Context

At the start of every conversation, read:
1. `_memory/company.md` — who we are, what we do, our audience
2. `_memory/preferences.md` — tone, voice, what to avoid
3. `_memory/strategy.md` — current focus, priorities, and KPIs

Use this context in every response. Don't list what you read — just use it.

---

## Workspace commands

These commands are available in every session:

| Command | Purpose |
|---------|---------|
| `/open` | Load memory and start the session with a status summary |
| `/update` | Scan the workspace and reconcile stale memory files |
| `/save` | Commit and push to GitHub |
| `/map-routines` | Map repetitive tasks and create custom skills for them |

---

## Skills

Before starting any task, check `.claude/skills/` for a relevant skill. If one exists, follow its instructions. If no skill exists but the task is something the user will repeat, ask:
> "This could become a skill for next time. Want me to create one?"

**Installed:**
{For each skill in {selected_skills}: "- /{skill-name} — {skill description (1 line)}"}
{For each skill in {gap_skills}: "- /{skill-name} — ⚠️ Placeholder, needs completion"}

---

## Working with Brand Assets

For any visual task (social post, slides, dashboard, ad), read
`identity/design-guide.md` before starting. Use those colors and fonts.

---

## SDD Workflow (Feature Development)

Use these commands when building new features, automations, or internal tools:

| Command | Phase | Purpose |
|---------|-------|---------|
| `/workflow:brainstorm` | 0 | Explore ideas through dialogue |
| `/workflow:define` | 1 | Capture and validate requirements |
| `/workflow:design` | 2 | Create architecture and technical spec |
| `/workflow:build` | 3 | Execute implementation |
| `/workflow:iterate` | cross | Update any phase document mid-stream |
| `/workflow:ship` | 4 | Archive completed feature |

Artifacts are saved to `.claude/sdd/` — brainstorms, requirements, designs, build reports, and archive.

---

## File Organization

- New content → `outputs/{type}/{name}-{YYYY-MM-DD}/`
- Data files to analyze → `data/`
- Scripts and utilities → `scripts/`
- Wiki notes → `wiki/{Projects|Areas|Resources|Archives}/`
- Recurring tasks → `.claude/skills/`

---

## Learning from corrections

When the user corrects something or gives a permanent instruction ("always", "never",
"from now on", "prefer", "next time"), ask:

> "Want me to save that so I don't have to be told again?"

If yes, route to the right file:
- About the business (clients, services, market) → `_memory/company.md`
- About voice and style (tone, format, what to avoid) → `_memory/preferences.md`
- About priorities and focus (projects, goals, deadlines) → `_memory/strategy.md`
- Behavior rule for this workspace → `CLAUDE.md`

Save with a clean new line. Show the line added. Don't reformat the whole file.

Don't ask if the correction is obviously temporary context. Only ask when the information has lasting value.

---

## Keeping context current

When completing a task that changed something relevant (new client, new skill, shifted focus,
new tool, changed process), ask:

> "That changed something in your context. Want me to update the memory?"

If yes, identify what to update:
- Client, service, tool, team → `_memory/company.md`
- Priority or focus shift → `_memory/strategy.md`
- Tone or style change → `_memory/preferences.md`
- New skill created or folder structure changed → `CLAUDE.md`
- Visual identity change → `identity/design-guide.md`

Show what will change before saving. Edit only the relevant line — don't reformat the file.

Don't ask for: one-off tasks with no lasting impact, simple questions, or changes already saved by the corrections block above.

---

## Profile

- **Type:** {profile_type}
- **Language:** {language}
- **Setup date:** {current date}
```

---

### Step 8.7 — Dashboard

Copy the dashboard template into the company workspace and generate its data file:

1. **Copy** all files from `_dashboard-template/` → `{slug}/dashboard/`
   (preserves structure: `src/`, `package.json`, `tsconfig.json`, `vite.config.ts`, `index.html`)

2. **Generate** `{slug}/dashboard/state.json`:

```json
{
  "generated_at": "{ISO timestamp}",
  "company": {
    "name": "{company_name}",
    "slug": "{company_slug}",
    "tagline": "{company_tagline}",
    "profile": "{profile_type}",
    "language": "{language}"
  },
  "skills": [
    {For each skill in {selected_skills}:}
    {
      "id": "{skill-name}",
      "category": "{category}",
      "label": "{human-readable name}",
      "installed": true,
      "custom": false
    },
    {For each skill in {gap_skills}:}
    {
      "id": "{slugified-name}",
      "category": "custom",
      "label": "{workflow name} (custom)",
      "installed": false,
      "custom": true
    }
  ],
  "wiki": {
    "projects": [{active_projects as JSON array of strings}],
    "areas": [{areas as JSON array of strings}]
  },
  "kpis": [{kpis as JSON array of strings, from Phase 3.2}],
  "goal_90d": "{goal_90d}",
  "ws_url": "ws://localhost:3001"
}
```

The dashboard is a lightweight Vite + React app. Static company info is shown immediately; live squad activity appears when the squad runner is active.

---

### Step 8.8 — SDD Workflow Commands

**Only execute this step if `{wants_sdd}` = yes.** If no, skip entirely — do not copy SDD commands or create the `.claude/sdd/` folder.

Copy the full AgentSpec SDD methodology into the company workspace so the user can brainstorm, define, design, and build features independently without needing master-claude.

For each command in this list, read from master-claude and write to the company workspace:

| Source | Destination |
|--------|-------------|
| `.claude/commands/workflow/brainstorm.md` | `{slug}/.claude/commands/workflow/brainstorm.md` |
| `.claude/commands/workflow/define.md` | `{slug}/.claude/commands/workflow/define.md` |
| `.claude/commands/workflow/design.md` | `{slug}/.claude/commands/workflow/design.md` |
| `.claude/commands/workflow/build.md` | `{slug}/.claude/commands/workflow/build.md` |
| `.claude/commands/workflow/iterate.md` | `{slug}/.claude/commands/workflow/iterate.md` |
| `.claude/commands/workflow/ship.md` | `{slug}/.claude/commands/workflow/ship.md` |

Also create the SDD folder structure:

```
{slug}/.claude/sdd/features/.gitkeep
{slug}/.claude/sdd/reports/.gitkeep
{slug}/.claude/sdd/archive/.gitkeep
```

---

### Step 8.9 — Agents & Knowledge Bases (conditional)

Only execute if `{agents_to_copy}` is not empty (i.e., `{tech_domain}` was set in Phase 4).

For each agent in `{agents_to_copy}`:
- Read from `.claude/agents/{subfolder}/{agent-name}.md`
- Write to `{slug}/.claude/agents/{subfolder}/{agent-name}.md`

For each KB folder in `{kbs_to_copy}`:
- Copy the entire KB folder (all .md files) from `.claude/kb/{kb-name}/` to `{slug}/.claude/kb/{kb-name}/`

Also update the `{slug}/CLAUDE.md` Agents section:

```markdown
## Specialized Agents ({tech_domain})

Installed agents are in `.claude/agents/`. Invoke them by name in conversation.
Knowledge bases are in `.claude/kb/` — agents reference these automatically.

**Installed agents:**
{For each agent: "- @{agent-name} — {one-line description}"}
```

---

### Step 8.10 — Workspace meta-skills

Copy the four workspace meta-skills into every generated workspace. These are always included regardless of the company profile or skill selection:

| Source | Destination |
|--------|-------------|
| `.claude/skills/workspace/open/SKILL.md` | `{slug}/.claude/skills/workspace/open/SKILL.md` |
| `.claude/skills/workspace/update/SKILL.md` | `{slug}/.claude/skills/workspace/update/SKILL.md` |
| `.claude/skills/workspace/save/SKILL.md` | `{slug}/.claude/skills/workspace/save/SKILL.md` |
| `.claude/skills/workspace/map-routines/SKILL.md` | `{slug}/.claude/skills/workspace/map-routines/SKILL.md` |
| `.claude/skills/workspace/tools-catalog/CATALOG.md` | `{slug}/tools/CATALOG.md` |

These give every workspace its operational core:
- `/open` — load context at session start
- `/update` — reconcile stale memory
- `/save` — GitHub backup
- `/map-routines` — discover and create custom skills

---

### Post-generation summary

After all files are created, show:

```
✅ {company_name} workspace ready at: {slug}/

Files created:
  CLAUDE.md
  _memory/company.md
  _memory/preferences.md
  _memory/strategy.md
  identity/design-guide.md
  identity/assets/          (drop your logo here)
  wiki/Projects/            ({N} projects pre-populated)
  wiki/Areas/               ({N} areas pre-populated)
  wiki/Resources/README.md
  wiki/Archives/README.md
  .claude/skills/           ({N} skill folders — fully installed and ready to use)
  .claude/commands/workflow/ (6 SDD commands — brainstorm/define/design/build/iterate/ship)
  .claude/sdd/              (empty — artifacts created as you build features)
  {If tech_domain set:}
  .claude/agents/           ({N} specialized agents for {tech_domain})
  .claude/kb/               ({N} knowledge bases for {tech_domain})
  dashboard/                (Vite + React app — run npm install && npm run dev)
  .gitignore

Skills installed ({N}):
  {list each skill with its folder path, one per line:}
  → /{skill-name}   .claude/skills/{path}/
  {For gap/custom skills:}
  → /{skill-name}   .claude/skills/custom/{name}/SKILL.md — fill in custom steps

Next steps:
  1. Open {slug}/ in a new Claude Code session — CLAUDE.md will load automatically
  2. Open wiki/ as an Obsidian vault (File → Open vault → select wiki/)
  3. Set up the dashboard: cd {slug}/dashboard && npm install && npm run dev
  4. Drop your logo into identity/assets/logo.png
  5. To build a new feature: run /workflow:brainstorm inside {slug}/
  {If assets were skipped:} 6. Add your existing files to wiki/Resources/ when ready
  {If gap/custom skills exist:} 7. Fill in custom skill steps at .claude/skills/custom/

{If folder rename is needed (Phase 1 choice b):}
  Rename the folder:
     Close this window → rename '{slug}' to your preferred name → reopen
```

---

## Rules

- **One question at a time.** Never ask two questions in one message. Wait for the answer.
- **If an answer is vague**, ask one follow-up. Accept the answer on the second try regardless.
- **Language lock**: once `{language}` is set in Phase 1, every generated file must use that language. No mixing.
- **Skip paths**: Phases 6 and 7 have explicit skip options. Skipping does not block generation.
- **Existing folder**: if `{slug}/` already exists, either overwrite (after confirming) or ask for a new slug.
- **Copy full skill folders**: copy the entire folder from `.claude/skills/` for every catalog-matched skill. Only create stubs for gap skills that have no catalog match.
- **mindset-discovery/ always included**: add to every workspace regardless of what the user selected.
- **Minimum 3 skills**: if matching produces fewer than 3 skills (excluding mindset-discovery), prompt the user to select additional categories.
- **No placeholder text in memory files**: every field must contain real data from the interview. If a question was skipped, leave the field blank with a comment like `<!-- fill in later -->`, not a placeholder string.
- **Post-generation**: after the summary, do not continue asking questions or offering to do more. The setup is complete. The user's next step is to open the new folder.
