import { FC, useState } from "react";
import { Modal } from "../../types/ModalTypes.ts";
import { ModalOverlay } from "../modalBaseComponents/ModalOverlay.tsx";
import styles from "../modalBaseComponents/Modal.module.css";
import { ModalHeading } from "../modalBaseComponents/ModalHeading.tsx";
import { IssueLoanModalFaq } from "./IssueLoanModalFaq.tsx";
import { useQuery } from "@tanstack/react-query";
import { assetEntities, client } from "../../repository/requests.ts";
import { gql } from "@apollo/client";
import { AssetType } from "../../types/assetTypes.ts";
import { IssueAssetInfo } from "./IssueAssetInfo.tsx";
import { IssueLoanForm } from "./IssueLoanForm.tsx";

export type IssueLoanModalProps = Modal & {
  selectedLoan: string;
};

export const IssueLoanModal: FC<IssueLoanModalProps> = ({
  modalTitle,
  onClose,
  size,
  selectedLoan,
}) => {
  const [modalFaq, setModalFaq] = useState<boolean>(false);
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const result = await client.query({
        query: assetEntities,
        variables: { id: selectedLoan },
      });
      return result.data;
    },
    queryKey: [`asset_entities_${selectedLoan}`],
  });

  if (isLoading) {
    return null;
  }

  const assets = (data.assetEntities as AssetType[]) ?? [];

  const toggleModalFaq = () => {
    setModalFaq(!modalFaq);
  };

  return (
    <ModalOverlay onClose={onClose} size={size}>
      <div className={styles.modalInner}>
        <ModalHeading
          toggleFaq={toggleModalFaq}
          onClose={onClose}
          modalTitle={modalTitle}
        />
        <div className={styles.modalContent}>
          {modalFaq ? (
            <IssueLoanModalFaq />
          ) : (
            <>
              <IssueLoanForm loanID={selectedLoan} />
              <IssueAssetInfo
                issue={
                  assets &&
                  (assets.find(
                    (asset) => asset.id === selectedLoan,
                  ) as AssetType)
                }
              />
            </>
          )}
        </div>
      </div>
    </ModalOverlay>
  );
};
