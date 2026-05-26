import { useState } from "react";
import AppInput from "../components/AppInput";
import styles from "../styles/general.module.scss";
import { useMatrix } from "../hooks/useMatrix";

/** GaussJordanCube component is used to solve a system of 3 linear equations using Gauss-Jordan elimination */
const GaussJordanCube = () => {
  const { base, values, updateValue, loadExample, getMatrix } = useMatrix(3);
  const [finalResult, setResult] = useState<number[][]>();
  const [error, setError] = useState<string | null>(null);
  const placeholderArray = ["x", "y", "z"];

  const getFormData = () => {
    setResult(undefined);
    setError(null);

    // Obtener matrices del hook
    const orderedA = getMatrix("a", base, base);
    const orderedB = getMatrix("b", base, 1);

    // Construir la matriz aumentada 3x4: [A | B]
    const M: number[][] = [];
    for (let i = 0; i < base; i++) {
      const rowA = orderedA[i] || [];
      const rowB = orderedB[i] || [];
      const valB = typeof rowB[0] === "number" ? rowB[0] : 0;
      
      M.push([
        rowA[0] !== undefined ? rowA[0] : 0,
        rowA[1] !== undefined ? rowA[1] : 0,
        rowA[2] !== undefined ? rowA[2] : 0,
        valB,
      ]);
    }

    // Algoritmo de Gauss-Jordan con Pivoteo Parcial
    for (let i = 0; i < base; i++) {
      // 1. Pivoteo parcial
      let maxRow = i;
      for (let k = i + 1; k < base; k++) {
        if (Math.abs(M[k][i]) > Math.abs(M[maxRow][i])) {
          maxRow = k;
        }
      }

      // Si el elemento pivote es cero o extremadamente cercano a cero, la matriz es singular (no hay solución única)
      if (Math.abs(M[maxRow][i]) < 1e-9) {
        setError("El sistema no tiene una solución única (la matriz es singular o tiene soluciones infinitas).");
        return;
      }

      // Intercambiar la fila actual i con la fila del pivote maxRow
      if (maxRow !== i) {
        const temp = M[i];
        M[i] = M[maxRow];
        M[maxRow] = temp;
      }

      // 2. Normalizar la fila del pivote: hacer que el elemento de la diagonal M[i][i] sea 1
      const pivotVal = M[i][i];
      for (let j = i; j <= base; j++) {
        M[i][j] = M[i][j] / pivotVal;
      }

      // 3. Eliminación: hacer cero los demás elementos en la columna i para todas las otras filas
      for (let k = 0; k < base; k++) {
        if (k !== i) {
          const factor = M[k][i];
          for (let j = i; j <= base; j++) {
            M[k][j] = M[k][j] - factor * M[i][j];
          }
        }
      }
    }

    // Guardar el resultado
    setResult(M);
  };

  const formatValue = (value: number) => {
    const formatted = parseFloat(value.toFixed(4));
    return isNaN(formatted) ? 0 : formatted;
  };

  return (
    <div className={styles.wrapper} id="wrapper">
      <h1 className={styles.mb}>Gauss Jordan 3x3</h1>
      <div className={styles.mb}>
        <button onClick={() => loadExample("gauss_jordan_cube")}>
          Cargar Ejemplo
        </button>
      </div>

      <div className={styles.arrayContainer}>
        <table>
          <tbody>
            {Array.from({ length: base }).map((_: any, indexOne: number) => (
              <tr key={`ArrB${indexOne}`}>
                {Array.from({ length: base }).map(
                  (_: any, indexTwo: number) => (
                    <td
                      key={`a-${indexOne}-${indexTwo}`}
                      className={indexTwo === base - 1 ? styles.lastSpace : ""}
                    >
                      <AppInput
                        id={`a-${indexOne}-${indexTwo}`}
                        value={values[`a-${indexOne}-${indexTwo}`]}
                        placeholder={placeholderArray[indexTwo]}
                        onChange={(val) => updateValue(`a-${indexOne}-${indexTwo}`, val)}
                      />
                    </td>
                  ),
                )}

                {Array.from({ length: 1 }).map((_: any, indexTwo: number) => (
                  <td
                    key={`b-${indexOne}-${indexTwo}`}
                    className={styles.independent}
                  >
                    <AppInput
                      id={`b-${indexOne}-${indexTwo}`}
                      value={values[`b-${indexOne}-${indexTwo}`]}
                      placeholder="i"
                      onChange={(val) => updateValue(`b-${indexOne}-${indexTwo}`, val)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.mt}>
        <button onClick={getFormData}>Determinar</button>
      </div>

      {error && (
        <div className={styles.errorMsg}>
          {error}
        </div>
      )}

      {finalResult !== undefined && (
        <>
          <table className={styles.mt}>
            <tbody>
              {finalResult.map((level, index) => (
                <tr key={`arr${index}`}>
                  {level.map((value: number, indexValue: number) => (
                    <td
                      className={styles.squareInput}
                      key={`result-${index}-${indexValue}`}
                    >
                      {formatValue(value)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default GaussJordanCube;
