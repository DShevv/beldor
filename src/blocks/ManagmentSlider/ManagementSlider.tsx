"use client";
import clsx from "clsx";
import styles from "./ManagementSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import managementImage from "@/assets/images/management.png";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";
import { useState } from "react";

import "swiper/css";
import ManagementCard from "@/components/MenagementCard/ManagementCard";

const ManagementSlider = ({ title }: { title?: string }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={clsx(styles.title, "h2")}>
          {title || "Менеджмент компании"}
        </h2>

        <div className={styles.navigation}>
          <ArrowButton
            variant="secondary"
            className={styles.prev}
            onClick={() => swiper?.slidePrev()}
          />
          <ArrowButton
            variant="secondary"
            className={styles.next}
            onClick={() => swiper?.slideNext()}
          />
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 22,
          },
        }}
        className={styles.swiper}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
      >
        {new Array(10).fill(0).map((_, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <ManagementCard
              active={activeIndex === index}
              title="Кепель Сергей Петрович"
              image={managementImage}
              position="Директор"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.navigation}>
        <ArrowButton
          variant="secondary"
          className={styles.prev}
          onClick={() => swiper?.slidePrev()}
        />
        <ArrowButton
          variant="secondary"
          className={styles.next}
          onClick={() => swiper?.slideNext()}
        />
      </div>
    </section>
  );
};

export default ManagementSlider;
