import { FC, useState, useEffect } from "react";
import { Modal } from "../../types/ModalTypes.ts";
import { ModalOverlay } from "../modalBaseComponents/ModalOverlay.tsx";
import styles from "../modalBaseComponents/Modal.module.css";
import { ModalHeading } from "../modalBaseComponents/ModalHeading.tsx";
import { PaymentModalFaq } from "./PaymentModalFaq.tsx";
import { PaymentForm } from "./PaymentForm.tsx";
import { PaymentSuccess } from "./PaymentSuccess.tsx";
import { ModalError } from "../ModalError/ModalError.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { LoanAssetsModalFaq } from "../LoanAssetsModal/LoanAssetsModalFaq.tsx";
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { useGlobalState } from "../../hooks/useGlobalState.tsx";

export type PaymentModalProps = Modal & {
  selectedAsset?: string;
};

export const PaymentModal: FC<PaymentModalProps> = ({
  modalTitle,
  onClose,
  size,
}) => {
  const [modalFaq, setModalFaq] = useState<boolean>(false);
  const { state } = useGlobalState();
  
  const [error, setError] = useState<boolean>(false);
  const { isPending: isPendingApprove, writeContractAsync: writeContractAsyncApprove } = useWriteContract();
  const { data: hashPayment, isPending: isPendingPayment, writeContractAsync: writeContractAsyncPayment } = useWriteContract();
  
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash: hashPayment })
  
  const toggleModalFaq = () => {
    setModalFaq(!modalFaq);
  };

  useEffect(() => {
    console.log("isConfirmed:", isConfirmed);
    console.log("hash:", hashPayment);
  }, [isConfirmed, hashPayment]);

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
            <PaymentModalFaq />
          ) : 
            <>
              { isPendingApprove || isPendingPayment || isConfirming ? (
                <Loader />
              ) : isConfirmed && hashPayment ? (
                <PaymentSuccess hash={hashPayment} />
              ) : state.Loan && state.Collateral && state.Window &&
              ( <>
                  <PaymentForm collateral= {state.Collateral} loan={state.Loan} window={state.Window} asyncApprove={writeContractAsyncApprove} asyncPayment={writeContractAsyncPayment} setError={setError} />
                </>
              )}
            </> 
          }
        </div>
      </div>
    </ModalOverlay>
  );
};
