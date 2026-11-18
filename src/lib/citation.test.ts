import { describe, expect, it } from "vitest";
import { formatVenue, publicationLinks } from "./citation";
import type { Publication } from "@/content/types";
import { publications } from "@/content";

const base = {
  title: "T",
  authors: ["C. D. Olarte"],
  summary: { es: "r", en: "s" },
};

const published: Publication = {
  ...base,
  id: "basic",
  status: "published",
  journal: "Journal of Geometry and Physics",
  volume: "190",
  articleNumber: "104852",
  year: 2023,
  doi: "10.1016/j.geomphys.2023.104852",
};

const accepted: Publication = {
  ...base,
  id: "structure",
  status: "accepted",
  journal: "Journal of Geometry and Physics",
  arxiv: "2605.07169",
};

describe("formatVenue", () => {
  it("formatea un artículo publicado completo", () => {
    expect(formatVenue(published, "es")).toBe(
      "Journal of Geometry and Physics 190 (2023), 104852",
    );
  });
  it("formatea un aceptado en cada idioma", () => {
    expect(formatVenue(accepted, "es")).toBe("Aceptado en Journal of Geometry and Physics");
    expect(formatVenue(accepted, "en")).toBe("Accepted in Journal of Geometry and Physics");
  });
  it("formatea preprint y en preparación", () => {
    expect(formatVenue({ ...base, id: "p", status: "preprint", arxiv: "2508.09900" }, "en")).toBe("Preprint");
    expect(formatVenue({ ...base, id: "w", status: "inPreparation" }, "es")).toBe("En preparación");
  });
  it("omite el paréntesis si falta el año", () => {
    expect(formatVenue({ ...published, year: undefined }, "es")).toBe(
      "Journal of Geometry and Physics 190, 104852",
    );
  });
  it("nunca deja restos de campos faltantes en las publicaciones reales", () => {
    for (const p of publications) {
      for (const locale of ["es", "en"] as const) {
        expect(formatVenue(p, locale)).not.toMatch(/undefined|,\s*$|\(\s*\)|^\s*$/);
      }
    }
  });
});

describe("publicationLinks", () => {
  it("enlaza arXiv cuando no hay DOI", () => {
    expect(publicationLinks(accepted)).toEqual([
      { label: "arXiv", href: "https://arxiv.org/abs/2605.07169" },
    ]);
  });
  it("enlaza el DOI de la revista", () => {
    expect(publicationLinks(published)).toEqual([
      { label: "DOI", href: "https://doi.org/10.1016/j.geomphys.2023.104852" },
    ]);
  });
});
