import { FC, useEffect, useState } from "react";
import { LoanAssetsModal } from "../LoanAssetsModal/LoanAssetsModal.tsx";
import { Button } from "../Button/Button.tsx";
import { SortableTable } from "../Table/SortableTable.tsx";
import {
  SortableTableConfigType
} from "../../types/TableTypes.ts";
import { useQuery } from "@tanstack/react-query";
import { client, loanEntities, loanEntitiesByOwner } from "../../repository/requests.ts";
import { REQUEST_LOANS_ENTITIES } from "../../repository/requestKeys.ts";
import { Loader } from "../Loader/Loader.tsx";
import { LoanType } from "../../types/LoanTypes.ts";
import sectionStyles from "./LoanOverview.module.css";
import { LoanOverview } from "./LoanOverview.tsx";
import { AssetType } from "../../types/AssetTypes.ts";
import { useAccount } from "wagmi";
import { useGlobalState } from "../../hooks/useGlobalState.tsx";
import { collectorReward, interest, liquidationCheck, liquidationPayment, liquidationReward, maxLiquidationAmount, timestamp } from "../../utils/calculations.ts";
import { CollectModal } from "../CollectModal/CollectModal.tsx";
import { LiquidateModal } from "../LiquidateModal/LiquidateModal.tsx";
import { PaymentModal } from "../PaymentModal/PaymentModal.tsx";
import { getTableTitles } from "../Table/SortableTableTitles.tsx";

export const LoanSection: FC = () => {
  const { state, setState } = useGlobalState();
  const { address, isConnected } = useAccount();
  
  const [tableConfig, setTableConfig] = useState<SortableTableConfigType<LoanType>>({
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
        console.log("gets here");
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
        console.log("gets here2")
        console.log(result.data);
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
        dataItem.precision,
      );
    });
    tableData = tableData.map(dataItem => {
      if (state.Window) {
        const newDataItem = { ...dataItem }; // Create a new object
        newDataItem.liquidationAmount = maxLiquidationAmount(
          newDataItem.collateralAmount,
          collateral.latestPrice,
          collateral.aggregator.decimals,
          newDataItem.liabilityAmount,
          newDataItem.asset.latestPrice,
          newDataItem.asset.aggregator.decimals,
          newDataItem.liquidationRatio,
          newDataItem.precision,
          newDataItem.daoFee,
          newDataItem.liquidatorFee,
        );

        newDataItem.liquidatorReward = liquidationReward(
          liquidationPayment(
            newDataItem.liquidationAmount, 
            newDataItem.asset.latestPrice, 
            collateral.latestPrice, 
            newDataItem.asset.aggregator.decimals, 
            collateral.aggregator.decimals, 
            newDataItem.liquidatorFee, 
            newDataItem.precision
          ),
          newDataItem.liquidatorFee,
          newDataItem.precision,
        )
        return newDataItem;
      }
      return dataItem;
    });
  }

  if (collateral && state?.Window?.precision && state.userType === "Collector") {
    tableData = tableData.map(dataItem => {
      if (state.Window && state.Window.precision) {
        const newDataItem = { ...dataItem }; // Create a new object
        newDataItem.interest = interest(
          dataItem.collateralAmount,
          dataItem.interestRate,
          dataItem.lastCollection,
          timestamp,
          state.Window.precision
        );
        newDataItem.collectorReward = collectorReward(
          newDataItem.interest,
          state.Window.collectorFee,
          state.Window.precision
        );
        return newDataItem;
      }
      return dataItem;
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
        titles={getTableTitles(state.userType ?? "")}
        tableData={tableData}
        tableConfig={tableConfig}
        setTableConfig={setTableConfig}
        isError={isError}
        callRefetch={refetch}
        collateral={collateral}
      />
      {collateral ? <LoanOverview/> : <> </>}
      {state.isModalOpen && state.modalType === "issue" && (
        <LoanAssetsModal
          modalTitle={"Select Asset"}
          onClose={() => {
            setState && setState({ ...state, isModalOpen: false, modalType: "" });
            refetch();
          }}
          size={488}
        />
      )}
      {state.isModalOpen && state.modalType === "collect" && state.loanId && (
          <CollectModal
            modalTitle={"Collect Interest"}
            onClose={async () => {
              setState && setState({ ...state, isModalOpen: false, modalType: "" });
              refetch();
            }}
            size={400}
          />
      )}
      {state.isModalOpen && state.modalType === "liquidate" && state.loanId && (
          <LiquidateModal
            modalTitle={"Liquidate"}
            onClose={() => {
              setState && setState({ ...state, isModalOpen: false, modalType: "" });
              refetch();
            }}
            size={400}
          />
      )}
      {state.isModalOpen && state.modalType === "payment" && state.loanId && (
          <PaymentModal
            modalTitle={"Payment"}
            onClose={() => {
              setState && setState({ ...state, isModalOpen: false, modalType: "" });
              refetch();
            }}
            size={400}
          />
      )}
    </>
  );
};
