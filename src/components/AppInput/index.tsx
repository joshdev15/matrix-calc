import { FC } from "react";
import styles from "./styles.module.scss";

interface AppInputProps {
  id: string;
  placeholder?: string;
  outline?: boolean;
  value?: string;
  onChange?: (val: string) => void;
}

const AppInput: FC<AppInputProps> = ({
  id,
  placeholder,
  outline,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      id={id}
      name={id}
      placeholder={placeholder || ""}
      className={outline ? styles.lineInput : styles.squareInput}
      pattern="^-?[0-9]*\.?[0-9]*$"
      value={value ?? ""}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
    />
  );
};

export default AppInput;
