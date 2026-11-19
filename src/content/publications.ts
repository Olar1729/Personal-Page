import type { Publication } from "./types";

// Verificadas en arXiv y en la revista el 2026-11-17.
export const publications: Publication[] = [
  {
    id: "basic-constructions",
    title: "Basic constructions over C^∞-schemes",
    authors: ["C. D. Olarte", "P. Rizzo"],
    status: "published",
    journal: "Journal of Geometry and Physics",
    volume: "190",
    articleNumber: "104852",
    year: 2023,
    doi: "10.1016/j.geomphys.2023.104852",
    summary: {
      es: "Construcciones clásicas, como el pegado de esquemas y los productos fibrados, en el contexto C^∞, y condiciones para que un funtor sobre C^∞-esquemas sea representable.",
      en: "Classical constructions, such as gluing schemes and fiber products, in the C^∞ setting, and conditions for a functor on C^∞-schemes to be representable.",
    },
  },
  {
    id: "structure-superschemes",
    title: "The Structure of C^∞-Superschemes",
    authors: ["C. D. Olarte", "P. Rizzo", "A. Torres-Gomez"],
    status: "accepted",
    journal: "Journal of Geometry and Physics",
    arxiv: "2605.07169",
    summary: {
      es: "Generalización del teorema de Batchelor: todo espacio de Batchelor es globalmente escindido, y los splittings globales se describen mediante campos vectoriales de Euler.",
      en: "A generalization of Batchelor's theorem: every Batchelor space is globally split, and global splittings are described through Euler vector fields.",
    },
  },
  {
    id: "superrings",
    title: "C^∞-superrings and C^∞-superschemes",
    authors: ["C. D. Olarte", "P. Rizzo", "A. Torres-Gomez"],
    status: "preprint",
    arxiv: "2508.09900",
    summary: {
      es: "Teoría de C^∞-superanillos y C^∞-superesquemas; equivalencia entre C^∞-superesquemas afines fair y C^∞-superanillos fair.",
      en: "A theory of C^∞-superrings and C^∞-superschemes; an equivalence between fair affine C^∞-superschemes and fair C^∞-superrings.",
    },
  },
  {
    id: "differential-operators",
    // Título en inglés aprobado por Cristian el 2026-11-19 (provisional hasta el preprint).
    title: "Differential operators of order k on C^∞-schemes and Batchelor spaces",
    authors: ["C. D. Olarte"],
    status: "inPreparation",
    summary: {
      es: "Introduce la noción de ideal ∞-jet-determined y el radical plano Fl.",
      en: "Introduces the notion of ∞-jet-determined ideals and the flat radical Fl.",
    },
  },
];
