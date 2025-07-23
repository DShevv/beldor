import clsx from "clsx";
import styles from "./AdvantagesBlock.module.scss";
import {
  SvgCertificate,
  SvgPeople,
  SvgStatistics,
  SvgTime,
} from "@/assets/icons/svgs";

const AdvantagesBlock = () => {
  return (
    <section className={styles.container}>
      <div className={styles.caption}>
        <h2 className={clsx(styles.title, "h2")}>Наши преимущества</h2>
        <p className={clsx(styles.description, "body-3")}>
          Компания «Белдортехника» обладает мощной проектно-конструкторской
          базой, штатом опытных инженеров и современными производственными
          мощностями, что позволяет оперативно создавать инновационные модели
          техники. Специализированное оборудование предприятия поставляется
          дорожно-строительным организациям Беларуси, а также экспортируется
          в Россию и страны СНГ.
        </p>
      </div>

      <div className={styles.advantages}>
        <div className={styles.advantage}>
          <SvgTime />
          <div className={styles.info}>
            <p className={clsx(styles.infoTitle, "h5")}>30+ лет на рынке</p>
            <p className={clsx(styles.infoDescription, "body-6")}>
              Основана в 1991 году как преемник треста «Оргдорстрой»
              НПО «Дорстройтехника»
            </p>
          </div>
        </div>
        <div className={styles.advantage}>
          <SvgStatistics />
          <div className={styles.info}>
            <p className={clsx(styles.infoTitle, "h5")}>
              Инновационные решения
            </p>
            <p className={clsx(styles.infoDescription, "body-6")}>
              Конструкции техники постоянно модернизируются с учётом требований
              рынка
            </p>
          </div>
        </div>
        <div className={styles.advantage}>
          <SvgCertificate />
          <div className={styles.info}>
            <p className={clsx(styles.infoTitle, "h5")}>
              Техническое превосходство
            </p>
            <p className={clsx(styles.infoDescription, "body-6")}>
              Повышающем долговечность и производительность оборудования
            </p>
          </div>
        </div>
        <div className={styles.advantage}>
          <SvgPeople />
          <div className={styles.info}>
            <p className={clsx(styles.infoTitle, "h5")}>
              Ориентация на клиентскую базу
            </p>
            <p className={clsx(styles.infoDescription, "body-6")}>
              Активная адаптация продукции под запросы заказчиков
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesBlock;
