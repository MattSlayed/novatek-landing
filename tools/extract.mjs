// Playwright extraction of a live site's design system and interactions.
// usage: node extract.mjs <url> <outDir>
import { chromium } from 'playwright'
import { mkdirSync, writeFileSync } from 'node:fs'

const url = process.argv[2]
const out = process.argv[3]
mkdirSync(out, { recursive: true })
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36' })
const page = await ctx.newPage()
const requests = []
page.on('request', (r) => requests.push(r.url()))
const consoleErrors = []
page.on('pageerror', (e) => consoleErrors.push(String(e)))
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 }).catch(async () => page.goto(url, { waitUntil: 'load', timeout: 90000 }))
await page.waitForTimeout(3500)
await page.screenshot({ path: `${out}/01-fold.png` })

const info = await page.evaluate(() => {
  const cs = (e) => getComputedStyle(e)
  const pick = (e) => { const s = cs(e); return { tag: e.tagName.toLowerCase(), text: (e.innerText || '').trim().slice(0, 120), font: s.fontFamily.split(',')[0].replace(/"/g, ''), size: s.fontSize, weight: s.fontWeight, ls: s.letterSpacing, lh: s.lineHeight, color: s.color, bg: s.backgroundColor, transform: s.textTransform, rect: (() => { const r = e.getBoundingClientRect(); return [Math.round(r.x), Math.round(r.y + scrollY), Math.round(r.width), Math.round(r.height)] })() } }
  const vis = (e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 }
  const q = (sel, n = 40) => [...document.querySelectorAll(sel)].filter(vis).slice(0, n).map(pick)
  const fonts = [...document.fonts].filter((f) => f.status === 'loaded').map((f) => `${f.family} ${f.weight} ${f.style}`).filter((v, i, a) => a.indexOf(v) === i)
  const bodyBg = cs(document.body).backgroundColor
  const colours = {}
  for (const e of document.querySelectorAll('body *')) { if (!vis(e)) continue; const b = cs(e).backgroundColor; if (b && b !== 'rgba(0, 0, 0, 0)') colours[b] = (colours[b] || 0) + 1; const c = cs(e).color; colours['text:' + c] = (colours['text:' + c] || 0) + 1 }
  const topColours = Object.entries(colours).sort((a, b) => b[1] - a[1]).slice(0, 24)
  const sections = [...document.querySelectorAll('section, header, footer, main > div, [data-section], article')].filter(vis).slice(0, 40).map((e) => { const r = e.getBoundingClientRect(); return { tag: e.tagName.toLowerCase(), cls: [...e.classList].slice(0, 4).join('.'), id: e.id, top: Math.round(r.y + scrollY), h: Math.round(r.height), bg: cs(e).backgroundColor, headings: [...e.querySelectorAll('h1,h2,h3')].slice(0, 3).map((h) => (h.innerText || '').trim().slice(0, 80)) } })
  const sticky = [...document.querySelectorAll('body *')].filter((e) => ['sticky', 'fixed'].includes(cs(e).position) && vis(e)).slice(0, 20).map((e) => ({ tag: e.tagName.toLowerCase(), cls: [...e.classList].slice(0, 4).join('.'), pos: cs(e).position, text: (e.innerText || '').trim().slice(0, 60) }))
  const animated = [...document.querySelectorAll('body *')].filter((e) => { const s = cs(e); return (s.animationName && s.animationName !== 'none') || (s.transitionProperty && s.transitionProperty !== 'all' && s.transitionDuration !== '0s') }).slice(0, 40).map((e) => ({ tag: e.tagName.toLowerCase(), cls: [...e.classList].slice(0, 4).join('.'), anim: cs(e).animationName, trans: cs(e).transitionProperty + ' ' + cs(e).transitionDuration + ' ' + cs(e).transitionTimingFunction }))
  const media = { img: document.images.length, video: document.querySelectorAll('video').length, canvas: document.querySelectorAll('canvas').length, svg: document.querySelectorAll('svg').length, iframe: document.querySelectorAll('iframe').length }
  const libs = ['gsap', 'ScrollTrigger', 'Lenis', 'THREE', 'barba', 'Swiper', 'SplitType', 'SplitText', 'Lottie', 'lottie', 'PIXI', 'Webflow', 'jQuery', 'React', '__NEXT_DATA__', '__NUXT__', 'Alpine', 'Shopify', 'Framer', '__framer'].filter((k) => k in window)
  const cursor = cs(document.body).cursor
  const customCursor = [...document.querySelectorAll('body *')].filter((e) => /cursor/i.test(e.className) && cs(e).position === 'fixed').length
  const links = [...document.querySelectorAll('a')].filter(vis).slice(0, 40).map((a) => ({ text: (a.innerText || '').trim().slice(0, 40), href: a.getAttribute('href') }))
  const buttons = q('button, a[class*="btn"], a[class*="button"], [role=button]', 20)
  const scrollSnap = cs(document.documentElement).scrollSnapType + ' / ' + cs(document.body).scrollSnapType
  return { title: document.title, lang: document.documentElement.lang, bodyBg, fonts, topColours, h1: q('h1', 5), h2: q('h2', 12), h3: q('h3', 12), p: q('p', 12), nav: q('nav a, header a', 20), buttons, sections, sticky, animated, media, libs, cursor, customCursor, links, scrollSnap, height: document.documentElement.scrollHeight, meta: { description: document.querySelector('meta[name=description]')?.content, viewport: document.querySelector('meta[name=viewport]')?.content } }
})
writeFileSync(`${out}/info.json`, JSON.stringify(info, null, 2))

// Hover diffs on nav links and buttons: what changes.
const hoverDiffs = []
const hoverables = await page.$$('nav a, header a, button, a[class*="btn"], a[class*="button"]')
for (const h of hoverables.slice(0, 10)) {
  try {
    const before = await h.evaluate((e) => { const s = getComputedStyle(e); return { color: s.color, bg: s.backgroundColor, transform: s.transform, td: s.textDecorationLine, opacity: s.opacity } })
    await h.hover({ timeout: 2000 }); await page.waitForTimeout(500)
    const after = await h.evaluate((e) => { const s = getComputedStyle(e); return { color: s.color, bg: s.backgroundColor, transform: s.transform, td: s.textDecorationLine, opacity: s.opacity, text: (e.innerText || '').trim().slice(0, 40) } })
    const diff = Object.fromEntries(Object.entries(after).filter(([k, v]) => k !== 'text' && before[k] !== v).map(([k, v]) => [k, `${before[k]} -> ${v}`]))
    hoverDiffs.push({ text: after.text, diff })
  } catch {}
}
writeFileSync(`${out}/hover.json`, JSON.stringify(hoverDiffs, null, 2))

// Scroll through: screenshots at each viewport step, and what moves between steps.
const total = await page.evaluate(() => document.documentElement.scrollHeight)
const steps = Math.min(14, Math.ceil(total / 900))
const scrollNotes = []
let prev = null
for (let i = 0; i < steps; i++) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), i * 900)
  await page.waitForTimeout(900)
  await page.screenshot({ path: `${out}/scroll-${String(i).padStart(2, '0')}.png` })
  const snap = await page.evaluate(() => [...document.querySelectorAll('h1,h2,h3,img,video,canvas,[class*=pin],[class*=sticky]')].filter((e) => { const r = e.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight && r.width > 0 }).slice(0, 12).map((e) => ({ t: e.tagName.toLowerCase(), text: (e.innerText || e.alt || '').trim().slice(0, 50), y: Math.round(e.getBoundingClientRect().top), op: getComputedStyle(e).opacity, tf: getComputedStyle(e).transform })))
  scrollNotes.push({ y: i * 900, visible: snap, scrollY: await page.evaluate(() => scrollY) })
  prev = snap
}
writeFileSync(`${out}/scroll.json`, JSON.stringify(scrollNotes, null, 2))
await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(800)
await page.screenshot({ path: `${out}/full.png`, fullPage: true }).catch(() => {})

// Phone
const phone = await ctx.browser().newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true })
const pp = await phone.newPage()
await pp.goto(url, { waitUntil: 'load', timeout: 90000 }).catch(() => {})
await pp.waitForTimeout(3000)
await pp.screenshot({ path: `${out}/phone-fold.png` })
await pp.screenshot({ path: `${out}/phone-full.png`, fullPage: true }).catch(() => {})
await phone.close()

const thirdParty = [...new Set(requests.map((r) => { try { return new URL(r).host } catch { return r } }))].slice(0, 40)
writeFileSync(`${out}/requests.json`, JSON.stringify({ hosts: thirdParty, errors: consoleErrors }, null, 2))
console.log(JSON.stringify({ title: info.title, fonts: info.fonts, libs: info.libs, media: info.media, height: info.height, sections: info.sections.length, hoverDiffs: hoverDiffs.length }))
await browser.close()
