import { useContext } from "react";
import { MainContext, MainContextProps } from "../../contexts/MainProvider";
import Add from "../../sections/Add";
import Sub from "../../sections/Sub";
import Esc from "../../sections/Esc";
import Product from "../../sections/Product";
import Det from "../../sections/Det";
import Info from "../../sections/About";
import CramerSquare from "../../sections/CramerSquare";
import CramerCube from "../../sections/CramerCube";

const Home = () => {
  const { section } = useContext<MainContextProps>(MainContext);
  const Options: any = {
    add: <Add />,
    sub: <Sub />,
    esc: <Esc />,
    product: <Product />,
    det: <Det />,
    cramer_square: <CramerSquare />,
    cramer_cube: <CramerCube />,
    info: <Info />,
  };

  return Options[section];
};

export default Home;
