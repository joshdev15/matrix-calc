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
