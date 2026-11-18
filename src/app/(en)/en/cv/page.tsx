import { CvPage } from "@/components/pages/CvPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("cv", "en");

export default function Page() {
  return <CvPage locale="en" />;
}
