import { FC } from "react";
import styles from "./Header.module.css";
import {
  adjustmentsIcon,
  chevron,
  ethIcon,
  logo,
} from "../../static/images.ts";
import { Button } from "../Button/Button.tsx";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

export const Header: FC = () => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  const isWallet = !!address;

  return (
    <header className={styles.headerWrapper}>
      <img className={styles.logo} src={logo as string} alt="aion" />
      <div className={styles.headerInner}>
        <Button size={"sm"} btnType={"primary"} onClick={() => open()}>
          {isWallet ? "Open" : "Connect"}
        </Button>
        <button type="button" className={styles.coinButton}>
          <img src={ethIcon as string} alt="eth" className={styles.coinImage} />
          <span className={styles.coinSelectOpener}>
            <img src={chevron as string} alt="chevron" />
          </span>
        </button>
        <button type="button" className={styles.adjustments}>
          <img src={adjustmentsIcon as string} alt="adjustments icon" />
        </button>
      </div>
    </header>
  );
};
