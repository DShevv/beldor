"use client";
import clsx from "clsx";
import styles from "./NewsSlider.module.scss";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import NewsCard from "@/components/NewsCard/NewsCard";
import newsImage from "@/assets/images/news.png";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";
import { useState } from "react";

import "swiper/css";

const NewsSlider = ({ title }: { title?: string }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={clsx(styles.title, "h2")}>
          {title || "Последние новости"}
        </h2>
        <MainButton type="link" href="/news" className={styles.button}>
          Все новости
        </MainButton>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={22}
        className={styles.swiper}
        onSwiper={setSwiper}
        loop={true}
      >
        <SwiperSlide className={styles.slide}>
          <NewsCard
            title="Машина для ямочного ремонта ЯР-4М"
            date="26.06.2025"
            tag="Новости"
            image={newsImage}
            link="/news/1"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <NewsCard
            title="Машина для ямочного ремонта ЯР-4М"
            date="26.06.2025"
            tag="Новости"
            image={newsImage}
            link="/news/1"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <NewsCard
            title="Машина для ямочного ремонта ЯР-4М"
            date="26.06.2025"
            tag="Новости"
            image={newsImage}
            link="/news/1"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <NewsCard
            title="Машина для ямочного ремонта ЯР-4М"
            date="26.06.2025"
            tag="Новости"
            image={newsImage}
            link="/news/1"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <NewsCard
            title="Машина для ямочного ремонта ЯР-4М"
            date="26.06.2025"
            tag="Новости"
            image={newsImage}
            link="/news/1"
          />
        </SwiperSlide>
      </Swiper>

      <div className={styles.mobile}>
        <NewsCard
          title="Машина для ямочного ремонта ЯР-4М"
          date="26.06.2025"
          tag="Новости"
          image={newsImage}
          link="/news/1"
        />
        <NewsCard
          title="Машина для ямочного ремонта ЯР-4М"
          date="26.06.2025"
          tag="Новости"
          image={newsImage}
          link="/news/1"
        />
        <NewsCard
          title="Машина для ямочного ремонта ЯР-4М"
          date="26.06.2025"
          tag="Новости"
          image={newsImage}
          link="/news/1"
        />
        <MainButton type="link" href="/news" className={styles.mobileButton}>
          Все новости
        </MainButton>
      </div>

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

export default NewsSlider;
