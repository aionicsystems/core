import { FC, useState, useEffect } from "react";
import { Modal } from "../../types/ModalTypes.ts";
import { ModalOverlay } from "../modalBaseComponents/ModalOverlay.tsx";
import styles from "../modalBaseComponents/Modal.module.css";
import { ModalHeading } from "../modalBaseComponents/ModalHeading.tsx";
import { LiquidateModalFaq } from "./LiquidateModalFaq.tsx";
import { LiquidateInfo } from "./LiquidateInfo.tsx";
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
  const [liquidationAmount, setLiquidationAmount] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const { data: hash, isPending, writeContract } = useWriteContract();
  
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })
  
  

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
              { isPending || isConfirming ? (
                <Loader />
              ) : isConfirmed && hash ? (
                <LiquidateSuccess hash={hash} collateralAmount={collateralAmount} />
              ) : state.Loan && state.Collateral && state.Window &&
              ( <>
                  <LiquidateForm loan={state.Loan} writeContract={writeContract} setLiquidationAmount={setLiquidationAmount} liquidationAmount={liquidationAmount} />
                  <LiquidateInfo collateral={state.Collateral} loan={state.Loan} window={state.Window} liquidationAmount={liquidationAmount}  />
                </>
              )}
            </> 
          }
        </div>
      </div>
    </ModalOverlay>
  );
};
