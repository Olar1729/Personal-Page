import type { SectionId } from "@/lib/routes";
import { publications } from "./publications";
import { talks } from "./talks";

export { profile } from "./profile";
export { tagline, taglineHighlight, homeSections, contactHeading } from "./home";
export { researchIntro, researchProgram, researchLines, nextInterests } from "./research";
export { publications } from "./publications";
export { teachingIntro, coursesTaught, coursesCanTeach } from "./teaching";
export { talks } from "./talks";
export { polarMatDescription, featuredVideos } from "./polarMat";
export { cvPdfUrl, cvProfile, skills, languages } from "./cv";
export type * from "./types";

/** Conteos que deciden qué secciones aparecen en el menú. */
export function sectionCounts(): Partial<Record<SectionId, number>> {
  return { talks: talks.length, publications: publications.length };
}
