import type { Metadata } from "next";
import { TeachingPage } from "@/components/pages/TeachingPage";

export const metadata: Metadata = { title: "Docencia" };

export default function Page() {
  return <TeachingPage locale="es" />;
}
