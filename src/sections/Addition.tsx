import { useState } from "react";
import AppInput from "../components/AppInput";
import styles from "../styles/general.module.scss";
import { useMatrix } from "../hooks/useMatrix";

const Addition = () => {
  const { base, setBase, values, updateValue, loadExample, getMatrix } = useMatrix(2);
  const [finalResult, setResult] = useState<number[][]>();

  const getFormData = () => {
    setResult(undefined);

    // Obtener matrices del hook
    const orderedArrayA = getMatrix("a", base, base);
    const orderedArrayB = getMatrix("b", base, base);

    // Calculando resultado
    const resultArray: number[][] = Array.from({ length: base }).map(() => []);
    orderedArrayA.forEach((i, aidx) => {
      i.forEach((num, bidx) => {
        resultArray[aidx][bidx] = num + orderedArrayB[aidx][bidx];
      });
    });

    // Mostrar resultados
    setResult(resultArray);
  };

  return (
    <div className={styles.wrapper} id="wrapper">
      <h1 className={styles.mb}>Suma</h1>
      <div className={styles.mb}>
        <button className={styles.mr} onClick={() => setBase(2)}>
          Base 2
        </button>
        <button className={styles.mr} onClick={() => setBase(3)}>
          Base 3
        </button>
        <button onClick={() => loadExample("add", base)}>
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

        <div className={styles.operator}>+</div>

        <table>
          <tbody>
            {Array.from({ length: base }).map((_: any, indexOne: number) => (
              <tr key={`ArrB${indexOne}`}>
                {Array.from({ length: base }).map(
                  (_: any, indexTwo: number) => (
                    <td key={`b-${indexOne}-${indexTwo}`}>
                      <AppInput
                        id={`b-${indexOne}-${indexTwo}`}
                        value={values[`b-${indexOne}-${indexTwo}`]}
                        onChange={(val) => updateValue(`b-${indexOne}-${indexTwo}`, val)}
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
        <button onClick={getFormData}>Sumar</button>
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

export default Addition;
