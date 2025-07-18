import Image, { StaticImageData } from "next/image";
import styles from "./DescriptionCard.module.scss";
import clsx from "clsx";

interface DescriptionCardProps {
  title: string;
  image: string | StaticImageData;
  description: string;
  specializations: {
    name: string;
    value: string;
  }[];
}

const DescriptionCard = ({
  title,
  image,
  description,
  specializations,
}: DescriptionCardProps) => {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.title, "h3")}>{title}</div>

      <div className={styles.content}>
        <Image src={image} alt={title} className={styles.image} />
        <div className={styles.caption}>
          <div className={clsx(styles.description, "body-3")}>
            {description}
          </div>
          <div className={styles.specializations}>
            {specializations.map((specialization, index) => (
              <div className={styles.specialization} key={index}>
                <div className={clsx(styles.name, "body-5")}>
                  {specialization.name}
                </div>
                <div className={clsx(styles.value, "body-4")}>
                  {specialization.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
