import { useContext, useEffect } from "react";
import styles from "./styles.module.scss";
import { MainContext, MainContextProps } from "../../contexts/MainProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { setSection } = useContext<MainContextProps>(MainContext);
  const router = useNavigate();
  const route = useLocation();

  useEffect(() => {
    console.log(route);
  }, [route]);

  return (
    <header className={styles.header}>
      <p className={styles.title} onClick={() => router("/")}>
        CÁLCULO MATRICIAL
      </p>

      <div
        className={styles.routeWrapper}
        style={route.pathname === "/" ? {} : { paddingBottom: 10 }}
      >
        {route.pathname === "/" && <p onClick={() => router("/info")}>INFO</p>}
        {route.pathname === "/info" && (
          <p onClick={() => router("/")}>INICIO</p>
        )}
      </div>

      {route.pathname === "/" && (
        <div className={styles.optionWrapper}>
          <p onClick={() => setSection("add")}>Suma</p>
          <p onClick={() => setSection("sub")}>Resta</p>
          <p onClick={() => setSection("esc")}>Escalar</p>
          <p onClick={() => setSection("product")}>Producto</p>
          <p onClick={() => setSection("det")}>Determinante</p>
          <p onClick={() => setSection("cramer_square")}>Cramer 2x2</p>
          <p onClick={() => setSection("cramer_cube")}>Cramer 3x3</p>
        </div>
      )}
    </header>
  );
};

export default Header;
