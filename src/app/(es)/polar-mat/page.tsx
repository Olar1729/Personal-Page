import type { Metadata } from "next";
import { PolarMatPage } from "@/components/pages/PolarMatPage";

export const metadata: Metadata = { title: "Polar Mat" };

export default function Page() {
  return <PolarMatPage locale="es" />;
}
