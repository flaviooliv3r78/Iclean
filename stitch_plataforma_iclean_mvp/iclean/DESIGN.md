---
name: IClean
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3f4850'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#006c4a'
  on-secondary: '#ffffff'
  secondary-container: '#82f5c1'
  on-secondary-container: '#00714e'
  tertiary: '#825100'
  on-tertiary: '#ffffff'
  tertiary-container: '#a36700'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#85f8c4'
  secondary-fixed-dim: '#68dba9'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-xxs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  touch-target-min: 3.25rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  container-max: 72rem
---

## Brand & Style

The brand identity balances domestic trust, cleanliness, and utmost simplicity. Designed for homeowners, renters, and independent domestic cleaners across suburban and emerging urban neighborhoods, the interface eliminates friction for users with varying levels of digital literacy.

The design movement merges **Warm Functional Minimalism** with **Tactile Clarity**:
- **Clarity and Reassurance:** Open, pristine white surfaces accented with gentle sky and mint tones that convey freshness, sanitation, and safety.
- **Cognitive Ease:** Low cognitive overhead with explicit visual anchors, self-explanatory iconography, and human, empathetic Brazilian Portuguese copy.
- **Physical Touch Readiness:** UI components mimic clear, responsive physical cards and buttons to assure users that actions have been successfully taken.

## Colors

The palette is tuned specifically for maximum contrast (WCAG AAA adherence on key actions) and perceived cleanliness:

- **Primary (`#0284C7` - Sky Blue):** Directs the primary flow, key actions, primary links, and verification badges. Conveys professionalism, institutional trust, and water-like freshness.
- **Secondary (`#059669` - Fresh Mint/Emerald):** Highlights confirmed bookings, successful payments, active status flags, and trust indicators.
- **Tertiary (`#F59E0B` - Amber Warmth):** Used selectively for ratings, reviews, urgent booking notices, and pending steps.
- **Neutral Core (`#0F172A` - Deep Slate):** Anchors high-contrast headlines and body copy, ensuring immediate readability outdoors or under low-cost mobile screens.
- **Supporting Backgrounds:** `#FFFFFF` (Card surfaces), `#F8FAFC` (Canvas background), and `#F1F5F9` (Dividers and inactive touch targets).

## Typography

**Plus Jakarta Sans** is the unified font family across all roles. Its geometric construction with sculpted, friendly terminals produces high legibility, warmth, and modern approachability.

Key rules:
- **Minimum font size:** No essential descriptive text drops below `15px` (`body-md`), catering directly to varying vision clarities and smaller smartphone screens.
- **Line Heights:** Generous line heights (`140% - 150%`) ensure comfortable separation between text lines, avoiding dense clusters.
- **Letter Spacing:** Headlines utilize slightly tighter tracking (`-0.01em` to `-0.02em`) for cohesion, while labels and small captions remain natural or slightly open for effortless scanning.

## Layout & Spacing

A mobile-first fluid layout model guarantees swift navigation on low-to-mid-tier devices:

- **Mobile (<640px):** Single-column stack with `1rem` (16px) horizontal page margins. Interactive elements span the full width or large dual blocks.
- **Tablet (640px - 1024px):** 6-column fluid grid with `1.5rem` (24px) gutters, grouping service cards and summaries into comfortable 2-column sets.
- **Desktop (>1024px):** 12-column fixed-max system (`max-width: 1152px`) centered with fluid gutters to maintain focus on conversion and scheduling panels.
- **Touch-First Guardrail:** Any tappable element must respect a minimum touch target bounding box of `52px` (`3.25rem`) in height and width.

## Elevation & Depth

Visual hierarchy uses **Tonal Layering** accompanied by **Subtle Ambient Shadows** to ensure cards lift gently off the `#F8FAFC` base:

- **Canvas (Level 0):** `#F8FAFC` — structural backdrop providing cool, soft eye relief.
- **Flat Surface (Level 1):** Pure `#FFFFFF` cards with a crisp, low-contrast border (`1px solid #E2E8F0`).
- **Interactive Floating / Active Cards (Level 2):** Subtle diffused drop shadow: `0 4px 16px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)`.
- **Modals & Bottom Drawers (Level 3):** Deep layered protection: `0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.08)`.
- **Selected States:** Elements shift border color to `2px solid #0284C7` with an ambient glow (`rgba(2, 132, 199, 0.12)`) rather than heavy z-index shifts.

## Shapes

The interface embraces inviting, soft geometry:
- **Base Rounding (`0.5rem` / 8px):** Tags, pills, micro-selectors, and utility controls.
- **Component Rounding (`1rem` / 16px):** Primary form fields, large action buttons, and nested image holders.
- **Container Rounding (`1.5rem` / 24px - `rounded-2xl`):** Feature cards, clean-service selection blocks, and mobile bottom navigation sheets.
- **Full Pill (`9999px`):** Status badges, count bubbles, and filter tags.

## Components

### Buttons
- **Primary Action:** Solid `#0284C7` with white bold text, minimum height of `52px`, rounded corners (`16px`), centered iconography. Pressed state darkens to `#0369A1`.
- **Secondary Action:** Light tint background (`#E0F2FE`) with `#0284C7` text, no harsh borders, giving a clear fallback choice for non-destructive actions.
- **WhatsApp Direct Connect:** Solid emerald (`#059669`) with icon support, prioritized for users preferring direct messaging.

### Selection Cards (Service & Frequency)
- Replaces complex dropdowns with large touch-friendly visual tiles (e.g., "Faxina Padrão", "Faxina Pesada", "Passar Roupa").
- Unselected: White surface, `1px` border `#E2E8F0`, dark slate headline, muted supporting details.
- Selected: `2px` border `#0284C7`, background tint `#F0F9FF`, checkmark icon clearly highlighted in top right.

### Input Fields
- Minimum height of `52px` with `16px` inner padding.
- High-contrast labels anchored directly above inputs (no floating labels that disappear or confuse).
- Assistive helper text permanently positioned underneath input fields in `#475569`.

### Status Badges & Chips
- Rounded pills (`rounded-full`) with light tonal backgrounds and high-contrast text:
  - Confirmed: Background `#ECFDF5`, Text `#065F46`.
  - Pending: Background `#FFFBEB`, Text `#92400E`.
  - Professional Verified: Background `#F0F9FF`, Text `#075985`.

### Checkboxes & Radio Controls
- Oversized target footprint (`24x24px` indicator within a `48x48px` minimum click area).
- Distinct checkmarks with high border contrast for effortless confirmation by older or less tech-savvy users.