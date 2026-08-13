import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-900">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden sm:inline-block text-blue-900 font-semibold"
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2.5 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
