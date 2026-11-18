import { describe, expect, it } from "vitest";
import { visibleSections } from "./sections";

describe("visibleSections", () => {
  it("oculta una sección con conteo 0", () => {
    expect(visibleSections({ talks: 0 })).toEqual([
      "research", "publications", "teaching", "polarMat", "cv",
    ]);
  });
  it("muestra charlas cuando hay alguna", () => {
    expect(visibleSections({ talks: 2 })).toContain("talks");
  });
  it("nunca incluye la portada en el menú", () => {
    expect(visibleSections({})).not.toContain("home");
  });
});
