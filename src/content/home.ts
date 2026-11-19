import type { L10n } from "@/lib/i18n";
import type { HomeSection } from "./types";

// Español: texto de Cristian, literal. No reescribir.
// Inglés: reescrito (no traducido literalmente); aprobado por Cristian el 2026-11-19.

export const tagline: L10n = {
  es: "Matemático. Doy clases, investigo geometría y hago videos con osos polares.",
  en: "Mathematician. I teach, I do research in geometry, and I make videos with polar bears.",
};

/** Palabras del tagline que se resaltan en menta. */
export const taglineHighlight: L10n = { es: "osos polares", en: "polar bears" };

export const homeSections: HomeSection[] = [
  {
    id: "hola",
    heading: { es: "Hola", en: "Hi" },
    paragraphs: [
      {
        es: "Soy Cristian. Llevo años en las matemáticas y todavía no se me pasa: sigo siendo el que se queda pensando en un problema mientras hace la fila del banco.",
        en: "I'm Cristian. I've been doing math for years and it still hasn't worn off: I'm still the guy stuck thinking about a problem while waiting in line at the bank.",
      },
      {
        es: "Doy clases en la universidad, y esa parte me gusta tanto como investigar. Explicarle bien algo difícil a alguien que lo está viendo por primera vez tiene su propia gracia.",
        en: "I teach at the university, and I enjoy that part as much as research. Explaining something hard, and explaining it well, to someone seeing it for the first time has a charm of its own.",
      },
    ],
  },
  {
    id: "pensando",
    heading: { es: "En qué ando pensando", en: "What I'm thinking about" },
    paragraphs: [
      {
        es: "Trabajo en geometría. La pregunta que me tiene ocupado es fácil de enunciar y difícil de contestar: cuánto de lo que sabemos hacer con ecuaciones y álgebra se puede traducir al mundo de las formas suaves, las que uno puede deformar con las manos.",
        en: "I work in geometry. The question that keeps me busy is easy to state and hard to answer: how much of what we know how to do with equations and algebra can be carried over to the world of smooth shapes, the ones you could bend with your hands.",
      },
      {
        es: "No es un problema del milenio ni nada parecido. Es un rincón pequeño donde las piezas encajan de maneras que todavía me sorprenden, y eso me alcanza.",
        en: "It's not a Millennium Prize problem or anything like that. It's a small corner where the pieces fit together in ways that still surprise me, and that's enough for me.",
      },
      {
        es: "También ando metido en probabilidad. El azar me parece el rincón más raro de las matemáticas: todo lo que uno cree entender ahí resulta ser más sutil de lo que parecía.",
        en: "I'm also deep into probability these days. Randomness seems to me the strangest corner of mathematics: everything you think you understand there turns out to be subtler than it looked.",
      },
    ],
  },
  {
    id: "polar-mat",
    heading: { es: "Polar Mat", en: "Polar Mat" },
    paragraphs: [
      {
        es: "También hago videos. El canal se llama Polar Mat (@osopolarmat): problemas tipo olimpiada y matemáticas explicadas visualmente, animadas con manimgx.",
        en: "I also make videos. The channel is called Polar Mat (@osopolarmat): olympiad-style problems and math explained visually, animated with manimgx.",
      },
      {
        es: "No es una clase grabada. La idea es descubrir, aprender a pensar y divertirse — y sí, los osos polares son parte del plan.",
        en: "It's not a recorded lecture. The idea is to discover, learn to think, and have fun — and yes, the polar bears are part of the plan.",
      },
    ],
  },
  {
    id: "lo-demas",
    heading: { es: "Lo demás", en: "Everything else" },
    paragraphs: [
      {
        es: "Programo en Python, escribo más LaTeX del que debería, y últimamente le estoy dando a las finanzas cuantitativas por pura curiosidad.",
        en: "I code in Python, I write more LaTeX than I probably should, and lately I've been getting into quantitative finance out of pure curiosity.",
      },
    ],
  },
];

export const contactHeading: L10n = { es: "Dónde encontrarme", en: "Where to find me" };
