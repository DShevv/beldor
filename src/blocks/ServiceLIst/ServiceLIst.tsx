import clsx from "clsx";
import styles from "./ServiceLIst.module.scss";
import SubServiceCard from "@/components/SubServiceCard/SubServiceCard";

const ServiceLIst = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2 className={clsx(styles.title, "h2")}>{title}</h2>
        <p className={clsx(styles.description, "body-1")}>{description}</p>
      </div>

      <div className={styles.list}>
        <SubServiceCard title="Изготовление изделий и металлоконструкций по чертежам заказчика">
          <ul>
            <li>газоплазменная резка;</li>
            <li>электрогазосварка;</li>
            <li>обработка металла с применением станков с ЧПУ;</li>
            <li>фрезерная обработка на станках с ЧПУ;</li>
            <li>
              электроэрозионная обработка прошивная (AXCERON) и проволочная
              (ROBOFIL 290p);
            </li>
            <li>гибка и вальцовка, в том числе больших обечаек.</li>
          </ul>
        </SubServiceCard>
        <SubServiceCard title="Ремонт и обслуживание дорожно-строительной техники, навесного оборудования собственного производства">
          <ul>
            <li>газоплазменная резка;</li>
            <li>электрогазосварка;</li>
            <li>обработка металла с применением станков с ЧПУ;</li>
            <li>фрезерная обработка на станках с ЧПУ;</li>
            <li>
              электроэрозионная обработка прошивная (AXCERON) и проволочная
              (ROBOFIL 290p);
            </li>
            <li>гибка и вальцовка, в том числе больших обечаек.</li>
          </ul>
        </SubServiceCard>
        <SubServiceCard title="Изготовление изделий и металлоконструкций по чертежам заказчика">
          <ul>
            <li>газоплазменная резка;</li>
            <li>электрогазосварка;</li>
            <li>обработка металла с применением станков с ЧПУ;</li>
            <li>фрезерная обработка на станках с ЧПУ;</li>
            <li>
              электроэрозионная обработка прошивная (AXCERON) и проволочная
              (ROBOFIL 290p);
            </li>
            <li>гибка и вальцовка, в том числе больших обечаек.</li>
          </ul>
        </SubServiceCard>
      </div>
    </section>
  );
};

export default ServiceLIst;
