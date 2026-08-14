"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { siteConfig, services } from "@/lib/siteConfig";
import { serviceLinks } from "@/lib/serviceLinks";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-900">
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-slate-800 font-medium hover:text-blue-700">
              Services
              <ChevronDown className="w-4 h-4" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2 w-72">
                <div className="rounded-xl border border-slate-200 bg-white shadow-lg p-3">
                  {services.map((service) => {
                    const links = serviceLinks[service.slug];
                    if (!links) return null;
                    return (
                      <div key={service.slug} className="px-3 py-2">
                        <p className="text-sm font-semibold text-slate-900">
                          {service.name}
                        </p>
                        <div className="mt-1 flex gap-4">
                          <Link
                            href={links.mattoon}
                            className="text-sm text-blue-700 hover:text-blue-800"
                          >
                            Mattoon
                          </Link>
                          <Link
                            href={links.charleston}
                            className="text-sm text-blue-700 hover:text-blue-800"
                          >
                            Charleston
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden sm:inline-block text-blue-900 font-semibold"
          >
            {siteConfig.phone}
          </a>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="sm:hidden text-blue-900"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone className="w-5 h-5" />
          </a>
          <Link
            href="/contact"
            className="rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2.5 transition-colors"
          >
            Get a Free Quote
          </Link>
          <button
            className="md:hidden text-slate-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4">
          {services.map((service) => {
            const links = serviceLinks[service.slug];
            if (!links) return null;
            return (
              <div key={service.slug} className="py-2">
                <p className="text-sm font-semibold text-slate-900">
                  {service.name}
                </p>
                <div className="mt-1 flex gap-4">
                  <Link
                    href={links.mattoon}
                    className="text-sm text-blue-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    Mattoon
                  </Link>
                  <Link
                    href={links.charleston}
                    className="text-sm text-blue-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    Charleston
                  </Link>
                </div>
              </div>
            );
          })}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="block mt-3 text-blue-900 font-semibold"
          >
            {siteConfig.phone}
          </a>
        </div>
      )}
    </header>
  );
}
