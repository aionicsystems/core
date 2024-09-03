import { FC } from "react";
import { Card } from "../Card/Card.tsx";
import styles from "./OverviewCard.module.css";

type OverviewCardProps = {
  value: string | number;
  label: string;
  icon: string;
  color: string;
};

export const OverviewCard: FC<OverviewCardProps> = ({
  value,
  label,
  icon,
  color,
}) => {
  return (
    <Card className={styles.overviewCard}>
      <div className={styles.overviewCardInner}>
        <div className={styles.overviewCardContentWrapper}>
          <h5 className={styles.overviewCardTitle}>{value}</h5>
          <p className={styles.overviewCardLabel}>{label}</p>
        </div>
        <div
          className={styles.overviewCardIconWrapper}
          style={{ backgroundColor: `var(--${color})` }}
        >
          <img src={icon} alt="icon" />
        </div>
      </div>
    </Card>
  );
};
