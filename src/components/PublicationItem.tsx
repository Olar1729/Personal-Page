import type { Publication } from "@/content";
import { formatVenue, publicationLinks } from "@/lib/citation";
import { t, type Locale } from "@/lib/i18n";
import { MathText } from "./MathText";

export function PublicationItem({ p, locale }: { p: Publication; locale: Locale }) {
  const links = publicationLinks(p);
  return (
    <li className="border-l-2 border-line pl-5">
      <p className="text-sm text-muted-foreground">{p.authors.join(", ")}</p>
      <p className="mt-1 text-lg font-medium">
        <MathText text={p.title} />
      </p>
      <p className="mt-1 text-sm text-ice italic">{formatVenue(p, locale)}</p>
      <p className="mt-2 text-muted-foreground">
        <MathText text={t(p.summary, locale)} />
      </p>
      {links.length > 0 && (
        <p className="mt-2 flex gap-4 text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mint underline decoration-mint/40 hover:decoration-mint"
            >
              {link.label}
            </a>
          ))}
        </p>
      )}
    </li>
  );
}
