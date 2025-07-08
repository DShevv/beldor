import Image, { StaticImageData } from "next/image";
import styles from "./NewsCard.module.scss";
import Link from "next/link";
import clsx from "clsx";

interface NewsCardProps {
  title: string;
  date: string;
  tag: string;
  image: string | StaticImageData;
  link: string;
}

const NewsCard = ({ title, date, tag, image, link }: NewsCardProps) => {
  return (
    <Link className={styles.container} href={link}>
      <div className={clsx(styles.tag, "body-2")}>{tag}</div>
      <Image src={image} alt={title} />
      <div className={clsx(styles.title, "h3")}>{title}</div>

      <div className={styles.footer}>
        <div className={clsx(styles.button, "body-5")}>читать новость</div>
        <div className={clsx(styles.date, "body-5")}>{date}</div>
      </div>
    </Link>
  );
};

export default NewsCard;
