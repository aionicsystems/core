import { FC, useState } from "react";
import { Button } from "../Button/Button.tsx";
import styles from "./IssueLoanForm.module.css";
import { contractAddress } from "../../repository/contracts.ts";
import { useAccount, useWriteContract } from 'wagmi';
import { abi } from '../../../artifacts/contracts/Window.sol/Window.json'
import { parseEther, Address } from "viem";

export type IssueLoanFormProps = {
  assetID?: string;
  setCollateralAmount: (collateralAmount:string) => void;
  collateralAmount: string;
};

export const IssueLoanForm: FC<IssueLoanFormProps> = ({ assetID, setCollateralAmount, collateralAmount }) => {
  const { data: hash, isPending, writeContractAsync } = useWriteContract();
  const { chain } = useAccount();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const regex = /^\d*\.?\d*$/;
    if (regex.test(value) || value === "") {
      setCollateralAmount(value);
    }
  };

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Add error handling
    console.log(assetID);
    writeContractAsync({
      address: contractAddress("window", chain?.id) as Address,
      abi,
      functionName: 'issue',
      args: [assetID as Address],
      value: parseEther(collateralAmount)
    })
  }

  return (
    <form
      onSubmit={submit}
      id={assetID}
      className={styles.issueLoanForm}
    >
      <p className={styles.issueLoanFormTitle}>Collateral (ETH)</p>
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
      <Button size={"sm"} type={"submit"} btnType={"primary"} disabled={isPending}>
        Submit
      </Button>
      {isPending ? 'Confirming...' : 'Issue'}
      {hash && <div>Transaction Hash: {hash}</div>}
    </form>
  );
};
