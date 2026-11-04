import { ArrowDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { hero, whatThisIs } from "@/content"

/**
 * First screen: the title and a serif deck, centred in the upper half; the
 * strata begin in the lower half and are cut by the fold.
 */
export function Hero() {
  return (
    <section id="top" className="px-4 pt-[132px] pb-16 text-center md:px-[18px] md:pt-[150px] md:pb-20" aria-labelledby="name">
      <Reveal stagger={120}>
      <h1 id="name" className="mx-auto m-0 max-w-[12ch] text-[clamp(52px,11.5vw,168px)] leading-[0.9] font-bold tracking-[-0.05em] text-ink">
        {hero.title}
      </h1>
      <p className="sr-only">{whatThisIs}</p>
      <p className="serif mx-auto mt-8 max-w-[46ch] text-[20px] leading-[1.4] text-ink-muted md:text-[22px]">{hero.deck}</p>
      <Button asChild size="xl" className="mt-8 h-11 rounded-none px-5 text-[15px] font-medium">
        <a href={hero.action.href}>
          {hero.action.label}
          <ArrowDownIcon data-icon="inline-end" />
        </a>
      </Button>
      </Reveal>
    </section>
  )
}
