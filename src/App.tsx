import { TooltipProvider } from "@/components/ui/tooltip"
import { Header } from "@/sections/Header"
import { Hero } from "@/sections/Hero"
import { Strata } from "@/sections/Strata"
import { Method } from "@/sections/Method"
import { Footer } from "@/sections/Footer"

export default function App() {
  return (
    <TooltipProvider>
      <a href="#strata-h" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-ground focus:ring-3 focus:ring-rubric-glow">
        Skip to content
      </a>
      <Header />
      <Hero />
      <main>
        <Strata />
        <Method />
      </main>
      <Footer />
    </TooltipProvider>
  )
}
