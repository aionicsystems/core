import { FC, useState } from "react";
import { loanId, netValue, barrowRate } from "../../static/images.ts";
import styles from "./LoanOverview.module.css";
import { OverviewCard } from "../OverviewCard/OverviewCard.tsx";
import { useQuery } from "@tanstack/react-query";
import { client, loanSingleEntity } from "../../repository/requests.ts";
import { REQUEST_LOANS_ENTITY } from "../../repository/requestKeys.ts";
import { SmallLoader } from "../Loader/SmallLoader.tsx";
import { LoanType } from "../../types/LoanTypes.ts";
import { OverviewCardSmall } from "../OverviewCard/OverviewCardSmall.tsx";
import { formatRatio } from "../../utils";

export type LoanOverviewProps = {
  loanID: string;
};

export const LoanOverview: FC<LoanOverviewProps> = ({ loanID }) => {
  const [error, setError] = useState<boolean>(false);
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      try {
        const result = await client.query({
          query: loanSingleEntity,
          variables: { id: loanID },
        });
        return result.data;
      } catch (error) {
        setError(true);
        throw error;
      }
    },
    queryKey: [`${REQUEST_LOANS_ENTITY}_${loanID}`],
  });

  if (isLoading) {
    return (
      <div className={styles.loanOverview}>
        <SmallLoader />
      </div>
    );
  }

  if (error || isError) {
    return (
      <div>
        <p>No data.</p>
      </div>
    );
  }

  const loanData: LoanType = data?.loanEntity ?? {};

  return (
    <div className={styles.loanOverview}>
      <div className={styles.overviewCardsWrapper}>
        <OverviewCard
          value={loanData.id ? loanData.id : "No data"}
          label={"Loan ID"}
          icon={loanId as string}
          color={"light-skyBlue"}
        />
        <OverviewCard
          value={"$ 0.00"}
          label={"Net Value"}
          icon={netValue as string}
          color={"light-gold"}
        />
        <OverviewCard
          value={
            loanData.interestRate
              ? formatRatio(String(loanData.interestRate))
              : "No data"
          }
          label={"Interest rate"}
          icon={barrowRate as string}
          color={"light-blue"}
        />
      </div>
      <div className={styles.overviewCardsWrapper}>
        <OverviewCardSmall
          value={
            loanData.collateralAmount
              ? formatRatio(String(loanData.collateralAmount))
              : "No data"
          }
          label={"Collateralization Ratio"}
        />
        <OverviewCardSmall
          value={
            loanData.borrowingRatio
              ? formatRatio(String(loanData.borrowingRatio))
              : "No data"
          }
          label={"Borrowing Ratio"}
        />
        <OverviewCardSmall
          value={
            loanData.liquidationRatio
              ? formatRatio(String(loanData.liquidationRatio))
              : "No data"
          }
          label={"Liquidation Ratio"}
        />
      </div>
    </div>
  );
};
