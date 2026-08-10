# Aftermatch — Design System

Design system for **Peter Sakhnini's portfolio** ("Aftermatch"): a dark, high-impact portfolio for a social media manager and cinematic editor who cuts video-game highlights into Instagram Reels and TikToks for brands, agencies, and creators sizing up craft.

**Source:** `Portfolio Claude/DESIGN.md`, a full design spec (colors, type, spacing, shadow, shape, and component rules) written for this portfolio site. No codebase, Figma file, logo, icon set, or slide deck was attached — every value in this system traces back to that one spec file, since evolved on request (renamed from "The Screening Room," teal swapped for a electric-blue accent, added depth/elevation). There is one product: the portfolio website itself.

## Content fundamentals

- **Register:** two voices held at once — the fast, platform-native rhythm of social content, and the slower, deliberate pacing of film/gameplay editing. Copy stays plain and confident, never hypey.
- **Sentence case everywhere** except platform tags, which are uppercase mono (e.g. "INSTAGRAM"). Button copy: "View reel", "Contact" — not "VIEW REEL" or "View Reel!".
- **No em dashes** in any copy, label, or caption (house rule from the spec) — use a period, comma, or hyphen.
- **Eyebrow labels are rare:** at most one section in three gets one; most sections carry a headline alone.
- **Hero copy budget:** one headline (≤2 lines), one subtext line (≤20 words), one primary CTA — all visible without scrolling.
- **No emoji.**
- **Mono type reads as an on-screen timecode** — durations, dates, platform names only. Never used as decorative section labeling.

## Visual foundations

- **Color:** one near-black stage (Reel Black `#0E0D0C`), layered surfaces (Slate Charcoal `#171614` → `#1D1B17` gradient), warm-tinted hairlines (Grain Line `#2A2825`), one deep warm accent (Signal Orange `#E8600C`, hover deepens to `#C25012`), one cool accent (Signal Gray `#BFCAD1`, hover `#8A959C`) reserved for social/live metadata. Never pure `#000`/`#fff`. **The One Light Rule:** orange is the primary accent; gray is the one cool counterpoint, ≤10% of visible surface combined. **The Register Split Rule:** orange = cinematic/craft register (work, CTAs), gray = social/live register (platforms, metadata, live status) — they never swap jobs.
- **Type:** Cabinet Grotesk (display/headline, 600 weight, tight leading, negative tracking) + General Sans (body/title/label, humanist grotesk) + JetBrains Mono (timecodes/dates/platform tags only). No serif anywhere. Emphasis inside a headline uses italic/bold of the same family, never a family swap.
- **Spacing:** 8/16/24/48/96/160px scale. Section rhythm is airy (`py-32` to `py-48`+ between major sections); the work grid tightens to a contact-sheet density.
- **Layout:** 1440px max width, asymmetric split compositions (large asset one side, compact type block the other) rather than centered stacks. Work grid is a bento (2-up/1-up mix), never a repeating equal 3-across row. Strict single column below 768px; work grid becomes a vertical snap-scroll.
- **Backgrounds:** layered, not flat — a soft radial orange/gray glow behind the hero (`--surface-gradient-hero`), a subtle top-to-bottom gradient on every card surface (`--surface-gradient-card`) instead of one flat fill. Full-bleed video/stills still carry the work; the gradients just give the UI itself some depth instead of reading as pasted-on flat panels.
- **Shadows/elevation:** three-step elevation scale (`--shadow-elevation-1/2/3`, soft ambient dark shadows) gives every surface some lift at rest, not just on hover. Glow shadows (`--shadow-glow-orange`, `--shadow-glow-gray`) layer on top for hover/focus of cards, chips, and the primary CTA — glow is additive to elevation, not a replacement for it.
- **Shapes/radii:** softened from the original sharp system — buttons and nav CTAs take a 6px radius, cards and hero panels take 14–28px, chips stay full pill. Corners round enough to feel like real UI depth, not so much that it loses the brand's confident, technical edge.
- **Cards:** gradient Slate Charcoal surface, 14px rounded corners, soft elevation shadow at rest that lifts (−4px translateY) into a glow + deeper shadow on hover; thumbnail has a bottom vignette gradient for depth and scales 1.03x on hover. Caption block below the asset uses 16px padding (title, mono duration/date, gray platform chips, in that order).
- **Animation:** motivated, camera/edit-like — focus pulls, hover-scrub thumbnails, lift-on-hover cards, scroll reveals that mimic a projector spinning up. 200–400ms ease-out on hover transitions. Every animation must be justifiable in one sentence (hierarchy, storytelling, feedback, or state); `prefers-reduced-motion` collapses reveals to instant opacity and disables scrub.
- **Hover states:** orange fill deepens to Signal Orange Deep + 2px lift + glow on the primary button; ghost button border shifts orange; cards lift and gain a glow + deeper shadow; nav links shift to orange; nav itself gains a blurred, semi-transparent background once scrolled.
- **Press states:** not separately specified in the source — treat as the hover state holding (no scale-down/press animation documented).
- **Borders:** 1px Grain Line hairlines on ghost buttons, dividers, and input underlines. No borders on cards — depth comes from shadow and gradient instead.
- **Transparency/blur:** nav is transparent over the hero until first scroll, then a blurred, semi-opaque Reel Black bar (`backdrop-filter: blur`) — the one documented + extended use of transparency. No glassmorphism elsewhere.
- **Imagery color vibe:** not documented in the source (no real photography/video was provided) — placeholders use a Slate Charcoal gradient. Ask the user for real reels/stills before shipping.

## Iconography

No icon set, icon font, or SVG sprite was provided in the source. The spec mentions inline platform icons on chips ("from an icon library, never hand-drawn") without naming one. **Substitution:** none used yet in this system's cards; if a UI kit needs a glyph (menu, play, external link, platform marks), pull from a CDN line-icon set (e.g. Lucide) matching a light, even stroke weight, and flag it inline. No emoji; no unicode-as-icon usage documented.

## Fonts — substitution note

Cabinet Grotesk, General Sans, and JetBrains Mono are loaded live from `tokens/fonts.css` via the Fontshare and Google Fonts CDNs (`@import`) — these are the actual named fonts, not substitutes, since Fontshare distributes them for free. No local font files were provided; if you'd rather self-host, upload the `.woff2` files and this can switch to local `@font-face`.

## Intentional additions

The DESIGN.md front-matter names four components (`button-primary`, `button-ghost`, `chip-platform`, `nav`) and its prose additionally specs a project/reel card, a form input, and the "Reel Scrub" card-hover behavior. All of these are built. Beyond the spec: a layered elevation + gradient depth system and a green accent replacing the original teal, both added on direct request — flagged here since they diverge from the literal source file.

## Index

- `styles.css` — root stylesheet, `@import`s only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `shapes.css`, `shadows.css`, `fonts.css`.
- `components/` — `buttons/Button`, `chip/Chip`, `navigation/Nav`, `card/ReelCard`, `forms/Input`. Each folder has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a `@dsCard` HTML demo.
- `ui_kits/portfolio/` — the one product: home page (nav, hero, work grid, contact) as an interactive `index.html`.
- `guidelines/` — foundation specimen cards (colors, type, spacing, shapes, elevation, states, layout).
- `assets/` — empty. No logo or imagery was provided; the wordmark is set in Cabinet Grotesk wherever a mark would go. See `assets/README.md`.
- `SKILL.md` — Claude Code / Agent Skills–compatible entry point.
