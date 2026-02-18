"use client";

import { useState } from "react";
import { Input } from "./components/Input/Input";
import { Toast } from "./components/Toast/Toast";
import { SidebarMenu, MenuItem } from "./components/SidebarMenu/SidebarMenu";
import styles from "./page.module.css";

const menuItems: MenuItem[] = [
  { id: "1", label: "Dashboard", icon: "🏠" },
  {
    id: "2",
    label: "Products",
    icon: "📦",
    children: [
      { id: "2-1", label: "All Products" },
      { id: "2-2", label: "Add New" },
      {
        id: "2-3",
        label: "Categories",
        children: [
          { id: "2-3-1", label: "Electronics" },
          { id: "2-3-2", label: "Clothing" },
        ],
      },
    ],
  },
  { id: "4", label: "Settings", icon: "⚙️" },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toasts, setToasts] = useState<
    { id: string; type: any; message: string }[]
  >([]);

  const addToast = (
    type: "success" | "error" | "warning" | "info",
    message: string,
  ) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, type, message }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.headerWrapper}>
          <div className={styles.header}>
            <h1 className={styles.title}>Component Library Demo</h1>
            <p className={styles.subtitle}>Input · Toast · Recursive Sidebar</p>
          </div>
          <div className={styles.storybookBadge}>Next.js + Storybook 8</div>
        </header>

        <section className={styles.guideBox}>
          <h3 className={styles.guideTitle}>🚀 Тестування в Storybook</h3>
          <p className={styles.hint}>
            Запустіть команду для перегляду всіх станів компонентів:
          </p>
          <code className={styles.codeBlock}>npm run storybook</code>
        </section>

        <Section title="📥 Input" label="1">
          <div className={styles.inputGrid}>
            <Input label="Text" placeholder="Type here..." />
            <Input label="Password" type="password" placeholder="Password..." />
            <Input label="Clearable" clearable defaultValue="Clear me!" />
            <Input
              label="Error"
              error="Field is required"
              defaultValue="Error value"
            />
            <Input label="Disabled" disabled defaultValue="Locked" />
          </div>
        </Section>

        <Section title="🔔 Toast" label="2">
          <p className={styles.hint}>Click to trigger a notification:</p>
          <div className={styles.toastButtons}>
            <button
              className={`${styles.toastBtn} styles.btnSuccess`}
              onClick={() => addToast("success", "Success!")}
            >
              ✅ Success
            </button>
            <button
              className={`${styles.toastBtn} styles.btnError`}
              onClick={() => addToast("error", "Error!")}
            >
              ❌ Error
            </button>
            <button
              className={`${styles.toastBtn} styles.btnWarning`}
              onClick={() => addToast("warning", "Warning!")}
            >
              ⚠️ Warning
            </button>
            <button
              className={`${styles.toastBtn} styles.btnInfo`}
              onClick={() => addToast("info", "Info!")}
            >
              ℹ️ Info
            </button>
          </div>
        </Section>

        <Section title="📚 Sidebar Menu" label="3">
          <p className={styles.hint}>
            Recursive menu with infinite nesting support.
          </p>
          <button
            className={styles.openBtn}
            onClick={() => setSidebarOpen(true)}
          >
            ☰ Open Sidebar
          </button>
        </Section>
      </div>

      <div className={styles.toastPortal}>
        {toasts.map((t) => (
          <Toast
            key={t.id}
            {...t}
            duration={4000}
            onClose={() => removeToast(t.id)}
          />
        ))}
      </div>

      <SidebarMenu
        items={menuItems}
        isOpen={sidebarOpen}
        title="App Menu"
        onClose={() => setSidebarOpen(false)}
      />
    </div>
  );
}
function Section({
  title,
  label,
  children,
}: {
  title: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.badge}>{label}</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}
