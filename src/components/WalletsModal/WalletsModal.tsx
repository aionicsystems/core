import { FC } from "react";
import { ModalOverlay } from "../modalBaseComponents/ModalOverlay.tsx";
import { Modal } from "../../types/ModalTypes.ts";
import styles from "./WalletsModal.module.css";
import { ModalHeading } from "../modalBaseComponents/ModalHeading.tsx";
import { WalletList } from "../WalletList/WalletList.tsx";
import { SelectedWallet } from "../SelectedWallet/SelectedWallet.tsx";
import { WalletError } from "../WalletError/WalletError.tsx";
import { useWalletProvider } from "../../hooks/useWalletProvider.tsx";

type WalletsModalProps = Modal;

export const WalletsModal: FC<WalletsModalProps> = ({
  size,
  onClose,
  modalTitle,
  modalTooltipText,
}) => {
  const { errorMessage } = useWalletProvider();
  const isError = !!errorMessage;
  return (
    <ModalOverlay onClose={onClose} size={size}>
      <div className={styles.walletsModalInner}>
        <ModalHeading
          onClose={onClose}
          modalTitle={modalTitle}
          modalTooltipText={modalTooltipText}
        />
        <div className={styles.walletsModalContent}>
          <WalletList />
          {isError && <WalletError />}
          <SelectedWallet />
        </div>
      </div>
    </ModalOverlay>
  );
};
