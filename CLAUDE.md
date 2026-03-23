# La Tendencia USA — Instrucciones para Claude Code

## Sobre el proyecto
Blog de tecnología, IA y tendencias digitales en español para la comunidad latina.
URL: https://latendenciausa.web.app
Stack: Astro + Firebase Hosting + GitHub

## Reglas SEO obligatorias en cada artículo
- Title tag: 50-60 caracteres, formato: [Título] | La Tendencia USA
- Meta description: 150-160 caracteres usando el campo description del frontmatter
- Cada artículo debe tener Schema Markup de tipo BlogPosting
- Imágenes siempre con atributo alt descriptivo
- Estructura de headings: H1 (título), H2 (secciones), H3 (subsecciones)
- heroImage obligatorio usando URL de Unsplash

## Estructura de frontmatter obligatoria para artículos
title: ""
description: "" # 150-160 caracteres
pubDate: "YYYY-MM-DD"
category: "" # Tecnología | Inteligencia Artificial | Gadgets | Ciencia | Gaming
heroImage: "" # URL de Unsplash
tags: [] # 2-4 tags obligatorios — ver taxonomía abajo

## Taxonomía de tags (usar exactamente estos valores)
Empresas: openai, google, apple, meta, nvidia, microsoft, anthropic, amazon, spacex
IA: ia-generativa, agentes-ia, modelos-ia, open-source
Productos: gaming, gadgets, wearables, hardware, robots
Seguridad: ciberseguridad, privacidad
Negocio: startups, ipo
Gobierno: gobierno, defensa, energia
Contenido: redes-sociales, creadores, streaming, productividad
Ciencia: ciencia, historia, salud-digital

## Estilo de escritura
- Tono conversacional y humano, nunca robótico
- Perspectiva específica para audiencia latina en USA
- 600-800 palabras por artículo
- Terminar con pregunta o llamado a acción al lector
- Siempre en español

## Deploy
1. npm run build
2. firebase deploy
