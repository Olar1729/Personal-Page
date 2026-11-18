import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: { default: "Cristian Olarte", template: "%s — Cristian Olarte" },
  description:
    "Matemático. Doy clases, investigo geometría C^∞ y supergeometría, y hago videos de matemáticas en Polar Mat.",
};

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="es">{children}</SiteShell>;
}
