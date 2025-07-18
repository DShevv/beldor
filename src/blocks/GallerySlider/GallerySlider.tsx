"use client";
import clsx from "clsx";
import styles from "./GallerySlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import galleryImage from "@/assets/images/gallery.png";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";
import { useState } from "react";

import "swiper/css";
import Image from "next/image";

const GallerySlider = ({ title }: { title?: string }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={clsx(styles.title, "h2")}>{title || "Фотогалерея"}</h2>
        <p className={clsx(styles.description, "body-1")}>
          Убедитесь в качестве услуг через галерею выполненных заказов
        </p>
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
      >
        <SwiperSlide className={styles.slide}>
          <Image src={galleryImage} alt="gallery" className={styles.image} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image src={galleryImage} alt="gallery" className={styles.image} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image src={galleryImage} alt="gallery" className={styles.image} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image src={galleryImage} alt="gallery" className={styles.image} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image src={galleryImage} alt="gallery" className={styles.image} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image src={galleryImage} alt="gallery" className={styles.image} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image src={galleryImage} alt="gallery" className={styles.image} />
        </SwiperSlide>
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

export default GallerySlider;
