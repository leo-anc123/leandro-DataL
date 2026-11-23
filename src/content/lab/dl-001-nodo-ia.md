---
id: "DL-001"
title: "DL-001: Simulación de Nodo IA y Evaluación de Capacidad"
date: 2026-01-15
status: "completed"
tags: ["MCDA", "Monte Carlo", "Python", "React", "CI/CD"]
summary: "Sistema de decisión para evaluar la viabilidad real de instalar Data Centers de IA en Argentina combinando análisis multicriterio y simulación estocástica."
demoUrl: "https://demo.leandrodatal.com"
repoUrl: "https://github.com/leo-anc123/viabilidad-ia-datacenters-ar"
---

# DL-001: Simulación de Nodo IA y Evaluación de Capacidad

## Contexto y Problema
La instalación de infraestructura de cómputo intensivo para Inteligencia Artificial en Argentina presenta un espacio de decisión multifactorial caracterizado por alta volatilidad e incertidumbre. Las variables críticas incluyen disponibilidad energética limpia, capacidad de transporte en alta tensión, conectividad internacional (latencia y redundancia de fibra), marcos regulatorios cambiantes y condiciones climáticas favorables para refrigeración con bajo PUE (Power Usage Effectiveness).

## Metodología Aplicada
1. **Análisis de Decisión Multicriterio (MCDA):** Ponderación y jerarquización de criterios geográficos, de infraestructura energética y costos operativos por provincia/nodo.
2. **Simulación Monte Carlo:** Modelado estocástico con 10.000 iteraciones sobre variaciones de tarifas energéticas, tipo de cambio e indisponibilidad de red para calcular intervalos de confianza (P10, P50, P90) de viabilidad.
3. **Pipeline Automatizado:** Extracción y consolidación periódica de métricas públicas de generación eléctrica y clima mediante GitHub Actions.

## Resultados y Despliegue
- **Pipeline 100% automatizado:** Flujo de ingesta y validación de datos en Python orquestado en GitHub Actions.
- **Frontend interactivo:** Visualización reactiva en React y Tailwind CSS desplegada en Vercel.
- **Entregable:** Herramienta interactiva de soporte a decisiones de inversión disponible en producción.
