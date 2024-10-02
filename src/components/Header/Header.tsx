import { FC, useState } from "react";
import styles from "./Header.module.css";
import {
  adjustmentsIcon,
  chevron,
  ethIcon,
  logo,
} from "../../static/images.ts";
import { Button } from "../Button/Button.tsx";
import { useAccount, useChains } from "wagmi";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';

export const Header: FC = () => {
  const { isConnected } = useAccount();
  const [chain, _] = useChains();
  const [ userType, setUserType ] = useState<string>("Borrower");

  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();

  return (
    <header className={styles.headerWrapper}>
      <img className={styles.logo} src={logo as string} alt="aion" />
      <div className={styles.headerInner}>
        <Button size={"sm"} btnType={"primary"} onClick={isConnected ? openAccountModal : openConnectModal}>
          {isConnected ? "Account" : "Connect"}
        </Button>
        { isConnected && (
        <button type="button" className={styles.coinButton} onClick={openChainModal}>
          <img src={chain?.nativeCurrency?.symbol} alt="eth" className={styles.coinImage} />
          <span className={styles.coinSelectOpener}>
            <img src={chevron as string} alt="chevron" />
          </span>
        </button>)}
        { isConnected && (
          <Button size={"sm"} btnType={"primary"} onClick={isConnected ? openAccountModal : openConnectModal}>
            {userType}&nbsp;&nbsp;&nbsp;
            <span className={styles.coinSelectOpener}>
              <img src={chevron as string} alt="chevron" />
            </span>
          </Button>
        )}
      </div>
    </header>
  );
};