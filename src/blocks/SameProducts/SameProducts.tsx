import clsx from "clsx";
import styles from "./SameProducts.module.scss";

import ProductCard from "@/components/ProductCard/ProductCard";
import product1 from "@/assets/images/product.png";

const product = {
  id: 1,
  name: "Боковой отвал НО-78-03",
  image: product1,
  sku: "1234567890",
  specifications: [
    { name: "Ширина отвала, мм:", value: "3000" },
    { name: "ТУ РБ:", value: "ТУ РБ 100135303" },
    { name: "Ширина отвала, мм:", value: "3000" },
  ],
  description:
    "Боковой отвал НО-78–03 — специализированное оборудование, разработанное для эффективной уборки снега в рамках зимнего содержания автомобильных дорог, магистралей, а также придомовых территорий, парковок и промышленных площадок. Отвал монтируется на шасси грузового автомобиля МАЗ 5516 и его модификации, что обеспечивает мобильность и возможность оперативной очистки больших площадей.",
};
const SameProducts = () => {
  return (
    <section className={styles.container}>
      <h2 className={clsx(styles.title, "h2")}>Сопутствующие товары</h2>

      <div className={styles.items}>
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
    </section>
  );
};

export default SameProducts;
