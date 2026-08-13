import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServicePage } from "@/lib/servicePages";

const data = getServicePage("leak-detection-mattoon-il")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/leak-detection-mattoon-il" },
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
