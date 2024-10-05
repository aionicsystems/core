import {
  Dispatch,
  createContext,
  SetStateAction,
  useState,
  ReactNode,
} from "react";
import { WindowType } from "../types/WindowTypes";
import { AssetType } from "../types/AssetTypes";

export interface GlobalStateInterface {
  BigInts: Map<string, bigint>;
  Window: WindowType;
  Collateral: AssetType;
  userType: string;
  userTypes: string[];
  error: boolean;
}

export const GlobalStateContext = createContext<{
  state: Partial<GlobalStateInterface>;
  setState: Dispatch<SetStateAction<Partial<GlobalStateInterface>>>;
}>({
  state: {},
  setState: () => {},
});

interface GlobalStateProviderProps {
  children: ReactNode;
}

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const [state, setState] = useState<Partial<GlobalStateInterface>>({
    Window: {} as WindowType,
    userTypes: ["Borrower", "Collector", "Liquidator"],
    error: false,
  });

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
