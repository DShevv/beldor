import clsx from "clsx";
import styles from "./CatalogBlock.module.scss";
import Link from "next/link";
import Image from "next/image";
import category1 from "@/assets/images/category1.png";
import category2 from "@/assets/images/category2.png";

const CatalogBlock = ({ isTitle = true }: { isTitle?: boolean }) => {
  return (
    <section className={styles.container}>
      {isTitle && (
        <h2 className={clsx(styles.title, "h2")}>Каталог продукции</h2>
      )}

      <div className={styles.categories}>
        <Link href="/" className={clsx(styles.category, "h3")}>
          <Image src={category1} alt="category1" />
          Оборудование для обслуживания дорог
        </Link>

        <Link href="/" className={clsx(styles.category, "h3")}>
          <Image src={category2} alt="category2" />
          Оборудование для обслуживания самолётов
        </Link>
      </div>
    </section>
  );
};

export default CatalogBlock;
