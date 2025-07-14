"use client";
import clsx from "clsx";
import styles from "./Feedback.module.scss";
import Image from "next/image";
import feedback from "@/assets/images/feedback.jpg";
import { Form, Formik } from "formik";
import MainInput from "@/components/Inputs/MainInput/MainInput";
import CommentInput from "@/components/Inputs/CommentInput/CommentInput";
import Checkbox from "@/components/Inputs/Checkbox/Checkbox";
import Link from "next/link";
import MainButton from "@/components/Buttons/MainButton/MainButton";

const Feedback = () => {
  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <h2 className={clsx(styles.title, "h2")}>Свяжитесь с нами</h2>
        <div className={styles.image}>
          <Image src={feedback} alt="feedback" fill />
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
        onSubmit={() => {}}
      >
        {({ values, setFieldValue }) => (
          <Form className={styles.form}>
            <div className={clsx(styles.title, "h2")}>Свяжитесь с нами</div>
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
    </section>
  );
};

export default Feedback;
