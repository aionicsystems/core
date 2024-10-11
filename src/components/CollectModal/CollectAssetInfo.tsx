import { FC, useState, useEffect } from "react";
import { AssetType } from "../../types/AssetTypes.ts";
import styles from "./CollectAssetInfo.module.css";
import {
  displayInterestRate,
  displayRatio,
  estimatedLiability
} from "../../utils/calculations.ts";
import { useGlobalState } from "../../hooks/useGlobalState.tsx";

export type CollectAssetInfoProps = {
  issue: AssetType;
  collateralAmount: string;
};

export const CollectAssetInfo: FC<CollectAssetInfoProps> = ({ issue, collateralAmount }) => {
  
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
      <div className={styles.collectInfoWrapper}>
          <p className={styles.collectInfoTitle}>Asset</p>
          <div className={styles.collectInfoValue}>{liabilityUsd} {issue.symbol}</div>
      </div>
      <div className={styles.collectInfoWrapper}>
          <p className={styles.collectInfoTitle}>Terms</p>
          <div className={styles.collectInfoValue}>Borrowing Ratio {displayRatio(state?.Window?.borrowingRatio)}</div>
          <div className={styles.collectInfoValue}>
            Liquidation Ratio{" "}
            {displayRatio(issue.liquidationRatio)}
          </div>
          <div className={styles.collectInfoValue}>
            Annual Interest Rate {displayInterestRate(issue.rate)}
          </div>
      </div>
    </>
  );
};