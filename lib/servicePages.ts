import { cities } from "@/lib/siteConfig";

export interface ServicePageData {
  slug: string;
  serviceName: string;
  citySlug: string;
  cityDisplayName: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  diagnosticTitle: string;
  diagnosticIntro: string;
  signs: string[];
  secondaryTitle?: string;
  secondarySigns?: string[];
  actionTitle: string;
  actionSteps: string[];
  closingNote: string;
}

export const servicePages: ServicePageData[] = [
  {
    slug: "emergency-plumbing-mattoon-il",
    serviceName: "Emergency Plumbing",
    citySlug: "mattoon-il",
    cityDisplayName: "Mattoon, IL",
    metaTitle: "Emergency Plumber in Mattoon, IL | 24/7 Response",
    metaDescription:
      "Burst pipe, sewage backup, or water heater flooding your Mattoon, IL home? Know the real emergency signs and what to do before help arrives.",
    heading: "Emergency Plumbing in Mattoon, IL",
    intro:
      "Not every plumbing problem is an emergency, but the ones that are can cause thousands of dollars in damage within hours. Here's how to tell the difference, and what to do right now if it's the real thing.",
    diagnosticTitle: "Is this a true plumbing emergency?",
    diagnosticIntro: "If any of these are happening, treat it as urgent:",
    signs: [
      "Water is actively spraying, gushing, or pooling somewhere it shouldn't be",
      "You smell gas or rotten eggs anywhere in the house",
      "Sewage or wastewater is coming up through more than one drain at once",
      "Your water heater is leaking and you can't stop it",
      "A toilet keeps overflowing no matter how many times you try to stop it",
      "Water is reaching outlets, walls, or the ceiling",
    ],
    actionTitle: "What to do right now",
    actionSteps: [
      "If you smell gas, leave the house immediately and call the gas company, then call us",
      "Find your main water shutoff valve, usually in the basement, crawl space, or where the water line enters the home",
      "Turn a round valve clockwise until it stops, or turn a lever valve a quarter turn until it's perpendicular to the pipe",
      "Keep people and pets away from standing water near outlets or wiring",
      "Don't pour chemical drain cleaner into a backed-up drain, it won't fix a main line issue and makes it more dangerous to clear",
    ],
    closingNote:
      "A slow drain, a dripping faucet, or a running toilet are real problems, but they're not emergencies. Reach out through our contact form for those and we'll get to you quickly without emergency rates.",
  },
  {
    slug: "emergency-plumbing-charleston-il",
    serviceName: "Emergency Plumbing",
    citySlug: "charleston-il",
    cityDisplayName: "Charleston, IL",
    metaTitle: "Emergency Plumber in Charleston, IL | 24/7 Response",
    metaDescription:
      "Burst pipe, sewage backup, or water heater flooding your Charleston, IL home? Know the real emergency signs and what to do before help arrives.",
    heading: "Emergency Plumbing in Charleston, IL",
    intro:
      "Not every plumbing problem is an emergency, but the ones that are can cause thousands of dollars in damage within hours, especially in Charleston's older homes near downtown and the EIU campus. Here's how to tell the difference, and what to do right now if it's the real thing.",
    diagnosticTitle: "Is this a true plumbing emergency?",
    diagnosticIntro: "If any of these are happening, treat it as urgent:",
    signs: [
      "Water is actively spraying, gushing, or pooling somewhere it shouldn't be",
      "You smell gas or rotten eggs anywhere in the house",
      "Sewage or wastewater is coming up through more than one drain at once",
      "Your water heater is leaking and you can't stop it",
      "A toilet keeps overflowing no matter how many times you try to stop it",
      "Water is reaching outlets, walls, or the ceiling",
    ],
    actionTitle: "What to do right now",
    actionSteps: [
      "If you smell gas, leave the house immediately and call the gas company, then call us",
      "Find your main water shutoff valve, usually in the basement, crawl space, or where the water line enters the home",
      "Turn a round valve clockwise until it stops, or turn a lever valve a quarter turn until it's perpendicular to the pipe",
      "Keep people and pets away from standing water near outlets or wiring",
      "Don't pour chemical drain cleaner into a backed-up drain, it won't fix a main line issue and makes it more dangerous to clear",
    ],
    closingNote:
      "A slow drain, a dripping faucet, or a running toilet are real problems, but they're not emergencies. Reach out through our contact form for those and we'll get to you quickly without emergency rates.",
  },
  {
    slug: "drain-cleaning-mattoon-il",
    serviceName: "Drain Cleaning & Clogs",
    citySlug: "mattoon-il",
    cityDisplayName: "Mattoon, IL",
    metaTitle: "Drain Cleaning in Mattoon, IL | Clogged Drain Repair",
    metaDescription:
      "Slow drain or backed-up sink in Mattoon, IL? Find out whether it's a simple clog or a bigger sewer line issue, and get it fixed fast.",
    heading: "Drain Cleaning & Clogs in Mattoon, IL",
    intro:
      "A slow drain is annoying. A main sewer line clog is a much bigger problem. Here's how to tell which one you're dealing with before you reach for a bottle of drain cleaner.",
    diagnosticTitle: "Is it just one drain, or something bigger?",
    diagnosticIntro:
      "A single slow drain is usually a local clog, hair, soap, grease, or food buildup in one fixture. Only one sink, tub, or shower is affected while everything else drains normally.",
    signs: [
      "Only one fixture is slow or blocked",
      "Water eventually drains, just slowly",
      "No unusual smell or gurgling elsewhere in the house",
    ],
    secondaryTitle: "Possible signs of a bigger problem (main sewer line)",
    secondarySigns: [
      "More than one drain is slow or backed up at the same time",
      "You hear gurgling in one fixture when you use a different one, like the toilet gurgling when the washing machine drains",
      "Water or sewage comes up through a floor drain or the lowest drain in the house",
      "A persistent sewage smell near drains or in the yard",
      "Standing water or unusually soggy, green patches in the yard above where a sewer line runs",
    ],
    actionTitle: "What to do",
    actionSteps: [
      "If it's one fixture with mild slow drainage, it's usually safe to wait for a scheduled visit",
      "If two or more of the main line signs above sound familiar, stop using water in the house where possible and call us",
      "Skip the chemical drain cleaner if you suspect a main line issue, it won't clear it and can damage older pipes",
    ],
    closingNote:
      "Not sure which one you're dealing with? Tell us what you're seeing on the contact form and we'll help you figure out what's actually going on before we ever show up.",
  },
  {
    slug: "drain-cleaning-charleston-il",
    serviceName: "Drain Cleaning & Clogs",
    citySlug: "charleston-il",
    cityDisplayName: "Charleston, IL",
    metaTitle: "Drain Cleaning in Charleston, IL | Clogged Drain Repair",
    metaDescription:
      "Slow drain or backed-up sink in Charleston, IL? Find out whether it's a simple clog or a bigger sewer line issue, and get it fixed fast.",
    heading: "Drain Cleaning & Clogs in Charleston, IL",
    intro:
      "A slow drain is annoying. A main sewer line clog is a much bigger problem, and it shows up more often in Charleston's older rental housing near campus. Here's how to tell which one you're dealing with before you reach for a bottle of drain cleaner.",
    diagnosticTitle: "Is it just one drain, or something bigger?",
    diagnosticIntro:
      "A single slow drain is usually a local clog, hair, soap, grease, or food buildup in one fixture. Only one sink, tub, or shower is affected while everything else drains normally.",
    signs: [
      "Only one fixture is slow or blocked",
      "Water eventually drains, just slowly",
      "No unusual smell or gurgling elsewhere in the house",
    ],
    secondaryTitle: "Possible signs of a bigger problem (main sewer line)",
    secondarySigns: [
      "More than one drain is slow or backed up at the same time",
      "You hear gurgling in one fixture when you use a different one, like the toilet gurgling when the washing machine drains",
      "Water or sewage comes up through a floor drain or the lowest drain in the house",
      "A persistent sewage smell near drains or in the yard",
      "Standing water or unusually soggy, green patches in the yard above where a sewer line runs",
    ],
    actionTitle: "What to do",
    actionSteps: [
      "If it's one fixture with mild slow drainage, it's usually safe to wait for a scheduled visit",
      "If two or more of the main line signs above sound familiar, stop using water in the house where possible and call us",
      "Skip the chemical drain cleaner if you suspect a main line issue, it won't clear it and can damage older pipes",
    ],
    closingNote:
      "Not sure which one you're dealing with? Tell us what you're seeing on the contact form and we'll help you figure out what's actually going on before we ever show up.",
  },
  {
    slug: "water-heater-repair-mattoon-il",
    serviceName: "Water Heater Repair & Installation",
    citySlug: "mattoon-il",
    cityDisplayName: "Mattoon, IL",
    metaTitle: "Water Heater Repair in Mattoon, IL | Diagnose Your Issue",
    metaDescription:
      "No hot water, strange noises, or a leaking water heater in Mattoon, IL? Find out what's actually wrong and whether it's a repair or replacement.",
    heading: "Water Heater Repair & Installation in Mattoon, IL",
    intro:
      "Your water heater usually tells you something's wrong before it fails completely. Here's what the signs actually mean.",
    diagnosticTitle: "What's your water heater telling you?",
    diagnosticIntro: "",
    signs: [
      "No hot water, or it runs out much faster than it used to: could be a tripped breaker, a pilot light that's gone out, or a failing heating element",
      "Rumbling, popping, or banging sounds: usually sediment buildup at the bottom of the tank",
      "Rusty, brown, or metallic-smelling water: often a sign of internal corrosion, more common in older units",
      "Water pooling around the base of the tank: don't ignore this one, it usually means the tank itself is failing",
      "Unit is 8 to 12+ years old with repeated issues: often more cost-effective to replace than keep repairing",
    ],
    actionTitle: "One safety note",
    actionSteps: [
      "Never cap or try to fix a leaking pressure relief valve yourself, it's a real safety risk and needs a licensed professional",
      "If you see a puddle at the base of the tank, treat it seriously even if it's small",
    ],
    closingNote:
      "Tell us what you're seeing and we'll help you figure out if this is a quick repair or worth replacing, before you spend money on the wrong fix.",
  },
  {
    slug: "water-heater-repair-charleston-il",
    serviceName: "Water Heater Repair & Installation",
    citySlug: "charleston-il",
    cityDisplayName: "Charleston, IL",
    metaTitle: "Water Heater Repair in Charleston, IL | Diagnose Your Issue",
    metaDescription:
      "No hot water, strange noises, or a leaking water heater in Charleston, IL? Find out what's actually wrong and whether it's a repair or replacement.",
    heading: "Water Heater Repair & Installation in Charleston, IL",
    intro:
      "Your water heater usually tells you something's wrong before it fails completely. Here's what the signs actually mean.",
    diagnosticTitle: "What's your water heater telling you?",
    diagnosticIntro: "",
    signs: [
      "No hot water, or it runs out much faster than it used to: could be a tripped breaker, a pilot light that's gone out, or a failing heating element",
      "Rumbling, popping, or banging sounds: usually sediment buildup at the bottom of the tank",
      "Rusty, brown, or metallic-smelling water: often a sign of internal corrosion, more common in older units",
      "Water pooling around the base of the tank: don't ignore this one, it usually means the tank itself is failing",
      "Unit is 8 to 12+ years old with repeated issues: often more cost-effective to replace than keep repairing",
    ],
    actionTitle: "One safety note",
    actionSteps: [
      "Never cap or try to fix a leaking pressure relief valve yourself, it's a real safety risk and needs a licensed professional",
      "If you see a puddle at the base of the tank, treat it seriously even if it's small",
    ],
    closingNote:
      "Tell us what you're seeing and we'll help you figure out if this is a quick repair or worth replacing, before you spend money on the wrong fix.",
  },
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((page) => page.slug === slug);
}
