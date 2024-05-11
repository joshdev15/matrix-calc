import { FC } from "react";
import styles from "./styles.module.scss";

interface AppInputProps {
  id: string;
}

const AppInput: FC<AppInputProps> = ({ id }) => {
  return (
    <input
      type="text"
      id={id}
      name={id}
      className={styles.squareInput}
      pattern="^[0-9]{1,3}$"
    />
  );
};

export default AppInput;
