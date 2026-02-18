import React, { useState } from "react";
import Image from "next/image";
import { chevron } from "@/app/assets";
import styles from "./SidebarMenu.module.css";

export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  children?: MenuItem[];
}

export const SidebarMenuItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = !!item.children?.length;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={styles.node}>
      <button
        className={styles.nodeBtn}
        onClick={hasChildren ? handleToggle : undefined}
      >
        <div className={styles.labelContainer}>
          {item.icon && <span className={styles.nodeIcon}>{item.icon}</span>}
          <span className={styles.nodeLabel}>{item.label}</span>
        </div>

        {hasChildren && (
          <span
            className={`${styles.chevron} ${isExpanded ? styles.chevronOpen : ""}`}
          >
            <Image src={chevron} alt="Toggle" width={14} height={14} />
          </span>
        )}
      </button>

      {hasChildren && (
        <div
          className={`${styles.children} ${isExpanded ? styles.childrenOpen : ""}`}
        >
          {item.children!.map((child) => (
            <SidebarMenuItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};
