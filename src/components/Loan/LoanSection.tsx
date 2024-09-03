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

const loanTableTitles: SortableTableHeadType[] = [
  {
    title: "Loan ID",
    key: "id",
    sortable: true,
  },
  {
    title: "Asset",
    key: "assetName",
    sortable: false,
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
    key: "interestRate",
    sortable: true,
  },
  {
    title: "L Ratio",
    key: "lRatio",
    sortable: true,
  },
];

export const LoanSection: FC = () => {
  const [selectAssetModal, setSelectAssetModal] = useState<boolean>(false);
  const [tableConfig, setTableConfig] = useState<SortableTableConfigType>({
    sort_order: "asc",
    sort_by: "id",
    filters: {},
    page_number: 1,
  });
  const [error, setError] = useState<boolean>(false);
  const [selectedLoan, setSelectedLoan] = useState<string>("");

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
      {/*<div className={styles.fundsSection}>*/}
      {/*  <Card className={styles.fundsSectionCard}>*/}
      {/*    <div className={styles.fundsSectionCardInner}>*/}
      {/*      <div>*/}
      {/*        <h5 className={styles.fundsSectionCardTitle}>*/}
      {/*          0.00%*/}
      {/*          <button*/}
      {/*            type="button"*/}
      {/*            className={styles.fundsSectionCardTitleButton}*/}
      {/*          >*/}
      {/*            <img src={iIcon as string} alt="icon" />*/}
      {/*          </button>*/}
      {/*        </h5>*/}
      {/*        <p className={styles.fundsSectionCardSubtitle}>D / C (%)</p>*/}
      {/*      </div>*/}
      {/*      <div>*/}
      {/*        <span className={styles.fundsSectionCardMessage}>*/}
      {/*          No position*/}
      {/*        </span>*/}
      {/*        <p className={styles.fundsSectionCardValue}>*/}
      {/*          Max - <span style={{ fontWeight: "600" }}>68.97</span>%*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </Card>*/}
      {/*  <Card className={styles.fundsSectionCard}>*/}
      {/*    <div>*/}
      {/*      <h5 className={styles.fundsSectionCardTitle}>0.00% / $3,468.08</h5>*/}
      {/*      <p*/}
      {/*        style={{*/}
      {/*          display: "flex",*/}
      {/*          alignItems: "center",*/}
      {/*          gap: "6px",*/}
      {/*        }}*/}
      {/*        className={styles.fundsSectionCardSubtitle}*/}
      {/*      >*/}
      {/*        Liquidation (ETH)*/}
      {/*        <button*/}
      {/*          type="button"*/}
      {/*          className={styles.fundsSectionCardTitleButton}*/}
      {/*        >*/}
      {/*          <img src={iIcon as string} alt="icon" />*/}
      {/*        </button>*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </Card>*/}
      {/*</div>*/}
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
