import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServicePage } from "@/lib/servicePages";

const data = getServicePage("drain-cleaning-mattoon-il")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/drain-cleaning-mattoon-il" },
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
