import type { Locale } from "./i18n";
import type { Publication } from "@/content/types";

const LABELS = {
  accepted: { es: "Aceptado en", en: "Accepted in" },
  acceptedNoJournal: { es: "Aceptado", en: "Accepted" },
  preprint: { es: "Preprint", en: "Preprint" },
  inPreparation: { es: "En preparación", en: "In preparation" },
} as const;

/** Línea de "dónde salió", sin restos de campos faltantes. */
export function formatVenue(p: Publication, locale: Locale): string {
  switch (p.status) {
    case "published": {
      let s = [p.journal, p.volume].filter(Boolean).join(" ");
      if (p.year) s += ` (${p.year})`;
      if (p.articleNumber) s += `, ${p.articleNumber}`;
      return s.trim();
    }
    case "accepted":
      return p.journal
        ? `${LABELS.accepted[locale]} ${p.journal}`
        : LABELS.acceptedNoJournal[locale];
    case "preprint":
      return LABELS.preprint[locale];
    case "inPreparation":
      return LABELS.inPreparation[locale];
  }
}

export type PublicationLink = { label: "DOI" | "arXiv"; href: string };

export function publicationLinks(p: Publication): PublicationLink[] {
  const links: PublicationLink[] = [];
  if (p.doi) links.push({ label: "DOI", href: `https://doi.org/${p.doi}` });
  if (p.arxiv) links.push({ label: "arXiv", href: `https://arxiv.org/abs/${p.arxiv}` });
  return links;
}
