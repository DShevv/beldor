import clsx from "clsx";
import styles from "./CategoriesBlock.module.scss";
import Link from "next/link";
import Image from "next/image";
import subcategory1 from "@/assets/images/subcategory1.png";
import subcategory2 from "@/assets/images/subcategory2.png";
import subcategory3 from "@/assets/images/subcategory3.png";
import subcategory4 from "@/assets/images/subcategory4.png";
import subcategory5 from "@/assets/images/subcategory5.png";

const CategoriesBlock = ({ isTitle = true }: { isTitle?: boolean }) => {
  return (
    <section className={styles.container}>
      {isTitle && (
        <h2 className={clsx(styles.title, "h2")}>Каталог продукции</h2>
      )}

      <div className={styles.categories}>
        <Link
          href="/catalog/road-maintenance-equipment/1"
          className={clsx(styles.category, "h4")}
        >
          <Image src={subcategory1} alt="subcategory1" />
          <span>Отвалы</span>
        </Link>

        <Link
          href="/catalog/plane-maintenance-equipment/2"
          className={clsx(styles.category, "h4")}
        >
          <Image src={subcategory2} alt="subcategory2" />
          <span>Косилки, кусторезы, щётки дорожные</span>
        </Link>
        <Link
          href="/catalog/plane-maintenance-equipment/3"
          className={clsx(styles.category, "h4")}
        >
          <Image src={subcategory3} alt="subcategory3" />
          <span>
            Оборудование для ремонта и восстановления асфальтобетонного покрытия
          </span>
        </Link>
        <Link
          href="/catalog/plane-maintenance-equipment/4"
          className={clsx(styles.category, "h4")}
        >
          <Image src={subcategory4} alt="subcategory4" />
          <span>Пескоразбрасыватель</span>
        </Link>
        <Link
          href="/catalog/plane-maintenance-equipment/5"
          className={clsx(styles.category, "h4")}
        >
          <Image src={subcategory5} alt="subcategory5" />
          <span>Контейнера</span>
        </Link>
      </div>
    </section>
  );
};

export default CategoriesBlock;
