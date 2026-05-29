# DESIGN: Company OS Generator

> Technical design for the `/workflow:new-company` wizard that bootstraps a fully configured, standalone Claude workspace per company.

## Metadata

| Attribute | Value |
|-----------|-------|
| **Feature** | COMPANY_OS_GENERATOR |
| **Date** | 2026-05-28 |
| **Author** | design-agent |
| **DEFINE** | [DEFINE_COMPANY_OS_GENERATOR.md](./DEFINE_COMPANY_OS_GENERATOR.md) |
| **Status** | Ready for Build |

---

## Architecture Overview

```text
┌─────────────────────────────────────────────────────────────────────┐
│                        master-claude (this repo)                     │
│                                                                       │
│  .claude/commands/workflow/new-company.md  ← THE WIZARD COMMAND      │
│  .claude/catalog/                          ← SKILL CATALOG           │
│    ├── content/   (5 skills)                                         │
│    ├── dev/       (5 skills)                                         │
│    ├── marketing/ (4 skills)                                         │
│    ├── ops/       (4 skills)                                         │
│    └── data/      (3 skills)                                         │
│  .claude/templates/company-os/             ← DASHBOARD TEMPLATE      │
│    └── dashboard.html                                                 │
└────────────────────────────┬────────────────────────────────────────┘
                             │  /workflow:new-company (runs wizard)
                             │
                             ▼
         ┌───────────────────────────────────────────────┐
         │  Wizard: 8 phases, one topic at a time        │
         │                                               │
         │  Phase 1: Language + Profile type             │
         │  Phase 2: Company identity + revenue + ICP    │
         │  Phase 3: Goals & KPIs                        │
         │  Phase 4: Workflows + tools + pain points     │
         │     └── Skill Matcher → selects catalog skills│
         │  Phase 5: Brand (colors, fonts, voice)        │
         │  Phase 6: Asset import → wiki/Resources/      │
         │  Phase 7: Wiki kickstart (projects, areas)    │
         │  Phase 8: Generation (batch Write all files)  │
         └───────────────────┬───────────────────────────┘
                             │  creates
                             ▼
         ┌───────────────────────────────────────────────┐
         │  {company-slug}/          GENERATED WORKSPACE  │
         │  ├── CLAUDE.md            business OS brain    │
         │  ├── _memory/             persistent context   │
         │  │   ├── company.md                            │
         │  │   ├── preferences.md                        │
         │  │   └── strategy.md                           │
         │  ├── identity/            brand files          │
         │  │   ├── design-guide.md                       │
         │  │   └── assets/          (logo dropped here)  │
         │  ├── wiki/                Obsidian vault        │
         │  │   ├── Projects/        PARA - active work   │
         │  │   ├── Areas/           PARA - ongoing resp  │
         │  │   ├── Resources/       PARA - references    │
         │  │   └── Archives/        PARA - completed     │
         │  ├── .claude/                                  │
         │  │   └── skills/          copied from catalog  │
         │  │       ├── {skill-1}/SKILL.md                │
         │  │       └── {skill-N}/SKILL.md                │
         │  ├── data/                files to analyze     │
         │  ├── outputs/             generated (gitign.)  │
         │  ├── dashboard/                                │
         │  │   ├── index.html       static company dash  │
         │  │   └── state.json       setup-time snapshot  │
         │  └── .gitignore                                │
         └───────────────────────────────────────────────┘
```

---

## Components

| Component | Purpose | Location |
|-----------|---------|----------|
| **Wizard Command** | 8-phase interview + generation driver | `.claude/commands/workflow/new-company.md` |
| **Skill Catalog** | Library of 21 reusable skill SKILL.md files organized by category | `.claude/catalog/{category}/{skill}/SKILL.md` |
| **Skill Matcher** | Logic table (inside wizard) mapping workflow signals → catalog skills | Embedded in Phase 4 of wizard command |
| **Dashboard Template** | Static HTML file with `{{placeholder}}` slots for company data | `.claude/templates/company-os/dashboard.html` |
| **Generation Engine** | Batch of Write tool calls in Phase 8 using interview data | Phase 8 section of wizard command |
| **Company Workspace** | The output — standalone folder per client | `{company-slug}/` at workspace root |

---

## Key Decisions

### Decision 1: Wizard as Markdown Command File

| Attribute | Value |
|-----------|-------|
| **Status** | Accepted |
| **Date** | 2026-05-28 |

**Context:** The wizard needs to run inside Claude Code with no external dependencies. Options were: a Python/shell script, a separate tool, or a markdown command file like other `/workflow:*` commands.

**Choice:** Markdown command file at `.claude/commands/workflow/new-company.md`.

**Rationale:** Consistent with all existing `/workflow:*` commands. No subprocess, no external deps, no permission issues. Claude reads the command file and follows the interview + generation instructions directly.

**Alternatives Rejected:**
1. Python script — requires subprocess calls, harder to maintain, doesn't fit the Claude Code command model
2. Separate web-based wizard — violates the "Claude Code only" constraint; adds a build dependency

**Consequences:**
- All generation logic must be expressible as Claude instructions (no loops or conditionals in code — Claude handles them)
- The command file will be longer than typical workflow commands (~400-600 lines) to cover all 8 phases

---

### Decision 2: Dynamic Generation vs. Template Files

| Attribute | Value |
|-----------|-------|
| **Status** | Accepted |
| **Date** | 2026-05-28 |

**Context:** Generated files (CLAUDE.md, memory files, design-guide) need to be personalized. Options: separate template files with placeholders, or dynamic generation from interview data embedded in the wizard.

**Choice:** Dynamic generation. The wizard command embeds the generation logic. The one exception is `dashboard/index.html`, which has a template because HTML structure is complex and not interview-derived.

**Rationale:** Template files (EN + PT-BR × 8 files = 16+ files) create a maintenance surface. Dynamic generation keeps all logic in one place and is more flexible — Claude adapts content beyond simple placeholder substitution.

**Alternatives Rejected:**
1. Separate template files per language — 16+ files to maintain, placeholders break on edge cases
2. Jinja/mustache templates — requires a runtime, violates no-subprocess constraint

**Consequences:**
- The wizard command is the single source of truth for all generation logic
- Dashboard HTML is an exception: maintained as a static template file

---

### Decision 3: Skill Installation as Content Copy (Adapted)

| Attribute | Value |
|-----------|-------|
| **Status** | Accepted |
| **Date** | 2026-05-28 |

**Context:** When the wizard selects skills from the catalog, they need to appear in the company's `.claude/skills/` directory. Options: symlink, reference, or copy.

**Choice:** Read catalog skill → adapt to company language + brand → write adapted copy into company's `.claude/skills/`.

**Rationale:** The company workspace must be self-contained and portable (can be pushed as its own git repo). Symlinks break when the folder is moved. References require master-claude to always be present. Adapted copies are self-contained and also let the wizard inject the company's tone, industry, and context into each skill.

**Alternatives Rejected:**
1. Symlinks — break on move/clone; non-portable
2. References (skill reads from catalog path) — company repo depends on master-claude being present

**Consequences:**
- Skills in the company workspace are adapted copies, not synced with catalog updates
- Catalog improvements don't auto-propagate to existing company workspaces (acceptable — clients own their setup)

---

### Decision 4: Skill Catalog Schema

| Attribute | Value |
|-----------|-------|
| **Status** | Accepted |
| **Date** | 2026-05-28 |

**Context:** The catalog needs a consistent format so the wizard can read, match, and adapt skills. The MazyOS SKILL.md format is the closest existing pattern.

**Choice:** Each catalog skill is a `SKILL.md` file with a YAML frontmatter block containing: `name`, `category`, `description`, `triggers`, `workflow_signals` (list of keywords for matching), and `languages` (which languages the skill supports). The body is the skill instruction in English (PT-BR skills have a sibling file `SKILL.pt-br.md`).

**Alternatives Rejected:**
1. Single YAML registry file — harder to read/maintain, loses the skill-as-document pattern
2. No frontmatter, match by filename only — too fragile for skill matching

**Consequences:**
- Skill files are slightly longer than MazyOS skills due to frontmatter
- The `workflow_signals` field is the key for Phase 4 matching

---

### Decision 5: Dashboard as Static HTML + state.json

| Attribute | Value |
|-----------|-------|
| **Status** | Accepted |
| **Date** | 2026-05-28 |

**Context:** The dashboard must show company profile + installed skills without a build step. For v1, live skill/agent tracking is out of scope.

**Choice:** `dashboard/index.html` is a self-contained HTML file with inline CSS/JS that reads `dashboard/state.json` via `fetch()`. `state.json` is generated at setup time (Phase 8) and updated manually when skills are added.

**Rationale:** No npm, no bundler, no server. The file opens directly in a browser. `fetch()` from a local file requires running a simple server (`python -m http.server`) which is one command.

**Note:** For v2, Claude Code hooks will append to `state.json` on each skill/agent invocation, enabling live tracking.

**Alternatives Rejected:**
1. React/Vite dashboard — violates no-build-step constraint for v1
2. Fully inline data (no state.json) — makes updating company info require editing the HTML directly

**Consequences:**
- Dashboard requires a local server to use `fetch()` (or can use `<script>` tag with inlined JSON as a simpler fallback)
- `state.json` is the single source of truth for company config — CLAUDE.md reads from memory files, dashboard reads from state.json

---

### Decision 6: Wiki as PARA Folders Only (No Obsidian Config)

| Attribute | Value |
|-----------|-------|
| **Status** | Accepted |
| **Date** | 2026-05-28 |

**Context:** The wiki must be Obsidian-compatible. Options: generate full Obsidian vault config (`.obsidian/` folder with plugin settings), or plain PARA folders with standard markdown.

**Choice:** Plain PARA folders only. No `.obsidian/` config generated. Standard markdown, no plugin-specific syntax.

**Rationale:** Obsidian config is personal (font sizes, plugin choices, themes) — generating it imposes our preferences on the client. Plain folders work in any markdown editor. The client opens `wiki/` as a vault in Obsidian without issues.

**Consequences:**
- No auto-configured Obsidian plugins (Dataview, Templater, etc.)
- Works in VS Code, Obsidian, Typora, or any markdown app equally well

---

## File Manifest

### Wave 1: Catalog (no dependencies)

| # | File | Action | Purpose | Agent |
|---|------|--------|---------|-------|
| 1 | `.claude/catalog/README.md` | Create | Catalog index + matching guide | (general) |
| 2 | `.claude/catalog/content/social-media-post/SKILL.md` | Create | Social media content creation | @code-documenter |
| 3 | `.claude/catalog/content/newsletter/SKILL.md` | Create | Email newsletter writing | @code-documenter |
| 4 | `.claude/catalog/content/seo-article/SKILL.md` | Create | Long-form SEO content | @code-documenter |
| 5 | `.claude/catalog/content/email-campaign/SKILL.md` | Create | Marketing email sequences | @code-documenter |
| 6 | `.claude/catalog/content/video-script/SKILL.md` | Create | YouTube/Reel video scripts | @code-documenter |
| 7 | `.claude/catalog/dev/code-review/SKILL.md` | Create | Structured code review | @code-documenter |
| 8 | `.claude/catalog/dev/pr-description/SKILL.md` | Create | Pull request write-ups | @code-documenter |
| 9 | `.claude/catalog/dev/api-documentation/SKILL.md` | Create | API docs from code | @code-documenter |
| 10 | `.claude/catalog/dev/bug-report/SKILL.md` | Create | Structured bug reports | @code-documenter |
| 11 | `.claude/catalog/dev/technical-spec/SKILL.md` | Create | Technical specification writing | @code-documenter |
| 12 | `.claude/catalog/marketing/ad-copy/SKILL.md` | Create | Google/Meta ad copy | @code-documenter |
| 13 | `.claude/catalog/marketing/campaign-brief/SKILL.md` | Create | Campaign strategy brief | @code-documenter |
| 14 | `.claude/catalog/marketing/competitor-analysis/SKILL.md` | Create | Competitor research report | @code-documenter |
| 15 | `.claude/catalog/marketing/growth-report/SKILL.md` | Create | Weekly/monthly growth summary | @code-documenter |
| 16 | `.claude/catalog/ops/meeting-notes/SKILL.md` | Create | Meeting transcript → action items | @code-documenter |
| 17 | `.claude/catalog/ops/project-brief/SKILL.md` | Create | Project kickoff document | @code-documenter |
| 18 | `.claude/catalog/ops/weekly-review/SKILL.md` | Create | Weekly wins/blockers review | @code-documenter |
| 19 | `.claude/catalog/ops/sop-writer/SKILL.md` | Create | Standard operating procedure | @code-documenter |
| 20 | `.claude/catalog/data/data-analysis/SKILL.md` | Create | CSV/data file analysis | @code-documenter |
| 21 | `.claude/catalog/data/report-builder/SKILL.md` | Create | KPI report from raw numbers | @code-documenter |
| 22 | `.claude/catalog/data/kpi-dashboard/SKILL.md` | Create | KPI HTML dashboard generation | @code-documenter |

### Wave 2: Dashboard Template (no dependencies)

| # | File | Action | Purpose | Agent |
|---|------|--------|---------|-------|
| 23 | `.claude/templates/company-os/dashboard.html` | Create | Static dashboard template with `{{slots}}` | (general) |

### Wave 3: Wizard Command (depends on Wave 1 + 2)

| # | File | Action | Purpose | Agent |
|---|------|--------|---------|-------|
| 24 | `.claude/commands/workflow/new-company.md` | Create | The 8-phase wizard command (main deliverable) | (general) |

**Total Files:** 24

---

## Agent Assignment Rationale

| Agent | Files | Why |
|-------|-------|-----|
| @code-documenter | 2–22 | Skill files are structured documentation — descriptions, triggers, workflow patterns. code-documenter specializes in creating consistent, production-ready documentation |
| (general) | 1, 23, 24 | Catalog README, dashboard template, and wizard command are orchestration/structural files — no specialist match |

---

## Code Patterns

### Pattern 1: Catalog SKILL.md Schema

```markdown
---
name: social-media-post
category: content
description: >
  Creates platform-optimized social media posts reading the company's
  brand voice, tone, and identity. Supports Instagram, LinkedIn, X, TikTok.
triggers:
  - "social media post"
  - "instagram"
  - "linkedin post"
  - "twitter"
  - "tiktok caption"
workflow_signals:
  - social media
  - instagram
  - linkedin
  - tiktok
  - content creation
  - posts
languages:
  - en
  - pt-br
---

# /social-media-post

[Skill instruction body in English...]

## Before creating any post, read:
- `_memory/company.md` — company context
- `_memory/preferences.md` — tone + what to avoid
- `identity/design-guide.md` — visual style (for image prompts)

## Platforms
...
```

---

### Pattern 2: Skill Matcher Logic (Phase 4 of Wizard)

The wizard collects workflow signals from Phase 4 answers, then applies this matching table to select catalog skills:

```markdown
## Skill Matching Table

| Workflow Signal (from user answer) | Catalog Skills to Install |
|------------------------------------|--------------------------|
| "social media", "instagram", "tiktok", "posts" | content/social-media-post |
| "newsletter", "email list", "substack" | content/newsletter |
| "blog", "seo", "google traffic", "articles" | content/seo-article |
| "email campaigns", "drip", "sequences" | content/email-campaign |
| "youtube", "video", "reels", "scripts" | content/video-script |
| "code review", "pull request", "github" | dev/code-review, dev/pr-description |
| "documentation", "api docs", "readme" | dev/api-documentation |
| "bugs", "bug reports", "issue tracking" | dev/bug-report |
| "specs", "technical writing", "rfcs" | dev/technical-spec |
| "ads", "google ads", "meta ads", "paid traffic" | marketing/ad-copy, marketing/campaign-brief |
| "competitors", "market research" | marketing/competitor-analysis |
| "growth", "metrics report", "monthly report" | marketing/growth-report |
| "meetings", "standups", "team calls" | ops/meeting-notes |
| "projects", "kickoff", "scoping" | ops/project-brief |
| "weekly review", "retrospective" | ops/weekly-review |
| "sop", "process", "documentation", "procedures" | ops/sop-writer |
| "data", "csv", "spreadsheet", "analysis" | data/data-analysis |
| "kpi", "dashboards", "reports", "numbers" | data/report-builder, data/kpi-dashboard |

Signal matching: scan user's Phase 4 answers for any keyword above.
Install all matched skills. If no match for a stated workflow, create
a placeholder gap skill and flag for custom generation.
```

---

### Pattern 3: Phase 8 Generation Block

The wizard generates files in this order (independent files first, then derived):

```markdown
## Phase 8 — Generation Sequence

### Step 8.1 — Create folder structure
Write: {slug}/.gitignore
Write: {slug}/data/.gitkeep
Write: {slug}/outputs/.gitkeep
Write: {slug}/identity/assets/.gitkeep

### Step 8.2 — Memory files (from interview data)
Write: {slug}/_memory/company.md       ← from Phase 2 answers
Write: {slug}/_memory/preferences.md  ← from Phase 5 answers
Write: {slug}/_memory/strategy.md     ← from Phase 3 answers

### Step 8.3 — Identity
Write: {slug}/identity/design-guide.md ← from Phase 5 answers

### Step 8.4 — Wiki PARA structure (from Phase 7 answers)
Write: {slug}/wiki/Projects/{project-1}.md  ← one note per project
Write: {slug}/wiki/Projects/{project-2}.md
Write: {slug}/wiki/Areas/{area-1}.md        ← one note per area
Write: {slug}/wiki/Resources/README.md      ← imported assets listed here
Write: {slug}/wiki/Archives/README.md

### Step 8.5 — Skills (from Phase 4 matching)
For each matched skill:
  Read: .claude/catalog/{category}/{skill}/SKILL.md
  Adapt: translate if needed, inject company name/industry
  Write: {slug}/.claude/skills/{skill}/SKILL.md

### Step 8.6 — CLAUDE.md (depends on Steps 8.2 + 8.5)
Write: {slug}/CLAUDE.md  ← generated dynamically, not from template

### Step 8.7 — Dashboard (last — all data available)
Write: {slug}/dashboard/state.json  ← company snapshot + skill list
Write: {slug}/dashboard/index.html  ← from template, slots filled
```

---

### Pattern 4: state.json Schema

```json
{
  "generated_at": "2026-05-28T12:00:00Z",
  "company": {
    "name": "Acme Corp",
    "slug": "acme-corp",
    "industry": "SaaS",
    "profile": "startup",
    "language": "en",
    "tagline": "One sentence description"
  },
  "skills": [
    {
      "id": "social-media-post",
      "category": "content",
      "label": "Social Media Post",
      "installed": true,
      "custom": false
    },
    {
      "id": "custom-client-onboarding",
      "category": "ops",
      "label": "Client Onboarding (custom)",
      "installed": false,
      "custom": true,
      "note": "Placeholder — needs to be written"
    }
  ],
  "wiki": {
    "projects": ["Project Alpha", "Website Redesign"],
    "areas": ["Marketing", "Engineering", "Operations"]
  }
}
```

---

### Pattern 5: Dashboard HTML Structure

The dashboard template uses `{{slot}}` placeholders filled by Phase 8:

```html
<!DOCTYPE html>
<html lang="{{language}}">
<head>
  <meta charset="UTF-8">
  <title>{{company_name}} — OS Dashboard</title>
  <style>
    /* Inline CSS — no external dependencies */
    body { font-family: system-ui, sans-serif; background: #0E1116; color: #FAFAF7; margin: 0; }
    .grid { display: grid; grid-template-columns: 300px 1fr; gap: 24px; padding: 32px; }
    .panel { background: #1A1F2B; border-radius: 12px; padding: 24px; }
    /* ... full styles in the actual template ... */
  </style>
</head>
<body>
  <div class="grid">
    <!-- Panel 1: Company Profile -->
    <div class="panel" id="profile">
      <h2 class="company-name">{{company_name}}</h2>
      <span class="tag">{{profile_type}}</span>
      <span class="tag">{{industry}}</span>
      <p class="tagline">{{tagline}}</p>
    </div>

    <!-- Panel 2: Installed Skills -->
    <div class="panel" id="skills">
      <h3>Installed Skills</h3>
      <div id="skill-list"><!-- populated by JS from state.json --></div>
    </div>
  </div>

  <script>
    // Load state.json and render skills
    fetch('./state.json')
      .then(r => r.json())
      .then(data => {
        const list = document.getElementById('skill-list');
        data.skills.forEach(skill => {
          const el = document.createElement('div');
          el.className = 'skill-card ' + (skill.installed ? 'installed' : 'pending');
          el.textContent = skill.label;
          list.appendChild(el);
        });
      });
  </script>
</body>
</html>
```

---

### Pattern 6: Wiki PARA Note Template

Each project/area note created in Phase 8 follows this structure:

```markdown
# {Project/Area Name}

> Created: {date} | Status: Active

## Overview
{1-2 sentences from interview answer}

## Key Details
- **Owner:** {company owner name}
- **Started:** {date if known}
- **Goal:** {goal from interview}

## Notes
<!-- Add notes here as you work -->

## Related
<!-- Link to related wiki notes with [[note-name]] -->
```

---

### Pattern 7: Gap Skill Placeholder

When no catalog skill matches a workflow signal, the wizard creates:

```markdown
---
name: {slugified-workflow-name}
category: custom
description: "{workflow description from user's Phase 4 answer}"
status: placeholder
custom: true
---

# /{workflow-name}

> This skill was flagged during setup as a custom workflow with no catalog match.
> Fill in the steps below based on how you actually do this today.

## Trigger
Use when: {workflow description from Phase 4}

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

## Data Flow

```text
1. User runs `/workflow:new-company`
   │
   ▼
2. Wizard runs Phases 1–7 (interview)
   Each phase: ask question → collect answer → confirm → next phase
   Phase 4 also runs skill matching: answers → keyword scan → skill list
   │
   ▼
3. Phase 8: Generation
   │
   ├── Read matched catalog SKILL.md files
   ├── Adapt each skill (language + company context)
   ├── Write all workspace files (batch, Steps 8.1–8.7)
   └── Report: list of created files + next steps
   │
   ▼
4. Output: {company-slug}/ directory with complete workspace
   │
   ▼
5. Post-setup (client action):
   ├── Open wiki/ in Obsidian as vault
   ├── Drop logo in identity/assets/
   ├── cd dashboard && python -m http.server (to view dashboard)
   └── git init && git push (to push as own repo)
```

---

## Integration Points

| External System | Integration Type | When |
|-----------------|-----------------|------|
| Obsidian | File system (open wiki/ as vault) | Post-setup, client action |
| Git | CLI (git init in {company-slug}/) | Post-setup, optional |
| Browser | Open dashboard/index.html via local server | Post-setup, client action |
| Claude Code | Skill invocation via `.claude/skills/` | Daily operation |

No API integrations in v1. All integration is file-system based.

---

## Testing Strategy

| Test Type | Scope | Method | Coverage Goal |
|-----------|-------|--------|---------------|
| Manual E2E (EN) | Full wizard run in English | Run `/workflow:new-company`, answer all phases, verify output | AT-001, AT-008 |
| Manual E2E (PT-BR) | Full wizard run in Portuguese | Same, select PT-BR in Phase 1 | AT-002 |
| Phase skip test | Phase 6 skip path | Choose "skip for now" in Phase 6, verify generation continues | AT-003 |
| Skill matching test | 3 workflow profiles | Content creator, developer, ops-heavy — verify correct skills selected | AT-004 |
| Gap detection test | Unmatched workflow | Describe a workflow not in catalog, verify placeholder created | AT-005 |
| Wiki content test | PARA pre-population | Verify Projects/ + Areas/ notes contain interview data, not blanks | AT-006 |
| Dashboard render test | Browser open | Open dashboard/index.html via local server, verify 2 panels visible | AT-007 |
| Language guard test | EN output purity | Grep generated files for Portuguese words when EN was selected | AT-008 |

**All tests are manual for v1** — no automated test harness. The wizard itself is the integration test.

---

## Error Handling

| Error Type | Handling Strategy | Retry? |
|------------|-------------------|--------|
| User gives vague answer | Ask one clarifying follow-up, then record what was given | Yes (once) |
| No catalog skill matches Phase 4 | Create gap placeholder + note as post-setup task | No |
| Asset import file not found (Phase 6) | Prompt user to check path; offer to skip | Yes |
| `{company-slug}/` already exists | Ask: overwrite or choose a different slug? | Yes |
| Language not EN or PT-BR | Default to EN, note the unsupported language | No |

---

## Configuration

The wizard collects all configuration interactively. No static config file. The output `state.json` serves as the company's configuration record.

| Config Collected | Phase | Stored In |
|------------------|-------|-----------|
| Language | 1 | `state.json`, all generated files |
| Profile type | 1 | `CLAUDE.md`, `state.json` |
| Company name, industry, revenue model, audience | 2 | `_memory/company.md`, `state.json` |
| 90-day goals, KPIs | 3 | `_memory/strategy.md` |
| Workflows, tools, channels | 4 | Skill selection + `_memory/strategy.md` |
| Brand (colors, fonts, voice) | 5 | `identity/design-guide.md`, `_memory/preferences.md` |
| Asset paths | 6 | `wiki/Resources/README.md` |
| Active projects, areas | 7 | `wiki/Projects/`, `wiki/Areas/` |

---

## Security Considerations

- No API keys generated or stored during the wizard
- `outputs/` is gitignored by default — generated content (AI-produced copy, images) doesn't leak
- `_memory/` is NOT gitignored by default (it's company context, not secrets) — if the client wants it private, the wizard notes they can add it to `.gitignore`
- No external network calls during generation — wizard is fully offline

---

## Observability

| Aspect | Implementation |
|--------|----------------|
| Generation progress | Phase 8 prints each file created as it goes: `✓ _memory/company.md` |
| Setup summary | End of Phase 8 shows full file tree of what was created |
| Gap skills | Listed explicitly in post-setup summary as "needs completion" |
| Skill count | Summary shows: `Installed: 6 skills (5 from catalog, 1 custom placeholder)` |

---

## Wizard Command Structure (Outline)

The full wizard command file (File #24) will follow this internal structure:

```
# new-company — Company OS Generator

## Pre-check
- Check if {slug}/ already exists → warn if yes

## Phase 1: Language + Profile
[Questions + answer handling]

## Phase 2: Identity
[Questions + answer handling]

## Phase 3: Goals & KPIs
[Questions + answer handling]

## Phase 4: Workflows + Skill Matching
[Questions + Skill Matching Table + gap detection logic]

## Phase 5: Brand
[Questions + answer handling]

## Phase 6: Asset Import
[Questions + skip path]

## Phase 7: Wiki Kickstart
[Questions + answer handling]

## Phase 8: Generation
[Step 8.1 → 8.7 sequence]
[Post-generation summary]
[Next steps for client]

## Rules
[One-question-at-a-time rule]
[Language consistency rule]
[Skip path rules]
```

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-05-28 | design-agent | Initial version |

---

## Next Step

**Ready for:** `/workflow:build .claude/sdd/features/DESIGN_COMPANY_OS_GENERATOR.md`

**Build order:**
1. Wave 1: Catalog SKILL.md files (#1–22) — can be parallelized by category
2. Wave 2: Dashboard template (#23) — independent
3. Wave 3: Wizard command (#24) — after catalog exists to reference
