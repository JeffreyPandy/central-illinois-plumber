import Image from "next/image";

const points = [
  {
    title: "Local to Coles County",
    description:
      "Real familiarity with Mattoon and Charleston homes and the plumbing issues common to this area.",
  },
  {
    title: "Fast response times",
    description: "Plumbing problems don't wait, and neither do we.",
  },
  {
    title: "Straightforward pricing",
    description: "Know what to expect before work begins.",
  },
  {
    title: "No obligation quotes",
    description: "Get your quote and decide with no pressure.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Why Homeowners Choose Us
          </h2>
          <ul className="mt-8 space-y-6">
            {points.map((point) => (
              <li key={point.title}>
                <h3 className="font-semibold text-slate-900">
                  {point.title}
                </h3>
                <p className="text-slate-600 mt-1">{point.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-80 rounded-xl overflow-hidden">
          <Image
            src="/images/plumber-bathroom.jpg"
            alt="Plumber performing bathroom plumbing repair in a Coles County IL home"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
