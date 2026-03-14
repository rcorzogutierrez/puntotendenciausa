---
title: "OpenAI lanza su primer modelo open source desde GPT-2"
description: "OpenAI rompe años de secretismo y publica gpt-oss, un modelo de 120B parámetros con licencia Apache 2.0 que cualquiera puede descargar y usar gratis."
pubDate: "2026-03-14"
category: "Inteligencia Artificial"
heroImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80"
---

Durante años, OpenAI fue sinónimo de inteligencia artificial de pago, cerrada y controlada. La empresa que nació con una misión de código abierto terminó siendo una de las más herméticas del sector. Por eso cuando anunciaron gpt-oss, el primer modelo de pesos abiertos desde GPT-2 en 2019, la comunidad de desarrolladores literalmente no lo podía creer.

## Qué es gpt-oss y por qué importa

gpt-oss es un modelo de lenguaje con 120 mil millones de parámetros totales, pero con una arquitectura llamada Mixture-of-Experts (MoE) que lo hace mucho más eficiente de lo que ese número sugiere. La clave está en que solo activa 5,100 millones de parámetros por token cuando procesa texto. Eso significa que, a pesar de ser enorme en papel, en la práctica puede correr en una sola GPU de 80 GB como una NVIDIA A100 o H100.

Para quienes no estamos en el mundo del hardware de servidores: esto es muy importante. Significa que un desarrollador independiente, una startup, una universidad latinoamericana, o incluso alguien con acceso a la nube puede usar este modelo sin depender de la API de pago de OpenAI.

## Licencia Apache 2.0: la diferencia que cambia todo

El modelo se distribuye bajo licencia Apache 2.0, una de las más permisivas del mundo del software. Eso quiere decir que puedes descargarlo, modificarlo, usarlo en productos comerciales, y distribuir tus versiones modificadas. No hay que pedirle permiso a OpenAI, no hay cuotas mensuales, no hay restricciones de uso empresarial.

Ya está disponible en Hugging Face y Ollama, las dos plataformas que más usa la comunidad de IA open source. En cuestión de horas del lanzamiento, miles de desarrolladores lo descargaban y ponían a prueba.

## Por qué OpenAI cambia de postura ahora

La respuesta honesta tiene que ver con la competencia. DeepSeek, el laboratorio chino de IA, demostró que es posible construir modelos de clase mundial con una fracción del presupuesto de OpenAI y publicarlos abiertamente. Meta lleva años publicando su familia LLaMA. Mistral, empresa francesa, se ha posicionado como la alternativa open source más seria de Europa.

OpenAI vio que su hermetismo le estaba costando influencia entre desarrolladores. Si los programadores construyen sus proyectos sobre LLaMA o Mistral, aprenden esos ecosistemas, desarrollan herramientas para esos modelos, y eventualmente las empresas que los contratan los usan en producción. OpenAI se quedaba fuera de esa parte del mercado.

Con gpt-oss, OpenAI entra de lleno al juego open source sin renunciar a sus productos comerciales. GPT-5 y sus modelos premium siguen existiendo para quienes quieran las capacidades máximas. gpt-oss es para el ecosistema de desarrolladores que construyen cosas propias.

## Qué significa para la comunidad latina

Para quienes vivimos y trabajamos en América Latina o somos la comunidad latina en Estados Unidos, esto abre puertas concretas. Las barreras de costo de las APIs de IA han sido reales: cuando construyes un proyecto pequeño o experimentas con ideas, cada llamada a la API tiene un precio que se acumula.

Con un modelo que puedes correr localmente o en infraestructura propia, esa barrera desaparece. Startups en México, Colombia, Argentina o empresas latinas en los Estados Unidos ahora tienen acceso a un modelo de clase mundial sin gastos variables impredecibles.

La pregunta que queda es: ¿OpenAI mantendrá el compromiso open source, o esto es solo un movimiento estratégico temporal para recuperar terreno entre desarrolladores?

