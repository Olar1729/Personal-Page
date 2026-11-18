import type { L10n } from "@/lib/i18n";

export type PublicationStatus = "published" | "accepted" | "preprint" | "inPreparation";

export interface Publication {
  id: string;
  /** Título tal como fue publicado (normalmente en inglés). */
  title: string;
  authors: string[];
  status: PublicationStatus;
  journal?: string;
  volume?: string;
  articleNumber?: string;
  year?: number;
  doi?: string;
  arxiv?: string;
  summary: L10n;
}

export interface ResearchLine {
  id: string;
  title: L10n;
  description: L10n;
}

/** Curso. Institución y periodo se omiten mientras no se conozcan. */
export interface Course {
  id: string;
  title: L10n;
}

export interface Talk {
  id: string;
  title: string;
  event: string;
  /** Fecha ISO, p. ej. "2026-03-14". */
  date: string;
}

export interface Video {
  id: string;
  title: L10n;
  url: string;
}

export interface HomeSection {
  id: string;
  heading: L10n;
  paragraphs: L10n[];
}
