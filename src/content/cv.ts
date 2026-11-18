import type { L10n } from "@/lib/i18n";

/** PDF del CV; null mientras no exista (el botón de descarga no se muestra). */
export const cvPdfUrl: string | null = null;

export const cvProfile: L10n = {
  es: "Matemático con varios años de experiencia docente universitaria en cálculo, álgebra lineal y geometría, e investigación activa en geometría C^∞. Mi trabajo gira alrededor de los anillos C^∞ y sus esquemas: con coautores generalicé el teorema de Batchelor al contexto de C^∞-superesquemas, y actualmente estudio los operadores diferenciales de orden k sobre C^∞-esquemas y espacios de Batchelor. En docencia me estoy especializando en probabilidad y estadística, procesos estocásticos y cálculo estocástico para escuelas de ingeniería, ciencia de datos y física.",
  en: "Mathematician with several years of university teaching experience in calculus, linear algebra and geometry, and active research in C^∞-geometry. My work centers on C^∞-rings and their schemes: with coauthors I generalized Batchelor's theorem to C^∞-superschemes, and I currently study differential operators of order k on C^∞-schemes and Batchelor spaces. In teaching, I am specializing in probability and statistics, stochastic processes and stochastic calculus for engineering, data science and physics programs.",
};

export const skills: L10n[] = [
  { es: "Python, con énfasis en análisis de datos", en: "Python, with a focus on data analysis" },
  { es: "LaTeX (redacción matemática)", en: "LaTeX (mathematical writing)" },
  { es: "manimgx — animación matemática", en: "manimgx — mathematical animation" },
  { es: "Git y GitHub", en: "Git and GitHub" },
  {
    es: "Probabilidad, estadística y finanzas cuantitativas, en profundización",
    en: "Probability, statistics and quantitative finance (ongoing study)",
  },
];

export const languages: L10n[] = [
  { es: "Español — nativo", en: "Spanish — native" },
  { es: "Inglés — lectura y escritura académica", en: "English — academic reading and writing" },
];
