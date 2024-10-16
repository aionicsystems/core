import { FC, useState, useEffect } from "react";
import { Modal } from "../../types/ModalTypes.ts";
import { ModalOverlay } from "../modalBaseComponents/ModalOverlay.tsx";
import styles from "../modalBaseComponents/Modal.module.css";
import { ModalHeading } from "../modalBaseComponents/ModalHeading.tsx";
import { LiquidateModalFaq } from "./LiquidateModalFaq.tsx";
import { LiquidateForm } from "./LiquidateForm.tsx";
import { LiquidateSuccess } from "./LiquidateSuccess.tsx";
import { ModalError } from "../ModalError/ModalError.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { LoanAssetsModalFaq } from "../LoanAssetsModal/LoanAssetsModalFaq.tsx";
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { useGlobalState } from "../../hooks/useGlobalState.tsx";

export type LiquidateModalProps = Modal & {
  selectedAsset?: string;
};

export const LiquidateModal: FC<LiquidateModalProps> = ({
  modalTitle,
  onClose,
  size,
}) => {
  const [modalFaq, setModalFaq] = useState<boolean>(false);
  const { state } = useGlobalState();
  
  const [error, setError] = useState<boolean>(false);
  const { isPending: isPendingApprove, writeContractAsync: writeContractAsyncApprove } = useWriteContract();
  const { data: hashLiquidate, isPending: isPendingLiquidate, writeContractAsync: writeContractAsyncLiquidate } = useWriteContract();
  
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash: hashLiquidate })
  
  const toggleModalFaq = () => {
    setModalFaq(!modalFaq);
  };

  useEffect(() => {
    console.log("isConfirmed:", isConfirmed);
    console.log("hash:", hashLiquidate);
  }, [isConfirmed, hashLiquidate]);

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
            {modalFaq ? <LoanAssetsModalFaq /> : <ModalError />}
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
            <LiquidateModalFaq />
          ) : 
            <>
              { isPendingApprove || isPendingLiquidate || isConfirming ? (
                <Loader />
              ) : isConfirmed && hashLiquidate ? (
                <LiquidateSuccess hash={hashLiquidate} />
              ) : state.Loan && state.Collateral && state.Window &&
              ( <>
                  <LiquidateForm collateral= {state.Collateral} loan={state.Loan} window={state.Window} asyncApprove={writeContractAsyncApprove} asyncLiquidate={writeContractAsyncLiquidate} setError={setError} />
                </>
              )}
            </> 
          }
        </div>
      </div>
    </ModalOverlay>
  );
};
