import type { Locale } from "./i18n";

export type SectionId =
  | "home"
  | "research"
  | "publications"
  | "teaching"
  | "talks"
  | "polarMat"
  | "cv";

export const ROUTES: Record<SectionId, Record<Locale, string>> = {
  home: { es: "/", en: "/en" },
  research: { es: "/investigacion", en: "/en/research" },
  publications: { es: "/publicaciones", en: "/en/publications" },
  teaching: { es: "/docencia", en: "/en/teaching" },
  talks: { es: "/charlas", en: "/en/talks" },
  polarMat: { es: "/polar-mat", en: "/en/polar-mat" },
  cv: { es: "/cv", en: "/en/cv" },
};

export function pathFor(section: SectionId, locale: Locale): string {
  return ROUTES[section][locale];
}

/** Ruta equivalente en el otro idioma; si la ruta no se reconoce, la portada. */
export function alternatePath(pathname: string, target: Locale): string {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  for (const paths of Object.values(ROUTES)) {
    if (paths.es === clean || paths.en === clean) return paths[target];
  }
  return ROUTES.home[target];
}
