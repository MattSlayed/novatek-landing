import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/useInView"

/** Section entrance: children rise 12px and fade in once, staggered. Off under reduced motion. */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  stagger = 70,
}: {
  children: React.ReactNode
  className?: string
  as?: "div" | "section" | "ul" | "li" | "article" | "figure"
  stagger?: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <Tag ref={ref as never} data-reveal={inView ? "in" : "out"} style={{ "--stagger": `${stagger}ms` } as React.CSSProperties} className={cn("reveal", className)}>
      {children}
    </Tag>
  )
}
