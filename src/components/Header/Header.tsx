import { FC, useContext, useState } from "react";
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
import { UserTypeContext } from "../../hooks/useUserType.tsx";
import { UserTypeDropdown } from "../UserType/UserTypeDropdown.tsx";
import { userTypes } from "../../hooks/useUserType.tsx";


export const Header: FC = () => {
  const { isConnected, chain } = useAccount();
  const { userType, setUserType } = useContext(UserTypeContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();

  const handleUserTypeClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleUserTypeSelect = (type: string) => {
    setUserType(type);
    setShowDropdown(false);
  };

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
          <div className={styles.userTypeWrapper}>
            <Button size={"sm"} btnType={"primary"} onClick={handleUserTypeClick}>
              {userType}&nbsp;&nbsp;&nbsp;
              <span className={styles.coinSelectOpener}>
                <img src={chevron as string} alt="chevron" />
              </span>
            </Button>
            {showDropdown && (
              <UserTypeDropdown userTypes={userTypes} onSelect={handleUserTypeSelect} />
            )}
          </div>
        )}
      </div>
    </header>
  );
};