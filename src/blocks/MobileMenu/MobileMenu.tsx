"use client";
import clsx from "clsx";
import styles from "./MobileMenu.module.scss";
import { observer } from "mobx-react-lite";
import globalStore from "@/stores/global-store";
import { useEffect, useState } from "react";
import {
  SvgPhone,
  SvgMail,
  SvgMarker,
  SvgArrow,
  SvgClose,
} from "@/assets/icons/svgs";
import Link from "next/link";
import { AnimatePresence, motion as m } from "motion/react";
import MainButton from "@/components/Buttons/MainButton/MainButton";

const MobileMenu = observer(() => {
  const { popupStore } = globalStore;
  const { menu, closePopup, openPopup } = popupStore;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (menu) {
      const scrollPosition = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.overflowY = "scroll";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.position = "";
        document.body.style.overflowY = "auto";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollPosition);
      };
    }
  }, [menu]);

  return (
    <div
      className={clsx(styles.wrapper, { [styles.active]: menu })}
      onClick={() => closePopup("menu")}
    >
      <div
        className={styles.container}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <button
          className={styles.close}
          onClick={() => closePopup("menu")}
          aria-label="Закрыть меню"
        >
          <SvgClose />
        </button>

        <m.ul className={styles.menu}>
          <li>
            <Link
              href="/"
              className={clsx(styles.link, "h5")}
              onClick={() => closePopup("menu")}
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              href="/catalog"
              className={clsx(styles.link, "h5")}
              onClick={() => closePopup("menu")}
            >
              продукция
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={clsx(styles.link, "h5")}
              onClick={() => closePopup("menu")}
            >
              услуги
            </Link>
          </li>
          <li>
            <div
              className={clsx(styles.link, "h5")}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href="/about" onClick={() => closePopup("menu")}>
                О КОМПАНИИ
              </Link>{" "}
              <SvgArrow
                style={{
                  transform: isOpen ? "rotate(90deg)" : "rotate(-90deg)",
                }}
              />
            </div>
            <AnimatePresence>
              {isOpen && (
                <m.ul
                  layout
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles.subMenu}
                >
                  <li>
                    <Link
                      className={clsx(styles.subLink, "body-3")}
                      href={`/about`}
                      onClick={() => closePopup("menu")}
                    >
                      О нас
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={clsx(styles.subLink, "body-3")}
                      href={`/services`}
                      onClick={() => closePopup("menu")}
                    >
                      Административные процедуры
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={clsx(styles.subLink, "body-3")}
                      href={`/quality`}
                      onClick={() => closePopup("menu")}
                    >
                      Качество продукции
                    </Link>
                  </li>
                </m.ul>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link
              href="/news"
              className={clsx(styles.link, "h5")}
              onClick={() => closePopup("menu")}
            >
              Статьи
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className={clsx(styles.link, "h5")}
              onClick={() => closePopup("menu")}
            >
              Контакты
            </Link>
          </li>
        </m.ul>

        <div className={styles.bottom}>
          <div className={styles.info}>
            <div className={clsx(styles.infoItem, "body-7")}>
              <div className={styles.icon}>
                <SvgMarker />
              </div>
              <div className={styles.infoText}>
                Республика Беларусь, Минская обл., г. Смолевичи, ул. Торговая
                14,Б 222201
              </div>
            </div>

            <Link
              className={clsx(styles.infoItem, "body-7")}
              href={`tel:+375177636453`}
            >
              <div className={styles.icon}>
                <SvgPhone />
              </div>
              <div className={styles.infoText}>+375 (17) 763–64–53</div>
            </Link>

            <div className={clsx(styles.infoItem, "body-7")}>
              <div className={styles.icon}>
                <SvgMail />
              </div>
              <div className={styles.infoText}>
                <Link href="mailto:info@smolevichi.by">info@smolevichi.by</Link>
                <Link href="mailto:dortehnika@tut.by">dortehnika@tut.by</Link>
              </div>
            </div>
          </div>
          <MainButton
            className={styles.button}
            onClick={() => {
              openPopup("feedback");
              closePopup("menu");
            }}
          >
            Обратный звонок
          </MainButton>
        </div>
      </div>
    </div>
  );
});

export default MobileMenu;
