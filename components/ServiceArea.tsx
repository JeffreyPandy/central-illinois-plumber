import Image from "next/image";
import { cities } from "@/lib/siteConfig";

export default function ServiceArea() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-72 rounded-xl overflow-hidden order-2 md:order-1">
          <Image
            src="/images/bathroom-sink.jpg"
            alt="Bathroom sink and faucet, a common plumbing service call in Coles County IL"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold text-slate-900">Service Area</h2>
          <p className="mt-4 text-slate-800 leading-relaxed">
            We proudly serve homeowners and businesses in Mattoon and
            Charleston, IL, including all surrounding Coles County areas.
          </p>
          <ul className="mt-6 space-y-1 text-slate-800 font-medium">
            {cities.map((city) => (
              <li key={city.slug}>&#8226; {city.displayName}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
