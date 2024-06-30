import { useContext } from "react";
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

const Home = () => {
  const { section } = useContext<MainContextProps>(MainContext);
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
      {Options[section]}
    </div>
  );
};

export default Home;
