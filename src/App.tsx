import { TooltipProvider } from "@/components/ui/tooltip"
import { Hero } from "@/sections/Hero"
import { Thesis } from "@/sections/Thesis"
import { Method } from "@/sections/Method"
import { Band } from "@/sections/Band"
import { Showcase } from "@/sections/Showcase"
import { Sources } from "@/sections/Sources"
import { Cta } from "@/sections/Cta"
import { Footer } from "@/sections/Footer"

export default function App() {
  return (
    <TooltipProvider>
      <a href="#thesis" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-ground focus:ring-3 focus:ring-rubric">
        Skip to content
      </a>
      <Hero />
      <main>
        <Thesis />
        <Method />
        <Band />
        <Showcase />
        <Sources />
        <Cta />
      </main>
      <Footer />
    </TooltipProvider>
  )
}
