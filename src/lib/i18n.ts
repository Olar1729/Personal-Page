export type Locale = "es" | "en";

export const LOCALES: Locale[] = ["es", "en"];

/** Texto visible en ambos idiomas. */
export type L10n = { es: string; en: string };

export function t(text: L10n, locale: Locale): string {
  return text[locale];
}
