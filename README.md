# Constructora ROGIN

Segunda iteración sobre el proyecto independiente con React, Vite y TypeScript. No se modificó HIDRATODO ni se publicó el sitio.

## Uso local

```sh
npm install
npm run dev
```

Abrir http://127.0.0.1:5173/. Para revisar la compilación de producción: `npm run build` y `npm run preview` (puerto 4173).

## Organización

- `src/components/`: navegación y secciones de la homepage.
- `src/data/`: seis servicios y cinco proyectos aprobados.
- `src/config/contact.ts`: correo, dominio y WhatsApp. WhatsApp confirmado: 529617857513; botón de contacto y botón flotante con mensaje prellenado.
- `src/styles/global.css`: identidad propia y responsive.
- `public/assets/`: recursos originales con sus nombres y rutas solicitados.
- `docs/CONTENT_ROGIN.md`: fuente del contenido aprobado.
- `docs/AUDITORIA_HIDRATODO.md`: auditoría y reutilización técnica.

SEO en index.html, robots.txt y sitemap.xml. JSON-LD contiene solo nombre, sitio, correo, logo y localidad confirmados. No se publican contratos, importes, certificaciones ni datos inventados.

El build genera `dist/` para hosting estático en la raíz del dominio; no se ha realizado push ni despliegue. Los enlaces de cotización abren un correo con asunto prellenado. No hay backend ni envío de formulario.

## Verificación

`npm test` ejecuta Playwright en 1440, 1024, 768 y 390 px con un servidor de producción temporal. Comprueba contenido, assets, desbordamiento, menú, navegación, SEO y enlaces WhatsApp, proporciones uniformes de las fotografías y acceso por teclado.

Para instalar el navegador de pruebas en otro equipo: `npx playwright install chromium`. Opcionalmente, `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` permite usar un Chromium ya instalado.

Las imágenes públicas se optimizaron de 9.4 MB a 2.7 MB conservando las rutas. `node scripts/optimize-images.mjs` regenera los archivos desde los originales suministrados.
