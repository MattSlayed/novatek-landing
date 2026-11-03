import { useId } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/useInView"

export type Route = {
  /** SVG path in the overlay's viewBox units. */
  d: string
  /** Nodes along it, in the same units. */
  nodes?: Array<[number, number]>
}

/**
 * Thin routed lines with small nodes, the ones Matthew chose, drawn over a
 * section. They start in the navy tiles and run across the gaps onto the paper.
 * Lines draw in once on scroll; the glow is an SVG filter on the lines only.
 */
export function RoutedLines({
  routes,
  viewBox,
  className,
  tone = "cobalt",
  glow = true,
  preserveAspectRatio = "none",
}: {
  routes: Route[]
  viewBox: string
  className?: string
  tone?: "cobalt" | "white" | "charcoal"
  glow?: boolean
  preserveAspectRatio?: string
}) {
  const id = useId()
  const { ref, inView } = useInView<SVGSVGElement>("0px")
  const stroke = tone === "white" ? "#ffffff" : tone === "charcoal" ? "#334155" : "#2563eb"
  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      preserveAspectRatio={preserveAspectRatio}
      aria-hidden="true"
      data-drawn={inView ? "in" : "out"}
      className={cn("routed pointer-events-none absolute inset-0 h-full w-full overflow-visible", className)}
    >
      {glow ? (
        <defs>
          <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      ) : null}
      {routes.map((r, i) => (
        <g key={i} style={{ "--i": i } as React.CSSProperties}>
          {glow ? (
            <path d={r.d} fill="none" stroke={stroke} strokeWidth="1.2" vectorEffect="non-scaling-stroke" opacity="0.7" filter={`url(#${id}-glow)`} className="routed-path" pathLength={1} />
          ) : null}
          <path d={r.d} fill="none" stroke={stroke} strokeWidth="1.2" vectorEffect="non-scaling-stroke" className="routed-path" pathLength={1} />
          {(r.nodes ?? []).map(([x, y], j) => (
            <circle key={j} cx={x} cy={y} r="3.5" fill={stroke} className="routed-node" style={{ "--j": j } as React.CSSProperties} />
          ))}
        </g>
      ))}
    </svg>
  )
}
