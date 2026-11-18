import type { Metadata } from "next";
import { CvPage } from "@/components/pages/CvPage";

export const metadata: Metadata = { title: "CV" };

export default function Page() {
  return <CvPage locale="es" />;
}
