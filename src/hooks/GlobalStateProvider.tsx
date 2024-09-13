import {
  Dispatch,
  createContext,
  SetStateAction,
  useState,
  useContext,
} from "react";

export interface GlobalStateInterface {
  Price: Map<string, bigint>;
}

const GlobalStateContext = createContext({
  state: {} as Partial<GlobalStateInterface>,
  setState: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,
});

export const GlobalStateProvider = ({
  children,
  value = {} as GlobalStateInterface,
}: {
  children: React.ReactNode;
  value?: Partial<GlobalStateInterface>;
}) => {
  const [state, setState] = useState(value);

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
