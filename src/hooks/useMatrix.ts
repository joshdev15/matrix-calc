import { useState, useCallback } from "react";

// Predefined examples for each matrix operation
export const MATRIX_EXAMPLES: Record<string, { base: number; values: Record<string, string> }> = {
  add_2: {
    base: 2,
    values: {
      "a-0-0": "2", "a-0-1": "4",
      "a-1-0": "1", "a-1-1": "-3",
      "b-0-0": "5", "b-0-1": "0",
      "b-1-0": "-2", "b-1-1": "6"
    }
  },
  add_3: {
    base: 3,
    values: {
      "a-0-0": "1", "a-0-1": "2", "a-0-2": "3",
      "a-1-0": "0", "a-1-1": "1", "a-1-2": "4",
      "a-2-0": "5", "a-2-1": "6", "a-2-2": "0",
      "b-0-0": "2", "b-0-1": "-1", "b-0-2": "1",
      "b-1-0": "3", "b-1-1": "0", "b-1-2": "2",
      "b-2-0": "1", "b-2-1": "4", "b-2-2": "-2"
    }
  },
  sub_2: {
    base: 2,
    values: {
      "a-0-0": "8", "a-0-1": "3",
      "a-1-0": "-2", "a-1-1": "5",
      "b-0-0": "3", "b-0-1": "-1",
      "b-1-0": "4", "b-1-1": "2"
    }
  },
  sub_3: {
    base: 3,
    values: {
      "a-0-0": "5", "a-0-1": "6", "a-0-2": "7",
      "a-1-0": "1", "a-1-1": "2", "a-1-2": "3",
      "a-2-0": "0", "a-2-1": "4", "a-2-2": "1",
      "b-0-0": "2", "b-0-1": "1", "b-0-2": "3",
      "b-1-0": "-1", "b-1-1": "0", "b-1-2": "2",
      "b-2-0": "4", "b-2-1": "2", "b-2-2": "-1"
    }
  },
  esc_2: {
    base: 2,
    values: {
      "scalar": "3",
      "b-0-0": "2", "b-0-1": "4",
      "b-1-0": "1", "b-1-1": "-3"
    }
  },
  esc_3: {
    base: 3,
    values: {
      "scalar": "3",
      "b-0-0": "2", "b-0-1": "-1", "b-0-2": "0",
      "b-1-0": "4", "b-1-1": "5", "b-1-2": "-3",
      "b-2-0": "1", "b-2-1": "0", "b-2-2": "2"
    }
  },
  product: {
    base: 3,
    values: {
      "a-0-0": "1", "a-0-1": "2",
      "a-1-0": "3", "a-1-1": "4",
      "a-2-0": "5", "a-2-1": "6",
      "b-0-0": "1", "b-0-1": "2", "b-0-2": "3",
      "b-1-0": "4", "b-1-1": "5", "b-1-2": "6"
    }
  },
  det_2: {
    base: 2,
    values: {
      "a-0-0": "3", "a-0-1": "7",
      "a-1-0": "2", "a-1-1": "5"
    }
  },
  det_3: {
    base: 3,
    values: {
      "a-0-0": "1", "a-0-1": "2", "a-0-2": "3",
      "a-1-0": "0", "a-1-1": "1", "a-1-2": "4",
      "a-2-0": "5", "a-2-1": "6", "a-2-2": "0"
    }
  },
  cramer_square: {
    base: 2,
    values: {
      "a-0-0": "2", "a-0-1": "3",
      "a-1-0": "1", "a-1-1": "-2",
      "b-0-0": "8",
      "b-1-0": "-3"
    }
  },
  cramer_cube: {
    base: 3,
    values: {
      "a-0-0": "2", "a-0-1": "1", "a-0-2": "-1",
      "a-1-0": "1", "a-1-1": "-2", "a-1-2": "1",
      "a-2-0": "3", "a-2-1": "1", "a-2-2": "-2",
      "b-0-0": "8",
      "b-1-0": "-3",
      "b-2-0": "5"
    }
  },
  gauss_jordan_cube: {
    base: 3,
    values: {
      "a-0-0": "0", "a-0-1": "2", "a-0-2": "1",
      "a-1-0": "1", "a-1-1": "1", "a-1-2": "2",
      "a-2-0": "2", "a-2-1": "1", "a-2-2": "1",
      "b-0-0": "4",
      "b-1-0": "6",
      "b-2-0": "5"
    }
  }
};

export const useMatrix = (initialBase = 2) => {
  const [base, setBaseState] = useState(initialBase);
  const [values, setValues] = useState<Record<string, string>>({});

  const updateValue = useCallback((id: string, val: string) => {
    setValues((prev) => ({
      ...prev,
      [id]: val,
    }));
  }, []);

  const clearValues = useCallback(() => {
    setValues({});
  }, []);

  const setBase = useCallback((newBase: number) => {
    setBaseState(newBase);
    setValues({}); // Reset values when changing size
  }, []);

  const loadExample = useCallback((operationKey: string, size?: number) => {
    const key = size ? `${operationKey}_${size}` : operationKey;
    const example = MATRIX_EXAMPLES[key];
    if (example) {
      if (example.base !== base) {
        setBaseState(example.base);
      }
      setValues(example.values);
    }
  }, [base]);

  // Helper function to extract a parsed matrix as a 2D array of floats
  const getMatrix = useCallback((key: string, baseRows: number, baseCols: number): number[][] => {
    const result: number[][] = [];
    for (let i = 0; i < baseRows; i++) {
      const row: number[] = [];
      for (let j = 0; j < baseCols; j++) {
        const id = `${key}-${i}-${j}`;
        const valStr = values[id];
        const val = parseFloat(valStr);
        row.push(isNaN(val) ? 0 : val);
      }
      result.push(row);
    }
    return result;
  }, [values]);

  const getScalar = useCallback((): number => {
    const val = parseFloat(values["scalar"]);
    return isNaN(val) ? 1 : val;
  }, [values]);

  return {
    base,
    setBase,
    values,
    updateValue,
    clearValues,
    loadExample,
    getMatrix,
    getScalar,
  };
};
