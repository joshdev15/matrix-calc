import { useContext } from "react";
import { MainContext, MainContextProps } from "../../contexts/MainProvider";
import Add from "../../sections/Add";
import Sub from "../../sections/Sub";
import Esc from "../../sections/Esc";
import Product from "../../sections/Product";
import Det from "../../sections/Det";
import Info from "../../sections/About";

const Home = () => {
  const { section } = useContext<MainContextProps>(MainContext);

  console.log(section);

  const Options: any = {
    add: <Add />,
    sub: <Sub />,
    esc: <Esc />,
    product: <Product />,
    det: <Det />,
    info: <Info />,
  };

  return Options[section];
};

export default Home;
