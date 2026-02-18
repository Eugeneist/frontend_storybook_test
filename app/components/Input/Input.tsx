import React, { useState, useRef, useId } from "react";
import Image from "next/image";
import { eye, eye_off, close } from "@/app/assets";
import styles from "./Input.module.css";

export interface InputProps {
  type?: "text" | "password" | "number" | "email";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  clearable?: boolean;
  disabled?: boolean;
  label?: string;
  error?: string;
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  defaultValue,
  clearable = false,
  disabled = false,
  label,
  error,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const uid = useId();
  const inputId = `input-${uid}`;
  const errorId = `error-${uid}`;

  const isControlled = typeof value === "string";
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleClear = () => {
    if (!isControlled) setInternalValue("");
    onChange?.("");
    inputRef.current?.focus();
  };

  const resolvedType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  const hasRightIcon = type === "password" || (clearable && currentValue);

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <div
        className={`${styles.inputWrapper} ${error ? styles.hasError : ""} ${disabled ? styles.disabled : ""}`}
      >
        <input
          ref={inputRef}
          id={inputId}
          type={resolvedType}
          value={currentValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`${styles.input} ${hasRightIcon ? styles.withIcon : ""}`}
        />

        <div className={styles.icons} aria-hidden="true">
          {clearable && currentValue && !disabled && (
            <button
              type="button"
              className={styles.iconBtn}
              onClick={handleClear}
              aria-label="Clear input"
              aria-hidden="false"
            >
              <Image src={close} alt="" width={20} height={20} />
            </button>
          )}
          {type === "password" && (
            <button
              type="button"
              className={styles.iconBtn}
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-hidden="false"
            >
              <Image
                src={showPassword ? eye_off : eye}
                alt=""
                width={20}
                height={20}
              />
            </button>
          )}
        </div>
      </div>
      {error && (
        <span id={errorId} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
};
