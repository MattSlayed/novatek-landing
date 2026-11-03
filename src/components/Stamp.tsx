import { cn } from "@/lib/utils"

/**
 * A reading in the mono face Matthew chose: a year, a catalogue entry, a coordinate.
 * Sentence case, never smaller than 13px, and never placed above a heading.
 */
const mono = "font-mono text-[13px] leading-snug tracking-[0.01em] tabular" // taste-skill-ignore: Martian Mono labels are a brand choice (AGENTS.md)

export function Stamp({
  children,
  className,
  as: Tag = "span",
}: {
  children: React.ReactNode
  className?: string
  as?: "span" | "p" | "time" | "div"
}) {
  return (
    <Tag className={cn(mono, className)}>
      {children}
    </Tag>
  )
}
