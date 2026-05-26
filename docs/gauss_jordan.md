# Eliminación de Gauss-Jordan (Sistemas 3x3)

El método de eliminación de Gauss-Jordan es un algoritmo del álgebra lineal para resolver sistemas de ecuaciones lineales. Consiste en transformar la matriz aumentada del sistema en una matriz en forma escalonada reducida por renglones (matriz identidad en la parte izquierda) mediante operaciones elementales de fila.

## Requisitos de Operación
Para que el sistema de ecuaciones tenga una solución única, el determinante de la matriz de coeficientes $A$ debe ser distinto de cero ($\det(A) \neq 0$). Si $\det(A) = 0$, el sistema no tiene una solución única (puede ser incompatible o indeterminado).

## Operaciones Elementales de Fila
Se permiten tres tipos de operaciones para transformar la matriz sin alterar las soluciones del sistema:
1. **Intercambiar** dos filas entre sí ($F_i \leftrightarrow F_j$).
2. **Multiplicar** una fila por un número real no nulo ($F_i \leftarrow k \cdot F_i$).
3. **Sumar o restar** a una fila el múltiplo de otra ($F_i \leftarrow F_i + k \cdot F_j$).

## Importancia del Pivoteo Parcial
Para asegurar la estabilidad numérica y evitar la división por cero, antes de operar cada columna $i$, se busca en las filas inferiores la que posea el coeficiente con mayor valor absoluto en la columna $i$. Si es necesario, se intercambian las filas. Esto previene fallos graves cuando el coeficiente en la diagonal de la fila actual es $0$.

---

## Ejemplo Práctico

Sea el sistema de ecuaciones:

$$\begin{cases} 0x + 2y + 1z = 4 \\ 1x + 1y + 2z = 6 \\ 2x + 1y + 1z = 5 \end{cases}$$

### Paso a Paso

1. **Formar la Matriz Aumentada $[A | B]$:**
   $$\begin{pmatrix} 0 & 2 & 1 & \big| & 4 \\ 1 & 1 & 2 & \big| & 6 \\ 2 & 1 & 1 & \big| & 5 \end{pmatrix}$$

2. **Normalizar Columna 1:**
   - **Pivoteo Parcial:** Buscamos el elemento con mayor valor absoluto en la columna 1. Está en la fila 3 ($2$). Intercambiamos Fila 1 y Fila 3 ($F_1 \leftrightarrow F_3$):
     $$\begin{pmatrix} 2 & 1 & 1 & \big| & 5 \\ 1 & 1 & 2 & \big| & 6 \\ 0 & 2 & 1 & \big| & 4 \end{pmatrix}$$
   - **Dividir Fila 1 por el pivote (2):** ($F_1 \leftarrow F_1 / 2$)
     $$\begin{pmatrix} 1 & 0.5 & 0.5 & \big| & 2.5 \\ 1 & 1 & 2 & \big| & 6 \\ 0 & 2 & 1 & \big| & 4 \end{pmatrix}$$
   - **Hacer cero en Fila 2:** ($F_2 \leftarrow F_2 - F_1$)
     $$\begin{pmatrix} 1 & 0.5 & 0.5 & \big| & 2.5 \\ 0 & 0.5 & 1.5 & \big| & 3.5 \\ 0 & 2 & 1 & \big| & 4 \end{pmatrix}$$

3. **Normalizar Columna 2:**
   - **Pivoteo Parcial:** Buscamos el mayor en columna 2 de la fila 2 hacia abajo. Es el $2$ de la Fila 3. Intercambiamos Fila 2 y Fila 3 ($F_2 \leftrightarrow F_3$):
     $$\begin{pmatrix} 1 & 0.5 & 0.5 & \big| & 2.5 \\ 0 & 2 & 1 & \big| & 4 \\ 0 & 0.5 & 1.5 & \big| & 3.5 \end{pmatrix}$$
   - **Dividir Fila 2 por el pivote (2):** ($F_2 \leftarrow F_2 / 2$)
     $$\begin{pmatrix} 1 & 0.5 & 0.5 & \big| & 2.5 \\ 0 & 1 & 0.5 & \big| & 2 \\ 0 & 0.5 & 1.5 & \big| & 3.5 \end{pmatrix}$$
   - **Eliminar valores sobre y bajo la diagonal:**
     - Para Fila 1: ($F_1 \leftarrow F_1 - 0.5 \cdot F_2$)
       $$\begin{pmatrix} 1 & 0 & 0.25 & \big| & 1.5 \\ 0 & 1 & 0.5 & \big| & 2 \\ 0 & 0.5 & 1.5 & \big| & 3.5 \end{pmatrix}$$
     - Para Fila 3: ($F_3 \leftarrow F_3 - 0.5 \cdot F_2$)
       $$\begin{pmatrix} 1 & 0 & 0.25 & \big| & 1.5 \\ 0 & 1 & 0.5 & \big| & 2 \\ 0 & 0 & 1.25 & \big| & 2.5 \end{pmatrix}$$

4. **Normalizar Columna 3:**
   - **Dividir Fila 3 por el pivote (1.25):** ($F_3 \leftarrow F_3 / 1.25$)
     $$\begin{pmatrix} 1 & 0 & 0.25 & \big| & 1.5 \\ 0 & 1 & 0.5 & \big| & 2 \\ 0 & 0 & 1 & \big| & 2 \end{pmatrix}$$
   - **Eliminar valores sobre la diagonal:**
     - Para Fila 1: ($F_1 \leftarrow F_1 - 0.25 \cdot F_3$)
       $$\begin{pmatrix} 1 & 0 & 0 & \big| & 1 \\ 0 & 1 & 0.5 & \big| & 2 \\ 0 & 0 & 1 & \big| & 2 \end{pmatrix}$$
     - Para Fila 2: ($F_2 \leftarrow F_2 - 0.5 \cdot F_3$)
       $$\begin{pmatrix} 1 & 0 & 0 & \big| & 1 \\ 0 & 1 & 0 & \big| & 1 \\ 0 & 0 & 1 & \big| & 2 \end{pmatrix}$$

### Solución

La parte derecha de la matriz contiene la solución única:

$$x = 1, \quad y = 1, \quad z = 2$$
