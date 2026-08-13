import Image from "next/image";
import { cities } from "@/lib/siteConfig";

export default function ServiceArea() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div className="relative h-72 rounded-xl overflow-hidden order-2 md:order-1">
        <Image
          src="/images/bathroom-sink.jpg"
          alt="Bathroom sink and faucet, a common plumbing service call in Mattoon IL"
          fill
          className="object-cover"
        />
      </div>
      <div className="order-1 md:order-2">
        <h2 className="text-3xl font-bold text-slate-900">Service Area</h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Proudly connecting Mattoon, IL homeowners and businesses with
          trusted local plumbing service. Coverage includes all Mattoon zip
          codes and surrounding Coles County areas.
        </p>
        <ul className="mt-6 space-y-1 text-slate-700">
          {cities.map((city) => (
            <li key={city.slug}>&#8226; {city.displayName}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
