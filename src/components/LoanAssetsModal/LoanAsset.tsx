import { FC } from "react";
import styles from "./LoanAsset.module.css";
import { aionCoin } from "../../static/images.ts";
import { AssetType } from "../../types/AssetTypes.ts";
import {
  displayInterestRate,
  displayRatio,
} from "../../utils/calculations.ts";

export type LoanAssetProps = {
  item: AssetType;
  selectAsset: (loan: AssetType) => void;
};

export const LoanAsset: FC<LoanAssetProps> = ({ item, selectAsset }) => {
  return (
    <div onClick={() => selectAsset(item)} className={styles.loanAssetItem}>
      <div>
        <p className={styles.loanAssetSymbol}>{item.symbol}</p>
        <p className={styles.loanAssetValue}>
          Interest Rate: {displayInterestRate(item.rate)}
        </p>
        <p className={styles.loanAssetValue}>
          Liquidation Ratio:{" "}
          {displayRatio(Number(item.liquidationRatio))}
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
