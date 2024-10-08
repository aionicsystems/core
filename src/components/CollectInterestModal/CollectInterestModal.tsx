import { FC, useState } from "react";
import { Modal } from "../../types/ModalTypes.ts";
import { ModalOverlay } from "../modalBaseComponents/ModalOverlay.tsx";
import styles from "./CollectInterestModal.module.css";
import { ModalHeading } from "../modalBaseComponents/ModalHeading.tsx";
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { abi } from '../../../artifacts/contracts/Loan.sol/Loan.json';
import { Loader } from "../Loader/Loader.tsx";
import { ModalError } from "../ModalError/ModalError.tsx";
import { CollectInterestSuccess } from "./CollectInterestSuccess.tsx";

export type CollectInterestModalProps = Modal & {
  loanId: string;
};

export const CollectInterestModal: FC<CollectInterestModalProps> = ({
  modalTitle,
  onClose,
  size,
  loanId,
}) => {
  const [error, setError] = useState<boolean>(false);
  const [modalFaq, setModalFaq] = useState<boolean>(false);
  const { data: hash, isPending, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ 
      hash,
    });

  const handleCollectInterest = async () => {
    try {
      writeContract({
        abi,
        address: `0x${loanId}`,
        functionName: 'collect',
      });
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  const toggleModalFaq = () => {
    setModalFaq(!modalFaq);
  };

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
            <ModalError />
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
          {isPending || isConfirming ? (
            <Loader />
          ) : isConfirmed && hash ? (
            <CollectInterestSuccess hash={hash} />
          ) : (
            <div className={styles.collectInterestContent}>
              <p>Are you sure you want to collect interest?</p>
              <button onClick={handleCollectInterest} className={styles.collectInterestButton}>
                Collect Interest
              </button>
            </div>
          )}
        </div>
      </div>
    </ModalOverlay>
  );
};