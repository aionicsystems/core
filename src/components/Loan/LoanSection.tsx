import { FC } from "react";
import { LoanAssetsModal } from "../LoanAssetsModal/LoanAssetsModal.tsx";
import { Button } from "../Button/Button.tsx";
import { SortableTable } from "../Table/SortableTable.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { LoanType } from "../../types/LoanTypes.ts";
import sectionStyles from "./LoanOverview.module.css";
import { LoanOverview } from "./LoanOverview.tsx";
import { useAccount } from "wagmi";
import { useGlobalState } from "../../hooks/useGlobalState.tsx";
import { CollectModal } from "../CollectModal/CollectModal.tsx";
import { LiquidateModal } from "../LiquidateModal/LiquidateModal.tsx";
import { PaymentModal } from "../PaymentModal/PaymentModal.tsx";
import { getTableTitles } from "../Table/SortableTableTitles.tsx";
import { liquidationCheck } from "../../utils/calculations"; // assuming import location
import { transformLoans } from "../../utils/loanUtils.ts";
import { client } from "../../repository/requests.ts";

export const LoanSection: FC = () => {
  const { state, setState, refetch } = useGlobalState();
  const { isConnected } = useAccount();
  
  if (state.isLoading) {
    return <Loader />;
  }

  let tableData: LoanType[] = state.Loans ?? [];
  
  if (state.userType === "Liquidator" && state.Collateral) {
    tableData = tableData.filter((loan) => liquidationCheck(loan, state.Collateral!, state.Window!));
  }

  tableData = transformLoans(tableData, state.Collateral!, state.Window!);

  return (
    <>
      <div className={sectionStyles.overviewHeading}>
        {isConnected && state.userType === "Borrower" && (
          <Button
            size="sm"
            btnType="primary"
            onClick={() =>
              setState && setState({ ...state, isModalOpen: true, modalType: "issue" })
            }
          >
            Issue Loan
          </Button>
        )}
      </div>
      { state.tableData && state.tableConfig ?
      <SortableTable<LoanType>
        titles={getTableTitles(state.userType ?? "")}
        tableData={tableData}
        tableConfig={state.tableConfig}
        setTableConfig={(config) => setState && setState({ ...state, tableConfig: config })}
        isError={state.error ?? false}
        callRefetch={refetch} // Use refetch function here
        collateral={state.Collateral}
      /> : <></> }
      {state.Collateral ? <LoanOverview /> : <></>}
      
      {/* Modals based on `modalType` */}
      {state.isModalOpen && state.modalType === "issue" && (
        <LoanAssetsModal
          modalTitle="Select Asset"
          onClose={() => {
            setState && setState({ ...state, isModalOpen: false, modalType: "" });
            client.cache.reset();
            refetch();
          }}
          size={488}
        />
      )}
      {state.isModalOpen && state.modalType === "collect" && state.loanId && (
        <CollectModal
          modalTitle="Collect Interest"
          onClose={() => {
            setState && setState({ ...state, isModalOpen: false, modalType: "" });
            client.cache.reset();
            refetch();
          }}
          size={400}
        />
      )}
      {state.isModalOpen && state.modalType === "liquidate" && state.loanId && (
        <LiquidateModal
          modalTitle="Liquidate"
          onClose={() => {
            setState && setState({ ...state, isModalOpen: false, modalType: "" });
            client.cache.reset();
            refetch();
          }}
          size={400}
        />
      )}
      {state.isModalOpen && state.modalType === "payment" && state.loanId && (
        <PaymentModal
          modalTitle="Payment"
          onClose={() => {
            setState && setState({ ...state, isModalOpen: false, modalType: "" });
            client.cache.reset();
            refetch();
          }}
          size={400}
        />
      )}
    </>
  );
};