import { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Badge.module.css";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export const Badge = ({
  children,
  ...props
}: PropsWithChildren<BadgeProps> = {}) => {
  return (
    <span {...props} className={`${styles.badge} ${props.className || ""}`}>
      {children}
    </span>
  );
};
