import { describe, expect, it } from "vitest";
import { pageMetadata } from "./metadata";

describe("pageMetadata", () => {
  it("da título, canonical y alternativas de idioma de una sección", () => {
    const m = pageMetadata("research", "es");
    expect(m.title).toBe("Investigación");
    expect(m.alternates?.canonical).toBe("/investigacion");
    expect(m.alternates?.languages).toEqual({ es: "/investigacion", en: "/en/research" });
  });
  it("la portada no fija título propio (usa el del layout)", () => {
    const m = pageMetadata("home", "en");
    expect(m.title).toBeUndefined();
    expect(m.alternates?.canonical).toBe("/en");
    expect(m.alternates?.languages).toEqual({ es: "/", en: "/en" });
  });
});
