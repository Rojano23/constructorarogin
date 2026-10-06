# Auditoría técnica de HIDRATODO

Se revisaron package.json, vite.config.ts, tsconfig.json, src/main.tsx y README.md del proyecto /Users/ceciliavalencia/HidraTodo. Se accedió solo para lectura.

## Patrones reutilizados
- React + Vite + TypeScript estricto y plugin React; build con validación de tipos.
- Assets estáticos bajo public/assets, resueltos con import.meta.env.BASE_URL.
- Navegación por anclas sin router ni reglas de redirección para hosting estático.
- Menú móvil con aria-expanded, aria-controls y cierre al seleccionar sección. ROGIN añade cierre con Escape y retorno del foco.
- Enlace de salto al contenido, foco visible y movimiento reducido.
- Iconos lucide-react y datos separados de la interfaz.

## Adaptaciones
HIDRATODO utiliza base /HidraTodo/, adecuada para un subdirectorio de GitHub Pages. ROGIN usa / para su dominio y para subir dist a la raíz pública de cPanel cuando se autorice. No se reutiliza su workflow de despliegue.

No se copiaron identidad, textos, catálogo, filtros, marcas, precios ni enlaces comerciales. No se encontraron helpers SEO separados; ROGIN incorpora sus propios metadatos y JSON-LD. Tampoco se trasladó la estructura monolítica: la nueva página separa cada sección, servicios, proyectos y configuración.

## Identidad ROGIN
Verde profundo #075640, azul slate #23374b, blanco y grises; espacios amplios, bordes arquitectónicos discretos y fotografía documental de obra. Las composiciones proporcionadas sirven de apoyo; el texto permanece en HTML.
