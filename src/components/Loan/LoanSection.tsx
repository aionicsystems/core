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
import { AssetType } from "../../types/AssetTypes.ts";
import { useAccount } from "wagmi";



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

export type LoanSectionProps = {
  userType: string;
  setUserType: (userType: string) => void;
};

export const LoanSection: FC<LoanSectionProps> = ({ userType, setUserType}) => {
  const [selectAssetModal, setSelectAssetModal] = useState<boolean>(false);
  const [tableConfig, setTableConfig] = useState<
    SortableTableConfigType<LoanType>
  >({
    sort_order: "asc",
    sort_by: "id",
    filters: {},
    page_number: 1,
  });

   useEffect(() => {

   },[]);

  const { isConnected, address } = useAccount();
  const [selectedLoan, setSelectedLoan] = useState<string>("");

  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => {
      const result = await client.query({
        query: loanEntities,
        variables: {
          sort_by: tableConfig.sort_by,
          sort_order: tableConfig.sort_order,
          filters: tableConfig.filters,
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

  if (isLoading) {
    return <Loader />;
  }

  const tableData: LoanType[] = data?.loanEntities ?? [];
  const collateral: AssetType = data?.assetEntity ?? {};

  const selectLoan = (id: string) => {
    setSelectedLoan(id);
  };

  return (
    <>
      
      <div className={sectionStyles.overviewHeading}>
        {isConnected && (
          <Button
            size={"sm"}
            btnType={"primary"}
            onClick={() => toggleSelectAsset()}
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
        selectLoan={selectLoan}
        selectedID={selectedLoan}
        collateral={collateral}
      />
      <LoanOverview loanID={selectedLoan} assetETH={collateral} />
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
