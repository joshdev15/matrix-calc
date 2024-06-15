import { FC } from "react";
import styles from "./styles.module.scss";

interface AppInputProps {
  id: string;
  placeholder?: string;
  outline?: boolean;
}

const AppInput: FC<AppInputProps> = ({ id, placeholder, outline }) => {
  return (
    <input
      type="text"
      id={id}
      name={id}
      {...{ placeholder: placeholder || "" }}
      className={outline ? styles.lineInput : styles.squareInput}
      pattern="^[0-9]{1,3}$"
    />
  );
};

export default AppInput;
