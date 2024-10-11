import { FC, useState } from "react";
import { Button } from "../Button/Button.tsx";
import styles from "./CollectModalForm.module.css";
import { contractAddress } from "../../repository/contracts.ts";
import { useAccount, useTransactionCount } from 'wagmi';
import { abi } from '../../../artifacts/contracts/Loan.sol/Loan.json'
import { parseEther, Address } from "viem";
import { WriteContractMutate } from "wagmi/query";

export type CollectModalFormProps = {
  assetID?: string;
  setCollateralAmount: (collateralAmount:string) => void;
  collateralAmount: string;
  writeContract: WriteContractMutate<any, any>
};

export const CollectModalForm: FC<CollectModalFormProps> = ({ assetID, setCollateralAmount, collateralAmount, writeContract }) => {
  
  const { chain, address } = useAccount();
  const currentNonce = useTransactionCount({address: address});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const regex = /^\d*\.?\d*$/;
    if (regex.test(value) || value === "") {
      setCollateralAmount(value);
    }
  };

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      writeContract({
        abi,
        address: contractAddress("loan", chain?.id) as Address,
        functionName: 'collect',
        args: [assetID as Address],
        value: parseEther(collateralAmount),
        nonce: currentNonce.data ?? undefined,
      });
    } catch (error) {
      console.error("Contract call failed:", error);
    }
  }

  return (
    <form
      onSubmit={submit}
      id={assetID}
      className={styles.collectModalForm}
    >
      <p className={styles.collectModalFormTitle}>Collateral</p>
      <div className={styles.inputWithUnitGrid}>
        <span className={styles.unitLabelLeft}></span> {/* Empty span for grid space */}
        <input
          type="text"
          name="collateral"
          id="collateral"
          autoComplete="off"
          className={styles.collateralInputGrid}
          value={collateralAmount}
          onChange={handleChange}
          placeholder="0.00"
        />
        <span className={styles.unitLabelRight}>ETH</span>
      </div>
      <Button size={"sm"} type={"submit"} btnType={"primary"}>
        Submit
      </Button>
    </form>
  );
};