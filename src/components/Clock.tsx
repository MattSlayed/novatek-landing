import { useEffect, useState } from "react"
import { Stamp } from "@/components/Stamp"

function sast() {
  return new Intl.DateTimeFormat("en-ZA", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Africa/Johannesburg" }).format(new Date())
}

/** Johannesburg's coordinates and the time there, live. */
export function Clock({ className }: { className?: string }) {
  const [time, setTime] = useState(sast)
  useEffect(() => {
    const id = window.setInterval(() => setTime(sast()), 15_000)
    return () => window.clearInterval(id)
  }, [])
  return (
    <Stamp as="p" className={className}>
      Johannesburg · 26.20° S, 28.05° E · <time dateTime={new Date().toISOString()}>{time} SAST</time>
    </Stamp>
  )
}
