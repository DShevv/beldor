"use client";
import { observer } from "mobx-react-lite";
import styles from "./Notification.module.scss";
import globalStore from "@/stores/global-store";
import clsx from "clsx";
import { SvgCircleSuccess, SvgCircleError } from "@/assets/icons/svgs";

const Notification = observer(() => {
  const { notificationStore } = globalStore;
  const { type, isVisible, removeNotification } = notificationStore;

  return (
    <div
      className={clsx(styles.wrapper, { [styles.active]: isVisible })}
      onClick={() => removeNotification()}
    >
      <div className={clsx(styles.item, { [styles.error]: type === "error" })}>
        <div className={clsx("h4", styles.title)}>
          {type === "success" && <SvgCircleSuccess />}
          {type === "error" && <SvgCircleError />}
          {type === "success"
            ? "Спасибо за вашу заявку!"
            : "Не получили вашу заявку"}
        </div>
        <div className={clsx("body-5", styles.text)}>
          {type === "success"
            ? "Скоро с вами свяжется наш менеджер и ответит на все ваши вопросы."
            : "К сожалению, не получили вашу заявку. Повторите попытку снова."}
        </div>
      </div>
    </div>
  );
});

export default Notification;
