import { useState } from "react";
import AppInput from "../../components/AppInput";
import styles from "./styles.module.scss";

const Det = () => {
  const [base, setBase] = useState(2);
  const [finalResult, setResult] = useState<never[][]>();

  const getFormData = () => {
    // Obtener elementos visuales
    setResult(undefined);
    const inputs = document.querySelectorAll("input");

    // Limpieza del Arreglo A
    const ordered = Array.from({ length: base }).map((_) => []);
    const arrayA = Array.from(inputs).filter((element) =>
      element.id.includes("a-"),
    );

    arrayA.forEach((item) => {
      const id = item.id.split("-");
      const arrLevel = parseInt(id[1]);
      ordered[arrLevel].push(parseInt(item.value) as never);
    });

    if (base === 2) {
      const firstDiagon = ordered[0][0] * ordered[1][1];
      const secondDiagon = ordered[1][0] * ordered[0][1];
      const result = firstDiagon - secondDiagon;
      setResult([[result]] as never);
    }

    if (base === 3) {
      const firstDiagon = ordered[0][0] * ordered[1][1] * ordered[2][2];
      const secondDiagon = ordered[1][0] * ordered[2][1] * ordered[0][2];
      const thirdDiagon = ordered[2][0] * ordered[0][1] * ordered[1][2];
      const totalNormal = firstDiagon + secondDiagon + thirdDiagon;

      const reverseFirstDiagon = ordered[0][2] * ordered[1][1] * ordered[2][0];
      const reverseSecondDiagon = ordered[1][2] * ordered[2][1] * ordered[0][0];
      const reverseThirdDiagon = ordered[2][2] * ordered[0][1] * ordered[1][0];
      const totalReverse =
        reverseFirstDiagon + reverseSecondDiagon + reverseThirdDiagon;

      const result = totalNormal - totalReverse;
      setResult([[result]] as never);
    }
  };

  return (
    <div className={styles.wrapper} id="wrapper">
      <h1 style={{ marginBottom: 10 }}>Determinante</h1>
      <div style={{ marginBottom: 10 }}>
        <button className={styles.mr} onClick={() => setBase(2)}>
          Base 2
        </button>
        <button onClick={() => setBase(3)}>Base 3</button>
      </div>

      <div style={{ display: "flex" }}>
        <table>
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
      </div>

      <div className={styles.mt}>
        <button onClick={getFormData}>Determinar</button>
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

export default Det;
