import { FC, useState, useEffect } from "react";
import { AssetType } from "../../types/AssetTypes.ts";
import styles from "./IssueAssetInfo.module.css";
import {
  displayInterestRate,
  displayRatio,
  estimatedLiability
} from "../../utils/calculations.ts";
import { useGlobalState } from "../../hooks/useGlobalState.tsx";

export type IssueAssetInfoProps = {
  issue: AssetType;
  collateralAmount: string;
};

export const IssueAssetInfo: FC<IssueAssetInfoProps> = ({ issue, collateralAmount }) => {
  
  const { state } = useGlobalState();
  const [liabilityUsd, setLiabilityUsd] = useState<string>("0")

  useEffect(() => {
    setLiabilityUsd(
      estimatedLiability(collateralAmount, state?.Collateral?.latestPrice, issue.latestPrice, state?.Window?.borrowingRatio, state?.Window?.precision).toFixed(2)
    )
    console.log(liabilityUsd)
  }, [state, issue, window, collateralAmount]);

  return (
    <>
      <div className={styles.issueInfoWrapper}>
          <p className={styles.issueInfoTitle}>Asset</p>
          <div className={styles.issueInfoValue}>{liabilityUsd} {issue.symbol}</div>
      </div>
      <div className={styles.issueInfoWrapper}>
          <p className={styles.issueInfoTitle}>Terms</p>
          <div className={styles.issueInfoValue}>Borrowing Ratio {displayRatio(state?.Window?.borrowingRatio)}</div>
          <div className={styles.issueInfoValue}>
            Liquidation Ratio{" "}
            {displayRatio(issue.liquidationRatio)}
          </div>
          <div className={styles.issueInfoValue}>
            Annual Interest Rate {displayInterestRate(issue.rate)}
          </div>
      </div>
    </>
  );
};
