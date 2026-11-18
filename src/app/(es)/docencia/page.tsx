import { TeachingPage } from "@/components/pages/TeachingPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("teaching", "es");

export default function Page() {
  return <TeachingPage locale="es" />;
}
