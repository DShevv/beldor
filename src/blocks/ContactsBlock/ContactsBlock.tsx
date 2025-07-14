import clsx from "clsx";
import styles from "./ContactsBlock.module.scss";
import Link from "next/link";
import Map from "@/components/Map/Map";
import logo from "@/assets/images/logo.png";

const ContactsBlock = async ({ isTitle = true }: { isTitle?: boolean }) => {
  return (
    <section className={styles.container}>
      {isTitle && (
        <h2 className={clsx(styles.title, "h2")}>Контакты компании</h2>
      )}

      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <h3 className={clsx(styles.infoTitle, "h6")}>Адрес</h3>
            <p className={clsx(styles.infoText, "body-2")}>
              Республика Беларусь, Минская обл., г. Смолевичи, ул. Торговая 14,Б
              222201
            </p>
          </div>
          <div className={styles.infoItem}>
            <h3 className={clsx(styles.infoTitle, "h6")}>режим работы</h3>
            <p className={clsx(styles.infoText, "body-2")}>
              Понедельник–пятница с 8:00 до 16:30, обед с 12:30 до 13:00
              загрузка автомобилей производится до 15:30
              <br />
              выходные дни: суббота, воскресенье.
            </p>
          </div>
          <div className={styles.infoItem}>
            <h3 className={clsx(styles.infoTitle, "h6")}>номер телефона</h3>
            <Link
              href="tel:+375293333333"
              className={clsx(styles.infoText, "body-2")}
            >
              +375 (29) 333-33-33 (приёмная)
            </Link>
          </div>
          <div className={styles.infoItem}>
            <h3 className={clsx(styles.infoTitle, "h6")}>электронная почта</h3>
            <Link
              href="mailto:beldortehnikafilial@yandex.ru"
              className={clsx(styles.infoText, "body-2")}
            >
              beldortehnikafilial@yandex.ru
            </Link>
            <Link
              href="mailto:dortehnika@tut.by"
              className={clsx(styles.infoText, "body-2")}
            >
              dortehnika@tut.by
            </Link>
          </div>
        </div>

        <Map
          address="Республика Беларусь, Минская обл., г. Смолевичи, ул. Торговая 14,Б 222201"
          logo={logo}
        />
      </div>
    </section>
  );
};
export default ContactsBlock;
