import styles from "./OverviewCard.module.css";
import { Card } from "../Card/Card.tsx";
import { FC } from "react";

export type OverviewCardSmallProps = {
  value: string | number;
  label: string;
};

export const OverviewCardSmall: FC<OverviewCardSmallProps> = ({
  value,
  label,
}) => {
  return (
    <Card className={styles.overviewCard}>
      <div className={styles.overviewCardSmallInner}>
        <h5
          style={{ textAlign: "center" }}
          className={styles.overviewCardTitle}
        >
          {value}
        </h5>
        <p style={{ textAlign: "center" }} className={styles.overviewCardLabel}>
          {label}
        </p>
      </div>
    </Card>
  );
};
