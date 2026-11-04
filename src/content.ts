/**
 * Every word on the page. The historical facts carry their sources and need
 * Matthew's confirmation before publishing. No clients, numbers or services
 * are claimed anywhere.
 */

export const name = "Future Past"
export const whatThisIs = "Same human, new tool. A method for working with AI agents."
export const email = "info@novatekllc.co.za"

export const hero = {
  title: "Same human. New tool.",
  deck: "Tools change every decade. The people holding them do not. Cut through the record and the same four things are in every layer.",
  sentence: "Tools change every decade. The people holding them do not.",
  action: { label: "Read the method", href: "#method" },
  corner: "A method for working with AI agents",
  links: [
    { label: "Thesis", href: "#thesis" },
    { label: "Method", href: "#method" },
    { label: "Sources", href: "#sources" },
  ],
}

/**
 * The strata: four human constants, each with one dated, sourced instance
 * from the record and the 2026 reading. Historical facts NEED MATTHEW'S
 * CONFIRMATION; sources are given for checking. "Control" stands in for the
 * brief's "tribalism", for which no fact could be stood behind.
 */
export const strata = [
  {
    id: "ambition",
    name: "Ambition",
    span: "1455 → 2026",
    record: "Gutenberg's press is at work in Mainz by about 1455. By 1500 presses stand in more than two hundred European towns, and the Nova Reperta plate shows the trade as it had become: compositors, an inker, a pressman, a proof-reader, a boy carrying sheets.",
    source: "Febvre and Martin, The Coming of the Book; Nova Reperta, plate 4, c. 1600",
    reading: "Agents read the whole record in an afternoon. The ambition to do it is older than the press. The decision about what to do with it is still a person's.",
    picture: "band",
  },
  {
    id: "fear",
    name: "Fear",
    span: "1492 → 2026",
    record: "In 1492 Johannes Trithemius writes In Praise of Scribes: monks should keep copying by hand, because the new press cannot be trusted with the word. He has it printed.",
    source: "Trithemius, De laude scriptorum, 1492, printed at Mainz 1494",
    reading: "Every new tool gets the same speech. The fear is human; the tool is incidental. The gate exists so the fear has somewhere to go: nothing is written without a name.",
    picture: "chip",
  },
  {
    id: "control",
    name: "Control",
    span: "1335 → 2026",
    record: "Mechanical clocks strike the hours from European towers in the fourteenth century. For the first time the working day can be counted by someone other than the worker.",
    source: "E. P. Thompson, Time, Work-Discipline and Industrial Capitalism, 1967; Nova Reperta, plate 5, c. 1600",
    reading: "An agent carries the obligations a colleague carries: a record of what it did, and a status a person can check. Autonomy is set task by task, not switched on.",
    picture: "strip-clock",
  },
  {
    id: "meaning",
    name: "Meaning",
    span: "1501 → 2026",
    record: "On the astrolabe plate Vespucci measures the Southern Cross, and the engraver prints beside him the lines of Dante's Purgatorio that were read as a prophecy of those four stars. The new instrument is understood through the old text.",
    source: "Nova Reperta, plate 18, c. 1600, quoting Purgatorio I, 22–24",
    reading: "A new reading is believed when it fits a story people already hold. So every claim an agent makes carries its source, and a person reads it before it stands.",
    picture: "strip-astrolabe",
  },
] as const

export const thesis = {
  heading: "New tool. Same human.",
  statement:
    "Ambition, fear, tribalism and the need for meaning have not moved since the first furnace was lit. The record of the last tool is the sharpest diagnostic of the next.",
}

export const method = {
  heading: "Agents propose. A person decides.",
  text:
    "Agents read, retrieve and propose; every claim carries its source. A named human diagnoses and decides. How much runs alone is set task by task: a report runs itself, a message is drafted and held, and anything that changes a record waits for a name.",
  groups: [
    {
      when: "Past",
      rows: [
        { what: "Read the record", who: "agents, alone" },
        { what: "Cite every source", who: "agents, alone" },
        { what: "Find the constant", who: "agents propose" },
      ],
    },
    {
      when: "Present",
      rows: [
        { what: "Diagnose", who: "a named human" },
        { what: "Decide", who: "a named human" },
      ],
    },
    {
      when: "Next",
      rows: [
        { what: "Execute, held at each write", who: "agents" },
        { what: "Confirm each write", who: "a named human" },
      ],
    },
  ],
  held: "Held. Waiting for a name.",
  result: "What you hold: a decision, its evidence, and a name on it.",
  gate: {
    proposed: "Publish this page.",
    nameLabel: "Your name",
    confirm: "Confirm",
    note: "A demonstration of the gate. Nothing is sent.",
  },
}

export const showcase = {
  heading: "The same argument, 534 years apart.",
  // Johannes Trithemius, De laude scriptorum (In Praise of Scribes), written
  // 1492, printed at Mainz in 1494. NEEDS MATTHEW'S CONFIRMATION.
  text:
    "In 1492 Johannes Trithemius wrote In Praise of Scribes: monks should keep copying by hand, because the new press could not be trusted with the word. He had it printed. Every new tool gets the same speech. The fear is human; the tool is incidental.",
  then: { figure: "1492", caption: "Trithemius, on the press" },
  now: { figure: "2026", caption: "An inbox, on the agents" },
}

export const sources = {
  heading: "New tools, as they were drawn.",
  text: "Nova Reperta, Antwerp, about 1600: a series of prints of the inventions of the age, each shown in the hands of the people using it.",
}

export const cta = {
  sentence: "Tell us what you are trying to decide. A person replies.",
  verb: "Write",
  href: `mailto:${email}`,
}

export const footer = {
  invitation: "Bring the decision. We bring the record.",
  reach: [{ label: email, href: `mailto:${email}` }],
  columns: [
    [
      { label: "Thesis", href: "#thesis" },
      { label: "Method", href: "#method" },
      { label: "Sources", href: "#sources" },
    ],
    [
      { label: "Pictures", href: "#pictures" },
      { label: "Fonts", href: "fonts/OFL.txt" },
    ],
  ],
  legal: `© ${new Date().getFullYear()} · Pictures are public domain (CC0), The Metropolitan Museum of Art.`,
}
