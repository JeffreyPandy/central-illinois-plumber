import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import ServiceArea from "@/components/ServiceArea";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Plumber in Mattoon & Charleston, IL | Fast, Local, Trusted Service",
  description:
    "Need a plumber in Mattoon or Charleston, IL? Get connected with fast, reliable plumbing repair, emergency service, drain cleaning, and water heater help.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <ServicesGrid />
      <WhyUs />
      <ServiceArea />
      <FAQSection />
      <CTABanner />
    </>
  );
}
