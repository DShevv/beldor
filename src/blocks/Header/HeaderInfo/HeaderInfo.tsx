"use client";
import Logo from "@/components/Logo/Logo";
import styles from "./HeaderInfo.module.scss";
import clsx from "clsx";
import Link from "next/link";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import { SvgBurger, SvgPhone, SvgSearchThin } from "@/assets/icons/svgs";
import { observer } from "mobx-react-lite";
import globalStore from "@/stores/global-store";
import { RefObject, useRef, useState } from "react";
import Search from "@/components/Search";
import useOutsideClick from "@/utils/useOutsideClick";

const HeaderInfo = observer(() => {
  const { popupStore } = globalStore;
  const { openPopup } = popupStore;
  const [search, setSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useOutsideClick(searchRef, () => {
    setSearch(false);
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Logo text="Спецтехника для строительства, восстановления и обслуживания автомобильных магистралей" />

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <div className={clsx(styles.infoItemTitle, "h6")}>Адрес:</div>
            <div className={clsx(styles.infoItemValue, "body-4")}>
              Республика Беларусь, Минская обл., г. Смолевичи, ул. Торговая 14,Б
              222201
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={clsx(styles.infoItemTitle, "h6")}>Приёмная:</div>
            <Link
              href="tel:+375177636453"
              className={clsx(styles.infoItemValue, "body-4")}
            >
              +375 (17) 763–64–53
            </Link>
          </div>
          <MainButton
            className={styles.button}
            onClick={() => openPopup("feedback")}
          >
            Обратный звонок
          </MainButton>
        </div>

        <div className={styles.buttons}>
          <CircleButton
            type="link"
            href="tel:+375177636453"
            aria-label="Позвонить"
          >
            <SvgPhone />
          </CircleButton>

          <CircleButton
            onClick={() => setSearch(!search)}
            aria-label={search ? "Закрыть поиск" : "Открыть поиск"}
          >
            <SvgSearchThin />
          </CircleButton>

          <CircleButton
            onClick={() => openPopup("menu")}
            aria-label="Открыть меню"
          >
            <SvgBurger />
          </CircleButton>

          <Search
            className={clsx(styles.search, { [styles.active]: search })}
            ref={searchRef as RefObject<HTMLDivElement>}
            onResultClick={() => setSearch(false)}
          />
        </div>
      </div>
    </div>
  );
});

export default HeaderInfo;
