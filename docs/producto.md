# Producto de Matrices (Multiplicación de Matrices)

El producto de dos matrices es una operación que consiste en multiplicar las filas de la primera matriz por las columnas de la segunda matriz.

## Requisitos de Operación
Para poder multiplicar dos matrices, $A$ y $B$, **el número de columnas de la primera matriz $A$ debe ser igual al número de filas de la segunda matriz $B$**.

Si:
- $A$ tiene dimensiones $m \times p$.
- $B$ tiene dimensiones $p \times n$.

Entonces la multiplicación es posible y la matriz resultante $C = A \times B$ tendrá dimensiones $m \times n$.

## Método de Cálculo
Cada elemento $c_{ij}$ de la matriz resultante se calcula como el producto punto de la fila $i$ de la matriz $A$ y la columna $j$ de la matriz $B$:

$$c_{ij} = \sum_{k=1}^{p} a_{ik} \cdot b_{kj} = a_{i1}b_{1j} + a_{i2}b_{2j} + \dots + a_{ip}b_{pj}$$

---

## Ejemplo Práctico (2x2)

Sean las matrices:

$$A = \begin{pmatrix} 2 & 3 \\ 1 & 0 \end{pmatrix}, \quad B = \begin{pmatrix} 4 & -2 \\ 5 & 1 \end{pmatrix}$$

Dado que $A$ es $2 \times 2$ y $B$ es $2 \times 2$, el número de columnas de $A$ (2) es igual al número de filas de $B$ (2), por lo que el resultado $C$ será también de tamaño $2 \times 2$.

### Paso a Paso

1. **Celda (1,1):** Fila 1 de A por Columna 1 de B
   $$c_{11} = (2 \cdot 4) + (3 \cdot 5) = 8 + 15 = 23$$

2. **Celda (1,2):** Fila 1 de A por Columna 2 de B
   $$c_{12} = (2 \cdot -2) + (3 \cdot 1) = -4 + 3 = -1$$

3. **Celda (2,1):** Fila 2 de A por Columna 1 de B
   $$c_{21} = (1 \cdot 4) + (0 \cdot 5) = 4 + 0 = 4$$

4. **Celda (2,2):** Fila 2 de A por Columna 2 de B
   $$c_{22} = (1 \cdot -2) + (0 \cdot 1) = -2 + 0 = -2$$

### Resultado

$$C = A \times B = \begin{pmatrix} 23 & -1 \\ 4 & -2 \end{pmatrix}$$
