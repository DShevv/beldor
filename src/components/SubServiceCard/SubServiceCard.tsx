"use client";
import styles from "./SubServiceCard.module.scss";
import clsx from "clsx";
import MainButton from "../Buttons/MainButton/MainButton";
import { useEffect, useState } from "react";
import { SvgCross } from "@/assets/icons/svgs";

interface SubServiceCardProps {
  title: string;
  children: React.ReactNode;
}

const SubServiceCard = ({ title, children }: SubServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const scrollPosition = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.overflowY = "scroll";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.position = "";
        document.body.style.overflowY = "auto";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollPosition);
      };
    }
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <div className={clsx(styles.title, "h4")}>{title}</div>

      <div className={styles.controls}>
        <MainButton className={styles.button}>заказать</MainButton>
        <MainButton
          className={styles.button}
          variant="transparent"
          onClick={() => setIsOpen(true)}
        >
          Подробнее
        </MainButton>
      </div>

      <div
        className={clsx(styles.popup, { [styles.open]: isOpen })}
        onClick={() => setIsOpen(false)}
      >
        <div className={styles.popupModal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.close} onClick={() => setIsOpen(false)}>
            <SvgCross />
          </div>
          <div className={clsx(styles.popupTitle, "h4")}>{title}</div>
          <div className={clsx(styles.popupContent, "body-3")}>{children}</div>
          <MainButton className={styles.button}>заказать</MainButton>
        </div>
      </div>
    </div>
  );
};

export default SubServiceCard;
