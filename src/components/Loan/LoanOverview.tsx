import { FC } from "react";
import {
  loanId,
  netValue,
  barrowRate,
  eth,
  aionCoin,
} from "../../static/images.ts";
import styles from "./LoanOverview.module.css";
import accStyles from "../../App.module.css";
import { OverviewCard } from "../OverviewCard/OverviewCard.tsx";
import { useQuery } from "@tanstack/react-query";
import { client, loanSingleEntity } from "../../repository/requests.ts";
import { REQUEST_LOANS_ENTITY } from "../../repository/requestKeys.ts";
import { SmallLoader } from "../Loader/SmallLoader.tsx";
import { LoanType } from "../../types/LoanTypes.ts";
import { OverviewCardSmall } from "../OverviewCard/OverviewCardSmall.tsx";
import { formatRatio, formatCoin } from "../../utils";
import {
  displayInterestRate,
  displayRatio,
  displayCoinUSD,
  collateralizationRatio,
} from "../../utils/calculations.ts";
import { PositionsCard } from "../PositionsCard/PositionsCard.tsx";
import { AssetType } from "../../types/AssetTypes.ts";

export type LoanOverviewProps = {
  loanID: string;
  assetETH: AssetType;
};

export const LoanOverview: FC<LoanOverviewProps> = ({ loanID, assetETH }) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      const result = await client.query({
        query: loanSingleEntity,
        variables: { id: loanID },
      });
      return result.data;
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

  if (isError) {
    return (
      <div>
        <p>No data.</p>
      </div>
    );
  }

  const loanData: LoanType = data?.loanEntity ?? {};

  const collateralValue = displayCoinUSD(
    loanData.collateralAmount,
    assetETH.latestPrice,
    assetETH.aggregator.decimals,
  ).toFixed(2);

  const liabilityValue = displayCoinUSD(
    loanData.liabilityAmount,
    loanData?.asset?.latestPrice,
    loanData?.asset?.aggregator.decimals,
  ).toFixed(2);

  const netValueUsd = (
    displayCoinUSD(
      loanData.collateralAmount,
      assetETH.latestPrice,
      assetETH.aggregator.decimals,
    ) -
    displayCoinUSD(
      loanData.liabilityAmount,
      loanData?.asset?.latestPrice,
      loanData?.asset?.aggregator.decimals,
    )
  ).toFixed(2);

  const collRation = collateralizationRatio(
    loanData.collateralAmount,
    assetETH?.latestPrice,
    loanData?.asset?.aggregator?.decimals,
    loanData?.liabilityAmount,
    loanData?.asset?.latestPrice,
    assetETH?.aggregator?.decimals,
  );

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
          value={netValueUsd ? `$${netValueUsd}` : "$0.00"}
          label={"Net Value"}
          icon={netValue as string}
          color={"light-gold"}
        />
        <OverviewCard
          value={
            loanData.asset ? displayInterestRate(loanData.asset.rate) : "No data"
          }
          label={"Interest rate"}
          icon={barrowRate as string}
          color={"light-blue"}
        />
      </div>
      <div className={styles.overviewCardsWrapper}>
        <OverviewCardSmall
          value={loanData.asset ? collRation : "No data"}
          label={"Collateralization Ratio"}
        />
        <OverviewCardSmall
          value={
            loanData.borrowingRatio
              ? displayRatio(loanData.borrowingRatio)
              : "No data"
          }
          label={"Borrowing Ratio"}
        />
        <OverviewCardSmall
          value={
            loanData.liquidationRatio
              ? displayRatio(loanData.liquidationRatio)
              : "No data"
          }
          label={"Liquidation Ratio"}
        />
      </div>
      <section className={accStyles.positionsSection}>
        <div className={accStyles.positionsCardsWrapper}>
          <PositionsCard
            img={eth as string}
            valueUsd={isNaN(Number(collateralValue)) ? "0.00" : collateralValue}
            value={loanData ? formatCoin(loanData.collateralAmount) : ""}
            coinType={assetETH.symbol}
            badgeType={"text-bg-green"}
            badgeText={"Collateral"}
          />
          <PositionsCard
            img={aionCoin as string}
            valueUsd={isNaN(Number(liabilityValue)) ? "0.00" : liabilityValue}
            value={loanData ? formatCoin(loanData.liabilityAmount) : ""}
            coinType={
              loanData ? (loanData.asset ? loanData.asset.symbol : "") : ""
            }
            badgeType={"text-bg-orange"}
            badgeText={"Debt"}
          />
        </div>
      </section>
    </div>
  );
};
