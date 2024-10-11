import { FC, useState, useEffect } from "react";

import styles from "./CollectAssetInfo.module.css";
import { useGlobalState } from "../../hooks/useGlobalState.tsx";

export type CollectAssetInfoProps = {
  loan: LoanType;
};

export const CollectAssetInfo: FC<CollectAssetInfoProps> = ({ loan }) => {
  
  const { state } = useGlobalState();
  

  return (
    <>
      <div className={styles.collectInfoWrapper}>
          <p className={styles.collectInfoTitle}>Interest</p>
          <div className={styles.collectInfoValue}>{liabilityUsd} {state.Collateral?.symbol}</div>
      </div>
      <div className={styles.collectInfoWrapper}>
          <p className={styles.collectInfoTitle}>Reward</p>
          <div className={styles.collectInfoValue}>{liabilityUsd} {state.Collateral?.symbol}</div>
          <p className={styles.collectInfoTitle}>TX Fee</p>
          <div className={styles.collectInfoValue}>{liabilityUsd} {state.Collateral?.symbol}</div>
          <p className={styles.collectInfoTitle}>Net Reward</p>
          <div className={styles.collectInfoValue}>{liabilityUsd} {state.Collateral?.symbol}</div>
      </div>
    </>
  );
};