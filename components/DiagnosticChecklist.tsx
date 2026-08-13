import { CheckCircle2 } from "lucide-react";

interface DiagnosticChecklistProps {
  title: string;
  intro?: string;
  items: string[];
  tone?: "default" | "warning";
}

export default function DiagnosticChecklist({
  title,
  intro,
  items,
  tone = "default",
}: DiagnosticChecklistProps) {
  const iconColor = tone === "warning" ? "text-amber-600" : "text-blue-700";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      {intro && <p className="mt-2 text-slate-700">{intro}</p>}
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${iconColor}`} />
            <span className="text-slate-800">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
