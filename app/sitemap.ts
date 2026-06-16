import type { MetadataRoute } from "next";
import { getAllIsapreSlugs } from "@/src/data/isapres";
import { absoluteUrl } from "@/src/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const isaprePages = getAllIsapreSlugs().map((slug) => ({
    url: absoluteUrl(`/isapres/${slug}`),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: absoluteUrl(),
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    ...isaprePages,
  ];
}
