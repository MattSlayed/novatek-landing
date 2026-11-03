import { Reveal } from "@/components/Reveal"
import { sources } from "@/content"
import { pictures } from "@/pictures"

/**
 * Sources: the archive, as a strip. Prints of the new tools of 1600, each in
 * the hands of the people using it, with the invention named under it.
 */
export function Sources() {
  return (
    <section id="sources" className="paper scroll-mt-6 px-4 py-24 md:px-[18px] md:py-32" aria-labelledby="sources-h">
      <Reveal className="grid grid-cols-12 gap-x-6 gap-y-5">
        <h2 id="sources-h" className="col-span-12 m-0 text-[28px] leading-[1.1] text-paper-ink md:col-span-6 md:text-[36px]">{sources.heading}</h2>
        <p className="col-span-12 m-0 max-w-[52ch] text-[17px] leading-[1.5] text-paper-muted md:col-span-6 md:col-start-7">{sources.text}</p>
      </Reveal>
      <Reveal as="ul" className="strip m-0 mt-12 grid list-none grid-cols-2 gap-3 p-0 md:mt-16 md:grid-cols-6 md:gap-4" stagger={60}>
        {pictures.strip.map((p) => (
          <li key={p.source}>
            <figure className="m-0">
              <img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover object-top" />
              <figcaption className="mt-3 text-[17px] leading-[1.35] text-paper-ink">
                <span className="serif text-[20px] leading-none">{p.invention}</span>
                <span className="block text-paper-muted">{p.title}, {p.year}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </Reveal>
    </section>
  )
}
