import { FC, useState } from "react";
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
import { useGlobalState } from "../../hooks/GlobalStateProvider.tsx";

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
    mutateValue: (v) => loanLiability(Number(v)).toFixed(6),
  },
  {
    title: "Collateral",
    key: "collateralAmount",
    sortable: true,
    mutateValue: (v) => loanCollateral(Number(v)).toFixed(6),
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
  const [error, setError] = useState<boolean>(false);
  const [selectedLoan, setSelectedLoan] = useState<string>("");
  const { state, setState } = useGlobalState();

  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => {
      try {
        const result = await client.query({
          query: loanEntities,
          variables: {
            sort_by: tableConfig.sort_by,
            sort_order: tableConfig.sort_order,
          },
        });
        return result.data;
      } catch (error) {
        setError(true);
        throw error;
      }
    },
    queryKey: [REQUEST_LOANS_ENTITIES],
  });

  const toggleSelectAsset = () => {
    setSelectAssetModal(!selectAssetModal);
    handleBodyScroll();
  };

  if (isLoading) {
    return <Loader />;
  }

  const tableData: LoanType[] = data?.loanEntities ?? [];

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
        isError={error || isError}
        callRefetch={refetch}
        selectLoan={selectLoan}
        selectedID={selectedLoan}
      />
      <LoanOverview loanID={selectedLoan} />
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
