export const clogStyle = "font-size: 20px; background: dodgerblue";
export const clogWarnStyle =
  "font-size: 20px; background: orange; color: black";
export const clogImportantStyle =
  "font-size: 20px; background: tomato; color: black";

/** cleanArrayByKey function is used to clean the array by key
 * @param key - string
 * @param base - number
 * @param inputs - NodeListOf<HTMLInputElement>
 * @returns orderedArray - number[][]
 *
 */
export const cleanArrayByKey = (
  key: string,
  base: number,
  inputs: NodeListOf<HTMLInputElement>,
) => {
  const orderedArray = Array.from({ length: base }).map((_) => []);
  const array = Array.from(inputs).filter((element) =>
    element.id.includes(key),
  );

  array.forEach((item) => {
    const id = item.id.split("-");
    const arrLevel = parseInt(id[1]);
    orderedArray[arrLevel].push(parseInt(item.value) as never);
  });

  return orderedArray;
};

/** getDeterminant function is used to get the determinant of the matrix
 * @param ordered - number[][]
 * @param base - number
 * @returns result - number[][]
 *
 */
export const getDeterminant = (ordered: number[][], base: number) => {
  if (base === 2) {
    const firstDiagon = ordered[0][0] * ordered[1][1];
    const secondDiagon = ordered[1][0] * ordered[0][1];
    const result = firstDiagon - secondDiagon;
    return [[result]] as never;
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
    return [[result]] as never;
  }

  return [[0]];
};

export const multiplyByBase = (values: number[], base?: number) => {
  if (base === undefined) {
    return values;
  }

  if (base !== 1) {
    return values.map((value) => Math.abs(value * base));
  }

  return values;
};

export const reverseSignAndMultiplyByBase = (
  values: number[],
  base: number,
) => {
  return values.map((value) => {
    return Math.sign(value) === 1
      ? -Math.abs(value * base)
      : Math.abs(value * base);
  });
};

const addValuesOfArrays = (arrA: number[], arrB: number[]) => {
  const finalArray = arrA.map((_: any, index: number) => {
    const finalA =
      Math.sign(arrA[index]) === 1
        ? Math.abs(arrA[index])
        : -Math.abs(arrA[index]);
    const finalB =
      Math.sign(arrB[index]) === 1
        ? Math.abs(arrB[index])
        : -Math.abs(arrB[index]);
    return finalA + finalB;
  });

  console.log(
    `%c${finalArray.length > 1 ? "finalArray" : "independent"} ${JSON.stringify(finalArray)}`,
    finalArray.length > 1 ? clogWarnStyle : clogImportantStyle,
  );
  return finalArray;
};

const subtractValuesOfArrays = (arrA: number[], arrB: number[]) => {
  const finalArray = arrA.map((_: any, index: number) => {
    const someNegative = [arrA[index], arrB[index]].some((value) => {
      return Math.sign(value) === -1;
    });

    const finalA =
      Math.sign(arrA[index]) === 1 && !someNegative
        ? Math.abs(arrA[index])
        : -Math.abs(arrA[index]);
    const finalB =
      Math.sign(arrB[index]) === 1 && !someNegative
        ? Math.abs(arrB[index])
        : -Math.abs(arrB[index]);

    return finalA - finalB;
  });

  console.log(
    `%c${finalArray.length > 1 ? "finalArray" : "independent"} ${JSON.stringify(finalArray)}`,
    finalArray.length > 1 ? clogWarnStyle : clogImportantStyle,
  );
  return finalArray;
};

export const getHandler = (localBase: number) => {
  return Math.sign(localBase) === -1
    ? subtractValuesOfArrays
    : addValuesOfArrays;
};

export const getLocalBase = (a: number, b: number) => {
  const result = a / b;
  if (Number.isFinite(result) && !Number.isInteger(result)) {
    const solution = {
      positive: Math.sign(b) === -1 ? Math.abs(b * -1) : Math.abs(b),
      negative: Math.sign(a) === -1 ? -Math.abs(a) : Math.abs(a),
    };

    return solution;
  }

  return result;
};
