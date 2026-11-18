# Página personal de Cristian Olarte — diseño

Fecha: 2026-11-17 · Repositorio: `Olar1729/Personal-Page` · Publicada en https://olar1729.vercel.app

## Intención

Cristian es matemático, profesor universitario e investigador en geometría C^∞ y
supergeometría, y hace divulgación en YouTube con el canal **Polar Mat**. Quiere que
esta página sea su **marca personal como investigador**.

La página combina dos cosas a propósito:

- **Una voz amigable y en primera persona**, que es la que muestra su relación real
  con las matemáticas. Es la cara principal del sitio.
- **El contenido académico formal** (investigación, publicaciones, docencia, CV),
  que tiene que estar ahí para comités de posdoctorado, colegas y posibles empleadores.

La voz amigable no reemplaza lo formal: lo presenta.

## Lectores

1. **Comités y posibles anfitriones de posdoctorado / empleadores.** Necesitan llegar
   en uno o dos clics a investigación, publicaciones (con arXiv/DOI), docencia y CV.
   Muchos leen en inglés.
2. **Colegas y estudiantes.** Buscan publicaciones, cursos y contacto.
3. **Público de Polar Mat.** Llega por el canal y debe sentir que es la misma persona.

## Objetivos

- Portada con la voz amigable de Cristian (texto de la fuente 2, ver *Contenido*).
- Secciones formales navegables, cada una con su propia URL compartible.
- Sitio completo en **español e inglés**.
- Identidad visual coherente con el canal Polar Mat.
- Agregar una publicación, curso o charla nueva = agregar una entrada de datos, sin
  tocar componentes.

## No objetivos (por ahora)

- Blog. Los tipos `blog.ts` existen, pero el blog no entra en esta versión.
- Buscador, feed RSS, comentarios, analítica.
- Integración con la API de YouTube (los videos destacados se listan a mano).
- Dominio propio (se conectará después en Vercel; no afecta el código).

## Anti-objetivos (fallaría aunque funcione)

- Que se vea como **un CV acartonado**: perder la voz de Cristian.
- Que se vea como **un sitio de YouTuber**: que lo formal parezca secundario o poco serio.
  El oso no aparece en Investigación, Publicaciones, Docencia ni CV.
- **Secciones vacías o con "próximamente"** visibles. Una sección sin contenido no se
  muestra en el menú ni existe como página.
- **Datos inventados.** Lo que falta en el CV (formación, afiliación, datos exactos del
  artículo) no se rellena con suposiciones.

## Enfoques considerados

| Enfoque | Qué es | Por qué no / por qué sí |
|---|---|---|
| **A. Portada con su voz + secciones formales detrás** | Inicio narrativo; menú hacia Investigación, Publicaciones, Docencia, Polar Mat, CV | **Elegido por Cristian.** Lo formal tiene URLs propias para comités; la voz amigable manda en la portada; encaja con los tipos ya definidos en `src/types/` y crece agregando datos. |
| B. Una sola página larga | Texto amigable arriba, bloques formales abajo | Más simple, pero crece mucho y no permite enlazar directo a "publicaciones". |
| C. Dos capas por tema | Cada sección amigable con botón "ver versión formal" | Original, pero un comité con prisa puede no encontrar lo formal; más complejo de mantener. |

## Estructura del sitio

| Página | Ruta ES | Ruta EN | Contenido |
|---|---|---|---|
| Inicio | `/` | `/en` | Texto amigable completo: Hola, En qué ando pensando, Polar Mat (resumen + enlace), Lo demás, Dónde encontrarme |
| Investigación | `/investigacion` | `/en/research` | 1–2 frases en su voz + programa de investigación y líneas actuales (formal) |
| Publicaciones | `/publicaciones` | `/en/publications` | Artículos, en preparación, propuesta de investigación; enlaces arXiv/DOI/PDF cuando existan |
| Docencia | `/docencia` | `/en/teaching` | 1–2 frases en su voz + cursos dictados y áreas que puede asumir |
| Polar Mat | `/polar-mat` | `/en/polar-mat` | Descripción del canal, enlace al canal, videos destacados; aquí sí va el oso |
| CV | `/cv` | `/en/cv` | Resumen del CV en HTML + botón de descarga del PDF **solo si el PDF existe** |

- **Idiomas:** español sin prefijo; inglés bajo `/en`. Selector `ES | EN` en el menú que
  lleva a la página equivalente en el otro idioma (no a la portada).
- **Charlas:** existe el tipo `talk.ts`. La sección aparece sola en el menú cuando haya
  al menos una charla registrada; hoy no hay ninguna.
- **Regla general:** una sección cuya lista de datos está vacía no se renderiza ni
  aparece en el menú. El sitemap y el menú se derivan de los datos.

## Contenido

**Fuentes** (en el doc de claude.ai de Cristian, https://claude.ai/artifact/6YzmgZKp2k1VtUXJE1T7n9):

1. **Borrador formal (versión rev 5 del doc):** perfil, líneas de investigación,
   publicaciones, cursos, competencias. Su texto está copiado en el anexo de este documento.
2. **Versión amigable (versión actual del doc):** texto de la portada. También en el anexo.

**Reglas:**

- El texto de la portada se usa **tal como lo escribió Cristian**, sin reescribirlo.
- Cada sección formal abre con 1–2 frases en su tono; esas frases son propuesta del
  constructor y quedan marcadas para que Cristian las revise.
- **Inglés:** la voz amigable se **re-escribe** en inglés natural (no traducción literal)
  y se marca como borrador para que Cristian la revise. El contenido formal sí se traduce
  directamente.
- **Datos faltantes:** se omiten en el sitio (no se muestran placeholders). Ejemplo: el
  artículo con Rizzo y Torres-Gomez se muestra sin año/revista/DOI hasta tenerlos;
  formación académica no aparece hasta tenerla.
- El contenido vive en archivos de datos tipados en el repo (p. ej. `src/content/`),
  usando los tipos existentes de `src/types/`, con los textos en ambos idiomas. Nada de
  contenido incrustado en componentes.

## Identidad visual

Tomada del canal Polar Mat (logo y portada):

| Elemento | Valor |
|---|---|
| Fondo | Azul marino casi negro, aprox. `#0F1828` |
| Texto principal | Blanco hielo, aprox. `#F2F7FD` |
| Secundario | Azul pálido (orejas/hocico del oso), aprox. `#C9DCEF` |
| Acento único | Verde menta, aprox. `#3DD6A8` (enlaces, palabras destacadas, puntos) |
| Líneas / cuadrícula | Azul grisáceo tenue, aprox. `#22324D` |

- **Motivo de fondo:** cuadrícula polar (círculos concéntricos + rayos) tenue, en la portada.
  En secciones formales, como mucho una versión aún más sutil o ninguna.
- **Tipografía:** fuente redondeada y gruesa **solo para títulos** (parecida al logo,
  p. ej. Fredoka o similar de Google Fonts); fuente sobria y muy legible para el cuerpo y
  las listas de publicaciones.
- **El oso:** **solo** en el favicon (ícono de la pestaña) y en la sección Polar Mat.
  En ningún otro sitio, ni en el pie de página ni en la portada.
- **Tema:** oscuro por defecto; botón para cambiar a claro (`next-themes` ya instalado).
  El modo claro usa la misma paleta invertida, con el menta oscurecido lo necesario para
  tener buen contraste.
- **Matemáticas en el texto:** notación como C^∞ se renderiza bien (KaTeX ya instalado,
  o caracteres Unicode donde baste).
- Responsive: debe leerse bien en el celular.

## Restricciones

- **Next.js 16.2 + React 19 + Tailwind 4 + shadcn**, ya instalados. `AGENTS.md` advierte que
  esta versión de Next.js tiene cambios importantes: leer `node_modules/next/dist/docs/`
  antes de escribir código (en particular rutas, i18n, metadata, middleware/proxy).
- Despliegue en **Vercel (plan Hobby)**: cada `git push` a `main` publica. El build
  (`npm run build`) debe pasar siempre.
- Trabajo en la rama `main` (decisión de Cristian).
- Assets del canal, ya copiados al repo: `public/brand/oso.png` (cara del oso sobre fondo
  marino con cuadrícula polar, 800×800) y `public/brand/polar-mat-logo.webp` (logo
  "POLAR MAT" con el oso como "O", fondo marino, cuadrícula polar con puntos menta). Los
  colores de la tabla de identidad se tomaron de estas imágenes.

## Decisiones tomadas tras la revisión (llamadas del diseñador, corregibles)

- **Textos borrador** (intros de secciones formales y toda la versión en inglés): se marcan
  como borrador solo en los archivos de contenido (campo o comentario), **nunca visibles en
  el sitio**. Como cada push publica, Cristian revisa esos textos antes del push que los
  pone en línea.
- **Tipos de `src/types/`:** son andamiaje sin usos en el código; se pueden modificar.
  Campos que hoy son obligatorios y no conocemos (`year`, `institution`, `semester`…)
  pasan a opcionales, y los textos visibles pasan a ser bilingües (`{ es, en }`).
- **Canal:** `https://www.youtube.com/@osopolarmat`.
- **Videos destacados** en Polar Mat: el bloque no se muestra hasta que Cristian elija
  videos (regla de secciones vacías). La página muestra descripción + enlace al canal.
- **Charlas:** rutas `/charlas` y `/en/talks`, ocultas mientras no haya charlas.

## Lo que se deja al constructor

- Mecanismo exacto de i18n (segmento `[lang]`, diccionarios, middleware/proxy), siempre que
  respete las rutas de la tabla.
- Elección concreta de fuentes y valores exactos de color/contraste.
- Componentes, estructura de carpetas y forma del archivo de contenido.
- Metadatos SEO básicos (título, descripción, Open Graph) por página e idioma.
- Las frases introductorias de cada sección formal y la versión en inglés de la portada
  (como borradores marcados para revisión).

## Anexo: contenido fuente

### Versión amigable (portada)

> **Cristian Olarte**
> Matemático. Doy clases, investigo geometría y hago videos con osos polares.
>
> **Hola**
> Soy Cristian. Llevo años en las matemáticas y todavía no se me pasa: sigo siendo el que se queda pensando en un problema mientras hace la fila del banco.
> Doy clases en la universidad, y esa parte me gusta tanto como investigar. Explicarle bien algo difícil a alguien que lo está viendo por primera vez tiene su propia gracia.
>
> **En qué ando pensando**
> Trabajo en geometría. La pregunta que me tiene ocupado es fácil de enunciar y difícil de contestar: cuánto de lo que sabemos hacer con ecuaciones y álgebra se puede traducir al mundo de las formas suaves, las que uno puede deformar con las manos.
> No es un problema del milenio ni nada parecido. Es un rincón pequeño donde las piezas encajan de maneras que todavía me sorprenden, y eso me alcanza.
> También ando metido en probabilidad. El azar me parece el rincón más raro de las matemáticas: todo lo que uno cree entender ahí resulta ser más sutil de lo que parecía.
>
> **Polar Mat**
> También hago videos. El canal se llama **Polar Mat** (@osopolarmat): problemas tipo olimpiada y matemáticas explicadas visualmente, animadas con manimgx.
> No es una clase grabada. La idea es descubrir, aprender a pensar y divertirse — y sí, los osos polares son parte del plan.
>
> **Lo demás**
> Programo en Python, escribo más LaTeX del que debería, y últimamente le estoy dando a las finanzas cuantitativas por pura curiosidad.
>
> **Dónde encontrarme**
> - cristian.olarte@udea.edu.co
> - github.com/Olar1729
> - YouTube: @osopolarmat

### Borrador formal

**Perfil.** Matemático con varios años de experiencia docente universitaria en cálculo, álgebra lineal y geometría, e investigación activa en geometría C^∞. Mi trabajo gira alrededor de los anillos C^∞ y sus esquemas: con coautores generalicé el teorema de Batchelor al contexto de C^∞-superesquemas, y actualmente estudio los operadores diferenciales de orden k sobre C^∞-esquemas y espacios de Batchelor. En docencia me estoy especializando en probabilidad y estadística, procesos estocásticos y cálculo estocástico para escuelas de ingeniería, ciencia de datos y física.

**Investigación.** Mi programa de investigación es la geometría de los anillos C^∞: trasladar al mundo suave las herramientas de la geometría algebraica, y usarlas para entender espacios que la variedad diferenciable clásica no alcanza.

Líneas actuales:
- **Anillos y esquemas C^∞.** Estructura local, ideales y radicales; en el trabajo en curso introduzco los ideales *∞-jet-determined* y el radical plano Fl.
- **Supergeometría C^∞.** Estructura de los C^∞-superesquemas: generalización del teorema de Batchelor y campos vectoriales de Euler.
- **Operadores diferenciales.** Operadores diferenciales de orden k sobre C^∞-esquemas y sobre espacios de Batchelor.

Intereses próximos: geometría diferencial sintética y derivada; probabilidad y procesos estocásticos; aplicaciones cuantitativas en finanzas.

**Publicaciones** (verificadas en arXiv y en la revista el 2026-11-17; títulos en inglés tal como fueron publicados):

Artículos en revista:
1. C. D. Olarte, P. Rizzo. *Basic constructions over C^∞-schemes*. Journal of Geometry and Physics **190** (2023), 104852. DOI: [10.1016/j.geomphys.2023.104852](https://doi.org/10.1016/j.geomphys.2023.104852).

Aceptados:
2. C. D. Olarte, P. Rizzo, A. Torres-Gomez. *The Structure of C^∞-Superschemes*. Aceptado en Journal of Geometry and Physics (confirmado por Cristian el 2026-11-17; volumen y DOI de la revista aún no existen). Preprint: arXiv:[2605.07169](https://arxiv.org/abs/2605.07169). Generalización del teorema de Batchelor; splittings globales vía campos vectoriales de Euler. Cuando salga publicado, se cambia a "Artículos en revista" con su DOI.

Preprints:
3. C. D. Olarte, P. Rizzo, A. Torres-Gomez. *C^∞-superrings and C^∞-superschemes*. arXiv:[2508.09900](https://arxiv.org/abs/2508.09900) (v1 agosto 2025, v3 agosto 2026). Equivalencia entre C^∞-superesquemas afines y C^∞-superanillos fair.

En preparación:
4. *Operadores diferenciales de orden k sobre C^∞-esquemas y espacios de Batchelor* (2026). Introduce la noción de ideal ∞-jet-determined y el radical plano Fl. En redacción; sin enlace.

Propuesta de investigación: plan de trabajo sobre el programa de geometría C^∞, preparado para postulación a posdoctorado. *(PDF pendiente; no se enlaza hasta que exista.)*

**Docencia.** Varios años dictando cursos de matemáticas a nivel universitario, principalmente para primeros años de ingeniería y ciencias.
- Cursos dictados: Cálculo Diferencial, Cálculo Integral, Cálculo Vectorial, Álgebra Lineal, Geometría Euclidiana.
- Áreas que puede asumir: Probabilidad y Estadística (ingeniería, ciencia de datos, física, economía); Procesos Estocásticos y Cálculo Estocástico; Ecuaciones Diferenciales Ordinarias.
- Materiales: talleres, parciales y notas de clase propias (selección descargable en el futuro, cuando Cristian los entregue).

**Polar Mat.** Canal de YouTube de matemáticas (@osopolarmat): matemáticas explicadas visualmente y problemas tipo olimpiada, en español. La idea es descubrir las matemáticas, aprender a pensar y divertirse. Animaciones con manimgx. Proyecto relacionado: repositorio de ejercicios resueltos (en construcción; no se muestra hasta que exista).

**Competencias.** Python (análisis de datos), LaTeX, manimgx, Git/GitHub; probabilidad, estadística y finanzas cuantitativas en profundización. Idiomas: español nativo; inglés de lectura y escritura académica.

**Datos que faltan (no inventar):** formación académica, afiliación y cargo actuales, institución/periodo de cada curso, datos bibliográficos del artículo, ciudad, charlas, premios, nivel de inglés certificado, ORCID/Scholar/arXiv, foto, PDF del CV.
