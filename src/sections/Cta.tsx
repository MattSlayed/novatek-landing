import { Nameplate } from "@/components/Nameplate"
import { cta } from "@/content"

/**
 * The close: the entire band is one link. A crimson field holds a single
 * verb across its width; hover or focus swaps field and word.
 */
export function Cta() {
  return (
    <section aria-labelledby="cta-h">
      <a href={cta.href} className="cta relative flex min-h-[46svh] flex-col justify-between bg-rubric px-4 pt-5 pb-6 text-ink no-underline outline-none md:min-h-[60svh] md:px-[18px] md:pt-6" id="write">
        <span className="flex items-start justify-between gap-6">
          <span id="cta-h" className="max-w-[26ch] text-[17px] leading-[1.35] md:text-[20px] md:leading-[1.3]">{cta.sentence}</span>
          <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8 shrink-0 md:h-12 md:w-12">
            <path d="M 12 36 L 36 12 M 18 12 H 36 V 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="cta-verb mt-10 block w-full" aria-hidden="true"><Nameplate text={cta.verb} weight={700} /></span>
        <span className="sr-only">{cta.verb}: {cta.href.replace("mailto:", "")}</span>
      </a>
    </section>
  )
}
