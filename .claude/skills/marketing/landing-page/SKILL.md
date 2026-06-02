---
name: landing-page
description: "Generates a premium 3D animated single-page HTML landing page from a text prompt or attached brief. Use whenever the user says 'create a landing page', 'build a landing page', 'make a landing page for X', 'I need a web page for Y', or provides product/service details and wants a polished website. Also triggers on 'promotional page', 'product page', 'one-pager', 'web presence', 'sales page', or any variation where the goal is a standalone visual HTML landing page. Always use this skill rather than generating HTML ad hoc — it applies the full brand system and animation stack that makes the result genuinely impressive."
---
 
# Landing Page Generator
 
Creates a polished, self-contained HTML landing page with 3D CSS animations, GSAP ScrollTrigger scroll effects, and mouse-parallax panning. One file in, one `.html` file out.
 
---
 
## Step 1: Extract Content
 
Before writing a single line of HTML, identify these from the prompt or any attached file:
 
| Field | What to extract | Fallback if missing |
|---|---|---|
| **Product name** | The thing being promoted | Use the channel/brand name |
| **Hero headline** | Short, punchy — ideally ≤8 words | Write a sharp one from context |
| **Hero subtext** | 1–2 sentence description | Write it from context |
| **Features / benefits** | 3–6 items, each with a title + 1-sentence description | Invent compelling ones from context |
| **Primary CTA text** | Button label | "Get Started" |
| **Closing headline** | Big final push line | Riff on the hero headline |
| **Closing subtext** | 1 sentence | Optional |
 
If the input is a file, read it fully before generating.
 
---
 
## Step 2: Build the Page
 
The page has three required sections. Build them in order, in a single HTML file.
 
### Section 1 — Hero
 
Full viewport height (`100vh`), Deep Navy background. Content is vertically and horizontally centered.
 
**Structure (top to bottom):**
1. Optional eyebrow label (small, Teal, letter-spaced caps) — use for category/tagline context
2. H1 headline — large, bold, Off-White
3. Subtitle paragraph — 1–2 sentences, muted Off-White
4. CTA button — Teal background, Navy text
5. Scroll-down indicator — subtle animated chevron at bottom center
 
**Background depth layers (all `position: absolute`, `pointer-events: none`, `overflow: hidden` on the hero container):**
 
Layer `.hero-shapes-back` (moves most on mouse):
- Large outlined rectangle: `340×200px`, `border: 2px solid rgba(0,212,170,0.12)`, `border-radius: 12px`, positioned `top: 12%; right: 7%`
- Small filled circle: `70×70px`, `border-radius: 50%`, `background: rgba(0,212,170,0.07)`, positioned `bottom: 22%; left: 8%`
 
Layer `.hero-shapes-mid` (moves less on mouse):
- Rotated square (diamond): `55×55px`, `background: rgba(245,166,35,0.18)`, `transform: rotate(45deg)`, positioned `top: 58%; right: 16%`
- Teal accent dot: `10×10px`, `border-radius: 50%`, `background: #00D4AA`, positioned `top: 28%; left: 7%`
 
Apply floating keyframe animations to shapes (see CSS Patterns).
 
---
 
### Section 2 — Features / Content
 
Background: either `#0D1F38` (dark, slightly lighter than hero — good default) or `#F7F7F2` (Off-White, for contrast). Use dark unless the content feels especially light/approachable (e.g., a personal brand or consumer product).
 
**Structure:**
1. Centered section headline (H2) — Inter 700, Off-White (or Navy on light bg)
2. Optional centered section subtext — 1 sentence
3. Grid of feature cards — 3 columns by default; 2 columns if exactly 4 features
 
**Feature card anatomy:**
```
[SVG icon — 28px, Teal stroke]
[Card title — Inter 600, 22px]
[Card description — Inter 400, 15px, muted]
```
 
Draw simple geometric SVG icons inline (lines, circles, paths) — match the card's concept. No icon font needed.
 
---
 
### Section 3 — Closing CTA
 
Full-width, Deep Navy. Centered layout.
 
**Structure:**
1. Large closing headline — Inter 800, 52–62px, Off-White
2. Short subtext — 1 sentence
3. CTA button (same style as hero)
4. Ambient glow behind button: `radial-gradient(ellipse 400px 200px at 50% 50%, rgba(0,212,170,0.12), transparent)`
 
---
 
## Brand System
 
### Colors
```css
--navy:       #0A1628;
--navy-mid:   #0D1F38;
--teal:       #00D4AA;
--teal-glow:  rgba(0, 212, 170, 0.12);
--amber:      #F5A623;
--off-white:  #F7F7F2;
--text-muted: rgba(247, 247, 242, 0.68);
--card-bg:    rgba(0, 212, 170, 0.06);
--card-border:rgba(0, 212, 170, 0.15);
```
 
### Typography
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```
 
| Use | Weight | Size |
|---|---|---|
| Hero H1 | 800 | 68–82px |
| Section H2 | 700 | 44–52px |
| Card titles | 600 | 22–24px |
| Body / descriptions | 400 | 15–17px |
| Eyebrow labels | 600 | 13px, 0.1em letter-spacing, uppercase |
| CTA button | 700 | 17px |
 
### CTA Button
```css
.btn-primary {
  display: inline-block;
  background: #00D4AA;
  color: #0A1628;
  padding: 16px 42px;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 17px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.15s ease;
}
.btn-primary:hover {
  background: #00bfa0;
  transform: translateY(-2px);
}
```
 
### Feature Cards
```css
.feature-card {
  background: rgba(0, 212, 170, 0.06);
  border: 1px solid rgba(0, 212, 170, 0.15);
  border-radius: 12px;
  padding: 36px 28px;
  transition: background 0.25s, border-color 0.25s, transform 0.25s;
}
.feature-card:hover {
  background: rgba(0, 212, 170, 0.1);
  border-color: rgba(0, 212, 170, 0.3);
  transform: translateY(-5px);
}
```
 
---
 
## Required CDN Scripts
 
Always include these — no exceptions:
 
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```
 
---
 
## Animation Patterns
 
### Page Load — Hero Entrance
Set initial states with `gsap.set()` first to prevent flash:
 
```javascript
gsap.registerPlugin(ScrollTrigger);
 
// Hide everything first
gsap.set([".hero-eyebrow", ".hero-title", ".hero-subtitle", ".hero-cta", ".scroll-indicator"], {
  opacity: 0, y: 30
});
 
// Staggered entrance
const heroTl = gsap.timeline({ delay: 0.2 });
heroTl
  .to(".hero-eyebrow",       { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
  .to(".hero-title",         { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" }, "-=0.3")
  .to(".hero-subtitle",      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
  .to(".hero-cta",           { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.4")
  .to(".scroll-indicator",   { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");
```
 
### Mouse Parallax (Panning Effect)
This is the "3D panning" feel — background layers drift at different speeds from cursor movement. Apply to the hero:
 
```javascript
const hero = document.querySelector('.hero');
hero.addEventListener('mousemove', (e) => {
  const rect = hero.getBoundingClientRect();
  const xPct = (e.clientX - rect.left) / rect.width - 0.5;
  const yPct = (e.clientY - rect.top)  / rect.height - 0.5;
 
  gsap.to(".hero-shapes-back", { duration: 2.0, x: xPct * -45, y: yPct * -22, ease: "power1.out" });
  gsap.to(".hero-shapes-mid",  { duration: 1.5, x: xPct * -22, y: yPct * -11, ease: "power1.out" });
  gsap.to(".hero-content",     { duration: 1.2, x: xPct *   8, y: yPct *   5, ease: "power1.out" });
});
```
 
Two shape layers moving at different speeds creates genuine perceived depth. The content layer moves subtly in the same direction as the cursor, like a camera pan.
 
### Scroll-Triggered Feature Cards (3D Reveal)
Cards flip up from a slight forward tilt — one of the most readable "wow" scroll effects:
 
```javascript
gsap.set(".feature-card", {
  opacity: 0, y: 55, rotateX: 18,
  transformPerspective: 900, transformOrigin: "top center"
});
 
gsap.to(".feature-card", {
  scrollTrigger: {
    trigger: ".features-section",
    start: "top 68%",
    toggleActions: "play none none reverse"
  },
  opacity: 1, y: 0, rotateX: 0,
  duration: 0.75,
  stagger: 0.11,
  ease: "power2.out"
});
```
 
### Features Section Headline
```javascript
gsap.from(".features-headline", {
  scrollTrigger: { trigger: ".features-section", start: "top 72%" },
  opacity: 0, y: 35, duration: 0.8, ease: "power3.out"
});
```
 
### Closing Section
```javascript
gsap.from(".closing-content", {
  scrollTrigger: { trigger: ".closing-section", start: "top 72%" },
  opacity: 0, y: 45, duration: 1.0, ease: "power3.out"
});
```
 
### Floating Shapes — CSS Keyframes
Don't use GSAP for the ambient float — CSS keyframes are smoother and cheaper:
 
```css
@keyframes floatA {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50%       { transform: translateY(-16px) rotate(4deg); }
}
@keyframes floatB {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50%       { transform: translateY(-11px) rotate(-3deg); }
}
@keyframes floatC {
  0%, 100% { transform: translateY(0px) rotate(45deg); }
  50%       { transform: translateY(-9px) rotate(50deg); }
}
.float-a { animation: floatA 7s ease-in-out infinite; }
.float-b { animation: floatB 9s ease-in-out infinite 1.5s; }
.float-c { animation: floatC 6s ease-in-out infinite 0.5s; }
```
 
Apply `.float-a`, `.float-b`, `.float-c` to the decorative shapes.
 
### Scroll-Down Indicator
A small animated arrow at the bottom of the hero — bounces gently:
 
```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); opacity: 0.5; }
  50%       { transform: translateY(7px); opacity: 1; }
}
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s ease-in-out infinite;
  cursor: pointer;
}
```
 
SVG: a simple downward chevron, `stroke: #00D4AA`, `width: 24`.
 
---
 
## General Layout Rules
 
```css
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: 'Inter', sans-serif; background: #0A1628; color: #F7F7F2; overflow-x: hidden; }
 
.hero { position: relative; height: 100vh; display: flex; align-items: center; justify-content: center; background: #0A1628; overflow: hidden; }
.hero-content { position: relative; z-index: 2; text-align: center; max-width: 780px; padding: 0 24px; }
 
.features-section { padding: 100px 24px; }
.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1100px; margin: 0 auto; }
@media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 580px) { .features-grid { grid-template-columns: 1fr; } }
 
.closing-section { padding: 120px 24px; text-align: center; background: #0A1628; position: relative; overflow: hidden; }
.closing-content { position: relative; z-index: 2; max-width: 700px; margin: 0 auto; }
```
 
---
 
## Output
 
1. Write the complete HTML file in a single pass. Don't outline first — just write it.
2. Save to: `/sessions/wonderful-intelligent-ride/mnt/FrankBot/<product-name-kebab>-landing.html`
3. The file must be 100% self-contained. All CSS in `<style>`, all JS in `<script>`. External calls: Google Fonts + cdnjs GSAP only.
4. Provide a `computer://` link using the full path.
 
**File naming:** lowercase kebab-case from the product name. "Quill AI" → `quill-ai-landing.html`. "User" → `user-landing.html`.