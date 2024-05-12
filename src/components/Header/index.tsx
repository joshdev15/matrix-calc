import { useContext } from "react";
import styles from "./styles.module.scss";
import { MainContext, MainContextProps } from "../../contexts/MainProvider";

const Header = () => {
  const { setSection } = useContext<MainContextProps>(MainContext);

  return (
    <header className={styles.header}>
      <div className={styles.optionWrapper}>
        <p onClick={() => setSection("add")}>Suma</p>
        <p onClick={() => setSection("sub")}>Resta</p>
        <p onClick={() => setSection("esc")}>Escalar</p>
        <p>Producto</p>
        <p>Diferencial</p>
      </div>
    </header>
  );
};

export default Header;
