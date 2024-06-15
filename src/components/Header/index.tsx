import { useContext } from "react";
import styles from "./styles.module.scss";
import { MainContext, MainContextProps } from "../../contexts/MainProvider";

const Header = () => {
  const { setSection } = useContext<MainContextProps>(MainContext);

  return (
    <header className={styles.header}>
      <p className={styles.title}>Calculo Matricial</p>
      <div className={styles.optionWrapper}>
        <p onClick={() => setSection("add")}>Suma</p>
        <p onClick={() => setSection("sub")}>Resta</p>
        <p onClick={() => setSection("esc")}>Escalar</p>
        <p onClick={() => setSection("product")}>Producto</p>
        <p onClick={() => setSection("det")}>Determinante</p>
        <p onClick={() => setSection("cramer_square")}>Cramer 2x2</p>
        <p onClick={() => setSection("cramer_cube")}>Cramer 3x3</p>
        <p onClick={() => setSection("info")}>Info</p>
      </div>
    </header>
  );
};

export default Header;
