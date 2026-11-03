import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { method } from "@/content"
import { cn } from "@/lib/utils"

function sast() {
  return new Intl.DateTimeFormat("en-ZA", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Africa/Johannesburg" }).format(new Date())
}

/**
 * How it works: the method printed as an itinerary on a paper slip with a
 * zigzag bottom edge, on the dark ground. The slip's last row is the gate:
 * the visitor types a name and confirms the agents' proposal, and the slip
 * prints who confirmed it and when. Nothing is sent; it is the method, shown.
 */
export function Method() {
  const [who, setWho] = useState("")
  const [confirmed, setConfirmed] = useState<{ by: string; at: string } | null>(null)
  const canConfirm = who.trim().length > 1

  return (
    <section id="method" className="relative scroll-mt-6 px-4 py-24 md:px-[18px] md:py-32" aria-labelledby="method-h">
      <Reveal className="grid grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 md:col-span-5">
          <h2 id="method-h" className="m-0 text-[clamp(34px,4.4vw,68px)] text-ink">{method.heading}</h2>
          <p className="m-0 mt-8 max-w-[30ch] text-[17px] leading-[1.5] text-ink">{method.text}</p>
        </div>

        <div className="col-span-12 md:col-span-5 md:col-start-7">
          <div className="slip paper mx-auto w-full max-w-[480px] px-6 pt-6 pb-10 text-[17px] tabular md:px-8 md:pt-8" role="group" aria-label="The method, as an itinerary">
            {method.groups.map((g) => (
              <div key={g.when} className="not-first:mt-7">
                <p className="m-0 font-semibold text-paper-ink">{g.when}</p>
                <ul className="m-0 mt-2 list-none p-0">
                  {g.rows.map((r) => (
                    <li key={r.what} className="row flex items-baseline gap-3 py-1.5">
                      <span className="min-w-0 text-paper-ink">{r.what}</span>
                      <span className="leader min-w-6 flex-1" aria-hidden="true" />
                      <span className={cn("min-w-0 shrink text-right", r.who.includes("human") ? "text-rubric" : "text-paper-muted")}>{r.who}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* The gate */}
            <div className="mt-8">
              <p className="m-0 text-paper-muted">Proposed by the agents</p>
              <p className="serif m-0 mt-1 text-[28px] leading-[1.15] text-paper-ink">{method.gate.proposed}</p>
              {confirmed ? (
                <p className="m-0 mt-4 text-paper-ink" role="status">
                  Confirmed by <span className="font-semibold">{confirmed.by}</span> · {confirmed.at} SAST
                </p>
              ) : (
                <form
                  className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end"
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (canConfirm) setConfirmed({ by: who.trim(), at: sast() })
                  }}
                >
                  <label className="flex flex-1 flex-col gap-1 text-paper-muted">
                    {method.gate.nameLabel}
                    <input
                      value={who}
                      onChange={(e) => setWho(e.target.value)}
                      autoComplete="name"
                      className="h-11 w-full rounded-none border border-paper-ink/40 bg-transparent px-3 text-[17px] text-paper-ink outline-none placeholder:text-paper-muted focus-visible:border-rubric focus-visible:ring-3 focus-visible:ring-rubric/40"
                    />
                  </label>
                  <Button type="submit" disabled={!canConfirm} size="xl" className="h-11 rounded-none bg-paper-ink px-5 text-[15px] font-medium text-paper hover:bg-rubric hover:text-ink focus-visible:ring-rubric/50">
                    {method.gate.confirm}
                  </Button>
                </form>
              )}
              <p className="m-0 mt-3 text-[13px] text-paper-muted">{method.gate.note}</p>
            </div>

            <p className={cn("result -mx-6 mt-8 flex min-h-11 items-center px-6 text-[17px] leading-[1.3] md:-mx-8 md:px-8", confirmed ? "bg-rubric text-ink" : "bg-paper-ink text-paper")} aria-live="polite">
              {confirmed ? method.result : method.held}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
