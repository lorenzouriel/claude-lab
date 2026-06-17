---
name: publish-topic
description: >
  Orchestrates a complete SEO + social content package from a topic. Writes a blog post,
  creates a carousel summary, and generates three captions. Use when the user asks to
  publish a topic or turn a topic into content.
---

# /publish-topic - SEO + Social Content Pipeline

## Context

- **Content strategy:** `output/marketing/seo/05-content-strategy.md`
- **Tone of voice:** `memory/preferences.md`
- **Context:** `memory/company.md`, `brain/3-resources/identity/design-guide.md`

## Flow

1. **Choose topic:** Use the explicit topic, or read `output/marketing/seo/05-content-strategy.md` and ask which topic to use.
2. **Write blog post:** Generate markdown with frontmatter, `draft: true`, optimized title, meta description, H2/H3 structure, practical examples, and a natural business connection.
3. **Carousel summary:** Create the carousel directly by using the carousel/Instagram visual skill pattern.
4. **Captions:** Save all captions in the content folder:
   - `caption.md` (Instagram + Facebook)
   - `caption-linkedin.md`
   - `caption-short.md`
5. **Delivery summary:** Show blog path, carousel path, captions, and publishing checklist.

## Output folder

```text
output/marketing/content/<blog-slug>-<YYYY-MM-DD>/
```

## Rules

- Blog is the parent piece; carousel and captions derive from it.
- Everything should connect: carousel points to blog, blog points to contact/offer.
- Always start as draft. Never publish automatically; the user reviews first or uses `/approve-post`.
- If the user asks only for a standalone carousel, use the carousel skill directly.
