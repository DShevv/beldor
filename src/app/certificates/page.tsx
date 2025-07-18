import FirstBlock from "@/blocks/FirstBlock/FirstBlock";
import SeoBlock from "@/blocks/SeoBlock/SeoBlock";
import Feedback from "@/blocks/Feedback/Feedback";
import aboutBg from "@/assets/images/about.jpg";
import ServiceInfo from "@/blocks/ServiceInfo/ServiceInfo";
import aboutBlock from "@/assets/images/admin.png";
import styles from "./page.module.scss";
import ManufactureSupplies from "@/blocks/ManufactureSupplies/ManufactureSupplies";
import description from "@/assets/images/description.png";

const items = [
  {
    image: description,
    title: "Технологии",
    description:
      "Компания выполняет полный цикл металлообработки: раскрой металла (включая ЧПУ), гибку, механическую обработку точных и крупногабаритных деталей, а также термообработку, сварку, сборку и окраску.",
  },
  {
    image: aboutBg,
    title: "Оборудование",
    description:
      "Более 60 единиц: фрезерные станки DECKEL MAXO, электроэрозионные установки (AXCERON, ROBOFIL), плазменная резка.",
  },
  {
    image: description,
    title: "Материалы",
    description:
      "Комплектующие из Беларуси, России, Европейского Союза (Польша, Германия, Италия).",
  },
  {
    image: description,
    title: "Материалы",
    description:
      "Комплектующие из Беларуси, России, Европейского Союза (Польша, Германия, Италия).",
  },
];

const CertificatesPage = () => {
  return (
    <main className={styles.wrapper}>
      <FirstBlock
        image={aboutBg}
        title="Административные процедуры"
        breadcrumbsItems={[
          { title: "Главная", href: "/" },
          { title: "Административные процедуры", href: "/certificates" },
        ]}
      />
      <div className="wrapper">
        <ServiceInfo
          title="О процедурах"
          image={aboutBlock}
          className={styles.certificates}
        >
          В Беларуси административные процедуры в строительстве касаются всего
          процесса от проектирования до ввода в эксплуатацию объектов.
          Они включают в себя получение разрешительной документации,
          согласования, выдачу свидетельств и заключений, а также процедуру
          ввода объекта в эксплуатацию.
        </ServiceInfo>

        <ManufactureSupplies
          title="Особенности"
          description="Основные особенности административных процедур в строительстве:"
          items={items}
        />

        <SeoBlock />
        <Feedback />
      </div>
    </main>
  );
};

export default CertificatesPage;
