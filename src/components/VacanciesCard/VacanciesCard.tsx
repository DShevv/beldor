"use client";
import Image, { StaticImageData } from "next/image";
import styles from "./VacanciesCard.module.scss";
import clsx from "clsx";
import { motion as m, AnimatePresence } from "motion/react";
import InlineButton from "../Buttons/InlineButton/InlineButton";
import MainButton from "../Buttons/MainButton/MainButton";
import { useRef, useState } from "react";
import useOutsideClick from "@/utils/useOutsideClick";

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
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setIsOpen(false));

  const handleClose = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (!isFullyVisible) {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setTimeout(() => {
          setIsOpen(false);
        }, 300);
      } else {
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

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
      ref={ref}
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
          <AnimatePresence mode="wait">
            {!isOpen && (
              <m.div
                key="buttons"
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
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

      <AnimatePresence mode="wait">
        {isOpen && (
          <m.div
            key="additional"
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 32 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
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
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
                style={{ overflow: "hidden" }}
              >
                <div className={styles.controls}>
                  <InlineButton className={styles.more} onClick={handleClose}>
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
