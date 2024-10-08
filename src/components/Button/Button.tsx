import { PropsWithChildren, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  className?: string;
  size?: "md" | "lg" | "sm";
  btnType?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  size,
  btnType,
  className,
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type="button"
      {...props}
      className={`${styles.btnMain} ${size ? styles[size] : ""} ${btnType ? styles[btnType] : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
