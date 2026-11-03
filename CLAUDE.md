# NOVATEK landing page

A landing page design for NOVATEK LLC, a South African consultancy in AI, operations intelligence and reliability engineering for power, mining, heavy engineering and water. `index.html` is only a starting point: Matthew will describe the design they want. Build from that description and don't guess ahead of it.

Pushing to `main` publishes to GitHub Pages straight away, and this repository is public. Keep anything confidential out of it, and work on a branch unless Matthew says to publish.

## Brand rules

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

`.claude/skills/` holds impeccable and taste (`design-taste-frontend`), and Matthew wants both used.

- Matthew's brief, the brand rules above and the gradient and thin lines they chose outrank a skill's bans.
- Do not run impeccable's launcher (`scripts/impeccable`). It downloads a separate program, which Matthew has not approved. Use the skill's "Launcher unavailable" path.
- Taste's `scripts/assets.mjs` searches open image collections. Tell Matthew about any picture it finds and its credit before using it.

## Checks before calling a version done

- Look at it at 1440, 768 and 390 pixels wide.
- Text contrast of at least 4.5:1, with visible keyboard focus and reduced motion respected.
- No ® or ™, no pure black, and the fonts load from `fonts/`.
