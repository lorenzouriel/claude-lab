---
name: topico
description: Teach or quiz any investments topic from the KB and the user's own notes — delegates to investment-educator
---

# Learn Tópico

> Study companion: explains from your own knowledge base and notes, quizzes for active recall, suggests what to study next.

## Usage

```bash
/learn:topico <tópico | "quiz <domínio>" | "o que estudar">
```

## Examples

```bash
/learn:topico marcação a mercado
/learn:topico "diferença entre PGBL e VGBL"
/learn:topico quiz tributação        # 5 perguntas de recall + aplicação
/learn:topico o que estudar          # gap analysis: notas vs KB
```

## What This Command Does

1. Invokes the **investment-educator** agent
2. **Explain mode**: KB concept as the spine + your raw note as the anchor ("como você anotou em Renda Fixa/5. CDB e FGC.md...") → essence → mechanism → BRL example → common mistake → one check question
3. **Quiz mode**: KB-grounded questions, one at a time, mixing recall and calculation (gross-up, DARF, juro real); grades against KB; drills weak spots
4. **Study-path mode**: diffs raw notes vs KB domains, lists gaps and next logical topics
5. Topic missing from KB + notes → teaches from general knowledge, flags the gap, suggests `/knowledge:ingest` after you study it

## Agent Delegation

| Agent | Role |
|-------|------|
| `investment-educator` | Primary |
| `kb-curator` | Escalation — gap found worth ingesting |

## KB Domains Used

All — plus the raw study notes at the investments-os root (read-only).

## Output

Layered explanation or quiz session, always ending with sources (KB files + your note files).
