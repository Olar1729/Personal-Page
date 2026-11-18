import Link from "next/link";
import {
  coursesTaught,
  cvPdfUrl,
  cvProfile,
  languages,
  publications,
  researchLines,
  skills,
} from "@/content";
import { formatVenue } from "@/lib/citation";
import { t, type Locale } from "@/lib/i18n";
import { SECTION_LABELS } from "@/lib/labels";
import { pathFor } from "@/lib/routes";
import { MathText } from "../MathText";
import { PageHeader, SectionTitle } from "../PageHeader";

const L = {
  download: { es: "Descargar CV (PDF)", en: "Download CV (PDF)" },
  profile: { es: "Perfil", en: "Profile" },
  research: { es: "Líneas de investigación", en: "Research lines" },
  publications: { es: "Publicaciones", en: "Publications" },
  allPublications: { es: "Ver detalle y enlaces →", en: "Details and links →" },
  teaching: { es: "Cursos dictados", en: "Courses taught" },
  skills: { es: "Competencias técnicas", en: "Technical skills" },
  languages: { es: "Idiomas", en: "Languages" },
};

export function CvPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageHeader title={t(SECTION_LABELS.cv, locale)} />
      {cvPdfUrl && (
        <a
          href={cvPdfUrl}
          className="mb-8 inline-block rounded-full bg-mint px-6 py-3 font-medium text-background hover:opacity-90"
        >
          {t(L.download, locale)}
        </a>
      )}
      <div className="prose-site max-w-3xl">
        <SectionTitle>{t(L.profile, locale)}</SectionTitle>
        <p>
          <MathText text={t(cvProfile, locale)} />
        </p>

        <SectionTitle>{t(L.research, locale)}</SectionTitle>
        <ul className="list-disc space-y-1 pl-6">
          {researchLines.map((line) => (
            <li key={line.id}>
              <MathText text={t(line.title, locale)} />
            </li>
          ))}
        </ul>

        <SectionTitle>{t(L.publications, locale)}</SectionTitle>
        <ol className="list-decimal space-y-2 pl-6">
          {publications.map((p) => (
            <li key={p.id}>
              {p.authors.join(", ")}. <em><MathText text={p.title} /></em>. {formatVenue(p, locale)}.
            </li>
          ))}
        </ol>
        <p className="mt-3">
          <Link href={pathFor("publications", locale)}>{t(L.allPublications, locale)}</Link>
        </p>

        <SectionTitle>{t(L.teaching, locale)}</SectionTitle>
        <p>{coursesTaught.map((c) => t(c.title, locale)).join(" · ")}</p>

        <SectionTitle>{t(L.skills, locale)}</SectionTitle>
        <ul className="list-disc space-y-1 pl-6">
          {skills.map((s, i) => (
            <li key={i}>{t(s, locale)}</li>
          ))}
        </ul>

        <SectionTitle>{t(L.languages, locale)}</SectionTitle>
        <ul className="list-disc space-y-1 pl-6">
          {languages.map((l, i) => (
            <li key={i}>{t(l, locale)}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
