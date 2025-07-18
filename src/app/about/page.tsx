import FirstBlock from "@/blocks/FirstBlock/FirstBlock";
import SeoBlock from "@/blocks/SeoBlock/SeoBlock";
import Feedback from "@/blocks/Feedback/Feedback";
import aboutBg from "@/assets/images/about.jpg";
import ServiceInfo from "@/blocks/ServiceInfo/ServiceInfo";
import aboutBlock from "@/assets/images/about-block.png";
import description from "@/assets/images/description.png";
import styles from "./page.module.scss";
import ManufactureSupplies from "@/blocks/ManufactureSupplies/ManufactureSupplies";
import HistoryBlock from "@/blocks/HistoryBlock/HistoryBlock";
import RewardsSlider from "@/blocks/RewardsSlider/RewardsSlider";
import VideoBlock from "@/blocks/VideoBlock/VideoBlock";
import ManagementSlider from "@/blocks/ManagmentSlider/ManagementSlider";
import VacanciesSlider from "@/blocks/VacanciesSlider/VacanciesSlider";
import AdvantagesBlock from "@/blocks/AdvantagesBlock/AdvantagesBlock";
import GallerySlider from "@/blocks/GallerySlider/GallerySlider";

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
];

const AboutPage = () => {
  return (
    <main>
      <FirstBlock
        image={aboutBg}
        title="О нас"
        breadcrumbsItems={[
          { title: "Главная", href: "/" },
          { title: "О нас", href: "/about" },
        ]}
      />
      <div className="wrapper">
        <ServiceInfo
          title="О компании"
          image={aboutBlock}
          className={styles.about}
        >
          Филиал «Белдортехника» ОАО «Минский завод гражданской авиации № 407» —
          ведущий производитель дорожно-строительной техники с 1991 года.
          Специализируется на разработке и модернизации оборудования
          для строительства, ремонта и содержания автомобильных дорог. Оснащён
          современной производственной базой, квалифицированными кадрами
          (80 сотрудников) и сертифицирован по международным стандартам качества
          (СТБ ISO 9001, 14001, 45001).
        </ServiceInfo>
        <ManufactureSupplies title="Производственные мощности" items={items} />
        <HistoryBlock />
      </div>
      <RewardsSlider />

      <div className="wrapper">
        <VideoBlock title="Видеопрезентация компании" />
        <ManagementSlider />
        <VacanciesSlider />
        <AdvantagesBlock />
        <GallerySlider />
        <SeoBlock />
        <Feedback />
      </div>
    </main>
  );
};

export default AboutPage;
