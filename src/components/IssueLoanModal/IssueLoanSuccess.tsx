import { FC } from "react";
import { AssetType } from "../../types/AssetTypes.ts";
import styles from "./IssueAssetInfo.module.css";

export type IssueLoanSuccessProps = {
  issue: AssetType;
  collateralAmount: string;
  hash: string;
};

export const IssueLoanSuccess: FC<IssueLoanSuccessProps> = ({ hash, collateralAmount }) => {

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
