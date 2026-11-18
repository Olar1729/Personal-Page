export type PublicationType =
  | "journal"
  | "conference"
  | "preprint"
  | "accepted"
  | "working";

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  type: PublicationType;
  journal?: string;
  conference?: string;
  volume?: string;
  pages?: string;
  doi?: string;
  arxiv?: string;
  pdf?: string;
  slides?: string;
  code?: string;
  abstract?: string;
  tags: string[];
  featured?: boolean;
}
