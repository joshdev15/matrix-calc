import { useState } from "react";
import AppInput from "../../components/AppInput";
import styles from "./styles.module.scss";
import { cleanArrayByKey, getDeterminant } from "../../constants/functions";

const CramerSquare = () => {
  const [base] = useState(2);
  const [finalResult, setResult] = useState<never[][]>();
  const placeholderArray = ["x", "y", "z"];

  const getFormData = () => {
    // Obtener elementos visuales
    setResult(undefined);
    const inputs = document.querySelectorAll("input");

    // Limpieza del Arreglo A
    const orderedA = cleanArrayByKey("a-", base, inputs);

    // Limpieza del Arreglo B
    const orderedB = cleanArrayByKey("b-", base, inputs);

    // Copiando arreglos en la memoria para cada caso
    const copyForX = orderedA.map((el) => el.map((innerEl) => innerEl));
    const copyForY = orderedA.map((el) => el.map((innerEl) => innerEl));

    // Obtenemos la determinante del sistema
    const systemDet = getDeterminant(Array.from([...orderedA]), base);

    const findXArray: any = Array.from(copyForX);
    for (let i = 0; i < findXArray.length; i++) {
      findXArray[i].splice(0, 1, orderedB[i][0]);
    }

    // Obtenemos la determinante de "x"
    const xDet = getDeterminant(findXArray, base);

    const findYArray: any = Array.from(copyForY);
    for (let i = 0; i < findYArray.length; i++) {
      findYArray[i].splice(1, 1, orderedB[i][0]);
    }

    // Obtenemos la determinante de "y"
    const yDet = getDeterminant(findYArray, base);

    interface IResult {
      system: number;
      x: number;
      y: number;
    }

    const finalValues: IResult = {
      system: systemDet[0][0],
      x: xDet[0][0],
      y: yDet[0][0],
    };
    setResult([
      ["∆", "∆x", "∆y"],
      [finalValues.system, finalValues.x, finalValues.y],
    ] as never);
  };

  return (
    <div className={styles.wrapper} id="wrapper">
      <h1 style={{ marginBottom: 10 }}>Cramer 2x2</h1>

      <div style={{ display: "flex" }}>
        <table>
          <tbody>
            {Array.from({ length: base }).map((_: any, indexOne: number) => (
              <tr key={`ArrB${indexOne}`}>
                {Array.from({ length: base }).map(
                  (_: any, indexTwo: number) => (
                    <td
                      key={`a-${indexOne}-${indexTwo}`}
                      className={
                        (base === 2 && indexTwo === 1) ||
                        (base === 3 && indexTwo === 2)
                          ? styles.lastSpace
                          : ""
                      }
                    >
                      <AppInput
                        id={`a-${indexOne}-${indexTwo}`}
                        placeholder={placeholderArray[indexTwo]}
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
                      placeholder="i"
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

      {finalResult !== undefined && (
        <>
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

          <div
            style={{ marginTop: 20, border: "1px solid #c4c4c4", width: 200 }}
          >
            <p>
              <strong>{'Valor de "x"'}</strong>
            </p>
            <p>
              <strong>{"x = ∆x / ∆"}</strong>
            </p>
            <p>{`x = ${finalResult[1][1]} / ${finalResult[1][0]} = ${finalResult[1][1] / finalResult[1][0]}`}</p>
          </div>

          <div
            style={{ marginTop: 20, border: "1px solid #c4c4c4", width: 200 }}
          >
            <strong>{'Valor de "y"'}</strong>
            <p>
              <strong>{"y = ∆y / ∆"}</strong>
            </p>
            <p>{`y = ${finalResult[1][2]} / ${finalResult[1][0]} = ${finalResult[1][2] / finalResult[1][0]}`}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CramerSquare;
