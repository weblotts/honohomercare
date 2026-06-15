import type { MetadataRoute } from "next";
import { towns } from "@/lib/towns";

const BASE_URL = "https://honorhome.care";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                  lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/team`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/privacy`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/terms`,         lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/accessibility`, lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];

  const areaPages: MetadataRoute.Sitemap = towns.map((t) => ({
    url:             `${BASE_URL}/areas/${t.slug}`,
    lastModified:    new Date(),
    changeFrequency: "monthly",
    priority:        0.7,
  }));

  return [...staticPages, ...areaPages];
}
