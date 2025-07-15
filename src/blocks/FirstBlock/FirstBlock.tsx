import styles from "./FirstBlock.module.scss";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { StaticImageData } from "next/image";
import clsx from "clsx";

const FirstBlock = ({
  image,
  title,
  breadcrumbsItems,
  children,
}: {
  image: string | StaticImageData;
  title: string;
  breadcrumbsItems: { title: string; href: string }[];
  children?: React.ReactNode;
}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.gradient}></div>
      <div className={styles.bg}>
        <Image src={image} alt="hero" fill className={styles.bgImage} />
      </div>

      <div className="wrapper">
        <Breadcrumbs items={breadcrumbsItems} className={styles.breadcrumbs} />
        <h1 className={clsx(styles.title, "h1")}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default FirstBlock;
