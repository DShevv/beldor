"use client";
import clsx from "clsx";
import styles from "./ManagementSystem.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import diplom from "@/assets/images/diplom.png";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";
import { useState } from "react";

import "swiper/css";
import Image from "next/image";

const ManagementSystem = ({ children }: { children: React.ReactNode }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        <h2 className={clsx(styles.title, "h2")}>Система Менеджмента</h2>
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
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={clsx(styles.description, "body-3")}>{children}</p>
        </div>
        <div className={styles.swiperWrapper}>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={16}
            centeredSlides={true}
            breakpoints={{
              768: {
                spaceBetween: 22,
              },
            }}
            className={styles.swiper}
            onSwiper={setSwiper}
          >
            <SwiperSlide className={styles.slide}>
              <Image src={diplom} alt="награда 1" className={styles.image} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image src={diplom} alt="награда 2" className={styles.image} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image src={diplom} alt="награда 3" className={styles.image} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image src={diplom} alt="награда 4" className={styles.image} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image src={diplom} alt="награда 5" className={styles.image} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image src={diplom} alt="награда 6" className={styles.image} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image src={diplom} alt="награда 7" className={styles.image} />
            </SwiperSlide>
          </Swiper>
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
      </div>
    </section>
  );
};

export default ManagementSystem;
