import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Reveal } from "@/components/Reveal"
import { Slab } from "@/components/Slab"
import { Stamp } from "@/components/Stamp"
import { loop } from "@/content"
import { cn } from "@/lib/utils"

const tones = ["bg-navy-deep text-white", "bg-navy text-white", "bg-[#2b4f85] text-white", "bg-cobalt text-white"]

/**
 * How it works: the loop as a horizontal accordion of tinted panels, dark to
 * light, past to amplified. Clicking a sliver opens it. On a phone the stages
 * stack as bars in the same order.
 */
export function Loop() {
  const [open, setOpen] = useState(loop.stages[0].id)
  return (
    <Slab id="loop" tone="mist" labelledBy="loop-h">
      <Reveal className="p-5 py-16 md:p-10 md:py-24 lg:py-28">
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          <h2 id="loop-h" className="col-span-12 m-0 text-[clamp(24px,2.8vw,40px)] leading-[1.2] text-navy md:col-span-5">
            {loop.heading}
          </h2>
          <p className="col-span-12 m-0 max-w-[48ch] text-[19px] leading-[1.45] md:col-span-6 md:col-start-7">{loop.intro}</p>
        </div>

        <Accordion
          type="single"
          value={open}
          onValueChange={(v) => v && setOpen(v)}
          orientation="horizontal"
          className="loop-row mt-12 flex flex-col gap-2 md:h-[520px] md:flex-row"
        >
          {loop.stages.map((s, i) => {
            const isOpen = open === s.id
            return (
              <AccordionItem
                key={s.id}
                value={s.id}
                className={cn("loop-panel tile relative flex min-h-16 flex-col overflow-hidden border-0 transition-[flex-basis] duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]", tones[i], isOpen ? "md:basis-[58%]" : "md:basis-[14%]")}
              >
                <AccordionTrigger
                  className={cn(
                    "loop-trigger h-16 shrink-0 items-center rounded-none border-0 px-5 py-0 text-left font-display text-[17px] font-normal text-white hover:no-underline focus-visible:ring-white/70 [&_svg]:hidden md:absolute md:inset-0 md:h-auto",
                    isOpen && "md:pointer-events-none md:opacity-0",
                  )}
                  tabIndex={isOpen ? -1 : 0}
                  aria-label={`Open ${s.name}`}
                >
                  <span className="loop-name md:whitespace-nowrap">{s.name}</span>
                </AccordionTrigger>
                <AccordionContent forceMount className={cn("text-base", !isOpen && "hidden md:block md:invisible")}>
                  <div className="flex h-full min-h-0 flex-col justify-between gap-8 p-5 pt-0 md:absolute md:inset-0 md:p-7">
                    <div>
                      <p className="m-0 font-display text-[clamp(22px,2.8vw,40px)] leading-[1.15]">{s.title}</p>
                      <Stamp className="mt-3 block text-tint">Stage {i + 1} of 4 · {s.name}</Stamp>
                    </div>
                    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
                      <p className="m-0 max-w-[36ch] text-[17px] leading-[1.5] text-white">{s.text}</p>
                      {s.quote ? (
                        <blockquote className="m-0 max-w-[34ch] font-serif text-[19px] leading-[1.35] text-white">
                          <p className="m-0 italic">{s.quote.text}</p>
                          <footer className="mt-2 font-sans text-[15px] not-italic text-tint">
                            {s.quote.source} · <Stamp>{s.quote.when}</Stamp>
                          </footer>
                        </blockquote>
                      ) : null}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </Reveal>
    </Slab>
  )
}
