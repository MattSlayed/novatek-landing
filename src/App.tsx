import { TooltipProvider } from "@/components/ui/tooltip"
import { Hero } from "@/sections/Hero"
import { Thesis } from "@/sections/Thesis"
import { Loop } from "@/sections/Loop"
import { Sectors } from "@/sections/Sectors"
import { Disciplines } from "@/sections/Disciplines"
import { Close } from "@/sections/Close"
import { Footer } from "@/sections/Footer"

export default function App() {
  return (
    <TooltipProvider>
      <a href="#thesis" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-[2px] focus:bg-white focus:px-4 focus:py-2 focus:text-navy focus:ring-3 focus:ring-cobalt">
        Skip to content
      </a>
      <Hero />
      <main>
        <Thesis />
        <Loop />
        <Sectors />
        <Disciplines />
        <Close />
      </main>
      <Footer />
    </TooltipProvider>
  )
}
