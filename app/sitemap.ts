import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { servicePages } from "@/lib/servicePages";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePageEntries = servicePages.map((page) => ({
    url: `${siteConfig.url}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...servicePageEntries,
  ];
}
