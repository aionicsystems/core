import { FC, useState } from "react";
import { ModalOverlay } from "../modalBaseComponents/ModalOverlay.tsx";
import { Modal } from "../../types/ModalTypes.ts";
import { ModalHeading } from "../modalBaseComponents/ModalHeading.tsx";
import styles from "../modalBaseComponents/Modal.module.css";
import modalStyles from "./LoanAssetsModal.module.css";
import { SearchInput } from "../SearchInput/SearchInput.tsx";
import { AssetType } from "../../types/assetTypes.ts";
import { LoanAssetsModalFaq } from "./LoanAssetsModalFaq.tsx";
import { IssueLoanModal } from "../IssueLoanModal/IssueLoanModal.tsx";
import { assetEntities, client } from "../../repository/requests.ts";
import { useQuery } from "@tanstack/react-query";
import { LoanAsset } from "./LoanAsset.tsx";

export const LoanAssetsModal: FC<Modal> = ({ modalTitle, size, onClose }) => {
  const [modalFaq, setModalFaq] = useState<boolean>(false);
  const [loanIssueModal, setLoanIssueModal] = useState<boolean>(false);
  const [selectedLoan, setSelectedLoan] = useState<AssetType>(null);

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const result = await client.query({
        query: assetEntities,
      });
      return result.data;
    },
    queryKey: ["asset_entities"],
  });

  if (isLoading) {
    return null;
  }

  const toggleModalFaq = () => {
    setModalFaq(!modalFaq);
  };

  const toggleLoanIssue = () => {
    setLoanIssueModal(!loanIssueModal);
  };

  const selectLoan = (loan: AssetType) => {
    setSelectedLoan(loan);
    toggleLoanIssue();
  };

  const assets = (data.assetEntities as AssetType[]) ?? [];

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
            <LoanAssetsModalFaq />
          ) : (
            <>
              <SearchInput name={"search-asset"} />
              <div className={modalStyles.loanAssetsList}>
                {assets.map((asset) => (
                  <LoanAsset
                    selectLoan={selectLoan}
                    key={asset.id}
                    item={asset}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {loanIssueModal && (
        <IssueLoanModal
          onClose={toggleLoanIssue}
          size={size}
          selectedLoan={selectedLoan.id}
          modalTitle={"Issue Loan"}
        />
      )}
    </ModalOverlay>
  );
};
