import { useState } from "react";
import AppInput from "../components/AppInput";
import styles from "../styles/general.module.scss";
import { useMatrix } from "../hooks/useMatrix";

const Escalar = () => {
  const { base, setBase, values, updateValue, loadExample, getMatrix, getScalar } = useMatrix(2);
  const [finalResult, setResult] = useState<number[][]>();

  const getFormData = () => {
    setResult(undefined);

    // Obtener escalar y matriz
    const k = getScalar();
    const orderedArrayB = getMatrix("b", base, base);

    // Calculando resultado
    const resultArray: number[][] = Array.from({ length: base }).map(() => []);
    orderedArrayB.forEach((i, aidx) => {
      i.forEach((num, bidx) => {
        resultArray[aidx][bidx] = num * k;
      });
    });

    setResult(resultArray);
  };

  return (
    <div className={styles.wrapper} id="wrapper">
      <h1 className={styles.mb}>Escalar</h1>
      <div className={styles.mb}>
        <button className={styles.mr} onClick={() => setBase(2)}>
          Base 2
        </button>
        <button className={styles.mr} onClick={() => setBase(3)}>
          Base 3
        </button>
        <button onClick={() => loadExample("esc", base)}>
          Cargar Ejemplo
        </button>
      </div>

      <div className={styles.arrayContainer}>
        <AppInput
          id="escalar"
          value={values["scalar"]}
          onChange={(val) => updateValue("scalar", val)}
          placeholder="k"
        />

        <div className={styles.operator}>*</div>

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
        <button className={styles.mr} onClick={getFormData}>
          Multiplicar
        </button>
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

export default Escalar;
