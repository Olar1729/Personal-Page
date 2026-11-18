import { nextInterests, researchIntro, researchLines, researchProgram } from "@/content";
import { t, type Locale } from "@/lib/i18n";
import { SECTION_LABELS } from "@/lib/labels";
import { MathText } from "../MathText";
import { PageHeader, SectionTitle } from "../PageHeader";

const L = {
  program: { es: "Programa", en: "Program" },
  lines: { es: "Líneas actuales", en: "Current lines" },
  next: { es: "Intereses próximos", en: "Next interests" },
};

export function ResearchPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageHeader title={t(SECTION_LABELS.research, locale)} intro={t(researchIntro, locale)} />
      <div className="prose-site max-w-2xl">
        <SectionTitle>{t(L.program, locale)}</SectionTitle>
        <p>
          <MathText text={t(researchProgram, locale)} />
        </p>

        <SectionTitle>{t(L.lines, locale)}</SectionTitle>
        <ul className="space-y-6">
          {researchLines.map((line) => (
            <li key={line.id}>
              <h3 className="text-lg font-semibold text-mint">
                <MathText text={t(line.title, locale)} />
              </h3>
              <p className="mt-1">
                <MathText text={t(line.description, locale)} />
              </p>
            </li>
          ))}
        </ul>

        <SectionTitle>{t(L.next, locale)}</SectionTitle>
        <p>{t(nextInterests, locale)}</p>
      </div>
    </>
  );
}
