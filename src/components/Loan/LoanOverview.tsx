import { FC, useState } from "react";
import { loanId, netValue, barrowRate, eth, dia } from "../../static/images.ts";
import styles from "./LoanOverview.module.css";
import accStyles from "../../App.module.css";
import { OverviewCard } from "../OverviewCard/OverviewCard.tsx";
import { useQuery } from "@tanstack/react-query";
import { client, loanSingleEntity } from "../../repository/requests.ts";
import { REQUEST_LOANS_ENTITY } from "../../repository/requestKeys.ts";
import { SmallLoader } from "../Loader/SmallLoader.tsx";
import { LoanType } from "../../types/LoanTypes.ts";
import { OverviewCardSmall } from "../OverviewCard/OverviewCardSmall.tsx";
import { formatRatio } from "../../utils";
import {
  loanCollateralUSD,
  loanCRatio,
  loanInterestRate,
  loanLiabilityUSD,
  loanLiquidationRatioRate,
} from "../../utils/calculations.ts";
import { accounts, positionsCards } from "../../static/data.ts";
import { AccountsCard } from "../AccountsCard/AccountsCard.tsx";
import { PositionsCard } from "../PositionsCard/PositionsCard.tsx";

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

  const calcCRatio = (
    collateralAmount?: number,
    latestPrice?: number,
    decimals?: number,
    liabilityAmount?: number,
  ) => {
    const collateralUSD = loanCollateralUSD(
      collateralAmount,
      latestPrice,
      decimals,
    );
    const liabilityUSD = loanLiabilityUSD(
      liabilityAmount,
      latestPrice,
      decimals,
    );

    return loanCRatio(collateralUSD, liabilityUSD);
  };

  return (
    <div className={styles.loanOverview}>
      <div className={styles.overviewCardsWrapper}>
        <OverviewCard
          value={loanData.id ? `${loanData.id.substring(0, 8)}...` : "No data"}
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
            loanData.asset ? loanInterestRate(loanData.asset.rate) : "No data"
          }
          label={"Interest rate"}
          icon={barrowRate as string}
          color={"light-blue"}
        />
      </div>
      <div className={styles.overviewCardsWrapper}>
        <OverviewCardSmall
          value={
            loanData.asset
              ? calcCRatio(
                  loanData.collateralAmount,
                  loanData.asset.latestPrice,
                  loanData.asset?.aggregator?.decimals,
                  loanData.liabilityAmount,
                )
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
              ? loanLiquidationRatioRate(loanData.liquidationRatio)
              : "No data"
          }
          label={"Liquidation Ratio"}
        />
      </div>
      <div className={accStyles.accountsWrapper}>
        {accounts.map((item) => (
          <AccountsCard
            balance={item.balance}
            key={item.id}
            text={item.text}
            btnText={item.btnText}
          />
        ))}
      </div>
      <section
        className={`${accStyles.mainSection} ${accStyles.positionsSection}`}
      >
        <div className={accStyles.positionsCardsWrapper}>
          <PositionsCard
            img={eth as string}
            volume={loanCollateralUSD(
              loanData.collateralAmount,
              loanData?.asset?.latestPrice,
              loanData?.asset?.aggregator.decimals,
            ).toFixed(2)}
            coinType={"ETH"}
            badgeType={"text-bg-green"}
            badgeText={"Collateral"}
          />
          <PositionsCard
            img={dia as string}
            volume={loanLiabilityUSD(
              loanData.liabilityAmount,
              loanData?.asset?.latestPrice,
              loanData?.asset?.aggregator.decimals,
            ).toFixed(2)}
            coinType={"dia"}
            badgeType={"text-bg-orange"}
            badgeText={"Debt"}
          />
        </div>
      </section>
    </div>
  );
};
