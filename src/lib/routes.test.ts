import { describe, expect, it } from "vitest";
import { alternatePath, pathFor } from "./routes";

describe("alternatePath", () => {
  it("lleva una sección al mismo sección en el otro idioma", () => {
    expect(alternatePath("/publicaciones", "en")).toBe("/en/publications");
    expect(alternatePath("/en/teaching", "es")).toBe("/docencia");
  });
  it("mapea las portadas", () => {
    expect(alternatePath("/", "en")).toBe("/en");
    expect(alternatePath("/en", "es")).toBe("/");
  });
  it("ignora la barra final", () => {
    expect(alternatePath("/investigacion/", "en")).toBe("/en/research");
  });
  it("cae en la portada del otro idioma si la ruta no existe", () => {
    expect(alternatePath("/no-existe", "en")).toBe("/en");
  });
});

describe("pathFor", () => {
  it("devuelve la ruta exacta por idioma", () => {
    expect(pathFor("polarMat", "es")).toBe("/polar-mat");
    expect(pathFor("talks", "en")).toBe("/en/talks");
  });
});
