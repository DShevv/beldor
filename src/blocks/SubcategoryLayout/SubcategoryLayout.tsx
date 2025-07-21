import FirstBlock from "@/blocks/FirstBlock/FirstBlock";
import subcategory1 from "@/assets/images/subcategory1.png";
import SeoBlock from "@/blocks/SeoBlock/SeoBlock";
import Feedback from "@/blocks/Feedback/Feedback";
import styles from "./SubcategoryLayout.module.scss";
import SubCategoriesSlider from "../SubCategoriesSlider/SubCategoriesSlider";
import Filters from "../Filters/Filters";
import CatalogMap from "../CatalogMap/CatalogMap";

const SubcategoryLayout = async ({
  children,
  category,
  slug,
}: {
  children: React.ReactNode;
  category: string;
  slug: string[];
}) => {
  console.log(category, slug);

  return (
    <main>
      <FirstBlock
        image={subcategory1}
        title="Отвалы"
        breadcrumbsItems={[
          { title: "Главная", href: "/" },
          { title: "Каталог", href: "/catalog" },
          {
            title: "Оборудование для обслуживания дорог",
            href: "/catalog/road-maintenance-equipment",
          },
          { title: "Отвалы", href: "/catalog/road-maintenance-equipment/1" },
        ]}
      />
      <div className={"wrapper"}>
        <SubCategoriesSlider />
        <div className={styles.wrapper}>
          <div className={styles.filters}>
            <Filters />
            <CatalogMap />
          </div>
          <div className={styles.content}>
            {children}
            <SeoBlock />
          </div>
        </div>
        <Feedback />
      </div>
    </main>
  );
};

export default SubcategoryLayout;
