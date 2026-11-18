import { ResearchPage } from "@/components/pages/ResearchPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("research", "en");

export default function Page() {
  return <ResearchPage locale="en" />;
}
