"use client";
import FirstBlock from "@/blocks/FirstBlock/FirstBlock";
import styles from "./page.module.scss";
import SeoBlock from "@/blocks/SeoBlock/SeoBlock";
import Feedback from "@/blocks/Feedback/Feedback";
import vacanciesBg from "@/assets/images/vacancies.jpg";
import VacanciesCard from "@/components/VacanciesCard/VacanciesCard";
import vacanciesImage from "@/assets/images/vacancies-item.png";
import { motion as m } from "motion/react";

const VacanciesPage = () => {
  return (
    <main>
      <FirstBlock
        image={vacanciesBg}
        title="Вакансии"
        breadcrumbsItems={[
          { title: "Главная", href: "/" },
          { title: "Вакансии", href: "/vacancies" },
        ]}
      />
      <div className="wrapper">
        <m.section layout className={styles.vacancies}>
          <m.div layout>
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
                  Работать с базой потенциальных клиентов (строительные
                  компании, подрядчики, логистические комплексы) по утверждённым
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
          </m.div>
          <m.div layout>
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
                  Работать с базой потенциальных клиентов (строительные
                  компании, подрядчики, логистические комплексы) по утверждённым
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
          </m.div>
        </m.section>
        <SeoBlock />
        <Feedback />
      </div>
    </main>
  );
};

export default VacanciesPage;
