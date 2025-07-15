"use client";

import clsx from "clsx";
import styles from "./NewsBlock.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Suspense, useState } from "react";
import NewsCard from "@/components/NewsCard/NewsCard";
import newsBg from "@/assets/images/news.png";
import Pagination from "@/components/Pagination/Pagination";

import "swiper/css";

const NewsBlock = () => {
  const [activeTag, setActiveTag] = useState<number>(0);

  return (
    <section className={styles.container}>
      <Swiper className={styles.tags} slidesPerView={"auto"} spaceBetween={16}>
        <SwiperSlide
          className={clsx(styles.tag, "body-2", {
            [styles.active]: activeTag === 0,
          })}
          onClick={() => setActiveTag(0)}
        >
          Все новости
        </SwiperSlide>
        <SwiperSlide
          className={clsx(styles.tag, "body-2", {
            [styles.active]: activeTag === 1,
          })}
          onClick={() => setActiveTag(1)}
        >
          Новости
        </SwiperSlide>
        <SwiperSlide
          className={clsx(styles.tag, "body-2", {
            [styles.active]: activeTag === 2,
          })}
          onClick={() => setActiveTag(2)}
        >
          Акции
        </SwiperSlide>
      </Swiper>

      <div className={styles.news}>
        <NewsCard
          title="Машина для ямочного ремонта ЯР-4М"
          date="15.07.2025"
          tag="Новости"
          image={newsBg}
          link="/news/1"
        />
        <NewsCard
          title="Установка для регенерации асфальтобетона ПМ-107"
          date="15.07.2025"
          tag="Новости"
          image={newsBg}
          link="/news/1"
        />
        <NewsCard
          title="Машина для ямочного ремонта ЯР-4М"
          date="15.07.2025"
          tag="Новости"
          image={newsBg}
          link="/news/1"
        />
        <NewsCard
          title="Машина для ямочного ремонта ЯР-4М"
          date="15.07.2025"
          tag="Новости"
          image={newsBg}
          link="/news/1"
        />
        <NewsCard
          title="Установка для регенерации асфальтобетона ПМ-107"
          date="15.07.2025"
          tag="Новости"
          image={newsBg}
          link="/news/1"
        />
        <NewsCard
          title="Машина для ямочного ремонта ЯР-4М"
          date="15.07.2025"
          tag="Новости"
          image={newsBg}
          link="/news/1"
        />
      </div>

      <Suspense>
        <Pagination
          current={2}
          max={4}
          maxPerView={6}
          className={styles.pagination}
        />
      </Suspense>
    </section>
  );
};

export default NewsBlock;
