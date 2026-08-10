---
name: Aftermatch
description: A dark, cinematic portfolio system where film-grade editing craft meets platform-native social motion.
colors:
  reel-black: "#0E0D0C"
  slate-charcoal: "#171614"
  surface-deep: "#1D1B17"
  grain-line: "#2A2825"
  ash-grey: "#8C8880"
  projection-white: "#F4F1EA"
  signal-orange: "#E8600C"
  signal-orange-deep: "#C25012"
  signal-gray: "#BFCAD1"
  signal-gray-deep: "#8A959C"
  error-red: "#B85C4A"
typography:
  display:
    fontFamily: "Cabinet Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cabinet Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "General Sans, -apple-system, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "General Sans, -apple-system, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "General Sans, -apple-system, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.01em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  none: "0px"
  sm: "6px"
  md: "14px"
  lg: "28px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
  2xl: "160px"
components:
  button-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.reel-black}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.signal-orange-deep}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.projection-white}"
    rounded: "{rounded.sm}"
    padding: "15px 31px"
  chip-platform:
    backgroundColor: "transparent"
    textColor: "{colors.signal-gray}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  card-reel:
    backgroundColor: "{colors.slate-charcoal}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.projection-white}"
    padding: "10px 0"
---

# Design System: Aftermatch

## Overview

**Creative North Star: "Both, held together"**

Aftermatch runs two registers at once and never lets either one win: the fast, platform-native pulse of social content, and the slower, deliberate pacing of film and gameplay editing. The site reads as cinematic and confident first, with the kinetic, scroll-triggered motion of a social feed running underneath as the register that makes it feel alive rather than static. Nothing here is loud. The near-black stage, the single warm accent, and the restrained copy voice all serve the same idea: craft speaks for itself, so the interface doesn't have to shout to be noticed.

This is a portfolio, not a marketing site: the artifact (the reel, the beat, the frame) leads, and the interface recedes around it. Full-bleed video and stills carry the work; UI chrome exists to frame and elevate them, never compete with them.

No visual references were rejected in the source spec; the one confirmed departure from the system's earlier iteration is documented in Shapes below (softened corners replacing an original sharp-edged system).

**Key Characteristics:**
- Near-black cinematic stage with one warm accent color, used sparingly
- Kinetic scroll reveals and hover physics that read as camera/edit moves, not decoration
- Asymmetric, editorial layout rather than centered marketing-page stacks
- Plain, confident copy voice; craft is the pitch, not the sales language

## Colors

Warm near-blacks and a warm off-white carry the whole system; two accents split cleanly by job, never by preference.

### Primary
- **Signal Orange** (`#E8600C`): the one CTA and craft-register accent. Primary buttons, hover glows, headline emphasis (`<em>` inside stat numbers), the hero's radial glow, focus states on inputs.
- **Signal Orange Deep** (`#C25012`): hover/pressed state for anything using Signal Orange. Never used as a resting color.

### Secondary
- **Signal Gray** (`#BFCAD1`): the cool counterpoint, reserved for social/live metadata only — platform chips, timecodes read alongside mono type, secondary hover glows. Never touches a CTA.
- **Signal Gray Deep** (`#8A959C`): hover/pressed state for Signal Gray elements.

### Neutral
- **Reel Black** (`#0E0D0C`): page background. Never pure `#000`.
- **Slate Charcoal** (`#171614`) → **Surface Deep** (`#1D1B17`): the card/panel gradient surface (`surface-gradient-card`, 160deg). Cards are never a flat single fill.
- **Grain Line** (`#2A2825`): all hairline borders, dividers, and ghost-button strokes.
- **Ash Grey** (`#8C8880`): secondary/muted text.
- **Projection White** (`#F4F1EA`): primary text and headline color. Never pure `#fff`.

### Error
- **Error Red** (`#B85C4A`): form validation errors only (input border, error label). Muted and warm rather than a stock alert red, consistent with the "never pure" neutral rule.

### Named Rules
**The One Light Rule.** Signal Orange is the primary accent; Signal Gray is the one cool counterpoint, and together the two accents cover no more than ~10% of any given screen's visible surface. Their rarity against the near-black stage is the point.

**The Register Split Rule.** Orange is the cinematic/craft register (work, CTAs, primary emphasis). Gray is the social/live register (platform tags, timecodes, metadata). The two never swap jobs — a platform chip is never orange, a primary CTA is never gray.

## Typography

**Display Font:** Cabinet Grotesk (with Helvetica Neue, Arial, sans-serif fallback)
**Body Font:** General Sans (with -apple-system, sans-serif fallback)
**Label/Mono Font:** JetBrains Mono, used exclusively for timecodes, dates, and platform tags

**Character:** Cabinet Grotesk at 600 weight with tight, negative-tracked leading gives headlines a confident, edited-down feel; General Sans carries the humanist warmth of body copy and UI labels. JetBrains Mono is never decorative — it exists specifically to read like an on-screen timecode.

### Hierarchy
- **Display** (600, `clamp(2.75rem, 6vw, 5.5rem)`, 0.98 leading, -0.02em tracking): hero name/headline only, one per page.
- **Headline** (600, `clamp(1.75rem, 3vw, 2.75rem)`, 1.08 leading, -0.01em tracking): section titles ("Short-form content", "Strategy & campaigns").
- **Title** (500, 1.375rem, 1.2 leading): card and item titles (reel captions, expertise line items).
- **Body** (400, 1.0625rem, 1.6 leading, max 65ch measure): lede paragraphs and descriptive copy.
- **Label** (500, 0.8125rem, 1.3 leading, 0.01em tracking): UI labels, form field labels, nav links.
- **Mono** (500, 0.75rem, 1.4 leading, 0.02em tracking, uppercase): eyebrows, timecodes, dates, platform tags only.

### Named Rules
**The Timecode Rule.** Mono type reads as an on-screen timecode. It is reserved for durations, dates, and platform names, and is never used as decorative section labeling or body copy.

**The Rare Eyebrow Rule.** At most one section in three carries a mono eyebrow label above its headline; most sections carry a headline alone. Eyebrows are a punctuation mark, not a default.

## Layout

1440px max container width with 24px inline padding (48px at ≥768px). Compositions favor asymmetric splits, an oversized asset on one side against a compact type block on the other, rather than centered marketing stacks. The work grid is a bento-style `auto-fill` grid (default 250px minimum column, adjustable via the density tweak between 200–310px), not a repeating equal 3-across row; it drops to a strict 2-up grid below 560px. Section rhythm is airy: `space-xl` (96px) padding between major sections on mobile, `space-2xl` (160px) at ≥900px. The hero is a sticky, full-viewport panel that content scrolls up and over, with a translucent blurred `.stage` surface riding on top of it, so the transition from hero to content itself reads as an edit cut. Below 768px, everything collapses to a strict single column.

## Elevation & Depth

Depth is layered, not flat: every card-level surface carries a subtle top-to-bottom gradient (`surface-gradient-card`) instead of one flat fill, and every surface gets ambient lift at rest via a three-step shadow scale, not just on hover. Glow shadows are additive on top of elevation for hover/focus states, never a replacement for the ambient shadow.

### Shadow Vocabulary
- **Elevation 1** (`0 2px 8px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.4)`): resting state for buttons and cards.
- **Elevation 2** (`0 24px 64px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.35)`): hover-lifted cards and metrics.
- **Elevation 3** (`0 40px 100px rgba(0,0,0,0.55), 0 16px 40px rgba(0,0,0,0.4)`): highest-priority elevated surfaces (reserved, not yet used in the current build).
- **Glow Orange** (`0 0 0 1px rgba(232,96,12,0.4), 0 20px 56px rgba(232,96,12,0.22)`): hover/focus for anything in the craft register (primary button, reel cards, metric cards).
- **Glow Gray** (`0 0 0 1px rgba(191,202,209,0.4), 0 20px 56px rgba(191,202,209,0.2)`): reserved for hover/focus on social/live-register elements, per the Register Split Rule.

### Named Rules
**The Additive Glow Rule.** Glow shadows layer on top of ambient elevation on hover; they never appear alone. A hovered card shows `glow + elevation-2`, not glow by itself.

## Shapes

Corners are softened, not sharp: `--radius-sm` (6px) for buttons and nav CTAs, `--radius-md` (14px) for cards and reel thumbnails, `--radius-lg` (28px) for hero-scale panels, and a full pill (999px) reserved for chips. This is a confirmed departure from an earlier, sharp-edged (0px-radius) iteration of this system — corners now round enough to register as real UI depth without softening the brand's technical edge. Cards carry no border; depth comes entirely from shadow and gradient (see Elevation & Depth). The one exception is 1px Grain Line hairlines, used only on ghost-button borders, section dividers, and input underlines.

## Components

### Buttons
- **Shape:** 6px radius (`--radius-sm`).
- **Primary:** Signal Orange fill, Reel Black text, 16px/32px padding, Elevation-1 shadow at rest.
- **Hover/Focus:** fill deepens to Signal Orange Deep, 2px upward lift, shadow swaps to Glow Orange. 200ms ease-out-cinema transition.
- **Ghost:** transparent fill, Projection White text, 1px Grain Line border, 15px/31px padding (1px narrower than primary to compensate for the border). Hover shifts the border to Signal Orange.

### Chips
- **Style:** transparent background, Signal Gray text and border (45% opacity), full pill radius, mono type, uppercase. This is the system's one full-pill shape.
- **State:** an `active` variant fills with 14% Signal Gray and adds a soft gray glow; the default/unselected state stays outline-only.

### Cards / Containers (Reel Card)
- **Corner Style:** 14px radius (`--radius-md`).
- **Background:** Slate Charcoal → Surface Deep gradient (160deg).
- **Shadow Strategy:** Elevation-1 at rest; on hover, lifts 4-8px and swaps to Glow Orange + Elevation-2 (see Elevation & Depth).
- **Border:** none.
- **Internal Padding:** `space-sm` (16px) for the caption block; thumbnail is edge-to-edge above it with a bottom vignette gradient for depth and a 1.03-1.05x scale on hover.
- **Behavior:** a centered play triangle sits over the thumbnail at rest and fades as the thumbnail scrubs on hover, reading as a projector cueing up.

### Inputs / Fields
- **Style:** no fill, no full border — a single 1px bottom hairline in Grain Line, transparent background, 10px vertical padding.
- **Focus:** hairline shifts to Signal Orange with a soft orange glow shadow beneath it.
- **Error/Disabled:** error state shifts the hairline and helper text to Error Red; disabled drops opacity to 40% and holds the hairline in Ash Grey.

### Navigation
- Single-line, 72px-tall bar. Transparent over the hero at rest; once the page scrolls past 40px, it gains a blurred, 82%-opaque Reel Black background and a hairline + Elevation-1 shadow beneath it — the one documented use of `backdrop-filter` in the system. Nav links use Label type in Projection White, shifting to Signal Orange on hover. Below 900px, text nav links hide (mobile treatment not yet designed beyond hiding).

### Reel Scrub (signature behavior)
Not a standalone component but a shared interaction across reel and beat cards: on hover, the thumbnail scales up slightly inside a fixed-aspect frame while the card itself lifts and gains a glow shadow, and the play-triangle overlay fades out, together reading as the thumbnail waking up and starting to play. Every card in the system (reel grid, strategy beats) shares this exact behavior, so it functions as the system's signature motion identity, not a one-off hover effect.

## Do's and Don'ts

### Do:
- **Do** keep Signal Orange to CTAs and the craft register (work, primary actions); keep Signal Gray to platform tags and social/live metadata. (The Register Split Rule.)
- **Do** give every resting surface a gradient and ambient shadow rather than a flat fill; reserve glow shadows for hover/focus, layered on top of elevation, never in place of it.
- **Do** use JetBrains Mono only for timecodes, dates, and platform tags, in uppercase. (The Timecode Rule.)
- **Do** write sentence-case copy everywhere except mono platform tags, which stay uppercase; keep button copy plain ("View reel," "Contact"), never exclamatory or all-caps.
- **Do** respect `prefers-reduced-motion`: collapse scroll reveals to instant opacity and disable hover-scrub when it's set.

### Don't:
- **Don't** use pure `#000` or `#fff` anywhere; the system's blacks and whites are always warm-tinted (Reel Black, Projection White).
- **Don't** use em dashes in any copy, label, or caption; use a period, comma, or hyphen instead.
- **Don't** add a third accent color or let orange and gray combined exceed roughly 10% of a screen's visible surface. (The One Light Rule.)
- **Don't** invent real numbers for the strategy section's impact metrics or add case studies/testimonials that weren't provided; the "Real number to come" TBC treatment is intentional and stays until real data lands.
- **Don't** use eyebrow labels on every section; at most one in three. (The Rare Eyebrow Rule.)
