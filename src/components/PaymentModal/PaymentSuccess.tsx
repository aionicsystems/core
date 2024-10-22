import { FC } from "react";
import styles from "./PaymentForm.module.css";

export type PaymentSuccessProps = {
  hash: string;
};

export const PaymentSuccess: FC<PaymentSuccessProps> = ({ hash }) => {

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
