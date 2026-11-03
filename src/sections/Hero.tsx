import { ArrowDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { hero, name, whatThisIs } from "@/content"
import { pictures } from "@/pictures"

/**
 * First screen: paper and ink only, no picture. The name runs across the
 * vertical centre from margin to margin; the four corners carry everything
 * else. On a phone the name moves up and the first picture fills the lower
 * half, cropped by the bottom edge.
 */
export function Hero() {
  return (
    <header className="relative flex min-h-svh flex-col px-4 py-4 md:grid md:min-h-svh md:grid-rows-[auto_1fr_auto] md:px-[18px] md:py-[18px]" aria-labelledby="name">
      <div className="flex items-start justify-between gap-6">
        <div className="max-w-[36ch]">
          <p className="m-0 text-[17px] leading-[1.35]">{hero.sentence}</p>
          <Button asChild size="xl" className="mt-4 h-11 rounded-none px-5 text-[15px] font-medium">
            <a href={hero.action.href}>
              {hero.action.label}
              <ArrowDownIcon data-icon="inline-end" />
            </a>
          </Button>
        </div>
        <nav aria-label="Sections" className="flex shrink-0 flex-col items-end gap-2 text-[15px] md:flex-row md:items-start md:gap-5">
          {hero.links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink no-underline hover:underline">
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <h1 id="name" className="hero-name m-0 my-10 self-center font-semibold text-ink md:my-0 md:w-full">
        {name}
      </h1>
      <p className="sr-only">{whatThisIs}</p>

      <div className="hidden items-end justify-between gap-6 text-[15px] md:flex">
        <p className="m-0 text-[17px] text-ink-muted">{hero.corner}</p>
        <div className="flex gap-5">
          <a href="#pictures" className="text-ink no-underline hover:underline">Pictures</a>
          <a href="#method" className="text-ink no-underline hover:underline">The gate</a>
        </div>
      </div>

      {/* Phone: the first picture, 4:5, cropped by the bottom edge */}
      <figure className="relative -mx-4 -mb-4 mt-auto aspect-[4/5] max-h-[52svh] overflow-hidden md:hidden">
        <img src={pictures.hero.src} alt={pictures.hero.alt} width={pictures.hero.width} height={pictures.hero.height} className="h-full w-full object-cover object-top" fetchPriority="high" />
      </figure>
    </header>
  )
}
