import { name } from "@/content"

/** A slim fixed header on a translucent ground: the masthead centred, two links. */
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 grid h-[60px] grid-cols-3 items-center bg-ground/85 px-4 text-[13px] md:px-[18px]">
      <a href="#method" className="justify-self-start text-ink no-underline hover:underline">Method</a>
      <a href="#top" className="justify-self-center font-semibold tracking-[-0.02em] text-ink no-underline text-[17px]">{name}</a>
      <a href="#write" className="justify-self-end text-ink no-underline hover:underline">Write</a>
    </header>
  )
}
