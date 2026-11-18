import { publications, type PublicationStatus } from "@/content";
import { t, type Locale } from "@/lib/i18n";
import { SECTION_LABELS } from "@/lib/labels";
import { PageHeader, SectionTitle } from "../PageHeader";
import { PublicationItem } from "../PublicationItem";

const GROUPS: { status: PublicationStatus; label: { es: string; en: string } }[] = [
  { status: "published", label: { es: "Artículos en revista", en: "Journal articles" } },
  { status: "accepted", label: { es: "Aceptados", en: "Accepted" } },
  { status: "preprint", label: { es: "Preprints", en: "Preprints" } },
  { status: "inPreparation", label: { es: "En preparación", en: "In preparation" } },
];

export function PublicationsPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageHeader title={t(SECTION_LABELS.publications, locale)} />
      <div className="max-w-3xl">
        {GROUPS.map(({ status, label }) => {
          const items = publications.filter((p) => p.status === status);
          if (items.length === 0) return null;
          return (
            <section key={status} className="mt-14 first:mt-0">
              <SectionTitle>{t(label, locale)}</SectionTitle>
              <ul className="space-y-8">
                {items.map((p) => (
                  <PublicationItem key={p.id} p={p} locale={locale} />
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
