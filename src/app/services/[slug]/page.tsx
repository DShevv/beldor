import FirstBlock from "@/blocks/FirstBlock/FirstBlock";
import SeoBlock from "@/blocks/SeoBlock/SeoBlock";
import Feedback from "@/blocks/Feedback/Feedback";
import newsBg from "@/assets/images/news.png";
import styles from "./page.module.scss";
import clsx from "clsx";
import serviceItem from "@/assets/images/service-item.png";
import ServiceInfo from "@/blocks/ServiceInfo/ServiceInfo";

const NewsPage = () => {
  return (
    <main>
      <FirstBlock
        image={newsBg}
        title="Металлообработка"
        breadcrumbsItems={[
          { title: "Главная", href: "/" },
          { title: "Услуги", href: "/services" },
          { title: "Металлообработка", href: "/services/metal-processing" },
        ]}
      />
      <div className="wrapper">
        <ServiceInfo
          title="Об услуге"
          description="Филиал «Белдортехника» осуществляет обработку металла на профессиональном оборудовании: выполняет газоплазменную резку, электрогазосварку, фрезерные работы на станках с ЧПУ DECKEL MAXO 60 и 80, электроэрозионную обработку (AXCERON, ROBOFIL 290p), а также гибку и вальцовку крупногабаритных обечаек. Компания изготавливает металлоконструкции по индивидуальным чертежам, ремонтирует дорожно-строительную технику собственного и стороннего производства, а также обеспечивает грузоперевозки по Беларуси с использованием автомобилей МАЗ грузоподъёмностью до 20 тонн, включая длинномеры и самосвалы."
          image={serviceItem}
        />
        <SeoBlock />
        <Feedback />
      </div>
    </main>
  );
};

export default NewsPage;
