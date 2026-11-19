import type { L10n } from "@/lib/i18n";
import type { Course } from "./types";

// Intro en su voz; aprobada por Cristian el 2026-11-19.
export const teachingIntro: L10n = {
  es: "Llevo varios años enseñando matemáticas en la universidad, sobre todo a estudiantes de primeros semestres de ingeniería y ciencias. Me interesa que una idea difícil se vuelva obvia.",
  en: "I've spent several years teaching university mathematics, mostly to first-year engineering and science students. What I care about is making a hard idea feel obvious.",
};

export const coursesTaught: Course[] = [
  { id: "calc-1", title: { es: "Cálculo Diferencial", en: "Differential Calculus" } },
  { id: "calc-2", title: { es: "Cálculo Integral", en: "Integral Calculus" } },
  { id: "calc-3", title: { es: "Cálculo Vectorial", en: "Vector Calculus" } },
  { id: "linear-algebra", title: { es: "Álgebra Lineal", en: "Linear Algebra" } },
  { id: "euclidean", title: { es: "Geometría Euclidiana", en: "Euclidean Geometry" } },
];

export const coursesCanTeach: Course[] = [
  {
    id: "probability",
    title: {
      es: "Probabilidad y Estadística para ingeniería, ciencia de datos, física y economía",
      en: "Probability and Statistics for engineering, data science, physics and economics",
    },
  },
  {
    id: "stochastic",
    title: {
      es: "Procesos Estocásticos y Cálculo Estocástico",
      en: "Stochastic Processes and Stochastic Calculus",
    },
  },
  { id: "odes", title: { es: "Ecuaciones Diferenciales Ordinarias", en: "Ordinary Differential Equations" } },
];
