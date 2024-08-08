import { FC, Fragment } from "react";
import { questionMark, xClose } from "../../static/images.ts";
import styles from "./ModalHeading.module.css";

type ModalHeadingProps = {
  onClose: () => void;
  modalTitle: string;
  modalTooltipText?: string;
};

export const ModalHeading: FC<ModalHeadingProps> = ({
  modalTitle = "",
  onClose,
  modalTooltipText = "",
}) => {
  return (
    <div className={styles.modalHeading}>
      <div
        style={{ cursor: modalTooltipText ? "pointer" : "none" }}
        className={styles.modalQuestionWrapper}
      >
        {modalTooltipText && (
          <Fragment>
            <img src={questionMark as string} alt="question mark" />
            <span className={styles.modalTooltip}>{modalTooltipText}</span>
          </Fragment>
        )}
      </div>
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
