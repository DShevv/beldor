"use client";

import clsx from "clsx";
import styles from "./HistoryBlock.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import historyBg from "@/assets/images/history.png";
import historyBg2 from "@/assets/images/about-block.png";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";

const slides = [
  {
    title: "1991-2000",
    image: historyBg,
    description:
      "К 10-летию (2001) предприятие расширило линейку дорожной техники, запустив манипуляторы, навесное оборудование и автогрейдеры. В 2005–2009 гг. модернизировало производство, сертифицировало технику по международным стандартам и получило отраслевые награды за инновации. К 2010 г. укрепило позиции на рынке СНГ, внедрив новые технологии и партнёрские проекты.",
  },
  {
    title: "2001-2010",
    image: historyBg2,
    description:
      "дорожной техники, запустив манипуляторы, навесное оборудование и автогрейдеры. В 2005–2009 гг. модернизировало производство, сертифицировало технику по международным стандартам и получило отраслевые награды за инновации. К 2010 г. укрепило позиции на рынке СНГ, внедрив новые технологии и партнёрские проекты.",
  },
  {
    title: "2011-2020",
    image: historyBg,
    description:
      "К 10-летию (2001)  авесное оборудование и автогрейдеры. В 2005–2009 гг. модернизировало производство, сертифицировало технику по международным стандартам и получило отраслевые награды за инновации. К 2010 г. укрепило позиции на рынке СНГ, внедрив новые технологии и партнёрские проекты.",
  },
  {
    title: "2021-н.в.",
    image: historyBg,
    description:
      "К 10-летию (2001) предприятие расширило  дорожной техники, запустив манипуляторы, навесное оборудование и автогрейдеры. В 2005–2009 гг. модернизировало производство, сертифицировало технику по международным стандартам и получило отраслевые награды за инновации. К 2010 г. укрепило позиции на рынке СНГ, внедрив новые технологии и партнёрские проекты.",
  },
];

const AUTO_SLIDE_INTERVAL = 10000; // 5 секунд

const HistoryBlock = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Автоматическая смена слайдов
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1 > slides.length - 1 ? 0 : prev + 1));
    }, AUTO_SLIDE_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Сброс таймера при ручном переключении
  const handlePrev = () => {
    setActiveTab((prev) => {
      const next = prev - 1 < 0 ? slides.length - 1 : prev - 1;
      resetInterval();
      return next;
    });
  };

  const handleNext = () => {
    setActiveTab((prev) => {
      const next = prev + 1 > slides.length - 1 ? 0 : prev + 1;
      resetInterval();
      return next;
    });
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1 > slides.length - 1 ? 0 : prev + 1));
    }, AUTO_SLIDE_INTERVAL);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.caption}>
          <h2 className={clsx(styles.title, "h2")}>История нашего развития</h2>

          <motion.div
            layout
            className={styles.inner}
            transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
          >
            <div className={styles.navigation}>
              <ArrowButton
                variant="secondary"
                className={styles.prev}
                aria-label="прошлый период"
                onClick={handlePrev}
              />
              <ArrowButton
                variant="secondary"
                className={styles.next}
                aria-label="следующий период"
                onClick={handleNext}
              />
            </div>

            <motion.div
              layout
              transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeTab}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.2 },
                    layout: { duration: 0.4, ease: "easeInOut" },
                  }}
                >
                  <div className={clsx(styles.slideTitle, "h3")}>
                    {slides[activeTab].title}
                  </div>
                  <div className={clsx(styles.slideDescription, "body-3")}>
                    {slides[activeTab].description}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.image} style={{ position: "relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[activeTab].image.src || activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image
                src={slides[activeTab].image}
                alt="history"
                fill
                style={{ objectFit: "cover", borderRadius: "inherit" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className={styles.line}>
        <div
          className={styles.thumb}
          style={{
            transform: `scaleX(${activeTab})`,
            transformOrigin: "left",
          }}
        ></div>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={clsx(styles.lineItem, "h5", {
              [styles.active]: index <= activeTab,
            })}
          >
            <div className={styles.lineItemTitle}>{slide.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HistoryBlock;
