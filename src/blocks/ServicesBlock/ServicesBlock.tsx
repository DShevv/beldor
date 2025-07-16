import styles from "./ServicesBlock.module.scss";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import image from "@/assets/images/category1.png";

const ServicesBlock = () => {
  return (
    <section className={styles.container}>
      <ServiceCard
        title="Металлообработка"
        image={image}
        link="/services/metal-processing"
      />
      <ServiceCard
        title="Плазменная резка"
        image={image}
        link="/services/plasma-cutting"
      />
      <ServiceCard
        title="Пункт приёма ЯР-4М, утративших потребительские свойства"
        image={image}
        link="/services/yar-4m"
      />
    </section>
  );
};

export default ServicesBlock;
