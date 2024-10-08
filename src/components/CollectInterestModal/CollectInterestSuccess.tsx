import { FC } from "react";
import styles from "./CollectInterestSuccess.module.css";

export type CollectInterestSuccessProps = {
  hash: string;
};

export const CollectInterestSuccess: FC<CollectInterestSuccessProps> = ({ hash }) => {
  return (
    <div className={styles.successContent}>
      <h2>Interest Collected Successfully!</h2>
      <p>Transaction Hash:</p>
      <a href={`https://etherscan.io/tx/${hash}`} target="_blank" rel="noopener noreferrer">
        {hash}
      </a>
    </div>
  );
};