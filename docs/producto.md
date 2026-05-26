# Producto de Matrices (Multiplicación de Matrices)

El producto de dos matrices es una operación que consiste en multiplicar las filas de la primera matriz por las columnas de la segunda matriz.

## Requisitos de Operación
Para poder multiplicar dos matrices, $A$ y $B$, **el número de columnas de la primera matriz $A$ debe ser igual al número de filas de la segunda matriz $B$**.

Si:
- $A$ tiene dimensiones $m \times p$.
- $B$ tiene dimensiones $p \times n$.

La multiplicación es posible y la matriz resultante $C = A \times B$ tendrá dimensiones $m \times n$.

---

## Ejemplo Práctico (Matriz Irregular 3x2 por 2x3)

Sean las matrices:

$$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix}, \quad B = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$$

Dado que la matriz $A$ tiene tamaño $3 \times 2$ (2 columnas) y la matriz $B$ tiene tamaño $2 \times 3$ (2 filas), el requisito de multiplicación se cumple (2 = 2). La matriz resultante $C$ tendrá dimensiones $3 \times 3$.

### Paso a Paso

1. **Fila 1 de A por las columnas de B:**
   - **Celda (1,1):** $(1 \cdot 1) + (2 \cdot 4) = 1 + 8 = 9$
   - **Celda (1,2):** $(1 \cdot 2) + (2 \cdot 5) = 2 + 10 = 12$
   - **Celda (1,3):** $(1 \cdot 3) + (2 \cdot 6) = 3 + 12 = 15$

2. **Fila 2 de A por las columnas de B:**
   - **Celda (2,1):** $(3 \cdot 1) + (4 \cdot 4) = 3 + 16 = 19$
   - **Celda (2,2):** $(3 \cdot 2) + (4 \cdot 5) = 6 + 20 = 26$
   - **Celda (2,3):** $(3 \cdot 3) + (4 \cdot 6) = 9 + 24 = 33$

3. **Fila 3 de A por las columnas de B:**
   - **Celda (3,1):** $(5 \cdot 1) + (6 \cdot 4) = 5 + 24 = 29$
   - **Celda (3,2):** $(5 \cdot 2) + (6 \cdot 5) = 10 + 30 = 40$
   - **Celda (3,3):** $(5 \cdot 3) + (6 \cdot 6) = 15 + 36 = 51$

### Resultado

$$C = A \times B = \begin{pmatrix} 9 & 12 & 15 \\ 19 & 26 & 33 \\ 29 & 40 & 51 \end{pmatrix}$$
