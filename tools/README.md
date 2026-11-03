# tools/extract.mjs

Playwright extraction of a live site's design system and interactions, for
studying a reference site (principles only; nothing is copied). Run it on a
machine that can reach the site:

```bash
npm install
npx playwright install chromium
node tools/extract.mjs https://example.com extract/example
```

It writes to the output folder: `info.json` (fonts, colours, type sizes,
sections, sticky elements, animations, libraries, links), `hover.json` (what
changes on hover), `scroll.json` (what is on screen at each scroll step),
`requests.json` (hosts loaded), and screenshots: `01-fold.png`,
`scroll-NN.png`, `full.png`, `phone-fold.png`, `phone-full.png`.

Commit the `extract/` folder and push, and the cloud session reads it from
the branch.
