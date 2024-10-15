import { FC } from "react";
import styles from "./LiquidateInfo.module.css";

export type LiquidateSuccessProps = {
  collateralAmount: string;
  hash: string;
};

export const LiquidateSuccess: FC<LiquidateSuccessProps> = ({ hash, collateralAmount }) => {

  return (
    <>
      <div className={styles.issueInfoWrapper}>
        <p className={styles.issueInfoTitle}>Loan Issued</p>
        <div className={styles.issueInfoValue}>TX {hash.substring(0, 8)}</div>
      </div>
      <div className={styles.issueInfoWrapper}>
        <p className={styles.issueInfoTitle}>Collateral</p>
        <div className={styles.issueInfoValue}>{collateralAmount} ETH</div>
      </div>
    </>
  );
};
