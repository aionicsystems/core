import { FC, useState, useEffect } from "react";
import { Modal } from "../../types/ModalTypes.ts";
import { ModalOverlay } from "../modalBaseComponents/ModalOverlay.tsx";
import styles from "../modalBaseComponents/Modal.module.css";
import { ModalHeading } from "../modalBaseComponents/ModalHeading.tsx";
import { CollectModalFaq } from "./CollectModalFaq.tsx";
import { useQuery } from "@tanstack/react-query";
import { assetSingleEntity, client } from "../../repository/requests.ts";
import { AssetType } from "../../types/AssetTypes.ts";
import { CollectAssetInfo } from "./CollectAssetInfo";
import { CollectModalForm } from "./CollectModalForm";
import { CollectModalSuccess } from "./CollectModalSuccess";
import { ModalError } from "../ModalError/ModalError.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { REQUEST_ASSET_ENTITIES } from "../../repository/requestKeys.ts";
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
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
  const [collateralAmount, setCollateralAmount] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const { state } = useGlobalState();
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
              ) : isConfirmed && hash ? (
                <CollectModalSuccess hash={hash} collateralAmount={collateralAmount} />
              ) :
              (
                <CollectModalForm loan={state.Loan} writeContract={writeContract} />
              )}
              <CollectAssetInfo state={state} />
            </> 
          }
        </div>
      </div>
    </ModalOverlay>
  );
};