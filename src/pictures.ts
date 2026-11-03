/**
 * Pictures found in open collections with taste's assets.mjs and approved by
 * Matthew on 2026-11-03. Every one is public domain (CC0) from The
 * Metropolitan Museum of Art and is credited in the footer. None is NOVATEK's
 * own work, client or site. Files live in public/pictures, resized to 1800px
 * (hero 2000px); the power print and the Piranesi plate are cropped to their
 * image areas.
 */
const base = import.meta.env.BASE_URL

export type Picture = {
  src: string
  alt: string
  title: string
  artist: string
  year: string
  medium: string
  credit: string
  source: string
  width: number
  height: number
}

const met = "The Metropolitan Museum of Art, New York. Public domain (CC0)."

const hero: Picture = {
  src: `${base}pictures/hero.jpg`,
  alt: "Rembrandt's painting of Aristotle, in a dark robe and gold chain, resting a hand on a marble bust of Homer",
  title: "Aristotle with a Bust of Homer",
  artist: "Rembrandt van Rijn",
  year: "1653",
  medium: "Oil on canvas",
  credit: `${met} Purchase, special contributions and funds given or bequeathed by friends of the Museum, 1961.`,
  source: "https://www.metmuseum.org/art/collection/search/437394",
  width: 1896,
  height: 2000,
}

const engineering: Picture = {
  src: `${base}pictures/engineering.jpg`,
  alt: "Piranesi's etched plate of iron lewis hooks, rope slings and a lifting tackle on a block of travertine, with an inset of the timber crane on the tomb of Cecilia Metella",
  title: "Demonstration panel showing technique for raising travertine and marble blocks for the construction of the tomb of Cecilia Metella, Rome, from Le Antichità Romane",
  artist: "Giovanni Battista Piranesi",
  year: "1756",
  medium: "Etching",
  credit: `${met} Bequest of Phyllis Massar, 2011.`,
  source: "https://www.metmuseum.org/art/collection/search/416050",
  width: 1800,
  height: 1226,
}

const power: Picture = {
  src: `${base}pictures/power.jpg`,
  alt: "A hand-coloured lithograph of the Novelty Iron Works on the East River: foundry sheds, smoking chimneys, flywheels and castings in the yard, and a boat on the water",
  title: "Novelty Iron Works, Foot of 12th St. E.R. New York. Stillman, Allen & Co., Iron Founders, Steam Engine and General Machinery Manufacturers",
  artist: "John Penniman",
  year: "1842–55",
  medium: "Lithograph",
  credit: `${met} The Edward W. C. Arnold Collection of New York Prints, Maps and Pictures, Bequest of Edward W. C. Arnold, 1954.`,
  source: "https://www.metmuseum.org/art/collection/search/357218",
  width: 1800,
  height: 1101,
}

const mining: Picture = {
  src: `${base}pictures/mining.jpg`,
  alt: "Hogarth's engraved plate of the silver mine at Sala: ore-body plans with a compass rose, the hoist tower and mine buildings, and a view down into the open stope with miners and fire-setting",
  title: "Fodina argentea Sahlensis: A Silver Mine at Sala, I, from Aubry de La Mottraye's Travels",
  artist: "William Hogarth",
  year: "1723–24",
  medium: "Etching and engraving",
  credit: `${met} Harris Brisbane Dick Fund, 1932.`,
  source: "https://www.metmuseum.org/art/collection/search/396281",
  width: 1259,
  height: 1800,
}

const water: Picture = {
  src: `${base}pictures/water.jpg`,
  alt: "Géricault's painting of a two-tier Roman aqueduct crossing a river gorge under a stormy evening sky, with ruined masonry at the left and bathers below",
  title: "Evening: Landscape with an Aqueduct",
  artist: "Théodore Géricault",
  year: "1818",
  medium: "Oil on canvas",
  credit: `${met} Purchase, Gift of James A. Moffett 2nd, in memory of George M. Moffett, by exchange, 1989.`,
  source: "https://www.metmuseum.org/art/collection/search/436455",
  width: 1578,
  height: 1800,
}

export const pictures = {
  hero,
  second: engineering,
  power,
  mining,
  engineering,
  water,
  close: water,
} satisfies Record<string, Picture>

/** Unique credits for the footer, in page order. */
export const credits: Picture[] = [hero, engineering, power, mining, water]
