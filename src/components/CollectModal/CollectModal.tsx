import { FC, useState, useEffect } from "react";
import { Modal } from "../../types/ModalTypes.ts";
import { ModalOverlay } from "../modalBaseComponents/ModalOverlay.tsx";
import styles from "../modalBaseComponents/Modal.module.css";
import { ModalHeading } from "../modalBaseComponents/ModalHeading.tsx";
import { CollectModalFaq } from "./CollectModalFaq.tsx";
import { CollectAssetInfo } from "./CollectAssetInfo";
import { CollectModalForm } from "./CollectModalForm";
import { CollectModalSuccess } from "./CollectModalSuccess";
import { ModalError } from "../ModalError/ModalError.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { useWriteContract, useWaitForTransactionReceipt, useBalance, useAccount } from 'wagmi';
import { useGlobalState } from "../../hooks/useGlobalState.tsx";


export type CollectModalProps = Modal & {
  selectedAsset?: string;
};

export const CollectModal: FC<CollectModalProps> = ({
  modalTitle,
  onClose,
  size
}) => {
  const [modalFaq, setModalFaq] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { state } = useGlobalState();
  const { data: hash, isPending, writeContract } = useWriteContract();
  const [beforeBalance, setBeforeBalance] = useState<bigint>();
  
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })
  const account = useAccount();
  const { data: balance} = useBalance({ address: account?.address });

  useEffect(() => {
    if (balance && !beforeBalance) {
      setBeforeBalance(balance.value);
    }
  },[balance]);



  const toggleModalFaq = () => {
    setModalFaq(!modalFaq);
  };

  useEffect(() => {
    console.log("isConfirmed:", isConfirmed);
    console.log("hash:", hash);
  }, [isConfirmed, hash]);

  if (error) {
    return (
      <ModalOverlay onClose={onClose} size={size}>
        <div className={styles.modalInner}>
          <ModalHeading
            toggleFaq={toggleModalFaq}
            onClose={onClose}
            modalTitle={modalTitle}
          />
          <div className={styles.modalContent}>
            {modalFaq ? <CollectModalFaq /> : <ModalError />}
          </div>
        </div>
      </ModalOverlay>
    );
  }

  return (
    <ModalOverlay onClose={onClose} size={size}>
      <div className={styles.modalInner}>
        <ModalHeading
          toggleFaq={toggleModalFaq}
          onClose={onClose}
          modalTitle={modalTitle}
        />
        <div className={styles.modalContent}>
          { modalFaq ? (
            <CollectModalFaq />
          ) : 
            <>
              {isPending || isConfirming ? (
                <Loader />
              ) : isConfirmed && hash && beforeBalance ? (
                <CollectModalSuccess hash={hash} beforeBalance={beforeBalance} />
              ) : state.Loan &&
              ( <>
                <CollectModalForm loan={state.Loan} writeContract={writeContract} />
                <CollectAssetInfo loan={state.Loan} />
                </>
              )}
            </> 
          }
        </div>
      </div>
    </ModalOverlay>
  );
};
