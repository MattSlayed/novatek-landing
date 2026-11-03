/**
 * Pictures found in open collections with taste's assets.mjs and approved by
 * Matthew on 2026-11-03. All are public domain (CC0) from The Metropolitan
 * Museum of Art and are credited on the page. Files live in public/pictures,
 * resized; the prints are cropped to their image areas.
 */
const base = import.meta.env.BASE_URL

export type Picture = {
  src: string
  alt: string
  title: string
  artist: string
  year: string
  credit: string
  source: string
  width: number
  height: number
  /** For the sources strip: the invention the plate shows. */
  invention?: string
}

export const pictures: { hero: Picture; chip: Picture; band: Picture; strip: Picture[] } = {
  hero: {
  src: `${base}pictures/hero.jpg`,
  alt: "Rubens's portrait of a young man in a white ruff, holding a pair of dividers and a small gilt instrument",
  title: "Portrait of a Man, Possibly an Architect or Geographer",
  artist: "Peter Paul Rubens",
  year: "1597",
  credit: "The Metropolitan Museum of Art, New York. Public domain (CC0). The Jack and Belle Linsky Collection, 1982.",
  source: "https://www.metmuseum.org/art/collection/search/437530",
  width: 1001,
  height: 1500,
},
  chip: {
  src: `${base}pictures/chip.jpg`,
  alt: "Rembrandt's etching of a scholar at his desk turning towards a glowing disc of letters at the window",
  title: "A Scholar in His Study ('Faust')",
  artist: "Rembrandt van Rijn",
  year: "c. 1652",
  credit: "The Metropolitan Museum of Art, New York. Public domain (CC0). Gift of Henry Walters, 1917.",
  source: "https://www.metmuseum.org/art/collection/search/373045",
  width: 685,
  height: 900,
},
  band: {
  src: `${base}pictures/band.jpg`,
  alt: "An engraved printing house: compositors at their cases, a man inking the forme, the pressman at the screw press, a proof-reader, and a child carrying sheets",
  title: "New Inventions of Modern Times (Nova Reperta): The Invention of Book Printing, plate 4",
  artist: "Jan Collaert I, after Jan van der Straet (Stradanus)",
  year: "c. 1600",
  credit: "The Metropolitan Museum of Art, New York. Public domain (CC0). Harris Brisbane Dick Fund, 1934.",
  source: "https://www.metmuseum.org/art/collection/search/659683",
  width: 2200,
  height: 1528,
},
  strip: [
    {
      src: `${base}pictures/strip-clock.jpg`,
      alt: "A clockmaker's workshop with a large iron movement on the bench, a man filing and a forge behind",
      title: "Nova Reperta: The Invention of the Clockwork, plate 5",
      artist: "Jan Collaert I, after Jan van der Straet (Stradanus)",
      year: "c. 1600",
      credit: "The Metropolitan Museum of Art, New York. Public domain (CC0). Harris Brisbane Dick Fund, 1934.",
      source: "https://www.metmuseum.org/art/collection/search/659694",
      width: 1400,
      height: 972,
      invention: "Clockwork",
    },
    {
      src: `${base}pictures/strip-glasses.jpg`,
      alt: "A spectacle-maker's shop with customers trying on eyeglasses at the counter",
      title: "Nova Reperta: The Invention of Eyeglasses, plate 15",
      artist: "Jan Collaert I, after Jan van der Straet (Stradanus)",
      year: "c. 1600",
      credit: "The Metropolitan Museum of Art, New York. Public domain (CC0). The Elisha Whittelsey Collection, The Elisha Whittelsey Fund, 1949.",
      source: "https://www.metmuseum.org/art/collection/search/659672",
      width: 1400,
      height: 966,
      invention: "Eyeglasses",
    },
    {
      src: `${base}pictures/strip-astrolabe.jpg`,
      alt: "A navigator on a shore at night holding an astrolabe up to the stars, with a ship at anchor behind",
      title: "Nova Reperta: Amerigo Vespucci Discovering the Southern Cross with an Astrolabium, plate 18",
      artist: "Jan Collaert I, after Jan van der Straet (Stradanus)",
      year: "c. 1600",
      credit: "The Metropolitan Museum of Art, New York. Public domain (CC0). The Elisha Whittelsey Collection, The Elisha Whittelsey Fund, 1949.",
      source: "https://www.metmuseum.org/art/collection/search/659731",
      width: 1400,
      height: 921,
      invention: "The astrolabe",
    },
    {
      src: `${base}pictures/strip-compass.jpg`,
      alt: "A scholar at a table with a compass and lodestone, demonstrating the magnet's pull",
      title: "Nova Reperta: The Invention of the Compass, plate 2",
      artist: "Jan Collaert I, after Jan van der Straet (Stradanus)",
      year: "c. 1600",
      credit: "The Metropolitan Museum of Art, New York. Public domain (CC0). Harris Brisbane Dick Fund, 1934.",
      source: "https://www.metmuseum.org/art/collection/search/659663",
      width: 1400,
      height: 968,
      invention: "The compass",
    },
    {
      src: `${base}pictures/strip-engraving.jpg`,
      alt: "An engraver's workshop: men cutting copper plates at the window and a press in the background",
      title: "Nova Reperta: The Invention of Copper Engraving, plate 19",
      artist: "Jan Collaert I, after Jan van der Straet (Stradanus)",
      year: "c. 1600",
      credit: "The Metropolitan Museum of Art, New York. Public domain (CC0). The Elisha Whittelsey Collection, The Elisha Whittelsey Fund, 1949.",
      source: "https://www.metmuseum.org/art/collection/search/659685",
      width: 1400,
      height: 952,
      invention: "Copper engraving",
    },
    {
      src: `${base}pictures/strip-century.jpg`,
      alt: "A lithograph of a telegraph operator at a desk, a steam printing press behind him, and a locomotive and steamboat through the window",
      title: "The Progress of the Century: The Lightning Steam Press, The Electric Telegraph, The Locomotive, The Steamboat",
      artist: "Currier & Ives",
      year: "1876",
      credit: "The Metropolitan Museum of Art, New York. Public domain (CC0). Bequest of Adele S. Colgate, 1962.",
      source: "https://www.metmuseum.org/art/collection/search/659890",
      width: 1400,
      height: 978,
      invention: "Steam press, telegraph, locomotive, steamboat",
    },
  ],
}

/** Unique credits for the footer, in page order. */
export function credits(): Picture[] {
  const all = [pictures.hero, pictures.chip, pictures.band, ...pictures.strip]
  return all.filter((p, i) => all.findIndex((q) => q.source === p.source) === i)
}
