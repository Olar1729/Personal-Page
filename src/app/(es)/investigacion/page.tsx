import { ResearchPage } from "@/components/pages/ResearchPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("research", "es");

export default function Page() {
  return <ResearchPage locale="es" />;
}
