import { FC, useState } from "react";
import { ModalOverlay } from "../modalBaseComponents/ModalOverlay.tsx";
import { Modal } from "../../types/ModalTypes.ts";
import { ModalHeading } from "../modalBaseComponents/ModalHeading.tsx";
import styles from "../modalBaseComponents/Modal.module.css";
import modalStyles from "./LoanAssetsModal.module.css";
import { SearchInput } from "../SearchInput/SearchInput.tsx";
import { AssetType } from "../../types/AssetTypes.ts";
import { LoanAssetsModalFaq } from "./LoanAssetsModalFaq.tsx";
import { IssueLoanModal } from "../IssueLoanModal/IssueLoanModal.tsx";
import { assetEntities, windowEntities, client } from "../../repository/requests.ts";
import { useQuery } from "@tanstack/react-query";
import { LoanAsset } from "./LoanAsset.tsx";
import { ModalError } from "../ModalError/ModalError.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { REQUEST_ASSET_ENTITIES } from "../../repository/requestKeys.ts";

export const LoanAssetsModal: FC<Modal> = ({ modalTitle, size, onClose }) => {
  const [modalFaq, setModalFaq] = useState<boolean>(false);
  const [loanIssueModal, setLoanIssueModal] = useState<boolean>(false);
  const [selectedAsset, setSelectedAsset] = useState<AssetType | undefined>(
    undefined,
  );
  const [error, setError] = useState<boolean>(false);

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      try {
        const result = await client.query({
          query: assetEntities,
        });
        return result.data;
      } catch (error) {
        setError(true);
        throw error;
      }
    },
    queryKey: [REQUEST_ASSET_ENTITIES],
  });

  const { data: dataWindow, isLoading: isLoadingWindow, isError: isErrorWindow } = useQuery({
    queryFn: async () => {
      try {
        const result = await client.query({
          query: windowEntities,
        });
        return result.data;
      } catch (error) {
        setError(true);
        throw error;
      }
    },
    queryKey: [REQUEST_ASSET_ENTITIES],
  });

  const toggleModalFaq = () => {
    setModalFaq(!modalFaq);
  };

  const toggleLoanIssue = () => {
    setLoanIssueModal(!loanIssueModal);
  };

  const selectAsset = (loan: AssetType) => {
    setSelectedAsset(loan);
    toggleLoanIssue();
  };

  if (isLoading || isLoadingWindow) {
    return <Loader />;
  }

  if (error || isError || isErrorWindow) {
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

  const assets: AssetType[] = data?.assetEntities ?? [];

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
                {assets.filter((asset) => asset.symbol != "ETH").map((asset) => (
                  <LoanAsset
                    selectAsset={selectAsset}
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
          selectedAsset={selectedAsset && selectedAsset.id}
          dataWindow={dataWindow[0]}
          modalTitle={"Issue Loan"}
        />
      )}
    </ModalOverlay>
  );
};
