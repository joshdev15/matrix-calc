import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface MainContextProps {
  section: string;
  setSection: Dispatch<SetStateAction<string>>;
}

export interface MainProviderProps {
  children: ReactNode;
}

export const MainContext = createContext<MainContextProps>({
  section: "add",
  setSection: () => {},
});

const MainProvider: FC<MainProviderProps> = ({ children }) => {
  const [section, setSectionAction] = useState("add");

  return (
    <MainContext.Provider
      value={{
        section,
        setSection: setSectionAction,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
