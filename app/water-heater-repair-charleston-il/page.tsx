import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServicePage } from "@/lib/servicePages";

const data = getServicePage("water-heater-repair-charleston-il")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/water-heater-repair-charleston-il" },
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
