import { describe, expect, it } from "vitest";
import * as content from "./index";

function findL10n(value: unknown, path: string, out: { path: string; es: unknown; en: unknown }[]) {
  if (Array.isArray(value)) {
    value.forEach((v, i) => findL10n(v, `${path}[${i}]`, out));
  } else if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;
    const keys = Object.keys(obj).sort().join(",");
    if (keys === "en,es") {
      out.push({ path, es: obj.es, en: obj.en });
      return;
    }
    for (const [k, v] of Object.entries(obj)) findL10n(v, `${path}.${k}`, out);
  }
}

describe("contenido bilingüe", () => {
  it("todo texto tiene versión en español e inglés no vacías", () => {
    const found: { path: string; es: unknown; en: unknown }[] = [];
    findL10n(content, "content", found);
    expect(found.length).toBeGreaterThan(20);
    for (const f of found) {
      expect(typeof f.es === "string" && f.es.trim() !== "", `${f.path}.es`).toBe(true);
      expect(typeof f.en === "string" && f.en.trim() !== "", `${f.path}.en`).toBe(true);
    }
  });

  it("tiene exactamente las 4 publicaciones del spec en orden", () => {
    expect(content.publications.map((p) => p.status)).toEqual([
      "published", "accepted", "preprint", "inPreparation",
    ]);
  });

  it("docencia lista solo cursos dictados, sin Geometría Diferencial", () => {
    expect(content.coursesTaught.map((c) => c.title.es)).toEqual([
      "Cálculo Diferencial",
      "Cálculo Integral",
      "Cálculo Vectorial",
      "Álgebra Lineal",
      "Geometría Euclidiana",
      "Probabilidad y Estadística",
      "Procesos Estocásticos y Cálculo Estocástico",
      "Ecuaciones Diferenciales Ordinarias",
    ]);
    expect(JSON.stringify(content)).not.toMatch(/Geometría Diferencial|Differential Geometry/);
    expect(content).not.toHaveProperty("coursesCanTeach");
  });

  it("oculta charlas mientras no haya ninguna", () => {
    expect(content.sectionCounts().talks).toBe(0);
  });
});
