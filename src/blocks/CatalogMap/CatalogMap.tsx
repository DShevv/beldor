"use client";
import clsx from "clsx";
import styles from "./CatalogMap.module.scss";
import { useState } from "react";
import { SvgArrow, SvgReorder } from "@/assets/icons/svgs";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const CatalogMap = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <SvgReorder /> Каталог
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
            <div className={styles.list}>
              <Link
                href="/catalog/road-maintenance-equipment/1"
                className={clsx(styles.item, "h6")}
              >
                Отвалы
              </Link>
              <Link
                href="/catalog/road-maintenance-equipment/2"
                className={clsx(styles.item, "h6")}
              >
                Косилки, кусторезы, щётки дорожные
              </Link>
              <Link
                href="/catalog/road-maintenance-equipment/3"
                className={clsx(styles.item, "h6")}
              >
                Оборудование для ремонта и восстановления асфальтобетонного
                покрытия
              </Link>
              <Link
                href="/catalog/road-maintenance-equipment/4"
                className={clsx(styles.item, "h6")}
              >
                Пескоразбрасыватель
              </Link>
              <Link
                href="/catalog/road-maintenance-equipment/5"
                className={clsx(styles.item, "h6")}
              >
                Контейнера
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default CatalogMap;
