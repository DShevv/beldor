"use client";
import clsx from "clsx";
import styles from "./ProductTabs.module.scss";
import { ProductT } from "@/types/types";
import { useState } from "react";
import MainButton from "@/components/Buttons/MainButton/MainButton";

const ProductTabs = ({ product }: { product: ProductT }) => {
  const [activeTab, setActiveTab] = useState<string>("description");
  return (
    <section className={styles.container}>
      <div className={styles.tabs}>
        <MainButton
          variant="dark"
          className={clsx(styles.tab, {
            [styles.active]: activeTab === "description",
          })}
          onClick={() => setActiveTab("description")}
        >
          Информация о товаре
        </MainButton>
        <MainButton
          variant="dark"
          className={clsx(styles.tab, {
            [styles.active]: activeTab === "documents",
          })}
          onClick={() => setActiveTab("documents")}
        >
          Сопутствующие документы
        </MainButton>
      </div>

      <div className={styles.content}>
        {activeTab === "description" && (
          <div className={clsx("body-3", styles.description)}>
            {product.description}
          </div>
        )}
        {activeTab === "documents" && (
          <div className={clsx("body-3", styles.documents)}>Документация</div>
        )}
      </div>
    </section>
  );
};

export default ProductTabs;
