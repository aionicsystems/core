import { PropsWithChildren } from "react";
import styles from "./Card.module.css";

type CardProps = {
  className?: string;
};

export const Card = ({ children, className }: PropsWithChildren<CardProps>) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};
