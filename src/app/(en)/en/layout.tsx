import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: { default: "Cristian Olarte", template: "%s — Cristian Olarte" },
  description:
    "Mathematician. I teach, do research in C^∞-geometry and supergeometry, and make math videos on Polar Mat.",
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
