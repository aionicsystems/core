import { FC } from "react";
import { AssetType } from "../../types/AssetTypes.ts";
import styles from "./LiquidateInfo.module.css";
import {
  liquidationPayment
} from "../../utils/calculations.ts";
import { WindowType } from "../../types/WindowTypes.ts";
import { LoanType } from "../../types/LoanTypes.ts";

export type LiquidateInfoProps = {
  loan: LoanType;
  window: WindowType;
  collateral: AssetType;
  liquidationAmount: string;
};

export const LiquidateInfo: FC<LiquidateInfoProps> = ({ loan, window, collateral, liquidationAmount }) => {

  const redemption = liquidationPayment(
        Number(liquidationAmount),
        loan.asset.latestPrice,
        collateral.latestPrice,
        loan.asset.aggregator.decimals,
        collateral.aggregator.decimals,
        window.liquidatorFee,
        window.precision
      )
  
  console.log(redemption);
  
  const price = (redemption * Number(collateral.latestPrice)) / (Number(liquidationAmount) * Math.pow(10, Number(collateral.aggregator.decimals)));
  
  return (
    <>
      <div className={styles.liquidateInfoWrapper}>
          <p className={styles.liquidateInfoTitle}>Net Redemption</p>
          <div className={styles.liquidateInfoValue}>{(redemption).toFixed(6)} {collateral.symbol}</div>
          <p className={styles.liquidateInfoTitle}>Effective Price</p>
          <div className={styles.liquidateInfoValue}>${price ? (price).toFixed(2): ""}</div>
      </div>
    </>
  );
};
