# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are people evaluating Peter Sakhnini's craft as a social media manager and cinematic short-form editor: hiring managers and recruiters at game studios, publishers, and agencies, as well as brands, agencies, and creators who might commission freelance/contract work. The portfolio is not built for a single active job search or pitch right now; it's a durable, living showcase of Peter's Battlefield/EA DICE work that serves either audience whenever the need arises.

## Product Purpose

A personal portfolio site for Peter Sakhnini, currently Global Social Media Manager on Battlefield at EA DICE. It exists to demonstrate craft across two combined disciplines: platform-native short-form social strategy (TikTok, Instagram Reels, X) and cinematic, film-editing-grade content creation for a major game franchise. Success is a visitor coming away with a clear, credible sense of Peter's work and voice, whether or not they take action immediately.

## Positioning

The combination a neighboring candidate or vendor can't truthfully copy: hands-on cinematic editing craft for a AAA game franchise (Battlefield / EA DICE) paired with platform-native social strategy and community/cultural-relevancy instincts, held at both a launch-moment scale (franchise beats, major reveals) and a daily-rhythm scale (community response, trend-responsive cuts). The About section's game-credit list backs this up with a visible career arc: asset-vendor work on Lost in Random and It Takes Two, into asset production and then manager-level ownership across two Battlefield titles.

## Operating Context

The live site is a single self-contained HTML file (`Peter Sakhnini Portfolio.html`) with React 18 and Babel Standalone loaded from CDN and compiled in-browser — no build step or bundler. Styling and design tokens come from the "Aftermatch" design system (`_ds/...`). Content sections, in current page/nav order: About (statement, game-credit grid, skills, social links), Work (short-form reel grid), Strategy (featured campaign beats + impact metrics), and Contact. A `TweaksPanel` lets the motion intensity, hero scrim darkness, accent color, reel grid density, and section order be adjusted live via a small settings UI baked into the page (default order is currently About-first). Real assets on hand include a hero background video and a few images already placed in `uploads/`; most work-grid slots are still empty drop-zones or TBC placeholders.

## Capabilities and Constraints

- No build tooling: any code change must keep working with in-browser Babel/React from CDN in a single HTML entry point — no framework migration.
- Section content is data-driven from small arrays in `portfolio-sections.jsx`: `REELS` (work grid), `BEATS` (strategy), `GAMES` (About section game-credit list — title + role pairs), `SKILLS` (About section tools list), and `GAME_ART` (key-art image paths wired into each game credit's `image-slot`). Future edits to copy or work items should extend those arrays rather than hand-writing new markup per item.
- Impact metrics ("X Million organic views," "X% engagement increase") are intentionally left as TBC placeholders — not to be replaced with invented numbers. Preserve the visible "Real number to come" treatment until Peter supplies real figures.
- Only one of six featured reels has a real embed (the Battlefield REDSEC teaser, via TikTok iframe). The remaining five reel slots and all three strategy "beat" slots are intentionally left as empty drop-zone placeholders for now — do not fabricate additional case studies, clips, or embeds to fill them.
- The About section's five game-credit slots (`image-slot` ids `game-1`–`game-5`) are progressively getting real key art dropped in directly inside Claude Design; treat any slot without a wired `src` as still-pending, not a bug to fill with a placeholder image.
- Contact form has no backend wired up (submit currently just prevents default); treat as a known gap, not a bug, unless asked to wire it.

## Brand Commitments

- Name/mark: "Peter Sakhnini," set in the display typeface wherever a wordmark appears; no logo or icon set exists beyond that.
- Confirmed social links: LinkedIn (linkedin.com/in/peter-sakhnini) and X (@PeterSMK2) — these are the only contact channels currently wired into nav, about, and footer.
- Voice: plain and confident, never hypey; sentence case everywhere except uppercase mono platform tags; no em dashes; no emoji. (Full visual/voice system lives in the design system's readme, not duplicated here.)
- Current role title used throughout: "Global Social Media Manager | Battlefield — EA DICE" (hero) / "Social Media Manager, Battlefield" (footer) — keep these in sync if the title changes.

## Evidence on Hand

- One real embedded work sample: the Battlefield REDSEC First Teaser (TikTok).
- A hero background video and a handful of images already uploaded to the project's `uploads/` folder.
- Confirmed game-credit history, in About's display order: Lost in Random (Asset Vendor), It Takes Two (Asset Vendor), Battlefield 2042 (Social Media Asset Producer), Battlefield 2042 (Social Media Manager & Asset Producer), Battlefield 6 (Global Social Media Manager & Asset Producer).
- Confirmed tools/skills list: Adobe After Effects, Adobe Photoshop, Adobe Premiere Pro, Frostbite Engine.
- Key art for the game-credit slots is being added incrementally by Peter directly in Claude Design (not all five slots are filled yet).
- No real performance metrics yet (views, engagement lift) — these remain TBC per Peter's explicit choice, not an oversight.
- No additional case studies, testimonials, or press mentions on hand; none should be fabricated.

## Product Principles

1. Craft is the pitch: cinematic polish and technical precision in the site itself should mirror the editing craft it's showcasing, not undercut it with generic portfolio tropes.
2. Never fabricate proof. Placeholder metrics, empty reel slots, and TBC labels stay visibly honest until Peter supplies real assets or numbers.
3. Two registers, one voice: content should read as equally credible to a AAA studio hiring manager and to a brand/agency client, without tilting into either audience's jargon.
4. Keep it a living document: the site should stay easy for Peter to extend (new reels, new beats, updated metrics, new game credits) without structural rework.
