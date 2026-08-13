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
  {
    slug: "leak-detection-mattoon-il",
    serviceName: "Leak Detection & Repair",
    citySlug: "mattoon-il",
    cityDisplayName: "Mattoon, IL",
    metaTitle: "Leak Detection in Mattoon, IL | Find Hidden Water Leaks",
    metaDescription:
      "Unexplained high water bill or musty smell in your Mattoon, IL home? Learn the signs of a hidden leak and how to confirm one before it causes damage.",
    heading: "Leak Detection & Repair in Mattoon, IL",
    intro:
      "The most expensive leaks are the ones you can't see. A pipe behind a wall or under the slab can run for weeks before it shows up as visible damage. Here's what to watch for.",
    diagnosticTitle: "Signs of a hidden leak",
    diagnosticIntro: "",
    signs: [
      "Your water bill jumped with no real change in how much water you're using",
      "You hear running water somewhere in the house when everything is off",
      "A warm or unexpectedly cold spot on the floor, often a sign of a leaking line under a slab",
      "A musty smell in a room that should be dry, with no obvious source",
      "Water stains or discoloration on a wall or ceiling",
      "Your water meter's flow indicator is still moving when nothing is using water",
    ],
    actionTitle: "The 20-minute meter test",
    actionSteps: [
      "Turn off every faucet, appliance, and fixture in the house, nothing running, nothing flushing",
      "Write down your water meter reading, or note whether the small flow indicator is spinning",
      "Wait 20 minutes without using any water",
      "Check the meter again, if the reading changed or the indicator is still moving, water is escaping somewhere",
    ],
    closingNote:
      "Hidden and slab leaks generally aren't something you can pinpoint yourself. If the meter test comes back positive, reach out and we'll help track down exactly where it's coming from.",
  },
  {
    slug: "leak-detection-charleston-il",
    serviceName: "Leak Detection & Repair",
    citySlug: "charleston-il",
    cityDisplayName: "Charleston, IL",
    metaTitle: "Leak Detection in Charleston, IL | Find Hidden Water Leaks",
    metaDescription:
      "Unexplained high water bill or musty smell in your Charleston, IL home? Learn the signs of a hidden leak and how to confirm one before it causes damage.",
    heading: "Leak Detection & Repair in Charleston, IL",
    intro:
      "The most expensive leaks are the ones you can't see. A pipe behind a wall or under the slab can run for weeks before it shows up as visible damage. Here's what to watch for.",
    diagnosticTitle: "Signs of a hidden leak",
    diagnosticIntro: "",
    signs: [
      "Your water bill jumped with no real change in how much water you're using",
      "You hear running water somewhere in the house when everything is off",
      "A warm or unexpectedly cold spot on the floor, often a sign of a leaking line under a slab",
      "A musty smell in a room that should be dry, with no obvious source",
      "Water stains or discoloration on a wall or ceiling",
      "Your water meter's flow indicator is still moving when nothing is using water",
    ],
    actionTitle: "The 20-minute meter test",
    actionSteps: [
      "Turn off every faucet, appliance, and fixture in the house, nothing running, nothing flushing",
      "Write down your water meter reading, or note whether the small flow indicator is spinning",
      "Wait 20 minutes without using any water",
      "Check the meter again, if the reading changed or the indicator is still moving, water is escaping somewhere",
    ],
    closingNote:
      "Hidden and slab leaks generally aren't something you can pinpoint yourself. If the meter test comes back positive, reach out and we'll help track down exactly where it's coming from.",
  },
  {
    slug: "sewer-line-mattoon-il",
    serviceName: "Sewer Line Services",
    citySlug: "mattoon-il",
    cityDisplayName: "Mattoon, IL",
    metaTitle: "Sewer Line Repair in Mattoon, IL | Backups & Root Intrusion",
    metaDescription:
      "Recurring clogs or sewage backups in your Mattoon, IL home? Learn the warning signs of a main sewer line problem and what actually needs to happen next.",
    heading: "Sewer Line Services in Mattoon, IL",
    intro:
      "A main sewer line problem doesn't always show up as an obvious flood. Often it starts small and keeps coming back, especially in older homes with mature trees nearby.",
    diagnosticTitle: "Signs your main sewer line needs attention",
    diagnosticIntro: "",
    signs: [
      "Multiple drains backing up around the same time, not just one fixture",
      "Sewage smell near drains or out in the yard",
      "Soggy, unusually green patches of grass or small dips in the yard along where the line runs",
      "Gurgling in one fixture when you use a completely different one",
      "Toilets across the whole house are sluggish, not just one",
      "The same clog keeps coming back within days or weeks of being cleared, which often points to tree root intrusion in older pipes, common throughout Coles County",
    ],
    actionTitle: "What actually needs to happen",
    actionSteps: [
      "Repeated clogs in the same spot usually mean the underlying cause hasn't been found yet, not that the clog is stubborn",
      "A camera inspection is the only reliable way to see what's actually going on inside an underground line",
      "Avoid DIY snaking past a certain point, it can push the real problem further down the line without fixing it",
    ],
    closingNote:
      "If clogs keep coming back or you're seeing more than one of these signs, it's worth having the line properly inspected instead of clearing the same symptom over and over.",
  },
  {
    slug: "sewer-line-charleston-il",
    serviceName: "Sewer Line Services",
    citySlug: "charleston-il",
    cityDisplayName: "Charleston, IL",
    metaTitle: "Sewer Line Repair in Charleston, IL | Backups & Root Intrusion",
    metaDescription:
      "Recurring clogs or sewage backups in your Charleston, IL home? Learn the warning signs of a main sewer line problem and what actually needs to happen next.",
    heading: "Sewer Line Services in Charleston, IL",
    intro:
      "A main sewer line problem doesn't always show up as an obvious flood. Often it starts small and keeps coming back, especially in Charleston's older homes near mature tree-lined streets.",
    diagnosticTitle: "Signs your main sewer line needs attention",
    diagnosticIntro: "",
    signs: [
      "Multiple drains backing up around the same time, not just one fixture",
      "Sewage smell near drains or out in the yard",
      "Soggy, unusually green patches of grass or small dips in the yard along where the line runs",
      "Gurgling in one fixture when you use a completely different one",
      "Toilets across the whole house are sluggish, not just one",
      "The same clog keeps coming back within days or weeks of being cleared, which often points to tree root intrusion in older pipes, common throughout Coles County",
    ],
    actionTitle: "What actually needs to happen",
    actionSteps: [
      "Repeated clogs in the same spot usually mean the underlying cause hasn't been found yet, not that the clog is stubborn",
      "A camera inspection is the only reliable way to see what's actually going on inside an underground line",
      "Avoid DIY snaking past a certain point, it can push the real problem further down the line without fixing it",
    ],
    closingNote:
      "If clogs keep coming back or you're seeing more than one of these signs, it's worth having the line properly inspected instead of clearing the same symptom over and over.",
  },
  {
    slug: "general-repair-mattoon-il",
    serviceName: "General Plumbing Repair",
    citySlug: "mattoon-il",
    cityDisplayName: "Mattoon, IL",
    metaTitle: "General Plumbing Repair in Mattoon, IL | Faucets, Toilets & More",
    metaDescription:
      "Running toilet, dripping faucet, or low water pressure in your Mattoon, IL home? Small plumbing problems add up fast, here's what's likely going on.",
    heading: "General Plumbing Repair in Mattoon, IL",
    intro:
      "Not everything is an emergency or a big job. Most of what we fix day to day is the everyday stuff that quietly wastes water and money the longer it's ignored.",
    diagnosticTitle: "Common issues and what they usually mean",
    diagnosticIntro: "",
    signs: [
      "Toilet running constantly or flushing on its own: usually a worn flapper valve, and it can waste far more water than people expect",
      "Faucet still dripping after it's fully shut off: typically a worn washer or cartridge inside the fixture",
      "Low water pressure at one specific faucet or shower: often just a clogged aerator or showerhead, an easy fix",
      "Low water pressure throughout the entire house: usually points to a bigger issue with the main supply line, not a single fixture",
      "Toilet that rocks or leaks around the base: the wax ring seal underneath has likely failed",
    ],
    actionTitle: "Worth fixing sooner than later",
    actionSteps: [
      "A running toilet can waste hundreds of gallons a day without you noticing",
      "A dripping faucet adds up on your water bill more than it seems like it should",
      "None of these are emergencies, but they don't get better on their own either",
    ],
    closingNote:
      "Whatever it is, tell us what's going on and we'll get it taken care of properly, no upsell, no runaround.",
  },
  {
    slug: "general-repair-charleston-il",
    serviceName: "General Plumbing Repair",
    citySlug: "charleston-il",
    cityDisplayName: "Charleston, IL",
    metaTitle: "General Plumbing Repair in Charleston, IL | Faucets, Toilets & More",
    metaDescription:
      "Running toilet, dripping faucet, or low water pressure in your Charleston, IL home? Small plumbing problems add up fast, here's what's likely going on.",
    heading: "General Plumbing Repair in Charleston, IL",
    intro:
      "Not everything is an emergency or a big job. Most of what we fix day to day is the everyday stuff that quietly wastes water and money the longer it's ignored.",
    diagnosticTitle: "Common issues and what they usually mean",
    diagnosticIntro: "",
    signs: [
      "Toilet running constantly or flushing on its own: usually a worn flapper valve, and it can waste far more water than people expect",
      "Faucet still dripping after it's fully shut off: typically a worn washer or cartridge inside the fixture",
      "Low water pressure at one specific faucet or shower: often just a clogged aerator or showerhead, an easy fix",
      "Low water pressure throughout the entire house: usually points to a bigger issue with the main supply line, not a single fixture",
      "Toilet that rocks or leaks around the base: the wax ring seal underneath has likely failed",
    ],
    actionTitle: "Worth fixing sooner than later",
    actionSteps: [
      "A running toilet can waste hundreds of gallons a day without you noticing",
      "A dripping faucet adds up on your water bill more than it seems like it should",
      "None of these are emergencies, but they don't get better on their own either",
    ],
    closingNote:
      "Whatever it is, tell us what's going on and we'll get it taken care of properly, no upsell, no runaround.",
  },
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((page) => page.slug === slug);
}
