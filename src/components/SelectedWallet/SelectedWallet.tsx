import { useWalletProvider } from "../..//hooks/useWalletProvider";
import { formatAddress } from "../..//utils";
import styles from "./SelectedWallet.module.css";

export const SelectedWallet = () => {
  const { selectedWallet, selectedAccount } = useWalletProvider();

  return (
    <div className={styles.selectedWalletInfoWrapper}>
      <h2 className={styles.selectedWalletTitle}>
        {selectedAccount ? "" : "No "}Connected Wallet
      </h2>
      {selectedAccount && (
        <div className={styles.selectedWallet}>
          <img
            src={selectedWallet?.info.icon}
            alt={selectedWallet?.info.name}
          />
          <p>
            {selectedWallet?.info.name}({formatAddress(selectedAccount)})
            <strong>uuid:</strong> {selectedWallet?.info.uuid}
          </p>
        </div>
      )}
    </div>
  );
};
