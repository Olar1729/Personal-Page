import { coursesCanTeach, coursesTaught, teachingIntro, type Course } from "@/content";
import { t, type Locale } from "@/lib/i18n";
import { SECTION_LABELS } from "@/lib/labels";
import { PageHeader, SectionTitle } from "../PageHeader";

const L = {
  taught: { es: "Cursos dictados", en: "Courses taught" },
  canTeach: { es: "Áreas que puedo asumir", en: "Areas I can teach" },
};

function CourseList({ courses, locale }: { courses: Course[]; locale: Locale }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {courses.map((c) => (
        <li key={c.id} className="rounded-lg border border-line bg-surface px-4 py-3">
          {t(c.title, locale)}
        </li>
      ))}
    </ul>
  );
}

export function TeachingPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageHeader title={t(SECTION_LABELS.teaching, locale)} intro={t(teachingIntro, locale)} />
      <div className="max-w-3xl">
        {coursesTaught.length > 0 && (
          <>
            <SectionTitle>{t(L.taught, locale)}</SectionTitle>
            <CourseList courses={coursesTaught} locale={locale} />
          </>
        )}
        {coursesCanTeach.length > 0 && (
          <>
            <SectionTitle>{t(L.canTeach, locale)}</SectionTitle>
            <CourseList courses={coursesCanTeach} locale={locale} />
          </>
        )}
      </div>
    </>
  );
}
