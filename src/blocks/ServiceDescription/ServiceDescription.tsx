import clsx from "clsx";
import styles from "./ServiceDescription.module.scss";
import DescriptionCard from "@/components/DescriptionCard/DescriptionCard";
import descriptionImage from "@/assets/images/description.png";

const ServiceDescription = ({ title }: { title: string }) => {
  return (
    <section className={styles.container}>
      <h2 className={clsx(styles.title, "h2")}>{title}</h2>

      <div className={styles.list}>
        <DescriptionCard
          title="КОМЕТА 3.2К — Комплекс термической резки"
          image={descriptionImage}
          description="Машина термической резки (МТР) серии «Комета» предназначена для фигурного раскроя листового металлопроката"
          specializations={[
            {
              name: "Максимальная ширина обрабатываемого листа, мм",
              value: "3200",
            },
            { name: "Величина продольного хода машины, мм", value: "6000" },
            { name: "Размер колец рельсового пути, мм", value: "4000" },
            {
              name: "МасМаксимальная толщина разрезаемого листа, не менее мм",
              value: "100",
            },
            {
              name: "Минимальная толщина разрезаемого листа",
              value: "3",
            },
          ]}
        />
        <DescriptionCard
          title="КОМЕТА 3.2К — Комплекс термической резки"
          image={descriptionImage}
          description="Машина термической резки (МТР) серии «Комета» предназначена для фигурного раскроя листового металлопроката"
          specializations={[
            {
              name: "Максимальная ширина обрабатываемого листа, мм",
              value: "3200",
            },
            { name: "Величина продольного хода машины, мм", value: "6000" },
            { name: "Размер колец рельсового пути, мм", value: "4000" },
            {
              name: "МасМаксимальная толщина разрезаемого листа, не менее мм",
              value: "100",
            },
            {
              name: "Минимальная толщина разрезаемого листа",
              value: "3",
            },
          ]}
        />
        <DescriptionCard
          title="КОМЕТА 3.2К — Комплекс термической резки"
          image={descriptionImage}
          description="Машина термической резки (МТР) серии «Комета» предназначена для фигурного раскроя листового металлопроката"
          specializations={[
            {
              name: "Максимальная ширина обрабатываемого листа, мм",
              value: "3200",
            },
            { name: "Величина продольного хода машины, мм", value: "6000" },
            { name: "Размер колец рельсового пути, мм", value: "4000" },
            {
              name: "МасМаксимальная толщина разрезаемого листа, не менее мм",
              value: "100",
            },
            {
              name: "Минимальная толщина разрезаемого листа",
              value: "3",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default ServiceDescription;
