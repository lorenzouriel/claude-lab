# engineer/

AgentSpec-style Claude Code config (agents, commands, KB, SDD workflow) — mirrors the `tech-os/` layout at the repo root. See `.claude/agents/`, `.claude/commands/`, `.claude/kb/`, `.claude/sdd/`.

## Converge / Task-Spec / Seamwise integration

Optional external orchestration stack from `luanmorenommaciel`'s repos. Not Anthropic-published — review before installing. Each tool has a distinct authority boundary:

- **[Seamwise](https://github.com/luanmorenommaciel/seamwise)** — decomposes an approved initiative into swim lanes and a `TaskPlan/v1`. Decomposes only; never materializes tasks or calls Task-Spec directly.
- **[Task-Spec](https://github.com/luanmorenommaciel/task-spec)** — contracts and materializes individual tasks into sealed, auditable `TaskSpec` revisions with independent acceptance gates.
- **[Converge](https://github.com/luanmorenommaciel/converge)** — thin coordinator that composes Seamwise + Task-Spec through an eight-pass descent (design phase → consensus barrier → execution phase). Requires Task-Spec always; Seamwise only for decompose/compose operations.

### 1. Prerequisites

```bash
git --version && bash --version && python3 --version
# optional: node --version   (npm install / Cockpit UI only)
```

### 2. Task-Spec (mandatory)

```bash
git clone --branch v3.8.0 https://github.com/luanmorenommaciel/task-spec.git
bash task-spec/install.sh --global --copy
taskspec demo
```

### 3. Seamwise (optional — only if using decompose/compose)

```bash
# requires uv: https://docs.astral.sh/uv/getting-started/installation/
uv tool install "git+https://github.com/luanmorenommaciel/seamwise.git@v0.2.0"
seamwise --version
seamwise --json doctor --host core
```

### 4. Converge, targeted at this folder

```bash
git clone --branch v0.2.0 https://github.com/luanmorenommaciel/converge.git
bash converge/install.sh --target "/c/Users/Uriel/workspace/labs/claude-lab/engineer" --copy
```

### 5. Point converge at the engines

```bash
export CVG_TASKSPEC_BIN=/absolute/path/to/task-spec/bin/taskspec
export CVG_SEAMWISE_BIN="$(command -v seamwise)"   # only if seamwise installed
```

### 6. Initialize

```bash
cd "/c/Users/Uriel/workspace/labs/claude-lab/engineer"
cvg init
cvg setup signing
cvg setup harness      # scaffolds non-destructive AGENTS.md routing
```

Deploys the 11 orchestration skills into `.agents/skills/`, `.claude/skills/`, `.grok/skills/`. This merges into the `.claude/skills/` already present in this folder — review the diff before committing.

Smoke test:

```bash
cvg lane "add a health endpoint"
```

### Seamwise standalone (decomposition without converge)

```bash
seamwise --workspace "/c/Users/Uriel/workspace/labs/claude-lab/engineer" init
seamwise --workspace "/c/Users/Uriel/workspace/labs/claude-lab/engineer" map --source seamwise-recipe.yaml
seamwise --workspace "/c/Users/Uriel/workspace/labs/claude-lab/engineer" plan
seamwise --workspace "/c/Users/Uriel/workspace/labs/claude-lab/engineer" review --accept --reviewer "Lorenzo Uriel" --reason "..."
seamwise --workspace "/c/Users/Uriel/workspace/labs/claude-lab/engineer" compile
```

Outputs `task-plan.json` + `task-plan-lineage.json`, consumed by Converge/Task-Spec — Seamwise never calls Task-Spec directly.
