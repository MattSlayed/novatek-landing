import { ArrowRightIcon } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { RoutedLines } from "@/components/RoutedLines"
import { disciplines } from "@/content"
import { cn } from "@/lib/utils"

/**
 * Features: a statement tile on paper beside a dark tile of six rows. Rows
 * show their title only; one opens at a time. The heading zigzags, first
 * line left and second line right; the rows alternate two navy tones.
 */
export function Disciplines() {
  return (
    <section id="disciplines" className="relative mx-2 mt-2 grid scroll-mt-4 grid-cols-1 gap-2 md:mx-3 lg:grid-cols-2" aria-labelledby="disc-h">
      <Reveal className="tile paper relative flex min-h-[60svh] flex-col justify-between p-5 md:p-10">
        <RoutedLines
          viewBox="0 0 720 900"
          className="hidden lg:block"
          glow={false}
          tone="charcoal"
          routes={[
            { d: "M 720 120 H 560 V 420 H 120 V 640", nodes: [[560, 120], [560, 420], [120, 420], [120, 640]] },
            { d: "M 0 300 H 60 V 520 H 330 V 700", nodes: [[60, 300], [60, 520], [330, 520], [330, 700]] },
          ]}
        />
        <h2 id="disc-h" className="relative m-0 flex flex-col text-[clamp(22px,2.8vw,40px)] leading-[1.15] text-navy">
          {disciplines.heading.map((line, i) => (
            <span key={line} className={cn("block", i === 1 && "text-right")}>{line}</span>
          ))}
        </h2>
        <div className="relative mt-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="m-0 max-w-[32ch] text-[17px] leading-[1.5]">{disciplines.text}</p>
          <Button asChild size="xl" className="w-fit shrink-0 rounded-[2px]">
            <a href={disciplines.action.href}>
              {disciplines.action.label}
              <ArrowRightIcon data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </Reveal>
      <Reveal className="tile hud overflow-hidden text-white" stagger={40}>
        <Accordion type="single" collapsible defaultValue={disciplines.rows[0].title} className="flex h-full flex-col">
          {disciplines.rows.map((row, i) => (
            <AccordionItem key={row.title} value={row.title} className={cn("flex flex-1 flex-col border-0", i % 2 === 0 ? "bg-navy-deep" : "bg-navy")}>
              <AccordionTrigger className="min-h-16 items-center rounded-none px-5 py-4 text-white hover:no-underline focus-visible:ring-white/70 md:px-7 **:data-[slot=accordion-trigger-icon]:text-tint">
                <h3 className="m-0 font-display text-[17px] leading-[1.3] font-normal">{row.title}</h3>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-6 md:px-7">
                <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-12">
                  <p className="col-span-12 m-0 text-[16px] leading-[1.45] text-tint md:col-span-7">{row.text}</p>
                  <p className="col-span-12 m-0 text-[15px] leading-[1.45] text-white md:col-span-5">
                    {row.terms.map((t, j) => (
                      <span key={t} className="md:block">{t}{j < row.terms.length - 1 ? <span className="md:hidden">, </span> : null}</span>
                    ))}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  )
}
