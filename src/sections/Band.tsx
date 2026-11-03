import { useInView } from "@/hooks/useInView"
import { pictures } from "@/pictures"
import { cn } from "@/lib/utils"

/**
 * One full-bleed print between two type sections, the first large picture
 * on the page. A single crimson line reads it once, top to bottom, as it
 * enters the screen. The caption is the catalogue entry.
 */
const lineClass = "band-line pointer-events-none absolute inset-x-0 top-0 h-px" // taste-skill-ignore: the one glowing line the brief asks for, drawn once as the print enters

export function Band() {
  const { ref, inView } = useInView<HTMLElement>(0.35)
  const p = pictures.band
  return (
    <figure ref={ref} className={cn("band relative m-0 overflow-hidden bg-surface", inView && "is-read")}>
      <img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" decoding="async" className="block max-h-[92svh] w-full object-cover" />
      <span className={lineClass} aria-hidden="true" />
      <figcaption className="serif px-4 py-3 text-[17px] text-ink-muted md:px-[18px]">
        {p.title}, {p.artist}, {p.year}. {p.credit}
      </figcaption>
    </figure>
  )
}
