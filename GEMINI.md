```
C:.
│   index.html
│   
├───assets
│       ceberio-mellis-chicos.jpg
│       cornejo-mellis.jpg
│       draw.png
│       familia-egreso.jpg
│       familia-salta.jpg
│       mama-mellis-bebe.jpg
│       mateo-mellis-egreso.jpg
│       mateo-mellis-jardin.jpg
│       maxi-vero-tuta.jpg
│       mellis-chicos.jpg
│       mellis-egreso.jpg
│       norbertoTutaChicos.jpg
│       sintetico.jpg
│       sintetico2.jpg
│       social-escudo.png
│       tuta-chulo-olga.jpg
│       tuta-cornejo-claudio.jpg
│       tuta-cornejo.jpg
│       tuta-estadio.jpg
│       tuta-futbol.jpg
│       tuta-gilberto-natalia.jpg
│       tuta-gilberto.jpg
│       tuta-jaimeChico.jpg
│       tuta-lalo-futbol.jpg
│       tuta-lalo-humberto.jpg
│       tuta-mama-casamiento.jpg
│       tuta-mellis-bebe.jpg
│       tuta-mellis-bebe2.jpg
│       tuta-mellis-federal.jpg
│       tuta-tomas.jpg
│
├───css
│       styles.css
│
└───js
        scripts.js

Estoy desarrollando una invitación web en HTML, CSS y JavaScript.
El proyecto ya tiene una estructura definida con secciones y assets organizados.

Estructura actual del proyecto
/invitacion
├─ index.html
├─ css/styles.css
├─ js/main.js
└─ assets/img/
    ├─ timeline/
    ├─ homenajeados/
    └─ galeria/


Existe una sección <section id="cronograma" class="timeline"> que actualmente contiene un timeline básico.
Necesito que reemplaces o extiendas esta sección por un timeline narrativo visual, basado en un PNG de referencia que muestra una progresión desde la infancia hasta la adultez.

Objetivo del componente

Contar una historia de vida mediante imágenes reales.

Comenzar con imágenes pequeñas (infancia).

Avanzar cronológicamente aumentando tamaño y protagonismo.

Finalizar en una imagen tipo badge/emblema ubicada en:

assets/img/homenajeados/60-20.png


Esta imagen representa el festejo conjunto de 60 y 20 años y debe ser el punto focal.

Imágenes a utilizar

Las imágenes intermedias deben cargarse desde:

assets/img/timeline/


Cada imagen representa una etapa distinta.

Deben estar posicionadas sobre un recorrido visual (camino, línea curva, sendero).

Composición visual

Mobile-first (recorrido principalmente vertical).

En desktop, el recorrido puede volverse:

Curvo

Zig-zag

Suave desplazamiento horizontal

El camino visual debe:

Conectar todas las imágenes

Guiar la mirada hasta el badge final

Se recomienda utilizar SVG para:

Dibujar el camino

Animar el trazo progresivamente

Animaciones requeridas

El camino debe dibujarse con el scroll (stroke-dasharray / stroke-dashoffset).

Cada imagen debe aparecer de forma secuencial:

opacity: 0 → 1

transform: scale(0.6) → scale(1)

La animación debe reforzar la sensación de avance temporal.

La activación debe hacerse mediante IntersectionObserver o técnica equivalente, sin librerías pesadas.

Restricciones técnicas

No usar frameworks (React, Vue, etc.).

Usar solo HTML, CSS y JS nativo.

Mantener el código modular y legible.

El componente debe integrarse directamente en el index.html existente.

Estilo

Elegante

Emotivo

Festivo

Sin animaciones bruscas

El badge final debe destacar claramente sobre el resto

Resultado esperado

Un timeline visual animado que reemplace el actual.

Fiel al PNG base proporcionado.

Totalmente responsive.

Que funcione como eje narrativo principal de la invitación.

Si alguna decisión visual no está definida, priorizar:

Claridad

Lectura progresiva

Jerarquía visual hacia el badge final (60 + 20).