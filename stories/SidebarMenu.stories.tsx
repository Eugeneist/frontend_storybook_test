import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  SidebarMenu,
  MenuItem,
} from "../app/components/SidebarMenu/SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

const flatItems: MenuItem[] = [
  { id: "1", label: "Dashboard", icon: "🏠" },
  { id: "2", label: "Profile", icon: "👤" },
  { id: "3", label: "Settings", icon: "⚙️" },
  { id: "4", label: "Logout", icon: "🚪" },
];

const nestedItems: MenuItem[] = [
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
  {
    id: "3",
    label: "Reports",
    icon: "📊",
    children: [
      { id: "3-1", label: "Monthly" },
      { id: "3-2", label: "Annual" },
    ],
  },
  { id: "4", label: "Settings", icon: "⚙️" },
];

const SidebarWithToggle = (props: { items: MenuItem[]; title?: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 24 }}>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "10px 20px",
          background: "#6366f1",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        Open Menu
      </button>
      <SidebarMenu {...props} isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export const FlatMenu: Story = {
  render: () => <SidebarWithToggle items={flatItems} title="Navigation" />,
};

export const NestedMenu: Story = {
  render: () => <SidebarWithToggle items={nestedItems} title="App Menu" />,
};

export const OpenByDefault: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div style={{ padding: 24 }}>
        <button
          onClick={() => setOpen((v) => !v)}
          style={{
            padding: "10px 20px",
            background: "#6366f1",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Toggle Menu
        </button>
        <SidebarMenu
          items={nestedItems}
          isOpen={open}
          title="App Menu"
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
};
