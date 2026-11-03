import { Nameplate } from "@/components/Nameplate"
import { footer, name } from "@/content"
import { credits } from "@/pictures"

/**
 * Footer: the name first, full width, then the ways to reach us and the
 * small links. The page closes like a bracket. Picture credits are the
 * last thing, in the serif.
 */
export function Footer() {
  return (
    <footer className="paper relative min-h-[90svh] overflow-hidden px-4 pt-6 pb-8 md:px-[18px]">
      <p className="m-0 mb-6 max-w-[30ch] text-[20px] leading-[1.3] text-paper-ink">{footer.invitation}</p>
      <div className="footer-name text-paper-ink" aria-hidden="true">
        <Nameplate text={name} />
      </div>
      <div className="mt-[72px] grid grid-cols-12 gap-x-6 gap-y-10">
        <ul className="col-span-12 m-0 list-none p-0 md:col-span-5">
          {footer.reach.map((r) => (
            <li key={r.href}>
              <a href={r.href} className="text-[28px] leading-[1.2] text-rubric no-underline hover:underline md:text-[36px]">{r.label}</a>
            </li>
          ))}
        </ul>
        <nav aria-label="Footer" className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-2 text-[15px] md:col-span-6 md:col-start-7 md:grid-cols-3">
          {footer.columns.map((col, i) => (
            <ul key={i} className="m-0 flex list-none flex-col gap-2 p-0">
              {col.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-paper-ink no-underline hover:underline">{l.label}</a>
                </li>
              ))}
            </ul>
          ))}
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            <li>
              <a href="#name" className="text-paper-ink no-underline hover:underline">Back to top</a>
            </li>
          </ul>
        </nav>
      </div>

      <section id="pictures" aria-labelledby="pictures-h" className="mt-24 max-w-[70ch]">
        <h2 id="pictures-h" className="m-0 text-[17px] font-semibold tracking-normal text-paper-ink">Pictures</h2>
        <ul className="serif m-0 mt-3 flex list-none flex-col gap-2 p-0 text-[17px] leading-[1.3] text-paper-muted">
          {credits().map((p) => (
            <li key={p.source}>
              <span className="text-paper-ink">{p.title}</span>, {p.artist}, {p.year}. {p.credit}{" "}
              <a href={p.source} className="text-paper-ink underline" target="_blank" rel="noreferrer">Source</a>
            </li>
          ))}
        </ul>
      </section>

      <p className="m-0 mt-16 text-[13px] text-paper-muted">{footer.legal}</p>
    </footer>
  )
}
