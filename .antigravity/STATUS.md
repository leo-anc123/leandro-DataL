# Tablero de Avance - Leandro DataL

## Fases
- [x] Fase 0: Inicialización y estructura de carpetas
- [x] Fase 1: Configuración de tokens de diseño y contratos
- [x] Fase 2: Implementación de componentes UI y Layouts (Turno 2 - Capa visual Landing v1.0)
- [x] Fase 3: Islas React de DataViz y simulación (Turno 3 - Componentes interactivos SVG nativos)
- [ ] Fase 4: Integración de contenido y páginas
- [ ] Fase 5: QA, accesibilidad y despliegue

## Bloqueos
- Ninguno por el momento.

## Tareas Completadas
- Creación de la estructura del workspace.
- Carga y estructuración integral de contenidos en español en `src/data/es.json` (Hero, Caso Insignia nodo / IA v2.1.0, 3 Servicios con entregables típicos, Proceso Técnico 01 al 04, Perfil UGR y Contacto).
- Definición y validación de experimentos de laboratorio en `src/content/lab/` (DL-001, DL-002 y DL-003) bajo el contrato `lab.schema.json`.
- Integración de tokens de diseño (`design-tokens.json`) en `tailwind.config.mjs` y `src/styles/global.css` (modo oscuro de observabilidad `#0B0F17`, acento lima `#A3E635`, fuentes Inter y JetBrains Mono).
- Parametrización y tipado de `src/config/site.config.ts` (con soporte para `cvEsUrl`, `flags`, `social` y URLs de casos de estudio).
- Implementación de `BaseLayout.astro` con Navbar sticky, marca `Leandro / DataL`, enlaces de navegación rápida, selector ES activo (EN inactivo) y botón Contactar. Footer institucional alineado a las especificaciones.
- Implementación de `Hero.astro` con layout de 2 columnas, badges técnicos, pill "Disponible para proyectos", titular, subtítulo, CTAs, tags de stack y placeholder estilizado con `{/* SLOT: NodoIaSimulation (Turno 3) */}`.
- Implementación de `FlagshipCase.astro` con caso nodo / IA v2.1.0, métricas destacadas (100%, MCDA + MC, Vercel), CTAs dinámicos desde `site.config.ts` y slot `{/* SLOT: MulticriteriaMatrix (Turno 3) */}`.
- Implementación de `Services.astro` en grilla de 3 columnas (01, 02, 03) con bloque `ENTREGABLE TÍPICO` alineado verticalmente al pie.
- Implementación de `LabTable.astro` consumiendo dinámicamente `getCollection('lab')` ordenada por ID, estados visuales en español (`• En producción` en lima, `En desarrollo`, `○ Próximamente`), tabla desktop de 4 columnas y vista de tarjetas apiladas para mobile.
- Implementación de `ProcessAndProfile.astro` con ciclo 01-04, perfil con mención a la Tecnicatura en Ciencia de Datos (UGR) y categorías de stack técnico.
- Implementación de `Contact.astro` con columna PARA PROYECTOS (Escribime y Copiar email con feedback interactivo) y columna PARA RR.HH. con fallback discreto "CV a pedido" y enlaces a redes.
- Integración completa en `src/pages/index.astro`.
- **Fase 3 (Turno 3) - DataViz & Simulación**:
  - Creación de `src/data/nodo-ia-mock.json` con coordenadas y aristas del grafo topológico, distribución Monte Carlo (escenarios bajo, base, alto) y los 5 criterios de la matriz multicriterio (Energía 35%, Conectividad 25%, Marco regulatorio 15%, Refrigeración / clima 15%, Costo 10%) sumando 100%.
  - Creación de `src/components/dataviz/NodoIaSimulation.tsx` con SVG nativo de 60 FPS, ruta activa iluminada con halo y animación en lima (`#A3E635`), nodo objetivo pulsante, histograma tipo campana con respiración CSS y etiquetas de escenarios.
  - Creación de `src/components/dataviz/MulticriteriaMatrix.tsx` con encabezado técnico v2.1.0, barras horizontales animadas con IntersectionObserver al entrar en pantalla y estado hover por criterio con detalle descriptivo.
  - Reemplazo del slot en `Hero.astro` con `<NodoIaSimulation client:idle />`.
  - Reemplazo del slot en `FlagshipCase.astro` con `<MulticriteriaMatrix client:visible />`.
  - Verificación estricta de compilación: `npm run build` (`astro check && astro build`) completado con 0 errores y 0 warnings en 24 archivos.
