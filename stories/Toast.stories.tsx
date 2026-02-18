import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useCallback } from "react";
import { Toast, ToastProps, ToastType } from "../app/components/Toast/Toast";
import styles from "../app/components/Toast/Toast.module.css";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast Interactive",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const ToastPlayground = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (
    type: ToastType,
    message: string,
    duration: number = 3000,
  ) => {
    const newToast: ToastProps = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      message,
      duration,
      closable: true,
    };
    setToasts((prev) => [...prev, newToast].slice(-5));
  };

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h3>Toast Playground 🧪</h3>
      <p>Click buttons below to trigger toasts:</p>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button
          onClick={() => addToast("success", "Data saved successfully!", 3000)}
          style={{ ...btnStyle, background: "#10B981" }}
        >
          Success (3s)
        </button>

        <button
          onClick={() =>
            addToast("error", "Failed to connect to server.", 5000)
          }
          style={{ ...btnStyle, background: "#EF4444" }}
        >
          Error (5s)
        </button>

        <button
          onClick={() => addToast("warning", "Disk space is low.", 4000)}
          style={{ ...btnStyle, background: "#F59E0B" }}
        >
          Warning (4s)
        </button>

        <button
          onClick={() => addToast("info", "New update available.", 3000)}
          style={{ ...btnStyle, background: "#3B82F6" }}
        >
          Info (3s)
        </button>
      </div>

      <div className={styles.container}>
        {toasts.map((t) => (
          <Toast key={t.id} {...t} onClose={removeToast} />
        ))}
      </div>
    </div>
  );
};

const btnStyle: React.CSSProperties = {
  padding: "10px 20px",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "14px",
};

export const InteractiveDemo: Story = {
  render: () => <ToastPlayground />,
};
