import { FC } from "react";
import { AssetType } from "../../types/AssetTypes.ts";
import { formatAssetLiquidationRatio, formatAssetLoanRate } from "../../utils";
import styles from "./IssueAssetInfo.module.css";

export type IssueAssetInfoProps = {
  issue: AssetType;
};

export const IssueAssetInfo: FC<IssueAssetInfoProps> = ({ issue }) => {
  return (
    <div className={styles.issueInfoWrapper}>
      <p className={styles.issueInfoTitle}>Asset</p>
      <div className={styles.issueInfoValue}>1,000.90 {issue.symbol}</div>
      <div className={styles.issueInfoValue}>Borrowing Ratio 150%</div>
      <div className={styles.issueInfoValue}>
        Liquidation Ratio {formatAssetLiquidationRatio(issue.liquidationRatio)}
      </div>
      <div className={styles.issueInfoValue}>
        Annual Interest Rate {formatAssetLoanRate(issue.rate)}
      </div>
    </div>
  );
};
