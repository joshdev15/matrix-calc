import { useContext } from "react";
import styles from "./styles.module.scss";
import { MainContext, MainContextProps } from "../../contexts/MainProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { section, setSection } = useContext<MainContextProps>(MainContext);
  const router = useNavigate();
  const route = useLocation();

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
          <p
            className={section === "add" ? styles.activeOption : ""}
            onClick={() => setSection("add")}
          >
            Suma
          </p>
          <p
            className={section === "sub" ? styles.activeOption : ""}
            onClick={() => setSection("sub")}
          >
            Resta
          </p>
          <p
            className={section === "esc" ? styles.activeOption : ""}
            onClick={() => setSection("esc")}
          >
            Escalar
          </p>
          <p
            className={section === "product" ? styles.activeOption : ""}
            onClick={() => setSection("product")}
          >
            Producto
          </p>
          <p
            className={section === "det" ? styles.activeOption : ""}
            onClick={() => setSection("det")}
          >
            Determinante
          </p>
          <p
            className={section === "cramer_square" ? styles.activeOption : ""}
            onClick={() => setSection("cramer_square")}
          >
            Cramer 2x2
          </p>
          <p
            className={section === "cramer_cube" ? styles.activeOption : ""}
            onClick={() => setSection("cramer_cube")}
          >
            Cramer 3x3
          </p>
          <p
            className={
              section === "gauss_jordan_cube" ? styles.activeOption : ""
            }
            onClick={() => setSection("gauss_jordan_cube")}
          >
            Gauss Jordan 3x3
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
