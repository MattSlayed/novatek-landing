import { useState } from "react"
import { Reveal } from "@/components/Reveal"
import { showcase } from "@/content"
import { cn } from "@/lib/utils"

/**
 * Showcase: two giant figures compared. The same argument, set in the type
 * of its own year: 1492 in a Renaissance serif, 2026 in a futurist sans.
 * Hover or focus a figure and it is set in the other year's letterforms:
 * the words change, the argument does not. The section's bottom edge cuts
 * both figures.
 */
type Id = "then" | "now"

function Figure({ id, figure, caption, serif, swap, setSwap }: { id: Id; figure: string; caption: string; serif: boolean; swap: Id | null; setSwap: (v: Id | null) => void }) {
  const swapped = swap === id
  const useSerif = serif !== swapped
  return (
    <div className={cn("specimen flex flex-wrap items-end gap-x-5 gap-y-2", id === "now" && "md:col-start-7")}>
      <button
        type="button"
        onPointerEnter={() => setSwap(id)}
        onPointerLeave={() => setSwap(null)}
        onFocus={() => setSwap(id)}
        onBlur={() => setSwap(null)}
        aria-label={`${figure}: ${caption}. Press to see it set in the other year's letterforms.`}
        className={cn(
          "specimen-figure m-0 block cursor-default border-0 bg-transparent p-0 text-left leading-[0.8] tracking-[-0.04em] text-ink outline-none focus-visible:ring-3 focus-visible:ring-rubric/60",
          useSerif ? "serif font-semibold" : "font-bold",
        )}
      >
        {figure}
      </button>
      <p className="m-0 mb-[0.4em] max-w-[14ch] text-[17px] leading-[1.3] text-ink-muted">{caption}</p>
    </div>
  )
}

export function Showcase() {
  const [swap, setSwap] = useState<Id | null>(null)
  return (
    <section className="relative overflow-hidden px-4 pt-24 md:px-[18px] md:pt-32" aria-labelledby="show-h">
      <Reveal className="grid grid-cols-12 gap-x-6 gap-y-5">
        <h2 id="show-h" className="col-span-12 m-0 text-[28px] leading-[1.1] text-ink md:col-span-6 md:text-[36px]">{showcase.heading}</h2>
        <p className="col-span-12 m-0 max-w-[60ch] text-[17px] leading-[1.5] text-ink-muted md:col-span-6 md:col-start-7">{showcase.text}</p>
      </Reveal>
      <div className="specimens mt-[12vh] grid h-[38svh] grid-cols-1 gap-y-8 overflow-hidden md:h-[40vh] md:grid-cols-12 md:gap-x-6">
        <Figure id="then" figure={showcase.then.figure} caption={showcase.then.caption} serif swap={swap} setSwap={setSwap} />
        <Figure id="now" figure={showcase.now.figure} caption={showcase.now.caption} serif={false} swap={swap} setSwap={setSwap} />
      </div>
    </section>
  )
}
