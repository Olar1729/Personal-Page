import type { Metadata } from "next";
import { TalksPage } from "@/components/pages/TalksPage";

export const metadata: Metadata = { title: "Charlas" };

export default function Page() {
  return <TalksPage locale="es" />;
}
