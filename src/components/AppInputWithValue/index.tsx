import { Dispatch, FC, SetStateAction } from "react";
import styles from "./styles.module.scss";

interface AppInputWithValueProps {
  id: string;
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
}

const AppInputWithValue: FC<AppInputWithValueProps> = ({
  id,
  value,
  setValue,
}) => {
  const validateSetValue = (value: any) => {
    if (
      (!isNaN(parseInt(value)) &&
        parseInt(value) > 0 &&
        parseInt(value) < 10) ||
      [""].includes(value)
    ) {
      setValue(value);
      return;
    }

    alert("El valor debe ser un numero entre 1 y 9");
  };

  return (
    <input
      type="text"
      id={id}
      name={id}
      className={styles.squareInput}
      value={value}
      onChange={(e) => validateSetValue(e.target.value)}
      pattern="^[0-9]{1,3}$"
    />
  );
};

export default AppInputWithValue;
