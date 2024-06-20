import { useState } from "react";
import AppInput from "../components/AppInput";
import styles from "../styles/general.module.scss";
import { cleanArrayByKey } from "../constants/functions";

const Escalar = () => {
  const [base, setBase] = useState(2);
  const [finalResult, setResult] = useState<never[][]>();

  const getFormData = () => {
    setResult(undefined);

    // Obtener elementos visuales
    const inputs = document.querySelectorAll("input");

    // Obtener el valor escalar
    const escalar = Array.from(inputs).find((el) => el.id.includes("escalar"));
    if (escalar === undefined) return;

    // Limpieza del Arreglo B
    const orderedArrayB = cleanArrayByKey("b-", base, inputs);

    // Calculando resultado
    const resultArray = Array.from({ length: base }).map((_) => []);
    orderedArrayB.forEach((i: any, aidx: number) => {
      i.forEach((num: any, bidx: number) => {
        resultArray[aidx][bidx] = (num * parseInt(escalar.value)) as never;
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
      </div>

      <div className={styles.arrayContainer}>
        <AppInput id={`escalar`} />

        <div className={styles.operator}>*</div>

        <table>
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
        <button className={styles.mr} onClick={getFormData}>
          Escalar
        </button>
      </div>

      {finalResult !== undefined && (
        <table className={styles.mt}>
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

export default Escalar;
