import { FC } from "react";
import { Card } from "../Card/Card.tsx";
import { ButtonArrow } from "../ButtonArrow/ButtonArrow.tsx";
import styles from "./AccountsCard.module.css";

type AccountsCardProps = {
  balance: string;
  text: string;
  btnText: string;
};

export const AccountsCard: FC<AccountsCardProps> = ({
  balance,
  text,
  btnText,
}) => {
  return (
    <Card>
      <div className={styles.accountsCardInner}>
        <div>
          <h5 className={styles.accountsCardTitle}>{balance}</h5>
          <p className={styles.accountsCardSubtitle}>{text}</p>
        </div>
        <ButtonArrow text={btnText} />
      </div>
    </Card>
  );
};
