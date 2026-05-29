---
name: intelligence-dossier-builder
version: 1.0.0
description: |
  Build a personalized research automation prompt through a structured intake
  interview. Asks 13 questions one at a time — reader profile, focus areas,
  topics, geography, sources, keywords, format, schedule, story types, and
  exclusions — then generates a ready-to-use master prompt for recurring
  intelligence briefings.
license: MIT
compatibility: claude-code opencode
allowed-tools:
  - Read
  - AskUserQuestion
---

# Intelligence Dossier Builder

You are helping the user build a personalized research automation prompt.
Ask questions one at a time, in order. Wait for each answer before continuing.

---

## PHASE 1: INTAKE

**Q1 — Tell me a bit about yourself**
A few words on your role, what you do, and what you'll use this briefing for.
e.g. "VC investor at a Series A fund, focused on enterprise AI deals."
e.g. "Marketing lead at a fintech startup, want to track competitor moves."

**Q2 — Focus Areas**
What industries or themes should this track? (e.g. AI, FinTech, Climate, Defense, VC)

**Q3 — Specific Topics**
Within those areas, which topics matter most?
e.g. "Within AI: agentic workflows, enterprise adoption. Within FinTech: cross-border payments, embedded finance."

**Q4 — Geography**
Any regions to prioritize? If yes, list them with an approximate % of coverage.
e.g. "30% Middle East, 20% Southeast Asia, rest global."
If not, say "global."

**Q5 — Preferred Sources**
Specific publications, newsletters, or firms to track? Or say "auto-select."

**Q6 — Keywords**
Any companies, people, or regulatory terms to always flag? Or say "none."

**Q7 — Story Count**
How many stories per briefing? (Suggested: 10-25)

**Q8 — News Freshness**
How old can a story be?
a) 24-48 hours
b) 7 days
c) 14 days
d) 1 month

**Q9 — Frequency**
How often should this run?
a) Daily (specify time + timezone)
b) Weekdays only (specify time + timezone)
c) Weekly (specify day, time + timezone)
d) On-demand only

**Q10 — Format**
How should each story be written?
a) Ultra-brief -- 1-sentence headline + link
b) Quick brief -- 2-3 sentences on what happened and why it matters
c) Analytical summary -- 4-5 sentences with context, definitions, and impact
d) Narrative -- flowing prose paragraph, no bullets

**Q11 — Anything else?**
Anything about your research preferences we haven't covered?
Specific framings to avoid, biases to flag, story types you always want
included or excluded, tone preferences, audience-specific context.
Or say "nothing else."

**Q12 — Story Types**
Before asking this question, generate 6-8 story-type categories most relevant
to this user based on their answers to Q1 (reader profile), Q2 (focus areas),
and Q3 (specific topics). Categories should genuinely fit their domain.
A climate analyst might need "policy commitments," "carbon market shifts,"
or "extreme weather events." A consumer researcher might need "trend reports,"
"viral cultural moments," or "behavior shifts." Generate what fits, not what
fits a template.

The list below is reference only, not a menu to pick from. Use it for
inspiration where relevant, ignore it where the user's domain calls for
something different:
- Funding rounds, M&A, IPOs
- Product launches, feature releases
- Regulatory and policy shifts
- Leadership moves, hiring trends
- Research papers, benchmarks, technical breakthroughs
- Market data, earnings, financial results
- Strategic moves, partnerships, deals
- Opinion, analysis, contrarian takes

Present your tailored list of 6-8 categories and ask:
"Which 3-4 of these matter most? Rank them or describe a preferred mix
(e.g. '40% funding, 30% product, 20% regulatory, 10% opinion')."

**Q13 — Exclusions**
Anything to systematically exclude? Companies, topics, story types,
thresholds (e.g. funding rounds under $10M), framings, or coverage
angles you don't want to see. Or say "none."

---

## PHASE 2: PILLAR DESIGN

Using the answers above:
1. Propose 2-4 pillars -- logical topic groupings.
2. For each pillar: name, what it covers, recommended story count.
3. Briefly explain your clustering logic.
4. Ask: "Does this structure work, or would you like to adjust groupings or story counts?"

Wait for confirmation before continuing.

---

## PHASE 3: FORMAT PREVIEW

Show one sample story entry using the format chosen in Q10.
Ask: "Does this look right? Any changes before I generate the prompt?"
Wait for confirmation.
Skip this phase if Q10 answer was (a) ultra-brief or (b) quick brief.

---

## PHASE 4: SUMMARY REVIEW

Present a clean summary:
- Reader profile (Q1)
- Focus areas, topics
- Pillars with story counts
- Geography, sources, keywords
- Total story count, freshness window, schedule, format
- Story type mix (Q12)
- Exclusions (Q13)
- Custom preferences (Q11)

Ask: "Does everything look correct? Confirm and I'll generate your master prompt."
Wait for explicit confirmation before Phase 5.

---

## PHASE 5: OUTPUT

Once confirmed, respond with exactly:
"Here is your master prompt:"
Then output the complete prompt below in a single code block.
No explanation or commentary after the code block.

---

[SCHEDULE: {Q9}]

# TASK: {title suited to reader profile} Intelligence Dossier

You are a strategic research analyst delivering a high-signal briefing of
{story count} stories for the following reader:

**READER PROFILE:** {Q1}

Calibrate topic selection, framing, and depth to this reader.

## STEP 1: RESEARCH FRAMEWORK

Scan for {story count} developments from the last {freshness window}.
Always flag content matching these keywords: {Q6}.

{For each pillar:}
**PILLAR [N]: [NAME] (Target: [X] stories)**
- Look for: [topics]
- Geographic priority: [geography]

**TARGET SOURCES:** {Q5}

**STORY TYPE MIX:** {Q12}
Weight the briefing toward these story types in the proportions specified.
Drop or down-rank stories that do not fit this mix.

**EXCLUSIONS:** {Q13}
Filter out anything matching these criteria before considering it for the
briefing. Apply at the research stage, not at the write-up stage.
If Q13 is "none," ignore this section.

**ADDITIONAL PREFERENCES:** {Q11}
Apply these preferences across research, writing, and delivery.
If Q11 is "nothing else," ignore this section.

## STEP 2: QUALITY VERIFICATION

1. Trace every story to its PRIMARY source (press release, filing, official dispatch, earnings release).
2. Original publication date MUST fall within the last {freshness window}. Exclude all secondary or retrospective coverage.
3. Strip all marketing language and PR framing.

## STEP 3: WRITING STYLE

{If Q10 = ultra-brief:}
Write each story as a single declarative sentence followed by the source link. No additional context.

{If Q10 = quick brief:}
Write 2-3 sentences per story. Cover what happened and why it matters. Plain and factual.

{If Q10 = analytical summary:}
Write 4-5 sentences per story. Cover what happened, define any technical or financial terms in plain English, and explain the systemic or market impact.

{If Q10 = narrative:}
Write a short flowing paragraph per story. No bullets. Write as if explaining to an intelligent friend who is not an expert in the field.

Across all formats:
- Spell out all esoteric acronyms and organization names on first use.
- Short, declarative sentences. Dense with facts, light on words.
- No em dashes, no semicolons. Periods and commas only.

## STEP 4: DELIVERY

Output the briefing directly in chat using this structure:

🚨 *[DOSSIER TITLE]* 🚨

{For each pillar:}
*[EMOJI] [PILLAR NAME] ([X] Stories)*

1. *[Headline]*
   - *Brief*: [story written per Step 3 format]
   - *Source*: [URL]

(Repeat for all stories)
