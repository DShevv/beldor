import React, { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./CheckboxFilter.module.scss";
import Checkbox from "@/components/Inputs/Checkbox/Checkbox";
import { motion, AnimatePresence } from "motion/react";
import { SvgArrow } from "@/assets/icons/svgs";

interface Option {
  label: string;
  value: string;
}

interface CheckboxFilterProps {
  title: string;
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  className?: string;
}

const CheckboxFilter: React.FC<CheckboxFilterProps> = ({
  title,
  options,
  selected,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selected.length > 0 && !isOpen) {
      setIsOpen(true);
    }
  }, []);

  const handleCheckbox = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <section
      className={clsx(styles.container, className, { [styles.open]: isOpen })}
    >
      <div className={styles.header} onClick={() => setIsOpen((prev) => !prev)}>
        <div className={clsx(styles.title, "h6")}>{title}</div>
        <SvgArrow className={clsx(styles.arrow, { [styles.open]: isOpen })} />
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.content}
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 10 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {options.map((option) => (
              <Checkbox
                key={option.value}
                checked={selected.includes(option.value)}
                onChange={() => handleCheckbox(option.value)}
                className={styles.option}
              >
                {option.label}
              </Checkbox>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CheckboxFilter;
