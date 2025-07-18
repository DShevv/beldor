import clsx from "clsx";
import styles from "./ManufactureSupplies.module.scss";
import Image from "next/image";
import { StaticImageData } from "next/image";

const ManufactureSupplies = ({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: {
    image: string | StaticImageData;
    title: string;
    description: string;
  }[];
}) => {
  return (
    <section className={styles.container}>
      <h2 className={clsx(styles.title, "h2")}>{title}</h2>
      {description && (
        <div className={clsx(styles.description, "body-1")}>{description}</div>
      )}
      <div className={styles.items}>
        {items.map((item, index) => (
          <div className={styles.item} key={index}>
            <Image src={item.image} alt={item.title} className={styles.image} />

            <div className={clsx(styles.title, "h4")}>{item.title}</div>
            <div className={clsx(styles.description, "body-3")}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManufactureSupplies;
