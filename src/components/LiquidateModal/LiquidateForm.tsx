import { FC, useState } from "react";
import { Button } from "../Button/Button.tsx";
import styles from "./LiquidateForm.module.css";
import { useAccount, useTransactionCount } from 'wagmi';
import { abi as loanAbi } from '../../../artifacts/contracts/Loan.sol/Loan.json'
import { abi as assetAbi } from '../../../artifacts/contracts/Asset.sol/Asset.json'
import { parseEther, Address } from "viem";
import { WriteContractMutateAsync } from "wagmi/query";
import { LoanType } from "../../types/LoanTypes.ts";
import { liquidationPayment } from "../../utils/calculations.ts";
import { AssetType } from "../../types/AssetTypes.ts";
import { WindowType } from "../../types/WindowTypes.ts";

export type LiquidateFormProps = {
  loan: LoanType;
  collateral: AssetType;
  window: WindowType;
  asyncApprove: WriteContractMutateAsync<any, any>;
  asyncLiquidate: WriteContractMutateAsync<any, any>;
  setError: (error: string) => void;
};

export const LiquidateForm: FC<LiquidateFormProps> = ({ loan, collateral, window, asyncApprove, asyncLiquidate, setError }) => {
  
  const { address } = useAccount();
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

    await asyncApprove({
      abi: assetAbi,
      address: loan.asset.id as Address,
      functionName: 'approve',
      args: [loan.id as Address, parseEther(liquidationAmount)],
      nonce: currentNonce.data ?? undefined,
    },
    {
      onError: (error) => {
        setError(error.message)
      }
    });
    
    const nonce = currentNonce.data ? currentNonce.data + 1 : undefined;

    await asyncLiquidate({
        abi: loanAbi,
        functionName: 'liquidate',
        args: [parseEther(liquidationAmount)],
        address: loan.id as Address,
        nonce: nonce ?? undefined,
    },
    {
      onError: (error) => {
        setError(error.message)
      }
    });
  }

  const redemption = liquidationPayment(
    Number(liquidationAmount),
    loan,
    collateral,
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
        <p className={styles.liquidateFormTitle}>Redeem</p>
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
        <p className={styles.liquidateInfoTitle}>Redemption</p>
        <div className={styles.liquidateInfoValue}>{(redemption).toFixed(6)} {collateral.symbol}</div>
        <p className={styles.liquidateInfoTitle}>Protocol Price</p>
        <div className={styles.liquidateInfoValue}>${price ? (price).toFixed(2): ""}</div>
        <p className={styles.liquidateInfoTitle}>Liquidation Price</p>
        <div className={styles.liquidateInfoValue}>${liquidatorPrice ? (liquidatorPrice).toFixed(2): ""}</div>
      </div>
    </>
      );
};
