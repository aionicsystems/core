import { FC, useMemo } from "react";

interface CollectAssetInfoProps {
  loan: LoanType;
}
import { Address, Abi } from "viem";
import styles from "./CollectAssetInfo.module.css";
import { useGlobalState } from "../../hooks/useGlobalState.tsx";
import { displayNumber } from "../../utils/calculations.ts";
import { useEstimatedWriteContractGasCost } from "../../hooks/useEstimateWriteContractGasCost.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { LoanType } from "../../types/LoanTypes.ts";


export const CollectAssetInfo: FC<CollectAssetInfoProps> = ({ loan }) => {
  const { state } = useGlobalState();

  // Memoize the ABI to ensure it doesn't change on every render
  const abi = useMemo(() => [
    { 
      type: 'function', 
      name: 'collect', 
      stateMutability: 'public',
    }
  ], []);

  // Memoize the arguments to ensure they don't change on every render
  const args = useMemo(() => [], []);

  const { estimatedGasCost, isLoading } = useEstimatedWriteContractGasCost({ 
    address: loan.id as Address, 
    abi: abi as Abi, 
    functionName: 'collect', 
    args: args 
  });

  if (estimatedGasCost) {
    console.log("estimatedGasCost:", estimatedGasCost);
  }

  return (
    <>
      <div className={styles.collectInfoWrapper}>
        { isLoading ? <Loader /> : estimatedGasCost ? (
          <>
            <p className={styles.collectInfoTitle}>Net Reward</p>
            <div className={styles.collectInfoValue}>{displayNumber(loan.collectorReward - Number(estimatedGasCost), 6)} {state.Collateral?.symbol}</div>
            <p className={styles.collectInfoTitle}>Interest</p>
            <div className={styles.collectInfoValue}>{displayNumber(loan.interest, 6)} {state.Collateral?.symbol}</div>
            <p className={styles.collectInfoTitle}>Reward</p>
            <div className={styles.collectInfoValue}>{displayNumber(loan.collectorReward, 6)} {state.Collateral?.symbol}</div>
            <p className={styles.collectInfoTitle}>TX Fee</p>
            <div className={styles.collectInfoValue}>{displayNumber(Number(estimatedGasCost), 6)} {state.Collateral?.symbol}</div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default CollectAssetInfo;
