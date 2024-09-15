import { FC } from "react";
import { questionMark, xClose } from "../../static/images.ts";
import styles from "./ModalHeading.module.css";

type ModalHeadingProps = {
  onClose: () => void;
  toggleFaq: () => void;
  modalTitle: string;
};

export const ModalHeading: FC<ModalHeadingProps> = ({
  modalTitle = "",
  onClose,
  toggleFaq,
}) => {
  return (
    <div className={styles.modalHeading}>
      <button
        style={{ cursor: "pointer" }}
        className={styles.modalQuestionWrapper}
        onClick={() => toggleFaq()}
      >
        <img src={questionMark as string} alt="question mark" />
      </button>
      <p className={styles.modalTitle}>{modalTitle}</p>
      <button
        className={styles.modalClose}
        type={`button`}
        onClick={() => onClose()}
      >
        <img src={xClose as string} alt="close modal" />
      </button>
    </div>
  );
};
