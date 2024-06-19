import { useState } from "react";
import AppInput from "../../components/AppInput";
import styles from "./styles.module.scss";
import AppInputWithValue from "../../components/AppInputWithValue";
import { cleanArrayByKey } from "../../constants/functions";

const Product = () => {
  const [rowsA, setRowsA] = useState(0);
  const [columnsA, setColumsA] = useState(0);

  const [rowsB, setRowsB] = useState(0);
  const [columnsB, setColumsB] = useState(0);

  const [finalResult, setResult] = useState<never[][]>();

  const getFormData = () => {
    // Obtener elementos visuales
    setResult(undefined);
    const inputs = document.querySelectorAll("input");

    // Limpieza del Arreglo A
    const orderedArrayA = cleanArrayByKey("a-", rowsA, inputs);

    // Limpieza del Arreglo B
    const orderedArrayB = cleanArrayByKey("b-", rowsB, inputs);

    // Definicion de la Matriz final
    const subResult: number[][][] = Array.from({ length: rowsA }).map((_) =>
      Array.from({ length: columnsB }).map((_) => []),
    );

    // Calculo y ubicacion de los resultados
    orderedArrayA.forEach((itemA, indexA) => {
      itemA.forEach((subItemA, subIndexA) => {
        orderedArrayB[subIndexA].forEach((itemB, indexB) => {
          subResult[indexA][indexB].push(subItemA * itemB);
        });
      });
    });

    // Sumatoria
    const result = subResult.map((levelOne) =>
      levelOne.map((levelTwo) => levelTwo.reduce((acc, cur) => acc + cur)),
    );

    setResult(result as never);
  };

  return (
    <div className={styles.wrapper} id="wrapper">
      <h1 className={styles.mb}>Producto</h1>
      <div className={`${styles.mb} ${styles.panel}`}>
        <div className={styles.mr}>
          <strong>Dimensiones de la matriz A</strong>
          <div>
            <AppInputWithValue id={`rowsA`} value={rowsA} setValue={setRowsA} />
            <AppInputWithValue
              id={`columnsA`}
              value={columnsA}
              setValue={setColumsA}
            />
          </div>
        </div>

        <div className={styles.separator} />

        <div className={styles.ml}>
          <strong>Dimensiones de la matriz B</strong>
          <div>
            <AppInputWithValue id={`rowsB`} value={rowsB} setValue={setRowsB} />
            <AppInputWithValue
              id={`columnsB`}
              value={columnsB}
              setValue={setColumsB}
            />
          </div>
        </div>
      </div>

      <div className={styles.matrixCont}>
        <table style={{ marginRight: 20 }}>
          <tbody>
            {Array.from({ length: rowsA }).map((_: any, indexOne: number) => (
              <tr key={`ArrA${indexOne}`}>
                {Array.from({ length: columnsA }).map(
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

        <div className={styles.operator}>*</div>

        <table style={{ marginLeft: 20 }}>
          <tbody>
            {Array.from({ length: rowsB }).map((_: any, indexOne: number) => (
              <tr key={`ArrB${indexOne}`}>
                {Array.from({ length: columnsB }).map(
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

      {columnsA !== 0 && rowsB !== 0 && columnsA === rowsB && (
        <div className={styles.mt}>
          <button onClick={getFormData}>Calcular</button>
        </div>
      )}

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

export default Product;
