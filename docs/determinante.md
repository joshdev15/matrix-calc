# Determinante de una Matriz

El determinante es un valor escalar único que se puede calcular a partir de una matriz cuadrada y que resume propiedades importantes de la matriz (como si tiene inversa o si el sistema de ecuaciones asociado tiene solución única).

## Caso 1: Matriz de Orden 2x2

Para una matriz cuadrada de orden 2:

$$A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$$

El determinante se calcula multiplicando los elementos de la diagonal principal y restando el producto de los elementos de la diagonal secundaria:

$$\det(A) = |A| = a \cdot d - b \cdot c$$

### Ejemplo Práctico (2x2)

Sea la matriz:

$$A = \begin{pmatrix} 3 & 7 \\ 2 & 5 \end{pmatrix}$$

#### Paso a Paso
$$\det(A) = (3 \cdot 5) - (7 \cdot 2) = 15 - 14 = 1$$

---

## Caso 2: Matriz de Orden 3x3 (Método de Sarrus)

Para una matriz cuadrada de orden 3:

$$A = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}$$

El Método de Sarrus consiste en sumar el producto de las diagonales principales y restar el producto de las diagonales inversas. 

### Fórmula de Sarrus

$$\det(A) = (a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32}) - (a_{13}a_{22}a_{31} + a_{11}a_{23}a_{32} + a_{12}a_{21}a_{33})$$

### Ejemplo Práctico (3x3)

Sea la matriz:

$$A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$$

#### Paso a Paso

1. **Diagonales Principales:**
   - Diagonal 1: $1 \cdot 1 \cdot 0 = 0$
   - Diagonal 2: $2 \cdot 4 \cdot 5 = 40$
   - Diagonal 3: $3 \cdot 0 \cdot 6 = 0$
   - **Suma Principales:** $0 + 40 + 0 = 40$

2. **Diagonales Inversas:**
   - Diagonal Inversa 1: $3 \cdot 1 \cdot 5 = 15$
   - Diagonal Inversa 2: $1 \cdot 4 \cdot 6 = 24$
   - Diagonal Inversa 3: $2 \cdot 0 \cdot 0 = 0$
   - **Suma Inversas:** $15 + 24 + 0 = 39$

3. **Determinante:**
   $$\det(A) = 40 - 39 = 1$$
