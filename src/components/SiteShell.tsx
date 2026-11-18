import "@/app/globals.css";
import { t, type Locale } from "@/lib/i18n";
import { UI } from "@/lib/labels";
import { body, display } from "./fonts";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { ThemeProvider } from "./ThemeProvider";

/** html/body compartido por los dos root layouts (es, en). */
export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <a href="#contenido" className="skip-link">
            {t(UI.skip, locale)}
          </a>
          <SiteHeader locale={locale} />
          <main id="contenido" className="mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
