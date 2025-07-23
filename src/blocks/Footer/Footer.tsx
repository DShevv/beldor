import clsx from "clsx";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Logo from "@/components/Logo/Logo";
import { SvgMail, SvgMarker, SvgPhone } from "@/assets/icons/svgs";
import logo from "@/assets/images/logo-white.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="wrapper">
          <Logo className={styles.logo} image={logo} />
          <div className={clsx(styles.text, "body-2")}>
            Филиал ОАО «Минский завод гражданской авиации № 407», занимаемся
            производством дорожной техники для строительства, ремонта
            и обслуживания автомобильных дорог
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className={styles.nav}>
          <div className={styles.col}>
            <div className={clsx(styles.title, "h5")}>Каталог</div>
            <ul className={styles.list}>
              <li>
                <Link href={"/"} className={clsx(styles.link, "body-3")}>
                  Главная
                </Link>
              </li>
              <li>
                <Link href={"/about"} className={clsx(styles.link, "body-3")}>
                  О нас
                </Link>
              </li>
              <li>
                <Link href={"/quality"} className={clsx(styles.link, "body-3")}>
                  Качество продукции
                </Link>
              </li>
              <li>
                <Link
                  href={"/certificates"}
                  className={clsx(styles.link, "body-3")}
                >
                  Административные процедуры
                </Link>
              </li>
              <li>
                <Link
                  href={"/vacancies"}
                  className={clsx(styles.link, "body-3")}
                >
                  Вакансии
                </Link>
              </li>
              <li>
                <Link href={"/news"} className={clsx(styles.link, "body-3")}>
                  Новости
                </Link>
              </li>
              <li>
                <Link
                  href={"/contacts"}
                  className={clsx(styles.link, "body-3")}
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <div className={clsx(styles.title, "h5")}>услуги</div>
            <ul className={styles.list}>
              <li>
                <Link
                  href={"/services/1"}
                  className={clsx(styles.link, "body-3")}
                >
                  Пункт приёма ЯР-4М, утративших потребительские свойства
                </Link>
              </li>
              <li>
                <Link
                  href={"/services/2"}
                  className={clsx(styles.link, "body-3")}
                >
                  Металлообработка
                </Link>
              </li>
              <li>
                <Link
                  href={"/services/3"}
                  className={clsx(styles.link, "body-3")}
                >
                  Плазменная резка
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <div className={clsx(styles.title, "h5")}>продукция</div>
            <ul className={styles.list}>
              <li>
                <Link
                  href={"/services/1"}
                  className={clsx(styles.link, "body-3")}
                >
                  Оборудование для обслуживания дорог
                </Link>
              </li>
              <li>
                <Link
                  href={"/services/2"}
                  className={clsx(styles.link, "body-3")}
                >
                  Оборудование для обслуживания самолётов
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <div className={clsx(styles.title, "h5")}>Контакты</div>
            <div className={styles.contacts}>
              <div className={styles.contactItem}>
                <div className={styles.icon}>
                  <SvgMarker />
                </div>
                <div className={clsx(styles.contactInfo, "body-4")}>
                  Республика Беларусь, Минская обл., г.. Смолевичи,
                  ул.. Торговая 14,Б 222201
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.icon}>
                  <SvgPhone />
                </div>
                <Link
                  href={"tel:+375177636453"}
                  className={clsx(styles.contactInfo, "body-4")}
                >
                  +375 (17) 763–64–53
                </Link>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.icon}>
                  <SvgMail />
                </div>
                <div className={styles.contactInfo}>
                  <Link
                    href={"mailto:beldortehnikafilial@yandex.ru"}
                    className={clsx(styles.link, "body-4")}
                  >
                    beldortehnikafilial@yandex.ru
                  </Link>
                  <Link
                    href={"mailto:dortehnika@tut.by"}
                    className={clsx(styles.link, "body-4")}
                  >
                    dortehnika@tut.by
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={clsx(styles.text, "body-7")}>ⓒ 2025 bdt.by</div>
          <Link
            href={"/privacy-policy"}
            className={clsx(styles.link, "body-7")}
          >
            Политика конфиденциальности
          </Link>

          <div className={clsx(styles.dev, "body-7")}>
            <span>Дизайн и разработка:</span>
            <Link
              href={"https://cropas.by"}
              className={clsx(styles.link, "body-7")}
              target="_blank"
            >
              Cropas.by
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
