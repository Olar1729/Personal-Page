import { TalksPage } from "@/components/pages/TalksPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("talks", "en");

export default function Page() {
  return <TalksPage locale="en" />;
}
