# Cristian Olarte — página personal

Sitio bilingüe (español / inglés) de Cristian Olarte: matemático, profesor e investigador en geometría C^∞ y supergeometría, y autor del canal Polar Mat.

Publicado en https://olar1729.vercel.app. Cada `git push` a `main` se publica en Vercel.

## Comandos

```bash
npm run dev     # servidor local en http://localhost:3000
npm test        # pruebas (Vitest)
npm run build   # build de producción
```

## Dónde está cada cosa

- **Contenido** (textos, publicaciones, cursos, charlas, videos): `src/content/`. Cada texto visible tiene versión `es` y `en`.
  - Una publicación nueva: agregar una entrada en `src/content/publications.ts`.
  - Una charla: agregarla en `src/content/talks.ts` y la sección Charlas aparece sola en el menú.
  - Videos destacados de Polar Mat: `src/content/polarMat.ts`.
  - PDF del CV: poner el archivo en `public/` y su ruta en `src/content/cv.ts`.
- **Rutas por idioma**: `src/lib/routes.ts`.
- **Páginas**: `src/components/pages/`. Los archivos de `src/app/(es)` y `src/app/(en)` solo las enlazan.
- **Colores y tipografía**: `src/app/globals.css`.

Diseño: `docs/superpowers/specs/2026-11-17-pagina-personal-design.md`.
