import { FC, useState } from "react";
import { Button } from "../Button/Button.tsx";
import styles from "./IssueLoanForm.module.css";
import { contractAddress } from "../../repository/contracts.ts";
import { useAccount, useWriteContract } from 'wagmi';
import { abi } from '../../../artifacts/contracts/Loan.sol/Loan.json'
import { parseEther, Address } from "viem";

export type IssueLoanFormProps = {
  assetID?: string;
};

export const IssueLoanForm: FC<IssueLoanFormProps> = ({ assetID }) => {
  const [collateral, setCollateral] = useState<string>("0.00 ETH");
  const { data: hash, writeContract } = useWriteContract()
  const { chain } = useAccount();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const regex = /^\d+(\.\d{0,2})? ETH$/;
    if (regex.test(value) || value === "") {
      setCollateral(value);
    }
  };

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Add error handling

    writeContract({
      address: contractAddress("window", chain?.name) as Address,
      abi,
      functionName: 'issue',
      args: [assetID],
      value: parseEther(collateral)
    })
  }

  return (
    <form
      onSubmit={submit}
      id={assetID}
      className={styles.issueLoanForm}
    >
      <p className={styles.issueLoanFormTitle}>Collateral</p>
      <input
        type="text"
        name="collateral"
        id="collateral"
        className={styles.collateralInput}
        value={collateral}
        onChange={handleChange}
        placeholder="0.00 ETH"
      />
      <Button size={"sm"} type={"submit"} btnType={"primary"}>
        Submit
      </Button>
    </form>
  );
};
