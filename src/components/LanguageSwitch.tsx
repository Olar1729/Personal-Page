"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { alternatePath } from "@/lib/routes";

/** ES | EN — lleva a la misma sección en el otro idioma. */
export function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() ?? "/";
  const other: Locale = locale === "es" ? "en" : "es";
  return (
    <span className="flex items-center gap-1 text-sm font-medium">
      <span className="text-foreground" aria-current="true">
        {locale.toUpperCase()}
      </span>
      <span className="text-line" aria-hidden>
        |
      </span>
      {/* <a> y no <Link>: cada idioma tiene su propio root layout (recarga completa). */}
      <a
        href={alternatePath(pathname, other)}
        hrefLang={other}
        lang={other}
        title={label}
        className="text-muted-foreground transition-colors hover:text-mint"
      >
        {other.toUpperCase()}
      </a>
    </span>
  );
}
