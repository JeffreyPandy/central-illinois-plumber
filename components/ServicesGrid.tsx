import {
  AlertTriangle,
  Droplets,
  Flame,
  Search,
  Wrench,
  Settings,
} from "lucide-react";
import { services } from "@/lib/siteConfig";

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
            return (
              <div
                key={service.slug}
                className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow bg-white"
              >
                <Icon className="w-8 h-8 text-blue-700" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-slate-700 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
