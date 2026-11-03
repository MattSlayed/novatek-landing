# Agent guide

Read `CLAUDE.md` for the brand rules and Matthew's taste. This file says which design skills are installed here and how to use and maintain them.

## Installed skills

| Skill | Folder | Use it for | Version | Source |
|---|---|---|---|---|
| impeccable | `.claude/skills/impeccable/` | Design direction, UX, layout, typography, critique, polish, audit | 4.8.0, commit `9fadc41` | https://github.com/pbakaus/impeccable |
| taste (`design-taste-frontend`) | `.claude/skills/design-taste-frontend/` | Art direction for public pages, checks against generic-looking design | v2, commit `12af471` | https://github.com/Leonxlnx/taste-skill |

Each folder has its own `AGENTS.md` with the rules for that skill.

## Using them

Use both on any design work in this repository.

1. Start from Matthew's description of what they want.
2. Use impeccable to shape the design and the quality floor. Read its `reference/craft-floor.md` before editing the page.
3. Use taste's rules while building the page, then its `lint.mjs`, `inspect.mjs` and `references/critique.md` to check the result.
4. Look at the rendered page at 1440, 768 and 390 pixels wide, and fix what you see.

## When sources disagree

Follow this order:

1. Matthew's latest instruction.
2. `CLAUDE.md`.
3. impeccable and taste.

The skills disagree with Matthew's choices on purpose in places. Keep the gradient, thin routed lines and Martian Mono labels they chose, and say so in your report. The skills disagree with each other too. Impeccable allows some things taste bans; when neither Matthew nor `CLAUDE.md` decides, pick one, and say which and why.

## Maintaining them

- Don't edit files inside a skill folder, except that folder's `AGENTS.md`. Local edits are lost when the skill updates.
- Update a skill only when Matthew asks. Read the new version before copying it in, replace the whole folder, keep its licence files and `AGENTS.md`, and update the version table above.
- Don't add hooks or change `.claude/settings.json` for these skills without Matthew's approval.
- Keep working files such as `.taste-skill/` out of commits.
- Add another skill only when Matthew asks, and check its licence first, because this repository is public.
