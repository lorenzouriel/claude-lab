---
name: project-manager
description: >
  The complete project manager skill suite. Covers meeting transcript analysis,
  Scrum and agile coaching, enterprise project management, internal communications,
  and Atlassian tooling (Jira, Confluence). Routes to the right sub-skill based
  on the task.
  Triggers on: "meeting transcript", "meeting analysis", "communication patterns",
  "speaking ratio", "filler words", "Granola", "Otter", "Fireflies",
  "sprint planning", "velocity", "retrospective", "standup", "backlog grooming",
  "story points", "burndown", "blockers", "agile health", "scrum",
  "project plan", "project status", "risk assessment", "resource allocation",
  "roadmap", "milestone", "capacity planning", "portfolio", "WSJF", "Monte Carlo",
  "executive report", "program management",
  "jira", "confluence", "JQL", "atlassian", "jira automation",
  "3P update", "weekly update", "internal newsletter", "status report",
  "incident report", "company update", "team update", "internal comms".
tools:
  - Read
  - Write
  - Edit
  - Bash
  - Glob
  - Grep
  - Agent
---

# Project Manager Skill — Orchestrator

> Routes to 5 specialized sub-skills covering agile coaching, enterprise PM,
> meeting intelligence, internal comms, and Atlassian tooling.
> Sub-skills do the work — this file routes and delegates.

## Command Router

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/pm-ops meetings` | `meeting-analyzer/SKILL.md` | "analyze my meetings", "meeting transcript", "communication patterns", "how do I come across", "speaking ratio", "filler words", "Granola transcript", "Otter", "Fireflies", "Zoom transcript", "coaching feedback on meetings" |
| `/pm-ops scrum` | `scrum-master/SKILL.md` | "sprint planning", "velocity", "retrospective", "standup", "backlog grooming", "story points", "burndown chart", "blockers", "agile health", "scrum coaching", "sprint forecast", "Monte Carlo sprint" |
| `/pm-ops senior` | `senior-pm/SKILL.md` | "project plan", "project status report", "risk assessment", "resource allocation", "project roadmap", "milestone tracking", "capacity planning", "portfolio health", "WSJF", "program management", "executive report", "enterprise project", "multi-workstream" |
| `/pm-ops comms` | `team-communications/SKILL.md` | "3P update", "weekly update", "internal newsletter", "company update", "team update", "status report", "incident report", "FAQ roundup", "leadership update", "write my update", "summarize what my team did" |
| `/pm-ops atlassian` | `pm-skills/SKILL.md` | "Jira", "Confluence", "JQL", "Atlassian", "Jira automation", "Confluence page", "create a Jira ticket", "Jira board", "sprint in Jira", "MCP Jira" |

## Routing Decision

- **Transcript → behavioral feedback** → `meeting-analyzer`
- **Sprint data → agile coaching** → `scrum-master`
- **Enterprise project with stakeholders, risk, portfolio** → `senior-pm`
- **Writing an update for internal audiences** → `team-communications`
- **Jira or Confluence automation/queries** → `pm-skills`

If the request spans agile and enterprise (e.g., "project health report with sprint velocity and risk"), use `senior-pm` — it covers both layers.

If unsure, ask:
> "Is this about meeting feedback, agile/sprint work, enterprise project management, internal comms, or Jira/Confluence?"

## Sub-Skill Capabilities

### `meeting-analyzer` — Meeting Transcript Intelligence
Analyzes transcripts (`.txt`, `.md`, `.vtt`, `.srt`, `.docx`) to surface behavioral patterns, communication anti-patterns, speaking ratio analysis, filler word frequency, and actionable coaching feedback. Works with Granola, Otter, Fireflies, and Zoom exports.

### `scrum-master` — Data-Driven Agile Coaching
Sprint analytics, probabilistic forecasting, and team health scoring using three Python tools: `velocity_analyzer.py` (Monte Carlo sprint forecasting), `sprint_health_scorer.py` (multi-dimension health scoring), `retrospective_analyzer.py` (action-item and theme tracking). Input: Jira sprint JSON exports.

### `senior-pm` — Enterprise Project Management
Portfolio management, quantitative risk analysis (EMV, Monte Carlo), resource optimization, WSJF prioritization, stakeholder alignment, and executive reporting. For complex, multi-workstream initiatives with dependencies and multi-million dollar budgets.

### `team-communications` — Internal Communications
Drafts polished internal comms by loading the matching reference file per type: 3P updates (Progress/Plans/Problems), company newsletters, FAQ roundups, incident reports, leadership updates, and general status reports. Reads company format references before writing.

### `pm-skills` — Atlassian Tooling (Jira / Confluence)
6 specialized PM agents: Senior PM, Scrum Master, Jira Expert (JQL), Confluence Expert, Atlassian Admin, and Template Creator. Supports MCP integration for live Jira/Confluence automation.

## Quality Gates

1. **Evidence-backed feedback** — `meeting-analyzer` findings must cite specific transcript excerpts, not general impressions.
2. **Data before forecasts** — `scrum-master` forecasts require actual sprint velocity data. Flag if the input is insufficient for a statistically meaningful Monte Carlo.
3. **Format-first comms** — `team-communications` always reads the matching reference file before writing. Never outputs comms in a generic format when a company-specific one exists.
