import Image from "next/image";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { close } from "@/app/assets";
import styles from "./SidebarMenu.module.css";

export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  children?: Array<{
    id: string;
    label: string;
    icon?: string;
  }>;
}

export interface SidebarMenuProps {
  items: MenuItem[];
  isOpen?: boolean;
  title?: string;
  onClose?: () => void;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  isOpen = false,
  title = "Menu",
  onClose,
}) => {
  return (
    <>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""}`}
        onClick={onClose}
      />

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close menu"
          >
            <Image src={close} alt="Close" width={20} height={20} />
          </button>
        </div>

        <nav className={styles.nav}>
          {items.map((item) => (
            <SidebarMenuItem key={item.id} item={item} />
          ))}
        </nav>
      </aside>
    </>
  );
};
