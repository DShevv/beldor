"use client";
import clsx from "clsx";
import styles from "./VacanciesSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import ArrowButton from "@/components/Buttons/ArrowButton/ArrowButton";
import { useState } from "react";
import vacanciesImage from "@/assets/images/vacancies-item.png";
import "swiper/css";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import VacanciesCard from "@/components/VacanciesCard/VacanciesCard";

const VacanciesSlider = ({ title }: { title?: string }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={clsx(styles.title, "h2")}>
          {title || "Вакансии компании"}
        </h2>
        <MainButton type="link" href="/vacancies" className={styles.button}>
          все вакансии
        </MainButton>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          768: {
            spaceBetween: 22,
          },
        }}
        loop={true}
        className={styles.swiper}
        onSwiper={setSwiper}
      >
        <SwiperSlide className={styles.slide}>
          <VacanciesCard
            image={vacanciesImage}
            title="Менеджер по продажам"
            city="г. Минск"
            workType="Полная занятость"
            experience="Опыт работы от 3-х лет"
            description="Мы приглашаем специалистов на должность менеджера по продажам. Кандидатам необходимо сочетать экспертизу в строительной отрасли с навыками продаж маркетинговых услуг, а также умением консультировать клиентов для принятия обоснованных решений."
            salary="2000"
          >
            <ul>
              <li>
                Работать с базой потенциальных клиентов (строительные компании,
                подрядчики, логистические комплексы) по утверждённым
                инструкциям.
              </li>
              <li>
                Проводить холодные звонки по скриптам с акцентом на специфику
                строительного оборудования, выявлять потребности клиентов и
                отрабатывать возражения.
              </li>
              <li>
                Назначать встречи для демонстрации оборудования и передавать
                заинтересованных клиентов старшему менеджеру.
              </li>
              <li>
                Обрабатывать входящие заявки на оборудование, проводить
                первичную квалификацию и передавать их в работу.
              </li>
              <li>
                Выполнять планы по объёму продаж, вести отчётность в CRM,
                участвовать в планёрках и стратегических созвонах.
              </li>
            </ul>
          </VacanciesCard>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <VacanciesCard
            image={vacanciesImage}
            title="Менеджер по продажам"
            city="г. Минск"
            workType="Полная занятость"
            experience="Опыт работы от 3-х лет"
            description="Мы приглашаем специалистов на должность менеджера по продажам. Кандидатам необходимо сочетать экспертизу в строительной отрасли с навыками продаж маркетинговых услуг, а также умением консультировать клиентов для принятия обоснованных решений."
            salary="2000"
          >
            <ul>
              <li>
                Работать с базой потенциальных клиентов (строительные компании,
                подрядчики, логистические комплексы) по утверждённым
                инструкциям.
              </li>
              <li>
                Проводить холодные звонки по скриптам с акцентом на специфику
                строительного оборудования, выявлять потребности клиентов и
                отрабатывать возражения.
              </li>
              <li>
                Назначать встречи для демонстрации оборудования и передавать
                заинтересованных клиентов старшему менеджеру.
              </li>
              <li>
                Обрабатывать входящие заявки на оборудование, проводить
                первичную квалификацию и передавать их в работу.
              </li>
              <li>
                Выполнять планы по объёму продаж, вести отчётность в CRM,
                участвовать в планёрках и стратегических созвонах.
              </li>
            </ul>
          </VacanciesCard>
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

export default VacanciesSlider;
