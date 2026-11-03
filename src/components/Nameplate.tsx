import { useLayoutEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

/**
 * The name set as SVG text with a viewBox fitted to the word, so it spans the
 * full width on one line at any size and never wraps. The viewBox is measured
 * from the rendered glyphs once the font has loaded.
 */
export function Nameplate({ text, className, weight = 600 }: { text: string; className?: string; weight?: number }) {
  const textRef = useRef<SVGTextElement>(null)
  const [box, setBox] = useState<string>("0 0 1000 220")
  useLayoutEffect(() => {
    let cancelled = false
    const measure = () => {
      const t = textRef.current
      if (!t || cancelled) return
      const b = t.getBBox()
      if (b.width > 0) setBox(`${b.x.toFixed(1)} ${b.y.toFixed(1)} ${b.width.toFixed(1)} ${b.height.toFixed(1)}`)
    }
    measure()
    document.fonts?.ready.then(measure)
    return () => {
      cancelled = true
    }
  }, [text, weight])
  return (
    <svg viewBox={box} className={cn("block h-auto w-full overflow-visible", className)} aria-hidden="true" focusable="false">
      <text ref={textRef} x="0" y="200" fontFamily="'Exo 2', 'Segoe UI', system-ui, sans-serif" fontWeight={weight} fontSize="200" letterSpacing="-8" fill="currentColor">
        {text}
      </text>
    </svg>
  )
}
