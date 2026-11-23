---
id: "DL-002"
title: "DL-002: Evaluador de conveniencia de stack y herramientas"
date: 2026-02-10
status: "in-progress"
tags: ["Simulador", "MCDA", "Data Stack", "DuckDB", "Polars", "Benchmarks"]
summary: "Simulador interactivo de decisión con puntaje multicriterio para evaluar herramientas analíticas y stacks de procesamiento según restricciones de negocio."
repoUrl: "https://github.com/leo-anc123/viabilidad-ia-datacenters-ar"
---

# DL-002: Evaluador de conveniencia de stack y herramientas

## Contexto y Problema
La selección de tecnologías de procesamiento analítico y almacenamiento de datos frecuentemente se basa en tendencias de mercado más que en un análisis riguroso de compensaciones (trade-offs). Las organizaciones suelen sobredimensionar la infraestructura (adoptando clusters distribuidos costosos cuando un motor columnar mononodo sería más eficiente) o subestimar costos de latencia y mantenimiento operativo.

## Metodología y Enfoque
1. **Modelado Multicriterio de Herramientas:** Definición de una matriz de decisión cuantitativa que evalúa motores analíticos (DuckDB, Polars, Apache Spark, ClickHouse, Pandas 2.0).
2. **Criterios de Evaluación:** Throughput de consulta, footprint de memoria RAM, latencia de arranque, curva de aprendizaje y costo total de propiedad (TCO).
3. **Simulador Interactivo:** Interfaz para que líderes técnicos asignen ponderaciones a sus restricciones particulares (ej. presupuesto cloud limitado vs. necesidad de ultra-baja latencia) y obtengan una recomendación sustentada con datos empíricos.

## Estado de Avance
- Matriz base de benchmarking implementada y validada en entornos locales y cloud estandarizados.
- Algoritmo de scoring multicriterio implementado en Python y testeado con casos sintéticos.
- Interfaz interactiva de simulación en desarrollo activo para integrarse al Lab.
