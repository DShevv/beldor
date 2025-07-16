import Image, { StaticImageData } from "next/image";
import styles from "./ServiceCard.module.scss";
import Link from "next/link";
import clsx from "clsx";
import MainButton from "../Buttons/MainButton/MainButton";

interface ServiceCardProps {
  title: string;
  image: string | StaticImageData;
  link: string;
}

const ServiceCard = ({ title, image, link }: ServiceCardProps) => {
  return (
    <Link className={styles.container} href={link}>
      <div className={styles.image}>
        <Image src={image} alt={title} />
      </div>
      <div className={clsx(styles.title, "h3")}>{title}</div>

      <MainButton className={styles.button}>Подробнее</MainButton>
    </Link>
  );
};

export default ServiceCard;
