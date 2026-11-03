# taste in this repository

Installed as `design-taste-frontend`, tasteskill v2, MIT (`LICENSE`). The root `AGENTS.md` sets how this skill fits with the others.

- **Brand is pinned.** When dealing a direction, always pass `--keep palette,type` to `scripts/draw.mjs`, so it deals composition only. Map NOVATEK's colours and typefaces onto its roles.
- **Matthew's choices beat house rules.** The gradient, thin routed lines and Martian Mono labels stay. Use the inspector's `--allow <rule>` for those rules only, and list each one in your report. Other failures still need fixing.
- **Scripts.** `draw.mjs`, `lint.mjs` and `inspect.mjs` need Node 22+, and `inspect.mjs` also needs Chrome, Edge or Chromium. They install nothing. If the environment lacks them, say the check did not run, and critique screenshots using `references/critique.md`.
- **Pictures.** `scripts/assets.mjs` uses the network to search open collections. Show Matthew each picture you want to use, with its licence and credit, before it goes on the page. Never present a found picture as NOVATEK's own work, client or site.
- **No invented proof.** Sample details need Matthew's confirmation. Customers, quotes, logos and statistics must be real and sourced.
- **Working files.** They land in `.taste-skill/`, which is ignored by git.
