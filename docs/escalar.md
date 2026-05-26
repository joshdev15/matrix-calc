# Multiplicación de una Matriz por un Escalar

La multiplicación escalar es una operación que consiste en multiplicar cada uno de los elementos de una matriz por un número real único (llamado escalar).

## Requisitos de Operación
Esta operación **no tiene restricciones** de dimensiones. Se puede aplicar a cualquier matriz de tamaño $m \times n$, y la matriz resultante tendrá las mismas dimensiones $m \times n$.

## Método de Cálculo
Dada una matriz $A$ y un escalar $k$, la matriz resultante $C = k \cdot A$ se obtiene multiplicando cada elemento $a_{ij}$ de la matriz original por $k$:

$$c_{ij} = k \cdot a_{ij}$$

Donde:
- $i$ representa el índice de la fila.
- $j$ representa el índice de la columna.

---

## Ejemplo Práctico

Sea la matriz $A$ y el escalar $k = 3$:

$$A = \begin{pmatrix} 2 & -1 & 0 \\ 4 & 5 & -3 \end{pmatrix}$$

### Paso a Paso

Multiplicamos cada elemento de la matriz $A$ por $k = 3$:

- **Celda (1,1):** $3 \cdot 2 = 6$
- **Celda (1,2):** $3 \cdot (-1) = -3$
- **Celda (1,3):** $3 \cdot 0 = 0$
- **Celda (2,1):** $3 \cdot 4 = 12$
- **Celda (2,2):** $3 \cdot 5 = 15$
- **Celda (2,3):** $3 \cdot (-3) = -9$

### Resultado

$$C = 3 \cdot A = \begin{pmatrix} 6 & -3 & 0 \\ 12 & 15 & -9 \end{pmatrix}$$
