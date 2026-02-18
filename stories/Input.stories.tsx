import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../app/components/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Input/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Type something...",
    disabled: false,
    clearable: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "text",
    label: "Text input",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    label: "Password",
    placeholder: "Enter password",
  },
};

export const Clearable: Story = {
  args: {
    type: "text",
    label: "Clearable",
    clearable: true,
    defaultValue: "Clear me!",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    label: "Number",
  },
};

export const WithError: Story = {
  args: {
    type: "text",
    label: "With error",
    error: "This field is required.",
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    label: "Disabled",
    defaultValue: "Cannot edit",
    disabled: true,
  },
};

export const PasswordClearable: Story = {
  args: {
    type: "password",
    label: "Password + clearable",
    clearable: true,
    placeholder: "Enter password",
  },
};

export const Controlled: Story = {
  args: {
    label: "Controlled (Read Only)",
    value: "I am controlled from outside",
  },
};
