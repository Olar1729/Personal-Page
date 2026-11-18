import { CvPage } from "@/components/pages/CvPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("cv", "es");

export default function Page() {
  return <CvPage locale="es" />;
}
