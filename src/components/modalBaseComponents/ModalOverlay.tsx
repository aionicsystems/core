import { PropsWithChildren, useRef } from "react";
import styles from "./ModalOverlay.module.css";
import { useClickOutside } from "../../hooks/useClickOutside.tsx";

type ModalOverlayProps = {
  onClose: () => void;
  size: number;
};

export const ModalOverlay = ({
  children,
  onClose,
  size,
}: PropsWithChildren<ModalOverlayProps>) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, onClose);
  return (
    <div className={styles.modalOverlay}>
      <div ref={modalRef} style={{ width: `${size}px`, maxWidth: "100%" }}>
        {children}
      </div>
    </div>
  );
};
