# NOVATEK landing page

A landing page design for NOVATEK LLC, a South African consultancy in AI, operations intelligence and reliability engineering for power, mining, heavy engineering and water. Matthew describes the design they want; build from that description and don't guess ahead of it.

Pushing to `main` publishes to GitHub Pages straight away, and this repository is public. Keep anything confidential out of it, and work on a branch unless Matthew says to publish.

## Stack

Vite + React + TypeScript, Tailwind v4 and shadcn/ui (Radix). `npm install`, `npm run dev` to work, `npm run build` to check, `npm run preview` to serve `dist/` for the inspectors. `.github/workflows/pages.yml` builds and publishes `dist/` on every push to `main`; the repository's Pages source must be set to "GitHub Actions" for that to work.

- `src/content.ts` holds every word on the page and every fact. NOVATEK facts are quoted from novatekllc.co.za; historical facts and the quotation carry their sources. Change copy there, not in the sections.
- `src/pictures.ts` lists the pictures, all public domain (CC0, The Metropolitan Museum of Art) and approved by Matthew, with the credits the footer prints. Files are in `public/pictures/`.
- `src/components/ui/` is shadcn's output. Add components with `npx shadcn@latest add <name>`; theme them through the tokens in `src/index.css`, and change internals only for variants (the Button has an `xl` size).
- The brand's shadcn mapping in `src/index.css`: `--primary` cobalt, `--secondary` navy, `--ring` cobalt, `--radius` 2px, shadows navy-tinted. `.hud` flips the tokens for dark navy regions; `.paper` is the archival ground.

## The current direction: "Future Past"

Matthew's brief (2026-11-03): the past is a diagnostic tool for the present, humanity before technology, time as a loop. A sleek digital "HUD" layer in navy and cobalt cut into tactile history: paper, engravings, a Renaissance painting read through a wireframe and scan lines. Taste dealt the composition "The well-kept board": the page is a board of filled tiles on one 8/12px margin. Keep to it. Do not name or imitate any game, film or product in copy or visuals; the inherited-memory idea has its own vocabulary of stamps, coordinates, scan lines and nodes.

## Brand rules

- **Name:** NOVATEK, always uppercase. It is not a registered trademark, so never add ® or ™.
- **Logo:** the original N in `favicon.svg` and `index.html`. Keep it exactly as drawn: no redrawing, rotating or effects, and no removing its nodes or arrow. Use white on navy or the gradient, and the gradient version on white.
- **Colours:** navy `#1e3a5f`, cobalt `#2563eb`, charcoal `#334155` for body text, white, and light grey `#f1f5f9`. Never pure black. Shadows are navy-tinted.
- **Gradient:** navy to cobalt at 135°. Matthew likes this one, so it stays even where a design skill bans gradients.
- **Typefaces, self-hosted in `public/fonts/` (served from `fonts/`) and never from a font CDN:**
  - Michroma for the wordmark, headlines and names. It has one weight, so never set it bold, and it is wide: measured on the page, a line of it runs close to 1em per character including tracking, so size it from the container (the name tile uses `cqw`) and keep headlines short.
  - Hanken Grotesk for body text.
  - Martian Mono for labels and figures, where a mono face is wanted. On the page these are "stamps": sentence case, 13px or larger, never above a heading.
  - EB Garamond, added on 2026-11-03 for the "Future Past" direction, for historical quotations and historical facts only. Never for NOVATEK's own copy or for headings.
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
- `node .claude/skills/design-taste-frontend/scripts/lint.mjs src/sections src/components/*.tsx src/index.css src/App.tsx index.html` is clean (the shadcn files in `src/components/ui/` are interface fragments and are not linted), and `inspect.mjs` on the preview URL passes with `--allow gradient,hairline,mono,font-count`, those being Matthew's choices.
