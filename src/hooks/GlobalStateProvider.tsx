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
import { client, entities } from "../repository/requests";
import { LoanType } from "../types/LoanTypes";
import { SortableTableConfigType } from "../types/TableTypes";

export interface GlobalStateInterface {
  
  Window: WindowType;
  Collateral: AssetType;
  userType: string;
  userTypes: string[];
  error: boolean;
  isModalOpen: boolean;
  modalType: string;
  loanId: string;
  Loan: LoanType;
  Loans: LoanType[];
  tableConfig: SortableTableConfigType<LoanType>;
  tableData: LoanType[];
  isLoading: boolean;
}

export const GlobalStateContext = createContext<{
  state: Partial<GlobalStateInterface>;
  setState: Dispatch<SetStateAction<Partial<GlobalStateInterface>>>;
  refetch: () => Promise<void>; // Expose refetch function in the context
}>({
  state: {},
  setState: () => {},
  refetch: async () => {}, // Default to a no-op
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
    isModalOpen: false,
    modalType: "",
    loanId: "",
    tableConfig: {
      sort_order: "asc",
      sort_by: "id",
      filters: {},
      page_number: 1,
      owner: null,
    },
    tableData: [],
    isLoading: false,
  });

  const fetchData = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const result = await client.query({
        query: entities,
        variables: {
          sort_by: state.tableConfig?.sort_by ?? "id",
          sort_order: state.tableConfig?.sort_order ?? "asc",
        },
      });
      
      setState((prev) => ({
        ...prev,
        Collateral: result.data.assetEntity,
        Window: result.data.windowEntities[0],
        Loans: result.data.loanEntities,
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setState((prev) => ({ ...prev, isLoading: false, error: true }));
    }
  };

  // Initial data fetch
  useEffect(() => {
    client.cache.reset();
    fetchData();
  }, [state.tableConfig, state.userType]);

  return (
    <GlobalStateContext.Provider value={{ state, setState, refetch: fetchData }}>
      {children}
    </GlobalStateContext.Provider>
  );
};