import { PublicationsPage } from "@/components/pages/PublicationsPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("publications", "es");

export default function Page() {
  return <PublicationsPage locale="es" />;
}
