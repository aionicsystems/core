import { FC } from "react";
import styles from "./ButtonArrow.module.css";
import { btnArrow } from "../../static/images.ts";

type ButtonArrowProps = {
  text: string;
};

export const ButtonArrow: FC<ButtonArrowProps> = ({ text }) => {
  return (
    <button type="button" className={styles.buttonArrow}>
      {text}
      <img src={btnArrow as string} alt="btn arrow" />
    </button>
  );
};
