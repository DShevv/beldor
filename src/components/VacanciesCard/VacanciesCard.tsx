"use client";
import Image, { StaticImageData } from "next/image";
import styles from "./VacanciesCard.module.scss";
import clsx from "clsx";
import { motion as m, AnimatePresence } from "motion/react";
import InlineButton from "../Buttons/InlineButton/InlineButton";
import MainButton from "../Buttons/MainButton/MainButton";
import { useState } from "react";

interface VacanciesCardProps {
  image: string | StaticImageData;
  title: string;
  city: string;
  workType: string;
  experience: string;
  description: string;
  salary: string;
  children: React.ReactNode;
}

const VacanciesCard = ({
  image,
  title,
  city,
  workType,
  experience,
  description,
  children,
  salary,
}: VacanciesCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <m.div
      layout
      className={styles.container}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <m.div layout className={styles.main}>
        <Image src={image} alt={title} className={styles.image} />
        <m.div layout className={styles.content}>
          <h2 className={clsx(styles.title, "h3")}>{title}</h2>
          <div className={styles.info}>
            <div className={clsx(styles.infoItem, "body-4")}>{city}</div>
            <div className={clsx(styles.infoItem, "body-4")}>{workType}</div>
            <div className={clsx(styles.infoItem, "body-4")}>{experience}</div>
          </div>
          <p className={clsx(styles.description, "body-3")}>{description}</p>
          <AnimatePresence>
            {!isOpen && (
              <m.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <div className={styles.controls}>
                  <InlineButton
                    className={styles.more}
                    onClick={() => setIsOpen(true)}
                  >
                    Подробнее
                  </InlineButton>
                  <MainButton className={styles.button}>
                    Откликнуться
                  </MainButton>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </m.div>
      </m.div>

      <AnimatePresence>
        {isOpen && (
          <m.div
            layout
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 32 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <div className={styles.additional}>
              <div className={clsx(styles.subtitle, "body-2")}>
                Чем предстоит заниматься:
              </div>
              <div className={clsx(styles.responsibilities, "body-3")}>
                {children}
              </div>

              <div className={clsx(styles.subtitle, "body-2")}>Зарплата:</div>
              <p className={clsx(styles.price, "h3")}>{salary} BYN + премии</p>
              <m.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                style={{ overflow: "hidden" }}
              >
                <div className={styles.controls}>
                  <InlineButton
                    className={styles.more}
                    onClick={() => setIsOpen(false)}
                  >
                    Скрыть
                  </InlineButton>
                  <MainButton className={styles.button}>
                    Откликнуться
                  </MainButton>
                </div>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
};

export default VacanciesCard;
