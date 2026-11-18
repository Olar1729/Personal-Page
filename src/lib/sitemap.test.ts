import { describe, expect, it } from "vitest";
import { sitemapEntries } from "./sitemap";

describe("sitemapEntries", () => {
  it("lista portada y secciones visibles en ambos idiomas, con URL absoluta", () => {
    const urls = sitemapEntries({ talks: 0 }).map((e) => e.url);
    expect(urls).toContain("https://olar1729.vercel.app/");
    expect(urls).toContain("https://olar1729.vercel.app/en");
    expect(urls).toContain("https://olar1729.vercel.app/publicaciones");
    expect(urls).toContain("https://olar1729.vercel.app/en/publications");
    expect(urls).toHaveLength(12);
  });
  it("excluye las secciones vacías", () => {
    const urls = sitemapEntries({ talks: 0 }).map((e) => e.url);
    expect(urls).not.toContain("https://olar1729.vercel.app/charlas");
    expect(urls).not.toContain("https://olar1729.vercel.app/en/talks");
  });
  it("enlaza cada página con su versión en el otro idioma", () => {
    const research = sitemapEntries({}).find((e) => e.url.endsWith("/investigacion"));
    expect(research?.alternates?.languages).toEqual({
      es: "https://olar1729.vercel.app/investigacion",
      en: "https://olar1729.vercel.app/en/research",
    });
  });
});
