import {
  Dispatch,
  createContext,
  SetStateAction,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { WindowType } from "../types/WindowTypes";
import { AssetType } from "../types/AssetTypes";
import { useQuery } from "@tanstack/react-query";
import { client, windowEntities } from "../repository/requests";
import { REQUEST_WINDOW_ENTITIES } from "../repository/requestKeys";

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
    userType: "Borrower",
    userTypes: ["Borrower", "Collector", "Liquidator"],
    error: false,
  });

  const { data } = useQuery({
    queryFn: async () => {
      try {
        const result = await client.query({
          query: windowEntities,
        });
        return result.data;
      } catch (error) {
        throw error;
      }
    },
    queryKey: [REQUEST_WINDOW_ENTITIES],
  });

  useEffect(() => {
    if (data) {
      setState({
        ...state,
        Collateral: data.assetEntity,
        Window: data.windowEntities[0],
      });
    }
  }, [data]);

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
