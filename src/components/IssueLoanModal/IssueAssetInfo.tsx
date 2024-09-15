import { FC } from "react";
import { AssetType } from "../../types/AssetTypes.ts";
import { formatRatio } from "../../utils";
import styles from "./IssueAssetInfo.module.css";
import {
  loanInterestRate,
  loanLiquidationRatioRate,
} from "../../utils/calculations.ts";

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
        Liquidation Ratio{" "}
        {loanLiquidationRatioRate(Number(issue.liquidationRatio))}
      </div>
      <div className={styles.issueInfoValue}>
        Annual Interest Rate {loanInterestRate(issue.rate)}
      </div>
    </div>
  );
};
