import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function CTABanner() {
  return (
    <section className="bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold">Need a Plumber Today?</h2>
        <p className="mt-3 text-blue-100">
          Reach out and we'll get your plumbing problem solved, fast.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="rounded-lg bg-white text-blue-900 font-semibold px-8 py-3.5 hover:bg-blue-50 transition-colors"
          >
            Request Service Now
          </Link>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="rounded-lg border-2 border-white text-white font-semibold px-8 py-3.5 hover:bg-white hover:text-blue-900 transition-colors"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
