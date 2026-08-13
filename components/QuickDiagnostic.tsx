import Link from "next/link";

const categories = [
  {
    title: "Is it an emergency?",
    prompt: "Water spraying, gas smell, or sewage backing up into multiple drains?",
    links: [
      { label: "Mattoon", href: "/emergency-plumbing-mattoon-il" },
      { label: "Charleston", href: "/emergency-plumbing-charleston-il" },
    ],
  },
  {
    title: "Drain acting up?",
    prompt: "Slow sink, gurgling toilet, or water backing up somewhere it shouldn't?",
    links: [
      { label: "Mattoon", href: "/drain-cleaning-mattoon-il" },
      { label: "Charleston", href: "/drain-cleaning-charleston-il" },
    ],
  },
  {
    title: "No hot water?",
    prompt: "Rumbling tank, rusty water, or a puddle at the base of your water heater?",
    links: [
      { label: "Mattoon", href: "/water-heater-repair-mattoon-il" },
      { label: "Charleston", href: "/water-heater-repair-charleston-il" },
    ],
  },
];

export default function QuickDiagnostic() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-slate-900">
          Not Sure What&apos;s Wrong?
        </h2>
        <p className="mt-3 text-center text-slate-700 max-w-2xl mx-auto">
          Here&apos;s a quick way to figure out what you&apos;re dealing with, and
          what to do about it.
        </p>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">{cat.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{cat.prompt}</p>
              <div className="mt-4 flex gap-3">
                {cat.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    {link.label} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
