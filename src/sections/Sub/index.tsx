import { useState } from "react";
import AppInput from "../../components/AppInput";
import styles from "./styles.module.scss";
import { cleanArrayByKey } from "../../constants/functions";

const Sub = () => {
  const [base, setBase] = useState(2);
  const [finalResult, setResult] = useState<never[][]>();

  const getFormData = () => {
    // Obtener elementos visuales
    setResult(undefined);
    const inputs = document.querySelectorAll("input");

    // Limpieza del Arreglo A
    const orderedArrayA = cleanArrayByKey("a-", base, inputs);

    // Limpieza del Arreglo B
    const orderedArrayB = cleanArrayByKey("b-", base, inputs);

    // Calculando resultado
    const resultArray = Array.from({ length: base }).map((_) => []);
    orderedArrayA.forEach((i: any, aidx: number) => {
      i.forEach((num: any, bidx: number) => {
        resultArray[aidx][bidx] = (num - orderedArrayB[aidx][bidx]) as never;
      });
    });

    setResult(resultArray);
  };

  return (
    <div className={styles.wrapper} id="wrapper">
      <h1 style={{ marginBottom: 10 }}>Resta</h1>
      <div style={{ marginBottom: 10 }}>
        <button className={styles.mr} onClick={() => setBase(2)}>
          Base 2
        </button>
        <button onClick={() => setBase(3)}>Base 3</button>
      </div>

      <div style={{ display: "flex" }}>
        <table style={{ marginRight: 20 }}>
          <tbody>
            {Array.from({ length: base }).map((_: any, indexOne: number) => (
              <tr key={`ArrA${indexOne}`}>
                {Array.from({ length: base }).map(
                  (_: any, indexTwo: number) => (
                    <td key={`a-${indexOne}-${indexTwo}`}>
                      <AppInput id={`a-${indexOne}-${indexTwo}`} />
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.operator}>-</div>

        <table style={{ marginLeft: 20 }}>
          <tbody>
            {Array.from({ length: base }).map((_: any, indexOne: number) => (
              <tr key={`ArrB${indexOne}`}>
                {Array.from({ length: base }).map(
                  (_: any, indexTwo: number) => (
                    <td key={`b-${indexOne}-${indexTwo}`}>
                      <AppInput id={`b-${indexOne}-${indexTwo}`} />
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.mt}>
        <button onClick={getFormData}>Restar</button>
      </div>

      {finalResult !== undefined && (
        <table style={{ marginTop: 20 }}>
          <tbody>
            {finalResult.map((level, index) => (
              <tr key={`arr${index}`}>
                {level.map((value: any, indexValue: number) => (
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

export default Sub;
