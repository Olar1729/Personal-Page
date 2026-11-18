import { PolarMatPage } from "@/components/pages/PolarMatPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("polarMat", "en");

export default function Page() {
  return <PolarMatPage locale="en" />;
}
