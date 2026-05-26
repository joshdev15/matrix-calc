# Suma de Matrices

La suma de matrices es una operación lineal que consiste en sumar cada uno de los elementos correspondientes de dos o más matrices que tienen las mismas dimensiones.

## Requisitos de Operación
Para poder realizar la suma de dos matrices, $A$ y $B$, estas **deben tener las mismas dimensiones** (mismo número de filas y columnas). Si $A$ es de tamaño $m \times n$, entonces $B$ también debe ser de tamaño $m \times n$. La matriz resultante $C = A + B$ tendrá también dimensiones $m \times n$.

## Método de Cálculo
Cada elemento $c_{ij}$ de la matriz resultante se obtiene sumando los elementos correspondientes de $A$ y $B$:

$$c_{ij} = a_{ij} + b_{ij}$$

Donde:
- $i$ representa el índice de la fila.
- $j$ representa el índice de la columna.

---

## Ejemplo Práctico (2x2)

Sean las matrices:

$$A = \begin{pmatrix} 2 & 4 \\ 1 & -3 \end{pmatrix}, \quad B = \begin{pmatrix} 5 & 0 \\ -2 & 6 \end{pmatrix}$$

### Paso a Paso

1. **Celda (1,1):** Sumar primera fila, primera columna
   $$c_{11} = a_{11} + b_{11} = 2 + 5 = 7$$

2. **Celda (1,2):** Sumar primera fila, segunda columna
   $$c_{12} = a_{12} + b_{12} = 4 + 0 = 4$$

3. **Celda (2,1):** Sumar segunda fila, primera columna
   $$c_{21} = a_{21} + b_{21} = 1 + (-2) = -1$$

4. **Celda (2,2):** Sumar segunda fila, segunda columna
   $$c_{22} = a_{22} + b_{22} = -3 + 6 = 3$$

### Resultado

$$C = A + B = \begin{pmatrix} 7 & 4 \\ -1 & 3 \end{pmatrix}$$
