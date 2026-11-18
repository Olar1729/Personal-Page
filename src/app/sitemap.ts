import type { MetadataRoute } from "next";
import { sectionCounts } from "@/content";
import { sitemapEntries } from "@/lib/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries(sectionCounts());
}
