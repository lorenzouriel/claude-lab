---
name: google-ad
description: >
  Creates a complete Google Ads campaign structure from a briefing or SEO research.
  Generates CSVs ready to import into Google Ads Editor with Search campaigns organized
  by cluster, ad groups, keywords, RSAs, extensions, and negatives. Use when the user
  asks for a Google Ads campaign.
---

# /google-ad - Google Ads Campaign Structure

Builds the whole campaign as import-ready CSVs for Google Ads Editor.

## Context

- **Business context:** `_memory/company.md`
- **Tone of voice:** `_memory/preferences.md`
- **SEO research if available:** `marketing/seo/01-demand-research.md`, `06-google-ads.md`
- **Outputs:** `marketing/campaigns/google-ads-<YYYY-MM-DD>/`

## Flow

1. **Briefing:** If no briefing was provided, ask what product/service to sell, region, budget, destination URL, phone/contact, and what not to advertise.
2. **Keyword research:** Use existing SEO research when available. Otherwise use WebSearch to identify transactional/commercial terms.
3. **Campaign structure:** Group by intent and theme. One campaign per major offer/region; one ad group per tight keyword cluster.
4. **RSAs:** Generate 3 responsive search ads per group, with varied headlines, descriptions, and proof/value angles.
5. **Extensions:** Generate sitelinks, callouts, structured snippets, call extension, and location extension when data exists.
6. **Settings:** Create `settings.md` with location, language, schedule, device recommendations, conversion goal, and budget notes.
7. **CSVs:** Save:

```text
marketing/campaigns/google-ads-<YYYY-MM-DD>/
  campaigns.csv
  ad-groups.csv
  keywords.csv
  ads-rsa.csv
  extensions.csv
  negatives.csv
  settings.md
  README-import.md
```

8. **Summary:** Tell the user what was created and how to import it.

## Rules

- Never invent CPC data.
- Do not advertise informational terms.
- Start mostly with phrase match; use exact match for premium terms.
- Copies strictly follow `_memory/preferences.md`.
- Every CSV must be valid for spreadsheet editing/import review.
