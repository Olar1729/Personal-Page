import Link from "next/link";
import { contactHeading, homeSections, profile, tagline, taglineHighlight } from "@/content";
import { t, type Locale } from "@/lib/i18n";
import { pathFor } from "@/lib/routes";
import { PolarGrid } from "../PolarGrid";

const MORE_ABOUT_CHANNEL = { es: "Más sobre Polar Mat →", en: "More about Polar Mat →" };

function Tagline({ locale }: { locale: Locale }) {
  const text = t(tagline, locale);
  const mark = t(taglineHighlight, locale);
  const [before, after] = text.split(mark);
  if (after === undefined) return <>{text}</>;
  return (
    <>
      {before}
      <span className="text-mint">{mark}</span>
      {after}
    </>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <PolarGrid className="absolute top-1/2 left-1/2 -z-10 w-[640px] max-w-none -translate-x-1/4 -translate-y-1/2 opacity-60 sm:-translate-x-0" />
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-6 max-w-xl text-xl text-ice sm:text-2xl">
          <Tagline locale={locale} />
        </p>
      </section>

      <div className="prose-site max-w-2xl space-y-14">
        {homeSections.map((section) => (
          <section key={section.id} aria-labelledby={`h-${section.id}`}>
            <h2 id={`h-${section.id}`} className="mb-4 text-2xl font-semibold">
              {t(section.heading, locale)}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p key={i}>{t(p, locale)}</p>
            ))}
            {section.id === "polar-mat" && (
              <p>
                <Link href={pathFor("polarMat", locale)}>{t(MORE_ABOUT_CHANNEL, locale)}</Link>
              </p>
            )}
          </section>
        ))}

        <section aria-labelledby="h-contacto">
          <h2 id="h-contacto" className="mb-4 text-2xl font-semibold">
            {t(contactHeading, locale)}
          </h2>
          <ul className="space-y-2">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.github} rel="me">
                github.com/Olar1729
              </a>
            </li>
            <li>
              YouTube:{" "}
              <a href={profile.youtube} rel="me">
                {profile.youtubeHandle}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
