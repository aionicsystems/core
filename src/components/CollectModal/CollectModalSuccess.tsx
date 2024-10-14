import { FC } from "react";
import styles from "./CollectAssetInfo.module.css";
import { useAccount, useBalance } from "wagmi";
import { displayNumber } from "../../utils/calculations";

export type CollectModalSuccessProps = {
  beforeBalance: bigint;
  hash: string;
};

export const CollectModalSuccess: FC<CollectModalSuccessProps> = ({ hash, beforeBalance }) => {
    const account = useAccount();
    const { data: balance } = useBalance({ address: account?.address });

  return (
    <div>
      <div className={styles.collectInfoWrapper}>
        <p className={styles.collectInfoTitle}>Loan Collected</p>
        <div className={styles.collectInfoValue}>TX {hash.substring(0, 8)}</div>
      </div>
      { balance && beforeBalance ? <>
            <div className={styles.collectInfoWrapper}>
                <p className={styles.collectInfoTitle}>Net Value</p>
                <div className={styles.collectInfoValue}>{displayNumber(Number(balance.value - beforeBalance), 6)} ETH</div>
            </div>
        </> : null }
    </div>
  );
};