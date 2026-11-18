import type { Metadata } from "next";
import { TalksPage } from "@/components/pages/TalksPage";

export const metadata: Metadata = { title: "Talks" };

export default function Page() {
  return <TalksPage locale="en" />;
}
