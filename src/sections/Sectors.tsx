import { useState } from "react"
import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Reveal } from "@/components/Reveal"
import { Slab } from "@/components/Slab"
import { Stamp } from "@/components/Stamp"
import { sectors, type Sector } from "@/content"
import { pictures, type Picture } from "@/pictures"
import { cn } from "@/lib/utils"

type Kind = "heading" | "then" | "now" | "stamp" | "action"
type Flat = { kind: Kind; r: number; c: number; rs?: number; cs?: number }
type Board = { cols: number; rows: number; flats: Flat[] }

/** Wide screens: a 6×4 board of squares, five flat tiles, none orthogonally adjacent. */
const wide: Board = {
  cols: 6,
  rows: 4,
  flats: [
    { kind: "heading", r: 0, c: 0 },
    { kind: "stamp", r: 0, c: 4 },
    { kind: "then", r: 1, c: 2 },
    { kind: "now", r: 2, c: 4 },
    { kind: "action", r: 3, c: 1 },
  ],
}

/** Narrow screens: 3×8, the picture re-cut as a tall strip; fact tiles are 2×2, the action 1×2. */
const narrow: Board = {
  cols: 3,
  rows: 8,
  flats: [
    { kind: "heading", r: 0, c: 0 },
    { kind: "then", r: 1, c: 1, rs: 2, cs: 2 },
    { kind: "now", r: 4, c: 0, rs: 2, cs: 2 },
    { kind: "action", r: 7, c: 1, cs: 2 },
  ],
}

function cells(board: Board) {
  const covered = new Set<string>()
  for (const f of board.flats)
    for (let r = f.r; r < f.r + (f.rs ?? 1); r++) for (let c = f.c; c < f.c + (f.cs ?? 1); c++) covered.add(`${r},${c}`)
  const out: Array<{ key: string; r: number; c: number; flat?: Flat }> = []
  for (let r = 0; r < board.rows; r++)
    for (let c = 0; c < board.cols; c++) {
      const flat = board.flats.find((f) => f.r === r && f.c === c)
      if (flat) out.push({ key: `${r},${c}`, r, c, flat })
      else if (!covered.has(`${r},${c}`)) out.push({ key: `${r},${c}`, r, c })
    }
  return out
}

/**
 * Showcase: one picture cut across a board of square tiles. The tabs change
 * the era: each sector's picture is a record of its own past, and the flat
 * tiles carry one historical fact, one NOVATEK fact and the action.
 */
export function Sectors() {
  const [active, setActive] = useState(sectors[0].id)
  return (
    <Slab id="sectors" tone="paper" labelledBy="sectors-h">
      <Reveal className="p-2 py-16 md:p-3 md:py-24 lg:py-28">
        <div className="grid grid-cols-12 gap-x-6 gap-y-5 px-3 md:px-7">
          <h2 id="sectors-h" className="col-span-12 m-0 text-[clamp(24px,2.8vw,40px)] leading-[1.2] text-navy md:col-span-6">
            Four sectors. One record.
          </h2>
          <p className="col-span-12 m-0 max-w-[48ch] text-[19px] leading-[1.45] md:col-span-6">
            Each sector has been solving the same problem for centuries: keep the plant running, prove what it did, and hand the knowledge on. Pick one and read its record against ours.
          </p>
        </div>

        <Tabs value={active} onValueChange={setActive} className="mt-10 gap-6">
          <TabsList variant="line" className="mx-3 h-auto flex-wrap gap-2 p-0 md:mx-7" aria-label="Sector">
            {sectors.map((s) => (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className="h-11 flex-none rounded-[2px] border border-navy/40 px-4 font-display text-[15px] text-navy after:hidden hover:text-navy data-active:border-navy! data-active:bg-navy! data-active:text-white!"
              >
                {s.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {sectors.map((s) => {
            const pic = pictures[s.id as keyof typeof pictures]
            return (
              <TabsContent key={s.id} value={s.id} className="mosaic">
                <Mosaic board={narrow} sector={s} picture={pic} className="grid grid-cols-3 gap-[6px] lg:hidden" narrow />
                <Mosaic board={wide} sector={s} picture={pic} className="hidden grid-cols-6 gap-2 lg:grid" />
                <p className="m-0 mt-3 max-w-[60ch] px-3 text-[15px] leading-snug text-muted-foreground md:px-7">
                  {pic.title}, {pic.artist}, {pic.year}. {pic.credit}
                </p>
              </TabsContent>
            )
          })}
        </Tabs>
      </Reveal>
    </Slab>
  )
}

function Mosaic({ board, sector, picture, className, narrow = false }: { board: Board; sector: Sector; picture: Picture; className: string; narrow?: boolean }) {
  let first = true
  return (
    <div className={className} role="group" aria-label={`${sector.name}: the record and the reading`}>
      {cells(board).map(({ key, r, c, flat }) => {
        const place = { gridRow: `${r + 1} / span ${flat?.rs ?? 1}`, gridColumn: `${c + 1} / span ${flat?.cs ?? 1}` }
        if (!flat) {
          const lead = first
          first = false
          return (
            <div key={key} style={place} className="mosaic-cell relative aspect-square overflow-hidden bg-navy">
              <img
                src={picture.src}
                alt={lead ? picture.alt : ""}
                aria-hidden={lead ? undefined : true}
                width={picture.width}
                height={picture.height}
                loading="lazy"
                decoding="async"
                className="mosaic-piece absolute max-w-none object-cover"
                style={{
                  width: `${board.cols * 100}%`,
                  height: `${board.rows * 100}%`,
                  left: `${-c * 100}%`,
                  top: `${-r * 100}%`,
                }}
              />
              <span className="scanned-lines pointer-events-none absolute inset-0" aria-hidden="true" />
            </div>
          )
        }
        return <FlatTile key={key} kind={flat.kind} sector={sector} style={place} narrow={narrow} />
      })}
    </div>
  )
}

function FlatTile({ kind, sector, style, narrow }: { kind: Kind; sector: Sector; style: React.CSSProperties; narrow: boolean }) {
  const pad = narrow ? "p-3" : "p-4"
  if (kind === "heading")
    return (
      <div style={style} className={cn("mosaic-cell flex aspect-square flex-col justify-end bg-navy-deep text-white", pad)}>
        <p className={cn("m-0 font-display leading-[1.15]", narrow ? "text-[17px]" : "text-[24px]")}>{sector.name}: then and now.</p>
      </div>
    )
  if (kind === "then")
    return (
      <div style={style} className={cn("mosaic-cell flex aspect-square flex-col justify-between overflow-hidden bg-white text-charcoal", pad)}>
        <p className={cn("m-0 font-serif leading-[1.3]", narrow ? "text-[19px]" : "text-[17px]")}>{sector.then.fact}</p>
        <Stamp className="mt-2 text-navy">{sector.then.stamp}</Stamp>
      </div>
    )
  if (kind === "now")
    return (
      <div style={style} className={cn("mosaic-cell flex aspect-square flex-col justify-between overflow-hidden bg-navy text-white", pad)}>
        <p className={cn("m-0 leading-[1.35]", narrow ? "text-[17px]" : "text-[15px]")}>{sector.now.fact}</p>
        <Stamp className="mt-2 text-tint">{sector.now.stamp}</Stamp>
      </div>
    )
  if (kind === "stamp")
    return (
      <div style={style} className={cn("mosaic-cell flex aspect-square flex-col justify-end gap-1 bg-mist text-charcoal", pad)}>
        <Stamp className="text-charcoal">Record: {sector.then.stamp}</Stamp>
        <Stamp className="text-cobalt">Reading: {sector.now.stamp}</Stamp>
      </div>
    )
  return (
    <div style={style} className={cn("mosaic-cell flex flex-col justify-end bg-cobalt text-white", pad, narrow ? "aspect-[2/1]" : "aspect-square")}>
      <Button asChild size="default" className="h-auto min-h-11 w-full min-w-0 justify-between gap-2 rounded-[2px] bg-white px-3 py-2 text-left text-[15px] whitespace-normal text-navy hover:bg-mist focus-visible:ring-white/70">
        <a href={sector.action.href}>
          <span className="min-w-0">{sector.action.label}</span>
          <ArrowRightIcon data-icon="inline-end" className="shrink-0" />
        </a>
      </Button>
    </div>
  )
}
