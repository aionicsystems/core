import { FC } from "react";
import styles from "./CollectAssetInfo.module.css";

export type CollectModalSuccessProps = {
  collateralAmount: string;
  hash: string;
};

export const CollectModalSuccess: FC<CollectModalSuccessProps> = ({ hash, collateralAmount }) => {

  return (
    <>
      <div className={styles.collectInfoWrapper}>
        <p className={styles.collectInfoTitle}>Loan Collected</p>
        <div className={styles.collectInfoValue}>TX {hash.substring(0, 8)}</div>
      </div>
      <div className={styles.collectInfoWrapper}>
        <p className={styles.collectInfoTitle}>Collateral</p>
        <div className={styles.collectInfoValue}>{collateralAmount} ETH</div>
      </div>
    </>
  );
};