import { Reveal } from "@/components/Reveal"
import { RoutedLines } from "@/components/RoutedLines"
import { Slab } from "@/components/Slab"
import { thesis } from "@/content"

/** Intro: a lead line over four columns, on a paper tile. */
export function Thesis() {
  return (
    <Slab id="thesis" tone="paper" labelledBy="thesis-h">
      <RoutedLines
        viewBox="0 0 1440 400"
        className="hidden md:block"
        glow={false}
        tone="charcoal"
        routes={[{ d: "M 1076 0 V 96 H 1400 V 300", nodes: [[1076, 96], [1400, 96], [1400, 300]] }, { d: "M 706 0 V 56", nodes: [[706, 56]] }]}
      />
      <Reveal className="relative grid grid-cols-12 gap-x-6 gap-y-10 p-5 py-16 md:p-10 md:py-24 lg:py-28">
        <h2 id="thesis-h" className="col-span-12 m-0 text-[clamp(24px,2.8vw,40px)] leading-[1.2] text-navy md:col-span-10">
          {thesis.heading}
        </h2>
        <p className="col-span-12 m-0 max-w-[46ch] text-[clamp(19px,2.1vw,30px)] leading-[1.25] text-charcoal md:col-span-11">
          {thesis.lead}
        </p>
        <div className="col-span-12 mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {thesis.columns.map((c) => (
            <p key={c.runIn} className="m-0 text-[17px] leading-[1.5] text-charcoal">
              <strong className="font-semibold text-navy">{c.runIn}</strong> {c.text}
            </p>
          ))}
        </div>
      </Reveal>
    </Slab>
  )
}
