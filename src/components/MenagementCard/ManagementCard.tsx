import Image, { StaticImageData } from "next/image";
import styles from "./ManagementCard.module.scss";
import clsx from "clsx";

interface ServiceCardProps {
  title: string;
  image: string | StaticImageData;
  position: string;
  active?: boolean;
}

const ManagementCard = ({
  title,
  image,
  position,
  active,
}: ServiceCardProps) => {
  return (
    <div className={clsx(styles.container, { [styles.active]: active })}>
      <Image src={image} alt={title} />

      <div className={clsx(styles.title, "h5")}>{title}</div>

      <div className={clsx(styles.position, "body-6")}>{position}</div>
    </div>
  );
};

export default ManagementCard;
