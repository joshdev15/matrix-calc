import { FC, ReactNode, createContext } from "react";

interface MainContextProps {
  hola: string;
}

interface MainProviderProps {
  children: ReactNode;
}

export const MainContext = createContext<MainContextProps>({
  hola: "Hola",
});

const MainProvider: FC<MainProviderProps> = ({ children }) => {
  const saludos = "Hey";

  return (
    <MainContext.Provider
      value={{
        hola: saludos,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
