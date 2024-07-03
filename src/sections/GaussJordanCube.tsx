import { useState } from "react";
import AppInput from "../components/AppInput";
import styles from "../styles/general.module.scss";
import { cleanArrayByKey } from "../constants/functions";

const clogStyle = "font-size: 20px; background: dodgerblue";
const clogWarnStyle = "font-size: 20px; background: orange";
const clogImportantStyle = "font-size: 20px; background: tomato";

const multiplyByBase = (values: number[], base?: number) => {
  if (base === undefined) {
    return values;
  }

  if (base !== 1) {
    return values.map((value) => Math.abs(value * base));
  }

  return values;
};

const reverseSignAndMultiplyByBase = (values: number[], base: number) => {
  console.log("reverse", values, base);

  return values.map((value) => {
    console.log("--", value, base);
    console.log("---", -Math.abs(value * base), Math.abs(value * base));

    return Math.sign(value) === 1
      ? -Math.abs(value * base)
      : Math.abs(value * base);
  });
};

const addValuesOfArrays = (arrA: number[], arrB: number[]) => {
  const finalArray = arrA.map((_: any, index: number) => {
    console.log(`isNaN ${isNaN(arrA[index] + arrB[index])}`);

    const finalA =
      Math.sign(arrA[index]) === 1
        ? Math.abs(arrA[index])
        : -Math.abs(arrA[index]);
    const finalB =
      Math.sign(arrB[index]) === 1
        ? Math.abs(arrB[index])
        : -Math.abs(arrB[index]);

    console.log("final A/B", finalA, finalB);
    console.log("final", finalA - finalB);

    return arrA[index] + arrB[index];
  });

  console.log(`%cfinalArray ${JSON.stringify(finalArray)}`, clogImportantStyle);
  return finalArray;
};

const subtractValuesOfArrays = (arrA: number[], arrB: number[]) => {
  // console.log("\nsub", arrA, arrB);
  const finalArray = arrA.map((_: any, index: number) => {
    console.log(`isNaN ${isNaN(arrA[index] + arrB[index])}`);

    const finalA =
      Math.sign(arrA[index]) === 1
        ? Math.abs(arrA[index])
        : -Math.abs(arrA[index]);
    const finalB =
      Math.sign(arrB[index]) === 1
        ? Math.abs(arrB[index])
        : -Math.abs(arrB[index]);

    console.log("final A/B", finalA, finalB);
    console.log("final", finalA - finalB);
    return finalA - finalB;
  });

  console.log(`%cfinalArray ${JSON.stringify(finalArray)}`, clogImportantStyle);
  return finalArray;
};

const getHandler = (localBase: number) => {
  console.log(
    `%cgetHandler ${localBase} ${Math.sign(localBase) === -1 ? "negative" : "positive"}`,
    clogWarnStyle,
  );

  return Math.sign(localBase) === -1
    ? subtractValuesOfArrays
    : addValuesOfArrays;
};

const getLocalBase = (a: number, b: number) => {
  console.log("test localbase", a, b);
  const result = a / b;
  console.log("test localbase 2", result);
  if (Number.isFinite(result) && !Number.isInteger(result)) {
    const solution = {
      positive: Math.sign(b) === -1 ? Math.abs(b * -1) : Math.abs(b),
      negative: Math.sign(a) === -1 ? -Math.abs(a) : Math.abs(a),
    };

    console.log(solution);
    return solution;
  }

  return result;
};

/** CramerCube function is used to calculate two matrix 2x2 with a Cramer method  */
const GaussJordanCube = () => {
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
    let orderedB = cleanArrayByKey("b-", base, inputs);

    // Creamos copias para el resultado
    const copyOrderedA: any[] = orderedA.map((e: any) => e.map((i: any) => i));
    const copyOrderedB: any[] = orderedB.map((e: any) => e.map((i: any) => i));

    /** Primer elemento de la fila 2 a cero (0)
     * | * | * | * |
     * | 0 | * | * |
     * | * | * | * |
     */
    console.log("%cStep 1", clogStyle);
    let firstRow = orderedA[0];
    let secondRow = orderedA[1];
    let thirdRow = orderedA[2];
    let localBase: any = getLocalBase(secondRow[0], firstRow[0]);
    let localBaseIsObject = typeof localBase !== "number";
    let operation = localBaseIsObject
      ? getHandler(localBase.positive)
      : getHandler(localBase);

    copyOrderedA[1] = operation(
      multiplyByBase(secondRow, localBaseIsObject ? localBase.positive : 1),
      reverseSignAndMultiplyByBase(firstRow, localBase),
    );
    copyOrderedB[1] = operation(
      copyOrderedB[1],
      reverseSignAndMultiplyByBase(copyOrderedB[0], localBase),
    );

    /** Primer elemento de la fila 3 a cero (0)
     * | * | * | * |
     * | * | * | * |
     * | 0 | * | * |
     */
    console.log("%cStep 2", clogStyle);
    firstRow = orderedA[0];
    thirdRow = orderedA[2];
    localBase = getLocalBase(thirdRow[0], firstRow[0]);
    localBaseIsObject = typeof localBase !== "number";
    operation = localBaseIsObject
      ? getHandler(localBase.positive)
      : getHandler(localBase);

    copyOrderedA[2] = operation(
      multiplyByBase(thirdRow, localBaseIsObject ? localBase.positive : 1),
      reverseSignAndMultiplyByBase(
        firstRow,
        localBaseIsObject ? localBase.positive : 1,
      ),
    );
    copyOrderedB[2] = operation(
      copyOrderedB[2],
      reverseSignAndMultiplyByBase(
        copyOrderedB[0],
        localBaseIsObject ? localBase.positive : 1,
      ),
    );

    /** Segundo elemento de la fila 3 a cero (0)
     * | * | * | * |
     * | * | * | * |
     * | * | 0 | * |
     */
    console.log("%cStep 3", clogStyle);
    thirdRow = copyOrderedA[2];
    secondRow = copyOrderedA[1];
    localBase = getLocalBase(thirdRow[1], secondRow[1]);
    localBaseIsObject = typeof localBase !== "number";
    operation = localBaseIsObject
      ? getHandler(localBase.positive)
      : getHandler(localBase);

    copyOrderedA[2] = operation(
      multiplyByBase(thirdRow, localBaseIsObject ? localBase.positive : 1),
      reverseSignAndMultiplyByBase(
        secondRow,
        localBaseIsObject ? localBase.positive : 1,
      ),
    );

    copyOrderedB[2] = operation(
      copyOrderedB[2],
      reverseSignAndMultiplyByBase(
        copyOrderedB[1],
        localBaseIsObject ? localBase.positive : 1,
      ),
    );

    /** Tercer elemento de la fila 1 a cero (0)
     * | * | * | 0 |
     * | * | * | * |
     * | * | * | * |
     */
    console.log("%cStep 4", clogStyle);
    firstRow = copyOrderedA[0];
    thirdRow = copyOrderedA[2];

    localBase = getLocalBase(firstRow[2], thirdRow[2]);
    localBaseIsObject = typeof localBase !== "number";
    console.log(
      `%clocalbase ${JSON.stringify(localBase)} ${localBaseIsObject}`,
      clogWarnStyle,
    );
    operation = localBaseIsObject
      ? getHandler(localBase.negative)
      : getHandler(localBase);

    console.log("reversed", reverseSignAndMultiplyByBase(firstRow, localBase));

    console.log("multiply", multiplyByBase(firstRow, localBase));
    copyOrderedA[0] = operation(
      multiplyByBase(thirdRow, localBaseIsObject ? localBase.positive : 1),
      reverseSignAndMultiplyByBase(
        firstRow,
        localBaseIsObject ? localBase.positive : 1,
      ),
    );

    copyOrderedB[0] = operation(
      multiplyByBase(
        copyOrderedB[2],
        localBaseIsObject ? localBase.positive : 1,
      ),
      reverseSignAndMultiplyByBase(
        copyOrderedB[0],
        localBaseIsObject ? localBase.positive : localBase,
      ),
    );

    /** Tercer elemento de la fila 2 a cero (0)
     * | * | * | * |
     * | * | * | 0 |
     * | * | * | * |
     */
    console.log("%cStep 5", clogStyle);
    secondRow = copyOrderedA[1];
    thirdRow = copyOrderedA[2];
    localBase = getLocalBase(secondRow[2], thirdRow[2]);
    localBaseIsObject = typeof localBase !== "number";

    operation = localBaseIsObject
      ? getHandler(localBase.negative)
      : getHandler(localBase);

    copyOrderedA[1] = operation(
      multiplyByBase(secondRow, localBaseIsObject ? localBase.positive : 1),
      reverseSignAndMultiplyByBase(
        thirdRow,
        localBaseIsObject ? localBase.negative : localBase,
      ),
    );

    copyOrderedB[1] = operation(
      reverseSignAndMultiplyByBase(
        copyOrderedB[2],
        localBaseIsObject ? localBase.negative : localBase,
      ),
      multiplyByBase(
        copyOrderedB[1],
        localBaseIsObject ? localBase.positive : 1,
      ),
    );

    /** Segundo elemento de la fila 1 a cero (0)
     * | * | 0 | * |
     * | * | * | * |
     * | * | * | * |
     */
    console.log("%cStep 6", clogStyle);
    firstRow = copyOrderedA[0];
    secondRow = copyOrderedA[1];
    localBase = getLocalBase(secondRow[1], firstRow[1]);
    localBaseIsObject = typeof localBase !== "number";
    operation = localBaseIsObject
      ? getHandler(localBase.negative)
      : getHandler(localBase);

    copyOrderedA[0] = operation(
      multiplyByBase(secondRow, localBaseIsObject ? localBase.positive : 1),
      reverseSignAndMultiplyByBase(
        firstRow,
        localBaseIsObject ? localBase.negative : localBase,
      ),
    );

    copyOrderedB[0] = operation(
      multiplyByBase(
        copyOrderedB[1],
        localBaseIsObject ? localBase.positive : 1,
      ),
      reverseSignAndMultiplyByBase(
        copyOrderedB[0],
        localBaseIsObject ? localBase.negative : localBase,
      ),
    );

    /** Matriz de identidad a 1 */

    firstRow = copyOrderedA[0];
    secondRow = copyOrderedA[1];
    thirdRow = copyOrderedA[2];

    const firstRowResult = firstRow.map((value) => value / firstRow[0]);
    const secondRowResult = secondRow.map((value) => value / secondRow[1]);
    const thirdRowResult = thirdRow.map((value) => value / thirdRow[2]);

    const indFirst = copyOrderedB[0] / firstRow[0];
    const indSecond = copyOrderedB[1] / secondRow[1];
    const indThird = copyOrderedB[2] / thirdRow[2];

    firstRowResult.push(indFirst);
    secondRowResult.push(indSecond);
    thirdRowResult.push(indThird);

    console.log("-------------");
    console.log([firstRowResult, secondRowResult, thirdRowResult]);
    console.log(copyOrderedB);

    setResult([firstRowResult, secondRowResult, thirdRowResult] as never[]);
    console.log(copyOrderedA);
    console.log(copyOrderedB);
  };

  return (
    <div className={styles.wrapper} id="wrapper">
      <h1 className={styles.mb}>Gauss Jordan 3x3</h1>

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
        </>
      )}
    </div>
  );
};

export default GaussJordanCube;
