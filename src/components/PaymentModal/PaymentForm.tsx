import { FC, useState } from "react";
import { Button } from "../Button/Button.tsx";
import styles from "./PaymentForm.module.css";
import { useAccount, useTransactionCount } from 'wagmi';
import { abi as loanAbi } from '../../../artifacts/contracts/Loan.sol/Loan.json'
import { abi as assetAbi } from '../../../artifacts/contracts/Asset.sol/Asset.json'
import { parseEther, Address } from "viem";
import { WriteContractMutateAsync } from "wagmi/query";
import { LoanType } from "../../types/LoanTypes.ts";
import { collateralizationRatioPercent, collateralizationRatioPercentAfter, paymentRedemption } from "../../utils/calculations.ts";
import { AssetType } from "../../types/AssetTypes.ts";


export type PaymentFormProps = {
  loan: LoanType;
  collateral: AssetType;
  asyncApprove: WriteContractMutateAsync<any, any>;
  asyncPayment: WriteContractMutateAsync<any, any>;
  setError: (error: string) => void;
};

export const PaymentForm: FC<PaymentFormProps> = ({ loan, collateral, asyncApprove, asyncPayment, setError }) => {
  
  const { address } = useAccount();
  const currentNonce = useTransactionCount({address: address});
  const [paymentAmount, setPaymentAmount] = useState<string>("");
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const regex = /^\d*\.?\d*$/;
    if (regex.test(value) || value === "") {
      if (Number(value) > Number(loan.liabilityAmount) / Math.pow(10, 18)) {
        setPaymentAmount((Number(loan.liabilityAmount) / Math.pow(10, 18)).toFixed(4));
      } else {
        setPaymentAmount(value);
      }
    }
  };

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await asyncApprove({
      abi: assetAbi,
      address: loan.asset.id as Address,
      functionName: 'approve',
      args: [loan.id as Address, parseEther(paymentAmount)],
      nonce: currentNonce.data ?? undefined,
    },
    {
      onError: (error) => {
        setError(error.message)
      }
    });
    
    const nonce = currentNonce.data ? currentNonce.data + 1 : undefined;

    await asyncPayment({
        abi: loanAbi,
        functionName: 'repay',
        args: [parseEther(paymentAmount)],
        address: loan.id as Address,
        nonce: nonce ?? undefined,
    },
    {
      onError: (error) => {
        setError(error.message)
      }
    });
  }

  const payment = Number(paymentAmount) < Number(loan.liabilityAmount) * Math.pow(10, 18) ? Number(paymentAmount) : Number(loan.liabilityAmount) * Math.pow(10, 18);

  const redemption = paymentRedemption(
    payment,
    loan.collateralAmount,
    loan.liabilityAmount,
    loan.asset.latestPrice,
    collateral.latestPrice,
    loan.asset.aggregator.decimals,
    collateral.aggregator.decimals,
    loan.borrowingRatio,
    loan.precision,

  );

  const crBefore = collateralizationRatioPercent(
    loan.collateralAmount,
    collateral.latestPrice,
    collateral.aggregator.decimals,
    loan.liabilityAmount,
    loan.asset.latestPrice,
    loan.asset.aggregator.decimals
  );

  const crAfter = collateralizationRatioPercentAfter(
    payment,
    loan.collateralAmount,
    collateral.latestPrice,
    collateral.aggregator.decimals,
    loan.liabilityAmount,
    loan.asset.latestPrice,
    loan.asset.aggregator.decimals,
    loan.borrowingRatio,
    loan.precision
  );
  
  return (
    <>
      <form
        onSubmit={submit}
        id={loan.id}
        className={styles.paymentForm}
      >
        <p className={styles.paymentFormTitle}>Pay</p>
        <div className={styles.inputWithUnitGrid}>
          <span className={styles.unitLabelLeft}></span> {/* Empty span for grid space */}
          <input
            type="text"
            name="collateral"
            id="collateral"
            autoComplete="off"
            className={styles.collateralInputGrid}
            value={paymentAmount}
            onChange={handleChange}
            placeholder="0.00"
          />
          <span className={styles.unitLabelRight}>{loan.asset.symbol}</span>
        </div>
        <Button size={"sm"} type={"submit"} btnType={"primary"}>
          Submit
        </Button>
      </form>
        <div className={styles.paymentInfoWrapper}>
        <p className={styles.paymentInfoTitle}>C.R. Before</p>
        <div className={styles.paymentInfoValue}>{crBefore}</div>
        <p className={styles.paymentInfoTitle}>C.R. After</p>
        <div className={styles.paymentInfoValue}>{crAfter}</div>
        <p className={styles.paymentInfoTitle}>Redemption</p>
        <div className={styles.paymentInfoValue}>{redemption.toFixed(2)} ETH</div>
      </div>
    </>
      );
};
