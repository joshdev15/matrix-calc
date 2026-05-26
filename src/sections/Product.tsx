import { useEffect, useState } from "react";
import AppInput from "../components/AppInput";
import styles from "../styles/general.module.scss";
import AppInputWithValue from "../components/AppInputWithValue";
import { useMatrix } from "../hooks/useMatrix";

const Product = () => {
  const [rowsA, setRowsA] = useState(2);
  const [columnsA, setColumsA] = useState(2);

  const [rowsB, setRowsB] = useState(2);
  const [columnsB, setColumsB] = useState(2);

  const { values, updateValue, loadExample, getMatrix } = useMatrix(2);
  const [finalResult, setResult] = useState<number[][]>();

  const getFormData = () => {
    setResult(undefined);

    // Obtener matrices del hook usando dimensiones dinámicas
    const orderedArrayA = getMatrix("a", rowsA, columnsA);
    const orderedArrayB = getMatrix("b", rowsB, columnsB);

    // Definicion de la Matriz final
    const subResult: number[][][] = Array.from({ length: rowsA }).map(() =>
      Array.from({ length: columnsB }).map(() => []),
    );

    // Calculo y ubicacion de los resultados
    orderedArrayA.forEach((itemA, indexA) => {
      itemA.forEach((subItemA, subIndexA) => {
        const rowB = orderedArrayB[subIndexA] || [];
        rowB.forEach((itemB, indexB) => {
          subResult[indexA][indexB].push(subItemA * itemB);
        });
      });
    });

    // Sumatoria
    const result = subResult.map((levelOne) =>
      levelOne.map((levelTwo) => levelTwo.reduce((acc, cur) => acc + cur, 0)),
    );

    // Mostrar resultados
    setResult(result);
  };

  const handleLoadExample = (size: number) => {
    setRowsA(size);
    setColumsA(size);
    setRowsB(size);
    setColumsB(size);
    loadExample("product", size);
  };

  useEffect(() => {
    const evalue = (el: any) => ["", 0].includes(el);
    if (evalue(rowsA) || evalue(columnsA) || evalue(rowsB) || evalue(columnsB))
      setResult(undefined);
  }, [rowsA, columnsA, rowsB, columnsB]);

  return (
    <div className={styles.wrapper} id="wrapper">
      <h1 className={styles.mb}>Producto</h1>
      
      <div className={`${styles.mb} ${styles.panel}`}>
        <div>
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

        <div>
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

      <div className={styles.mb}>
        <button className={styles.mr} onClick={() => handleLoadExample(2)}>
          Ejemplo 2x2
        </button>
        <button onClick={() => handleLoadExample(3)}>
          Ejemplo 3x3
        </button>
      </div>

      <div
        className={
          rowsA > 4 || columnsA > 4 || rowsB > 4 || columnsB > 4
            ? styles.arrayContainerColumn
            : styles.arrayContainer
        }
      >
        <table>
          <tbody>
            {Array.from({ length: rowsA }).map((_: any, indexOne: number) => (
              <tr key={`ArrA${indexOne}`}>
                {Array.from({ length: columnsA }).map(
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

        <div className={styles.operator}>*</div>

        <table>
          <tbody>
            {Array.from({ length: rowsB }).map((_: any, indexOne: number) => (
              <tr key={`ArrB${indexOne}`}>
                {Array.from({ length: columnsB }).map(
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

      {columnsA !== 0 && rowsB !== 0 && columnsA === rowsB && (
        <div className={styles.mt}>
          <button onClick={getFormData}>Calcular</button>
        </div>
      )}

      {finalResult !== undefined && (
        <table className={styles.mt}>
          <tbody>
            {finalResult.map((level, index) => (
              <tr key={`arr${index}`}>
                {level.map((value: number, indexValue: number) => (
                  <td
                    key={`result-${index}-${indexValue}`}
                    className={styles.squareInput}
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
