import Feedback from "@/blocks/Feedback/Feedback";
import FirstBlock from "@/blocks/FirstBlock/FirstBlock";
import SeoBlock from "@/blocks/SeoBlock/SeoBlock";
import SubcategoryPage from "@/blocks/SubcategoryPage/SubcategoryPage";
import subcategory1 from "@/assets/images/subcategory1.png";
import styles from "./page.module.scss";
import ProductGallery from "@/blocks/ProductGallery/ProductGallery";
import product1 from "@/assets/images/product.png";
import ProductInfo from "@/blocks/ProductInfo/ProductInfo";
import ProductTabs from "@/blocks/ProductTabs/ProductTabs";
import SameProducts from "@/blocks/SameProducts/SameProducts";

const product = {
  id: 1,
  name: "Боковой отвал НО-78-03",
  image: product1,
  sku: "1234567890",
  specifications: [
    { name: "Ширина отвала, мм:", value: "3000" },
    { name: "ТУ РБ:", value: "ТУ РБ 100135303" },
    { name: "Ширина отвала, мм:", value: "3000" },
  ],
  description:
    "Боковой отвал НО-78–03 — специализированное оборудование, разработанное для эффективной уборки снега в рамках зимнего содержания автомобильных дорог, магистралей, а также придомовых территорий, парковок и промышленных площадок. Отвал монтируется на шасси грузового автомобиля МАЗ 5516 и его модификации, что обеспечивает мобильность и возможность оперативной очистки больших площадей.",
};

const Page = async ({
  params,
}: {
  params: Promise<{ category: string; slug: string[] }>;
}) => {
  const { category, slug } = await params;

  console.log(category, slug);

  if (slug[slug.length - 1] === "1") {
    return <SubcategoryPage />;
  }

  return (
    <main>
      <FirstBlock
        image={subcategory1}
        title="Боковой отвал НО-78-03"
        breadcrumbsItems={[
          { title: "Главная", href: "/" },
          { title: "Каталог", href: "/catalog" },
          {
            title: "Оборудование для обслуживания дорог",
            href: "/catalog/road-maintenance-equipment",
          },
          { title: "Отвалы", href: "/catalog/road-maintenance-equipment/1" },
          {
            title: "Боковой отвал НО-78-03",
            href: "/catalog/road-maintenance-equipment/1/product",
          },
        ]}
      />
      <div className={"wrapper"}>
        <div className={styles.product}>
          <ProductGallery
            images={[
              product1,
              product1,
              product1,
              product1,
              product1,
              product1,
              product1,
              product1,
              product1,
            ]}
          />

          <ProductInfo product={product} />
        </div>
        <ProductTabs product={product} />
        <SameProducts />
        <SeoBlock />
        <Feedback />
      </div>
    </main>
  );
};

export default Page;
