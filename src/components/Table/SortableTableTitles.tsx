import { SortableTableHeadType} from "../../types/TableTypes.ts";
import { LoanType } from "../../types/LoanTypes";

const borrowerTableTitles: SortableTableHeadType<LoanType>[] = [
    {
      title: "Loan ID",
      key: "id",
      sortable: true,
      mutateValue: (v) => `${String(v).substring(0, 8)}...`,
    },
    {
      title: "Asset",
      key: "asset.symbol",
      sortable: true,
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
  
  const collectorTableTitles: SortableTableHeadType<LoanType>[] = [
    {
      title: "Loan ID",
      key: "id",
      sortable: true,
      mutateValue: (v) => `${String(v).substring(0, 8)}...`,
    },
    {
      title: "Interest Rate",
      key: "interestRate",
      sortable: true,
    },
    {
      title: "Interest",
      key: "interest",
      sortable: true,
    },
    {
      title: "Collector Reward",
      key: "collectorAward",
      sortable: true,
    },
  ];
  
  const liquidatorTableTitles: SortableTableHeadType<LoanType>[] = [
    {
      title: "Loan ID",
      key: "id",
      sortable: true,
      mutateValue: (v) => `${String(v).substring(0, 8)}...`,
    },
    {
      title: "Collateral Amount",
      key: "collateralAmount",
      sortable: true,
    },
    {
      title: "Liability Amount",
      key: "liabilityAmount",
      sortable: true,
    },
    {
      title: "Liquidation Amount",
      key: "liquidationAmount",
      sortable: true,
    },
    {
      title: "Liquidator Reward",
      key: "liquidatorReward",
      sortable: true,
    },
  ];
  
  export const getTableTitles = (userType: string): SortableTableHeadType<LoanType>[] => {
    switch (userType) {
      case "Borrower":
        return borrowerTableTitles;
      case "Collector":
        return collectorTableTitles;
      case "Liquidator":
        return liquidatorTableTitles;
      default:
        return [];
    }
  };
  