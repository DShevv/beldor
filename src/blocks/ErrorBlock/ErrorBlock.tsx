"use client";
import styles from "./ErrorBlock.module.scss";
import Image from "next/image";
import error404 from "@/assets/images/404.jpg";
import clsx from "clsx";
import MainButton from "@/components/Buttons/MainButton/MainButton";

const ErrorBlock = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.gradient}></div>
      <div className={styles.bg}>
        <Image src={error404} alt="404" fill className={styles.bgImage} />
      </div>

      <div className={styles.caption}>
        <h1 className={clsx(styles.title)}>404</h1>
        <h2 className={clsx(styles.subtitle, "h2")}>Страница не найдена</h2>
        <p className={clsx(styles.description, "body-2")}>
          К сожалению, страница не найдена. Возможно, она была удалена
          или вы ввели некорректный адрес (ошибка 404).
        </p>
        <MainButton type="link" href="/" className={styles.button}>
          вернуться на главную
        </MainButton>
      </div>
    </section>
  );
};

export default ErrorBlock;
