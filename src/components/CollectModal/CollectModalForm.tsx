import { FC } from "react";
import { Button } from "../Button/Button.tsx";
import styles from "./CollectModalForm.module.css";

import { useAccount, useTransactionCount } from 'wagmi';
import { abi } from '../../../artifacts/contracts/Loan.sol/Loan.json'
import { Address } from "viem";
import { WriteContractMutate } from "wagmi/query";
import { LoanType } from "../../types/LoanTypes.ts";

export type CollectModalFormProps = {
  loan?: LoanType;
  writeContract: WriteContractMutate<any, any>
};

export const CollectModalForm: FC<CollectModalFormProps> = ({ loan, writeContract }) => {
  
  const { address } = useAccount();
  const currentNonce = useTransactionCount({address: address});

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      writeContract({
        abi,
        address: loan?.id as Address,
        functionName: 'collect',
        nonce: currentNonce.data ?? undefined,
      });
    } catch (error) {
      console.error("Contract call failed:", error);
    }
  }

  return (
    <form
      onSubmit={submit}
      id={loan?.id}
      className={styles.collectModalForm}
    >
      <p className={styles.collectModalFormTitle}>Collect</p>
      <Button size={"sm"} type={"submit"} btnType={"primary"}>
        Submit
      </Button>
    </form>
  );
};