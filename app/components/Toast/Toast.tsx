import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  close,
  successIcon,
  warningIcon,
  errorIcon,
  infoIcon,
} from "@/app/assets";
import styles from "./Toast.module.css";

export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastProps {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
  closable?: boolean;
  onClose?: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({
  id,
  message,
  type = "info",
  duration = 3000,
  closable = true,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 10);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onClose?.(id), 350);
    }, duration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [duration, id, onClose]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose?.(id), 350);
  };

  return (
    <div
      className={`${styles.toast} ${styles[type]} ${visible ? styles.visible : ""}`}
      role="alert"
    >
      <span className={styles.icon}>
        <Image
          src={icons[type]}
          alt={type}
          width={20}
          height={20}
          priority={true}
        />
      </span>
      <span className={styles.message}>{message}</span>
      {closable && (
        <button
          className={styles.close}
          onClick={handleClose}
          aria-label="Close"
        >
          <Image src={close} alt={"Close"} width={20} height={20} />
        </button>
      )}
    </div>
  );
};

const icons: Record<ToastType, StaticImageData> = {
  success: successIcon,
  error: errorIcon,
  warning: warningIcon,
  info: infoIcon,
};
