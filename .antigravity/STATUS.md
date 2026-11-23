# Tablero de Avance - Leandro DataL

## Fases
- [x] Fase 0: Inicialización y estructura de carpetas
- [x] Fase 1: Configuración de tokens de diseño y contratos
- [x] Fase 2: Implementación de componentes UI y Layouts (Turno 2 - Capa visual Landing v1.0)
- [x] Fase 3: Islas React de DataViz y simulación (Turno 3 - Componentes interactivos SVG nativos)
- [x] Fase 4: Integración de contenido y páginas internas (`/proyectos/nodo-ia`, `/lab`)
- [x] Fase 5: QA, accesibilidad, SEO y cierre v1.0 para despliegue en Vercel

## Estado General
**v1.0 LISTA PARA PRODUCCIÓN EN VERCEL**
- Build status: **0 errores, 0 warnings** (`astro check && astro build` en 24 archivos).
- Rutas estáticas generadas:
  - `/` (`index.html`)
  - `/proyectos/nodo-ia` (`proyectos/nodo-ia/index.html`)
  - `/lab` (`lab/index.html`)

## Checklist de Verificación Final (Ops & QA)

### 1. Auditoría de Rutas Internas y Páginas
- [x] `src/pages/proyectos/nodo-ia.astro`: Implementado con diseño completo de observabilidad (`#0B0F17`, `#A3E635`, Inter + JetBrains Mono), conectado dinámicamente con la colección `cases`, montando los módulos reactivos `NodoIaSimulation` y `MulticriteriaMatrix`, enlaces a demo y repo, y enlace limpio `← Volver al inicio`.
- [x] `src/pages/lab/index.astro`: Implementado con diseño completo de observabilidad, conectado dinámicamente con la colección `lab` (`getCollection('lab')`), listado exhaustivo de experimentos con estados visuales (`• En producción`, `En desarrollo`, `○ Próximamente`), etiquetas, links a demos/repositorios y enlace limpio `← Volver al inicio`.
- [x] Todos los botones y links de la landing (`Hero`, `FlagshipCase`, `LabTable`, `Contact`, `Navbar`, `Footer`) verificados contra rutas válidas (sin enlaces rotos ni 404).
- [x] Enlaces externos configurados con `target="_blank" rel="noopener noreferrer"` en todos los puntos de salida hacia GitHub, X y demos.

### 2. Accesibilidad, SEO y Performance
- [x] `BaseLayout.astro`: Título dinámico por página, `meta description`, etiquetas Open Graph completas (`og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:locale`, `og:site_name`), Twitter Card (`summary_large_image`), URL canónica y atributo `lang="es"`.
- [x] Favicon DL: Creado en `public/favicon.svg` con monograma minimalista "DL", paleta de observabilidad `#0B0F17` y acento `#A3E635`.
- [x] Soporte para `@media (prefers-reduced-motion: reduce)` integrado en `src/styles/global.css` para anular transiciones y animaciones pesadas en usuarios con preferencia de movimiento reducido.
- [x] Accesibilidad por teclado: Regla global `:focus-visible` con anillo en color de acento `#A3E635`, foco visible y atributos `aria-label` descriptivos en todos los botones e íconos interactivos (menú mobile con `aria-expanded`, botón copiar email, botones de escenario y criterios).

### 3. Build y Preparación para Vercel
- [x] `astro.config.mjs` con `site: "https://leandrodatal.com"` y plugins oficiales (`@astrojs/react`, `@astrojs/tailwind`, `@astrojs/mdx`).
- [x] Salida estática en `dist/` optimizada para despliegue serverless / CDN en Vercel.
- [x] Ejecución limpia de `npm run build` (`astro check && astro build`): 0 errores y 0 warnings.
