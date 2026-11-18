import type { MetadataRoute } from "next";
import { LOCALES } from "./i18n";
import { SITE_URL } from "./metadata";
import { ROUTES, type SectionId } from "./routes";
import { visibleSections } from "./sections";

/** Portada + secciones visibles, en ambos idiomas, con alternativas ES↔EN. */
export function sitemapEntries(
  counts: Partial<Record<SectionId, number>>,
): MetadataRoute.Sitemap {
  const sections: SectionId[] = ["home", ...visibleSections(counts)];
  const abs = (path: string) => `${SITE_URL}${path}`;
  return sections.flatMap((id) =>
    LOCALES.map((locale) => ({
      url: abs(ROUTES[id][locale]),
      alternates: {
        languages: { es: abs(ROUTES[id].es), en: abs(ROUTES[id].en) },
      },
    })),
  );
}
