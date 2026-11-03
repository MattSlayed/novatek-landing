import { cn } from "@/lib/utils"

/**
 * The original NOVATEK N. Kept exactly as drawn: no redrawing, rotating or
 * effects, and nodes and arrow intact. `tone` sets white (on navy or the
 * gradient) or the navy-to-cobalt gradient (on white).
 */
export function Mark({
  tone = "white",
  className,
  title,
}: {
  tone?: "white" | "gradient"
  className?: string
  title?: string
}) {
  const id = tone === "gradient" ? "novatek-mark-gradient" : undefined
  const paint = tone === "gradient" ? `url(#${id})` : "#ffffff"
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 88"
      className={cn("block", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      {tone === "gradient" ? (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1e3a5f" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      ) : null}
      <path d="M 12 76 L 12 16 L 60 76 L 60 12" fill="none" stroke={paint} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 60 12 L 70 5" fill="none" stroke={paint} strokeWidth="5" strokeLinecap="round" />
      <circle cx="12" cy="76" r="5" fill={paint} />
      <circle cx="12" cy="16" r="4" fill={paint} />
      <circle cx="60" cy="76" r="5" fill={paint} />
      <circle cx="70" cy="5" r="3.5" fill={paint} />
    </svg>
  )
}

/** The wordmark: Michroma, 0.04em tracking. NOVA navy and TEK cobalt on light grounds, both white on dark. */
export function Wordmark({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <span className={cn("font-display tracking-[0.04em]", className)}>
      <span className={onDark ? "text-white" : "text-navy"}>NOVA</span>
      <span className={onDark ? "text-white" : "text-cobalt"}>TEK</span>
    </span>
  )
}
