# Resta de Matrices

La resta (o sustracción) de matrices consiste en restar los elementos correspondientes de dos matrices que tienen la misma dimensión.

## Requisitos de Operación
Al igual que con la suma, para poder restar dos matrices $A$ y $B$, estas **deben tener las mismas dimensiones** (mismo número de filas y columnas). Si $A$ es de tamaño $m \times n$, entonces $B$ también debe ser de tamaño $m \times n$. La matriz resultante $C = A - B$ tendrá dimensiones $m \times n$.

## Método de Cálculo
Cada elemento $c_{ij}$ de la matriz resultante se obtiene restando el elemento correspondiente de la segunda matriz al de la primera:

$$c_{ij} = a_{ij} - b_{ij}$$

Donde:
- $i$ representa el índice de la fila.
- $j$ representa el índice de la columna.

---

## Ejemplo Práctico (2x2)

Sean las matrices:

$$A = \begin{pmatrix} 8 & 3 \\ -2 & 5 \end{pmatrix}, \quad B = \begin{pmatrix} 3 & -1 \\ 4 & 2 \end{pmatrix}$$

### Paso a Paso

1. **Celda (1,1):** Restar primera fila, primera columna
   $$c_{11} = a_{11} - b_{11} = 8 - 3 = 5$$

2. **Celda (1,2):** Restar primera fila, segunda columna
   $$c_{12} = a_{12} - b_{12} = 3 - (-1) = 3 + 1 = 4$$

3. **Celda (2,1):** Restar segunda fila, primera columna
   $$c_{21} = a_{21} - b_{21} = -2 - 4 = -6$$

4. **Celda (2,2):** Restar segunda fila, segunda columna
   $$c_{22} = a_{22} - b_{22} = 5 - 2 = 3$$

### Resultado

$$C = A - B = \begin{pmatrix} 5 & 4 \\ -6 & 3 \end{pmatrix}$$
