# NOVATEK landing page

A landing page design for NOVATEK LLC, a South African consultancy in AI, operations intelligence and reliability engineering for power, mining, heavy engineering and water. `index.html` is only a starting point: Matthew will describe the design they want. Build from that description and don't guess ahead of it.

Pushing to `main` publishes to GitHub Pages straight away, and this repository is public. Keep anything confidential out of it, and work on a branch unless Matthew says to publish.

## This branch: "Future Past", brand-free

On 2026-11-03 Matthew asked for a second, greenfield page from the same brief (the temporal anthropologist: the past as a diagnostic tool for the present, humanity before technology, a dark digital interface cut into tactile history, a futurist geometric sans paired with a sharp serif), **without the NOVATEK brand**: no N logo, no navy/cobalt, no Michroma set, no company facts. By `AGENTS.md`'s order (Matthew's latest instruction first) that overrides the brand rules below for this branch only; they still hold on `main` and on `claude/dazzling-ptolemy-g1795t`.

- **Masthead:** "Future Past", a placeholder name until Matthew gives one.
- **Colours:** ground `#11161d` (never pure black), parchment ink `#ece6d8`, one accent, the rubric red of a manuscript `#ef3d52`; paper fields `#ece6d8` with ink `#141a21`. Cyan was avoided on purpose.
- **Typefaces, self-hosted in `public/fonts/`, SIL OFL:** Exo 2 (variable) for everything in the present tense, Cormorant Garamond 500/600 for the historical record only. Never from a font CDN.
- **Stack:** Vite + React + TypeScript, Tailwind v4, shadcn/ui. `npm install`, `npm run dev`, `npm run build`, `npm run preview` (serves `/novatek-landing/`). `.github/workflows/pages.yml` publishes `dist/` from `main`; the repository's Pages source must be "GitHub Actions".
- **Copy** lives in `src/content.ts`: thesis and method only, no clients, numbers or services. Historical facts carry sources and need Matthew's confirmation. **Pictures** in `src/pictures.ts` are CC0 from The Metropolitan Museum of Art, approved by Matthew, credited on the page.
- **Direction:** taste dealt "Type and nothing else"; the brief forced two recorded departures (the type pairing and the palette).

## Brand rules (not applied on this branch)

- **Name:** NOVATEK, always uppercase. It is not a registered trademark, so never add ® or ™.
- **Logo:** the original N in `favicon.svg` and `index.html`. Keep it exactly as drawn: no redrawing, rotating or effects, and no removing its nodes or arrow. Use white on navy or the gradient, and the gradient version on white.
- **Colours:** navy `#1e3a5f`, cobalt `#2563eb`, charcoal `#334155` for body text, white, and light grey `#f1f5f9`. Never pure black. Shadows are navy-tinted.
- **Gradient:** navy to cobalt at 135°. Matthew likes this one, so it stays even where a design skill bans gradients.
- **Typefaces, self-hosted in `fonts/` and never from a font CDN:**
  - Michroma for the wordmark, headlines and names. It has one weight, so never set it bold, and it is wide, at about 0.7em per character.
  - Hanken Grotesk for body text.
  - Martian Mono for labels and figures, where a mono face is wanted.
- **Wordmark:** Michroma, 0.04em tracking, NOVA in navy and TEK in cobalt on light grounds, both white on dark grounds.
- **Slogan:** "The next industrial era. Human-led. AI-amplified."

## Matthew's stated taste

- Likes: the navy-to-cobalt band with a white mark on it, the Michroma, Hanken Grotesk and Martian Mono set, and thin routed lines with small nodes that run out of the gradient band into the white area.
- Rejected: Syne, DM Sans and JetBrains Mono as generic, and "The platform proposes. A named person confirms." as a slogan.

## Writing

- Plain, precise and evidence-first. No "revolutionary", "game-changing", "synergy", "seamless", "best-in-class", or "leverage" as a verb.
- Never invent statistics, clients, quotes or results. Take facts from novatekllc.co.za, and ask Matthew when something is missing.
- Money is written `R 7 243 947`. Use South African English, and SAST for times.

## Design skills

`.claude/skills/` holds impeccable and taste (`design-taste-frontend`), and Matthew wants both used. `AGENTS.md` manages them, and each skill folder has its own `AGENTS.md`:

@AGENTS.md

## Checks before calling a version done

- Look at it at 1440, 768 and 390 pixels wide.
- Text contrast of at least 4.5:1, with visible keyboard focus and reduced motion respected.
- No ® or ™, no pure black, and the fonts load from `fonts/`.
- Taste lint is clean on the page's own files (not `src/components/ui/`), and `inspect.mjs` on the preview URL passes with no `--allow`.
