import { TalksPage } from "@/components/pages/TalksPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("talks", "es");

export default function Page() {
  return <TalksPage locale="es" />;
}
