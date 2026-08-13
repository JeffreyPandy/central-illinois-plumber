import Link from "next/link";
import {
  AlertTriangle,
  Droplets,
  Flame,
  Search,
  Wrench,
  Settings,
} from "lucide-react";
import { services } from "@/lib/siteConfig";
import { serviceLinks } from "@/lib/serviceLinks";

const iconMap = {
  AlertTriangle,
  Droplets,
  Flame,
  Search,
  Wrench,
  Settings,
};

export default function ServicesGrid() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-slate-900">
          Services We Cover
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const links = serviceLinks[service.slug];
            return (
              <div
                key={service.slug}
                className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow bg-white flex flex-col"
              >
                <Icon className="w-8 h-8 text-blue-700" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-slate-700 text-sm leading-relaxed flex-grow">
                  {service.shortDescription}
                </p>
                {links && (
                  <div className="mt-4 flex gap-4">
                    <Link
                      href={links.mattoon}
                      className="text-sm font-semibold text-blue-700 hover:text-blue-800"
                    >
                      Mattoon &rarr;
                    </Link>
                    <Link
                      href={links.charleston}
                      className="text-sm font-semibold text-blue-700 hover:text-blue-800"
                    >
                      Charleston &rarr;
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
