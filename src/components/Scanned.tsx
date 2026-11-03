import { useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Stamp } from "@/components/Stamp"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import type { Picture } from "@/pictures"

/** Deterministic pseudo-random numbers, so the mesh is the same on every render. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * A picture with the page's one treatment: part of the canvas is read as a
 * low-poly wireframe in cobalt, scan lines cross it, and a mono stamp gives
 * the real catalogue entry. The sweep runs on load and again when the pointer
 * enters; the wireframe lights up around the pointer.
 */
export function Scanned({
  picture,
  className,
  priority = false,
  shutter = false,
  stamp = true,
  seed = 7,
  cover = "right",
  sizes,
}: {
  picture: Picture
  className?: string
  priority?: boolean
  shutter?: boolean
  stamp?: boolean
  seed?: number
  cover?: "right" | "left" | "bottom"
  sizes?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const [sweep, setSweep] = useState(0)
  const mesh = useMemo(() => {
    const rnd = mulberry32(seed)
    const cols = 7
    const rows = 10
    const pts: Array<Array<[number, number]>> = []
    for (let r = 0; r <= rows; r++) {
      const row: Array<[number, number]> = []
      for (let c = 0; c <= cols; c++) {
        const jx = c === 0 || c === cols ? 0 : (rnd() - 0.5) * 9
        const jy = r === 0 || r === rows ? 0 : (rnd() - 0.5) * 7
        row.push([(c / cols) * 100 + jx, (r / rows) * 100 + jy])
      }
      pts.push(row)
    }
    const lines: string[] = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const a = pts[r][c], b = pts[r][c + 1], d = pts[r + 1][c], e = pts[r + 1][c + 1]
        const flip = rnd() > 0.5
        lines.push(`M${a[0].toFixed(1)} ${a[1].toFixed(1)}L${b[0].toFixed(1)} ${b[1].toFixed(1)}`)
        lines.push(`M${a[0].toFixed(1)} ${a[1].toFixed(1)}L${d[0].toFixed(1)} ${d[1].toFixed(1)}`)
        lines.push(flip ? `M${a[0].toFixed(1)} ${a[1].toFixed(1)}L${e[0].toFixed(1)} ${e[1].toFixed(1)}` : `M${b[0].toFixed(1)} ${b[1].toFixed(1)}L${d[0].toFixed(1)} ${d[1].toFixed(1)}`)
      }
    }
    const nodes = pts.flat().filter(() => rnd() > 0.82)
    return { d: lines.join(""), nodes }
  }, [seed])

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - r.left}px`)
    el.style.setProperty("--my", `${e.clientY - r.top}px`)
    el.style.setProperty("--lit", "1")
  }
  const onLeave = () => ref.current?.style.setProperty("--lit", "0")

  return (
    <figure
      ref={ref}
      onPointerMove={onMove}
      onPointerEnter={() => setSweep((n) => n + 1)}
      onPointerLeave={onLeave}
      className={cn("scanned group relative m-0 overflow-hidden bg-navy", shutter && "scanned-shutter", className)}
      data-cover={cover}
    >
      <img
        src={picture.src}
        alt={picture.alt}
        width={picture.width}
        height={picture.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        sizes={sizes}
        className="scanned-img absolute inset-0 h-full w-full object-cover"
      />
      <svg className="scanned-mesh pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d={mesh.d} fill="none" stroke="#2563eb" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.7" />
        {mesh.nodes.map(([x, y], i) => (
          <path key={i} d={`M${x} ${y}h0.001`} stroke="#ffffff" strokeWidth="4" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      <svg className="scanned-lit pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d={mesh.d} fill="none" stroke="#ffffff" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
        {mesh.nodes.map(([x, y], i) => (
          <path key={i} d={`M${x} ${y}h0.001`} stroke="#ffffff" strokeWidth="6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      <span className="scanned-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <span key={sweep} className="scanned-sweep pointer-events-none absolute inset-x-0 top-0 h-[18%]" aria-hidden="true" />
      {stamp ? (
        <figcaption className="absolute right-0 bottom-0 left-0 flex flex-wrap items-end justify-between gap-2 p-4">
          <HoverCard openDelay={120}>
            <HoverCardTrigger asChild>
              <button type="button" className="rounded-[2px] bg-navy-deep/85 px-2.5 py-1.5 text-left text-white outline-none focus-visible:ring-3 focus-visible:ring-white/70">
                <Stamp>{picture.artist} · {picture.year}</Stamp>
              </button>
            </HoverCardTrigger>
            <HoverCardContent align="start" className="w-80 font-serif text-[17px] leading-snug">
              <p className="m-0 font-medium">{picture.title}</p>
              <p className="m-0 mt-1 text-muted-foreground">{picture.medium}. {picture.credit}</p>
              <a href={picture.source} className="mt-2 inline-block font-sans text-[15px] text-cobalt underline" target="_blank" rel="noreferrer">Catalogue entry</a>
            </HoverCardContent>
          </HoverCard>
        </figcaption>
      ) : null}
    </figure>
  )
}
