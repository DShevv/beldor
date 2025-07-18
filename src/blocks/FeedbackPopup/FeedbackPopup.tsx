"use client";
import clsx from "clsx";
import styles from "./FeedbackPopup.module.scss";
import Image from "next/image";
import feedbackPicture from "@/assets/images/popup.png";
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

const FeedbackPopup = observer(() => {
  const { popupStore } = globalStore;
  const { feedback, closePopup } = popupStore;

  useEffect(() => {
    if (feedback) {
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
  }, [feedback]);

  return (
    <div
      className={clsx(styles.wrapper, { [styles.active]: feedback })}
      onClick={() => closePopup("feedback")}
    >
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div onClick={() => closePopup("feedback")} className={styles.close}>
          <SvgCross />
        </div>

        <div className={styles.caption}>
          <h2 className={clsx("h2", styles.title)}>Обратный звонок</h2>
          <p className={clsx("body-3", styles.description)}>
            Мы всегда готовы помочь вам с любыми вопросами. Заполните форму
            обратной связи, и мы ответим вам в ближайшее время.
          </p>
          <Image
            src={feedbackPicture}
            alt="feedback"
            className={styles.image}
            width={452}
            height={278}
          />
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
              <Image
                src={feedbackPicture}
                alt="feedback"
                className={styles.image}
                width={452}
                height={278}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
});

export default FeedbackPopup;
