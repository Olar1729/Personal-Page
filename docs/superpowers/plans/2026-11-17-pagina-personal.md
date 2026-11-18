# Página personal de Cristian Olarte — plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convertir la plantilla de Next.js en el sitio bilingüe (ES/EN) de marca personal de Cristian: portada con su voz amigable y secciones formales (Investigación, Publicaciones, Docencia, Polar Mat, CV), con la identidad visual de Polar Mat.

**Architecture:** Dos *root layouts* en grupos de rutas: `src/app/(es)/` sirve el español sin prefijo y `src/app/(en)/en/` el inglés bajo `/en`, con slugs propios por idioma. Cada `page.tsx` es una línea que renderiza un componente de página compartido con `locale`. Todo el contenido vive en `src/content/*.ts` como datos tipados con textos `{ es, en }`; el menú, las rutas visibles y el selector de idioma se derivan de un único mapa de rutas y de los datos. Todo se prerenderiza como estático.

**Tech Stack:** Next.js 16.2 (App Router), React 19, TypeScript, Tailwind 4, `next-themes`, `next/font/google`, Vitest (nuevo, solo para lógica en `src/lib`).

**Spec:** `docs/superpowers/specs/2026-11-17-pagina-personal-design.md`

## Global Constraints

- Leer `node_modules/next/dist/docs/` antes de escribir código de rutas, layouts, metadata, fuentes o 404 (AGENTS.md: "This is NOT the Next.js you know").
- Rutas exactas — ES: `/`, `/investigacion`, `/publicaciones`, `/docencia`, `/polar-mat`, `/cv`, `/charlas`; EN: `/en`, `/en/research`, `/en/publications`, `/en/teaching`, `/en/polar-mat`, `/en/cv`, `/en/talks`.
- El texto de la portada en español se copia **literal** del anexo del spec; no se reescribe.
- No inventar datos. Campo desconocido = ausente; nunca se renderizan "undefined", "TBD", "próximamente" ni placeholders.
- Una sección sin datos no aparece en el menú y su ruta responde 404.
- El oso (`public/brand/oso.png`) aparece **solo** como favicon y en la página Polar Mat.
- Paleta (spec): fondo `#0F1828`, texto `#F2F7FD`, secundario `#C9DCEF`, acento único `#3DD6A8`, líneas `#22324D`. Oscuro por defecto; modo claro con menta oscurecido hasta contraste AA (≥ 4.5:1 para texto).
- Fuente redondeada (Fredoka) solo en títulos; cuerpo en una sans legible (Inter).
- Textos que escribe el implementador (intros de secciones formales, toda la portada en inglés) llevan el comentario `// BORRADOR: revisar con Cristian` en el archivo de contenido; nada de eso se ve en el sitio.
- Canal: `https://www.youtube.com/@osopolarmat`. Correo: `cristian.olarte@udea.edu.co`. GitHub: `https://github.com/Olar1729`.
- `npm run build` y `npm run lint` deben pasar al final de cada tarea. Trabajo en `main`; **no hacer `git push`** (cada push publica en Vercel; Cristian revisa antes).

## Review Focus

1. **Cambiar de idioma en una sección** (p. ej. en `/publicaciones` pulsar EN) debe llevar a `/en/publications`, no a la portada; también con barra final o ruta desconocida (cae en la portada del otro idioma). → test en Task 1.
2. **Publicaciones con campos faltantes** (aceptado sin volumen/DOI, en preparación sin enlace) no deben mostrar "undefined", comas sueltas ni enlaces vacíos. → test en Task 2.
3. **Texto en inglés vacío u olvidado**: todo `L10n` del contenido debe tener `es` y `en` no vacíos. → test en Task 2.
4. **Sección vacía** (Charlas hoy) no aparece en el menú de ningún idioma y `/charlas` y `/en/talks` dan 404. → test en Task 1 + verificación en Task 6.
5. **Celular (375 px)**: el menú con 6 entradas + ES|EN + tema no debe desbordar ni generar scroll horizontal. → verificación manual en Task 3 y Task 6.

---

### Task 1: Lógica de idioma, rutas y secciones visibles (con Vitest)

**Files:**
- Modify: `package.json` (devDependency `vitest`; script `"test": "vitest run"`)
- Create: `vitest.config.ts` (alias `@` → `src`, entorno `node`)
- Create: `src/lib/i18n.ts`, `src/lib/routes.ts`, `src/lib/sections.ts`
- Test: `src/lib/routes.test.ts`, `src/lib/sections.test.ts`

**Interfaces:**
- Produces:
  - `type Locale = "es" | "en"`; `const LOCALES: Locale[]`; `type L10n = { es: string; en: string }`; `t(text: L10n, locale: Locale): string` (en `i18n.ts`)
  - `type SectionId = "home" | "research" | "publications" | "teaching" | "talks" | "polarMat" | "cv"`; `const ROUTES: Record<SectionId, Record<Locale, string>>` con las rutas exactas de Global Constraints; `pathFor(section: SectionId, locale: Locale): string`; `alternatePath(pathname: string, target: Locale): string` (en `routes.ts`)
  - `visibleSections(counts: Partial<Record<SectionId, number>>): SectionId[]` — devuelve en orden del menú `research, publications, teaching, talks, polarMat, cv`, excluyendo cada sección cuyo conteo sea `0` (las ausentes en `counts` cuentan como visibles); `home` nunca va en el menú (en `sections.ts`)

- [ ] **Step 1: Instalar Vitest y escribir los tests que fallan**

```ts
// routes.test.ts
expect(alternatePath("/publicaciones", "en")).toBe("/en/publications");
expect(alternatePath("/en/teaching", "es")).toBe("/docencia");
expect(alternatePath("/", "en")).toBe("/en");
expect(alternatePath("/en", "es")).toBe("/");
expect(alternatePath("/investigacion/", "en")).toBe("/en/research");
expect(alternatePath("/no-existe", "en")).toBe("/en");
expect(pathFor("polarMat", "es")).toBe("/polar-mat");
// sections.test.ts
expect(visibleSections({ talks: 0 })).toEqual(["research","publications","teaching","polarMat","cv"]);
expect(visibleSections({ talks: 2 })).toContain("talks");
expect(visibleSections({})).not.toContain("home");
```

- [ ] **Step 2: `npm test` → FAIL (módulos no existen)**
- [ ] **Step 3: Implementar `i18n.ts`, `routes.ts`, `sections.ts`** — `alternatePath` normaliza la barra final y busca en `ROUTES` la sección cuyo path coincide.
- [ ] **Step 4: `npm test` → PASS**
- [ ] **Step 5: Commit** `feat: lógica de idiomas, rutas y secciones visibles`

---

### Task 2: Modelo de contenido y datos bilingües

**Files:**
- Delete: `src/types/` (andamiaje sin usos; se reemplaza)
- Create: `src/content/types.ts`, `src/content/profile.ts`, `src/content/research.ts`, `src/content/publications.ts`, `src/content/teaching.ts`, `src/content/talks.ts`, `src/content/polarMat.ts`, `src/content/home.ts`, `src/content/index.ts`
- Create: `src/lib/citation.ts`
- Test: `src/lib/citation.test.ts`, `src/content/content.test.ts`

**Interfaces:**
- Consumes: `L10n`, `Locale`, `t` (Task 1)
- Produces (en `src/content/types.ts`):
  - `Publication { id; title: string; authors: string[]; status: "published" | "accepted" | "preprint" | "inPreparation"; journal?: string; volume?: string; articleNumber?: string; year?: number; doi?: string; arxiv?: string; summary: L10n }`
  - `ResearchLine { id; title: L10n; description: L10n }`
  - `Course { id; title: L10n }` (sin institución/año: desconocidos)
  - `Talk { id; title: string; event: string; date: string }`
  - `Video { id; title: L10n; url: string }`
  - `HomeSection { heading: L10n; paragraphs: L10n[] }`
- Produces (en `src/content/index.ts`): `profile`, `home: { tagline: L10n; sections: HomeSection[] }`, `research: { intro: L10n; program: L10n; lines: ResearchLine[]; nextInterests: L10n }`, `publications: Publication[]`, `teaching: { intro: L10n; taught: Course[]; canTeach: Course[] }`, `talks: Talk[]`, `polarMat: { description: L10n[]; channelUrl: string; videos: Video[] }`, `cv: { pdfUrl: string | null }`, y `sectionCounts(): Partial<Record<SectionId, number>>` (`talks: talks.length`, `publications: publications.length`).
- Produces (en `src/lib/citation.ts`): `formatVenue(p: Publication, locale: Locale): string` y `publicationLinks(p: Publication): { label: "DOI" | "arXiv"; href: string }[]`

- [ ] **Step 1: Tests que fallan**

```ts
// citation.test.ts
const basic = { status: "published", journal: "Journal of Geometry and Physics", volume: "190", articleNumber: "104852", year: 2023, doi: "10.1016/j.geomphys.2023.104852", arxiv: undefined, ... };
expect(formatVenue(basic, "es")).toBe("Journal of Geometry and Physics 190 (2023), 104852");
const accepted = { status: "accepted", journal: "Journal of Geometry and Physics", arxiv: "2605.07169", ... };
expect(formatVenue(accepted, "es")).toBe("Aceptado en Journal of Geometry and Physics");
expect(formatVenue(accepted, "en")).toBe("Accepted in Journal of Geometry and Physics");
expect(formatVenue({ status: "preprint", arxiv: "2508.09900", ... }, "en")).toBe("Preprint");
expect(formatVenue({ status: "inPreparation", ... }, "es")).toBe("En preparación");
expect(publicationLinks(accepted)).toEqual([{ label: "arXiv", href: "https://arxiv.org/abs/2605.07169" }]);
expect(publicationLinks(basic)).toEqual([{ label: "DOI", href: "https://doi.org/10.1016/j.geomphys.2023.104852" }]);
for (const p of publications) expect(formatVenue(p, "es")).not.toMatch(/undefined|,\s*$|\(\s*\)/);
// content.test.ts — recorre recursivamente todo el contenido exportado
// y para cada objeto con forma { es, en } exige ambos strings no vacíos.
```

- [ ] **Step 2: `npm test` → FAIL**
- [ ] **Step 3: Escribir los datos.** Fuente: anexo del spec. Exactamente 4 publicaciones, en este orden: (1) *Basic constructions over C^∞-schemes*, Olarte & Rizzo, published, JGP 190 (2023) 104852, DOI arriba; (2) *The Structure of C^∞-Superschemes*, Olarte, Rizzo & Torres-Gomez, accepted, JGP, arXiv 2605.07169; (3) *C^∞-superrings and C^∞-superschemes*, mismos autores, preprint, arXiv 2508.09900; (4) *Operadores diferenciales de orden k sobre C^∞-esquemas y espacios de Batchelor* (título en ES; el EN es traducción, marcar BORRADOR), inPreparation. Autores como "C. D. Olarte", "P. Rizzo", "A. Torres-Gomez". Portada ES literal del anexo; portada EN reescrita en inglés natural (BORRADOR). `talks = []`, `polarMat.videos = []`, `cv.pdfUrl = null`.
- [ ] **Step 4: Implementar `citation.ts`** (formato del test; sin año → se omite el paréntesis).
- [ ] **Step 5: `npm test` → PASS; `npx tsc --noEmit` → sin errores**
- [ ] **Step 6: Commit** `feat: contenido bilingüe tipado y formato de publicaciones`

---

### Task 3: Layouts por idioma, tema, fuentes, menú y favicon

**Files:**
- Delete: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/favicon.ico`, `public/{file,globe,next,vercel,window}.svg`
- Create: `src/app/(es)/layout.tsx`, `src/app/(en)/en/layout.tsx`, `src/app/icon.png` (copia de `public/brand/oso.png`)
- Create: `src/components/SiteShell.tsx` (html/body compartido), `src/components/SiteHeader.tsx`, `src/components/LanguageSwitch.tsx` (client), `src/components/ThemeToggle.tsx` (client), `src/components/ThemeProvider.tsx` (client), `src/components/SiteFooter.tsx`, `src/components/PolarGrid.tsx`, `src/components/MathText.tsx`
- Modify: `src/app/globals.css` (tokens de la paleta para `.dark` y claro; `--font-heading`, `--font-body`)
- Create: `src/app/global-not-found.tsx`; Modify: `next.config.ts` (`experimental.globalNotFound: true`)

**Interfaces:**
- Consumes: `Locale`, `ROUTES`, `pathFor`, `alternatePath`, `visibleSections` (Task 1); `sectionCounts`, `profile` (Task 2)
- Produces: `SiteShell({ locale, children })` — renderiza `<html lang={locale} suppressHydrationWarning>`, fuentes, `ThemeProvider` (`attribute="class"`, `defaultTheme="dark"`, `enableSystem={false}`), header, `<main>`, footer. `PolarGrid({ className? })` — SVG decorativo `aria-hidden` (círculos concéntricos + 8 rayos, trazo `--line`). `MathText({ text })` — muestra `^∞` como `<sup>∞</sup>`.

- [ ] **Step 1:** Leer en `node_modules/next/dist/docs/01-app/`: `03-api-reference/03-file-conventions/route-groups.md` (múltiples root layouts), `not-found.md` (global-not-found), `01-metadata/app-icons.md`, y la guía de fuentes.
- [ ] **Step 2:** Implementar los archivos. Etiquetas del menú y metadatos por idioma salen de un diccionario en `SiteHeader` (ES: Investigación, Publicaciones, Docencia, Charlas, Polar Mat, CV; EN: Research, Publications, Teaching, Talks, Polar Mat, CV). El menú muestra solo `visibleSections(sectionCounts())`. En móvil (< 640 px) el menú colapsa en un botón. Footer: correo, GitHub, YouTube; **sin oso**. `global-not-found` bilingüe ("Página no encontrada · Page not found") con enlaces a `/` y `/en`.
- [ ] **Step 3:** Páginas mínimas temporales `src/app/(es)/page.tsx` y `src/app/(en)/en/page.tsx` que solo rendericen un `<h1>` (se reemplazan en Task 4) para que el build pase.
- [ ] **Step 4:** `npm run build` → PASS; `npm test` → PASS.
- [ ] **Step 5:** `npm run dev` y verificar en el navegador: `/` y `/en` cargan, `<html lang>` correcto, tema oscuro al entrar, botón cambia a claro y persiste al recargar, ES|EN en `/` lleva a `/en`, favicon = oso, `/xyz` muestra el 404 bilingüe; a 375 px de ancho no hay scroll horizontal.
- [ ] **Step 6: Commit** `feat: layouts por idioma, tema, menú y favicon`

---

### Task 4: Portada (ES/EN)

**Files:**
- Create: `src/components/pages/HomePage.tsx`
- Modify: `src/app/(es)/page.tsx`, `src/app/(en)/en/page.tsx` (una línea: `<HomePage locale="…" />`, más `metadata`)

**Interfaces:**
- Consumes: `home`, `profile` (Task 2); `PolarGrid`, `MathText` (Task 3); `t`, `pathFor`
- Produces: `HomePage({ locale }: { locale: Locale })`

- [ ] **Step 1:** Implementar: nombre en fuente de títulos, tagline con "osos polares"/"polar bears" en menta, `PolarGrid` tenue detrás del encabezado, secciones de `home.sections` en orden; en la sección Polar Mat un enlace a `pathFor("polarMat", locale)`; "Dónde encontrarme" con enlaces reales (`mailto:`, GitHub, YouTube). **Sin oso.**
- [ ] **Step 2:** `npm run build` → PASS. En el navegador, el texto de `/` coincide palabra por palabra con el anexo del spec.
- [ ] **Step 3: Commit** `feat: portada bilingüe`

---

### Task 5: Secciones formales y Polar Mat

**Files:**
- Create: `src/components/pages/{ResearchPage,PublicationsPage,TeachingPage,TalksPage,PolarMatPage,CvPage}.tsx`, `src/components/PublicationItem.tsx`
- Create (ES): `src/app/(es)/{investigacion,publicaciones,docencia,charlas,polar-mat,cv}/page.tsx`
- Create (EN): `src/app/(en)/en/{research,publications,teaching,talks,polar-mat,cv}/page.tsx`

**Interfaces:**
- Consumes: todo el contenido (Task 2); `formatVenue`, `publicationLinks`; `MathText`; `t`
- Produces: `XxxPage({ locale })` por sección; cada `page.tsx` exporta `metadata` con título por idioma (p. ej. "Publicaciones — Cristian Olarte").

- [ ] **Step 1:** Implementar las páginas:
  - Investigación: intro en su voz (BORRADOR) → programa → líneas actuales → intereses próximos.
  - Publicaciones: grupos "Artículos en revista", "Aceptados", "Preprints", "En preparación" (EN: Journal articles, Accepted, Preprints, In preparation); un grupo sin elementos no se renderiza. `PublicationItem`: autores, título con `MathText`, `formatVenue`, enlaces de `publicationLinks` (abren en pestaña nueva), resumen.
  - Docencia: intro (BORRADOR) → cursos dictados → áreas que puede asumir.
  - Charlas: si `talks.length === 0` → `notFound()`.
  - Polar Mat: logo `public/brand/polar-mat-logo.webp`, descripción, botón al canal; bloque de videos solo si `videos.length > 0`. Única página (además del favicon) con imagen del oso.
  - CV: resumen (formación omitida, perfil, investigación, publicaciones como lista breve, docencia, competencias, idiomas); botón de PDF solo si `cv.pdfUrl`.
- [ ] **Step 2:** `npm run build` → PASS y la salida lista las 12 rutas visibles como estáticas (○); `npm test` → PASS.
- [ ] **Step 3: Commit** `feat: secciones formales y Polar Mat`

---

### Task 6: Metadatos, verificación completa y entrega para revisión

**Files:**
- Modify: layouts de Task 3 (`metadata` base: título por defecto, descripción, Open Graph con `public/brand/polar-mat-logo.webp`, `alternates.languages` ES↔EN por página)
- Delete: `README.md` de la plantilla → reemplazar por uno breve (qué es, `npm run dev`, `npm test`, dónde está el contenido: `src/content/`)

- [ ] **Step 1:** Implementar metadatos (leer `01-metadata/` en las docs primero).
- [ ] **Step 2:** `npm run lint && npm test && npm run build` → todo PASS.
- [ ] **Step 3:** `npm run start` y verificar con curl: las 12 rutas responden 200; `/charlas`, `/en/talks` y `/xyz` responden 404; ninguna página contiene `undefined`, `TBD` ni `próximamente`; `oso.png` solo aparece en el HTML de `/polar-mat` y `/en/polar-mat`.
- [ ] **Step 4:** Revisión visual en navegador a 1280 px y 375 px, en tema oscuro y claro, de las 12 páginas.
- [ ] **Step 5: Commit** `feat: metadatos y README`. **No hacer push**: entregar a Cristian la lista de textos marcados BORRADOR para que los revise.
