# La Tendencia USA

[![Astro](https://img.shields.io/badge/Astro-6.0-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com)
[![Giscus](https://img.shields.io/badge/Comentarios-Giscus-1F6FEB?logo=github&logoColor=white)](https://giscus.app)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Blog de tecnología, inteligencia artificial y tendencias digitales en español para la comunidad latina en Estados Unidos.

**URL:** https://latendenciausa.web.app

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | [Astro 6](https://astro.build) |
| Contenido | Markdown + MDX |
| Comentarios | [Giscus](https://giscus.app) vía GitHub Discussions |
| Hosting | Firebase Hosting |
| CI/CD | GitHub |

---

## Estructura del proyecto

```
src/
├── components/
│   ├── BaseHead.astro       # Meta tags, SEO, Open Graph
│   ├── Comments.astro       # Sistema de comentarios Giscus
│   ├── Footer.astro
│   ├── FormattedDate.astro  # Fecha con timezone UTC
│   ├── Header.astro
│   └── HeaderLink.astro
├── content/
│   └── blog/                # Artículos en Markdown (.md)
├── layouts/
│   └── BlogPost.astro       # Layout de cada artículo
├── pages/
│   ├── index.astro          # Home
│   ├── blog/
│   │   ├── index.astro      # Listado del blog
│   │   └── [...slug].astro  # Página de artículo
│   ├── categoria/
│   │   └── [categoria].astro
│   ├── categorias.astro
│   ├── about.astro
│   └── rss.xml.js
└── utils/
    └── categories.ts
```

---

## Crear un artículo nuevo

Crear un archivo `.md` en `src/content/blog/` con este frontmatter:

```markdown
---
title: ""
description: "" # 150-160 caracteres
pubDate: "YYYY-MM-DD"
category: "" # Tecnología | Inteligencia Artificial | Gadgets | Ciencia
heroImage: "" # URL de Unsplash con ?w=1200&q=80
---
```

### Reglas de contenido

- **600–800 palabras** por artículo
- **Sin H1** en el cuerpo — el título se renderiza desde el frontmatter
- Estructura de headings: H2 para secciones, H3 para subsecciones
- Tono conversacional, perspectiva para audiencia latina en USA
- Terminar con pregunta o llamado a acción al lector
- Siempre en español

### SEO automático

Cada artículo genera automáticamente:
- Title tag en formato `[Título] | La Tendencia USA`
- Meta description desde el campo `description`
- Schema Markup de tipo `BlogPosting`
- Open Graph tags para redes sociales
- Entrada en el sitemap

---

## Comandos

```bash
npm install        # Instalar dependencias
npm run dev        # Servidor local en localhost:4321
npm run build      # Build de producción en ./dist/
npm run preview    # Preview del build antes de deploy
```

## Deploy

```bash
npm run build
firebase deploy
```

---

## Comentarios

Los comentarios están integrados con **Giscus**, que usa GitHub Discussions como base de datos. Cada artículo crea automáticamente una Discussion en este repositorio la primera vez que alguien comenta.

Los lectores necesitan cuenta de GitHub para comentar. La moderación se gestiona directamente desde la pestaña Discussions del repo.

---

## Categorías disponibles

- `Tecnología`
- `Inteligencia Artificial`
- `Gadgets`
- `Ciencia`
