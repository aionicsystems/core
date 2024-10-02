import { FC, useState } from "react";
import styles from "./Header.module.css";
import {
  chevron,
  logo,
} from "../../static/images.ts";
import { Button } from "../Button/Button.tsx";
import { useAccount } from "wagmi";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';

export const Header: FC = () => {
  const { isConnected, chain } = useAccount();
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
        { isConnected && chain && (
          <Button size={"sm"} btnType={"primary"} onClick={openChainModal}>
            {chain.name}&nbsp;&nbsp;&nbsp;
            <span className={styles.coinSelectOpener}>
              <img src={chevron as string} alt="chevron" />
            </span>
          </Button>
        )}
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