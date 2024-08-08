import { FC } from "react";
import { Card } from "../Card/Card.tsx";
import styles from "./OverviewCard.module.css";

type OverviewCardProps = {
  title: string;
  label: string;
  icon: string;
  color: string;
};

export const OverviewCard: FC<OverviewCardProps> = ({
  title,
  label,
  icon,
  color,
}) => {
  return (
    <Card className={styles.overviewCard}>
      <div className={styles.overviewCardInner}>
        <div>
          <h5 className={styles.overviewCardTitle}>{title}</h5>
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
