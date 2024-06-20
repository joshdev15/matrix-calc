import { useState } from "react";
import AppInput from "../components/AppInput";
import styles from "../styles/general.module.scss";
import { cleanArrayByKey, getDeterminant } from "../constants/functions";
import { IResult2x2 } from "../constants/interfaces";

/** CramerCube function is used to calculate two matrix 2x2 with a Cramer method  */
const CramerSquare = () => {
  const [base] = useState(2);
  const [finalResult, setResult] = useState<never[][]>();
  const placeholderArray = ["x", "y"];

  const getFormData = () => {
    setResult(undefined);

    // Obtener elementos visuales
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

    // Definimos los valores finales basados en la interfaz inicial IResult
    const finalValues: IResult2x2 = {
      system: systemDet[0][0],
      x: xDet[0][0],
      y: yDet[0][0],
    };

    // Mostramos los resultados
    setResult([
      ["∆", "∆x", "∆y"],
      [finalValues.system, finalValues.x, finalValues.y],
    ] as never);
  };

  return (
    <div className={styles.wrapper} id="wrapper">
      <h1 className={styles.mb}>Cramer 2x2</h1>

      <div className={styles.arrayContainer}>
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

          <div className={styles.resultCont}>
            {placeholderArray.map((el: string, index: number) => {
              const realIndex = index + 1;
              const currentDeterminant = finalResult[1][realIndex];
              const systemDeterminant = finalResult[1][0];
              const finalValue = currentDeterminant / systemDeterminant;

              return (
                <div className={styles.resultBigSquare}>
                  <p>{`Valor de ${el}`}</p>
                  <p>{`${el} = ∆${el} / ∆`}</p>
                  <p>{`${el} = ${currentDeterminant} / ${systemDeterminant} = ${finalValue}`}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default CramerSquare;
