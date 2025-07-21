import Link from "next/link";
import styles from "./ProductCard.module.scss";
import { ProductT } from "@/types/types";
import clsx from "clsx";
import Image from "next/image";
import MainButton from "../Buttons/MainButton/MainButton";

const ProductCard = ({
  className,
  product,
}: {
  className?: string;
  product: ProductT;
}) => {
  return (
    <Link
      href="/catalog/road-maintenance-equipment/1/product"
      className={clsx(styles.container, className)}
    >
      <Image src={product.image} alt={product.name} />

      <div className={styles.caption}>
        <div className={clsx("body-2", styles.name)}>{product.name}</div>
        <div className={styles.specifications}>
          {product.specifications.map((specification, index) => (
            <div key={index} className={styles.specification}>
              <div className={clsx("body-4", styles.specificationName)}>
                {specification.name}
              </div>
              <div className={clsx("body-5", styles.specificationValue)}>
                {specification.value}
              </div>
            </div>
          ))}
        </div>
        <MainButton className={styles.button}>Подробнее</MainButton>
      </div>
    </Link>
  );
};

export default ProductCard;
