# Prompt para Codex — Constructora ROGIN

Vamos a desarrollar una nueva página corporativa para **Constructora ROGIN S.A. de C.V.**

- Dominio final: `https://www.constructorarogin.com`
- Correo: `contacto@constructorarogin.com`

## Enfoque técnico
Existe un proyecto previo llamado **HIDRATODO** desarrollado con React + Vite. No clones su identidad visual ni su estructura comercial. Úsalo únicamente como referencia técnica para reutilizar, si conviene, infraestructura ya probada: configuración Vite, build, responsive, navbar/menu móvil, helpers SEO, botones genéricos, estructura de despliegue estático/cPanel y utilidades comunes.

Crea **ROGIN como proyecto independiente**. No modifiques el repositorio HIDRATODO.

Antes de programar:
1. Audita HIDRATODO.
2. Resume qué piezas técnicas son realmente reutilizables.
3. Construye una identidad visual nueva para ROGIN.

## Assets disponibles
Usa exactamente estas rutas:

### Logo
- `assets/logo/rogin_logo_web.png`
- `assets/logo/rogin_logo_original.png`

### Hero
- `assets/hero/constructora_rogin_obras_que_inspiran.png`

### Apoyos visuales
- `assets/sections/servicios_integrales_de_construccion_rogin.png`
- `assets/sections/proyectos_destacados_de_rogin_constructora.png`

### Fotografías reales
- `assets/projects/hero_infraestructura_xalapa.jpg`
- `assets/projects/css_cordoba_edificio.jpg`
- `assets/projects/css_cordoba_fachada.jpg`
- `assets/projects/hemodialisis_hgz8_cordoba.jpg`
- `assets/projects/hemodialisis_hgz8_detalle.jpg`
- `assets/projects/hgz32_minatitlan_dietologia.jpg`
- `assets/projects/hgz32_minatitlan_interiores.jpg`
- `assets/projects/areas_residenciales_medicas_2025.jpg`
- `assets/projects/cisternas_imss_2025.jpg`
- `assets/projects/hospital_comunidad_mantenimiento.jpg`
- `assets/projects/infraestructura_redes_xalapa.jpg`

Lee también `docs/CONTENT_ROGIN.md` y respeta estrictamente sus restricciones.

## Dirección visual
La web debe transmitir:
- empresa constructora seria
- experiencia comprobable
- capacidad de ejecución
- infraestructura
- calidad
- seguridad
- cumplimiento
- confianza

Debe ser más visual que una web corporativa de ingeniería muy sobria, pero mucho menos comercial que HIDRATODO. La fotografía real de obra debe ser protagonista.

Paleta inspirada en el logo:
- verde profundo
- azul marino / slate blue
- blanco
- grises claros

Estilo:
- moderno y corporativo
- limpio
- elegante
- espacios amplios
- geometrías discretas inspiradas en arquitectura
- animaciones mínimas
- sin apariencia de plantilla genérica de construcción

## Navegación
SPA de una página con scroll suave:
- Inicio
- Nosotros
- Servicios
- Proyectos
- Contacto

## Hero
Usar `assets/hero/constructora_rogin_obras_que_inspiran.png` como apoyo visual, sin incrustar el contenido SEO dentro de la imagen.

Contenido HTML:
- Eyebrow: `CONSTRUCTORA ROGIN S.A. DE C.V.`
- H1: `Construimos soluciones que perduran.`
- Texto: `Experiencia en obra civil, infraestructura, construcción y mantenimiento para proyectos públicos, institucionales y particulares.`
- CTA principal: `Solicitar cotización`
- CTA secundario: `Conocer proyectos`

## Nosotros
Crear copy breve basado en `docs/CONTENT_ROGIN.md`.
Mostrar como ejes de confianza:
- Calidad
- Seguridad
- Responsabilidad ambiental

No inventar certificaciones.

## Servicios
Construir cards reales en HTML/CSS. Usar `assets/sections/servicios_integrales_de_construccion_rogin.png` solo como apoyo visual, no como sustituto del contenido.

Servicios:
1. Obra civil e infraestructura
2. Edificación y remodelación
3. Infraestructura hidráulica y sanitaria
4. Mantenimiento institucional y hospitalario
5. Impermeabilización y acabados
6. Instalaciones y proyectos

## Proyectos
Esta sección debe ser una de las más fuertes del sitio.
Usar `assets/sections/proyectos_destacados_de_rogin_constructora.png` como introducción visual y después cards con fotografías reales.

Tomar los proyectos aprobados de `docs/CONTENT_ROGIN.md`.

Cada card debe mostrar solo:
- nombre corto
- ubicación
- sector
- año
- descripción de 1–2 líneas
- fotografía

NO mostrar importes ni números de contrato.

## Contacto
Título: `Hablemos de tu próximo proyecto`

Texto: `Cuéntanos las necesidades de tu proyecto y nuestro equipo podrá ponerse en contacto contigo.`

Mostrar:
- `contacto@constructorarogin.com`
- `www.constructorarogin.com`
- `Xalapa, Veracruz`

Botones:
- Enviar correo
- WhatsApp
- Solicitar cotización

Centralizar configuración en `src/config/contact.ts`:

```ts
export const contact = {
  email: "contacto@constructorarogin.com",
  website: "https://www.constructorarogin.com",
  whatsapp: ""
}
```

No inventar el número de WhatsApp. Mientras esté vacío, no generar un enlace inválido.

## Footer
- Logo ROGIN
- Constructora ROGIN S.A. de C.V.
- contacto@constructorarogin.com
- www.constructorarogin.com
- texto discreto: `Desarrollo web por RX23 Digital`

## SEO técnico básico
Implementar:

```html
<title>Constructora ROGIN | Obra Civil, Infraestructura y Construcción en Veracruz</title>
```

Meta description:
`Constructora ROGIN desarrolla proyectos de obra civil, infraestructura, edificación, mantenimiento y remodelación en Veracruz.`

Además:
- canonical `https://www.constructorarogin.com/`
- Open Graph
- Twitter cards
- `robots.txt`
- `sitemap.xml`
- HTML semántico
- un solo H1
- alt descriptivos
- JSON-LD solo con información confirmada

## Rendimiento y accesibilidad
- optimizar imágenes
- WebP si conviene
- lazy loading fuera del hero
- width/height para evitar layout shift
- contraste adecuado
- navegación por teclado
- focus visible
- respetar prefers-reduced-motion

## Arquitectura sugerida

```text
src/
  components/
    Navbar
    Hero
    About
    Services
    Projects
    Contact
    Footer
    WhatsAppButton
    SectionHeading
  data/
    services.ts
    projects.ts
  config/
    contact.ts
    site.ts
  assets/
  styles/
```

No hardcodear todo en `App.tsx`. Servicios y proyectos deben ser data-driven.

## Entregable de la primera iteración
1. Auditar HIDRATODO.
2. Reportar qué reutilizas técnicamente.
3. Crear el proyecto independiente de ROGIN.
4. Implementar homepage completa.
5. Ejecutar instalación/build.
6. Corregir errores.
7. Verificar responsive.
8. Reportar archivos principales creados/modificados.

No hacer push ni despliegue todavía. Primero revisaremos localmente la primera versión.
