# brain/ — your second brain (PARA)

This is the company's knowledge store, organized with the **PARA** method.
Claude reads it on demand (unlike `memory/`, which it reads every session).

Open this folder directly as an Obsidian vault.

| Folder | Holds | Lifespan |
|---|---|---|
| `0-inbox/` | Raw files dropped for one-time reading | Until processed |
| `1-projects/` | Active efforts with a goal **and** a deadline | Until shipped |
| `2-areas/` | Ongoing responsibilities, no end date | Forever |
| `3-resources/` | Reference material reused across work | Until irrelevant |
| `4-archive/` | Completed projects + inactive areas | Cold storage |

**The flow:** files land in `0-inbox/` → become work in `1-projects/` or feed
an `2-areas/` responsibility → reusable references settle in `3-resources/` →
finished or dormant things move to `4-archive/`. Nothing is deleted; it moves.

**The skills that run it:**

- `/ingest` — feeds the brain. Drop a file/URL/note, it files atomic, linked
  notes into the right PARA folder and updates what already exists.
- `/synthesize` — compounds the brain. Surfaces patterns across recent notes
  and writes them up as new ones.
- `/research-deep` — researches the brain first, fills only the gaps, files the
  answer back in.

`index.md` is the catalog of every note, kept current by those skills.
