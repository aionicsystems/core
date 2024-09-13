import { FC } from "react";
import styles from "./PositionsCard.module.css";
import { Card } from "../Card/Card.tsx";
import { Button } from "../Button/Button.tsx";
import { Badge } from "../Badge/Badge.tsx";
import { iIcon } from "../../static/images.ts";

type PositionsCardProps = {
  img: string;
  volume: string | number;
  coinType: string;
  badgeText: string;
  badgeType: string;
};

export const PositionsCard: FC<PositionsCardProps> = ({
  img,
  badgeText,
  coinType,
  volume,
  badgeType,
}) => {
  return (
    <Card className={styles.positionsCard}>
      <div className={styles.positionsCardInner}>
        <div className={styles.positionsCardInnerWrapper}>
          <img src={img} alt="eth" className={styles.positionsCardIcon} />
          <div style={{ overflow: "hidden" }}>
            <h5 className={styles.positionsCardVolume}>${volume}</h5>
            <p className={styles.positionsCardVolumeType}>
              <span className={styles.positionsCardVolumeTypeValue}>
                {volume}{" "}
              </span>
              <span style={{ textTransform: "uppercase" }}>{coinType}</span>
              <button type="button" className={styles.positionsCardButton}>
                <img src={iIcon as string} alt="icon" />
              </button>
            </p>
          </div>
        </div>
        <Badge
          className={`${badgeText === "Collateral" ? "text-bg-green" : "text-bg-orange"} ${badgeType}`}
        >
          {badgeText}
        </Badge>
      </div>
      <div className={styles.positionsCardActions}>
        <Button
          btnType={"primary"}
          className={styles.positionsCardActionButton}
          size={"lg"}
        >
          {badgeText === "Debt" ? "Pay-Back" : "Withdraw"}
        </Button>
      </div>
    </Card>
  );
};
