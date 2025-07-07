"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.scss";
import clsx from "clsx";
import { SvgArrow } from "@/assets/icons/svgs";

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onSelect: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  defaultValue,
  placeholder = "Выберите опцию",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue || ""
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: DropdownOption) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    onSelect(option.value);
  };

  return (
    <div className={clsx(styles.dropdown, className)} ref={dropdownRef}>
      <button
        type="button"
        className={clsx(styles.dropdownToggle, {
          [styles.open]: isOpen,
        })}
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={clsx("body-7", styles.dropdownLabel)}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <SvgArrow
          className={styles.dropdownArrow}
          style={{
            transform: isOpen ? "rotate(90deg)" : "rotate(-90deg)",
          }}
        />
      </button>

      {isOpen && (
        <ul className={styles.dropdownMenu} role="listbox">
          {options
            .filter((option) => option.value !== selectedValue)
            .map((option) => (
              <li
                key={option.value}
                className={clsx("body-7", styles.dropdownItem, {
                  [styles.selected]: selectedValue === option.value,
                })}
                onClick={() => handleSelect(option)}
                role="option"
                aria-selected={selectedValue === option.value}
              >
                {option.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
