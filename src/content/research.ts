import type { L10n } from "@/lib/i18n";
import type { ResearchLine } from "./types";

// BORRADOR: revisar con Cristian — intro en su voz.
export const researchIntro: L10n = {
  es: "Me interesa saber hasta dónde llegan las herramientas del álgebra cuando las llevamos al mundo de lo suave. Esta es la versión técnica de esa pregunta.",
  en: "I want to know how far the tools of algebra reach once we carry them into the smooth world. This is the technical version of that question.",
};

export const researchProgram: L10n = {
  es: "Mi programa de investigación es la geometría de los anillos C^∞: trasladar al mundo suave las herramientas de la geometría algebraica, y usarlas para entender espacios que la variedad diferenciable clásica no alcanza.",
  en: "My research program is the geometry of C^∞-rings: bringing the tools of algebraic geometry into the smooth world, and using them to understand spaces that classical smooth manifolds cannot reach.",
};

export const researchLines: ResearchLine[] = [
  {
    id: "schemes",
    title: { es: "Anillos y esquemas C^∞", en: "C^∞-rings and C^∞-schemes" },
    description: {
      es: "Estructura local, ideales y radicales; en el trabajo en curso introduzco los ideales ∞-jet-determined y el radical plano Fl.",
      en: "Local structure, ideals and radicals; in ongoing work I introduce ∞-jet-determined ideals and the flat radical Fl.",
    },
  },
  {
    id: "supergeometry",
    title: { es: "Supergeometría C^∞", en: "C^∞-supergeometry" },
    description: {
      es: "Estructura de los C^∞-superesquemas: generalización del teorema de Batchelor y campos vectoriales de Euler.",
      en: "Structure of C^∞-superschemes: a generalization of Batchelor's theorem and Euler vector fields.",
    },
  },
  {
    id: "operators",
    title: { es: "Operadores diferenciales", en: "Differential operators" },
    description: {
      es: "Operadores diferenciales de orden k sobre C^∞-esquemas y sobre espacios de Batchelor.",
      en: "Differential operators of order k on C^∞-schemes and on Batchelor spaces.",
    },
  },
];

export const nextInterests: L10n = {
  es: "Geometría diferencial sintética y derivada; probabilidad y procesos estocásticos; aplicaciones cuantitativas en finanzas.",
  en: "Synthetic and derived differential geometry; probability and stochastic processes; quantitative applications in finance.",
};
