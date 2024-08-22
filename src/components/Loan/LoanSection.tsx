import styles from "../../App.module.css";
import { iIcon } from "../../static/images.ts";
import { overviewCards } from "../../static/data.ts";
import { OverviewCard } from "../OverviewCard/OverviewCard.tsx";
import { Card } from "../Card/Card.tsx";
import { FC, useState } from "react";
import { LoanAssetsModal } from "../LoanAssetsModal/LoanAssetsModal.tsx";
import { Button } from "../Button/Button.tsx";


export const LoanSection: FC = () => {
  const [selectAssetModal, setSelectAssetModal] = useState<boolean>(false);
  const [loanModal, setLoanModal] = useState<boolean>(false);

  const toggleSelectAsset = () => {
    setSelectAssetModal(!selectAssetModal);
  };

  const toggleLoanModal = () => {
    setLoanModal(!loanModal);
  };

  return (
    <>
      <div className={styles.overviewHeading}>
        <h2 className={`${styles.sectionTitle} ${styles.overviewTitle}`}>
          Loan Overview
        </h2>
        <Button size={"sm"} btnType={"primary"} onClick={() => toggleSelectAsset()}>
          Issue Loan
        </Button>
      </div>
      <div className={styles.overviewCardsWrapper}>
        {overviewCards.slice(0.2).map((item) => (
          <OverviewCard
            key={item.id}
            title={item.title}
            label={item.label}
            icon={item.icon as string}
            color={item.color}
          />
        ))}
      </div>
      <div className={styles.fundsSection}>
        <Card className={styles.fundsSectionCard}>
          <div className={styles.fundsSectionCardInner}>
            <div>
              <h5 className={styles.fundsSectionCardTitle}>
                0.00%
                <button
                  type="button"
                  className={styles.fundsSectionCardTitleButton}
                >
                  <img src={iIcon as string} alt="icon" />
                </button>
              </h5>
              <p className={styles.fundsSectionCardSubtitle}>D / C (%)</p>
            </div>
            <div>
              <span className={styles.fundsSectionCardMessage}>
                No position
              </span>
              <p className={styles.fundsSectionCardValue}>
                Max - <span style={{ fontWeight: "600" }}>68.97</span>%
              </p>
            </div>
          </div>
        </Card>
        <Card className={styles.fundsSectionCard}>
          <div>
            <h5 className={styles.fundsSectionCardTitle}>0.00% / $3,468.08</h5>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              className={styles.fundsSectionCardSubtitle}
            >
              Liquidation (ETH)
              <button
                type="button"
                className={styles.fundsSectionCardTitleButton}
              >
                <img src={iIcon as string} alt="icon" />
              </button>
            </p>
          </div>
        </Card>
      </div>
      {selectAssetModal && (
        <LoanAssetsModal
          onClose={toggleSelectAsset}
          size={488}
          modalTitle={"Select Asset"}
        />
      )}
    </>
  );
};
