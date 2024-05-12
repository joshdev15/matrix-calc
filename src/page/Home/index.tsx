import { useContext } from "react";
import Add from "../../sections/Add";
import Sub from "../../sections/Sub";
import { MainContext, MainContextProps } from "../../contexts/MainProvider";
import Esc from "../../sections/Esc";
import Info from "../../sections/About";

const Home = () => {
  const { section } = useContext<MainContextProps>(MainContext);

  console.log(section);

  const Options: any = {
    add: <Add />,
    sub: <Sub />,
    esc: <Esc />,
    info: <Info />,
  };

  return Options[section];
};

export default Home;
