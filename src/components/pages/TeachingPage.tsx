import { coursesTaught, teachingIntro } from "@/content";
import { t, type Locale } from "@/lib/i18n";
import { SECTION_LABELS } from "@/lib/labels";
import { PageHeader, SectionTitle } from "../PageHeader";

const L = {
  taught: { es: "Cursos que he dictado", en: "Courses I have taught" },
};

export function TeachingPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageHeader title={t(SECTION_LABELS.teaching, locale)} intro={t(teachingIntro, locale)} />
      {coursesTaught.length > 0 && (
        <div className="max-w-3xl">
          <SectionTitle>{t(L.taught, locale)}</SectionTitle>
          <ul className="grid gap-3 sm:grid-cols-2">
            {coursesTaught.map((c) => (
              <li key={c.id} className="rounded-lg border border-line bg-surface px-4 py-3">
                {t(c.title, locale)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
