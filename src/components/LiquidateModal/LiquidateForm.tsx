import { FC, useEffect, useState } from "react";
import { Button } from "../Button/Button.tsx";
import styles from "./LiquidateForm.module.css";
import { contractAddress } from "../../repository/contracts.ts";
import { useAccount, useTransactionCount } from 'wagmi';
import { abi } from '../../../artifacts/contracts/Window.sol/Window.json'
import { parseEther, Address } from "viem";
import { WriteContractMutate } from "wagmi/query";
import { LoanType } from "../../types/LoanTypes.ts";
import { liquidationPayment } from "../../utils/calculations.ts";
import { AssetType } from "../../types/AssetTypes.ts";
import { WindowType } from "../../types/WindowTypes.ts";

export type LiquidateFormProps = {
  loan: LoanType;
  collateral: AssetType;
  window: WindowType;
  writeContract: WriteContractMutate<any, any>
};

export const LiquidateForm: FC<LiquidateFormProps> = ({ loan, collateral, window, writeContract }) => {
  
  const { chain, address } = useAccount();
  const currentNonce = useTransactionCount({address: address});
  const [liquidationAmount, setLiquidationAmount] = useState<string>("");
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const regex = /^\d*\.?\d*$/;
    if (regex.test(value) || value === "") {
      setLiquidationAmount(value);
    }
  };

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      writeContract({
        abi,
        address: contractAddress("window", chain?.id) as Address,
        functionName: 'liquidate',
        args: [loan.id as Address],
        value: parseEther(liquidationAmount),
        nonce: currentNonce.data ?? undefined,
      });
    } catch (error) {
      console.error("Contract call failed:", error);
    }
  }

  const redemption = liquidationPayment(
    Number(liquidationAmount),
    loan.asset.latestPrice,
    collateral.latestPrice,
    loan.asset.aggregator.decimals,
    collateral.aggregator.decimals,
    window.liquidatorFee,
    window.precision
  );

  const price = Number(loan.asset.latestPrice) / Math.pow(10, Number(loan.asset.aggregator.decimals))
  const liquidatorPrice = (1 + Number(window.liquidatorFee) / Math.pow(10, Number(window.precision))) * Number(loan.asset.latestPrice) / Math.pow(10, Number(loan.asset.aggregator.decimals));

  return (
    <>
      <form
        onSubmit={submit}
        id={loan.id}
        className={styles.liquidateForm}
      >
        <p className={styles.liquidateFormTitle}>Liquidate</p>
        <div className={styles.inputWithUnitGrid}>
          <span className={styles.unitLabelLeft}></span> {/* Empty span for grid space */}
          <input
            type="text"
            name="collateral"
            id="collateral"
            autoComplete="off"
            className={styles.collateralInputGrid}
            value={liquidationAmount}
            onChange={handleChange}
            placeholder="0.00"
          />
          <span className={styles.unitLabelRight}>{loan.asset.symbol}</span>
        </div>
        <Button size={"sm"} type={"submit"} btnType={"primary"}>
          Submit
        </Button>
      </form>
        <div className={styles.liquidateInfoWrapper}>
        <p className={styles.liquidateInfoTitle}>Net Redemption</p>
        <div className={styles.liquidateInfoValue}>{(redemption).toFixed(6)} {collateral.symbol}</div>
        <p className={styles.liquidateInfoTitle}>Protocol Price</p>
        <div className={styles.liquidateInfoValue}>${price ? (price).toFixed(2): ""}</div>
        <p className={styles.liquidateInfoTitle}>Liquidation Price</p>
        <div className={styles.liquidateInfoValue}>${liquidatorPrice ? (liquidatorPrice).toFixed(2): ""}</div>
      </div>
    </>
      );
};
