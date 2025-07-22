"use client";
import clsx from "clsx";
import styles from "./ProductInfo.module.scss";
import { ProductT } from "@/types/types";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import globalStore from "@/stores/global-store";

const ProductInfo = ({ product }: { product: ProductT }) => {
  const { popupStore } = globalStore;
  const { openPopup } = popupStore;

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

      <MainButton
        className={styles.button}
        onClick={() => openPopup("order", product)}
      >
        Заказать
      </MainButton>
    </div>
  );
};

export default ProductInfo;
