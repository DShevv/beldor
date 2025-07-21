import clsx from "clsx";
import styles from "./ProductInfo.module.scss";
import { ProductT } from "@/types/types";
import MainButton from "@/components/Buttons/MainButton/MainButton";

const ProductInfo = ({ product }: { product: ProductT }) => {
  return (
    <div className={styles.container}>
      <h2 className={clsx(styles.title, "h3")}>Технические характеристики</h2>
      <div className={styles.table}>
        {product.specifications.map((specification, index) => (
          <div className={styles.row} key={index}>
            <p className={clsx("body-2", styles.cell)}>{specification.name}</p>
            <p className={clsx("body-3", styles.cell)}>{specification.value}</p>
          </div>
        ))}
      </div>

      <MainButton className={styles.button}>Заказать</MainButton>
    </div>
  );
};

export default ProductInfo;
