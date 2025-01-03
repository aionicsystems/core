import { FC, useState } from "react";
import { Modal } from "../../types/ModalTypes.ts";
import { ModalOverlay } from "../modalBaseComponents/ModalOverlay.tsx";
import styles from "../modalBaseComponents/Modal.module.css";
import { ModalHeading } from "../modalBaseComponents/ModalHeading.tsx";
import { IssueLoanModalFaq } from "./IssueLoanModalFaq.tsx";
import { useQuery } from "@tanstack/react-query";
import { assetSingleEntity, client } from "../../repository/requests.ts";
import { AssetType } from "../../types/AssetTypes.ts";
import { IssueAssetInfo } from "./IssueAssetInfo.tsx";
import { IssueLoanForm } from "./IssueLoanForm.tsx";
import { ModalError } from "../ModalError/ModalError.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { LoanAssetsModalFaq } from "../LoanAssetsModal/LoanAssetsModalFaq.tsx";
import { REQUEST_ASSET_ENTITIES } from "../../repository/requestKeys.ts";
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';

export type IssueLoanModalProps = Modal & {
  selectedAsset?: string;
};

export const IssueLoanModal: FC<IssueLoanModalProps> = ({
  modalTitle,
  onClose,
  size,
  selectedAsset,
}) => {
  const [modalFaq, setModalFaq] = useState<boolean>(false);
  const [collateralAmount, setCollateralAmount] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const { data: hash, isPending, writeContractAsync } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
  useWaitForTransactionReceipt({ 
    hash,
  })
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      try {
        const result = await client.query({
          query: assetSingleEntity,
          variables: { id: selectedAsset },
        });
        return result.data;
      } catch (error) {
        setError(true);
        throw error;
      }
    },
    queryKey: [`${REQUEST_ASSET_ENTITIES}_${selectedAsset}`],
  });

  const toggleModalFaq = () => {
    setModalFaq(!modalFaq);
  };

  if (isLoading || isPending || isConfirming) {
    return <Loader />;
  }

  if (isConfirmed) {
    onClose();
  }

  if (error || isError) {
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

  const asset: AssetType = data?.assetEntity ?? [];

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
            <IssueLoanModalFaq />
          ) : 
            <>
              <IssueLoanForm assetID={selectedAsset} setCollateralAmount={setCollateralAmount} collateralAmount={collateralAmount} writeContractAsync={writeContractAsync} isPending={isPending} />
              <IssueAssetInfo issue={asset} collateralAmount={collateralAmount} />
            </> 
          }
        </div>
      </div>
    </ModalOverlay>
  );
};
