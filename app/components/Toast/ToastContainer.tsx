import React, { useState, useCallback } from "react";
import { Toast, ToastProps } from "./Toast";
import styles from "./Toast.module.css";

type ToastInput = Omit<ToastProps, "id" | "onClose">;

export interface ToastContainerProps {
  initialToasts?: ToastInput[];
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  initialToasts = [],
}) => {
  const [toasts, setToasts] = useState<ToastProps[]>(
    initialToasts.map((t, i) => ({ ...t, id: String(i) })),
  );

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <div className={styles.container}>
      {toasts.map((t) => (
        <Toast key={t.id} {...t} onClose={remove} />
      ))}
    </div>
  );
};
