# Verificación de segunda iteración

Se trabajó sobre la versión existente, conservando React + Vite, paleta, SEO y los cinco proyectos aprobados.

## Validación

- `npm run build`: TypeScript y build de producción aprobados.
- `npm test`: ocho pruebas aprobadas a 1440, 1024, 768 y 390 px.
- Un solo H1, seis servicios y cinco proyectos conservados.
- Hero con una única imagen conceptual; Nosotros con una única fotografía real.
- Fotografías de proyectos con ancho uniforme y proporción 3:2.
- Encabezados Nosotros, Servicios, Proyectos destacados y Contacto sin prefijos numéricos.
- Ambos enlaces de WhatsApp usan el número 529617857513 y el mensaje solicitado, con apertura en otra pestaña.
- Botón flotante visible, enfocable por teclado y con nombre accesible.
- Todas las imágenes cargan; sin errores JavaScript ni desbordamiento horizontal en los cuatro tamaños.
- Menú móvil verificado: apertura, Escape, retorno del foco y cierre al navegar.
- Canonical y correo de cotización conservados.
- Capturas disponibles en `test-results/`, carpeta excluida de Git.

## Decisiones visuales

Se retiraron las miniaturas conceptuales de Servicios y Proyectos para simplificar la jerarquía. Los archivos de apoyo se conservan en public/assets. El hero usa la imagen aprobada completa, sin recortarla ni superponer fotografía.

Proyectos utiliza dos columnas uniformes en escritorio/tablet y una en móvil. El quinto proyecto conserva el mismo tamaño que los demás, dejando libre la última posición del grid. Servicios usa tres columnas en escritorio amplio, dos en tamaños intermedios y una en móvil.

Se aumentaron títulos, descripciones, categorías, ubicaciones y textos auxiliares. Nosotros conserva una foto, sin fondo desplazado. El botón flotante mide 54 px en escritorio y 50 px en móvil; el footer reserva espacio inferior para sus últimos textos.

No se realizó push ni despliegue. Pendiente: revisión local del cliente.
