import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import ServiceArea from "@/components/ServiceArea";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Plumber in Mattoon, IL | Fast, Local, Trusted Service",
  description:
    "Need a plumber in Mattoon, IL? Get connected with a trusted local plumber for emergency repairs, drain cleaning, water heaters, and more. Call now.",
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
