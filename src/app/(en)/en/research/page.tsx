import type { Metadata } from "next";
import { ResearchPage } from "@/components/pages/ResearchPage";

export const metadata: Metadata = { title: "Research" };

export default function Page() {
  return <ResearchPage locale="en" />;
}
