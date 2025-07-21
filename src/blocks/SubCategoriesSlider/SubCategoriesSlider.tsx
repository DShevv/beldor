"use client";
import styles from "./SubCategoriesSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";
import { useState } from "react";

import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import subcategory1 from "@/assets/images/subcategory1.png";

const SubCategoriesSlider = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className={styles.container}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={22}
        breakpoints={{
          768: {
            slidesPerView: 6,
          },
        }}
        className={styles.swiper}
        onSwiper={setSwiper}
      >
        <SwiperSlide className={styles.slide}>
          <Link href="/catalog/road-maintenance-equipment/1/1">
            <Image src={subcategory1} alt="subcategory1" />
            <span className="body-4">Отвал боковой</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Link href="/catalog/road-maintenance-equipment/1/1">
            <Image src={subcategory1} alt="subcategory1" />
            <span className="body-4">Отвал боковой</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Link href="/catalog/road-maintenance-equipment/1/1">
            <Image src={subcategory1} alt="subcategory1" />
            <span className="body-4">Отвал боковой</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Link href="/catalog/road-maintenance-equipment/1/1">
            <Image src={subcategory1} alt="subcategory1" />
            <span className="body-4">Отвал боковой</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Link href="/catalog/road-maintenance-equipment/1/1">
            <Image src={subcategory1} alt="subcategory1" />
            <span className="body-4">Отвал боковой</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Link href="/catalog/road-maintenance-equipment/1/1">
            <Image src={subcategory1} alt="subcategory1" />
            <span className="body-4">Отвал боковой</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Link href="/catalog/road-maintenance-equipment/1/1">
            <Image src={subcategory1} alt="subcategory1" />
            <span className="body-4">Отвал боковой</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Link href="/catalog/road-maintenance-equipment/1/1">
            <Image src={subcategory1} alt="subcategory1" />
            <span className="body-4">Отвал боковой</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Link href="/catalog/road-maintenance-equipment/1/1">
            <Image src={subcategory1} alt="subcategory1" />
            <span className="body-4">Отвал боковой</span>
          </Link>
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

export default SubCategoriesSlider;
