import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mark, Wordmark } from "@/components/Mark"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Slab } from "@/components/Slab"
import { Stamp } from "@/components/Stamp"
import { footer, hero, slogan } from "@/content"
import { credits } from "@/pictures"

/**
 * Footer: the mark, built large. The blueprint wanted the wordmark rebuilt
 * from blocks; the brand keeps the N exactly as drawn, so the original N is
 * set large instead, white on navy. Picture credits open on demand.
 */
export function Footer() {
  return (
    <Slab as="footer" tone="navy" className="mb-2 md:mb-3">
      <div className="p-5 pt-14 md:p-10 md:pt-16">
        <div className="flex items-end justify-between gap-6">
          <Mark className="h-[clamp(120px,22svh,300px)] w-auto" title="NOVATEK mark" />
          <div className="flex flex-col items-end gap-2 text-right">
            <Wordmark onDark className="text-[clamp(17px,1.7vw,24px)]" />
            <p className="m-0 max-w-[26ch] text-[15px] leading-snug text-tint">{slogan}</p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-12">
          <nav aria-label="NOVATEK site" className="col-span-2 grid grid-cols-2 gap-x-6 gap-y-2 md:col-span-8 md:grid-cols-4">
            {footer.links.map((l) => (
              <a key={l.href} href={l.href} className="rounded-[2px] text-[16px] text-white no-underline outline-none hover:underline focus-visible:ring-3 focus-visible:ring-white/70">
                {l.label}
              </a>
            ))}
          </nav>
          <address className="col-span-2 flex flex-col gap-1 text-[16px] not-italic text-tint md:col-span-4">
            {footer.contact.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </address>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {footer.badges.map((b) => (
            <Badge key={b} variant="outline" className="h-auto rounded-[2px] border-white/40 px-2.5 py-1 text-[15px] font-normal text-white">
              {b}
            </Badge>
          ))}
        </div>

        <Accordion type="single" collapsible className="mt-12 max-w-[62ch]">
          <AccordionItem value="credits" className="border-0">
            <AccordionTrigger className="rounded-[2px] px-0 py-2 text-[16px] font-normal text-white hover:no-underline focus-visible:ring-white/70 **:data-[slot=accordion-trigger-icon]:text-tint">
              Pictures and credits
            </AccordionTrigger>
            <AccordionContent className="pb-2">
              <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[16px] leading-snug text-tint">
                {credits.map((p) => (
                  <li key={p.source}>
                    <span className="font-serif text-[17px] text-white">{p.title}</span>, {p.artist}, {p.year}. {p.credit}{" "}
                    <a href={p.source} className="text-white underline" target="_blank" rel="noreferrer">Source</a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <Stamp className="text-tint">{footer.legal}</Stamp>
          <Button asChild size="sm" className="h-9 rounded-[2px] bg-white px-4 text-[15px] text-navy hover:bg-mist focus-visible:ring-white/70">
            <a href={hero.talk.href}>{hero.talk.label}</a>
          </Button>
        </div>
      </div>
    </Slab>
  )
}
