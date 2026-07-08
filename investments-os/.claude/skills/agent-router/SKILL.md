---
name: agent-router
description: Intelligent agent routing for investments-os -- matches investment tasks to the right specialist agent based on intent keywords and domain context. Loaded every session to give Claude explicit routing rules for all 9 agents.
---

# Agent Router — investments-os

Explicit routing rules for matching tasks to the correct specialist agent. Hand-maintained (9 agents); keep in sync with `.claude/agents/**/*.md` frontmatter when agents change.

**Agent count:** 9 | **Categories:** 6

## A. Agents by Category

| Agent | Tier | KB Domains | Escalates To |
|-------|------|-----------|--------------|
| `portfolio-architect` | T2 | carteira, renda-fixa, renda-variavel, fundos, tributacao | tributacao-specialist, analysts |
| `renda-fixa-analyst` | T2 | renda-fixa, tributacao | portfolio-architect, tributacao-specialist |
| `acoes-analyst` | T2 | renda-variavel, analise, tributacao | portfolio-architect, tributacao-specialist |
| `fundos-analyst` | T2 | fundos, tributacao, analise | portfolio-architect, acoes-analyst |
| `tributacao-specialist` | T2 | tributacao | analysts, user (contador) |
| `market-researcher` | T1 | renda-variavel, carteira, renda-fixa | portfolio-architect |
| `investment-educator` | T1 | all | kb-curator |
| `risk-profiler` | T1 | carteira, renda-variavel | portfolio-architect |
| `kb-curator` | T2 | all (meta) | user |

## B. Intent Keywords → Agent

| Signals in the request | Route to |
|------------------------|----------|
| montar carteira, alocar, alocação, rebalancear, "por onde começo", revisar carteira, três baldes, reserva de emergência (contexto de plano) | `portfolio-architect` |
| CDB, LCI, LCA, Tesouro, debênture, COE, poupança, CDI, "qual rende mais", gross-up, FGC | `renda-fixa-analyst` |
| ticker de ação (XXXX3/XXXX4/units), "devo comprar", tese, valuation, P/L, ROE, dividendos de empresa, IPO, swing/day trade | `acoes-analyst` |
| fundo, FIA, FIM, multimercado, ETF (BOVA11, IVVB11...), FII (XXXX11 imobiliário), PGBL, VGBL, previdência, taxa de administração | `fundos-analyst` |
| IR, imposto, DARF, come-cotas, IOF, isenção, prejuízo, compensação, declaração, alíquota | `tributacao-specialist` |
| "como está o mercado", cenário, Selic hoje, IPCA, câmbio, notícia sobre <ativo>, COPOM | `market-researcher` |
| "o que é", "me explica", "diferença entre", quiz, estudar, glossário, revisão de conceito | `investment-educator` |
| perfil de risco, conservador/moderado/arrojado, suitability, "não durmo com a queda", ansiedade com volatilidade | `risk-profiler` |
| "adicionei anotações", "aprendi sobre", atualizar KB, ingest, sincronizar notas | `kb-curator` |

## C. Tie-breakers

1. **Tax question inside a product question** → the analyst owns it; tributacao-specialist only for pure mechanics/workflow (DARF, come-cotas, compensação).
2. **"Should I buy X" for a specific asset** → analyst for the asset class; portfolio-architect only for "how much / where does it fit".
3. **Ticker suffix 11** is ambiguous: FII/ETF → `fundos-analyst`; units (SANB11) → `acoes-analyst`. Check the asset type first.
4. **Anxiety/behavioral signals** override product questions → `risk-profiler` first, then the product agent.
5. **Anything with "explica/estuda/aprende"** → `investment-educator`, even if a product is named.
6. Reserve incomplete detected by ANY agent → surface it and involve `portfolio-architect`.

## D. Session rules (all agents)

- KB-first (`.claude/kb/`); current market data via the free APIs in `kb/dados-mercado/quick-reference.md` (BCB, Tesouro Transparente, Yahoo `.SA`, Fundamentus, CVM, AwesomeAPI, CoinGecko) — WebSearch only as fallback; always dated.
- Educational analysis, never guaranteed-return recommendations; disclaimer on analysis outputs.
- PT-BR responses by default; Brazilian market scope (B3, Tesouro Direto, CVM).
- Raw study notes at the repo root are **read-only** for every agent except none — even kb-curator only reads them.
