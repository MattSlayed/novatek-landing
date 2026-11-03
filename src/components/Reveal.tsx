import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/useInView"

/**
 * Section entrance: children rise 14px and fade in once, staggered by their
 * order. Off under prefers-reduced-motion (see index.css).
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  stagger = 70,
}: {
  children: React.ReactNode
  className?: string
  as?: "div" | "section" | "ul" | "li" | "article"
  stagger?: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <Tag
      ref={ref as never}
      data-reveal={inView ? "in" : "out"}
      style={{ "--stagger": `${stagger}ms` } as React.CSSProperties}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  )
}
