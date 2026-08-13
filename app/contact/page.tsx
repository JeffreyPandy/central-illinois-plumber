import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request Plumbing Service in Mattoon & Charleston, IL",
  description:
    "Fill out the form to request plumbing service in Mattoon or Charleston, IL. Fast response, no obligation quotes.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="max-w-xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-slate-900 text-center">
          Request Plumbing Service
        </h1>
        <p className="mt-3 text-slate-800 text-center">
          Fill out the form below and we'll be in touch to help with your
          plumbing issue.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
