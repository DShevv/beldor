"use client";
import clsx from "clsx";
import styles from "./SubcategoryPage.module.scss";
import Dropdown from "@/components/Dropdown";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import product1 from "@/assets/images/product.png";
import Pagination from "@/components/Pagination/Pagination";
import { SvgCross, SvgFilters } from "@/assets/icons/svgs";
import Filters from "../Filters/Filters";
import CatalogMap from "../CatalogMap/CatalogMap";

const SubcategoryPage = () => {
  const [sort, setSort] = useState("asc");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  console.log(sort);

  useEffect(() => {
    if (isFiltersOpen) {
      const scrollPosition = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.overflowY = "scroll";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.position = "";
        document.body.style.overflowY = "auto";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollPosition);
      };
    }
  }, [isFiltersOpen]);

  return (
    <section className={styles.container}>
      <div className={clsx(styles.popup, { [styles.active]: isFiltersOpen })}>
        <div className={clsx(styles.title, "h1")}>Фильтр</div>
        <button
          className={styles.close}
          onClick={() => setIsFiltersOpen(false)}
        >
          <SvgCross />
        </button>
        <Filters />
        <CatalogMap />
      </div>

      <div className={styles.header}>
        <div className={clsx(styles.count, "body-7")}>
          Товаров: <span>9</span> из 24
        </div>
        <div className={styles.sort}>
          <Dropdown
            options={[
              { value: "asc", label: "По алфавиту А-Я" },
              { value: "desc", label: "По алфавиту Я-А" },
              { value: "price-asc", label: "По цене (возрастание)" },
              { value: "price-desc", label: "По цене (убывание)" },
            ]}
            defaultValue="asc"
            onSelect={(value) => setSort(value)}
            className={styles.dropdown}
          />
          <button
            className={styles.filters}
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            <SvgFilters />
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <ProductCard
          product={{
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
          }}
        />
        <ProductCard
          product={{
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
          }}
        />
        <ProductCard
          product={{
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
          }}
        />
        <ProductCard
          product={{
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
          }}
        />
        <ProductCard
          product={{
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
          }}
        />
        <ProductCard
          product={{
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
          }}
        />
        <ProductCard
          product={{
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
          }}
        />
        <ProductCard
          product={{
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
          }}
        />
        <ProductCard
          product={{
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
          }}
        />
      </div>
      <Pagination
        current={1}
        max={10}
        maxPerView={5}
        className={styles.pagination}
      />
    </section>
  );
};

export default SubcategoryPage;
