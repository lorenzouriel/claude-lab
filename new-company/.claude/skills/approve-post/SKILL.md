---
name: approve-post
description: >
  Publishes an approved content package: flips blog draft to published, copies carousel
  PNGs to the site's public folder, commits and pushes, waits for deploy, and posts the
  carousel to Instagram + Facebook via Meta Graph API. Use after /publish-topic.
---

# /approve-post - Publish Approved Content

This bridges approved content (blog + carousel + captions created by `/publish-topic`) to publishing.

## Required setup

- Blog/site folder or publishing target configured
- Meta API credentials in `.env`
- `scripts/post-instagram.js`
- `scripts/post-facebook.js`

If something is missing, stop and point to setup.

## Flow

1. Locate files from the provided slug:
   - Blog markdown
   - `marketing/content/<slug>-*/instagram/slide-XX.png`
   - `caption.md`
   - `caption-linkedin.md`
2. Show summary and ask for final confirmation.
3. Flip blog `draft: true` to `draft: false`.
4. Copy PNGs to the configured public folder.
5. Commit and push.
6. Wait for deploy if applicable.
7. Post to Instagram.
8. Post to Facebook.
9. Show LinkedIn text for manual posting.
10. Summarize links/status.

## Rules

- Never publish without final confirmation.
- If deploy fails, stop and report.
- LinkedIn remains manual unless a configured API flow exists.
