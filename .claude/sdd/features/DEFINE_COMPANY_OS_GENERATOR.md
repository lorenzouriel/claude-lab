# DEFINE: Company OS Generator

> A `/workflow:new-company` wizard that bootstraps a fully configured, standalone Claude workspace for any company — with custom skills, brand identity, memory, PARA wiki, and a live dashboard.

## Metadata

| Attribute | Value |
|-----------|-------|
| **Feature** | COMPANY_OS_GENERATOR |
| **Date** | 2026-05-28 |
| **Author** | define-agent |
| **Status** | Ready for Design |
| **Clarity Score** | 15/15 |

---

## Problem Statement

Solo developers, startups, and companies that want to use Claude as a full-stack AI assistant have no structured way to go from zero to a configured workspace. They either copy-paste generic setups with no brand/memory, or spend days manually wiring skills, agents, and documentation — with no consistent result.

---

## Target Users

| User | Role | Pain Point |
|------|------|------------|
| Lorenzo | Service provider running the wizard with clients | Rebuilds similar setups from scratch each time; no repeatable methodology guarantees consistency across clients |
| Client | Solo dev / startup / company owner | Doesn't know which skills to install, how to structure knowledge, or how to configure Claude to know their business — ends up with a generic, low-value workspace |

---

## Goals

| Priority | Goal |
|----------|------|
| **MUST** | An 8-phase conversational wizard (`/workflow:new-company`) that interviews the client and generates a complete standalone company workspace |
| **MUST** | Generated workspace includes: `CLAUDE.md`, `_memory/` (3 files), `identity/design-guide.md`, at least 3 relevant skills from catalog, `wiki/` PARA structure with interview-sourced content |
| **MUST** | Wizard detects client language in Phase 1 and generates all files in that language (EN + PT-BR for v1) |
| **MUST** | Skill assembly uses catalog-first approach (pick matching skills), then flags gaps for custom generation after setup |
| **MUST** | `wiki/` is Obsidian-compatible — valid vault structure, all internal links resolve |
| **SHOULD** | `dashboard/index.html` renders company profile and installed skills list from static generated files |
| **SHOULD** | Phase 6 (asset import) moves client files into `wiki/Resources/` and `identity/assets/` before generation |
| **COULD** | Dashboard shows live skill/agent activation state (requires hook wiring) |
| **COULD** | Wiki PARA navigator panel inside dashboard |

---

## Success Criteria

- [ ] Running `/workflow:new-company` from start to finish takes under 20 minutes of wizard interaction
- [ ] Generated workspace contains all mandatory files: `CLAUDE.md`, `_memory/company.md`, `_memory/preferences.md`, `_memory/strategy.md`, `identity/design-guide.md`, `.claude/skills/` with ≥3 skills, `wiki/Projects/`, `wiki/Areas/`, `wiki/Resources/`, `wiki/Archives/`, `dashboard/index.html`
- [ ] All generated file content is in the client's chosen language (EN or PT-BR)
- [ ] `wiki/` can be opened as an Obsidian vault with no broken links
- [ ] `dashboard/index.html` renders without a build step (plain HTML + optional inline JS)
- [ ] At least one memory file (`_memory/company.md`) contains real company data from the interview — no placeholder text remaining
- [ ] Skill catalog is organized into ≥5 categories (content, dev, marketing, ops, data) with ≥3 skills per category

---

## Acceptance Tests

| ID | Scenario | Given | When | Then |
|----|----------|-------|------|------|
| AT-001 | Full happy path (EN solo developer) | Clean directory, no prior files | User runs `/workflow:new-company`, answers all 8 phases in English | Complete workspace generated under `{company-slug}/` with all mandatory files in English |
| AT-002 | PT-BR agency client | Clean directory | User selects PT-BR in Phase 1, answers in Portuguese | All generated files are in Portuguese; folder structure identical to EN variant |
| AT-003 | Skip asset import (Phase 6) | User has no existing files ready | User chooses "skip for now" in Phase 6 | Wizard continues to Phase 7; `wiki/Resources/` created but empty; skip noted in `_memory/strategy.md` as a follow-up action |
| AT-004 | Catalog skill matching (content creator) | Skills catalog has content category | User describes their workflow as "Instagram + newsletter + blog" in Phase 4 | Wizard selects ≥3 content skills from catalog and installs them in `.claude/skills/` |
| AT-005 | Gap detection (custom skill needed) | Workflow need not covered by any catalog skill | User describes a workflow with no catalog match | Wizard flags it as "custom skill needed", creates a placeholder SKILL.md with the workflow description, and notes it as a post-setup task |
| AT-006 | Wiki content from interview | Phase 7 collected 2 active projects and 3 areas | Generation phase runs | `wiki/Projects/` contains one note per project; `wiki/Areas/` contains one note per area; all pre-populated with data from the interview |
| AT-007 | Dashboard renders | `dashboard/index.html` and `dashboard/state.json` generated | User opens `index.html` in browser | Company name, industry, profile type, and installed skills list are visible; no blank panels |
| AT-008 | Language guard | User selects EN in Phase 1 | Wizard completes all phases | Zero Portuguese words in generated CLAUDE.md, memory files, and skill descriptions |

---

## Out of Scope

- **Dashboard live tracking** (v1): hooks wiring to update `state.json` on skill/agent activation — static snapshot only for v1
- **Wiki PARA navigator in dashboard** (v1): reading and rendering live folder structure
- **Languages beyond EN + PT-BR** (v1): Spanish, French, and other languages added after v1 stabilizes
- **Custom agent generation during setup**: generating new `.claude/agents/` files during the wizard — catalog agents only for v1
- **Asset content parsing**: OCR, PDF extraction, or indexing of imported files — files are moved to `wiki/Resources/`, not parsed
- **Client-facing web UI**: the wizard runs exclusively inside Claude Code
- **Automated MCP installation**: wizard identifies relevant MCPs but does not install them automatically

---

## Constraints

| Type | Constraint | Impact |
|------|------------|--------|
| Technical | Skill catalog must exist before the generator references it | Catalog build is a prerequisite task before implementing the wizard |
| Technical | Dashboard v1 must render without a build step (no npm install) | Plain HTML + inline CSS/JS only; no React, no bundler |
| Technical | `wiki/` must be a valid Obsidian vault (flat-ish structure, no unsupported syntax) | No Obsidian-specific plugins assumed; standard markdown only |
| Technical | Wizard runs inside Claude Code only — no subprocess or external tool calls | All file creation via `Write` tool; no shell scripts during wizard |
| Operational | Phase 6 (asset import) requires client to have files physically available | Must have a "skip and come back" path that doesn't block generation |
| Scope | v1 language support: EN + PT-BR only | Template strings and skill descriptions maintained in two languages |

---

## Technical Context

| Aspect | Value | Notes |
|--------|-------|-------|
| **Command location** | `.claude/commands/workflow/new-company.md` | New command inside master-claude, alongside existing workflow commands |
| **Skill catalog location** | `.claude/catalog/` | New directory; organized by category subdirs; referenced during wizard |
| **Output location** | `{company-slug}/` at workspace root | One folder per company; self-contained; can be moved/pushed as its own repo |
| **KB Domains** | workflow patterns, skills authoring | Consult existing SDD workflow contracts and MazyOS skill format |
| **IaC Impact** | None | Pure file generation; no cloud resources, no infrastructure changes |

**Why This Matters:**
- **Location** → Design phase places the command correctly alongside existing `/workflow:*` commands
- **Catalog** → Must be designed and populated before the wizard can reference it — dependency to flag in design
- **Output** → Standalone folder means the client can `git init` and push independently of master-claude

---

## Assumptions

| ID | Assumption | If Wrong, Impact | Validated? |
|----|------------|------------------|------------|
| A-001 | Obsidian can open a `wiki/` subfolder inside a larger repo as a standalone vault | Wiki would need to be a separate root-level folder | [ ] |
| A-002 | Clients will use their generated workspace with Claude Code (not claude.ai or API) | CLAUDE.md + skills system is Claude Code-specific; alternative front-ends would need different scaffolding | [ ] |
| A-003 | The skill catalog will be curated and maintained as new skill types emerge | Stale catalog → poor skill matching → more custom generation needed | [ ] |
| A-004 | Claude Code's `Write` tool can create nested folder structures in a single pass | If not, wizard needs to create parent folders explicitly first | [x] Confirmed |
| A-005 | A plain HTML dashboard (no build step) is sufficient for v1 UX | If client expects a React app, dashboard will feel underpowered | [ ] |

---

## Clarity Score Breakdown

| Element | Score (0-3) | Notes |
|---------|-------------|-------|
| Problem | 3 | Specific pain, specific users, specific impact |
| Users | 3 | Two personas with distinct pain points both captured |
| Goals | 3 | MoSCoW-prioritized, directly traceable to acceptance tests |
| Success | 3 | All criteria are measurable and testable |
| Scope | 3 | 7 explicit out-of-scope items, all confirmed in brainstorm |
| **Total** | **15/15** | |

---

## Open Questions

None — ready for Design.

The one pre-condition to flag for the design phase: **the skill catalog must be designed and partially populated before the wizard implementation is complete.** Design phase should address the catalog schema and initial category list as a first-class deliverable alongside the wizard command architecture.

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-05-28 | define-agent | Initial version from BRAINSTORM_COMPANY_OS_GENERATOR.md |

---

## Next Step

**Ready for:** `/workflow:design .claude/sdd/features/DEFINE_COMPANY_OS_GENERATOR.md`
