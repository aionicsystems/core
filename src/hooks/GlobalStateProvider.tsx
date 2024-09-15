import {
  Dispatch,
  createContext,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

export interface GlobalStateInterface {
  Price: Map<string, bigint>;
}

export const GlobalStateContext = createContext({
  state: {} as Partial<GlobalStateInterface>,
  setState: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,
});

export const GlobalStateProvider = ({
  children,
  value = {} as GlobalStateInterface,
}: {
  children: ReactNode;
  value?: Partial<GlobalStateInterface>;
}) => {
  const [state, setState] = useState(value);

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
