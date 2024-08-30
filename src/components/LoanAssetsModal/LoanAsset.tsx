import { FC } from "react";
import styles from "./LoanAsset.module.css";
import { aionCoin } from "../../static/images.ts";
import { AssetType } from "../../types/AssetTypes.ts";
import { formatAssetLoanRate, formatAssetLiquidationRatio } from "../../utils/";

export type LoanAssetProps = {
  item: AssetType;
  selectLoan: (loan: AssetType) => void;
};

export const LoanAsset: FC<LoanAssetProps> = ({ item, selectLoan }) => {
  return (
    <div onClick={() => selectLoan(item)} className={styles.loanAssetItem}>
      <div>
        <p className={styles.loanAssetSymbol}>{item.symbol}</p>
        <p className={styles.loanAssetValue}>
          Interest Rate: {formatAssetLoanRate(item.rate)}
        </p>
        <p className={styles.loanAssetValue}>
          Liquidation Ratio:{" "}
          {formatAssetLiquidationRatio(item.liquidationRatio)}
        </p>
      </div>
      <img
        loading="lazy"
        className={styles.loanAssetIcon}
        src={aionCoin as string}
        alt="loan asset icon"
      />
    </div>
  );
};
