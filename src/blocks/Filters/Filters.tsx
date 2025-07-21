"use client";
import clsx from "clsx";
import styles from "./Filters.module.scss";
import { useEffect, useState } from "react";
import { SvgArrow, SvgFilters } from "@/assets/icons/svgs";
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";
import { motion, AnimatePresence } from "motion/react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebounce } from "@/utils/useDebounce";

const manufacturers = [
  { label: "МАЗ", value: "maz" },
  { label: "КАМАЗ", value: "kamaz" },
  { label: "ЗИЛ", value: "zil" },
];

const purposes = [
  { label: "Для дорог", value: "for-roads" },
  { label: "Для строительства", value: "for-construction" },
  { label: "Для сельского хозяйства", value: "for-agriculture" },
];

const Filters = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>(
    []
  );
  const [selectedPurposes, setSelectedPurposes] = useState<string[]>([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleChangeManufacturers = (selected: string[]) => {
    setSelectedManufacturers(selected);
  };

  const handleChangePurposes = (selected: string[]) => {
    setSelectedPurposes(selected);
  };

  const debouncedManufacturers = useDebounce(selectedManufacturers, 1000);
  const debouncedPurposes = useDebounce(selectedPurposes, 1000);

  useEffect(() => {
    const manufacturersParam = searchParams.get("manufacturers");
    const purposesParam = searchParams.get("purposes");

    const initialManufacturers = manufacturersParam
      ? manufacturersParam.split(",").filter(Boolean)
      : [];
    const initialPurposes = purposesParam
      ? purposesParam.split(",").filter(Boolean)
      : [];

    if (initialManufacturers.length > 0 || initialPurposes.length > 0) {
      setIsOpen(true);
    }

    setSelectedManufacturers(initialManufacturers);
    setSelectedPurposes(initialPurposes);
  }, []);

  useEffect(() => {
    if (debouncedManufacturers.length === 0 && debouncedPurposes.length === 0) {
      if (!searchParams.has("manufacturers") && !searchParams.has("purposes")) {
        return;
      }
    }

    const params = new URLSearchParams(searchParams);

    params.delete("manufacturers");
    params.delete("purposes");

    if (debouncedManufacturers.length > 0) {
      params.set("manufacturers", debouncedManufacturers.join(","));
    }

    if (debouncedPurposes.length > 0) {
      params.set("purposes", debouncedPurposes.join(","));
    }

    const newUrl = params.toString()
      ? `${pathname}?${params.toString()}`
      : pathname;

    router.push(newUrl, { scroll: false });
  }, [debouncedManufacturers, debouncedPurposes, pathname, router]);

  return (
    <motion.section
      layout
      className={clsx(styles.container, className, {
        [styles.open]: isOpen,
      })}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <div className={clsx(styles.title, "h5")}>
          <SvgFilters /> фильтр
        </div>
        <SvgArrow className={clsx(styles.arrow, { [styles.open]: isOpen })} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            className={styles.content}
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 20 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <CheckboxFilter
              title="Производитель"
              options={manufacturers}
              selected={selectedManufacturers}
              onChange={handleChangeManufacturers}
            />
            <CheckboxFilter
              title="Назначение"
              options={purposes}
              selected={selectedPurposes}
              onChange={handleChangePurposes}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Filters;
