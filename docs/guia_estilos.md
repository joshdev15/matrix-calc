# Guía de Estilos: Cyber-Dark Glassmorphism

Esta guía documenta los principios de diseño, colores, tipografía y efectos aplicados en el proyecto de la Calculadora de Matrices, diseñada para ser replicable en otros proyectos web.

---

## 1. Identidad Estética: Cyber-Dark Glassmorphism
Esta estética combina la profundidad y misticismo del estilo tecnológico cyberpunk (fondos muy oscuros con acentos neón) con la sofisticación visual del **glassmorphism** (paneles translúcidos que simulan vidrio esmerilado suspendido).

---

## 2. Paleta de Colores (Fórmulas HSL/Hex)
Definida en las variables globales de CSS (`:root`), esta paleta asegura una excelente legibilidad sobre fondos oscuros:

```css
:root {
  /* Fondos principales de la aplicación */
  --bg-primary: #0a0b10;      /* Negro azulado profundo (Fondo de página) */
  --bg-secondary: #11131e;    /* Azul medianoche (Fondo de secciones) */
  --bg-tertiary: #1b1e2e;     /* Gris azulado (Bordes y elementos internos) */
  
  /* Acentos interactivos y de marca */
  --accent-color: #6366f1;     /* Índigo brillante (Color primario) */
  --accent-hover: #4f46e5;     /* Índigo oscuro (Hover y estados activos) */
  --accent-glow: rgba(99, 102, 241, 0.3); /* Resplandor neón violeta */
  
  /* Estados del sistema */
  --success: #10b981;          /* Verde esmeralda neón (Resultados exitosos) */
  --success-glow: rgba(16, 185, 129, 0.2);
  --error: #ef4444;            /* Rojo neón (Errores y singularidad) */
  
  /* Textos */
  --text-primary: #f8fafc;     /* Blanco nieve (Legibilidad alta) */
  --text-secondary: #94a3b8;   /* Gris slate claro (Textos secundarios y descripciones) */
  --text-muted: #64748b;       /* Gris apagado (Deshabilitado y placeholder) */
  
  /* Bordes */
  --border-color: rgba(255, 255, 255, 0.06); /* Borde de vidrio esmerilado */
  --border-focus: rgba(99, 102, 241, 0.5);   /* Enfoque activo */
}
```

Para generar la atmósfera ciber-digital en el fondo general del sitio web, se aplica un degradado radial dinámico:
```css
body {
  background: radial-gradient(circle at 50% 0%, #1c1d30 0%, var(--bg-primary) 70%);
  background-attachment: fixed;
}
```

---

## 3. Tipografía (Google Fonts)
Se utiliza una combinación de fuentes para equilibrar legibilidad y carácter:

1. **Nunito** (Tipografía Principal - Textos y Encabezados): Una tipografía sans-serif de formas redondeadas, sumamente amigable, limpia y de excelente legibilidad. Actualmente se aplica tanto al cuerpo de texto como a los títulos para lograr un diseño unificado y moderno.
2. **Space Grotesk (Alternativa para Encabezados):** Una tipografía sans-serif con cortes geométricos y quirks tecnológicos que otorgan carácter y estilo cibernético. Queda documentada como opción alternativa si se desea recuperar la vibra "cyberpunk" original en los títulos principales.
3. **JetBrains Mono** (Ejercicios matemáticos y matrices en ejemplos): Utilizada para los bloques de código y matrices matemáticas para simular un entorno estructurado de alta precisión.

Importación en el proyecto actual (Nunito + JetBrains Mono):
```html
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Importación alternativa (Si deseas reactivar Space Grotesk en los títulos):
```html
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 4. Efecto de Vidrio Esmerilado (Glassmorphism)
Para los paneles de la calculadora y el menú flotante, el efecto se genera combinando una opacidad baja en el fondo, filtros de desenfoque de hardware y un borde semi-transparente que imita el brillo físico de un cristal.

```scss
.panel-vidrio {
  background: rgba(30, 41, 59, 0.35); /* Fondo semitransparente oscuro */
  backdrop-filter: blur(12px);         /* Desenfoque del fondo (CSS estándar) */
  -webkit-backdrop-filter: blur(12px); /* Compatibilidad con Safari */
  border: 1px solid rgba(255, 255, 255, 0.06); /* Borde que capta la luz */
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}
```

---

## 5. Efectos y Animaciones en Botones
Los botones implementan micro-interacciones sutiles para brindar feedback táctil e impacto visual de alto nivel.

### A. Efecto Shimmer o Brillo Deslizante (*Shimmer Glow / Light Glint*)
Es un destello de luz diagonal que viaja de izquierda a derecha por encima del botón al posicionar el puntero (hover). Se logra utilizando un pseudoelemento absoluto en combinación con la propiedad `overflow: hidden`.

```css
button {
  position: relative;
  overflow: hidden; /* Oculta el brillo cuando está fuera del botón */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  /* Estilos base (color, fondo degradado, etc.) */
}

/* El destello de luz diagonal */
button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%; /* Inicia fuera del botón en el lado izquierdo */
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg, 
    transparent, 
    rgba(255, 255, 255, 0.15), 
    transparent
  );
  transition: 0.5s ease;
}

/* Al pasar el puntero, el destello viaja hasta el extremo derecho */
button:hover::before {
  left: 100%;
}
```

### B. Efecto de Elevación y Sombra Expansiva (*Hover Lift & Glow Expand*)
Al posicionar el cursor sobre el botón, este se desplaza verticalmente y el resplandor de fondo (sombra) se amplía, simulando que el botón levita del fondo.

```css
button:hover {
  transform: translateY(-2px); /* Se eleva 2px */
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45); /* Sombra más brillante y difusa */
}
```

### C. Efecto de Presionado Táctil (*Click Press Effect*)
Al presionar o hacer click sobre el botón, este desciende inmediatamente de su estado elevado a su posición base en el eje Y. Esto provee una respuesta física inmediata de activación.

```css
button:active {
  transform: translateY(0); /* Vuelve al origen al hacer clic */
}
```

---

## 6. Bloques de Visualización de Fórmulas y Matrices
Para mostrar la notación matemática e instrucciones paso a paso dentro del panel de ayuda con alta legibilidad, se estilizan las etiquetas con fuente monoespaciada para simular bloques independientes integrados al tema oscuro:

```scss
/* Selector para elementos con estilo de fuente monospace inline */
[style*="font-family: monospace"],
[style*="font-family:monospace"] {
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace !important;
  background: rgba(0, 0, 0, 0.25) !important;
  padding: 8px 14px !important;
  border-radius: 8px !important;
  font-size: 0.92rem !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  letter-spacing: 0.02em;
  color: #e2e8f0 !important;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: 6px 0 14px 0;
  display: block; /* O inline-block según se requiera */
}
```

---

## 7. Scrollbars Ciber-Minimalistas
El navegador por defecto arruina la estética oscura con scrollbars grises por defecto. Se incluye este código global para customizarlas:

```css
/* Barra de scroll personalizada */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: var(--bg-primary);
}
::-webkit-scrollbar-thumb {
  background: var(--bg-tertiary);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}
```
