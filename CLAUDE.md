# La Tendencia USA — Contexto del Proyecto

## ¿Qué es este proyecto?
Blog de tecnología, IA y tendencias digitales en español para la comunidad latina en Estados Unidos y el mundo.

## URL en producción
https://latendenciausa.web.app

## Repositorio
https://github.com/rcorzogutierrez/puntotendenciausa

## Stack técnico
- Astro 5 (generador estático)
- Firebase Hosting (deploy)
- GitHub (control de versiones)
- Google Analytics: G-QK0Z3S712M

## Estructura del proyecto
- `src/content/blog/` — artículos en Markdown
- `src/pages/` — páginas del sitio
- `src/layouts/` — layouts base (BaseHead, BlogPost)
- `src/components/` — Header, Footer, cards
- `public/` — archivos estáticos (favicon, robots.txt, verificación Google)

## Frontmatter de artículos
Cada artículo debe tener:
- title
- description (para SEO, 150-160 caracteres)
- pubDate
- category (Tecnología | Inteligencia Artificial | Gadgets | Ciencia)
- heroImage (URL de Unsplash: https://images.unsplash.com/photo-ID?w=1200&q=80)

## Reglas de contenido
- Idioma: siempre español
- Tono: conversacional, humano, para audiencia latina
- Longitud: 600-800 palabras por artículo
- Siempre incluir perspectiva relevante para latinos en USA
- Terminar con una pregunta o call to action al lector
- Nunca mencionar sección de comentarios (no existe)

## Reglas de SEO
- Cada página debe tener meta description
- Open Graph tags en todos los artículos
- Canonical tag en cada artículo
- Imágenes siempre con atributo alt descriptivo
- Links internos entre artículos relacionados

## Paleta de colores
- Fondo: #0F172A
- Acento principal: #6366F1 (violeta)
- Texto: #FFFFFF y grises
- Fuente: Inter (Google Fonts)

## Deploy
1. git pull
2. npm run build
3. firebase deploy
