import Image from "next/image";
import { featuredVideos, polarMatDescription, profile } from "@/content";
import { t, type Locale } from "@/lib/i18n";
import { PageHeader, SectionTitle } from "../PageHeader";

const L = {
  watch: { es: "Ver el canal en YouTube", en: "Watch the channel on YouTube" },
  videos: { es: "Videos destacados", en: "Featured videos" },
  logoAlt: { es: "Logo de Polar Mat", en: "Polar Mat logo" },
};

/** Única página (además del favicon) donde aparece el oso. */
export function PolarMatPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageHeader title="Polar Mat" />
      <Image
        src="/brand/polar-mat-logo.webp"
        alt={t(L.logoAlt, locale)}
        width={2000}
        height={1125}
        className="w-full max-w-3xl rounded-xl border border-line"
        priority
      />
      <div className="prose-site mt-10 max-w-2xl">
        {polarMatDescription.map((p, i) => (
          <p key={i}>{t(p, locale)}</p>
        ))}
      </div>
      <a
        href={profile.youtube}
        target="_blank"
        rel="noopener noreferrer me"
        className="mt-8 inline-block rounded-full bg-mint px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
      >
        {t(L.watch, locale)} · {profile.youtubeHandle}
      </a>

      {featuredVideos.length > 0 && (
        <section className="max-w-3xl">
          <SectionTitle>{t(L.videos, locale)}</SectionTitle>
          <ul className="space-y-3">
            {featuredVideos.map((v) => (
              <li key={v.id}>
                <a href={v.url} target="_blank" rel="noopener noreferrer" className="text-mint underline">
                  {t(v.title, locale)}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
