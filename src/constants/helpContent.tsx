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
    requirements: "Las dos matrices deben ser exactamente del mismo tamaño (mismo número de filas y columnas).",
    theory: (
      <div>
        <p>Sumar matrices es muy sencillo: solo tienes que **sumar los números que están en la misma posición** en ambas matrices para obtener el resultado en esa misma posición.</p>
        <p>Por ejemplo, sumas la celda arriba-izquierda de la primera matriz con la celda arriba-izquierda de la segunda.</p>
      </div>
    ),
    example: (
      <div>
        <h4 style={{ color: "var(--accent-color)", margin: "10px 0 5px" }}>Ejemplo 2x2 (Tamaño 2)</h4>
        <p>Sean las matrices:</p>
        <p style={{ fontFamily: "monospace" }}>A = [ [2, 4], [1, -3] ]</p>
        <p style={{ fontFamily: "monospace" }}>B = [ [5, 0], [-2, 6] ]</p>
        <p><strong>Operación paso a paso:</strong></p>
        <ul>
          <li>Arriba-Izquierda: 2 + 5 = <strong>7</strong></li>
          <li>Arriba-Derecha: 4 + 0 = <strong>4</strong></li>
          <li>Abajo-Izquierda: 1 + (-2) = <strong>-1</strong></li>
          <li>Abajo-Derecha: -3 + 6 = <strong>3</strong></li>
        </ul>
        <p><strong>Resultado:</strong> [ [7, 4], [-1, 3] ]</p>

        <h4 style={{ color: "var(--accent-color)", margin: "15px 0 5px" }}>Ejemplo 3x3 (Tamaño 3)</h4>
        <p>Sean las matrices:</p>
        <p style={{ fontFamily: "monospace" }}>A = [ [1, 2, 3], [0, 1, 4], [5, 6, 0] ]</p>
        <p style={{ fontFamily: "monospace" }}>B = [ [2, -1, 1], [3, 0, 2], [1, 4, -2] ]</p>
        <p><strong>Operación paso a paso:</strong></p>
        <ul>
          <li>Fila 1: [1+2, 2+(-1), 3+1] = <strong>[3, 1, 4]</strong></li>
          <li>Fila 2: [0+3, 1+0, 4+2] = <strong>[3, 1, 6]</strong></li>
          <li>Fila 3: [5+1, 6+4, 0+(-2)] = <strong>[6, 10, -2]</strong></li>
        </ul>
        <p><strong>Resultado:</strong> [ [3, 1, 4], [3, 1, 6], [6, 10, -2] ]</p>
      </div>
    )
  },
  sub: {
    title: "Resta de Matrices",
    requirements: "Las dos matrices deben ser exactamente del mismo tamaño (mismo número de filas y columnas).",
    theory: (
      <div>
        <p>Restar matrices es igual de fácil que sumarlas: solo tienes que **restar los números que están en la misma posición** en ambas matrices.</p>
        <p>Ten especial cuidado con los signos negativos al restar (por ejemplo: 3 - (-1) se convierte en 3 + 1 = 4).</p>
      </div>
    ),
    example: (
      <div>
        <h4 style={{ color: "var(--accent-color)", margin: "10px 0 5px" }}>Ejemplo 2x2 (Tamaño 2)</h4>
        <p>Sean las matrices:</p>
        <p style={{ fontFamily: "monospace" }}>A = [ [8, 3], [-2, 5] ]</p>
        <p style={{ fontFamily: "monospace" }}>B = [ [3, -1], [4, 2] ]</p>
        <p><strong>Operación paso a paso:</strong></p>
        <ul>
          <li>Arriba-Izquierda: 8 - 3 = <strong>5</strong></li>
          <li>Arriba-Derecha: 3 - (-1) = 3 + 1 = <strong>4</strong></li>
          <li>Abajo-Izquierda: -2 - 4 = <strong>-6</strong></li>
          <li>Abajo-Derecha: 5 - 2 = <strong>3</strong></li>
        </ul>
        <p><strong>Resultado:</strong> [ [5, 4], [-6, 3] ]</p>

        <h4 style={{ color: "var(--accent-color)", margin: "15px 0 5px" }}>Ejemplo 3x3 (Tamaño 3)</h4>
        <p>Sean las matrices:</p>
        <p style={{ fontFamily: "monospace" }}>A = [ [5, 6, 7], [1, 2, 3], [0, 4, 1] ]</p>
        <p style={{ fontFamily: "monospace" }}>B = [ [2, 1, 3], [-1, 0, 2], [4, 2, -1] ]</p>
        <p><strong>Operación paso a paso:</strong></p>
        <ul>
          <li>Fila 1: [5-2, 6-1, 7-3] = <strong>[3, 5, 4]</strong></li>
          <li>Fila 2: [1-(-1), 2-0, 3-2] = <strong>[2, 2, 1]</strong></li>
          <li>Fila 3: [0-4, 4-2, 1-(-1)] = <strong>[-4, 2, 2]</strong></li>
        </ul>
        <p><strong>Resultado:</strong> [ [3, 5, 4], [2, 2, 1], [-4, 2, 2] ]</p>
      </div>
    )
  },
  esc: {
    title: "Multiplicar por un Escalar",
    requirements: "Se puede aplicar a cualquier matriz, sin importar su tamaño.",
    theory: (
      <div>
        <p>Esta operación consiste en tomar un número suelto (llamado escalar) y **multiplicar cada uno de los números dentro de la matriz por ese número**.</p>
        <p>La matriz resultante mantiene el mismo tamaño original.</p>
      </div>
    ),
    example: (
      <div>
        <h4 style={{ color: "var(--accent-color)", margin: "10px 0 5px" }}>Ejemplo 2x2 con Escalar k = 3</h4>
        <p>Multiplicamos la matriz por k = 3:</p>
        <p style={{ fontFamily: "monospace" }}>Matriz = [ [2, 4], [1, -3] ]</p>
        <p><strong>Cálculo:</strong></p>
        <ul>
          <li>Fila 1: [3*2, 3*4] = <strong>[6, 12]</strong></li>
          <li>Fila 2: [3*1, 3*-3] = <strong>[3, -9]</strong></li>
        </ul>
        <p><strong>Resultado:</strong> [ [6, 12], [3, -9] ]</p>

        <h4 style={{ color: "var(--accent-color)", margin: "15px 0 5px" }}>Ejemplo 3x3 con Escalar k = 3</h4>
        <p>Multiplicamos la matriz por k = 3:</p>
        <p style={{ fontFamily: "monospace" }}>Matriz = [ [2, -1, 0], [4, 5, -3], [1, 0, 2] ]</p>
        <p><strong>Cálculo:</strong></p>
        <ul>
          <li>Fila 1: [3*2, 3*-1, 3*0] = <strong>[6, -3, 0]</strong></li>
          <li>Fila 2: [3*4, 3*5, 3*-3] = <strong>[12, 15, -9]</strong></li>
          <li>Fila 3: [3*1, 3*0, 3*2] = <strong>[3, 0, 6]</strong></li>
        </ul>
        <p><strong>Resultado:</strong> [ [6, -3, 0], [12, 15, -9], [3, 0, 6] ]</p>
      </div>
    )
  },
  product: {
    title: "Producto de Matrices",
    requirements: "El número de columnas de la primera matriz (A) debe ser igual al número de filas de la segunda (B). Las matrices pueden ser rectangulares/irregulares.",
    theory: (
      <div>
        <p>Para multiplicar matrices, no sumamos números correspondientes, sino que realizamos un **producto punto de filas por columnas**.</p>
        <p>Tomamos una fila de la primera matriz, multiplicamos sus elementos uno a uno por los elementos de una columna de la segunda matriz, y sumamos los resultados.</p>
        <p>Si la matriz A es de tamaño 3x2 (3 filas, 2 columnas) y la matriz B es de 2x3 (2 filas, 3 columnas), la multiplicación es posible porque el número de columnas de A (2) coincide con las filas de B (2). La matriz resultante será de 3x3.</p>
      </div>
    ),
    example: (
      <div>
        <p>Sean las matrices irregulares:</p>
        <p style={{ fontFamily: "monospace" }}>A (3x2) = [ [1, 2], [3, 4], [5, 6] ]</p>
        <p style={{ fontFamily: "monospace" }}>B (2x3) = [ [1, 2, 3], [4, 5, 6] ]</p>
        <p><strong>Cálculo paso a paso:</strong></p>
        <ul>
          <li>
            <strong>Fila 1 de A por columnas de B:</strong>
            <ul>
              <li>Celda (1,1): (1*1) + (2*4) = 1 + 8 = <strong>9</strong></li>
              <li>Celda (1,2): (1*2) + (2*5) = 2 + 10 = <strong>12</strong></li>
              <li>Celda (1,3): (1*3) + (2*6) = 3 + 12 = <strong>15</strong></li>
            </ul>
          </li>
          <li>
            <strong>Fila 2 de A por columnas de B:</strong>
            <ul>
              <li>Celda (2,1): (3*1) + (4*4) = 3 + 16 = <strong>19</strong></li>
              <li>Celda (2,2): (3*2) + (4*5) = 6 + 20 = <strong>26</strong></li>
              <li>Celda (2,3): (3*3) + (4*6) = 9 + 24 = <strong>33</strong></li>
            </ul>
          </li>
          <li>
            <strong>Fila 3 de A por columnas de B:</strong>
            <ul>
              <li>Celda (3,1): (5*1) + (6*4) = 5 + 24 = <strong>29</strong></li>
              <li>Celda (3,2): (5*2) + (6*5) = 10 + 30 = <strong>40</strong></li>
              <li>Celda (3,3): (5*3) + (6*6) = 15 + 36 = <strong>51</strong></li>
            </ul>
          </li>
        </ul>
        <p><strong>Resultado final:</strong></p>
        <p style={{ fontFamily: "monospace" }}>[ [9, 12, 15], [19, 26, 33], [29, 40, 51] ]</p>
      </div>
    )
  },
  det: {
    title: "Determinante",
    requirements: "La matriz debe ser cuadrada (mismo número de filas y columnas, ej. 2x2 o 3x3).",
    theory: (
      <div>
        <p>El determinante es un número especial que nos da información sobre la matriz (por ejemplo, si es cero, la matriz no se puede invertir).</p>
        <p><strong>Para 2x2:</strong> Multiplicas en diagonal (arriba-izq * abajo-der) y le restas la otra diagonal (arriba-der * abajo-izq).</p>
        <p><strong>Para 3x3 (Método de Sarrus):</strong> Sumas el producto de las tres diagonales que bajan hacia la derecha, y le restas el producto de las tres diagonales que bajan hacia la izquierda.</p>
      </div>
    ),
    example: (
      <div>
        <h4 style={{ color: "var(--accent-color)", margin: "10px 0 5px" }}>Ejemplo 2x2</h4>
        <p style={{ fontFamily: "monospace" }}>A = [ [3, 7], [2, 5] ]</p>
        <p><strong>Cálculo:</strong> (3 * 5) - (7 * 2) = 15 - 14 = <strong>1</strong></p>

        <h4 style={{ color: "var(--accent-color)", margin: "15px 0 5px" }}>Ejemplo 3x3 (Sarrus)</h4>
        <p style={{ fontFamily: "monospace" }}>A = [ [1, 2, 3], [0, 1, 4], [5, 6, 0] ]</p>
        <p><strong>Cálculo paso a paso:</strong></p>
        <ol>
          <li>Multiplicar diagonales principales (bajan hacia la derecha):
            <ul>
              <li>Fila diagonal 1: 1 * 1 * 0 = 0</li>
              <li>Fila diagonal 2: 2 * 4 * 5 = 40</li>
              <li>Fila diagonal 3: 3 * 0 * 6 = 0</li>
              <li>Suma principales = 0 + 40 + 0 = <strong>40</strong></li>
            </ul>
          </li>
          <li>Multiplicar diagonales secundarias (bajan hacia la izquierda):
            <ul>
              <li>Fila diagonal 1: 3 * 1 * 5 = 15</li>
              <li>Fila diagonal 2: 1 * 4 * 6 = 24</li>
              <li>Fila diagonal 3: 2 * 0 * 0 = 0</li>
              <li>Suma secundarias = 15 + 24 + 0 = <strong>39</strong></li>
            </ul>
          </li>
          <li>Restar los dos resultados: 40 - 39 = <strong>1</strong></li>
        </ol>
        <p><strong>Resultado:</strong> 1</p>
      </div>
    )
  },
  cramer_square: {
    title: "Regla de Cramer 2x2",
    requirements: "El determinante de la matriz de variables (Δ) no debe ser cero.",
    theory: (
      <div>
        <p>Este método sirve para resolver sistemas de ecuaciones de manera directa usando determinantes.</p>
        <div style={{ background: "rgba(99, 102, 241, 0.08)", padding: "12px", borderRadius: "8px", margin: "10px 0", borderLeft: "3px solid var(--accent-color)" }}>
          <strong>¿Qué significa el símbolo Delta (Δ)?</strong>
          <p style={{ margin: "5px 0 0", fontSize: "0.9rem" }}>El triángulo <strong>Δ</strong> es la letra griega <strong>"Delta"</strong>. En álgebra lineal, se usa para representar el <strong>Determinante</strong> (un número único que resume una matriz cuadrada):</p>
          <ul style={{ margin: "5px 0 0", paddingLeft: "20px", fontSize: "0.85rem" }}>
            <li><strong>Δ (Delta general):</strong> El determinante de la matriz formada por los coeficientes que acompañan a las variables.</li>
            <li><strong>Δ<sub>x</sub>, Δ<sub>y</sub> (Deltas específicos):</strong> El determinante obtenido cuando cambias la columna de esa variable (x o y) por los términos independientes (los números del resultado).</li>
          </ul>
        </div>
        <p>Para hallar el valor final de cada letra (x, y), simplemente divides su Delta correspondiente entre el Delta general:</p>
        <div style={{ fontFamily: "monospace", padding: "10px", background: "rgba(0,0,0,0.2)", borderRadius: "6px", margin: "10px 0" }}>
          x = Δ<sub>x</sub> / Δ , y = Δ<sub>y</sub> / Δ
        </div>
      </div>
    ),
    example: (
      <div>
        <p>Sean las ecuaciones:</p>
        <p>1) 2x + 3y = 8</p>
        <p>2) 1x - 2y = -3</p>
        <p><strong>Cálculo paso a paso:</strong></p>
        <ol>
          <li>Calculamos el determinante del sistema (Δ) usando los coeficientes de x e y:
            <br />Δ = (2 * -2) - (3 * 1) = -4 - 3 = <strong>-7</strong>
          </li>
          <li>Calculamos el determinante de x (Δx), cambiando la columna de x por los resultados [8, -3]:
            <br />Δ<sub>x</sub> = (8 * -2) - (3 * -3) = -16 - (-9) = <strong>-7</strong>
          </li>
          <li>Calculamos el determinante de y (Δy), cambiando la columna de y por los resultados [8, -3]:
            <br />Δ<sub>y</sub> = (2 * -3) - (8 * 1) = -6 - 8 = <strong>-14</strong>
          </li>
          <li>Despejamos las variables dividiendo:
            <ul>
              <li>x = Δ<sub>x</sub> / Δ = -7 / -7 = <strong>1</strong></li>
              <li>y = Δ<sub>y</sub> / Δ = -14 / -7 = <strong>2</strong></li>
            </ul>
          </li>
        </ol>
        <p><strong>Resultado:</strong> x = 1, y = 2</p>
      </div>
    )
  },
  cramer_cube: {
    title: "Regla de Cramer 3x3",
    requirements: "El determinante del sistema (Δ) debe ser diferente de cero.",
    theory: (
      <div>
        <p>Es el mismo procedimiento que para 2x2, pero para un sistema de 3 variables (x, y, z) usando determinantes de 3x3:</p>
        <div style={{ background: "rgba(99, 102, 241, 0.08)", padding: "12px", borderRadius: "8px", margin: "10px 0", borderLeft: "3px solid var(--accent-color)" }}>
          <strong>¿Qué significa el símbolo Delta (Δ)?</strong>
          <p style={{ margin: "5px 0 0", fontSize: "0.9rem" }}>El símbolo <strong>Δ (Delta)</strong> representa el <strong>Determinante</strong>:</p>
          <ul style={{ margin: "5px 0 0", paddingLeft: "20px", fontSize: "0.85rem" }}>
            <li><strong>Δ:</strong> Determinante general del sistema (con los coeficientes de x, y, z).</li>
            <li><strong>Δ<sub>x</sub>, Δ<sub>y</sub>, Δ<sub>z</sub>:</strong> Determinantes donde la columna de la variable respectiva se reemplaza por la de resultados.</li>
          </ul>
        </div>
        <p>Para hallar los valores finales, divides su Delta correspondiente entre el Delta general (Δ):</p>
        <div style={{ fontFamily: "monospace", padding: "10px", background: "rgba(0,0,0,0.2)", borderRadius: "6px", margin: "10px 0" }}>
          x = Δ<sub>x</sub> / Δ , y = Δ<sub>y</sub> / Δ , z = Δ<sub>z</sub> / Δ
        </div>
      </div>
    ),
    example: (
      <div>
        <p>Sean las ecuaciones:</p>
        <p>1) 2x + 1y - 1z = 8</p>
        <p>2) 1x - 2y + 1z = -3</p>
        <p>3) 3x + 1y - 2z = 5</p>
        <p><strong>Cálculo paso a paso:</strong></p>
        <ol>
          <li>Calculamos el determinante del sistema (Δ) usando los números que acompañan a x, y, z:
            <br /><strong>Δ = 8</strong> (usando Sarrus)
          </li>
          <li>Calculamos el determinante de x (Δx), sustituyendo la columna de x por los resultados [8, -3, 5]:
            <br /><strong>Δ<sub>x</sub> = 8</strong>
          </li>
          <li>Calculamos el determinante de y (Δy), sustituyendo la columna de y por [8, -3, 5]:
            <br /><strong>Δ<sub>y</sub> = 16</strong>
          </li>
          <li>Calculamos el determinante de z (Δz), sustituyendo la columna de z por [8, -3, 5]:
            <br /><strong>Δ<sub>z</sub> = 24</strong>
          </li>
          <li>Dividimos para hallar el valor final de cada letra:
            <ul>
              <li>x = Δ<sub>x</sub> / Δ = 8 / 8 = <strong>1</strong></li>
              <li>y = Δ<sub>y</sub> / Δ = 16 / 8 = <strong>2</strong></li>
              <li>z = Δ<sub>z</sub> / Δ = 24 / 8 = <strong>3</strong></li>
            </ul>
          </li>
        </ol>
        <p><strong>Resultado:</strong> x = 1, y = 2, z = 3</p>
      </div>
    )
  },
  gauss_jordan_cube: {
    title: "Método de Gauss-Jordan 3x3",
    requirements: "El determinante del sistema debe ser diferente de cero (solución única).",
    theory: (
      <div>
        <p>Este método consiste en transformar la matriz de ecuaciones mediante pasos ordenados (sumando, restando o multiplicando filas) hasta convertir la parte de las variables en una **matriz identidad** (donde hay 1s en la diagonal y 0s en el resto).</p>
        <p>Cuando logramos esto, los números en la columna de resultados se convierten directamente en las soluciones de x, y, z.</p>
        <p><strong>Pivoteo:</strong> Para no dividir entre cero, si el número de la diagonal que queremos usar es 0, intercambiamos esa fila completa por otra fila de abajo que tenga el número más grande.</p>
      </div>
    ),
    example: (
      <div>
        <p>Sean las ecuaciones:</p>
        <p>1) 0x + 2y + 1z = 4</p>
        <p>2) 1x + 1y + 2z = 6</p>
        <p>3) 2x + 1y + 1z = 5</p>
        <p><strong>Pasos del cálculo:</strong></p>
        <ol>
          <li>Escribimos la matriz aumentada:
            <br /><span style={{ fontFamily: "monospace" }}>[ [0, 2, 1 | 4], [1, 1, 2 | 6], [2, 1, 1 | 5] ]</span>
          </li>
          <li>Como en la fila 1 el primer número es 0, hacemos **pivoteo**: la cambiamos por la fila 3 (que empieza con 2, el mayor):
            <br /><span style={{ fontFamily: "monospace" }}>[ [2, 1, 1 | 5], [1, 1, 2 | 6], [0, 2, 1 | 4] ]</span>
          </li>
          <li>Dividimos la fila 1 entre 2 para que empiece con 1:
            <br /><span style={{ fontFamily: "monospace" }}>[ [1, 0.5, 0.5 | 2.5], ... ]</span>
          </li>
          <li>Hacemos operaciones para que las demás celdas de la columna 1 sean 0.</li>
          <li>Repetimos el proceso para la columna 2 y la columna 3 hasta obtener la diagonal de 1s.</li>
        </ol>
        <p><strong>Resultados finales:</strong> x = <strong>1</strong>, y = <strong>1</strong>, z = <strong>2</strong></p>
      </div>
    )
  }
};
