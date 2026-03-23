# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Albert González Rossell, hosted on GitHub Pages. It's a zero-build static site — no package manager, no build tools, no compilation step.

## Deployment

Push to `master` → automatically deployed via GitHub Pages. No build command needed.

## Architecture

The entire site lives in a single file: **`index.html`** (~406 lines).

It is organized into four logical sections:

1. **CSS** (embedded in `<style>`) — CSS variables for theming, 12-column bento grid layout, card hover effects, responsive breakpoints (900px, 600px), and keyframe animations.
2. **HTML structure** — Navigation bar with logo and controls (language + font size), main bento grid with ~10 cards, and a footer.
3. **Bento grid cards** — Hero, status, role, about, tech stack, projects, contact, links, interests, location.
4. **JavaScript** (embedded in `<script>`) — Two systems:
   - **i18n**: `T` object holds translations for `ca`/`es`/`en`. `setLang(l)` switches language with a fade transition and persists to `localStorage`. `apply()` updates the DOM.
   - **Font size selector**: `setSize(s)` maps `sm/md/lg` to `14/16/18px` and sets `--root` CSS variable, persisted to `localStorage`.

## Design System

- **Colors** (CSS variables): background `#080810`, text `#f0f0ff`, neon accents — green `#00ffaa`, purple `#bf5fff`, blue `#00cfff`, yellow `#ffdd00`
- **Fonts**: Space Grotesk (body/nav), JetBrains Mono (labels/tags) — loaded from Google Fonts CDN
- **Icons**: Font Awesome 6.5.0 via CDN
- **Email**: Protected via Cloudflare email decode script

## Key Conventions

- All content changes (text, links, projects) require updating the `T` translation object in all three languages (`ca`, `es`, `en`).
- Card layout uses `grid-column` and `grid-row` span values — adjust these when adding/removing cards to maintain the bento layout.
- The `--root` CSS variable controls base font size; all typography scales from it using `em`/`rem`.
