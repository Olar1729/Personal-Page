import type { L10n } from "./i18n";
import type { SectionId } from "./routes";

/** Nombre de cada sección en el menú y en los títulos de página. */
export const SECTION_LABELS: Record<SectionId, L10n> = {
  home: { es: "Inicio", en: "Home" },
  research: { es: "Investigación", en: "Research" },
  publications: { es: "Publicaciones", en: "Publications" },
  teaching: { es: "Docencia", en: "Teaching" },
  talks: { es: "Charlas", en: "Talks" },
  polarMat: { es: "Polar Mat", en: "Polar Mat" },
  cv: { es: "CV", en: "CV" },
};

export const UI = {
  menu: { es: "Menú", en: "Menu" },
  skip: { es: "Saltar al contenido", en: "Skip to content" },
  switchLanguage: { es: "Read in English", en: "Leer en español" },
  toggleTheme: { es: "Cambiar tema claro/oscuro", en: "Toggle light/dark theme" },
  mainNav: { es: "Navegación principal", en: "Main navigation" },
} satisfies Record<string, L10n>;
