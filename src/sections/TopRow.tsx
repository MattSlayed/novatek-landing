import { MenuIcon } from "lucide-react"
import { Mark, Wordmark } from "@/components/Mark"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { hero, nav, site } from "@/content"

/** The 60px top row of the board: the band Matthew likes, white mark on the gradient. */
export function TopRow() {
  return (
    <header className="tile band hud col-span-12 flex h-[60px] items-center gap-4 px-4 text-white md:px-5">
      <a href={site} className="flex shrink-0 items-center gap-3 rounded-[2px] outline-none focus-visible:ring-3 focus-visible:ring-white/70" aria-label="NOVATEK, home">
        <Mark className="h-9 w-8" />
        <Wordmark onDark className="text-[15px]" />
      </a>
      <nav aria-label="Sections" className="ml-auto hidden md:flex md:items-center md:gap-5 lg:w-1/2 lg:gap-7">
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="rounded-[2px] text-[15px] font-medium whitespace-nowrap text-white/92 no-underline outline-none hover:underline focus-visible:ring-3 focus-visible:ring-white/70">
            {n.label}
          </a>
        ))}
        <Button asChild variant="secondary" size="default" className="ml-auto h-9 rounded-[2px] bg-white px-4 text-[15px] text-navy hover:bg-mist">
          <a href={hero.talk.href}>{hero.talk.label}</a>
        </Button>
      </nav>
      <Sheet>
        <SheetTrigger asChild className="ml-auto md:hidden">
          <Button variant="secondary" size="icon-lg" className="rounded-[2px] bg-white text-navy hover:bg-mist" aria-label="Open menu">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[86vw] max-w-sm bg-navy-deep text-white">
          <SheetHeader className="text-left">
            <SheetTitle className="font-display text-base font-normal tracking-[0.04em] text-white">NOVATEK</SheetTitle>
            <SheetDescription className="font-sans text-tint">The next industrial era. Human-led. AI-amplified.</SheetDescription>
          </SheetHeader>
          <nav aria-label="Sections" className="flex flex-col gap-1 px-4">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="rounded-[2px] py-3 font-display text-[15px] text-white no-underline outline-none hover:underline focus-visible:ring-3 focus-visible:ring-white/70">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto p-4">
            <Button asChild size="xl" className="w-full rounded-[2px] bg-white text-navy hover:bg-mist">
              <a href={hero.talk.href}>{hero.talk.label}</a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
