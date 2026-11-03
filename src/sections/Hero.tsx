import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RoutedLines } from "@/components/RoutedLines"
import { Scanned } from "@/components/Scanned"
import { Stamp } from "@/components/Stamp"
import { TopRow } from "@/sections/TopRow"
import { hero, slogan } from "@/content"
import { pictures } from "@/pictures"

/**
 * Hero: the two-by-two board. Name tile on paper, two pictures, a dark tile
 * with the slogan and a cobalt tile with the offer and the action. Routed
 * lines leave the band, run the gaps between tiles and continue into the
 * thesis below.
 */
export function Hero() {
  return (
    <section className="board relative" aria-labelledby="name">
      <TopRow />

      {/* Name tile */}
      <div className="tile paper name-tile relative col-span-12 flex min-h-[32svh] flex-col justify-between p-5 md:col-span-6 md:row-span-1 md:min-h-0 md:p-6">
        <Stamp className="relative z-[1] text-charcoal">Johannesburg · 26.20° S, 28.05° E · SAST</Stamp>
        <h1 id="name" className="name relative z-[1] m-0 font-display font-normal leading-none tracking-[0.04em] text-navy">
          <span className="text-navy">NOVA</span><span className="text-cobalt">TEK</span>
          <span className="sr-only">: {slogan}</span>
        </h1>
      </div>

      {/* Picture one: the philosopher reading the past */}
      <Scanned picture={pictures.hero} priority shutter seed={7} cover="right" sizes="(min-width: 768px) 50vw, 100vw" className="tile col-span-12 aspect-[4/3] md:col-span-6 md:aspect-auto" />

      {/* Picture two */}
      <Scanned picture={pictures.second} seed={19} cover="left" sizes="(min-width: 768px) 50vw, 100vw" className="tile order-last col-span-12 aspect-[4/3] md:order-none md:col-span-6 md:aspect-auto" />

      {/* Dark tile: the slogan */}
      <div className="tile hud col-span-6 flex flex-col justify-between bg-navy-deep p-4 text-white md:col-span-3 md:p-6">
        <p className="relative z-[1] m-0 font-display text-[clamp(15px,1.7vw,24px)] leading-[1.3] text-white">
          The next industrial era. Human-led. <span className="whitespace-nowrap">AI-amplified.</span>
        </p>
        <Stamp className="relative z-[1] mt-6 text-tint">{hero.footnote}</Stamp>
      </div>

      {/* Accent tile: the offer and the action */}
      <div className="tile hud col-span-6 flex flex-col justify-between bg-cobalt p-4 text-white md:col-span-3 md:p-6">
        <p className="relative z-[1] m-0 text-[clamp(15px,1.35vw,19px)] leading-[1.35] font-medium">{hero.description}</p>
        <div className="relative z-[1] mt-6 flex flex-col gap-3">
          <p className="m-0 hidden text-[15px] leading-snug text-white/92 md:block">{hero.amplified}</p>
          <Button asChild size="xl" className="h-auto min-h-12 w-fit max-w-full justify-start gap-2 rounded-[2px] bg-white py-3 text-left whitespace-normal text-navy hover:bg-mist focus-visible:ring-white/70">
            <a href={hero.primary.href}>
              {hero.primary.label}
              <ArrowRightIcon data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </div>

      <RoutedLines
        viewBox="0 0 1440 900"
        className="hidden md:block"
        routes={[
          { d: "M 300 60 V 210 H 714 V 456 H 1086 V 900", nodes: [[300, 60], [300, 210], [714, 210], [714, 456], [1086, 456]] },
          { d: "M 1180 60 V 300 H 730", nodes: [[1180, 300], [730, 300]] },
          { d: "M 714 600 V 900", nodes: [[714, 600]] },
        ]}
      />
    </section>
  )
}
