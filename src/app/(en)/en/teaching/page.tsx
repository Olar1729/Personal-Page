import type { Metadata } from "next";
import { TeachingPage } from "@/components/pages/TeachingPage";

export const metadata: Metadata = { title: "Teaching" };

export default function Page() {
  return <TeachingPage locale="en" />;
}
