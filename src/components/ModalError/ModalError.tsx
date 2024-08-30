import { FC } from "react";
import styles from "./ModalError.module.css";

export const ModalError: FC = () => {
  return (
    <div className={styles.modalErrorWrapper}>
      <p className={styles.modalErrorText}>
        Something went wrong. <br />
        Please try again later!
      </p>
    </div>
  );
};
