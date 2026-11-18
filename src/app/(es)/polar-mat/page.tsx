import { PolarMatPage } from "@/components/pages/PolarMatPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("polarMat", "es");

export default function Page() {
  return <PolarMatPage locale="es" />;
}
