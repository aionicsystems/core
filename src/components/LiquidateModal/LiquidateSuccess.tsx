import { FC } from "react";
import styles from "./LiquidateForm.module.css";

export type LiquidateSuccessProps = {
  hash: string;
};

export const LiquidateSuccess: FC<LiquidateSuccessProps> = ({ hash }) => {

  return (
    <>
      <div className={styles.issueInfoWrapper}>
        <p className={styles.issueInfoTitle}>Loan Issued</p>
        <div className={styles.issueInfoValue}>TX {hash.substring(0, 8)}</div>
      </div>
      <div className={styles.issueInfoWrapper}>
        <p className={styles.issueInfoTitle}>Collateral</p>
        <div className={styles.issueInfoValue}>{} ETH</div>
      </div>
    </>
  );
};
