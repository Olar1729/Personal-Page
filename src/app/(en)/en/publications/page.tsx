import type { Metadata } from "next";
import { PublicationsPage } from "@/components/pages/PublicationsPage";

export const metadata: Metadata = { title: "Publications" };

export default function Page() {
  return <PublicationsPage locale="en" />;
}
