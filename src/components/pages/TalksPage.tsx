import { notFound } from "next/navigation";
import { talks } from "@/content";
import { t, type Locale } from "@/lib/i18n";
import { SECTION_LABELS } from "@/lib/labels";
import { PageHeader } from "../PageHeader";

export function TalksPage({ locale }: { locale: Locale }) {
  if (talks.length === 0) notFound();
  const sorted = [...talks].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHeader title={t(SECTION_LABELS.talks, locale)} />
      <ul className="max-w-3xl space-y-6">
        {sorted.map((talk) => (
          <li key={talk.id} className="border-l-2 border-line pl-5">
            <p className="text-lg font-medium">{talk.title}</p>
            <p className="text-sm text-muted-foreground">
              {talk.event} ·{" "}
              {new Date(`${talk.date}T00:00:00`).toLocaleDateString(locale, {
                year: "numeric",
                month: "long",
              })}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
