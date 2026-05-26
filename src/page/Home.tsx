import { useContext, useState } from "react";
import { MainContext, MainContextProps } from "../contexts/MainProvider";
import Addition from "../sections/Addition";
import Subtraction from "../sections/Subtraction";
import Escalar from "../sections/Escalar";
import Product from "../sections/Product";
import Determinant from "../sections/Determinant";
import CramerSquare from "../sections/CramerSquare";
import CramerCube from "../sections/CramerCube";
import styles from "../styles/general.module.scss";
import Header from "../components/Header";
import GaussJordanCube from "../sections/GaussJordanCube";
import { HELP_CONTENT } from "../constants/helpContent";

const Home = () => {
  const { section } = useContext<MainContextProps>(MainContext);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const Options: any = {
    add: <Addition />,
    sub: <Subtraction />,
    esc: <Escalar />,
    product: <Product />,
    det: <Determinant />,
    cramer_square: <CramerSquare />,
    cramer_cube: <CramerCube />,
    gauss_jordan_cube: <GaussJordanCube />,
  };

  return (
    <div className={styles.mb}>
      <Header />
      
      {/* Help button located in the top right corner */}
      <button className={styles.helpButton} onClick={() => setIsHelpOpen(true)}>
        💡 Ayuda Teórica
      </button>

      {/* Operation section content */}
      {Options[section]}

      {/* Side help drawer overlay */}
      {isHelpOpen && (
        <>
          <div className={styles.drawerBackdrop} onClick={() => setIsHelpOpen(false)} />
          <div className={styles.drawer}>
            <div className={styles.drawerHeader}>
              <h2>{HELP_CONTENT[section]?.title || "Ayuda"}</h2>
              <button className={styles.drawerClose} onClick={() => setIsHelpOpen(false)}>
                ✕
              </button>
            </div>
            <div className={styles.drawerBody}>
              {HELP_CONTENT[section] ? (
                <>
                  <div className={styles.drawerSection}>
                    <h3>📋 Requisitos</h3>
                    <p>{HELP_CONTENT[section].requirements}</p>
                  </div>
                  <div className={styles.drawerSection}>
                    <h3>📖 Teoría y Fórmulas</h3>
                    {HELP_CONTENT[section].theory}
                  </div>
                  <div className={styles.drawerSection}>
                    <h3>💡 Ejemplo Resuelto</h3>
                    {HELP_CONTENT[section].example}
                  </div>
                </>
              ) : (
                <p>No hay información de ayuda para esta sección.</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
