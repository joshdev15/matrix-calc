# Regla de Cramer

La Regla de Cramer es un método algebraico para resolver sistemas de ecuaciones lineales compatibles determinados (con una única solución) utilizando determinantes.

## Requisitos de Operación
Para poder aplicar la Regla de Cramer:
1. El número de ecuaciones debe ser igual al número de incógnitas.
2. **El determinante del sistema ($\Delta$) debe ser distinto de cero ($\Delta \neq 0$)**. Si el determinante es cero, el sistema es incompatible o indeterminado, y no se puede resolver por este método.

## Principio Teórico
Para cada incógnita $x_k$, su valor se obtiene dividiendo el determinante de la matriz asociada a esa incógnita ($\Delta_k$) por el determinante del sistema ($\Delta$):

$$x_k = \frac{\Delta_k}{\Delta}$$

Donde la matriz de $\Delta_k$ se forma reemplazando la columna de coeficientes de la variable $x_k$ por la columna de términos independientes (valores después del signo de igualdad).

---

## Ejemplo Práctico (Sistema 2x2)

Sea el sistema:

$$\begin{cases} 2x + 3y = 8 \\ 1x - 2y = -3 \end{cases}$$

### Paso a Paso

1. **Determinante del Sistema ($\Delta$):**
   $$\Delta = \begin{vmatrix} 2 & 3 \\ 1 & -2 \end{vmatrix} = (2 \cdot -2) - (3 \cdot 1) = -4 - 3 = -7$$

2. **Determinante de $x$ ($\Delta_x$):** (Reemplazar columna de $x$ por $[8, -3]$)
   $$\Delta_x = \begin{vmatrix} 8 & 3 \\ -3 & -2 \end{vmatrix} = (8 \cdot -2) - (3 \cdot -3) = -16 - (-9) = -7$$

3. **Determinante de $y$ ($\Delta_y$):** (Reemplazar columna de $y$ por $[8, -3]$)
   $$\Delta_y = \begin{vmatrix} 2 & 8 \\ 1 & -3 \end{vmatrix} = (2 \cdot -3) - (8 \cdot 1) = -6 - 8 = -14$$

4. **Calcular Incógnitas:**
   $$x = \frac{\Delta_x}{\Delta} = \frac{-7}{-7} = 1$$
   $$y = \frac{\Delta_y}{\Delta} = \frac{-14}{-7} = 2$$

### Solución
$$x = 1, \quad y = 2$$
