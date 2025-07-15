import clsx from "clsx";
import styles from "./GalleryBlock.module.scss";
import Image from "next/image";
import category1 from "@/assets/images/category1.png";

const GalleryBlock = () => {
  return (
    <section className={styles.container}>
      <h2 className={clsx(styles.title, "h3")}>Фотогалерея:</h2>

      <div className={styles.photos}>
        <Image src={category1} alt="category1" />
        <Image src={category1} alt="category1" />
        <Image src={category1} alt="category1" />
        <Image src={category1} alt="category1" />
        <Image src={category1} alt="category1" />
        <Image src={category1} alt="category1" />
        <Image src={category1} alt="category1" />
        <Image src={category1} alt="category1" />
      </div>
    </section>
  );
};

export default GalleryBlock;
