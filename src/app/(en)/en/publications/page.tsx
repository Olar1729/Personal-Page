import { PublicationsPage } from "@/components/pages/PublicationsPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("publications", "en");

export default function Page() {
  return <PublicationsPage locale="en" />;
}
