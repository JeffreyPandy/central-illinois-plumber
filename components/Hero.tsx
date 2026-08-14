import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <section className="relative bg-blue-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-plumbing.jpg"
          alt="Plumbing tools and pipe wrenches used for residential plumbing repair"
          fill
          priority
          className="object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24 md:py-32 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Trusted Plumbers Serving Mattoon & Charleston, Illinois
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          Fast response. Local expertise. No runaround. Reach out and we'll
          get your plumbing problem solved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="rounded-lg bg-white text-blue-900 font-semibold px-8 py-3.5 hover:bg-blue-50 transition-colors text-center"
          >
            Get a Free Quote
          </Link>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="rounded-lg border-2 border-white text-white font-semibold px-8 py-3.5 hover:bg-white hover:text-blue-900 transition-colors text-center"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
