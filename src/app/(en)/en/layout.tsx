import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { SITE_URL } from "@/lib/metadata";

const description =
  "Mathematician. I teach, do research in C∞-geometry and supergeometry, and make math videos on Polar Mat.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Cristian Olarte", template: "%s — Cristian Olarte" },
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Cristian Olarte",
    description,
    images: [{ url: "/brand/polar-mat-logo.webp", width: 2000, height: 1125 }],
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
