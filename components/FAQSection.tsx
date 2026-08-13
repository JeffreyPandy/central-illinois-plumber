import { faqs } from "@/lib/siteConfig";

export default function FAQSection() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-slate-200 pb-6">
              <h3 className="font-semibold text-slate-900">
                {faq.question}
              </h3>
              <p className="mt-2 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
