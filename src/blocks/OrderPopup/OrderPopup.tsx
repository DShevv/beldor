"use client";
import clsx from "clsx";
import styles from "./OrderPopup.module.scss";
import Image from "next/image";
import { Form, Formik } from "formik";
import MainInput from "@/components/Inputs/MainInput/MainInput";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import Checkbox from "@/components/Inputs/Checkbox/Checkbox";
import CommentInput from "@/components/Inputs/CommentInput/CommentInput";
import { observer } from "mobx-react-lite";
import globalStore from "@/stores/global-store";
import { useEffect } from "react";
import { SvgCross } from "@/assets/icons/svgs";
import Link from "next/link";

const OrderPopup = observer(() => {
  const { popupStore, notificationStore } = globalStore;
  const { order, closePopup, product } = popupStore;
  const { setNotification } = notificationStore;

  useEffect(() => {
    if (order) {
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
  }, [order]);

  return (
    <div
      className={clsx(styles.wrapper, { [styles.active]: order })}
      onClick={() => closePopup("order")}
    >
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div onClick={() => closePopup("order")} className={styles.close}>
          <SvgCross />
        </div>

        <div className={styles.caption}>
          <h2 className={clsx("h2", styles.title)}>
            Заказать{" "}
            {product && typeof product === "object" ? "товар" : "услугу"}
          </h2>
          <div className={styles.product}>
            {product && typeof product === "object" && (
              <Image
                src={product.image}
                alt={product.name}
                className={styles.image}
                width={430}
                height={338}
              />
            )}
            <div className={clsx("body-2", styles.name)}>
              {product && typeof product === "object" ? product.name : product}
            </div>
          </div>
        </div>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            company: "",
            comment: "",
            isAgree: false,
          }}
          onSubmit={async (values) => {
            console.log(values);
            setNotification("success");
          }}
          /*  validate={validateFeedback}
          validateOnBlur={false}
          validateOnMount={false}
          validateOnChange={false} */
        >
          {({ values, setFieldValue }) => (
            <Form className={styles.form}>
              <div className={styles.line}>
                <MainInput
                  name="name"
                  title="Имя"
                  placeholder="Имя"
                  type="text"
                  required
                  value={values.name}
                  onChange={(value) => setFieldValue("name", value)}
                />
                <MainInput
                  name="phone"
                  title="Телефон"
                  placeholder="Телефон"
                  type="tel"
                  mask="+375 (99) 999-99-99"
                  required
                  value={values.phone}
                  onChange={(value) => setFieldValue("phone", value)}
                />
              </div>
              <div className={styles.line}>
                <MainInput
                  name="email"
                  title="Email"
                  placeholder="Email"
                  type="email"
                  required
                  value={values.email}
                  onChange={(value) => setFieldValue("email", value)}
                />
                <MainInput
                  name="company"
                  title="Компания"
                  placeholder="Компания"
                  type="text"
                  required
                  value={values.company}
                  onChange={(value) => setFieldValue("company", value)}
                />
              </div>
              <CommentInput
                name="comment"
                title="Комментарий"
                placeholder="Комментарий"
                value={values.comment}
                onChange={(value) => setFieldValue("comment", value)}
              />
              <Checkbox name="isAgree" className={styles.checkbox}>
                Согласие на обработку{" "}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  className={styles.link}
                >
                  персональных данных
                </Link>
              </Checkbox>

              <MainButton type="submit" className={styles.button}>
                Отправить
              </MainButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
});

export default OrderPopup;
