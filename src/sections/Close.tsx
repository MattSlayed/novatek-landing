import { MailIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { Scanned } from "@/components/Scanned"
import { close } from "@/content"
import { pictures } from "@/pictures"

/**
 * The close: one row of the board. A wide cobalt action tile flanked by a
 * picture and a flat navy tile that run off the viewport edges.
 */
export function Close() {
  return (
    <section className="relative mt-2 overflow-hidden" aria-labelledby="close-h">
      <Reveal className="grid grid-cols-12 gap-2 px-2 md:px-0">
        <Scanned picture={pictures.close} seed={31} cover="bottom" stamp={false} className="tile order-2 col-span-6 h-[120px] md:order-none md:col-span-2 md:-ml-4 md:h-[360px]" />
        <div className="tile hud order-1 col-span-12 flex min-h-[300px] flex-col justify-center bg-cobalt p-6 text-white md:order-none md:col-span-8 md:h-[360px] md:p-10">
          <h2 id="close-h" className="m-0 text-[clamp(24px,2.8vw,40px)] leading-[1.2] text-white">{close.heading}</h2>
          <p className="m-0 mt-4 max-w-[52ch] text-[17px] leading-[1.5] text-white">{close.text}</p>
          <Button asChild size="xl" className="mt-7 w-fit rounded-[2px] bg-white text-navy hover:bg-mist focus-visible:ring-white/70">
            <a href={close.action.href}>
              <MailIcon data-icon="inline-start" />
              {close.action.label}
            </a>
          </Button>
        </div>
        <div className="tile order-3 col-span-6 h-[120px] bg-navy md:order-none md:col-span-2 md:-mr-4 md:h-[360px]" aria-hidden="true" />
      </Reveal>
    </section>
  )
}
