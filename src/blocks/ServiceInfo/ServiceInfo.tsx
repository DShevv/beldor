import clsx from "clsx";
import styles from "./ServiceInfo.module.scss";

import Image, { StaticImageData } from "next/image";

const ServiceInfo = ({
  title,
  image,
  className,
  children,
}: {
  title: string;
  image: string | StaticImageData;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={clsx(styles.container, className)}>
      <div className={styles.caption}>
        <h2 className={clsx(styles.title, "h2")}>{title}</h2>
        <div className={clsx(styles.description, "body-3")}>{children}</div>
      </div>
      <div className={styles.image}>
        <Image src={image} alt={title} fill />
      </div>
    </section>
  );
};

export default ServiceInfo;
