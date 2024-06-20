import { useState } from "react";
import AppInput from "../components/AppInput";
import styles from "../styles/general.module.scss";
import { cleanArrayByKey, getDeterminant } from "../constants/functions";
import { IResult3x3 } from "../constants/interfaces";

/** CramerCube function is used to calculate two matrix 3x3
 * with a Cramer method
 */
const CramerCube = () => {
  const [base] = useState(3);
  const [finalResult, setResult] = useState<never[][]>();
  const placeholderArray = ["x", "y", "z"];

  const getFormData = () => {
    setResult(undefined);

    // Obtener elementos visuales
    const inputs = document.querySelectorAll("input");

    // Limpieza del Arreglo A
    const orderedA = cleanArrayByKey("a-", base, inputs);

    // Limpieza del Arreglo B
    const orderedB = cleanArrayByKey("b-", base, inputs);

    // Creamos copias para el resultado
    const copyForX = orderedA.map((el) => el.map((innerEl) => innerEl));
    const copyForY = orderedA.map((el) => el.map((innerEl) => innerEl));
    const copyForZ = orderedA.map((el) => el.map((innerEl) => innerEl));

    // Obtenemos la determinante del Sistema
    const systemDet = getDeterminant(Array.from([...orderedA]), base);
    console.log("system", systemDet);

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

    const findZArray: any = Array.from(copyForZ);
    for (let i = 0; i < findYArray.length; i++) {
      findZArray[i].splice(2, 1, orderedB[i][0]);
    }

    // Obtenemos la determinante de "z"
    const zDet = getDeterminant(findZArray, base);

    // Definimos los valores finales basados en la interfaz inicial IResult
    const finalValues: IResult3x3 = {
      system: systemDet[0][0],
      x: xDet[0][0],
      y: yDet[0][0],
      z: zDet[0][0],
    };

    // Mostramos los resultados
    setResult([
      ["∆", "∆x", "∆y", "∆z"],
      [finalValues.system, finalValues.x, finalValues.y, finalValues.z],
    ] as never);
  };

  return (
    <div className={styles.wrapper} id="wrapper">
      <h1 className={styles.mb}>Cramer 3x3</h1>

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

export default CramerCube;
