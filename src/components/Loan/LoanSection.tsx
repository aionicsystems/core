import { FC, useEffect, useState } from "react";
import { LoanAssetsModal } from "../LoanAssetsModal/LoanAssetsModal.tsx";
import { Button } from "../Button/Button.tsx";
import { SortableTable } from "../Table/SortableTable.tsx";
import {
  SortableTableConfigType,
  SortableTableHeadType,
} from "../../types/TableTypes.ts";
import { useQuery } from "@tanstack/react-query";
import { client, loanEntities, loanEntitiesByOwner } from "../../repository/requests.ts";
import { REQUEST_LOANS_ENTITIES } from "../../repository/requestKeys.ts";
import { Loader } from "../Loader/Loader.tsx";
import { LoanType } from "../../types/LoanTypes.ts";
import { handleBodyScroll } from "../../utils";
import sectionStyles from "./LoanOverview.module.css";
import { LoanOverview } from "./LoanOverview.tsx";
import { AssetType } from "../../types/AssetTypes.ts";
import { useAccount } from "wagmi";
import { useGlobalState } from "../../hooks/useGlobalState.tsx";
import { liquidationCheck } from "../../utils/calculations.ts";
import { CollectInterestModal } from "../CollectInterestModal/CollectInterestModal.tsx";



const loanTableTitles: SortableTableHeadType<LoanType>[] = [
  {
    title: "Loan ID",
    key: "id",
    sortable: true,
    mutateValue: (v) => `${String(v).substring(0, 8)}...`,
  },
  {
    title: "Liability",
    key: "liabilityAmount",
    sortable: true,
  },
  {
    title: "Collateral",
    key: "collateralAmount",
    sortable: true,
  },
  {
    title: "C Ratio",
    key: "cRatio",
    sortable: true,
  },
  {
    title: "L Ratio",
    key: "liquidationRatio",
    sortable: true,
  },
];

export const LoanSection: FC = () => {
  const [selectAssetModal, setSelectAssetModal] = useState<boolean>(false);
  const { state, setState } = useGlobalState();
  const { isConnected, address } = useAccount();
  const [selectedLoan, setSelectedLoan] = useState<string>("");
  const [tableConfig, setTableConfig] = useState<
    SortableTableConfigType<LoanType>
  >({
    sort_order: "asc",
    sort_by: "id",
    filters: {},
    page_number: 1,
    owner: null,
  });

  useEffect(() => {
    if (address && state.userType === "Borrower") {
      setTableConfig((prevConfig) => ({
        ...prevConfig,
        owner: address,
      }));
    } else {
      setTableConfig((prevConfig) => ({
        ...prevConfig,
        owner: null,
      }));
    }
  }, [state.userType, address]);

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
    queryKey: [REQUEST_LOANS_ENTITIES, tableConfig],
  });

  if (isLoading) {
    return <Loader />;
  }

  let tableData: LoanType[] = data?.loanEntities ?? [];
  const collateral: AssetType = data?.assetEntity ?? {};

  if (collateral && state.userType === "Liquidator") {
    tableData = tableData.filter((dataItem) => {
      return liquidationCheck(
        dataItem?.liquidationRatio,
        dataItem?.collateralAmount,
        collateral?.latestPrice,
        collateral.aggregator?.decimals,
        dataItem.liabilityAmount,
        dataItem.asset?.latestPrice,
        dataItem.asset?.aggregator?.decimals,
        state.Window?.precision,
      );
    });
  }

  return (
    <>
      
      <div className={sectionStyles.overviewHeading}>
        {isConnected && state.userType === "Borrower" && (
          <Button
            size={"sm"}
            btnType={"primary"}
            onClick={() => setState && setState({ ...state, isModalOpen: true, modalType: "issue" })}
          >
            Issue Loan
          </Button>
        )}
      </div>
      <SortableTable<LoanType>
        titles={loanTableTitles}
        tableData={tableData}
        tableConfig={tableConfig}
        setTableConfig={setTableConfig}
        isError={isError}
        callRefetch={refetch}
        collateral={collateral}
      />
      {collateral ? <LoanOverview loanID={selectedLoan} assetETH={collateral} /> : <> </>}
      {state.isModalOpen && state.modalType === "issue" && (
        <LoanAssetsModal
          modalTitle={"Select Asset"}
          onClose={() => setState && setState({ ...state, isModalOpen: false, modalType: "" })}
          size={488}
        />
      )}
      {state.isModalOpen && state.modalType === "collect" && state.loanId && (
          <CollectInterestModal
            modalTitle={"Collect Interest"}
            onClose={() => setState && setState({ ...state, isModalOpen: false, modalType: "" })}
            loanId={state.loanId} 
            size={400}
          />
      )}
    </>
  );
};
