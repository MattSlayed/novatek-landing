import { Reveal } from "@/components/Reveal"
import { email, footer, name, sources } from "@/content"
import { credits, pictures } from "@/pictures"

/**
 * Footer on the parchment: a row of the prints, the invitation, the email
 * large, the small links, the credits.
 */
export function Footer() {
  return (
    <footer id="write" className="paper px-4 pt-14 pb-8 md:px-[18px] md:pt-20">
      <h2 className="m-0 text-[clamp(28px,3.2vw,44px)] leading-none font-bold tracking-[-0.04em] text-paper-ink">{sources.heading}</h2>
      <p className="m-0 mt-3 max-w-[52ch] text-[17px] leading-[1.5] text-paper-ink">{sources.text}</p>
      <Reveal as="ul" className="m-0 mt-8 grid list-none grid-cols-3 gap-3 p-0 md:grid-cols-6 md:gap-4" stagger={60}>
        {pictures.strip.map((p) => (
          <li key={p.source}>
            <figure className="m-0">
              <img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover object-top" />
              <figcaption className="mt-2 text-[13px] leading-[1.35] text-paper-ink">
                <span className="serif text-[17px] leading-none">{p.invention}</span>
                <span className="block text-paper-muted">{p.year}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </Reveal>

      <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-8">
        <div className="col-span-12 md:col-span-7">
          <p className="m-0 max-w-[30ch] text-[20px] leading-[1.3] text-paper-ink">{footer.invitation}</p>
          <a href={`mailto:${email}`} className="mt-3 inline-block text-[clamp(24px,3.2vw,44px)] leading-none font-bold tracking-[-0.04em] text-rubric no-underline hover:underline">{email}</a>
        </div>
        <nav aria-label="Footer" className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-2 text-[13px] md:col-span-5 md:grid-cols-3">
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            <li><a href="#top" className="text-paper-ink no-underline hover:underline">{name}</a></li>
            <li><a href="#method" className="text-paper-ink no-underline hover:underline">Method</a></li>
          </ul>
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            <li><a href="#pictures" className="text-paper-ink no-underline hover:underline">Pictures</a></li>
            <li><a href="fonts/OFL.txt" className="text-paper-ink no-underline hover:underline">Fonts</a></li>
          </ul>
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            <li><a href="#top" className="text-paper-ink no-underline hover:underline">Back to top</a></li>
          </ul>
        </nav>
      </div>

      <section id="pictures" aria-labelledby="pictures-h" className="mt-16 max-w-[70ch]">
        <h2 id="pictures-h" className="m-0 text-[13px] font-semibold tracking-normal text-paper-ink">Pictures</h2>
        <ul className="serif m-0 mt-3 flex list-none flex-col gap-2 p-0 text-[17px] leading-[1.3] text-paper-muted">
          {credits().map((p) => (
            <li key={p.source}>
              <span className="text-paper-ink">{p.title}</span>, {p.artist}, {p.year}. {p.credit}{" "}
              <a href={p.source} className="text-paper-ink underline" target="_blank" rel="noreferrer">Source</a>
            </li>
          ))}
        </ul>
      </section>
      <p className="m-0 mt-12 text-[13px] text-paper-muted">{footer.legal}</p>
    </footer>
  )
}
