# Leandro / DataL · v1.0

Landing page y laboratorio personal de **Leandro**, Científico de Datos especializado en sistemas de decisión, automatización de pipelines y productos analíticos interactivos.

Diseñada con estética de laboratorio de datos e interfaces de observabilidad, priorizando jerarquía visual, conversión y rendimiento extremo.

🔗 **Sitn produccion** [https://leandrodatal.vercel](https://leandrodatal.vercel.app).app

---

## Arquitectura y Stack

El proyecto está construido bajo una arquitectura **content-driven** con hidratación parcial (Astro Islands), enviando cero JavaScript innecesario en las secciones estáticas y reservando React únicamente para los módulos de visualización.

* **Framework:** Astro + TypeScript (modo estricto)
* **Interactividad / DataViz:** React + SVG nativo + CSS (sin librerías pesadas de gráficos)
* **Estilos:** Tailwind CSS + Design Tokens personalizados (modo oscuro `#0B0F17` + acento `#A3E635`)
* **Contenido:** Astro Content Collections (Markdown / MDX + validación de esquemas con Zod) y diccionarios JSON preparados para i18n
* **Despliegue:** Vercel con CI/CD automático desde `main`

---

## Secciones y Características Principales

* **Hero & Simulación (`nodo-ia / simulación`):** Isla React (`client:idle`) con grafo topológico en SVG nativo e histograma de escenarios (*bajo*, *base*, *alto*).
* **Caso Insignia (`nodo / IA v2.1.0`):** Presentación del sistema de evaluación de viabilidad de Data Centers de IA en Argentina (MCDA + Monte Carlo) junto al componente `MulticriteriaMatrix` (`client:visible`) animado mediante `IntersectionObserver`.
* **Servicios:** Oferta estructurada en tres ejes (*Dashboards y observatorios interactivos*, *Automatización de pipelines* y *Consultoría analítica*) con entregables explícitos.
* **Lab DataL (`/lab`):** Archivo escalable de experimentos técnicos (`DL-001`, `DL-002`, `DL-003`) alimentado dinámicamente por colecciones tipadas. Permite agregar nuevos experimentos sin modificar el diseño.
* **Accesibilidad y SEO:** Soporte para `prefers-reduced-motion`, navegación por teclado (`:focus-visible`, `aria-label`), metadatos Open Graph y favicon SVG minimalista.

---

## Estructura del Proyecto

```text
leandro-datal/
├── public/                 # Activos estáticos (favicon, og-image, CVs)
├── src/
│   ├── components/
│   │   ├── dataviz/        # Islas React (NodoIaSimulation, MulticriteriaMatrix)
│   │   └── sections/       # Secciones Astro de la landing
│   ├── config/
│   │   └── site.config.ts  # URLs externas, contacto y feature flags
│   ├── content/
│   │   ├── config.ts       # Esquemas Zod para Lab y Casos de estudio
│   │   ├── cases/          # Casos de estudio en MDX
│   │   └── lab/            # Experimentos de Lab DataL en Markdown
│   ├── data/               # Diccionario de textos (es.json) y datos mock
│   ├── layouts/            # BaseLayout (SEO, Navbar sticky, Footer)
│   ├── pages/              # Rutas: /, /lab, /proyectos/nodo-ia
│   └── styles/             # Tokens globales y accesibilidad
├── astro.config.mjs
└── tailwind.config.mjs