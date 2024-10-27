import { FC, useEffect, useState } from "react";
import { LoanAssetsModal } from "../LoanAssetsModal/LoanAssetsModal.tsx";
import { Button } from "../Button/Button.tsx";
import { SortableTable } from "../Table/SortableTable.tsx";
import { SortableTableConfigType } from "../../types/TableTypes.ts";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  client,
  loanEntities,
  loanEntitiesByOwner,
} from "../../repository/requests.ts";
import { REQUEST_LOANS_ENTITIES } from "../../repository/requestKeys.ts";
import { Loader } from "../Loader/Loader.tsx";
import { LoanType } from "../../types/LoanTypes.ts";
import sectionStyles from "./LoanOverview.module.css";
import { LoanOverview } from "./LoanOverview.tsx";
import { useAccount } from "wagmi";
import { useGlobalState } from "../../hooks/useGlobalState.tsx";
import { CollectModal } from "../CollectModal/CollectModal.tsx";
import { LiquidateModal } from "../LiquidateModal/LiquidateModal.tsx";
import { PaymentModal } from "../PaymentModal/PaymentModal.tsx";
import { getTableTitles } from "./LoanTableTitles.tsx";
import { LoansMutator } from "./LoanTableData.tsx";

export const LoanSection: FC = () => {
  const queryClient = useQueryClient();
  const { state, setState } = useGlobalState();
  const { address, isConnected } = useAccount();
  const [tableConfig, setTableConfig] = useState<
    SortableTableConfigType<LoanType>
  >({
    sort_order: "asc",
    sort_by: "id",
    filters: {},
    page_number: 1,
    owner: null,
  });

  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => {
      if (state.userType === "Borrower") {
        const result = await client.query({
          query: loanEntitiesByOwner,
          variables: {
            sort_by: tableConfig.sort_by,
            sort_order: tableConfig.sort_order,
            owner: tableConfig.owner,
          },
        });
        return result.data;
      }
      if (state.userType === "Collector" || state.userType === "Liquidator") {
        const result = await client.query({
          query: loanEntities,
          variables: {
            sort_by: tableConfig.sort_by,
            sort_order: tableConfig.sort_order,
          },
        });
        return result.data;
      }
      return null;
    },
    refetchInterval: 10000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: true,
    queryKey: [REQUEST_LOANS_ENTITIES, tableConfig],
  });

  // Effect for setting `tableConfig` based on `userType` and `address`
  useEffect(() => {
    setTableConfig((prevConfig) => ({
      ...prevConfig,
      owner: address && state.userType === "Borrower" ? address : null,
    }));
  }, [state.userType, address]);

  // Effect for updating `state.Loans` and `state.Collateral` when query `data` changes
  useEffect(() => {
    if (data?.loanEntities && data?.assetEntity && state?.userType) {
      setState({
        ...state,
        Loans: LoansMutator(data.loanEntities, state, data.assetEntity),
        Collateral: data.assetEntity,
      });
    }
  }, [data, state.userType]);

  const handleModalClose = async () => {
    queryClient.setQueryData(
      [REQUEST_LOANS_ENTITIES, tableConfig],
      state.Loans,
    );
    await queryClient.invalidateQueries({
      queryKey: [REQUEST_LOANS_ENTITIES, tableConfig],
      exact: true,
    });
    refetch();
    setState({ ...state, isModalOpen: false, modalType: "" });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Failed to load loans</div>;
  }

  return (
    <>
      <div className={sectionStyles.overviewHeading}>
        {isConnected && state.userType === "Borrower" && (
          <Button
            size={"sm"}
            btnType={"primary"}
            onClick={() =>
              setState &&
              setState({ ...state, isModalOpen: true, modalType: "issue" })
            }
          >
            Issue Loan
          </Button>
        )}
      </div>
      <SortableTable<LoanType>
        titles={getTableTitles(state.userType ?? "")}
        tableData={state.Loans ?? []}
        tableConfig={tableConfig}
        setTableConfig={setTableConfig}
        isError={isError}
        callRefetch={refetch}
        collateral={state.Collateral}
      />
      {state.Collateral ? <LoanOverview /> : <> </>}
      {state.isModalOpen && state.modalType === "issue" && (
        <LoanAssetsModal
          modalTitle={"Select Asset"}
          onClose={handleModalClose}
          size={488}
        />
      )}
      {state.isModalOpen && state.modalType === "collect" && state.loanId && (
        <CollectModal
          modalTitle={"Collect Interest"}
          onClose={handleModalClose}
          size={400}
        />
      )}
      {state.isModalOpen && state.modalType === "liquidate" && state.loanId && (
        <LiquidateModal
          modalTitle={"Liquidate"}
          onClose={handleModalClose}
          size={400}
        />
      )}
      {state.isModalOpen && state.modalType === "payment" && state.loanId && (
        <PaymentModal
          modalTitle={"Payment"}
          onClose={handleModalClose}
          size={400}
        />
      )}
    </>
  );
};
