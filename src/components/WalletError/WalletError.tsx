import { useWalletProvider } from "../../hooks/useWalletProvider.tsx";
import styles from "./WalletError.module.css";

export const WalletError = () => {
  const { errorMessage, clearError } = useWalletProvider();
  const isError = !!errorMessage;

  return (
    <div
      className={styles.walletError}
      style={{ backgroundColor: isError ? "#5B181899" : "transparent" }}
    >
      {isError && (
        <div onClick={clearError}>
          <strong>Error:</strong> {errorMessage}
        </div>
      )}
    </div>
  );
};
