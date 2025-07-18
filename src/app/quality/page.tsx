import FirstBlock from "@/blocks/FirstBlock/FirstBlock";
import SeoBlock from "@/blocks/SeoBlock/SeoBlock";
import Feedback from "@/blocks/Feedback/Feedback";
import aboutBg from "@/assets/images/about.jpg";
import ServiceInfo from "@/blocks/ServiceInfo/ServiceInfo";
import aboutBlock from "@/assets/images/history.png";
import styles from "./page.module.scss";
import AdvantagesBlock from "@/blocks/AdvantagesBlock/AdvantagesBlock";
import GallerySlider from "@/blocks/GallerySlider/GallerySlider";
import ManagementSystem from "@/blocks/ManagementSystem/ManagementSystem";

const AboutPage = () => {
  return (
    <main>
      <FirstBlock
        image={aboutBg}
        title="Качество продукции"
        breadcrumbsItems={[
          { title: "Главная", href: "/" },
          { title: "Качество продукции", href: "/quality" },
        ]}
      />
      <div className="wrapper">
        <ServiceInfo
          title="Принципы качества продукции"
          image={aboutBlock}
          className={styles.quality}
        >
          Филиал «Белдортехника» гарантирует выпуск высококачественной
          и долговечной техники за счёт:{" "}
          <ul>
            <li>
              Внедрения автоматизированных систем управления и новых технологий.
            </li>
            <li>Использования сертифицированных комплектующих и материалов.</li>
            <li>
              Минимизации воздействия на экологию и создания безопасных условий
              труда.
            </li>
            <li>
              Ключевые ориентиры: ориентация на потребности клиентов, инновации,
              ресурсосбережение.
            </li>
          </ul>
        </ServiceInfo>
      </div>
      <ManagementSystem>
        <h3>Система менеджмента качества (СМК)</h3>
        <ul>
          <li>
            Соответствует стандартам СТБ ISO 9001-2015, 14001-2017, 45001-2020.
          </li>
          <li>
            Оптимизирует управление процессами, обеспечивает стабильность
            качества и долгосрочное развитие.
          </li>
        </ul>
        <h3>Система управления окружающей средой (СУОС)</h3>
        <ul>
          <li>Снижение отходов и энергопотребления.</li>
          <li>
            Выполнение природоохранного законодательства РБ. Подтверждена
            сертификатом СТБ ISO 14001-2017.
          </li>
        </ul>

        <h3>Система управления охраной труда (СУОТ)</h3>
        <ul>
          <li>Соответствует стандарту СТБ 45001-2020.</li>
          <li>
            Включает регулярный мониторинг условий труда и обучение сотрудников.
          </li>
        </ul>
      </ManagementSystem>

      <div className="wrapper">
        <AdvantagesBlock />
        <GallerySlider />
        <SeoBlock />
        <Feedback />
      </div>
    </main>
  );
};

export default AboutPage;
