import { cn } from "@/lib/utils"

/**
 * A section as one tile of the board: the same 8/12px margin as the hero
 * board, one 2px radius, a flat fill. Content keeps 20–40px inside.
 */
export function Slab({
  id,
  tone = "paper",
  className,
  children,
  labelledBy,
  as: Tag = "section",
}: {
  id?: string
  tone?: "paper" | "mist" | "navy" | "white"
  className?: string
  children: React.ReactNode
  labelledBy?: string
  as?: "section" | "footer" | "div"
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "tile relative mx-2 mt-2 scroll-mt-4 md:mx-3",
        tone === "paper" && "paper text-charcoal",
        tone === "mist" && "bg-mist text-charcoal",
        tone === "white" && "bg-white text-charcoal",
        tone === "navy" && "hud bg-navy-deep text-white",
        className,
      )}
    >
      {children}
    </Tag>
  )
}
