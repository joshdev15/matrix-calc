import { useState } from "react";
import AppInput from "../components/AppInput";
import styles from "../styles/general.module.scss";
import { getDeterminant } from "../constants/functions";
import { useMatrix } from "../hooks/useMatrix";

const Determinant = () => {
  const { base, setBase, values, updateValue, loadExample, getMatrix } = useMatrix(2);
  const [finalResult, setResult] = useState<number[][]>();

  const getFormData = () => {
    setResult(undefined);

    // Obtener la matriz del hook
    const ordered = getMatrix("a", base, base);

    // Obtener el determinante (ya es una matriz 2D [[resultado]])
    const systemDet = getDeterminant(ordered, base);

    // Mostrar resultados
    setResult(systemDet as number[][]);
  };

  return (
    <div className={styles.wrapper} id="wrapper">
      <h1 className={styles.mb}>Determinante</h1>
      <div className={styles.mb}>
        <button className={styles.mr} onClick={() => setBase(2)}>
          Base 2
        </button>
        <button className={styles.mr} onClick={() => setBase(3)}>
          Base 3
        </button>
        <button onClick={() => loadExample("det", base)}>
          Cargar Ejemplo
        </button>
      </div>

      <div className={styles.arrayContainer}>
        <table>
          <tbody>
            {Array.from({ length: base }).map((_: any, indexOne: number) => (
              <tr key={`ArrA${indexOne}`}>
                {Array.from({ length: base }).map(
                  (_: any, indexTwo: number) => (
                    <td key={`a-${indexOne}-${indexTwo}`}>
                      <AppInput
                        id={`a-${indexOne}-${indexTwo}`}
                        value={values[`a-${indexOne}-${indexTwo}`]}
                        onChange={(val) => updateValue(`a-${indexOne}-${indexTwo}`, val)}
                      />
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.mt}>
        <button onClick={getFormData}>Determinar</button>
      </div>

      {finalResult !== undefined && (
        <table className={styles.mt}>
          <tbody>
            {finalResult.map((level, index) => (
              <tr key={`arr${index}`}>
                {level.map((value: number, indexValue: number) => (
                  <td
                    className={styles.squareInput}
                    key={`result-${index}-${indexValue}`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Determinant;
