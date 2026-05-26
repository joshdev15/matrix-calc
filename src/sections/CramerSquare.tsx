import { useState } from "react";
import AppInput from "../components/AppInput";
import styles from "../styles/general.module.scss";
import { getDeterminant } from "../constants/functions";
import { useMatrix } from "../hooks/useMatrix";
import { IResult2x2 } from "../constants/interfaces";

const CramerSquare = () => {
  const { base, values, updateValue, loadExample, getMatrix } = useMatrix(2);
  const [finalResult, setResult] = useState<any[][]>();
  const [error, setError] = useState<string | null>(null);
  const placeholderArray = ["x", "y"];

  const getFormData = () => {
    setResult(undefined);
    setError(null);

    // Obtener matrices del hook
    const orderedA = getMatrix("a", base, base);
    const orderedB = getMatrix("b", base, 1);

    // Copiando arreglos en la memoria para cada caso
    const copyForX = orderedA.map((el) => el.map((innerEl) => innerEl));
    const copyForY = orderedA.map((el) => el.map((innerEl) => innerEl));

    // Obtenemos la determinante del sistema
    const systemDet = getDeterminant(orderedA, base);
    const systemDetVal = systemDet[0][0];

    // Validación de determinante cero
    if (systemDetVal === 0) {
      setError("El determinante del sistema (∆) es 0. El sistema no tiene una solución única por la regla de Cramer.");
      return;
    }

    const findXArray = copyForX.map((row, idx) => {
      const newRow = [...row];
      newRow.splice(0, 1, orderedB[idx][0]);
      return newRow;
    });

    // Obtenemos la determinante de "x"
    const xDet = getDeterminant(findXArray, base);

    const findYArray = copyForY.map((row, idx) => {
      const newRow = [...row];
      newRow.splice(1, 1, orderedB[idx][0]);
      return newRow;
    });

    // Obtenemos la determinante de "y"
    const yDet = getDeterminant(findYArray, base);

    // Definimos los valores finales basados en la interfaz inicial IResult
    const finalValues: IResult2x2 = {
      system: systemDetVal,
      x: xDet[0][0],
      y: yDet[0][0],
    };

    // Mostramos los resultados
    setResult([
      ["∆", "∆x", "∆y"],
      [finalValues.system, finalValues.x, finalValues.y],
    ]);
  };

  const formatValue = (val: number) => {
    const formatted = parseFloat(val.toFixed(4));
    return isNaN(formatted) ? 0 : formatted;
  };

  return (
    <div className={styles.wrapper} id="wrapper">
      <h1 className={styles.mb}>Cramer 2x2</h1>
      <div className={styles.mb}>
        <button onClick={() => loadExample("cramer_square")}>
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
                  {level.map((value: any, indexValue: number) => (
                    <td
                      className={styles.squareInput}
                      key={`result-${index}-${indexValue}`}
                    >
                      {typeof value === "number" ? formatValue(value) : value}
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
                <div className={styles.resultBigSquare} key={`sol-${el}`}>
                  <p>{`Valor de ${el}`}</p>
                  <p>{`${el} = ∆${el} / ∆`}</p>
                  <p>{`${el} = ${formatValue(currentDeterminant)} / ${formatValue(systemDeterminant)} = ${formatValue(finalValue)}`}</p>
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
