import { TeachingPage } from "@/components/pages/TeachingPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("teaching", "en");

export default function Page() {
  return <TeachingPage locale="en" />;
}
