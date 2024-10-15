import { FC } from "react";
import { Button } from "../Button/Button.tsx";
import styles from "./LiquidateForm.module.css";
import { contractAddress } from "../../repository/contracts.ts";
import { useAccount, useTransactionCount } from 'wagmi';
import { abi } from '../../../artifacts/contracts/Window.sol/Window.json'
import { parseEther, Address } from "viem";
import { WriteContractMutate } from "wagmi/query";
import { LoanType } from "../../types/LoanTypes.ts";

export type LiquidateFormProps = {
  loan: LoanType;
  setLiquidationAmount: (liquidationAmount:string) => void;
  liquidationAmount: string;
  writeContract: WriteContractMutate<any, any>
};

export const LiquidateForm: FC<LiquidateFormProps> = ({ loan, setLiquidationAmount, liquidationAmount, writeContract }) => {
  
  const { chain, address } = useAccount();
  const currentNonce = useTransactionCount({address: address});

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

  return (
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
  );
};
