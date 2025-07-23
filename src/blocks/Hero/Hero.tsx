"use client";
import styles from "./Hero.module.scss";
import Image from "next/image";
import heroBg from "@/assets/images/hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Autoplay } from "swiper/modules";
import clsx from "clsx";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";

const slides = [
  {
    id: 1,
    title:
      "<span>Белдортехника</span> — ведущий производитель дорожно-строительной техники в Беларуси",
    description:
      "Поставки спецтехники для дорожных и строительных организаций Беларуси, России, СНГ",
  },
  {
    id: 2,
    title:
      "<span>Белдортехника</span> — ведущий производитель дорожно-строительной техники в Беларуси",
    description:
      "Поставки спецтехники для дорожных и строительных организаций Беларуси, России, СНГ",
  },
  {
    id: 3,
    title:
      "<span>Белдортехника</span> — ведущий производитель дорожно-строительной техники в Беларуси",
    description:
      "Поставки спецтехники для дорожных и строительных организаций Беларуси, России, СНГ",
  },
  {
    id: 4,
    title:
      "<span>Белдортехника</span> — ведущий производитель дорожно-строительной техники в Беларуси",
    description:
      "Поставки спецтехники для дорожных и строительных организаций Беларуси, России, СНГ",
  },
];

const Hero = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className={styles.hero}>
      <div className={styles.gradient}></div>
      <div className={styles.bg}>
        <Image src={heroBg} alt="hero" fill className={styles.bgImage} />
      </div>

      <div className={styles.wrapper}>
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          className={styles.swiper}
          onSwiper={setSwiper}
          onSlideChange={() => {
            setActiveSlide(swiper?.realIndex ?? 0);
          }}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id} className={styles.slide}>
              {index === 0 ? (
                <h1
                  className={clsx(styles.title, "h1")}
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
              ) : (
                <h2
                  className={clsx(styles.title, "h1")}
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
              )}
              <p className={clsx(styles.description, "body-1")}>
                {slide.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.navigation}>
          <ArrowButton
            className={styles.prev}
            onClick={() => swiper?.slidePrev()}
          />
          <ArrowButton
            className={styles.next}
            onClick={() => swiper?.slideNext()}
          />
        </div>
      </div>

      <div className={styles.pagination}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={clsx(styles.paginationItem, {
              [styles.active]: index === activeSlide,
            })}
            onClick={() => swiper?.slideTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
