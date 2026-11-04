import { useState } from "react"
import { Reveal } from "@/components/Reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { strata } from "@/content"
import { pictures, type Picture } from "@/pictures"
import { cn } from "@/lib/utils"

const tones = ["bg-[#1a212b]", "bg-[#232c38]", "bg-[#2d3744]", "bg-[#374353]"]

function pictureFor(key: string): Picture {
  if (key === "band") return pictures.band
  if (key === "chip") return pictures.chip
  const strip = pictures.strip.find((p) => p.src.endsWith(`${key}.jpg`))
  return strip ?? pictures.band
}

/**
 * The cut: four strata, one per human constant, stacked as bands that darken
 * with depth. One opens at a time, in place, and shows the record (a print
 * and a dated, sourced fact in the serif) beside the 2026 reading.
 */
export function Strata() {
  const [open, setOpen] = useState<string>(strata[0].id)
  return (
    <section className="relative" aria-labelledby="strata-h">
      <h2 id="strata-h" className="sr-only">The record, in four layers</h2>
      <Reveal stagger={90}>
      <Accordion type="single" collapsible value={open} onValueChange={(v) => setOpen(v ?? "")} className="strata flex flex-col">
        {strata.map((s, i) => {
          const pic = pictureFor(s.picture)
          const isOpen = open === s.id
          return (
            <AccordionItem key={s.id} value={s.id} className={cn("stratum border-0 not-last:border-b-0", tones[i])} data-open={isOpen}>
              <AccordionTrigger className="stratum-bar group/bar flex min-h-[72px] items-center justify-start gap-6 rounded-none px-4 py-0 text-ink hover:no-underline focus-visible:ring-rubric-glow/70 md:min-h-[84px] md:px-[18px] **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-ink-muted">
                <span className={cn("stratum-name text-[clamp(28px,3.2vw,44px)] leading-none font-bold tracking-[-0.04em] transition-[transform,color] duration-[650ms] ease-[cubic-bezier(0.33,1,0.68,1)]", isOpen ? "text-rubric-glow md:translate-x-2" : "group-hover/bar:translate-x-2")}>
                  {s.name}
                </span>
                <span className="ml-auto shrink-0 text-[13px] text-ink-muted tabular">{s.span}</span>
              </AccordionTrigger>
              <AccordionContent className="stratum-body">
                <div className="grid grid-cols-12 gap-x-6 gap-y-8 px-4 pt-2 pb-10 md:px-[18px] md:pb-14">
                  <figure className="col-span-12 m-0 md:col-span-4">
                    <img src={pic.src} alt={pic.alt} width={pic.width} height={pic.height} loading={i === 0 ? "eager" : "lazy"} decoding="async" className="aspect-[4/3] w-full object-cover object-top" />
                    <figcaption className="mt-2 text-[13px] leading-[1.35] text-ink-muted">{pic.title}, {pic.artist}, {pic.year}.</figcaption>
                  </figure>
                  <div className="col-span-12 md:col-span-4">
                    <p className="serif m-0 text-[20px] leading-[1.35] text-ink">{s.record}</p>
                    <p className="m-0 mt-3 text-[13px] leading-[1.4] text-ink-muted">{s.source}</p>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <p className="m-0 text-[17px] leading-[1.5] text-ink">{s.reading}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
      </Reveal>
    </section>
  )
}
