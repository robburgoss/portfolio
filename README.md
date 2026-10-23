# Portfolio · Roberto Burgos Vidal

Astro 4 + Tailwind CSS. Comandos: `npm install`, `npm run dev`, `npm run build`.

## Añadir un proyecto

Crea un `.md` en `src/content/projects/`, por ejemplo `mi-proyecto.md`:

```md
---
title: "Nombre del proyecto"
description: "Qué hace, en una o dos frases."
tags: ["Java", "Spring"]
type: "real"            # real | placeholder
status: "Publicado"     # Publicado | En Desarrollo | Planificado
githubUrl: "https://github.com/usuario/repo"   # opcional
demoUrl: "https://ejemplo.com"                 # opcional
featured: false
---
Texto libre (opcional).
```

- `type: real` aparece en "Proyectos reales"; `placeholder` en "Líneas de investigación".
- El esquema (zod) está en `src/content/config.ts`: si falta un campo obligatorio, la compilación falla con un error claro.

## Personalizar

- Datos personales, skills, educación y experiencia: `src/data/profileData.ts` (actualiza `github` y `linkedin`).
- CV: copia tu PDF a `public/cv-roberto-burgos.pdf`.
