import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { SITE_URL } from "@/lib/metadata";

const description =
  "Matemático. Doy clases, investigo geometría C∞ y supergeometría, y hago videos de matemáticas en Polar Mat.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Cristian Olarte", template: "%s — Cristian Olarte" },
  description,
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Cristian Olarte",
    description,
    images: [{ url: "/brand/polar-mat-logo.webp", width: 2000, height: 1125 }],
  },
};

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="es">{children}</SiteShell>;
}
