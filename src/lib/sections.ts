import type { SectionId } from "./routes";

const MENU_ORDER: SectionId[] = [
  "research",
  "publications",
  "teaching",
  "talks",
  "polarMat",
  "cv",
];

/** Secciones del menú en orden; una sección con conteo 0 se oculta. */
export function visibleSections(
  counts: Partial<Record<SectionId, number>>,
): SectionId[] {
  return MENU_ORDER.filter((id) => counts[id] !== 0);
}
