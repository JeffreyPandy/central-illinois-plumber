import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request Plumbing Service in Mattoon, IL",
  description:
    "Fill out the form to get connected with a trusted local plumber in Mattoon, IL. Fast response, no obligation quotes.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-slate-900 text-center">
        Request Plumbing Service in Mattoon, IL
      </h1>
      <p className="mt-3 text-slate-600 text-center">
        Fill out the form below and you&apos;ll be connected with a local
        plumber to help with your issue.
      </p>
      <div className="mt-10">
        <ContactForm />
      </div>
    </section>
  );
}
