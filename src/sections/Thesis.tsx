import { Reveal } from "@/components/Reveal"
import { thesis } from "@/content"
import { pictures } from "@/pictures"

/**
 * Intro: a full-bleed paper field at least 90svh tall holding one headline
 * edge to edge in the heaviest weight, a statement under it, and one small
 * print placed over the first lines, tilted four degrees.
 */
export function Thesis() {
  return (
    <section id="thesis" className="paper relative flex min-h-[70svh] flex-col justify-center overflow-hidden px-4 py-20 md:px-[18px] lg:min-h-[90svh]" aria-labelledby="thesis-h">
      <Reveal>
        <h2 id="thesis-h" className="relative m-0 text-[9.5vw] leading-[1] font-bold tracking-[-0.04em] text-paper-ink md:text-[clamp(44px,8.4vw,124px)] md:leading-[0.98]">
          {thesis.heading}
        </h2>
        <p className="serif relative m-0 mt-10 max-w-[34ch] text-[clamp(20px,2vw,28px)] leading-[1.25] text-paper-ink md:mt-14 md:ml-auto">
          {thesis.statement}
        </p>
      </Reveal>
      <figure className="chip absolute top-[7%] right-[6%] m-0 w-[26vw] rotate-[4deg] md:top-[9%] md:right-[8%] md:w-[9vw]">
        <img src={pictures.chip.src} alt={pictures.chip.alt} width={pictures.chip.width} height={pictures.chip.height} loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover" />
      </figure>
    </section>
  )
}
