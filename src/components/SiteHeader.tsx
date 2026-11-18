import Link from "next/link";
import { sectionCounts, profile } from "@/content";
import { t, type Locale } from "@/lib/i18n";
import { SECTION_LABELS, UI } from "@/lib/labels";
import { pathFor } from "@/lib/routes";
import { visibleSections } from "@/lib/sections";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader({ locale }: { locale: Locale }) {
  const sections = visibleSections(sectionCounts());
  const links = sections.map((id) => (
    <Link
      key={id}
      href={pathFor(id, locale)}
      className="block py-1 text-muted-foreground transition-colors hover:text-mint"
    >
      {t(SECTION_LABELS[id], locale)}
    </Link>
  ));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href={pathFor("home", locale)}
          className="font-heading text-lg font-semibold whitespace-nowrap text-foreground hover:text-mint"
        >
          {profile.name}
        </Link>

        <nav aria-label={t(UI.mainNav, locale)} className="hidden lg:block">
          <ul className="flex items-center gap-5 text-sm">
            {links.map((link) => (
              <li key={link.key}>{link}</li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch locale={locale} label={t(UI.switchLanguage, locale)} />
          <ThemeToggle label={t(UI.toggleTheme, locale)} />
          <MobileMenu label={t(UI.menu, locale)} navLabel={t(UI.mainNav, locale)}>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.key}>{link}</li>
              ))}
            </ul>
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}
