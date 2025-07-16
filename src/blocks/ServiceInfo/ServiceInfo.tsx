import clsx from "clsx";
import styles from "./ServiceInfo.module.scss";

import Image, { StaticImageData } from "next/image";

const ServiceInfo = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string | StaticImageData;
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.caption}>
        <h2 className={clsx(styles.title, "h2")}>{title}</h2>
        <div className={clsx(styles.description, "body-3")}>{description}</div>
      </div>
      <Image src={image} alt={title} className={styles.image} />
    </section>
  );
};

export default ServiceInfo;
