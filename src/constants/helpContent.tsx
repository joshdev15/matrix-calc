import React from "react";

export interface HelpItem {
  title: string;
  requirements: string;
  theory: React.ReactNode;
  example: React.ReactNode;
}

export const HELP_CONTENT: Record<string, HelpItem> = {
  add: {
    title: "Suma de Matrices",
    requirements: "Las matrices deben tener las mismas dimensiones (mismo número de filas y de columnas).",
    theory: (
      <div>
        <p>Cada elemento c<sub>ij</sub> de la matriz resultante C = A + B se obtiene sumando los elementos correspondientes de la misma posición:</p>
        <div style={{ fontFamily: "monospace", padding: "10px", background: "rgba(0,0,0,0.2)", borderRadius: "6px", margin: "10px 0" }}>
          c[i][j] = a[i][j] + b[i][j]
        </div>
      </div>
    ),
    example: (
      <div>
        <p>Sean las matrices 2x2:</p>
        <div style={{ display: "flex", gap: "20px", margin: "10px 0" }}>
          <div>A = [ [2, 4], [1, -3] ]</div>
          <div>B = [ [5, 0], [-2, 6] ]</div>
        </div>
        <p><strong>Cálculo:</strong></p>
        <ul>
          <li>Celda (1,1): 2 + 5 = 7</li>
          <li>Celda (1,2): 4 + 0 = 4</li>
          <li>Celda (2,1): 1 + (-2) = -1</li>
          <li>Celda (2,2): -3 + 6 = 3</li>
        </ul>
        <p><strong>Resultado al calcular:</strong> [ [7, 4], [-1, 3] ]</p>
      </div>
    )
  },
  sub: {
    title: "Resta de Matrices",
    requirements: "Las matrices deben tener las mismas dimensiones (mismo número de filas y de columnas).",
    theory: (
      <div>
        <p>Cada elemento c<sub>ij</sub> de la matriz resultante C = A - B se obtiene restando el elemento correspondiente de la segunda al de la primera:</p>
        <div style={{ fontFamily: "monospace", padding: "10px", background: "rgba(0,0,0,0.2)", borderRadius: "6px", margin: "10px 0" }}>
          c[i][j] = a[i][j] - b[i][j]
        </div>
      </div>
    ),
    example: (
      <div>
        <p>Sean las matrices 2x2:</p>
        <div style={{ display: "flex", gap: "20px", margin: "10px 0" }}>
          <div>A = [ [8, 3], [-2, 5] ]</div>
          <div>B = [ [3, -1], [4, 2] ]</div>
        </div>
        <p><strong>Cálculo:</strong></p>
        <ul>
          <li>Celda (1,1): 8 - 3 = 5</li>
          <li>Celda (1,2): 3 - (-1) = 4</li>
          <li>Celda (2,1): -2 - 4 = -6</li>
          <li>Celda (2,2): 5 - 2 = 3</li>
        </ul>
        <p><strong>Resultado al calcular:</strong> [ [5, 4], [-6, 3] ]</p>
      </div>
    )
  },
  esc: {
    title: "Matriz por un Escalar",
    requirements: "Se puede realizar sobre cualquier matriz, no hay restricciones de tamaño.",
    theory: (
      <div>
        <p>Cada elemento de la matriz resultante se obtiene multiplicando el elemento original por el escalar k:</p>
        <div style={{ fontFamily: "monospace", padding: "10px", background: "rgba(0,0,0,0.2)", borderRadius: "6px", margin: "10px 0" }}>
          c[i][j] = k * a[i][j]
        </div>
      </div>
    ),
    example: (
      <div>
        <p>Sean la matriz A y el escalar k = 3:</p>
        <div style={{ margin: "10px 0" }}>A = [ [2, -1, 0], [4, 5, -3] ]</div>
        <p><strong>Cálculo:</strong></p>
        <ul>
          <li>3 * 2 = 6</li>
          <li>3 * (-1) = -3</li>
          <li>3 * 0 = 0</li>
          <li>3 * 4 = 12</li>
          <li>3 * 5 = 15</li>
          <li>3 * (-3) = -9</li>
        </ul>
        <p><strong>Resultado al calcular:</strong> [ [6, -3, 0], [12, 15, -9] ]</p>
      </div>
    )
  },
  product: {
    title: "Producto de Matrices",
    requirements: "El número de columnas de la matriz A debe ser igual al número de filas de la matriz B.",
    theory: (
      <div>
        <p>El elemento c<sub>ij</sub> de la matriz resultante es la suma de los productos correspondientes de la fila i de A y la columna j de B:</p>
        <div style={{ fontFamily: "monospace", padding: "10px", background: "rgba(0,0,0,0.2)", borderRadius: "6px", margin: "10px 0" }}>
          c[i][j] = sum_k(a[i][k] * b[k][j])
        </div>
      </div>
    ),
    example: (
      <div>
        <p>Sean las matrices 2x2:</p>
        <div style={{ display: "flex", gap: "20px", margin: "10px 0" }}>
          <div>A = [ [2, 3], [1, 0] ]</div>
          <div>B = [ [4, -2], [5, 1] ]</div>
        </div>
        <p><strong>Cálculo:</strong></p>
        <ul>
          <li>c[0][0] = (2 * 4) + (3 * 5) = 8 + 15 = 23</li>
          <li>c[0][1] = (2 * -2) + (3 * 1) = -4 + 3 = -1</li>
          <li>c[1][0] = (1 * 4) + (0 * 5) = 4 + 0 = 4</li>
          <li>c[1][1] = (1 * -2) + (0 * 1) = -2 + 0 = -2</li>
        </ul>
        <p><strong>Resultado al calcular:</strong> [ [23, -1], [4, -2] ]</p>
      </div>
    )
  },
  det: {
    title: "Determinante",
    requirements: "La matriz debe ser cuadrada (2x2 o 3x3).",
    theory: (
      <div>
        <p><strong>Para 2x2:</strong> ad - bc</p>
        <p><strong>Para 3x3 (Método de Sarrus):</strong> Se suman los productos de las diagonales principales y se restan las diagonales secundarias:</p>
        <div style={{ fontFamily: "monospace", padding: "10px", background: "rgba(0,0,0,0.2)", borderRadius: "6px", margin: "10px 0" }}>
          det = (d1 + d2 + d3) - (i1 + i2 + i3)
        </div>
      </div>
    ),
    example: (
      <div>
        <p>Matriz 3x3:</p>
        <div style={{ margin: "10px 0" }}>A = [ [1, 2, 3], [0, 1, 4], [5, 6, 0] ]</div>
        <p><strong>Cálculo:</strong></p>
        <ul>
          <li>Diagonales principales: (1*1*0) + (2*4*5) + (3*0*6) = 0 + 40 + 0 = 40</li>
          <li>Diagonales secundarias: (3*1*5) + (1*4*6) + (2*0*0) = 15 + 24 + 0 = 39</li>
          <li>Determinante = 40 - 39 = 1</li>
        </ul>
        <p><strong>Resultado al calcular:</strong> 1</p>
      </div>
    )
  },
  cramer_square: {
    title: "Regla de Cramer 2x2",
    requirements: "El determinante del sistema (∆) debe ser diferente de cero.",
    theory: (
      <div>
        <p>Se resuelven los valores de las incógnitas reemplazando la columna de la variable por el vector independiente para calcular su determinante, y luego dividiendo entre el determinante general:</p>
        <div style={{ fontFamily: "monospace", padding: "10px", background: "rgba(0,0,0,0.2)", borderRadius: "6px", margin: "10px 0" }}>
          x = ∆x / ∆ , y = ∆y / ∆
        </div>
      </div>
    ),
    example: (
      <div>
        <p>Sistema de Ecuaciones:</p>
        <div style={{ margin: "10px 0" }}>
          2x + 3y = 8 <br />
          1x - 2y = -3
        </div>
        <p><strong>Cálculo:</strong></p>
        <ul>
          <li>∆ = (2 * -2) - (3 * 1) = -7</li>
          <li>∆x = (8 * -2) - (3 * -3) = -7</li>
          <li>∆y = (2 * -3) - (8 * 1) = -14</li>
          <li>x = -7 / -7 = 1</li>
          <li>y = -14 / -7 = 2</li>
        </ul>
        <p><strong>Resultado al calcular:</strong> x = 1, y = 2</p>
      </div>
    )
  },
  cramer_cube: {
    title: "Regla de Cramer 3x3",
    requirements: "El determinante del sistema (∆) debe ser diferente de cero.",
    theory: (
      <div>
        <p>Similar a Cramer 2x2 pero con determinantes 3x3 calculados usando Sarrus:</p>
        <div style={{ fontFamily: "monospace", padding: "10px", background: "rgba(0,0,0,0.2)", borderRadius: "6px", margin: "10px 0" }}>
          x = ∆x / ∆ , y = ∆y / ∆ , z = ∆z / ∆
        </div>
      </div>
    ),
    example: (
      <div>
        <p>Sistema de Ecuaciones:</p>
        <div style={{ margin: "10px 0" }}>
          2x + 1y - 1z = 8 <br />
          1x - 2y + 1z = -3 <br />
          3x + 1y - 2z = 5
        </div>
        <p><strong>Cálculo:</strong></p>
        <ul>
          <li>∆ = 8 (det del sistema)</li>
          <li>∆x = 8 &rarr; x = 8/8 = 1</li>
          <li>∆y = 16 &rarr; y = 16/8 = 2</li>
          <li>∆z = 24 &rarr; z = 24/8 = 3</li>
        </ul>
        <p><strong>Resultado al calcular:</strong> x = 1, y = 2, z = 3</p>
      </div>
    )
  },
  gauss_jordan_cube: {
    title: "Gauss Jordan 3x3",
    requirements: "El determinante del sistema debe ser diferente de cero (solución única).",
    theory: (
      <div>
        <p>Se realiza eliminación por operaciones elementales de fila en la matriz aumentada [A | B] para transformarla en [I | X], donde I es la matriz identidad y X son las soluciones.</p>
        <p><strong>Pivoteo Parcial:</strong> Se intercambian filas para situar el valor absoluto mayor de la columna activa en la diagonal antes de normalizar, asegurando estabilidad numérica.</p>
      </div>
    ),
    example: (
      <div>
        <p>Sistema de Ecuaciones:</p>
        <div style={{ margin: "10px 0" }}>
          0x + 2y + 1z = 4 <br />
          1x + 1y + 2z = 6 <br />
          2x + 1y + 1z = 5
        </div>
        <p><strong>Pasos Clave:</strong></p>
        <ul>
          <li>Intercambiar F1 con F3 (mayor valor en columna 1: 2).</li>
          <li>Normalizar columna 1, hacer ceros en F2.</li>
          <li>Intercambiar F2 con F3 (mayor en columna 2: 2).</li>
          <li>Normalizar columna 2 y eliminar otros.</li>
          <li>Normalizar columna 3 y despejar.</li>
        </ul>
        <p><strong>Resultado al calcular:</strong> x = 1, y = 1, z = 2</p>
      </div>
    )
  }
};
