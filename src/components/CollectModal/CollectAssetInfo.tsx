import { FC, useEffect, useState } from 'react';
import styles from './CollectAssetInfo.module.css';
import {collectorReward, interest, timestamp} from '../../utils/calculations.ts'
import { abi } from '../../../artifacts/contracts/Loan.sol/Loan.json'
import { GlobalStateInterface } from '../../hooks/GlobalStateProvider.tsx';
import { Address, formatEther } from 'viem';
import { usePublicClient } from 'wagmi';

interface CollectAssetInfoProps {
  state: GlobalStateInterface;
}



const CollectAssetInfo: FC<CollectAssetInfoProps> = ({ state }) => {
  const [networkFee, setNetworkFee] = useState("");
  const [netReward, setNetReward] = useState(0);
  const publicClient = usePublicClient();
  
  let loanInterest = interest(
    state.Loan.collateralAmount,
    state.Loan.interestRate,
    state.Loan.lastCollection,
    timestamp,
    state.Window?.precision
  )

  let loanCollectorReward = collectorReward(
    loanInterest, 
    state.Window.collectorFee, 
    state.Window.precision
  )

  useEffect(() => {
    async function estimateGasFee() {
      const estimatedGas = (await publicClient?.estimateContractGas({
        address: state.Loan.id as Address,
        abi: abi,
        functionName: "collect",
      })) as bigint;
    
      const gasPrice = (await publicClient?.getGasPrice()) as bigint;
    
      setNetworkFee(formatEther(estimatedGas * gasPrice));
      setNetReward(loanCollectorReward - Number(formatEther(estimatedGas * gasPrice)))
    }

    estimateGasFee()
  }, [state, publicClient])

  return (
    <>
      {state?.Window ? (
        <>
          <div className={styles.collectInfoWrapper}>
            <p className={styles.collectInfoTitle}>Interest</p>
            <div className={styles.collectInfoValue}>
              {loanInterest} {state.Collateral?.symbol}
            </div>
          </div>
          <div className={styles.collectInfoWrapper}>
            <p className={styles.collectInfoTitle}>Reward</p>
            <div className={styles.collectInfoValue}>{loanCollectorReward} {state.Collateral.symbol}</div>
            <p className={styles.collectInfoTitle}>TX Fee</p>
            <div className={styles.collectInfoValue}>{networkFee} {state.Collateral.symbol}</div>
            <p className={styles.collectInfoTitle}>Net Reward</p>
            <div className={styles.collectInfoValue}>{netReward} {state.Collateral.symbol}</div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CollectAssetInfo;