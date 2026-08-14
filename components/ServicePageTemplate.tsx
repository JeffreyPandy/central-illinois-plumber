import Link from "next/link";
import DiagnosticChecklist from "@/components/DiagnosticChecklist";
import { ServicePageData } from "@/lib/servicePages";
import { siteConfig } from "@/lib/siteConfig";

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-10 sm:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          {data.heading}
        </h1>
        <p className="mt-4 text-lg text-slate-700 leading-relaxed">
          {data.intro}
        </p>

        <div className="mt-10">
          <DiagnosticChecklist
            title={data.diagnosticTitle}
            intro={data.diagnosticIntro}
            items={data.signs}
          />
        </div>

        {data.secondaryTitle && data.secondarySigns && (
          <div className="mt-6">
            <DiagnosticChecklist
              title={data.secondaryTitle}
              items={data.secondarySigns}
              tone="warning"
            />
          </div>
        )}

        <div className="mt-6">
          <DiagnosticChecklist
            title={data.actionTitle}
            items={data.actionSteps}
          />
        </div>

        <p className="mt-8 text-slate-700 leading-relaxed">
          {data.closingNote}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3.5 text-center transition-colors"
          >
            Get a Free Quote
          </Link>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="rounded-lg border-2 border-blue-700 text-blue-700 font-semibold px-8 py-3.5 text-center hover:bg-blue-50 transition-colors"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
