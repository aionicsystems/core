import { FC, useEffect, useState } from "react";
import { LoanAssetsModal } from "../LoanAssetsModal/LoanAssetsModal.tsx";
import { Button } from "../Button/Button.tsx";
import { SortableTable } from "../Table/SortableTable.tsx";
import {
  SortableTableConfigType,
  SortableTableHeadType,
} from "../../types/TableTypes.ts";
import { useQuery } from "@tanstack/react-query";
import { client, loanEntities } from "../../repository/requests.ts";
import { REQUEST_LOANS_ENTITIES } from "../../repository/requestKeys.ts";
import { Loader } from "../Loader/Loader.tsx";
import { LoanType } from "../../types/LoanTypes.ts";
import { handleBodyScroll } from "../../utils";
import sectionStyles from "./LoanOverview.module.css";
import { LoanOverview } from "./LoanOverview.tsx";
import {
  loanCollateral,
  loanLiability,
  loanLiquidationRatioRate,
} from "../../utils/calculations.ts";
import { AssetType } from "../../types/AssetTypes.ts";
import { useGlobalState } from "../../hooks/useGlobalState.tsx";

const loanTableTitles: SortableTableHeadType<LoanType>[] = [
  {
    title: "Loan ID",
    key: "id",
    sortable: true,
    mutateValue: (v) => `${String(v).substring(0, 8)}...`,
  },
  {
    title: "Asset",
    key: "assetName",
    sortable: false,
    destructure: (o) => o.asset.symbol,
  },
  {
    title: "Liability",
    key: "liabilityAmount",
    sortable: true,
    mutateValue: (v, join) => `${loanLiability(Number(v))} ${join ? join : ""}`,
  },
  {
    title: "Collateral",
    key: "collateralAmount",
    sortable: true,
    mutateValue: (v, join) =>
      `${loanCollateral(Number(v))} ${join ? join : ""}`,
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
    mutateValue: (v) => loanLiquidationRatioRate(Number(v)),
  },
];

export const LoanSection: FC = () => {
  const [selectAssetModal, setSelectAssetModal] = useState<boolean>(false);
  const [tableConfig, setTableConfig] = useState<
    SortableTableConfigType<LoanType>
  >({
    sort_order: "asc",
    sort_by: "id",
    filters: {},
    page_number: 1,
  });
  const [selectedLoan, setSelectedLoan] = useState<string>("");
  const { setState } = useGlobalState();

  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => {
      const result = await client.query({
        query: loanEntities,
        variables: {
          sort_by: tableConfig.sort_by,
          sort_order: tableConfig.sort_order,
        },
      });
      return result.data;
    },
    refetchInterval: 10000,
    queryKey: [REQUEST_LOANS_ENTITIES],
  });

  const toggleSelectAsset = () => {
    setSelectAssetModal(!selectAssetModal);
    handleBodyScroll();
  };

  useEffect(() => {
    if (data?.loanEntities && data?.assetEntity) {
      setState((prevState) => ({
        ...prevState,
        Price: new Map([
          ...(prevState.Price || []),
          ...data.loanEntities.map((loan: LoanType) => [
            loan.id,
            loan.asset.latestPrice,
          ]),
          ["latestPriceETH", data?.assetEntity.latestPrice],
          ["decimalsETH", data?.assetEntity.aggregator.decimals],
        ]),
      }));
    }
  }, [
    data?.assetEntity.aggregator.decimals,
    data?.assetEntity.latestPrice,
    data,
    setState,
  ]);

  if (isLoading) {
    return <Loader />;
  }

  const tableData: LoanType[] = data?.loanEntities ?? [];
  const assetETH: AssetType = data?.assetEntity ?? {};

  const selectLoan = (id: string) => {
    setSelectedLoan(id);
  };

  return (
    <>
      <div className={sectionStyles.overviewHeading}>
        <Button
          size={"sm"}
          btnType={"primary"}
          onClick={() => toggleSelectAsset()}
        >
          Issue Loan
        </Button>
      </div>
      <SortableTable<LoanType>
        titles={loanTableTitles}
        tableData={tableData}
        tableConfig={tableConfig}
        setTableConfig={setTableConfig}
        isError={isError}
        callRefetch={refetch}
        selectLoan={selectLoan}
        selectedID={selectedLoan}
        assetSymbol={assetETH.symbol}
      />
      <LoanOverview loanID={selectedLoan} assetETH={assetETH} />
      {selectAssetModal && (
        <LoanAssetsModal
          onClose={toggleSelectAsset}
          size={488}
          modalTitle={"Select Asset"}
        />
      )}
    </>
  );
};
