/**
 * All copy, facts and credits on the page live here so they can be checked in
 * one place. NOVATEK facts are quoted from novatekllc.co.za (read 2026-11-03).
 * Historical facts and the quotation are marked with their sources and need
 * Matthew's confirmation before publishing.
 */

export const site = "https://www.novatekllc.co.za"

export const slogan = "The next industrial era. Human-led. AI-amplified."

export const hero = {
  description:
    "AI, operations intelligence and reliability engineering for the industries that keep countries running: power, mining, heavy engineering and water.",
  amplified: "Decades of plant expertise, amplified rather than replaced.",
  footnote: "Johannesburg · Industrial enterprises of 50 to 500 employees · Residency and local content, by design",
  primary: { label: "See proven outcomes", href: `${site}/#cases` },
  secondary: { label: "Meet NOVACORE", href: `${site}/platform` },
  talk: { label: "Let's talk", href: `${site}/#contact` },
}

export const nav = [
  { label: "Thesis", href: "#thesis" },
  { label: "The loop", href: "#loop" },
  { label: "Sectors", href: "#sectors" },
  { label: "Disciplines", href: "#disciplines" },
]

export const thesis = {
  heading: "Humanity before technology.",
  // Matthew's argument, set plainly. Not from the site.
  lead: "Tools change every decade. The people holding them do not: ambition, fear, tribalism and the need for meaning have not moved since the first furnace was lit. So the record of how people built, ran and broke things is the sharpest diagnostic of what they will do with the next one.",
  columns: [
    {
      runIn: "Who we are.",
      text: "A Johannesburg-based AI and operations-intelligence implementation company, building working systems for industrial enterprises of 50 to 500 employees across power generation, heavy engineering, mining services and fabrication.",
    },
    {
      runIn: "What we do.",
      text: "We help operations teams make better decisions with the data they already have: AI tools that read contracts, dashboards that surface real risks, and automation that takes the busywork off your plate. Every engagement starts with advisory and ends with something built and running.",
    },
    {
      runIn: "Where we work.",
      text: "South Africa and Botswana, with cross-border delivery proven from an active Botswana engagement. POPIA-native and B-BBEE Level 1. Client data is stored in South Africa, on in-country infrastructure.",
    },
    {
      runIn: "How to reach us.",
      text: "info@novatekllc.co.za or +27 82 680 5571. We respond within one working day. Tell us the operation, the constraint and what you need to decide, and we'll come back with a scoped view of what is achievable.",
    },
  ],
}

export const loop = {
  heading: "Loop, not line.",
  intro:
    "We read the past the way an engineer reads a trend log: as evidence of how this system behaves under load. What people did with the last tool is the baseline for what they will do with the next one. Then we build, with a person confirming every write.",
  stages: [
    {
      id: "past",
      name: "Past",
      title: "Read the record.",
      text: "Start with what the operation already owns: P&IDs, general arrangements, layouts, job cards, SOPs and maintenance history. Complete, and unusable, until someone reads it.",
      // Thucydides, History of the Peloponnesian War, 1.22, Richard Crawley's
      // translation (1874, public domain). NEEDS MATTHEW'S CONFIRMATION.
      quote: {
        text: "…an exact knowledge of the past as an aid to the interpretation of the future, which in the course of human things must resemble if it does not reflect it…",
        source: "Thucydides, 1.22, translated by Richard Crawley, 1874",
        when: "c. 400 BC",
      },
    },
    {
      id: "diagnosis",
      name: "Diagnosis",
      title: "Baseline the behaviour.",
      text: "We baseline the process first, intervene where the waste actually is, and measure the delta. We treat data as evidence, not dashboards as theatre. Every metric carries provenance.",
    },
    {
      id: "present",
      name: "Present",
      title: "Build what runs.",
      text: "Every engagement starts with advisory, a readiness review and a roadmap, and ends with something built and running. We integrate with the systems you already run, legacy or modern.",
    },
    {
      id: "amplified",
      name: "Amplified",
      title: "A person confirms.",
      text: "Every write action passes through a mandatory human confirmation gate, so no black-box AI acts on your behalf. Reads traverse freely; writes always require human consent.",
    },
  ],
}

export type Sector = {
  id: string
  name: string
  then: { fact: string; stamp: string; source: string }
  now: { fact: string; stamp: string }
  action: { label: string; href: string }
}

/** Historical facts need Matthew's confirmation; sources are given for checking. */
export const sectors: Sector[] = [
  {
    id: "power",
    name: "Power",
    then: {
      fact: "Kimberley switched on electric street lighting in 1882, among the first cities in the world to do so, to keep the diamond diggings working after dark.",
      stamp: "Kimberley, 1882",
      source: "Kimberley electric street lighting, 1882: check against the McGregor Museum or Eskom's heritage record",
    },
    now: {
      fact: "More than 45 years of power-fleet leadership: 30+ outages a year across a six-station coal fleet under one integrated plan, and a 15% UCLF improvement in 18 months.",
      stamp: "Anchor engagement, continuous since Nov 2025",
    },
    action: { label: "See the outage programme", href: `${site}/#cases` },
  },
  {
    id: "mining",
    name: "Mining",
    then: {
      fact: "Georgius Agricola's De re metallica, printed in Basel in 1556, was the first systematic account of mining and metallurgy, and stayed the standard text for two centuries.",
      stamp: "Basel, 1556",
      source: "Agricola, De re metallica (1556); Hoover translation, 1912",
    },
    now: {
      fact: "A real plant runs six brands. NOVACORE Walk models the plant a customer actually has, with a knowledge graph over every pump, valve and vessel, each fact cited to its source.",
      stamp: "NOVACORE Walk: demonstrable, synthetic plant",
    },
    action: { label: "Read the NOVACORE brief", href: `${site}/platform` },
  },
  {
    id: "engineering",
    name: "Heavy engineering",
    then: {
      fact: "Vitruvius set out in De architectura, in the first century BC, that a built thing must hold three qualities at once: firmitas, utilitas, venustas. Soundness, usefulness and grace.",
      stamp: "Rome, c. 25 BC",
      source: "Vitruvius, De architectura, book I, chapter 3",
    },
    now: {
      fact: "Outage planning and full NEC3/NEC4 contract administration: nine active NEC3 term service contracts across ten sites, with contract value administered in excess of R 25 million.",
      stamp: "9 NEC3 contracts · 10 sites",
    },
    action: { label: "See proven outcomes", href: `${site}/#cases` },
  },
  {
    id: "water",
    name: "Water",
    then: {
      fact: "In AD 97 Frontinus, Rome's water commissioner, surveyed the city's nine aqueducts in De aquaeductu: the flow each delivered, and how much was stolen on the way.",
      stamp: "Rome, AD 97",
      source: "Frontinus, De aquaeductu urbis Romae",
    },
    now: {
      fact: "NOVAFLOW, the flow-assets division: brand-agnostic service, repair, reliability and spares for pumps and valves, for slurry, water, dewatering and process duty.",
      stamp: "NOVAFLOW · pumps and valves",
    },
    action: { label: "Talk about a flow-asset engagement", href: `${site}/#contact` },
  },
]

export const disciplines = {
  heading: ["Six disciplines.", "One approach."],
  text: "Every engagement starts with the same question: what does Defensible look like for this client, this industry, this constraint set? Then we baseline the process, intervene where the waste is, and measure the delta.",
  action: { label: "Meet NOVACORE", href: `${site}/platform` },
  rows: [
    { title: "Strategic AI implementation", text: "Bespoke AI solutions from prompt engineering through to full assembly-line architectures. We separate Defensible from Aspirational before anything gets built.", terms: ["AI readiness review", "NEC contract analysis", "Transformation roadmap"] },
    { title: "Operations intelligence", text: "Real-time dashboards and decision-support systems that turn operational data into executive insight across multiple sites and business units.", terms: ["Multi-site monitoring", "Baseline and KPI definition", "Measured improvement cycles"] },
    { title: "Data analytics", text: "End-to-end data pipelines, ETL and Power BI reporting that turn raw operational data into validated, auditable business intelligence.", terms: ["Pipeline architecture", "Power BI semantic models", "Provenance-traced reporting"] },
    { title: "Process automation", text: "Workflow automation with Microsoft Power Automate, Python and custom integrations. Always with a human confirmation gate on writes.", terms: ["Power Automate / Python workflows", "Human-in-the-loop guardrails", "M365 + Google Cloud integrations"] },
    { title: "Engineering management and NEC administration", text: "Technical operations management, outage planning and full NEC3/NEC4 contract lifecycle administration, grounded in more than 45 years of power-fleet leadership.", terms: ["Outage planning", "NEC3 / NEC4 lifecycle", "SBD 6.2 and local-content evidence"] },
    { title: "Skills development and training", text: "Artisan training programmes, TVET workplace partnerships, AI workspace upskilling and leadership development for engineering teams.", terms: ["Artisan and TVET partnerships", "AI workspace upskilling", "Engineering leadership development"] },
  ],
}

export const close = {
  heading: "Build something measurable.",
  text: "Whether it's an AI readiness review, a contract-analysis pipeline, or a full NOVACORE pilot, the conversation starts with what you actually need. We respond within one working day.",
  action: { label: "Email us", href: "mailto:info@novatekllc.co.za" },
}

export const footer = {
  links: [
    { label: "Platform", href: `${site}/platform` },
    { label: "Services", href: `${site}/#services` },
    { label: "Case studies", href: `${site}/#cases` },
    { label: "Compliance", href: `${site}/#compliance` },
    { label: "Partners", href: `${site}/partners` },
    { label: "Contact", href: `${site}/#contact` },
  ],
  contact: ["info@novatekllc.co.za", "+27 82 680 5571", "Johannesburg, South Africa"],
  legal: `© ${new Date().getFullYear()} NOVATEK LLC (Pty) Ltd. Reg. No. 2025/796748/07.`,
  badges: ["B-BBEE Level 1", "POPIA compliant", "Data stored in South Africa"],
}
