import clsx from "clsx";
import styles from "./AboutCompanyBlock.module.scss";
import Image from "next/image";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import aboutCompany from "@/assets/images/about-block.png";

const description = `Филиал «Белдортехника» ОАО «Минский завод 
гражданской авиации № 407» — <b>ведущий производитель
дорожно-строительной техники с 1991 года</b>. Специализируется
на разработке и модернизации оборудования для строительства,
 ремонта и содержания автомобильных дорог. Оснащён современной
 производственной базой, квалифицированными кадрами (80 сотрудников)
 и сертифицирован по международным стандартам качества (СТБ ISO 9001,
 14001, 45001).`;

const AboutCompanyBlock = () => {
  return (
    <section className={styles.container}>
      <div className={styles.caption}>
        <h2 className={clsx(styles.title, "h2")}>О компании</h2>
        <div
          className={clsx(styles.description, "body-3")}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <MainButton className={styles.button}>Подробнее</MainButton>
      </div>
      <Image src={aboutCompany} alt="about-company" />
    </section>
  );
};

export default AboutCompanyBlock;
