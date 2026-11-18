import type { Metadata } from "next";
import { t, type Locale } from "./i18n";
import { SECTION_LABELS } from "./labels";
import { ROUTES, type SectionId } from "./routes";

export const SITE_URL = "https://olar1729.vercel.app";

/** Título, canonical y enlaces ES↔EN de una página. */
export function pageMetadata(section: SectionId, locale: Locale): Metadata {
  return {
    ...(section === "home" ? {} : { title: t(SECTION_LABELS[section], locale) }),
    alternates: {
      canonical: ROUTES[section][locale],
      languages: { es: ROUTES[section].es, en: ROUTES[section].en },
    },
  };
}
